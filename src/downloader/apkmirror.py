import os
import re
import requests
from bs4 import BeautifulSoup
from downloader.github import major_cli_version

def download_apk(package_name, app_url, type, dl_name, version, arch, dpi, package_os):
    # Step 1: Find version
    if not version:
        if major_cli_version >= 5:
            # Run shell script to get patch information
            import subprocess
            cli_exec = "download_cli/revanced-cli-5.0.0-all.jar"
            patches_exec = "download_cli/revanced-patches-5.2.0-all.jar"
            result = subprocess.run(["java", "-jar", cli_exec, "list-patches", "--with-packages", "--with-versions", patches_exec], capture_output=True, text=True)
            output = result.stdout
            
            # Parse the output for the package name and compatible versions
            match = re.search(f"Package name: {package_name}\n\s+Compatible versions:\n((?:\s+.*\n)*)", output)
            if match:
                versions = re.findall(r'\s+(\d+\.\d+\.\d+)', match.group(1))
                version = max(versions, key=lambda x: tuple(map(int, x.split('.')))) if versions else "latest"
            else:
                version = "latest"
        else:
            # Use JSON file for version information
            json_exec = "download_cli/patch.json"
            with open(json_exec, 'r') as file:
                data = json.load(file)
            for item in data:
                if item.get('compatiblePackages'):
                    for pkg in item['compatiblePackages']:
                        if pkg['name'] == package_name:
                            version = pkg.get('versions', ['latest'])[-1]
                            break

    # Step 2: Fetch latest version if version is 'latest'
    if version == "latest":
        request_header = {
            "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (HTML, like Gecko) Chrome/96.0.4664.93 Safari/537.36",
            "Authorization": "Basic YXBpLWFwa3VwZGF0ZXI6cm01cmNmcnVVakt5MDRzTXB5TVBKWFc4",
            "Content-Type": "application/json",
        }

        # Fetch the list URL from the app's main page
        response = requests.get(app_url, headers=request_header)
        soup = BeautifulSoup(response.text, 'html.parser')
        list_url = soup.select_one('a.fontBlack[href*="/uploads/?appcategory="]')['href']
        list_url = f"https://www.apkmirror.com{list_url}"

        # Fetch the latest version from the list page
        response = requests.get(list_url, headers=request_header)
        soup = BeautifulSoup(response.text, 'html.parser')
        latest_version = soup.select_one('.infoSlide-value').text.strip()
        version = latest_version.replace('.', '-')
        app_url = app_url.rsplit('/', 1)[0] + f"/youtube-{version}-release/"

    # Step 3: Navigate to the specific version's page
    response = requests.get(app_url, headers=request_header)
    soup = BeautifulSoup(response.text, 'html.parser')

    # Find the correct row based on type, arch, dpi, and package_os
    rows = soup.select('.variants-table .table-row:not(.headerFont)')
    selected_row = None
    for row in rows:
        cells = row.select('.table-cell')
        if (
            (type == "apk" and 'APK' in cells[0].text) or 
            (type == "bundle" and 'BUNDLE' in cells[0].text) and
            (arch == cells[1].text.strip() or (not arch and cells[1].text.strip() == "universal")) and
            (package_os == cells[2].text.strip() or not package_os) and
            (dpi == cells[3].text.strip() or not dpi)
        ):
            selected_row = row
            break

    if selected_row:
        download_link = selected_row.select_one('a.accent_color')['href']
        download_page_url = f"https://www.apkmirror.com{download_link}"

        # Step 4: Get the direct download link from the download page
        response = requests.get(download_page_url, headers=request_header)
        soup = BeautifulSoup(response.text, 'html.parser')
        direct_download = soup.find('a', id='download-link')['href']
        direct_download_url = f"https://www.apkmirror.com{direct_download}"

        # Step 5: Download the APK
        download_folder = "download_apk"
        if not os.path.exists(download_folder):
            os.makedirs(download_folder)
        
        with requests.get(direct_download_url, headers=request_header, stream=True) as r:
            r.raise_for_status()
            with open(os.path.join(download_folder, dl_name), 'wb') as f:
                for chunk in r.iter_content(chunk_size=8192):
                    f.write(chunk)
    else:
        print("No matching APK found for the given criteria.")