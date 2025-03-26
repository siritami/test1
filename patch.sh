#!/bin/bash

#Setup APKEditor for combine split apks
wget -q -O APKEditor.jar https://github.com/REAndroid/APKEditor/releases/download/V1.4.2/APKEditor-1.4.2.jar
APKEditor="APKEditor.jar"

#Setup Apktool for decrypts apk file
wget -q -O APKTool.jar https://github.com/iBotPeaches/Apktool/releases/download/v2.11.1/apktool_2.11.1.jar
APKTool="APKTool.jar"

#Setup Uber Apk Signer for signed apk file
wget -q -O Uber.jar https://github.com/patrickfav/uber-apk-signer/releases/download/v1.3.0/uber-apk-signer-1.3.0.jar
Uber="Uber.jar"

# Colored output logs
green_log() {
    echo -e "\e[32m$1\e[0m"
}
red_log() {
    echo -e "\e[31m$1\e[0m"
}

# Change AndroidManifest follow https://developer.android.com/guide/topics/data/install-location
edit_AndroidManifest() {
    local file="$1/AndroidManifest.xml"
    sed -i -E 's/[a-zA-Z0-9_]+:installLocation="(internalOnly|auto)"//g' "$file"
    sed -i -E '0,/(xmlns:([a-zA-Z0-9_]+)="http:\/\/schemas\.android\.com\/apk\/res\/android")/ {
    s/(xmlns:([a-zA-Z0-9_]+)="http:\/\/schemas\.android\.com\/apk\/res\/android")/\1 \2:installLocation="preferExternal"/
    }' "$file"
	head -n 10 "$file"
}

if [ $file_type == "APK" ]; then
	file_ext_dl="apk"
	split_apk="0"
else
	file_ext_dl="apkm"
	split_apk="1"
fi

# Download APK/APKM file
if [ $APK_URL == "upload" ]; then
	wget -q -O app.$file_ext_dl https://github.com/$repository/releases/download/upload/app.$file_ext_dl
	if [ -z "app.$file_ext_dl" ]; then
		red_log "[-] Failed to download file from your repository release, make sure your apk file you upload name app.$file_ext_dl and tag release is 'upload'"
		exit 0
	fi
else
	wget -q -O app.$file_ext_dl $APK_URL
	if [ -z "app.$file_ext_dl" ]; then
		red_log "[-] Failed to download file from your url given"
		exit 0
	fi
fi

# Patching And Signing file
if [ $split_apk == "1" ]; then
	green_log "[+] Merging splits apk to standalone apk"
	java -jar $APKEditor m -i app.$file_ext_dl
	green_log "[+] Decrypting apk file"
	java -jar $APKTool d app_merged.apk
	green_log "[+] Changing AndroidManifest file"
	edit_AndroidManifest "app_merged"
	green_log "[+] Re-Compiling apk file"
	java -jar $APKTool b app_merged -o app-sdcard.apk
	green_log "[+] Signing apk file"
	java -jar $Uber --apks app-sdcard.apk
else
	green_log "[+] Decrypting apk file"
	java -jar $APKTool d app.apk
	green_log "[+] Changing AndroidManifest file"
	edit_AndroidManifest "app"
	green_log "[+] Re-Compiling apk file"
	java -jar $APKTool b app -o app-sdcard.apk
	green_log "[+] Signing apk file"
	java -jar $Uber --apks app-sdcard.apk
fi