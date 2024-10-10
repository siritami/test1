#!/bin/bash
# ChromeXT
source src/build/utils.sh

wget -nv -O "./download/lspatch.jar" --header="User-Agent: Mozilla/5.0 (Linux; Android 13) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.6099.231 Mobile Safari/537.36" "https://github.com/siritami/LSPatch/releases/download/all/jar-v0.6-421-release.jar"
wget -nv -O "./download/ChromeXt-signed.apk" --header="User-Agent: Mozilla/5.0 (Linux; Android 13) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.6099.231 Mobile Safari/537.36" "https://github.com/siritami/LSPatch/releases/download/all/jar-v0.6-421-release.jar"
get_apk "com.chrome.beta" "chrome-beta" "chrome-beta" "google-inc/chrome-beta/chrome-beta" "arm64-v8a"
eval java -jar ./download/lspatch.jar ./download/chrome-beta.apk -d -v -m ./download/ChromeXt-signed.apk --force
mv ./download/chrome-beta.apk ./release/chrome-beta-ChromeXt.apk
