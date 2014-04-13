# Naming Conventions

* Multi-word IDs are separated by underscores.
* Field IDs should be as descriptive as possible
* List names are plural. 
* Field IDs are singular.
* `number of x` field IDs begin with `number_` (ex Number of Pregnancies is id “number_pregnancy”)
* `dose of` or `quantity of` field IDs begin with `quantity_` (ex "Quantity of Condoms Dispensed:” is id `quantity_condoms_dispensed`)
* acronyms in field IDs are NOT in all caps, but honor underscores. (ex `hiv_risks` `hiv_diagnosis_dna_pcr`
* `other` fields begin with `other_` (ex "Other Complaint:" is id `complaint_other`)

Field types must be constrained to these options: 
* begin form
* end form
* string
* text
* number
* select_one (creates dropdown from list in `list_id`)
* select_multiple (creates checkboxes from list in `list_id`)
* date
* yes_no (creates radio buttons)
* yes_no_unknown (creates radio buttons)

`list_id` should be sourced from the `list_id` column on the `lists` sheet in the spreadsheet. They need to be unique within the system and follow underscore guidelines.