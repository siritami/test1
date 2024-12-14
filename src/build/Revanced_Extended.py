# Revanced_Extended.py
import sys
import os
import requests
import re
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
    # Load JSON data from the provided file
    with open(json_exec, 'r') as f:
        data = json.load(f)

    # Find the highest version for the "com.google.android.youtube" package
    yt_version = None
    for entry in data:
        for package in entry.get('compatiblePackages', []):
            if package['name'] == 'com.google.android.youtube':
                versions = package['versions']
                highest_version = max(versions, key=lambda v: list(map(int, v.split('.'))))
                yt_version = highest_version.replace('.', '-')
                break
        if yt_version:
            break

    if not yt_version:
        print("No valid version found for YouTube package.")
        return

    print(f"Selected YouTube version: {yt_version}")

    # Define the base URL and the search URL
    base_url = "https://www.apkmirror.com"
    search_url = f"{base_url}/apk/google-inc/youtube/youtube-{yt_version}-release/"

    # Make the request to the first page
    response = requests.get(search_url)
    soup = BeautifulSoup(response.text, 'html.parser')

    # Find the link to the APK download page
    download_page_relative_url = soup.find('a', class_='accent_color', href=True)
    if not download_page_relative_url:
        print("Download page not found.")
        return

    download_page_url = base_url + download_page_relative_url['href']
    print(f"Navigating to download page: {download_page_url}")

    # Make the request to the download page
    response = requests.get(download_page_url)
    soup = BeautifulSoup(response.text, 'html.parser')

    # Find the link to the actual download
    download_link_relative_url = soup.find('a', class_='accent_bg btn btn-flat downloadButton Pix', href=True)
    if not download_link_relative_url:
        print("Download link not found.")
        return

    download_link_url = base_url + download_link_relative_url['href']
    print(f"Navigating to actual download: {download_link_url}")

    # Make the request to the final download page
    response = requests.get(download_link_url)
    soup = BeautifulSoup(response.text, 'html.parser')

    # Find the actual download link
    final_download_link_relative_url = soup.find('a', id='download-link', href=True)
    if not final_download_link_relative_url:
        print("Final download link not found.")
        return

    final_download_url = base_url + final_download_link_relative_url['href']
    print(f"Redirecting to final download URL: {final_download_url}")

    # Download the APK file
    response = requests.get(final_download_url, allow_redirects=True)
    
    # Save the file
    download_path = os.path.join('download', 'youtube.apkm')
    os.makedirs(os.path.dirname(download_path), exist_ok=True)
    with open(download_path, 'wb') as f:
        f.write(response.content)
    
    print(f"APK downloaded and saved as {download_path}")


dl_gh("revanced-patches", "inotia00", "latest")
dl_gh("revanced-cli", "inotia00", "latest")

dl_yt(json_exec)