import os
import re
import requests
from bs4 import BeautifulSoup
import subprocess

def download_apk(package_name, app_url, type, dl_name, version, arch, dpi, package_os):
    # Define request_header at the start of the function
    request_header = {
        "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/96.0.4664.93 Safari/537.36",
        "Authorization": "Basic YXBpLWFwa3VwZGF0ZXI6cm01cmNmcnVVakt5MDRzTXB5TVBKWFc4",
        "Content-Type": "application/json",
    }

    # Step 1: Determine version if not provided
    cli_exec = next((f for f in os.listdir('download_cli') if 'cli' in f and f.endswith('.jar')), None)
    patches_exec = next((f for f in os.listdir('download_cli') if 'patches' in f and f.endswith('.jar')), None)
    json_exec = next((f for f in os.listdir('download_cli') if f.endswith('.json')), None)

    if cli_exec and patches_exec:
        match = re.search(r'revanced-cli-(\d+\.\d+\.\d+)-all\.jar', cli_exec)
        if match:
            major_cli_version = int(match.group(1).split('.')[0])
        else:
            raise ValueError("Could not determine CLI version.")

        if not version:
            if major_cli_version >= 5:
                result = subprocess.run(["java", "-jar", os.path.join('download_cli', cli_exec), "list-patches", "--with-packages", "--with-versions", os.path.join('download_cli', patches_exec)], 
                                        capture_output=True, text=True, check=True).stdout
                versions = re.findall(f"Package name: {package_name}.*?Compatible versions:\n(.*?)\n", result, re.DOTALL)
                if versions:
                    version_list = [v.strip() for v in versions[0].split('\n') if v.strip()]
                    version = max(version_list, key=lambda x: tuple(map(int, x.split('.')))) if version_list else "latest"
                else:
                    version = "latest"
            else:
                if json_exec:
                    import json
                    with open(os.path.join('download_cli', json_exec), 'r') as json_file:
                        data = json.load(json_file)
                        for item in data:
                            if any(pkg['name'] == package_name for pkg in item.get('compatiblePackages', [])):
                                versions = next(pkg['versions'] for pkg in item['compatiblePackages'] if pkg['name'] == package_name)
                                version = max(versions, key=lambda x: tuple(map(int, x.split('.')))) if versions else "latest"
                                break
                        else:
                            version = "latest"
                else:
                    version = "latest"

    # Step 2: Handle "latest" version
    if version == "latest":
        response = requests.get(app_url, headers=request_header)
        soup = BeautifulSoup(response.text, 'html.parser')
        
        list_url = soup.find('a', class_='fontBlack', href=True)
        if list_url:
            list_url = 'https://www.apkmirror.com' + list_url['href']
            list_response = requests.get(list_url, headers=request_header)
            list_soup = BeautifulSoup(list_response.text, 'html.parser')
            
            latest_version_entry = list_soup.find('h5', class_='appRowTitle')
            if latest_version_entry:
                version = latest_version_entry.find('a', class_='fontBlack').text.split()[1]
    
    # Format version for URL
    _version = version.replace('.', '-')

    # Update app_url with new version
    app_url = app_url.rsplit('/', 2)[0] + f'/youtube-{_version}-release/'
    
    # Step 3: Select appropriate APK or Bundle
    apk_or_bundle_response = requests.get(app_url, headers=request_header)
    apk_or_bundle_soup = BeautifulSoup(apk_or_bundle_response.text, 'html.parser')
    
    variants_table = apk_or_bundle_soup.find('div', class_='variants-table')
    if variants_table:
        rows = variants_table.find_all('div', class_='table-row', recursive=False)[1:]  # Skip header
        for row in rows:
            cells = row.find_all('div', class_='table-cell')
            
            if type == 'apk' and 'APK' not in cells[0].text:
                continue
            if type == 'bundle' and 'BUNDLE' not in cells[0].text:
                continue
            
            if arch and arch not in cells[1].text:
                continue
            elif not arch and 'universal' not in cells[1].text:
                continue
            
            if package_os and package_os not in cells[2].text:
                continue
            
            if dpi and dpi not in cells[3].text:
                continue
            
            # If all conditions match, get download link
            download_link = cells[0].find('a', class_='accent_color', href=True)
            if download_link:
                download_page_url = 'https://www.apkmirror.com' + download_link['href']
                break
        else:
            raise ValueError("No matching variant found.")

        # Step 4: Navigate to download page
        download_page_response = requests.get(download_page_url, headers=request_header)
        download_page_soup = BeautifulSoup(download_page_response.text, 'html.parser')
        
        final_download_link = download_page_soup.find('a', class_='downloadButton', href=True)
        if final_download_link:
            final_url = 'https://www.apkmirror.com' + final_download_link['href']
            
            # Step 5: Get the direct download link
            direct_download_response = requests.get(final_url, headers=request_header)
            direct_download_soup = BeautifulSoup(direct_download_response.text, 'html.parser')
            
            direct_link = direct_download_soup.find('a', id='download-link', href=True)
            if direct_link:
                direct_url = 'https://www.apkmirror.com' + direct_link['href']
                
                # Step 6: Download and save file
                if not os.path.exists('download_apk'):
                    os.makedirs('download_apk')
                
                with requests.get(direct_url, stream=True, headers=request_header) as r:
                    r.raise_for_status()
                    with open(os.path.join('download_apk', dl_name), 'wb') as f:
                        for chunk in r.iter_content(chunk_size=8192):
                            f.write(chunk)
                print(f"File saved as {dl_name} in download_apk folder.")
            else:
                raise ValueError("Could not find the direct download link.")
        else:
            raise ValueError("Could not find the download button on the download page.")
    else:
        raise ValueError("Could not find variants table.")

# Usage:
# download_apk('com.google.android.youtube', 'https://www.apkmirror.com/apk/google-inc/youtube/youtube-19-47-41-release/', 'apk', 'youtube.apk', '', '', '', '')