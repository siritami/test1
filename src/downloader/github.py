import requests
import os

def dl_gh(repo_name, author, tag):
    download_dir = "/download_cli"  # Specify your download directory here
    if not os.path.exists(download_dir):
        os.makedirs(download_dir)

    if tag == "prerelease":
        base_url = f"https://api.github.com/repos/{author}/{repo_name}/releases"
    else:
        base_url = f"https://api.github.com/repos/{author}/{repo_name}/releases/{tag}"
    
    response = requests.get(base_url)
    releases = response.json()
    
    for release in releases:
        if release.get("prerelease", False):
            assets = release.get("assets", [])
            for asset in assets:
                download_url = asset.get("browser_download_url")
                if download_url and not download_url.endswith(".asc"):
                    filename = asset.get("name")
                    if filename:
                        response = requests.get(download_url)
                        file_path = os.path.join(download_dir, filename)
                        with open(file_path, 'wb') as f:
                            f.write(response.content)
        else:
            assets = release.get("assets", [])
            for asset in assets:
                download_url = asset.get("browser_download_url")
                if download_url and not download_url.endswith(".asc"):
                    filename = asset.get("name")
                    if filename:
                        response = requests.get(download_url)
                        file_path = os.path.join(download_dir, filename)
                        with open(file_path, 'wb') as f:
                            f.write(response.content)
