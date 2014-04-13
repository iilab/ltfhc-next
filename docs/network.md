# Network Description

The Tanzania network is loosely configured in a hub-and-spoke arrangement. By convention, Nkasi can dial out to all nodes via UUCP to fetch their data and push updates. In reality, all of the nodes are configured the same way, and all nodes can connect to each other over UUCP.

Nkasi and Kirando have Internet connections via Airtel's EDGE network and use OpenVPN to connect to ltfhc-prod.hact.net on port 443.