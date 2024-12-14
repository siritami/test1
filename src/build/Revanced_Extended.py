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
    # Step 1: Read and Parse the JSON File
    with open(json_exec, 'r') as file:
        data = json.load(file)

    # Step 2: Find the highest version for com.google.android.youtube
    highest_version = None
    for item in data:
        if item['compatiblePackages'] and item['compatiblePackages'][0]['name'] == 'com.google.android.youtube':
            versions = item['compatiblePackages'][0]['versions']
            if versions:
                current_version = versions[-1]  # Get the highest version
                if highest_version is None or current_version > highest_version:
                    highest_version = current_version

    if highest_version is None:
        raise ValueError("No compatible version found for com.google.android.youtube")

    # Step 3: Convert version format
    yt_version = highest_version.replace('.', '-')

    # Step 4: Scrape the web page to find the download link
    base_url = "https://www.apkmirror.com"
    version_url = f"{base_url}/apk/google-inc/youtube/youtube-{yt_version}-release/"

    response = requests.get(version_url)
    soup = BeautifulSoup(response.content, 'html.parser')

    # Find the div with the specified class
    div = soup.find('div', class_='table-cell rowheight addseparator expand pad dowrap')
    if div:
        a_tag = div.find('a', class_='accent_color')
        if a_tag and 'href' in a_tag.attrs:
            href = a_tag['href']
            download_page_url = base_url + href

            # Go to the download page
            response = requests.get(download_page_url)
            soup = BeautifulSoup(response.content, 'html.parser')

            # Find the download button
            download_button = soup.find('a', class_=re.compile(r'accent_bg btn btn-flat downloadButton'))
            if download_button and 'href' in download_button.attrs:
                href = download_button['href']
                final_download_page_url = base_url + href

                # Go to the final download page
                response = requests.get(final_download_page_url)
                soup = BeautifulSoup(response.content, 'html.parser')

                # Find the final download link
                final_download_link = soup.find('a', id='download-link')
                if final_download_link and 'href' in final_download_link.attrs:
                    href = final_download_link['href']
                    final_url = base_url + href

                    # Step 5: Download the file
                    download_folder = "download"
                    if not os.path.exists(download_folder):
                        os.makedirs(download_folder)

                    file_path = os.path.join(download_folder, "youtube.apkm")
                    with requests.get(final_url, stream=True) as r:
                        r.raise_for_status()
                        with open(file_path, 'wb') as f:
                            for chunk in r.iter_content(chunk_size=8192):
                                f.write(chunk)

                    print(f"File downloaded and saved as {file_path}")
                    return file_path

    raise Exception("Failed to find the download link.")


dl_gh("revanced-patches", "inotia00", "latest")
dl_gh("revanced-cli", "inotia00", "latest")

dl_yt(json_exec)