## 

## Formatting SD CARD to internal storage using adb shell

> [!IMPORTANT]
> All your data in SD Card will lose. Backup your data before do next steps

1. Connect the phone with PC and enable USB debugging mode (inside developer's options menu)

2. Install [adb](https://developer.android.com/tools/adb), connect your phone and open in terminal

3. Type `adb devices` hit enter

4. Click allow on the prompt appear on the phone

5. Type `adb shell` hit enter

6. Type `sm has-adoptable`

7. If above command is false, then type the following command `sm set-force-adoptable on` otherwise skip this step

8. Type `sm list-disks`. Find disk uuid, example: `disk:181,49`

> [!IMPORTANT]
> Internal storage is place you can install your apps here.
> 
> **Warning:** You can't browser Internal storage partition from your File explorer.
> 
> External storage is place you store your files (images, music, documents...).

9. Choose your suite command this step:

	Format all capacity your SD Card as Internal storage:
	
    `sm partition disk:181,49 private`
	
	Format your SD Card to two partition Internal storage and External storage:
	
	Example: You want 60% of SD Card capacity to Internal storage and 40% capacity External storage
	
    `sm partition disk:181,49 mixed 60`
	
	But when you need rollback to default state SD Card all capacity your SD Card as External storage
	
	`sm partition disk:181,49 public`

4. Now wait for 2-3 minutes for format your SD Card
 
Note: In some rom like MIUI, HyperOS... need enable `USB debugging (Security settings)` to use `adb shell` (inside developer's options menu)
