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
    # Read JSON file
    with open(json_exec, 'r') as file:
        data = json.load(file)

    # Find the highest version for com.google.android.youtube
    max_version = '0.0.0'
    for entry in data:
        # Check if 'compatiblePackages' exists and is not None before iterating
        if 'compatiblePackages' in entry and entry['compatiblePackages'] is not None:
            for package in entry['compatiblePackages']:
                if package.get('name') == 'com.google.android.youtube':
                    for version in package.get('versions', []):
                        if version > max_version:
                            max_version = version

    # Convert version format
    yt_version = max_version.replace('.', '-')

    # Rest of the function remains the same
    url = f"https://www.apkmirror.com/apk/google-inc/youtube/youtube-{yt_version}-release/"
    response = requests.get(url)
    soup = BeautifulSoup(response.text, 'html.parser')

    # Find the BUNDLE link
    bundle_link = soup.find('span', class_='apkm-badge', text='BUNDLE')
    if bundle_link:
        apk_page_link = bundle_link.find_parent('a', class_='accent_color')
        if apk_page_link:
            apk_page_url = 'https://www.apkmirror.com' + apk_page_link['href']
            apk_response = requests.get(apk_page_url)
            apk_soup = BeautifulSoup(apk_response.text, 'html.parser')

            # Find the download button
            download_button = apk_soup.find('a', class_='accent_bg btn btn-flat downloadButton Pix')
            if download_button:
                download_page_link = download_button['href']
                download_page_url = 'https://www.apkmirror.com' + download_page_link
                download_response = requests.get(download_page_url)
                download_soup = BeautifulSoup(download_response.text, 'html.parser')

                # Find the actual download link
                final_download_link = download_soup.find('a', id='download-link')
                if final_download_link:
                    final_url = 'https://www.apkmirror.com' + final_download_link['href']
                    # Download the file
                    final_response = requests.get(final_url, allow_redirects=True)
                    if final_response.status_code == 200:
                        # Ensure the directory exists
                        os.makedirs('download', exist_ok=True)
                        with open('download/youtube.apkm', 'wb') as file:
                            file.write(final_response.content)
                        print("File downloaded successfully to 'download/youtube.apkm'")
                    else:
                        print("Failed to download the APK.")
                else:
                    print("Could not find the final download link.")
            else:
                print("Could not find the download button.")
        else:
            print("Could not find the link to the APK page.")
    else:
        print("Could not find a BUNDLE for the version.")

dl_gh("revanced-patches", "inotia00", "latest")
dl_gh("revanced-cli", "inotia00", "latest")

dl_yt(json_exec)