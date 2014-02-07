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
1. In the `Host Name` box fill in `192.168.42.1`.
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
7. Bootstrapping replication...Done.
System ready for testing in the browser at https://www.health/
```

If all of these steps complete successfully, you will have a working installation! If not, you 
will need to send the deploy.log file to iilab or contact us directly to work through the issue.

Keep your Putty window open.

## Testing the EMR System

### Making a Patient and a Visit

1. Run Google Chrome
1. Type `https://www.health` in the address bar.
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
1. Verify that all of the data is the same as you entered it.

### Creating a User

Find a healthcare worker that will be using the system. Get their name and help them decide on a password that they can remember. Try not to use birthdays or their names for passwords, but if that's the only choice then it is fine. We will be using these in the following steps.

1. In the upper right corner next to `ltfhc` you will see a little down arrow, click it.
1. In the menu that pulls down, select `Manage Users` to load the user management tool.
1. Fill in `User Name` - this is the ID they will use to access the system. We recommend using their last name or their nickname.
1. Fill in `Full Name`
1. Select `Full Access` under `User Type` 
1. Fill in a password under `Password`. 
1. Don't worry about any of the other fields.
1. Click `Create User` 
1. You will see the user's information pop up in the table on the right.

### Testing the new user

1. In the upper right corner next to `ltfhc` you will see a little down arrow, click it.
1. In the menu that pulls down, select `Logout`. 
1. The `LTFHC Home` screen will appear.
1. Click `Login` in the upper-right corner.
1. Enter the username and password that you just used to create the user.
1. Click `Visits` and see if the visit that you created earlier is visible.
