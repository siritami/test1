import os
import re
import requests
import subprocess
from bs4 import BeautifulSoup

def download_github_release(repo, owner, tag):
    url = f"https://api.github.com/repos/{owner}/{repo}/releases"
    response = requests.get(url)
    response.raise_for_status()
    releases = response.json()

    for release in releases:
        if tag == "latest" or (tag == "prerelease" and release["prerelease"]):
            for asset in release["assets"]:
                if not asset["browser_download_url"].endswith(".asc"):
                    file_name = asset["name"]
                    download_url = asset["browser_download_url"]
                    print(f"[+] Downloading {file_name} from {owner}")
                    with requests.get(download_url, stream=True) as r:
                        r.raise_for_status()
                        with open(file_name, 'wb') as f:
                            for chunk in r.iter_content(chunk_size=8192):
                                f.write(chunk)
            break

def download_apk(url, output):
    headers = {"User-Agent": "Mozilla/5.0 (Linux; Android 10; K) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/130.0.6723.58 Mobile Safari/537.36"}
    response = requests.get(url, headers=headers)
    response.raise_for_status()

    soup = BeautifulSoup(response.text, "html.parser")
    download_button = soup.find("a", class_="downloadButton")

    if download_button:
        download_url = f"https://www.apkmirror.com{download_button['href']}"
        print(f"[+] Downloading APK from {download_url}")
        with requests.get(download_url, stream=True) as r:
            r.raise_for_status()
            with open(output, 'wb') as f:
                for chunk in r.iter_content(chunk_size=8192):
                    f.write(chunk)
    else:
        print("[-] Failed to find the download link.")

def patch_apk(apk_name, version, patch_tool="revanced-cli"):  
    if not os.path.exists(f"./download/{apk_name}.apk"):
        print(f"[-] {apk_name}.apk not found.")
        return

    patches = [file for file in os.listdir() if file.endswith(".rvp")]

    if not patches:
        print("[-] No patches found.")
        return

    print(f"[+] Patching {apk_name} with Revanced CLI...")
    command = ["java", "-jar", patch_tool, "patch", "-p", *patches, f"--out=./release/{apk_name}-{version}.apk", f"./download/{apk_name}.apk"]

    subprocess.run(command)

# Example usage
download_github_release("revanced-patches", "inotia00", "latest")
download_github_release("revanced-cli", "inotia00", "latest")
download_apk("https://www.apkmirror.com/apk/google-inc/youtube/youtube", "youtube.apk")
patch_apk("youtube", "revanced-extended")

print("[+] Script execution completed.")