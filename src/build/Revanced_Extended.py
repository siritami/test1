import sys
import os

script_dir = os.path.dirname(__file__)
src_dir = os.path.abspath(os.path.join(script_dir, '..', '..', 'src'))
sys.path.append(src_dir)

from downloader.github import dl_gh
from downloader.apkmirror import download_apk

# Download necessary files first
dl_gh("revanced-patches", "ReVanced", "latest")
dl_gh("revanced-cli", "ReVanced", "latest")
dl_gh("revanced-integrations", "ReVanced", "latest")

from downloader.github import major_cli_version, cli_exec, patches_exec, json_exec

# Call download_apk after all necessary files have been downloaded
download_apk("com.google.android.youtube", "https://www.apkmirror.com/apk/google-inc/youtube/", "apk", "youtube.apk", "", "", "nodpi", "Android 8.0+")