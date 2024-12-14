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
    with open(json_exec, 'r') as f:
        data = json.load(f)
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


    base_url = "https://www.apkmirror.com"
    yt_url = f"{base_url}/apk/google-inc/youtube/youtube-{yt_version}-release/"
    headers = {
        "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/96.0.4664.45 Safari/537.36"
    }

    # Step 1: Load the YouTube version page
    response = requests.get(yt_url, headers=headers)
    if response.status_code != 200:
        raise Exception(f"Failed to load page: {yt_url}")

    soup = BeautifulSoup(response.text, 'html.parser')

    # Step 2: Find the BUNDLE link
    bundle_div = soup.find('div', class_='table-cell rowheight addseparator expand pad dowrap')
    if not bundle_div:
        raise Exception("Failed to find the bundle container.")

    bundle_link = bundle_div.find('a', class_='accent_color', href=True)
    bundle_badge = bundle_div.find('span', class_='apkm-badge success', text=lambda x: "BUNDLE" in x if x else False)

    if not bundle_link or not bundle_badge:
        raise Exception("Failed to find the bundle link or badge.")

    bundle_url = base_url + bundle_link['href']

    # Step 3: Load the bundle page
    response = requests.get(bundle_url, headers=headers)
    if response.status_code != 200:
        raise Exception(f"Failed to load bundle page: {bundle_url}")

    soup = BeautifulSoup(response.text, 'html.parser')

    # Step 4: Find the download button link
    download_button = soup.find('a', class_='accent_bg btn btn-flat downloadButton Pix', href=True)
    if not download_button:
        raise Exception("Failed to find the download button.")

    download_page_url = base_url + download_button['href']

    # Step 5: Load the download page
    response = requests.get(download_page_url, headers=headers)
    if response.status_code != 200:
        raise Exception(f"Failed to load download page: {download_page_url}")

    soup = BeautifulSoup(response.text, 'html.parser')

    # Step 6: Find the final download link
    final_download_link = soup.find('a', id='download-link', href=True)
    if not final_download_link:
        raise Exception("Failed to find the final download link.")

    final_url = base_url + final_download_link['href']

    # Step 7: Download the file
    response = requests.get(final_url, headers=headers, allow_redirects=True, stream=True)
    if response.status_code != 200:
        raise Exception("Failed to download the APKM file.")

    # Save the file
    os.makedirs('download', exist_ok=True)
    file_path = os.path.join('download', 'youtube.apkm')
    with open(file_path, 'wb') as file:
        for chunk in response.iter_content(chunk_size=8192):
            file.write(chunk)

    print(f"File downloaded successfully and saved as {file_path}")


dl_gh("revanced-patches", "inotia00", "latest")
dl_gh("revanced-cli", "inotia00", "latest")

dl_yt(json_exec)