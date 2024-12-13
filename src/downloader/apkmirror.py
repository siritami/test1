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
    print("Scanning 'download_cli' directory for required files...")
    for file_name in os.listdir('download_cli'):
        file_path = os.path.join('download_cli', file_name)
        print(f"Found file: {file_name}")
        if 'cli' in file_name and file_name.endswith('.jar'):
            cli_exec = file_path
            try:
                major_cli_version = int(re.search(r'revanced-cli-(\d+)\.', file_name).group(1))
                print(f"Identified CLI file: {file_name}, major version: {major_cli_version}")
            except AttributeError:
                raise ValueError(f"Unable to determine major version from CLI file name: {file_name}")
        elif 'patch' in file_name and file_name.endswith('.jar'):
            patches_exec = file_path
            print(f"Identified patches file: {file_name}")
        elif file_name.endswith('.json'):
            json_exec = file_path
            print(f"Identified JSON file: {file_name}")

    # Validate required files are found
    if not cli_exec:
        print("Error: CLI file is missing.")
    if not patches_exec:
        print("Error: Patches file is missing. Ensure a valid patches file is present.")
    if not json_exec:
        print("Error: JSON file is missing. Ensure a valid JSON file is present.")

    if not cli_exec or not patches_exec or not json_exec:
        raise FileNotFoundError("Required files (CLI, patches, or JSON) are missing in the 'download_cli' directory.")

    # Step 2: Determine the version
    if not version:  # If the global version is blank
        if major_cli_version >= 5:
            # Run the CLI command
            command = f"java -jar {cli_exec} list-patches --with-packages --with-versions {patches_exec}"
            print(f"Running command: {command}")
            result = subprocess.run(command, shell=True, capture_output=True, text=True)
            output = result.stdout

            # Parse the output to find the latest compatible version
            version_pattern = re.compile(rf"Compatible versions:\n(?:\s+{package_name}\s+Versions:\n)?(?:\s+\d+\.\d+\.\d+\n)*")
            matches = version_pattern.findall(output)

            if matches:
                versions = [v.strip() for v in matches[-1].split() if re.match(r"\d+\.\d+\.\d+", v)]
                version = max(versions, key=lambda x: list(map(int, x.split('.')))) if versions else 'latest'
                print(f"Determined version from CLI output: {version}")
            else:
                version = 'latest'
                print("No compatible versions found in CLI output, defaulting to 'latest'.")
        else:
            # Parse the JSON file for compatible versions
            print(f"Parsing JSON file: {json_exec}")
            with open(json_exec, 'r') as json_file:
                json_data = json.load(json_file)

            compatible_versions = []
            for entry in json_data:
                for package in entry.get('compatiblePackages', []):
                    if package.get('name') == package_name:
                        compatible_versions.extend(package.get('versions', []))

            if compatible_versions:
                version = max(compatible_versions, key=lambda x: list(map(int, x.split('.'))))
                print(f"Determined version from JSON: {version}")
            else:
                version = 'latest'
                print("No compatible versions found in JSON, defaulting to 'latest'.")

    # Output the determined version
    print(f"Final determined version: {version}")

    # Further steps for downloading the APK would go here...
