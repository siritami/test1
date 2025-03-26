# Foramtting SD CARD using adb shell

1. Connect the phone with PC and enable USB debugging mode (inside developer's options menu)
2. Install adb and open in terminal
3. Now perform the following commands:

    ```bash
    # to connect the phone to adb shell. Click allow on the prompt appear on the phone
    adb shell

    # checking if format as internal storage option is available or not
    sm has-adoptable

    # if above command is false, then type the following command otherwise skip it
    sm set-force-adoptable on

    # now we will check the disk
    sm list-disks

    # select the disk uuid, it will be something like: disk:179,32
    # now we will partition the sd card. Choose the command according to the need
    sm partition disk:179,32 private # only as extended internal storage
    sm partition disk:179,32 public # only as external storage
    sm partition disk:179,32 mixed 60 # only 60% as internal and rest 40% as external
    ```
4. Now restart the phone and you would be able to see that internal storage has expanded.
 
Note: In some rom like MIUI, HyperOS... need enable `USB debugging (Security settings)` (inside developer's options menu)