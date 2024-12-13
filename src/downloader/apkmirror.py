import os
import requests
from bs4 import BeautifulSoup
import json

def download_apk(package_name, app_url, type, dl_name, version, arch, dpi, os):
    download_path = 'download_apk'
    if not os.path.exists(download_path):
        os.makedirs(download_path)

    # Step 1: Find version
    global_version = version
    if not global_version:
        from downloader.github import major_cli_version
        if major_cli_version >= 5:
            cli_exec = find_cli_exec()
            patches_exec = find_patches_exec()
            if cli_exec and patches_exec:
                result = run_command(f"java -jar {cli_exec} list-patches --with-packages --with-versions {patches_exec}")
                compatible_versions = extract_versions(result, package_name)
                global_version = max(compatible_versions) if compatible_versions else 'latest'
        else:
            json_exec = find_json_exec()
            if json_exec:
                with open(json_exec, 'r') as file:
                    data = json.load(file)
                    for item in data:
                        if item.get('compatiblePackages'):
                            for package in item['compatiblePackages']:
                                if package.get('name') == package_name:
                                    global_version = max(package.get('versions', ['latest']))
                                    break

    # Step 2: If version is 'latest', fetch the latest from APKMirror
    if global_version == 'latest':
        list_url = get_list_url(app_url)
        global_version = fetch_latest_version(list_url)
        _version = global_version.replace('.', '-')
        app_url = app_url.replace('19-47-41', _version)  # Example version replacement

    # Step 3: Get download link from APKMirror
    download_page_url = get_download_page_url(app_url, type, arch, dpi, os)
    if download_page_url:
        download_link = get_actual_download_link(download_page_url)
        if download_link:
            # Step 4 & 5: Download the APK
            download_file(download_link, f"{download_path}/{dl_name}")

def find_cli_exec():
    for file in os.listdir('download_cli'):
        if 'cli' in file and file.endswith('.jar'):
            return os.path.join('download_cli', file)
    return None

def find_patches_exec():
    for file in os.listdir('download_cli'):
        if 'patches' in file and not file.endswith('.json'):
            return os.path.join('download_cli', file)
    return None

def find_json_exec():
    for file in os.listdir('download_cli'):
        if file.endswith('.json'):
            return os.path.join('download_cli', file)
    return None

def run_command(command):
    import subprocess
    try:
        result = subprocess.check_output(command, shell=True, text=True, stderr=subprocess.STDOUT)
        return result
    except subprocess.CalledProcessError as e:
        print(f"Command failed: {e.output}")
        return ""

def extract_versions(output, package_name):
    import re
    versions = []
    for line in output.split('\n'):
        if f'Package name: {package_name}' in line:
            match = re.search(r'Compatible versions:\s*([\d.\s]+)', output[output.index(line):])
            if match:
                versions.extend([v.strip() for v in match.group(1).split()])
    return versions

def get_list_url(app_url):
    response = requests.get(app_url)
    soup = BeautifulSoup(response.text, 'html.parser')
    see_more = soup.find('a', class_='fontBlack')
    if see_more:
        return 'https://www.apkmirror.com' + see_more['href']
    return None

def fetch_latest_version(list_url):
    response = requests.get(list_url)
    soup = BeautifulSoup(response.text, 'html.parser')
    latest_version_element = soup.find('span', class_='infoSlide-value')
    if latest_version_element:
        return latest_version_element.text.strip()
    return 'latest'

def get_download_page_url(app_url, type, arch, dpi, os):
    response = requests.get(app_url)
    soup = BeautifulSoup(response.text, 'html.parser')
    table = soup.find('div', class_='variants-table')
    if table:
        rows = table.find_all('div', class_='table-row')
        for row in rows:
            cells = row.find_all('div', class_='table-cell')
            if (type == 'apk' and 'APK' in str(cells[0])) or (type == 'bundle' and 'BUNDLE' in str(cells[0])):
                if (not arch or arch in str(cells[1])) and (not os or os in str(cells[2])) and (not dpi or dpi in str(cells[3])):
                    link = cells[0].find('a', class_='accent_color')
                    if link:
                        return 'https://www.apkmirror.com' + link['href']
    return None

def get_actual_download_link(download_page_url):
    response = requests.get(download_page_url)
    soup = BeautifulSoup(response.text, 'html.parser')
    download_button = soup.find('a', class_='downloadButton')
    if download_button:
        next_page = 'https://www.apkmirror.com' + download_button['href']
        response = requests.get(next_page)
        soup = BeautifulSoup(response.text, 'html.parser')
        final_link = soup.find('a', id='download-link')
        if final_link:
            return 'https://www.apkmirror.com' + final_link['href']
    return None

def download_file(url, save_path):
    with requests.get(url, stream=True) as r:
        r.raise_for_status()
        with open(save_path, 'wb') as f:
            for chunk in r.iter_content(chunk_size=8192):
                f.write(chunk)

# Note: This script assumes you have the necessary libraries installed (requests, BeautifulSoup4).
# Also, make sure you have the correct paths for CLI, patches, and JSON files in the 'download_cli' folder.