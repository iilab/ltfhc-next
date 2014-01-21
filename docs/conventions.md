# Code Conventions

Multi-word identifiers are separated by underscores. 

List names are plural. 

Field names are singular.

"number of x” fields begin with “number” (ex Number of Pregnancies is named “number_pregnancy”)

“dose of” or “quantity of” fields begin with “quantity” (ex "Quantity of Condoms Dispensed:” is named “quantity_condoms_dispensed”)

acronyms in field names are NOT in all caps, but honor underscores. (ex “hiv_risks” “hiv_diagnosis_dna_pcr"

field names should be as descriptive as possible

types should be constrained to these options: 
* begin form
* end form
* string
* text
* number
* select_one
* select_multiple
* date
* yes_no
* yes_no_unknown

select_one and select_multiple create dropdowns or checkbox lists based on the list_name associated with the line.

yes_no and yes_no_unknown create radio button lists.

list_names should be sourced from the list_name column on the "lists" sheet in the spreadsheet. They need to be unique within the system and follow underscore guidelines.