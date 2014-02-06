# Installation of EMR System from USB Key.

## You will need
1. The iilab server computer.
2. Good, stable power (solar battery charged)
3. A laptop with the Putty software installed on it. (See below)
4. The Installation USB key

## Installation of Putty
The installation USB key has a Windows program called Putty on it. This will let you connect
to a server and run commands on it. It needs to be installed before we can continue. If you 
already have Putty on your system, skip to the next section.

1. Power on and log on to your Windows laptop.
2. Insert the USB Key into any open USB port on the laptop.
3. Open Windows Explorer
4. Double click on the USB Key (it may show "IILABINS" as its name)
5. Copy the "Putty" folder from the key to your desktop.

Putty is now installed and you are ready for the next step.

## Installation of EMR System
1. Make sure the server computer is on.
1. Make sure that the laptop is connected to the wifi network ID `health`
1. Double-click Putty in the Putty folder on your desktop. A new dialog box will open.
1. In the `Host Name` box fill in `www.health`.
1. A box will pop up saying `The server's host key is not cached in the registry.` Click `OK`
1. A new window will appear that is your session into the server.
1. Enter `lastmile` when it asks for a username.
1. Enter the password you were given when it asks for a password.
1. You will see some text scroll by and then a prompt like `lastmile@kirando:~$`  
1. Plug the USB key into any unused USB slot on the server.
1. In the Putty window, type:
 11. `sudo mount /dev/disk/by-label/IILABINS /mnt`
 11. The system will output: `[sudo] password for lastmile:`, type the password you were given.
 11. `cd /mnt`
 11. `./deploy.sh`
 11. The system will output:
```
This script requires root permissions
[sudo] password for lastmile: 
1. Uncompressing deployment files...Done
2. Installing startup scripts...Done
3. Changing file permissions...Done
4. Starting database...Done
5. Installing application...Done.
6. Testing application...Done.
```

If all of these steps complete successfully, you will have a working installation! If not, you 
will need to send the deploy.log file to iilab or contact us directly to work through the issue.

Keep your Putty window open.

## Testing the EMR System


