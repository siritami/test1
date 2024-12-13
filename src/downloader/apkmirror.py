import os
import re
import requests
from bs4 import BeautifulSoup

def find_files(directory, pattern):
    """Find files matching a pattern in a directory."""
    for root, _, files in os.walk(directory):
        for file in files:
            if re.match(pattern, file):
                yield os.path.join(root, file)

def parse_patches_output(output, package_name):
    """Parse output of `list-patches` to find the highest compatible version."""
    pattern = rf"Package name: {package_name}\\n.*?Compatible versions:(.*?)\\n"
    match = re.search(pattern, output, re.DOTALL)
    if not match:
        return "latest"
    versions = re.findall(r"\d+\.\d+\.\d+", match.group(1))
    return max(versions, default="latest")

def parse_json_file(json_path, package_name):
    """Parse JSON file to find the highest compatible version."""
    import json

    with open(json_path, 'r') as file:
        patches = json.load(file)

    for patch in patches:
        for package in patch.get("compatiblePackages", []):
            if package.get("name") == package_name:
                versions = package.get("versions", [])
                return max(versions, default="latest")

    return "latest"

def fetch_latest_version(app_url):
    """Fetch the latest version from APKMirror."""
    headers = {
        "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/96.0.4664.93 Safari/537.36",
        "Authorization": "Basic YXBpLWFwa3VwZGF0ZXI6cm01cmNmcnVVakt5MDRzTXB5TVBKWFc4",
        "Content-Type": "application/json",
    }

    response = requests.get(app_url, headers=headers)
    soup = BeautifulSoup(response.content, 'html.parser')

    list_url_tag = soup.find('a', class_='fontBlack', href=True)
    if not list_url_tag:
        return None

    list_url = "https://www.apkmirror.com" + list_url_tag['href']
    response = requests.get(list_url, headers=headers)
    soup = BeautifulSoup(response.content, 'html.parser')

    versions = []
    for app_row in soup.find_all('div', class_='appRow'):
        title_tag = app_row.find('h5', class_='appRowTitle')
        if title_tag:
            version = re.search(r'\d+\.\d+\.\d+', title_tag.text)
            if version:
                versions.append(version.group())

    return max(versions, default="latest")

def download_apk(package_name, app_url, apk_type, dl_name, version, arch, dpi, package_os):
    download_cli_dir = "download_cli"

    # Locate CLI and patches executables
    cli_exec = next(find_files(download_cli_dir, r".*cli.*\.jar"), None)
    patches_exec = next(find_files(download_cli_dir, r".*patch.*\.jar"), None)
    json_exec = next(find_files(download_cli_dir, r".*\.json"), None)

    if not cli_exec or not patches_exec:
        raise FileNotFoundError("Required CLI or patches executable not found.")

    major_cli_version = int(re.search(r"(\d+)", os.path.basename(cli_exec)).group(1))

    # Determine version
    if not version:
        if major_cli_version >= 5:
            command = f"java -jar {cli_exec} list-patches --with-packages --with-versions {patches_exec}"
            output = os.popen(command).read()
            version = parse_patches_output(output, package_name)
        else:
            version = parse_json_file(json_exec, package_name) if json_exec else "latest"

    # Fetch latest version if set to "latest"
    if version == "latest":
        version = fetch_latest_version(app_url)

    # Format version for URL
    _version = version.replace(".", "-")
    app_url = re.sub(r"youtube-.*?-release", f"youtube-{_version}-release", app_url)

    # Fetch download page
    response = requests.get(app_url)
    soup = BeautifulSoup(response.content, 'html.parser')

    # Select variant
    variants_table = soup.find('div', class_='table topmargin variants-table')
    if not variants_table:
        raise ValueError("Variants table not found on APKMirror.")

    selected_variant_url = None
    for row in variants_table.find_all('div', class_='table-row'):
        cells = row.find_all('div', class_='table-cell')
        if len(cells) < 4:
            continue

        row_arch = cells[1].text.strip()
        row_dpi = cells[3].text.strip()

        if (arch in row_arch) and (dpi in row_dpi or dpi == "nodpi"):
            link = row.find('a', class_='downloadLink')
            if link:
                selected_variant_url = "https://www.apkmirror.com" + link['href']
                break

    if not selected_variant_url:
        raise ValueError("No matching variant found.")

    # Download APK
    response = requests.get(selected_variant_url)
    soup = BeautifulSoup(response.content, 'html.parser')
    download_button = soup.find('a', class_='downloadLink', href=True)

    if not download_button:
        raise ValueError("Download link not found.")

    apk_url = "https://www.apkmirror.com" + download_button['href']
    apk_response = requests.get(apk_url, stream=True)

    with open(dl_name, 'wb') as file:
        for chunk in apk_response.iter_content(chunk_size=1024):
            file.write(chunk)

    print(f"Downloaded APK to {dl_name}")
