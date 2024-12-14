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
    yt_version = get_highest_version(json_exec)
    base_url = f"https://www.apkmirror.com/apk/google-inc/youtube/youtube-{yt_version}-release/"

    # Load the APKMirror page for the specified version
    response = requests.get(base_url)
    if response.status_code != 200:
        raise Exception(f"Failed to load APKMirror page for version {yt_version}")

    soup = BeautifulSoup(response.text, "html.parser")

    # Find the BUNDLE link
    bundle_div = soup.find("div", class_="table-cell rowheight addseparator expand pad dowrap")
    bundle_link = None

    if bundle_div:
        bundle_tag = bundle_div.find("a", class_="accent_color")
        if bundle_tag and "BUNDLE" in bundle_div.text:
            bundle_link = bundle_tag["href"]

    if not bundle_link:
        raise Exception("Failed to find the BUNDLE link on the APKMirror page.")

    # Go to the next page for the bundle
    bundle_url = "https://www.apkmirror.com" + bundle_link
    response = requests.get(bundle_url)
    if response.status_code != 200:
        raise Exception(f"Failed to load bundle page: {bundle_url}")

    soup = BeautifulSoup(response.text, "html.parser")

    # Find the download button
    download_button = soup.find("a", class_="accent_bg btn btn-flat downloadButton Pix")
    if not download_button:
        raise Exception("Failed to find the download button on the bundle page.")

    download_page_url = "https://www.apkmirror.com" + download_button["href"]

    # Go to the final download page
    response = requests.get(download_page_url)
    if response.status_code != 200:
        raise Exception(f"Failed to load final download page: {download_page_url}")

    soup = BeautifulSoup(response.text, "html.parser")

    # Find the actual download link
    final_download_link = soup.find("a", id="download-link")
    if not final_download_link:
        raise Exception("Failed to find the final download link on the final page.")

    final_url = "https://www.apkmirror.com" + final_download_link["href"]

    # Download the APK file
    download_dir = "download"
    os.makedirs(download_dir, exist_ok=True)
    output_file = os.path.join(download_dir, "youtube.apkm")

    with requests.get(final_url, stream=True, allow_redirects=True) as r:
        if r.status_code == 200:
            with open(output_file, "wb") as f:
                for chunk in r.iter_content(chunk_size=8192):
                    f.write(chunk)
        else:
            raise Exception(f"Failed to download the file from: {final_url}")

    print(f"File downloaded successfully: {output_file}")

dl_gh("revanced-patches", "inotia00", "latest")
dl_gh("revanced-cli", "inotia00", "latest")

dl_yt(json_exec)