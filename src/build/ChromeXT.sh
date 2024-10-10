#!/bin/bash
# ChromeXT
source src/build/utils.sh

wget -nv -O "./download/lspatch.jar" --header="User-Agent: Mozilla/5.0 (Linux; Android 13) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.6099.231 Mobile Safari/537.36" "https://github.com/JingMatrix/LSPatch/actions/runs/10888848425/artifacts/1938908057"
get_apk "com.chrome.beta" "chrome-beta" "chrome-beta" "google-inc/chrome-beta/chrome-beta" "arm64-v8a"
eval java -jar ./download/lspatch.jar ./download/chrome-beta.apk -d -v -m ./release/ChromeXt-signed.apk --force
