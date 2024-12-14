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
    
    # Find the highest version for 'com.google.android.youtube'
    highest_version = None
    for item in data:
        for package in item.get('compatiblePackages', []):
            if package.get('name') == 'com.google.android.youtube':
                for version in package.get('versions', []):
                    current = tuple(map(int, version.split('.')))
                    if highest_version is None or current > tuple(map(int, highest_version.split('-'))):
                        highest_version = version.replace('.', '-')
    
    if highest_version is None:
        print("No compatible version found for YouTube.")
        return

    # Construct URL for the specific version
    base_url = "https://www.apkmirror.com/apk/google-inc/youtube/youtube-"
    version_url = f"{base_url}{highest_version}-release/"
    
    # Load the initial page
    response = urlopen(Request(version_url, headers={'User-Agent': 'Mozilla/5.0'}))
    html = response.read().decode('utf-8')

    # Find the download link for the BUNDLE
    bundle_match = re.search(r'<span class="apkm-badge success" data-apkm-tooltip="APK bundle with base APK and \d+ splits">BUNDLE</span>', html)
    if bundle_match:
        bundle_part = bundle_match.group(0)
        href_match = re.search(r'href="([^"]+)"', html.split(bundle_part)[0][::-1].split('a>', 1)[1][::-1])
        if href_match:
            bundle_href = href_match.group(1)
            bundle_page_url = urljoin(base_url, bundle_href)

            # Load the bundle download page
            response = urlopen(Request(bundle_page_url, headers={'User-Agent': 'Mozilla/5.0'}))
            html = response.read().decode('utf-8')

            # Find the download button
            download_match = re.search(r'href="([^"]+)"\s+class="accent_bg btn btn-flat downloadButton Pix"', html)
            if download_match:
                download_href = download_match.group(1)
                download_page_url = urljoin(base_url, download_href)

                # Load the final download page
                response = urlopen(Request(download_page_url, headers={'User-Agent': 'Mozilla/5.0'}))
                html = response.read().decode('utf-8')

                # Find the actual download link
                final_download_match = re.search(r'href="([^"]+)"\s+id="download-link"', html)
                if final_download_match:
                    final_download_href = final_download_match.group(1)
                    final_url = urljoin(base_url, final_download_href)

                    # Download the APK
                    response = urlopen(final_url)
                    with open('download\\youtube.apkm', 'wb') as out_file:
                        out_file.write(response.read())
                    print(f"APK downloaded successfully to download\\youtube.apkm")
                else:
                    print("Could not find the final download link.")
            else:
                print("Could not find the download button.")
        else:
            print("Could not find the bundle href.")
    else:
        print("Could not find bundle information on the page.")


dl_gh("revanced-patches", "inotia00", "latest")
dl_gh("revanced-cli", "inotia00", "latest")

dl_yt(json_exec)