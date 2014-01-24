# Reports Json Schema

Reports should be valid JSON Schema (in order to be displayed as forms) with added semantics for calculation. 

## Indicators

Within the "properties" field, each object within is an indicator with its machine name as a key and an object as value.

"operation" needs to contain valid javascript returning a boolean and referencing variables in the scope of visit documents (for which doc.collection = "visit").

The reduce job in the reports will increment indicators when the condition is true.

Some examples:
* Count patients an approximate age of more than 20 years old: ```"condition": "patient.approxage < 20"```
* Count patients which have take a pregnancy test during their first visit at the clinic: ```"condition": "anc_first_visit.pregnancy_test"```
* Count patients whose systolic blood pressure either at the first visit of follow up visit was more than 140 and whose diastolic blood pressure was more than 90: ```"condition": "((anc_first_visit.bp_systolic >= 140 || anc_followup.bp_systolic) >= 140) && ((anc_first_visit.bp_diastolic >= 90|| anc_followup.bp_diastolic) >= 90)"```

## Ranges

Ranges define the columns that are available in a report.