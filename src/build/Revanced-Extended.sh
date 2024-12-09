#!/bin/bash
# Revanced Extended build
source src/build/utils.sh
dl_gh "revanced-patches" "inotia00" "latest"
dl_gh "revanced-cli" "inotia00" "latest"

# Patch YouTube:
get_patches_key "youtube-revanced-extended"
get_apk "com.google.android.youtube" "youtube" "youtube" "google-inc/youtube/youtube"
patch "youtube" "revanced-extended"
