import os
import requests
from bs4 import BeautifulSoup
import json

script_dir = os.path.dirname(__file__)
src_dir = os.path.abspath(os.path.join(script_dir, '..', '..', 'src'))
sys.path.append(src_dir)

from downloader.github import major_cli_version, cli_exec, patches_exec, json_exec

def download_apk(package_name, app_url, type, dl_name, version, arch, dpi, os):
    # Step 1: Find version
    if not version:
        if major_cli_version >= 5:
            # Run shell command to get patch information
            import subprocess
            result = subprocess.run(['java', '-jar', cli_exec, 'list-patches', '--with-packages', '--with-versions', patches_exec], capture_output=True, text=True)
            output = result.stdout
            
            # Parse output to find the latest version
            lines = output.splitlines()
            version_found = False
            for line in lines:
                if f"Package name: {package_name}" in line:
                    version_found = True
                elif version_found and "Compatible versions:" in line:
                    versions = line.strip().split(':')[1].strip().split()
                    version = max(versions) if versions else "latest"
                    version_found = False
                    break
        else:
            # Load JSON file for version information
            with open(json_exec, 'r') as f:
                data = json.load(f)
                for item in data:
                    for package in item.get('compatiblePackages', []):
                        if package.get('name') == package_name:
                            versions = package.get('versions', [])
                            version = max(versions) if versions else "latest"
                            break

    # Step 2: If version is 'latest', update it from the website
    if version == "latest":
        request_header = {
            "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (HTML, like Gecko) Chrome/96.0.4664.93 Safari/537.36",
            "Authorization": "Basic YXBpLWFwa3VwZGF0ZXI6cm01cmNmcnVVakt5MDRzTXB5TVBKWFc4",
            "Content-Type": "application/json",
        }
        response = requests.get(app_url, headers=request_header)
        soup = BeautifulSoup(response.text, 'html.parser')
        
        # Find list_url from the page content
        list_url_element = soup.find('a', class_='fontBlack')
        if list_url_element:
            list_url = "https://www.apkmirror.com" + list_url_element['href']
            # Fetch the latest uploads page
            list_response = requests.get(list_url, headers=request_header)
            list_soup = BeautifulSoup(list_response.text, 'html.parser')
            
            # Find the latest version
            latest_version = list_soup.find('span', class_='infoSlide-value')
            if latest_version:
                version = latest_version.text.strip().replace('.', '-')
        
        # Update app_url with the new version if necessary
        app_url = app_url.rsplit('/', 2)[0] + f'/{version}-release/'

    # Step 3: Navigate to download page
    response = requests.get(app_url, headers=request_header)
    soup = BeautifulSoup(response.text, 'html.parser')
    
    # Find the appropriate row in the variants table
    table = soup.find('div', class_='variants-table')
    if table:
        rows = table.find_all('div', class_='table-row', recursive=False)
        for row in rows:
            cells = row.find_all('div', class_='table-cell', recursive=False)
            
            # Check type, architecture, OS, and DPI
            if (type == "apk" and 'APK' in cells[0].text) or (type == "bundle" and 'BUNDLE' in cells[0].text):
                if (not arch or arch in cells[1].text) and \
                   (not os or os in cells[2].text) and \
                   (not dpi or dpi in cells[3].text):
                    
                    # Extract download link
                    download_link = cells[0].find('a', class_='accent_color')
                    if download_link:
                        next_url = "https://www.apkmirror.com" + download_link['href']
                        break
        else:
            print(f"No matching APK found for the specified criteria.")
            return

    # Step 4: Navigate to the actual download page
    response = requests.get(next_url, headers=request_header)
    soup = BeautifulSoup(response.text, 'html.parser')
    
    download_button = soup.find('a', class_='downloadButton')
    if download_button:
        direct_download = "https://www.apkmirror.com" + download_button['href']
        
        # Step 5: Download the APK
        download_response = requests.get(direct_download, headers=request_header, stream=True)
        download_response.raise_for_status()
        
        # Ensure download folder exists
        download_folder = "download_apk"
        if not os.path.exists(download_folder):
            os.makedirs(download_folder)
        
        file_path = os.path.join(download_folder, f"{dl_name}.apk")
        with open(file_path, 'wb') as file:
            for chunk in download_response.iter_content(chunk_size=8192):
                file.write(chunk)
        
        print(f"APK downloaded and saved as {file_path}")
    else:
        print("Could not find the download button.")

# Example usage would be like:
# download_apk("com.google.android.youtube", "https://www.apkmirror.com/apk/google-inc/youtube/youtube-19-47-41-release/", "apk", "youtube", "", "", "", "")