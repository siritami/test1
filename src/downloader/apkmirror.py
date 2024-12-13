import os
import json
import subprocess
import re

def download_apk(package_name, app_url, app_type, dl_name, version, arch, dpi, package_os):
    cli_exec = None
    major_cli_version = None
    patches_exec = None
    json_exec = None

    # Step 1: Locate files
    for file_name in os.listdir('download_cli'):
        file_path = os.path.join('download_cli', file_name)
        if 'cli' in file_name and file_name.endswith('.jar'):
            cli_exec = file_path
            major_cli_version = int(file_name.split('-')[1].split('.')[0])
        elif 'patch' in file_name and file_name.endswith('.jar') and not file_name.endswith('.json'):
            patches_exec = file_path
        elif file_name.endswith('.json'):
            json_exec = file_path

    # Validate required files are found
    if not cli_exec or not patches_exec or not json_exec:
        raise FileNotFoundError("Required files (CLI, patches, or JSON) are missing in the 'download_cli' directory.")

    # Step 2: Determine the version
    if not version:  # If the global version is blank
        if major_cli_version >= 5:
            # Run the CLI command
            command = f"java -jar {cli_exec} list-patches --with-packages --with-versions {patches_exec}"
            result = subprocess.run(command, shell=True, capture_output=True, text=True)
            output = result.stdout

            # Parse the output to find the latest compatible version
            version_pattern = re.compile(rf"Compatible versions:\n(?:\s+{package_name}\s+Versions:\n)?(?:\s+\d+\.\d+\.\d+\n)*")
            matches = version_pattern.findall(output)

            if matches:
                versions = [v.strip() for v in matches[-1].split() if re.match(r"\d+\.\d+\.\d+", v)]
                version = max(versions, key=lambda x: list(map(int, x.split('.')))) if versions else 'latest'
            else:
                version = 'latest'
        else:
            # Parse the JSON file for compatible versions
            with open(json_exec, 'r') as json_file:
                json_data = json.load(json_file)

            compatible_versions = []
            for entry in json_data:
                for package in entry.get('compatiblePackages', []):
                    if package.get('name') == package_name:
                        compatible_versions.extend(package.get('versions', []))

            if compatible_versions:
                version = max(compatible_versions, key=lambda x: list(map(int, x.split('.'))))
            else:
                version = 'latest'

    # Output the determined version
    print(f"Determined version: {version}")

    # Further steps for downloading the APK would go here...
