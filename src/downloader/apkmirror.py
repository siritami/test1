import os
import json
import subprocess

def download_apk(package_name, app_url, type, dl_name, version, arch, dpi, package_os):
    # Find the CLI executable
    cli_exec = next((f for f in os.listdir('download_cli') if 'cli' in f and f.endswith('.jar')), None)
    if not cli_exec:
        raise FileNotFoundError("CLI executable not found in download_cli folder")

    # Find patches file (now could be .rvp)
    patches_exec = next((f for f in os.listdir('download_cli') if 'patch' in f.lower() and not f.endswith('.json')), None)
    # Find JSON file (adjust if the name has changed)
    json_exec = next((f for f in os.listdir('download_cli') if f.endswith('.json')), None)

    if not patches_exec or not json_exec:
        raise FileNotFoundError("Patches or JSON file not found in download_cli folder")

    cli_exec = os.path.join('download_cli', cli_exec)
    patches_exec = os.path.join('download_cli', patches_exec)
    json_exec = os.path.join('download_cli', json_exec)

    # Step 1: Determine version if not provided
    if not version:
        if major_cli_version >= 5:
            # Run Java command to list patches with versions
            result = subprocess.run(['java', '-jar', cli_exec, 'list-patches', '--with-packages', '--with-versions', patches_exec], 
                                     capture_output=True, text=True)
            lines = result.stdout.splitlines()
            package_found = False
            max_version = "0.0.0"
            
            for line in lines:
                if line.strip().startswith("Package name:") and package_name in line:
                    package_found = True
                elif package_found and line.strip().startswith("Compatible versions:"):
                    versions = line.split(':', 1)[1].strip().split()
                    for v in versions:
                        if v > max_version:
                            max_version = v
                    package_found = False
            
            version = max_version if max_version != "0.0.0" else "latest"

        else:  # CLI version <= 4, use JSON data
            with open(json_exec, 'r') as json_file:
                data = json.load(json_file)
            max_version = "0.0.0"
            for entry in data:
                if 'compatiblePackages' in entry:
                    for package in entry['compatiblePackages']:
                        if package['name'] == package_name:
                            for v in package['versions']:
                                if v > max_version:
                                    max_version = v
            version = max_version if max_version != "0.0.0" else "latest"

    # Here you would continue with the APK download logic based on the determined version
    print(f"Downloading APK: package_name={package_name}, version={version}, app_url={app_url}, type={type}, dl_name={dl_name}, arch={arch}, dpi={dpi}, package_os={package_os}")

    # Note: Further implementation for downloading APK would go here