# System Setup and Testing

The wiring inside of the box is dressed such that everything only plugs in where it's supposed to. If you have to force a connection, you're doing it wrong. 

Once a system is installed, there are a few visual cues to look for:

 - The green power light on the server should be on.
 - The Charging light on the Solar charge controller should be on.
 - The HF radio should be able to be turned on from the handset.

The laptop should be able to connect to the 'health' Wifi network with the password that was provided. The application can then be tested from the web browser by browsing to `http://www.health` and running through the test methodology in the `ltfhc-next/docs/USB_install_instructions.md` file under `Testing the System`.

Internet connectivity (if available) can be tested by connecting via PuTTY and running `ping google.com`. You should see somthing like this:
```
PING google.com (74.125.228.231): 56 data bytes
64 bytes from 74.125.228.231: icmp_seq=0 ttl=54 time=14.888 ms
64 bytes from 74.125.228.231: icmp_seq=1 ttl=54 time=18.051 ms
```

Radio connectivity can be tested by connecting via PuTTY and running `uucp /home/ltfhc-deploy/ltfhc-next/README.md nkasi\!/var/spool/uucppublic/README.md` this won't print anything out if it's successful. After a few seconds, you should see and hear the radio making a call to nkasi. You can check the status by running `uustat --all` where the output will look similar to:
```
bugsA027h namansi nkasi 04-01 13:50 Copying file README.md (sending 1283 bytes)
```
