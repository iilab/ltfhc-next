# Converting CSV to JSON with Kanso

1. Create a CSV file with the first line being the property names of your objects.
2. `kanso transform csv <source> <destination>`
3. Destination file will be a nice JSON file.

Example:

```Workbook1.csv
collection,order,item
gender,1,Male
gender,2,Female
```

```
$ kanso transform csv ~/Desktop/Workbook1.csv blah.json
Transformed 100 rows
Transformed 200 rows
Transformed 300 rows
Transformed 354 rows
OK: Saved 354 entries to blah.json
```

```
[
{"collection":"gender","order":"1","item":"Male"},
{"collection":"gender","order":"2","item":"Female"}
]
```

