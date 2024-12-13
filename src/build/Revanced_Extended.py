# Revanced_Extended.py
import sys
import os

script_dir = os.path.dirname(__file__)
src_dir = os.path.abspath(os.path.join(script_dir, '..', '..', 'src'))
sys.path.append(src_dir)

from downloader.github import dl_gh
from downloader.test import show_cli  # Importing the show_cli function

dl_gh("revanced-patches", "ReVanced", "latest")
dl_gh("revanced-cli", "ReVanced", "latest")
dl_gh("revanced-integrations", "ReVanced", "latest")

show_cli()  # Call the function to display the downloaded file information