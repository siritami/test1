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



if [ $APK_URL == "upload" ]; then
	wget -q -O app.apk https://github.com/$repository/releases/download/upload/app.apk
	if [ -z "app.apk" ]; then
		echo echo -e "\e[31mFailed to download file from your repository release, make sure your apk file you upload name 'app.apk' and tag release is 'upload'\e[0m"
		exit 0
	fi
else
	wget -q -O app.apk $APK_URL
	if [ -z "app.apk" ]; then
		echo echo -e "\e[31mFailed to download file from your url given\e[0m"
		exit 0
	fi
fi

#