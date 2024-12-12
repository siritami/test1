import requests

def dl_gh(repo_name, author, tag):
    # Determine if the tag is a prerelease
    if tag == "prerelease":
        base_url = f"https://api.github.com/repos/{author}/{repo_name}/releases"
    else:
        base_url = f"https://api.github.com/repos/{author}/{repo_name}/releases/tags/{tag}"
    
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
                    print(f"- {asset['name']} (Download URL: {asset['browser_download_url']})")
                print("="*40)
        else:
            # For specific tag, display the single release
            print(f"Release Name: {releases['name']}")
            print(f"Tag Name: {releases['tag_name']}")
            print(f"Release URL: {releases['html_url']}")
            print("Assets:")
            for asset in releases['assets']:
                print(f"- {asset['name']} (Download URL: {asset['browser_download_url']})")
            print("="*40)
    else:
        print(f"Failed to fetch releases for {repo_name}/{author}. HTTP Status Code: {response.status_code}")
