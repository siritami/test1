import requests
import os

def dl_gh(repo_name, author, tag):
    # Determine if the tag is a prerelease
    if tag == "prerelease":
        base_url = f"https://api.github.com/repos/{author}/{repo_name}/releases"
    else:
        base_url = f"https://api.github.com/repos/{author}/{repo_name}/releases/{tag}"
    
    # Fetch the release data from GitHub API
    response = requests.get(base_url)
    
    if response.status_code == 200:
        releases = response.json()
        
        # If it's a prerelease, the response is a list of release objects
        if isinstance(releases, list):
            for release in releases:
                print(f"Release Name: {release['name']}")
                print(f"Tag Name: {release['tag_name']}")
                print(f"Release URL: {release['html_url']}")
                print("Assets:")
                for asset in release['assets']:
                    asset_name = asset['name']
                    if not asset_name.endswith('.asc'):
                        print(f"- {asset_name} (Download URL: {asset['browser_download_url']})")
                        download_asset(asset['browser_download_url'], asset_name)
                print("="*40)
        else:
            # For specific tag, display the single release
            print(f"Release Name: {releases['name']}")
            print(f"Tag Name: {releases['tag_name']}")
            print(f"Release URL: {releases['html_url']}")
            print("Assets:")
            for asset in releases['assets']:
                asset_name = asset['name']
                if not asset_name.endswith('.asc'):
                    print(f"- {asset_name} (Download URL: {asset['browser_download_url']})")
                    download_asset(asset['browser_download_url'], asset_name)
            print("="*40)
    else:
        print(f"Failed to fetch releases for {repo_name}/{author}. HTTP Status Code: {response.status_code}")

def download_asset(url, filename):
    # Send GET request to download the file
    response = requests.get(url, stream=True)
    
    if response.status_code == 200:
        # Open the file and save it
        with open(filename, 'wb') as f:
            for chunk in response.iter_content(chunk_size=8192):
                f.write(chunk)
        print(f"Downloaded: {filename}")
    else:
        print(f"Failed to download {filename}. HTTP Status Code: {response.status_code}")