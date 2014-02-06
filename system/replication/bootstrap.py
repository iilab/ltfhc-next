#!/usr/bin/env python

# Saves the last sequence number in the _changes feed to a _local document 
# for later retrieval. This only needs to be run once

#Importing modules
import requests
import json

changes = "http://localhost:5984/emr/_changes"
localdoc = "http://localhost:5984/emr/_local/last"

r = requests.get(changes)
data = r.json()

lastseq = data['last_seq']

newdata = {"_id":"_local/last","seq":lastseq}

r = requests.put(localdoc,data=json.dumps(newdata))

print r.text