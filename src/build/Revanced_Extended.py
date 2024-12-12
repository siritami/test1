import sys
import os

sys.path.append(os.path.abspath(os.path.join(os.path.dirname(__file__), '..', 'src')))

from downloader.github import dl_gh

dl_gh("revanced-patches", "ReVanced", "prerelease")
dl_gh("revanced-patches", "ReVanced", "latest")
dl_gh("revanced-patches", "ReVanced", "v5.4.0-dev.4")
