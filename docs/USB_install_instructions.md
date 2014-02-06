# Installation of EMR System from USB Key.

## You will need
1. The iilab server computer.
2. Good, stable power (solar battery charged)
3. A laptop with Google Chrome and Putty software installed on it. (See below)
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

### From the browser

1. Run Google Chrome
1. Type `http://www.health` in the address bar.
1. The `LTFHC Home` screen will appear.
1. Click `Login` in the upper-right corner.
1. Enter the LTFHC username and password you were given.
1. Click `New Patient` in the upper-right corner. 
1. Fill in the form with fake data. Be creative!
1. Click `Save and Continue Visit`.
1. A green box will pop over the next page that says `The patient's data has been saved`.
Click the `X` on the right side of the box to dismiss it.
1. Fill in the `Patient Intake` and check at least one `Reason for Visit`.
1. Continue to fill in the rest of the form. Make sure you use the pulldowns, radio buttons 
and checkbox lists. Click `Save` at the bottom.
1. A green box will pop over that says `The visit's data has been saved`.
1. Click the `Visits` item in the black navigation bar at the top of the page.
1. Verify that the visit form you filled out is there. Click `Edit` next to the item you created.
1. Verify that all of the data 

