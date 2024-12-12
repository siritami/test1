import requests
import os

def download_file(url: str, file_name: str) -> None:
    dir_path = "./download_cli"
    os.makedirs(dir_path, exist_ok=True)
    
    response = requests.get(url)
    if response.status_code == 200:
        file_path = os.path.join(dir_path, file_name)
        with open(file_path, 'wb') as f:
            f.write(response.content)
        print(f"Downloaded {file_name}")
    else:
        print(f"Failed to download {file_name}")

def dl_gh(repo_name: str, author: str, tag: str) -> None:
    if tag == "prerelease":
        base_url = f"https://api.github.com/repos/{author}/{repo_name}/releases"
    else:
        base_url = f"https://api.github.com/repos/{author}/{repo_name}/releases/{tag}"

    try:
        response = requests.get(base_url)
        response.raise_for_status()
        releases = response.json()
    except requests.RequestException as e:
        print(f"Request failed: {e}")
        return

    for release in releases if tag == "prerelease" else [releases]:
        if release.get("prerelease") == (tag == "prerelease"):
            assets = release.get("assets", [])
            for asset in assets:
                download_url = asset.get("browser_download_url", "")
                if download_url.endswith(".asc"):
                    continue  # Skip downloading .asc files
                file_name = asset.get("name", "")
                download_file(download_url, file_name)