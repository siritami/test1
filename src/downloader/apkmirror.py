import requests
from bs4 import BeautifulSoup
import subprocess
import json
import re

from downloader.github import major_cli_version, cli_exec, patches_exec, json_exec

def download_apk(package_name, app_url, _type, dl_name, version, arch, dpi, os):
    # Step 1: Determine the correct version
    if not version:
        if major_cli_version >= 5:
            # Run CLI command to list patches and their compatible versions
            result = subprocess.run(
                ["java", "-jar", cli_exec, "list-patches", "--with-packages", "--with-versions", patches_exec],
                capture_output=True, text=True
            )
            compatible_versions = extract_version_from_patch(result.stdout, package_name)
            version = compatible_versions if compatible_versions else "latest"
        else:
            with open(json_exec, 'r') as f:
                patches = json.load(f)
                compatible_versions = extract_version_from_json(patches, package_name)
                version = compatible_versions if compatible_versions else "latest"
    
    # Step 2: If version is "latest", request the APK Mirror page
    if version == "latest":
        headers = {
            "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (HTML, like Gecko) Chrome/96.0.4664.93 Safari/537.36",
            "Authorization": "Basic YXBpLWFwa3VwZGF0ZXI6cm01cmNmcnVVakt5MDRzTXB5TVBKWFc4",
            "Content-Type": "application/json",
        }
        
        # Load the app_url page to find the list_url
        list_url = get_list_url(app_url)
        
        # Extract highest version from the APKMirror page
        highest_version = get_highest_version(list_url)
        _version = re.sub(r'\.', '-', highest_version)
        
        # Construct the app URL with the selected version
        updated_app_url = app_url.replace(version, _version)
        
        # Fetch the APK download URL
        download_url = get_download_url(updated_app_url, arch, dpi, os)
        
        # Download APK from the constructed URL
        download_apk_from_url(download_url, dl_name)
        
    else:
        print(f"Specified version {version} is not 'latest', proceeding without scraping.")

def extract_version_from_patch(patch_output, package_name):
    compatible_versions = []
    for line in patch_output.split("\n"):
        if package_name in line:
            versions = re.findall(r"\d+\.\d+\.\d+\.\d+", line)
            if versions:
                compatible_versions.extend(versions)
    return max(compatible_versions) if compatible_versions else None

def extract_version_from_json(patches, package_name):
    for patch in patches:
        for compatible_package in patch.get('compatiblePackages', []):
            if compatible_package['name'] == package_name:
                versions = compatible_package.get('versions', [])
                return max(versions) if versions else None
    return None

def get_list_url(app_url):
    response = requests.get(app_url)
    soup = BeautifulSoup(response.text, 'html.parser')
    link = soup.find('a', class_='fontBlack', href=True)
    if link:
        return f"https://www.apkmirror.com{link['href']}"
    return None

def get_highest_version(list_url):
    response = requests.get(list_url)
    soup = BeautifulSoup(response.text, 'html.parser')
    versions = []
    for version_tag in soup.find_all('h5', class_='appRowTitle'):
        version = re.search(r'(\d+\.\d+\.\d+\.\d+)', version_tag.text)
        if version:
            versions.append(version.group(0))
    return max(versions, key=lambda v: list(map(int, v.split('.')))) if versions else None

def get_download_url(app_url, arch, dpi, os):
    response = requests.get(app_url)
    soup = BeautifulSoup(response.text, 'html.parser')
    variants_table = soup.find('div', class_='table topmargin variants-table')
    download_link = None
    for row in variants_table.find_all('div', class_='table-row'):
        columns = row.find_all('div', class_='table-cell')
        if len(columns) > 3:
            arch_value = columns[1].text.strip().lower()
            if arch in arch_value:
                dpi_value = columns[2].text.strip()
                if dpi in dpi_value:
                    download_link = columns[3].find('a', class_='downloadLink')['href']
                    break
    return f"https://www.apkmirror.com{download_link}" if download_link else None

def download_apk_from_url(download_url, dl_name):
    response = requests.get(download_url, stream=True)
    with open(dl_name, 'wb') as f:
        for chunk in response.iter_content(chunk_size=1024):
            if chunk:
                f.write(chunk)
    print(f"Downloaded APK saved as {dl_name}")