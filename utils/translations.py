#!/usr/bin/env python

import json
import argparse

parser = argparse.ArgumentParser(description='Generates translations for Kanso app_settings. Pass in a standard JSON file with at least "en" and "sw" and an object name')
parser.add_argument('-i','--input', help='Input file name',required=True)
args = parser.parse_args()

with open(args.input) as file:
	reports = json.load(file)

out = []
for rk in reports:
	if rk.startswith('report_'):
		for r in reports[rk]['properties'].items():
			#print r[1]

			if 'en' in r[1]: 
				en=r[1].get('en') 
			else: 
				en = ""
			if 'sw' in r[1]: 
				sw=r[1].get('sw') 
			else: 
				sw = ""

			out.append({'key': r[0], 'sw': sw, 'en': en})

print json.dumps(out)
