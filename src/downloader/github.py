import requests
import os

def dl_gh(repo_name, author, tag):
    # Determine the base URL for fetching the releases
    if tag == 'prerelease':
        base_url = f'https://api.github.com/repos/{author}/{repo_name}/releases'
    else:
        base_url = f'https://api.github.com/repos/{author}/{repo_name}/releases/tags/{tag}'

    # Send a request to fetch the release information
    response = requests.get(base_url)
    
    if response.status_code != 200:
        print(f"Error fetching releases for {repo_name} by {author} with tag {tag}")
        return

    # Check if the response is a valid JSON
    try:
        releases = response.json()
    except ValueError:
        print("Error parsing JSON from GitHub API response.")
        return

    # Check if the response is a list (i.e., multiple releases)
    if not isinstance(releases, list):
        print(f"Unexpected response format: {releases}")
        return

    # Look for the release with the matching tag
    release = next((r for r in releases if r.get('tag_name') == tag), None)
    
    if not release:
        print(f"No release found for tag {tag}.")
        return
    
    # Extract assets from the release
    assets = release.get('assets', [])
    if not assets:
        print("No assets found for the release.")
        return

    # Create the /download_cli directory if it doesn't exist
    save_dir = '/download_cli'
    if not os.path.exists(save_dir):
        os.makedirs(save_dir)

    # Download and save the files to /download_cli folder
    for asset in assets:
        download_url = asset['browser_download_url']
        file_name = asset['name']
        file_path = os.path.join(save_dir, file_name)

        # Download the file
        print(f"Downloading {file_name}...")
        asset_response = requests.get(download_url)
        if asset_response.status_code == 200:
            with open(file_path, 'wb') as file:
                file.write(asset_response.content)
            print(f"Downloaded {file_name} to {file_path}")
        else:
            print(f"Failed to download {file_name}. HTTP Status code: {asset_response.status_code}")
