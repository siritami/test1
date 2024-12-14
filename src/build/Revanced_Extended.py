# Revanced_Extended.py
import sys
import os
import requests
import re
import json
from bs4 import BeautifulSoup

cli_exec = None
patches_exec = None
json_exec = None

def download_file(url, file_name, repo_name, author):
    global cli_exec, patches_exec, json_exec
    dir_path = "download"
    os.makedirs(dir_path, exist_ok=True)
    response = requests.get(url)
    if response.status_code == 200:
        file_path = os.path.join(dir_path, file_name)
        with open(file_path, 'wb') as f:
            f.write(response.content)
        print(f"\033[92m[+] Downloaded {file_name} from {repo_name} by {author}\033[0m")
        if "cli" in file_name:
            cli_exec = file_path
            print(f"\033[94m[INFO] cli_exec: {cli_exec}\033[0m")
        elif "patch" in file_name and not file_name.endswith(".json"):
            patches_exec = file_path
            print(f"\033[94m[INFO] patches_exec: {patches_exec}\033[0m")
        elif file_name.endswith(".json"):
            json_exec = file_path
            print(f"\033[94m[INFO] json_exec: {json_exec}\033[0m")
    else:
        print(f"\033[91m[-] Failed to download {file_name} from {repo_name} by {author}\033[0m")

def dl_gh(repo_name, author, tag):
    if tag == "latest":
        base_url = f"https://api.github.com/repos/{author}/{repo_name}/releases/latest"
    elif tag == "prerelease":
        base_url = f"https://api.github.com/repos/{author}/{repo_name}/releases"
    else:
        base_url = f"https://api.github.com/repos/{author}/{repo_name}/releases/tags/{tag}"
    try:
        response = requests.get(base_url)
        response.raise_for_status()
        releases = response.json()
    except requests.RequestException as e:
        print(f"\033[91m[-] Failed to request GitHub: {e}\033[0m")
        return
    if tag in ("latest", "prerelease"):
        if isinstance(releases, dict):
            releases = [releases]
        for release in releases:
            if tag == "prerelease" and release.get("prerelease"):
                assets = release.get("assets", [])
                for asset in assets:
                    download_url = asset.get("browser_download_url", "")
                    if not download_url.endswith(".asc"):
                        file_name = asset.get("name", "")
                        download_file(download_url, file_name, repo_name, author)
                break 
            elif tag == "latest":
                assets = release.get("assets", [])
                for asset in assets:
                    download_url = asset.get("browser_download_url", "")
                    if not download_url.endswith(".asc"):
                        file_name = asset.get("name", "")
                        download_file(download_url, file_name, repo_name, author)
                break
    else:
        if isinstance(releases, dict) and 'assets' in releases:
            assets = releases.get("assets", [])
            for asset in assets:
                download_url = asset.get("browser_download_url", "")
                if not download_url.endswith(".asc"):
                    file_name = asset.get("name", "")
                    download_file(download_url, file_name, repo_name, author)
        else:
            print(f"\033[93m[?] No release found. Check input\033[0m")

def dl_yt(json_exec):
    # Load JSON data
    with open(json_exec, 'r') as json_file:
        data = json.load(json_file)
    
    # Initialize variables for highest version and formatted version
    highest_version = None
    formatted_version = None
    
    # Iterate through each item in JSON data
    for item in data:
        compatible_packages = item.get('compatiblePackages')
        if compatible_packages and isinstance(compatible_packages, list):
            for pkg in compatible_packages:
                if pkg.get('name') == 'com.google.android.youtube':
                    versions = pkg.get('versions', [])
                    if versions:
                        # Find the highest version number
                        current_highest = max(versions, key=lambda x: tuple(int(v) for v in x.split('.')))
                        if highest_version is None or current_highest > highest_version:
                            highest_version = current_highest
    
    if highest_version:
        # Format version number (replace dots with dashes)
        formatted_version = highest_version.replace('.', '-')
        print(f"Found highest version: {formatted_version}")
        
        # Construct URL for APKMirror
        url = f"https://www.apkmirror.com/apk/google-inc/youtube/youtube-{formatted_version}-release/"
        
        try:
            # Fetch HTML content of the URL
            response = requests.get(url)
            soup = BeautifulSoup(response.content, 'html.parser')
            
            # Find the download link
            download_link = None
            link_divs = soup.find_all('div', class_='table-cell rowheight addseparator expand pad dowrap')
            for div in link_divs:
                badge = div.find('span', class_='apkm-badge', text='BUNDLE')
                if badge:
                    download_link = div.find('a', class_='accent_color')['href']
                    break
            
            if download_link:
                print(f"Found download link: {download_link}")
                
                # Follow the download link to get the final download URL
                download_url = f"https://www.apkmirror.com{download_link}"
                response_dl = requests.get(download_url)
                soup_dl = BeautifulSoup(response_dl.content, 'html.parser')
                
                # Find the final download link
                final_download_link = soup_dl.find('a', id='download-link')['href']
                if final_download_link:
                    print(f"Final download link found: {final_download_link}")
                    
                    # Download the APK file
                    apk_response = requests.get(final_download_link, allow_redirects=True)
                    if apk_response.status_code == 200:
                        # Save the APK file
                        with open('download/youtube.apkm', 'wb') as apk_file:
                            apk_file.write(apk_response.content)
                        print("APK file downloaded successfully.")
                    else:
                        print("Failed to download APK file.")
                else:
                    print("Final download link not found.")
            else:
                print("Download link not found.")
        
        except requests.RequestException as e:
            print(f"Error fetching APKMirror page: {e}")


dl_gh("revanced-patches", "inotia00", "latest")
dl_gh("revanced-cli", "inotia00", "latest")

dl_yt(json_exec)