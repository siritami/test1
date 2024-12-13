import sys
import os

# Set up the script directory and the src path
script_dir = os.path.dirname(__file__)
src_dir = os.path.abspath(os.path.join(script_dir, '..', '..', 'src'))
sys.path.append(src_dir)

from downloader.github import dl_gh
from downloader.test import show_cli  # Import show_cli from test.py

# Download the latest releases using dl_gh
dl_gh("revanced-patches", "ReVanced", "latest")
dl_gh("revanced-cli", "ReVanced", "latest")
dl_gh("revanced-integrations", "ReVanced", "latest")

# Call the show_cli function to print the global variables
show_cli()
