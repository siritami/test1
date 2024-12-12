import requests
import os

def dl_gh(repo_name, author, tag):
    if tag == "prerelease":
        base_url = f"https://api.github.com/repos/{author}/{repo_name}/releases"
    else:
        base_url = f"https://api.github.com/repos/{author}/{repo_name}/releases/{tag}"

    response = requests.get(base_url)
    releases = response.json()

    for release in releases:
        if release.get("prerelease") == (tag == "prerelease"):
            assets = release.get("assets", [])
            for asset in assets:
                download_url = asset.get("browser_download_url", "")
                if download_url.endswith(".asc"):
                    continue  # Skip downloading .asc files
                file_name = asset.get("name", "")
                download_file(download_url, file_name)

def download_file(url, file_name):
    response = requests.get(url)
    if response.status_code == 200:
        with open(f"./download_cli/{file_name}", 'wb') as f:
            f.write(response.content)
        print(f"Downloaded {file_name}")
    else:
        print(f"Failed to download {file_name}")