# Revanced_Extended.py
import sys
import os

print(f"os module: {os}")  # Print to check if os is still the module

script_dir = os.path.dirname(__file__)
src_dir = os.path.abspath(os.path.join(script_dir, '..', '..', 'src'))
sys.path.append(src_dir)

from downloader.github import dl_gh
from downloader.apkmirror import download_apk

print(f"os after imports: {os}")  # Check if os is still the module after imports

dl_gh("revanced-patches", "ReVanced", "latest")
dl_gh("revanced-cli", "ReVanced", "latest")
dl_gh("revanced-integrations", "ReVanced", "latest")

print(f"os before download_apk: {os}")  # Check before calling download_apk
download_apk('com.google.android.youtube', 'https://www.apkmirror.com/apk/google-inc/youtube/youtube-19-47-41-release/', 'apk', 'youtube.apk', '', '', '', '')