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
    with open(json_exec, 'r') as f:
        data = json.load(f)

    # Find the highest version for com.google.android.youtube
    yt_versions = []
    for entry in data:
        for package in entry.get("compatiblePackages", []):
            if package["name"] == "com.google.android.youtube":
                yt_versions.extend(package.get("versions", []))

    if not yt_versions:
        print("No versions found for com.google.android.youtube.")
        return

    # Get the highest version and format it
    highest_version = max(yt_versions, key=lambda v: list(map(int, v.split('.'))))
    yt_version = highest_version.replace('.', '-')

    print(f"Highest YouTube version: {yt_version}")

    # Build the URL for the APKMirror page
    base_url = f"https://www.apkmirror.com/apk/google-inc/youtube/youtube-{yt_version}-release/"
    response = requests.get(base_url)
    response.raise_for_status()

    # Parse the HTML to find the BUNDLE link
    soup = BeautifulSoup(response.text, 'html.parser')
    bundle_div = soup.find("div", class_="table-cell rowheight addseparator expand pad dowrap")
    if not bundle_div:
        print("BUNDLE div not found.")
        return

    bundle_link = bundle_div.find("a", class_="accent_color", href=True)
    if not bundle_link or "BUNDLE" not in bundle_div.text:
        print("BUNDLE link not found.")
        return

    # Follow the BUNDLE link
    bundle_url = "https://www.apkmirror.com" + bundle_link['href']
    response = requests.get(bundle_url)
    response.raise_for_status()

    # Parse the HTML to find the download button link
    soup = BeautifulSoup(response.text, 'html.parser')
    download_button = soup.find("a", class_="accent_bg btn btn-flat downloadButton Pix", href=True)
    if not download_button:
        print("Download button not found.")
        return

    download_page_url = "https://www.apkmirror.com" + download_button['href']
    response = requests.get(download_page_url)
    response.raise_for_status()

    # Parse the final download link
    soup = BeautifulSoup(response.text, 'html.parser')
    final_download_link = soup.find("a", id="download-link", href=True)
    if not final_download_link:
        print("Final download link not found.")
        return

    final_url = "https://www.apkmirror.com" + final_download_link['href']

    # Download the file
    download_response = requests.get(final_url, allow_redirects=True)
    download_response.raise_for_status()

    # Save the file
    os.makedirs("download", exist_ok=True)
    file_path = os.path.join("download", "youtube.apkm")
    with open(file_path, "wb") as f:
        f.write(download_response.content)

    print(f"Downloaded file saved to {file_path}")

dl_gh("revanced-patches", "inotia00", "latest")
dl_gh("revanced-cli", "inotia00", "latest")

dl_yt(json_exec)