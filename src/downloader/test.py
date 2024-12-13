from github import major_cli_version, cli_exec, patches_exec, integration_exec, json_exec

def show_cli():
    print(f"\033[92m[+] Major CLI Version: {major_cli_version}\033[0m")
    print(f"\033[92m[+] CLI Exec Path: {cli_exec}\033[0m")
    print(f"\033[92m[+] Patches Exec Path: {patches_exec}\033[0m")
    print(f"\033[92m[+] Integration Exec Path: {integration_exec}\033[0m")
    print(f"\033[92m[+] JSON Exec Path: {json_exec}\033[0m")

if __name__ == "__main__":
    show_cli()