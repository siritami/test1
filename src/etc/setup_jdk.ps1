#Download Zulu-JDK
$URL = (Invoke-RestMethod -Uri "https://api.azul.com/zulu/download/community/v1.0/bundles/latest/?jdk_version=21&bundle_type=jdk&javafx=false&ext=msi&os=windows&arch=x86&hw_bitness=64" -UseBasicParsing -Verbose).url
Invoke-RestMethod -Uri $URL -Outfile "zulu-jdk\zulu-jdk-win_x64.msi" -UseBasicParsing -Verbose

#Use Window Installer extract .msi file.
Start-Process "msiexec" /a "zulu-jdk\zulu-jdk-win_x64.msi" TARGETDIR="zulu-jdk\zulu-jdk-win_x64.msi\zulu-jdk" /qb -Wait
Remove-Item -Path "zulu-jdk\zulu-jdk-win_x64.msi" -Force