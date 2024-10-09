#!/bin/bash
# ChromeXT
source src/build/utils.sh

dl_gh "JingMatrix" "LSPatch" "latest"
get_apk "com.chrome.beta" "chrome-beta" "chrome-beta" "google-inc/chrome-beta/chrome-beta" "arm64-v8a"
eval java -jar lspatch.jar ./download/chrome-beta.apk -d -v -m ./release/ChromeXt-signed.apk --force