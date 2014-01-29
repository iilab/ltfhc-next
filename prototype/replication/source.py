#!/usr/bin/env python

# Gets the last sequence number in the _local/last document. 
# Gets all data changes since that document.

#Importing modules
import requests
import json

changes = "http://localhost:5984/emr/_changes"
localdoc = "http://localhost:5984/emr/_local/last"

r = requests.get(localdoc)
#seq = r.json()
seq = {'seq':0}

changesparams = {
	"filter":"emr/user_data",
	"since": seq["seq"]
	}

r = requests.get(changes,params=changesparams)

print r.json()

# Save output, copy to remote end, post to _rev_diff URL
# http://wiki.apache.org/couchdb/HttpPostRevsDiff