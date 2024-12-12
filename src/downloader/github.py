import requests
import os

def download_file(url, file_name):
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

def dl_gh(repo_name, author, tag):
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
            # Download only the first asset
            if assets:
                first_asset = assets[0]
                download_url = first_asset.get("browser_download_url", "")
                if not download_url.endswith(".asc"):
                    file_name = first_asset.get("name", "")
                    download_file(download_url, file_name)
                break  # Exit loop after processing the first asset
            else:
                print("No assets found in this release.")