## 

## Formatting SD CARD to internal storage using adb shell

> [!IMPORTANT]
> All your data in SD Card will lose. Backup your data before do next steps

1. Connect the phone with PC and enable USB debugging mode (inside developer's options menu)
2. Install [adb](https://developer.android.com/tools/adb) and open in terminal
3. Now perform the following commands:

    ```bash
    # Connect the phone
	adb devices
	
	# Click allow on the prompt appear on the phone
    adb shell

    # Checking if format as internal storage option is available or not
    sm has-adoptable

    # If above command is false, then type the following command otherwise skip it
    sm set-force-adoptable on

    # Now we will check the disk
    sm list-disks

    # Select the disk uuid, it will be something like: disk:181,49
    # Now we will partition the sd card. Choose the command according to the need
	# Internal storage is place you can install your apps here. Warning: You can't browser this partition from your File explorer.
	# External storage is place you store your files (images, music, documents...)
    sm partition disk:181,49 private # only as internal storage
    sm partition disk:181,49 public # only as external storage
    sm partition disk:181,49 mixed 60 # only 60% as internal and rest 40% as external
    ```
4. Now wait for 2-3 minutes for format your SD Card
 
Note: In some rom like MIUI, HyperOS... need enable `USB debugging (Security settings)` to use `adb shell` (inside developer's options menu)
