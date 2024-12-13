import os
import re
import requests
from bs4 import BeautifulSoup

def download_apk(package_name, app_url, type, dl_name, version, arch, dpi, package_os):
    # Step 1: Find version
    cli_exec = next((f for f in os.listdir('download_cli') if 'cli' in f), None)
    if cli_exec:
        with open(cli_exec, 'r') as f:
            cli_content = f.read()
        major_cli_version = re.search(r'revanced-cli-(\d+\.\d+\.\d+)-all\.jar', cli_exec).group(1).split('.')[0]
        if not version:
            if int(major_cli_version) >= 5:
                result = os.popen(f"java -jar download_cli/{cli_exec} list-patches --with-packages --with-versions download_cli/{next(f for f in os.listdir('download_cli') if 'patches' in f)}").read()
                versions = re.findall(f"Package name: {package_name}\n.*\n.*\n.*\n\s+([^,\n]+)", result)
                version = max(versions) if versions else "latest"
            else:
                json_exec = next((f for f in os.listdir('download_cli') if f.endswith('.json')), None)
                if json_exec:
                    with open(json_exec, 'r') as json_file:
                        json_data = json.load(json_file)
                        versions = next((item['versions'] for item in json_data if item['compatiblePackages'][0]['name'] == package_name), [])
                        version = max(versions) if versions else "latest"
    
    # Step 2: Handle version if it's "latest"
    if version == "latest":
        request_header = {
            "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/96.0.4664.93 Safari/537.36",
            "Authorization": "Basic YXBpLWFwa3VwZGF0ZXI6cm01cmNmcnVVakt5MDRzTXB5TVBKWFc4",
            "Content-Type": "application/json",
        }
        
        response = requests.get(app_url, headers=request_header)
        soup = BeautifulSoup(response.text, 'html.parser')
        
        # Find the list URL
        list_url = soup.find('a', class_='fontBlack', href=True)
        if list_url:
            list_url = 'https://www.apkmirror.com' + list_url['href']
            list_response = requests.get(list_url, headers=request_header)
            list_soup = BeautifulSoup(list_response.text, 'html.parser')
            
            # Find latest version from the list
            latest_version_entry = list_soup.find('h5', class_='appRowTitle').find('a', class_='fontBlack')
            if latest_version_entry:
                version = latest_version_entry.text.split()[1]
    
    # Format version for URL
    _version = version.replace('.', '-')

    # Update app_url with the new version
    app_url = app_url.rsplit('/', 2)[0] + f'/youtube-{_version}-release/'
    
    # Step 2 continued: Select appropriate APK or Bundle
    apk_or_bundle_response = requests.get(app_url, headers=request_header)
    apk_or_bundle_soup = BeautifulSoup(apk_or_bundle_response.text, 'html.parser')
    
    variants_table = apk_or_bundle_soup.find('div', class_='variants-table')
    if variants_table:
        rows = variants_table.find_all('div', class_='table-row', recursive=False)[1:]  # Skip header
        
        # Filter rows based on conditions
        for row in rows:
            cells = row.find_all('div', class_='table-cell')
            
            # Check type (APK or Bundle)
            if type == 'apk' and 'APK' not in cells[0].text:
                continue
            if type == 'bundle' and 'BUNDLE' not in cells[0].text:
                continue
            
            # Check architecture
            if arch and arch not in cells[1].text:
                continue
            elif not arch and 'universal' not in cells[1].text:
                continue
            
            # Check OS version
            if package_os and package_os not in cells[2].text:
                continue
            
            # Check DPI
            if dpi and dpi not in cells[3].text:
                continue
            
            # If all conditions match, proceed to download link
            download_link = cells[0].find('a', class_='accent_color', href=True)
            if download_link:
                download_page_url = 'https://www.apkmirror.com' + download_link['href']
                break
        else:
            print("No matching variant found.")
            return

        # Step 3: Get actual download URL from the download page
        download_page_response = requests.get(download_page_url, headers=request_header)
        download_page_soup = BeautifulSoup(download_page_response.text, 'html.parser')
        
        final_download_link = download_page_soup.find('a', class_='downloadButton', href=True)
        if final_download_link:
            final_url = 'https://www.apkmirror.com' + final_download_link['href']
            
            # Step 4: Get the direct download link
            direct_download_response = requests.get(final_url, headers=request_header)
            direct_download_soup = BeautifulSoup(direct_download_response.text, 'html.parser')
            
            direct_link = direct_download_soup.find('a', id='download-link', href=True)
            if direct_link:
                direct_url = 'https://www.apkmirror.com' + direct_link['href']
                
                # Step 5: Download and save file
                if not os.path.exists('download_apk'):
                    os.makedirs('download_apk')
                
                with requests.get(direct_url, stream=True, headers=request_header) as r:
                    r.raise_for_status()
                    with open(os.path.join('download_apk', dl_name), 'wb') as f:
                        for chunk in r.iter_content(chunk_size=8192):
                            f.write(chunk)
                print(f"File saved as {dl_name} in download_apk folder.")
            else:
                print("Could not find the direct download link.")
        else:
            print("Could not find the download button on the download page.")
    else:
        print("Could not find variants table.")

# Note: This function assumes you have BeautifulSoup and requests installed. 
# Also, make sure 'download_cli' directory exists with necessary files.