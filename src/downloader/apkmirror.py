import os
import re
import requests
from bs4 import BeautifulSoup
from urllib.parse import urljoin

from downloader.github import major_cli_version, cli_exec, patches_exec, json_exec

def download_apk(package_name, app_url, type, dl_name, version, arch, dpi, os):
    # Step 1: Find version
    if not version:
        if major_cli_version >= 5:
            command = f"java -jar {cli_exec} list-patches --with-packages --with-versions {patches_exec}"
            output = os.popen(command).read()
            
            # Parse the output to find the latest version for the package
            versions = re.findall(r'Package name: ' + re.escape(package_name) + r'\n\s*Compatible versions:\s*([\s\S]*?)(?=\n\s*\n|\Z)', output)
            if versions:
                version_list = []
                for version_block in versions:
                    version_list.extend(re.findall(r'\d+\.\d+\.\d+', version_block))
                version = max(version_list, key=lambda v: tuple(map(int, v.split('.'))), default='latest')
            else:
                version = 'latest'
        else:
            # For cli version <= 4, use JSON file
            with open(json_exec, 'r') as file:
                data = json.load(file)
                for item in data:
                    for package in item.get('compatiblePackages', []):
                        if package.get('name') == package_name:
                            version_list = package.get('versions', [])
                            version = max(version_list, key=lambda v: tuple(map(int, v.split('.'))), default='latest')
                            break
                    if version != 'latest':
                        break
    
    # Step 2: If version is 'latest', fetch from APKMirror
    if version == 'latest':
        # Fetch the list URL from the main page
        response = requests.get(app_url)
        soup = BeautifulSoup(response.text, 'html.parser')
        list_url_element = soup.select_one('.table-cell.center a.fontBlack[href]')
        if list_url_element:
            list_url = urljoin('https://www.apkmirror.com', list_url_element['href'])
            
            # Fetch the list of versions
            list_response = requests.get(list_url)
            list_soup = BeautifulSoup(list_response.text, 'html.parser')
            version_entries = list_soup.select('.appRow .appRowTitle a')
            if version_entries:
                version = max([entry.text.split()[1] for entry in version_entries], key=lambda v: tuple(map(int, v.replace('beta', '').split('.'))))
    
    # Convert version format for URL
    _version = version.replace('.', '-')
    app_url = app_url.rsplit('/', 1)[0] + f'/{_version}-release/'
    
    # Step 2: Find the specific APK or Bundle based on parameters
    response = requests.get(app_url)
    soup = BeautifulSoup(response.text, 'html.parser')
    variants_table = soup.select_one('.variants-table')
    if variants_table:
        rows = variants_table.select('.table-row')
        for row in rows:
            cells = row.select('.table-cell')
            if (type == 'apk' and 'APK' in row.text) or (type == 'bundle' and 'BUNDLE' in row.text):
                if (arch and arch in cells[1].text.lower()) or (not arch and 'universal' in cells[1].text.lower()):
                    if (os and os in cells[2].text) or not os:
                        if (dpi and dpi in cells[3].text) or not dpi:
                            download_link = cells[4].select_one('a.accent_color')
                            if download_link:
                                apk_page_url = urljoin('https://www.apkmirror.com', download_link['href'])
                                break
        
        # Step 3 & Step 4: Navigate to download pages
        if 'apk_page_url' in locals():
            apk_page_response = requests.get(apk_page_url)
            apk_page_soup = BeautifulSoup(apk_page_response.text, 'html.parser')
            download_button = apk_page_soup.select_one('a.downloadButton')
            if download_button:
                download_page_url = urljoin('https://www.apkmirror.com', download_button['href'])
                final_download_response = requests.get(download_page_url)
                final_download_soup = BeautifulSoup(final_download_response.text, 'html.parser')
                final_download_link = final_download_soup.select_one('#download-link')
                if final_download_link:
                    final_url = urljoin('https://www.apkmirror.com', final_download_link['href'])
                    
                    # Step 5: Download the APK
                    if not os.path.exists('download_apk'):
                        os.makedirs('download_apk')
                    file_path = os.path.join('download_apk', dl_name)
                    
                    with requests.get(final_url, stream=True) as r:
                        r.raise_for_status()
                        with open(file_path, 'wb') as f:
                            for chunk in r.iter_content(chunk_size=8192):
                                f.write(chunk)
                    print(f"APK downloaded to {file_path}")
                else:
                    print("Final download link not found.")
            else:
                print("Download button not found.")
        else:
            print("No matching variant found.")
    else:
        print("Variants table not found.")


#download_apk("com.google.android.youtube", "https://www.apkmirror.com/apk/google-inc/youtube/", "apk", "youtube.apk", "", "arm64-v8a", "nodpi", "Android 8.0+")