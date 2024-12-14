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
    """
    Function to extract the highest version for the package 'com.google.android.youtube'
    from a JSON file, convert the version format, and download the APK file from APKMirror.

    Args:
        json_exec (str): The file path to the JSON file.

    Returns:
        str: The highest version with dots replaced by dashes, or None if not found.
    """
    yt_version = None

    try:
        # Load the JSON data from the file
        with open(json_exec, 'r') as file:
            data = json.load(file)

        # Initialize a variable to hold the highest version
        highest_version = None

        # Iterate through each item in the JSON array
        for item in data:
            compatible_packages = item.get("compatiblePackages")

            # Check if compatiblePackages is a valid list
            if not compatible_packages:
                continue

            for package in compatible_packages:
                if package.get("name") == "com.google.android.youtube":
                    versions = package.get("versions", [])
                    if versions:
                        # Find the highest version in the current list
                        current_highest = max(versions, key=lambda v: list(map(int, v.split('.'))))

                        # Update the overall highest version if needed
                        if highest_version is None or list(map(int, current_highest.split('.'))) > list(map(int, highest_version.split('.'))):
                            highest_version = current_highest

        # Convert the highest version to the desired format if found
        if highest_version:
            yt_version = highest_version.replace('.', '-')

            # Display the result
            print(f"{yt_version=}")

            # Load the APKMirror page
            url = f"https://www.apkmirror.com/apk/google-inc/youtube/youtube-{yt_version}-release/"
            response = requests.get(url)
            response.raise_for_status()

            # Parse the page with BeautifulSoup
            soup = BeautifulSoup(response.text, 'html.parser')

            # Find the link with the BUNDLE class
            bundle_div = soup.find('div', class_='table-cell rowheight addseparator expand pad dowrap')
            if bundle_div:
                bundle_anchor = bundle_div.find('a', class_='accent_color', href=True)
                if bundle_anchor:
                    next_url = "https://www.apkmirror.com" + bundle_anchor['href']

                    # Go to the next page
                    response = requests.get(next_url)
                    response.raise_for_status()
                    soup = BeautifulSoup(response.text, 'html.parser')

                    # Find the download button
                    download_button = soup.find('a', class_='accent_bg btn btn-flat downloadButton Pix', href=True)
                    if download_button:
                        final_url = "https://www.apkmirror.com" + download_button['href']

                        # Go to the final download page
                        response = requests.get(final_url)
                        response.raise_for_status()
                        soup = BeautifulSoup(response.text, 'html.parser')

                        # Find the final download link
                        download_link = soup.find('a', id='download-link', href=True)
                        if download_link:
                            download_url = "https://www.apkmirror.com" + download_link['href']

                            # Download the file
                            download_response = requests.get(download_url, allow_redirects=True)
                            download_response.raise_for_status()

                            # Save the file
                            os.makedirs('download', exist_ok=True)
                            file_path = os.path.join('download', 'youtube.apkm')
                            with open(file_path, 'wb') as file:
                                file.write(download_response.content)

                            print(f"File downloaded and saved as {file_path}")

    except FileNotFoundError:
        print(f"Error: File '{json_exec}' not found.")
    except json.JSONDecodeError:
        print(f"Error: Failed to parse JSON file '{json_exec}'.")
    except requests.RequestException as e:
        print(f"Network error: {e}")
    except Exception as e:
        print(f"An unexpected error occurred: {e}")

    return yt_version


dl_gh("revanced-patches", "inotia00", "latest")
dl_gh("revanced-cli", "inotia00", "latest")

dl_yt(json_exec)