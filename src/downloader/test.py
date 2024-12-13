# test.py
from downloader.github import major_cli_version, cli_exec, patches_exec, integration_exec, json_exec

def show_cli():
    print(f"Major CLI Version: {major_cli_version}")
    print(f"CLI Executable: {cli_exec}")
    print(f"Patches Executable: {patches_exec}")
    print(f"Integration Executable: {integration_exec}")
    print(f"JSON Executable: {json_exec}")

if __name__ == "__main__":
    show_cli()
