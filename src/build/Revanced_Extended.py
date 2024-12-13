# Revanced_Extended.py
import sys
import os

script_dir = os.path.dirname(__file__)
src_dir = os.path.abspath(os.path.join(script_dir, '..', '..', 'src'))
sys.path.append(src_dir)

from downloader.github import dl_gh
from downloader.apkmirror import download_apk

dl_gh("revanced-patches", "ReVanced", "latest")
dl_gh("revanced-cli", "ReVanced", "latest")
dl_gh("revanced-integrations", "ReVanced", "latest")

dl_apk('com.google.android.youtube', 'https://www.apkmirror.com/apk/google-inc/youtube/youtube-19-47-41-release/', 'apk', 'youtube.apk', '', '', '', '')