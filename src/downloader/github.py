import requests
import os
import re

major_cli_version = None
cli_exec = None
patches_exec = None
integration_exec = None

def download_file(url, file_name, repo_name, author):
    global major_cli_version, cli_exec, patches_exec, integration_exec
    
    dir_path = "\download_cli"
    os.makedirs(dir_path, exist_ok=True)
    
    response = requests.get(url)
    if response.status_code == 200:
        file_path = os.path.join(dir_path, file_name)
        with open(file_path, 'wb') as f:
            f.write(response.content)
        print(f"\033[92m[+] Downloaded {file_name} from {repo_name} by {author}\033[0m")
        match_cli = re.match(r'^revanced-cli-(\d+)\.\d+\.\d+-.*\.jar$', file_name)
        if match_cli:
            version = int(match_cli.group(1))
            major_cli_version = version
            cli_exec = file_path
            print(f"\033[92m[+] Major cli version downloaded: {major_cli_version}\033[0m")
            print(f"\033[92m[+] CLI file downloaded: {cli_exec}\033[0m")
        if "patch" in file_name.lower():
            patches_exec = file_path
            print(f"\033[92m[+] Patches file downloaded: {patches_exec}\033[0m")
        if "integration" in file_name.lower():
            integration_exec = file_path
            print(f"\033[92m[+] Integration file downloaded: {integration_exec}\033[0m")
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
        print(f"\033[91m[-] Failed to request github: {e}\033[0m")
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
