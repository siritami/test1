import sys
import os

# Add the src directory to the sys.path
script_dir = os.path.dirname(__file__)
src_dir = os.path.abspath(os.path.join(script_dir, '..', '..', 'src'))  # Going two levels up to src
sys.path.append(src_dir)

# Now you can import the module
from downloader.github import dl_gh

# Your function calls
dl_gh("revanced-patches", "ReVanced", "prerelease")
dl_gh("revanced-patches", "ReVanced", "latest")
dl_gh("revanced-patches", "ReVanced", "v5.4.0-dev.4")
dl_gh("revanced-cli", "ReVanced", "latest")
