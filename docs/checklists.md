# Locations

## Nkasi Checklist

 * All Systems - Routine Check
 * Radio - Diagnostic
   * Run Diagnostic Call to Kirando / Izinga / Kasovu / Namansi
 * 3G - Diagnostic
 * 3G - Troubleshooting 

## Kirando Checklist

 * All Systems - Routine Check
 * Power - Deployment / Upgrade
 * Radio - Diagnostic
   * Run Diagnostic Call to Nkasi
  
# Checklists

## Routine Checklists

### Power System

#### Check #1 - Visual inspection.

There are no **burns, leaks, corrosion or any other traces of damage** on the solar charger and power connectors.

#### Check #2 - Cables are solidly connected. 

**Pull very lightly on the cables** to check that there are no loose connectors.

#### Check #3 - Radio Handset Screen must be on.

![](/docs/img/handset_screen.png)

#### Check #4 - Modem Power LED must be green

![](/docs/img/modem.png)

#### Check #5 - Server Power LED must be green

![](/docs/img/power.png)

### Radio System

#### Check #1 - Channel Test Call

This will check the quality of the line with 

 * Press **CALL**
 * Select **Channel Test?** as the call type
 
![](/docs/img/channel_test.png)

 * Select a station to call from this list and press **CALL**

> **Station addresses**
- Kirando - 12301
- Nkasi - 12302
- Izinga - 12303
- Kasovu - 12304
- Namansi - 12305

 * Listen for the revertive signal from the other station. The volume and clarify of this signal indicates the quality of the channel/mode.

#### Check #2 - Power drain verification

Make a Call and check that the Server is not rebooting due to insufficient current.

 * Press **CALL**
 * Select **Selective Call** as the call type
 
![](/docs/img/selective_call.png)

 * Select a station to call from this list and press **CALL**

> **Station addresses**
- Kirando - 12301
- Nkasi - 12302
- Izinga - 12303
- Kasovu - 12304
- Namansi - 12305

 * Observe if the **Power LED on Server stays green**

![](/docs/img/power.png)


### Server System

 * Access https://www.health 

![](/docs/img/please_login.png)

 * Enter valid credentials

![](/docs/img/login.png)

 * You should see the home page

![](/docs/img/home.png)

### 3G System

TBD.

## Diagnostic Checklists

### Automated System Diagnostic

  * Connect the iilab-maintenance usb system to a laptop.
  * Install VirtualBox
  * Install Vagrant
  * Open the Command Line
  * Change the directory to the USB drive 

``` 
cd e:\iilab-maintenace
```

  * Start the maintenance virtual machine.

```
vagrant up
```

  * Execute diagnostic script
  
```
vagrant ssh -c "ansible-playbook -i production site.yml -t diagnose -C"
```

### Power System

 * Use Putty to connect to the Server.
 * Insert the flash drive.
 * Mount the flash drive
```
sudo mkdir /media/usb
sudo mount -t vfat /dev/sdb1 /media/usb
```
 * Execute script
 * /media/usb/ltfhc-system/scripts/solar.py

### Radio System

  * Press **CALL**
  * Select **Get Status Call**
  
![](/docs/img/get_status_call.png)

### Modem System

  * Connect to modem via serial port. (see p.23 of HF Data Modem 3212 User Guide).
  
![](/docs/img/modem_pc.png)

  * Use Putty in Serial mode to connect.
  * Type ATD<remote address> then Enter
  * If the link is established the Link LEDs change to solid color and **CONNECT** appears in the terminal.

### Server System

  * Connect via Ethernet cable to the LAN2 port 
  * Use putty 


  * Check system version. Update files. Restart.

  * Trigger UUCP file transfer.

### 3G System

  * Check USB port

```
$lsusb
Bus 001 Device 005: ID 19d2:0042 ZTE WCDMA Technologies MSM 
Bus 001 Device 003: ID 040d:3801 VIA Technologies, Inc. 
Bus 001 Device 004: ID 1410:a023 Novatel Wireless 
Bus 001 Device 001: ID 1d6b:0002 Linux Foundation 2.0 root hub
Bus 002 Device 001: ID 1d6b:0001 Linux Foundation 1.1 root hub
Bus 003 Device 001: ID 1d6b:0001 Linux Foundation 1.1 root hub
Bus 004 Device 001: ID 1d6b:0001 Linux Foundation 1.1 root hub
Bus 005 Device 001: ID 1d6b:0001 Linux Foundation 1.1 root hub
```

  * Check mounted device id

```
ls -la /dev/serial/by-id/
total 0
drwxr-xr-x 2 root root 160 Apr  5 12:14 .
drwxr-xr-x 4 root root  80 Apr  5 12:14 ..
lrwxrwxrwx 1 root root  13 Apr  5 12:14 usb-Foxconn_Novatel_Wireless_Gobi3000-if01-port0 -> ../../ttyUSB0
lrwxrwxrwx 1 root root  13 Apr  5 12:14 usb-Foxconn_Novatel_Wireless_Gobi3000-if02-port0 -> ../../ttyUSB1
lrwxrwxrwx 1 root root  13 Apr  5 12:14 usb-Foxconn_Novatel_Wireless_Gobi3000-if03-port0 -> ../../ttyUSB2
lrwxrwxrwx 1 root root  13 Apr  5 12:14 usb-ZTE_Incorporated_ZTE_WCDMA_Technologies_MSM_MF1900ZTED010000-if00-port0 -> ../../ttyUSB3
lrwxrwxrwx 1 root root  13 Apr  5 12:14 usb-ZTE_Incorporated_ZTE_WCDMA_Technologies_MSM_MF1900ZTED010000-if01-port0 -> ../../ttyUSB4
lrwxrwxrwx 1 root root  13 Apr  5 12:14 usb-ZTE_Incorporated_ZTE_WCDMA_Technologies_MSM_MF1900ZTED010000-if03-port0 -> ../../ttyUSB5

```
 * Check on auto up 
 
```
auto ppp0
iface ppp0 inet ppp
        provider airtel
```
        
 * Check on peers

```
$ more /etc/ppp/peers/airtel
file /etc/ppp/options.mobile
connect "/usr/sbin/chat -v -t15 -f /etc/chatscripts/mobile-modem"
```

 * Check on /etc/ppp/options.mobile 
 
Should be:
```
$ more /etc/ppp/options.mobile
/dev/serial/by-id/usb-ZTE_Incorporated_ZTE_WCDMA_Technologies_MSM_MF1900ZTED010000-if03-port0
115200
lock
crtscts
modem
passive
novj
defaultroute
noipdefault
usepeerdns
noauth
hide-password
persist
holdoff 10
maxfail 0
debug
```

## Troubleshooting Checklists

Click the handset power button to power on the radio.
![](/docs/img/handset.png)

## Repair Checklists

## Deployment Checklists

### Power System

#### Installation

 * Separate power from signal cables on HF setup.

 * Documentation 
   * Take pictures of the connections.

#### Update

 * Documentation 
   * Take pictures of the connections.

### Server System

 * Documentation 
   * Take pictures of the connections.

#### Installation

#### Update


