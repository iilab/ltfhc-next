//
// DRC Reports
//
// in the map, for each document
//   for each report line
//     for each bucket
//        

exports.reports = function() {
    return {
        "report_familyplanning_1": {
            "title": "3.7.1 The use of Family Planning services",
            "type": "object",
            "properties": {
                "new_cases_new_accepted_fp_services": {
                    "line_number": "1",
                    "fr": "Nouveaux cas (Nouvelle acceptante) des services PF",
                    "en": "New cases (new accepted) FP services",
                    "condition": "true"
                },
                "including_20yrs": {
                    "line_number": "2",
                    "fr": "Dont Moins de 20 ans",
                    "en": "Including<20yrs",
                    "condition": "true"
                },
                "old_cases_renewing_or_changing_of_fp_method": {
                    "line_number": "3",
                    "fr": "Ancien Cas (Renouvellement ou changement des methodes PF)",
                    "en": "Old cases renewing or changing of FP method",
                    "condition": "true"
                }
            },
            "definitions": {
                "columns": {
                    "as": {
                        "fr": "AS",
                        "en": "AS",
                        "title": "AS",
                        "condition": "true"
                    },
                    "has": {
                        "fr": "HAS",
                        "en": "HAS",
                        "title": "HAS",
                        "condition": "true"
                    },
                    "hz": {
                        "fr": "HZ",
                        "en": "HZ",
                        "title": "HZ",
                        "condition": "true"
                    },
                    "total": {
                        "fr": "TOTAL",
                        "en": "TOTAL",
                        "title": "TOTAL",
                        "condition": "true"
                    }
                }
            },
            "parent": "report_familyplanning"
        },
        "report_familyplanning_2": {
            "title": "3.7.2  The use of FP methods",
            "type": "object",
            "properties": {
                "inj_deprovera": {
                    "line_number": "1",
                    "fr": "Inj Dépoprovera",
                    "en": "Inj. Deprovera",
                    "condition": "true"
                },
                "inj_norestera": {
                    "line_number": "2",
                    "fr": "Inj. Norestera",
                    "en": "Inj. Norestera",
                    "condition": "true"
                },
                "pill_tabs": {
                    "line_number": "3",
                    "fr": "Plaquette pilule",
                    "en": "Pill tabs",
                    "condition": "true"
                },
                "combined_pill_tabs": {
                    "line_number": "4",
                    "fr": "Plaquette pilule combinée",
                    "en": "Combined pill tabs",
                    "condition": "true"
                },
                "placed_iuds": {
                    "line_number": "5",
                    "fr": "DIU placés",
                    "en": "Placed IUDs",
                    "condition": "true"
                },
                "male_preservatif": {
                    "line_number": "6",
                    "fr": "Préservatif masculin",
                    "en": "Male preservatif",
                    "condition": "true"
                },
                "female_preservatif": {
                    "line_number": "7",
                    "fr": "Préservatif féminin",
                    "en": "Female preservatif",
                    "condition": "true"
                },
                "spemicid_key": {
                    "line_number": "8",
                    "fr": "Spermicide cés",
                    "en": "Spemicid key",
                    "condition": "true"
                },
                "spemicid_bomb": {
                    "line_number": "9",
                    "fr": "Spermicide bombe",
                    "en": "Spemicid bomb",
                    "condition": "true"
                },
                "implants": {
                    "line_number": "10",
                    "fr": "Implants",
                    "en": "Implants",
                    "condition": "true"
                },
                "collier_de_cycle": {
                    "line_number": "11",
                    "fr": "Collier du cycle",
                    "en": "Collier de cycle",
                    "condition": "true"
                },
                "mama": {
                    "line_number": "12",
                    "fr": "MAMA",
                    "en": "MAMA",
                    "condition": "true"
                },
                "confirmed_mao": {
                    "line_number": "13",
                    "fr": "MAO confirmé",
                    "en": "Confirmed MAO",
                    "condition": "true"
                },
                "total": {
                    "line_number": "14",
                    "fr": "TOTAL",
                    "en": "Total",
                    "condition": "true"
                },
                "average_of_new_acceptance_under_modern_contraceptives": {
                    "line_number": "15",
                    "line": "singlecell",
                    "fr": "Proportion des nouvelles acceptantes sous méthodes contraceptives modernes = total nouvelles acceptantes d’une méthode x 100 / Pop Femmes 15-49 ans du mois",
                    "en": "Average of new acceptance under modern contraceptives = total number of new acceptance of one method X 100/women Population ranged from 15-49yrs of the month",
                    "condition": "true"
                }
            },
            "definitions": {
                "columns": {
                    "new_acceptance_as": {
                        "fr": "Nouvelles acceptantes AS",
                        "en": "New acceptance AS",
                        "title": "New acceptance AS",
                        "condition": "true"
                    },
                    "new_acceptance_has": {
                        "fr": "Nouvelles acceptantes HAS",
                        "en": "New acceptance HAS",
                        "title": "New acceptance HAS",
                        "condition": "true"
                    },
                    "new_acceptance_hz": {
                        "fr": "Nouvelles acceptantes HZ",
                        "en": "New acceptance HZ",
                        "title": "New acceptance HZ",
                        "condition": "true"
                    },
                    "renewing_during_this_year": {
                        "fr": "Renouvelle ments années En cours",
                        "en": "Renewing  during this year",
                        "title": "Renewing  during this year",
                        "condition": "true"
                    },
                    "renewing_during_previous_year": {
                        "fr": "Renouvelle ments années Antérieure",
                        "en": "Renewing during previous year",
                        "title": "Renewing during previous year",
                        "condition": "true"
                    },
                    "used_quantity": {
                        "fr": "Quantités Utilisées",
                        "en": "Used quantity",
                        "title": "Used quantity",
                        "condition": "true"
                    },
                    "o_s": {
                        "fr": "Jrs Rupture",
                        "en": "O.S",
                        "title": "O.S",
                        "condition": "true"
                    },
                    "qty_available": {
                        "fr": "Quantité Disponible",
                        "en": "Qty available",
                        "title": "Qty available",
                        "condition": "true"
                    },
                    "factors": {
                        "fr": "Facteurs",
                        "en": "Factors",
                        "title": "Factors",
                        "condition": "true"
                    },
                    "year_of_couple_protection": {
                        "fr": "Annee Couple Protection",
                        "en": "Year of couple protection",
                        "title": "Year of couple protection",
                        "condition": "true"
                    }
                }
            },
            "parent": "report_familyplanning"
        },
        "report_anc": {
            "collection": "reports",
            "class": "schema",
            "_id": "reports/schema/cd/anc",
            "$schema": "http://json-schema.org/draft-04/schema#",
            "title": "Monthly Canvas - 3.1 Antenatal Clinic",
            "type": "object",
            "properties": {
                "statistics": {
                    "line_number": "0",
                    "fr": "Statistiques",
                    "en": "Statistics"
                },
                "target_population": {
                    "line_number": "0a",
                    "line": "singlecell",
                    "fr": "Population Cible",
                    "en": "Target Population",
                    "condition": "true"
                },
                "anc_planned_sessions": {
                    "line_number": "0b",
                    "line": "singlecell",
                    "fr": "Nombre de séances planifiées",
                    "en": "ANC planned sessions",
                    "condition": "true"
                },
                "anc_sessions": {   
                    "line_number": "0c",
                    "line": "singlecell",
                    "fr": "Nombre de séances réalisées",
                    "en": "ANC sessions",
                    "condition": "subforms.anc_first_visit && subforms.anc_followup"
                },
                "reports_data": {
                    "line_number": "1",
                    "fr": "Rapports",
                    "en": "Reports"
                },
                "anc_first_visit": {
                    "line_number": "1a",
                    "fr": "Consultation Pré-Natale 1",
                    "en": "Antenatal Clinic Visit 1",
                    "condition": "subforms.anc_first_visit"
                },
                "anc_first_visit_less_than_20": {
                    "line_number": "1b",
                    "fr": "Consultation Pré-Natale 1 (moins de 20 ans)",
                    "en": "Antenatal Clinic Visit 1 (less than 20 yrs)",
                    "condition": "subforms.anc_first_visit && patient.current_age_years < 20"
                },
                "anc_followup": {
                    "line_number": "2",
                    "fr": "Consultation Pré-Natale 2+",
                    "en": "Antenatal Clinic Visit 2+",
                    "condition": "subforms.anc_followup"
                },
                "anc_realised_1st_term": {
                    "line_number": "3",
                    "fr": "?",
                    "en": "Pregnant women who realised the Antenatal clinic 1st term",
                    "condition": "true"
                },
                "anc_realised_last_pregnancy": {
                    "line_number": "4",
                    "fr": "?",
                    "en": "Pregnant women with ANC4 during their last pregnancy",
                    "condition": "true"
                },
                "anc_realised_last_pregnancy": {
                    "line_number": "5",
                    "fr": "Fe avec au moins 3 CPN dont une au 8ème-9ème mois",
                    "en": "Pregnant women with ANC4 with one at 8th or 9th month",
                    "condition": "true"
                },
                "pregant_women_tested_at_risk": {
                    "line_number": "6a",
                    "fr": "Fe à risques detectés",
                    "en": "Tested Pregnant women at risk",
                    "condition": "true"
                },
                "pregant_women_referred_at_risk": {
                    "line_number": "6b",
                    "fr": "Fe à risques référés",
                    "en": "Refered Pregant women at risk to the general hospital",
                    "condition": "true"
                },
                "pregant_women_referred_at_risk_less_than_20": {
                    "line_number": "6c",
                    "fr": "Fe à risques référés de moins de 20 ans",
                    "en": "Pregnant women under 20 yrs refered",
                    "condition": "TODO && patient.current_age_years < 20"
                },
                "iron_folic_1st": {
                    "line_number": "7a",
                    "fr": "Fer + Acide Folique - Nbre Fe ayant reçu au moins une dose",
                    "en": "Iron + folic acid 1st dose received",
                    "condition": "true"
                },
                "iron_folic_3rd": {
                    "line_number": "7b",
                    "fr": "Fer + Acide Folique - Nbre Fe ayant reçu la 3ème dose",
                    "en": "Iron + folic acid 3rd dose received",
                    "condition": "true"
                },
                "sulfadox_pyrimet_1st": {
                    "line_number": "8a",
                    "fr": "Sulfadox + Pyrimet - Nbre Fe ayant reçu 1ère dose",
                    "en": "Sulfadox + Pyrimet 1st dose received",
                    "condition": "true"
                },
                "sulfadox_pyrimet_2nd": {
                    "line_number": "8a",
                    "fr": "Sulfadox + Pyrimet - Nbre Fe ayant reçu 2ème",
                    "en": "Sulfadox + Pyrimet 2nd dose received",
                    "condition": "true"
                },
                "sulfadox_pyrimet_3rd": {
                    "line_number": "8a",
                    "fr": "Sulfadox + Pyrimet - Nbre Fe ayant reçu 3ème dose (VIH+)",
                    "en": "Sulfadox + Pyrimet 3rd dose received",
                    "condition": "true"
                },
                "received_vat": {
                    "line_number": "9",
                    "fr": "Fe ayant reçu VAT (2ème à 5ème dose)",
                    "en": "?",
                    "condition": "true"
                },
                "vaccinated_before_pregnancy": {
                    "line_number": "10",
                    "fr": "Fe complètement vaccinées avant Grossesse",
                    "en": "Completed vaccinated before pregnancy",
                    "condition": "true"
                },
                "required_mild": {
                    "line_number": "11",
                    "fr": "Nbre de femmes enceintes ayant acquis une MII",
                    "en": "Who required the MILD",
                    "condition": "true"
                },
                "received_mebendazole": {
                    "line_number": "12",
                    "fr": "Nbre de femmes enceintes ayant regu le Mébendazole à partir du 2ème trimestre de la grossesse",
                    "en": "Who received Mebendazole since the 2nd term",
                    "condition": "true"
                },
                "statistics_2": {
                    "line_number": "13",
                    "fr": "Statistiques",
                    "en": "Statistics"
                },
                "used_rate_anc": {
                    "line_number": "13a",
                    "line": "singlecell",
                    "fr": "Taux d'utilisation CPN = NC AS (a) / Pop femmes enceintes du mois x 100",
                    "en": "Used rate ANC= ANC 1 AS (new registered)X100/pop monthly pregnant women",
                    "condition": "true"
                },
                "high_risk_detected": {
                    "line_number": "13b",
                    "line": "singlecell",
                    "fr": "Proportion de grossesses à haut risque détectés= Total fe à hauts risques détectés (d) x 100 /Total cas (a+b+c)",
                    "en": "Pregnacies at high risk detected = total pregnancies at high risk detected X100/tota new registered",
                    "condition": "true"
                },
                "high_risk_refered": {
                    "line_number": "13c",
                    "line": "singlecell",
                    "fr": "Proportion de grossesses à haut risque référées= Total fe à hauts risqucs référées (e) x 100 /Total fe e hauts risques détectés (d)",
                    "en": "Pregnancies at high risk avarage refered= total pregnanciesat high risk refered X100/",
                    "condition": "subforms.anc_first_visit && subforms.anc_first_visit.current_gestationalage_weeks >= 1 && patient.current_age_years < 20"
                }
            },
            "definitions": {
                "columns": {
                    "AS": {
                        "title": "AS",
                        "condition": "true"
                    },
                    "HAS": {
                        "title": "HAS",
                        "condition": "true"
                    },
                    "HZ": {
                        "title": "HZ",
                        "condition": "true"
                    },
                    "total": {
                        "title": "Total",
                        "condition": "true"
                    }  
                }
            }
        }, // end of report_anc
        "report_childgrowth": {
            "collection": "reports",
            "class": "schema",
            "_id": "reports/schema/childgrowth",
            "$schema": "http://json-schema.org/draft-04/schema#",
            "title": "Report Child Growth",
            "type": "object",
            "properties": {
                "type_of_vaccine_by_age": {
                    "line_number": "1",
                    "fr": "Aina ya Chanjo Kwa Umri",
                    "en": "Type of vaccine by age"
                },
                "bcg_age_<1_year_+_(within_service_area)": {
                    "line_number": "1a",
                    "fr": "BCG Umri mwaka 1+ (Ndani ya eneo Ia huduma)",
                    "en": "BCG at the age of 1+ (Within service area )",
                    "condition": "patient.current_age_years < 1 && subforms.immunization && subforms.immunization.vaccine_dispensed.indexOf('bcg') != -1"
                },
                "bcg_at_the_age_of_1+_(within_service_area_)": {
                    "line_number": "1b",
                    "fr": "BCG Umri mwaka 1+ (Ndani ya eneo Ia huduma)",
                    "en": "BCG at the age of 1+ (Within service area )",
                    "condition": "patient.current_age_years >= 1 && subforms.immunization && subforms.immunization.vaccine_dispensed.indexOf('bcg') != -1"
                },
                "bcg_age_<1_year_+_(out_of_service_area)": {
                    "line_number": "1c",
                    "fr": "BCG Umri mwaka <1 (Nje ya eneo la huduma)",
                    "en": "BCG Age <1 year + (out of service area)",
                    "condition": "patient.current_age_years < 1 && subforms.immunization && subforms.immunization.vaccine_dispensed.indexOf('bcg') != -1"
                },
                "bcgat_the_age_of_1_+_(out_of_service_area)": {
                    "line_number": "1d",
                    "fr": "BCG Umri mwaka 1+ (Nje ya eneo la huduma)",
                    "en": "BCGat the Age of 1 + (out of service area)",
                    "condition": "patient.current_age_years >= 1 && subforms.immunization && subforms.immunization.vaccine_dispensed.indexOf('bcg') != -1"
                },
                "polio_at_the_age_<1_(within_area_service)": {
                    "line_number": "1e",
                    "fr": "Polio Umri mwaka <1 (Ndani ya eneo Ia huduma)",
                    "en": "Polio at the age <1 (within area service)",
                    "condition": "patient.current_age_years < 1 && subforms.immunization && subforms.immunization.vaccine_dispensed.indexOf('bcg') != -1"
                },
                "polio_at_the_age_1+_(within_service_area)": {
                    "line_number": "1f",
                    "fr": "Polio Umri mwaka 1+ (Ndani ya eneo Ia huduma)",
                    "en": "Polio at the age 1+ (within service area)",
                    "condition": "patient.current_age_years >= 1 && subforms.immunization && subforms.immunization.vaccine_dispensed.indexOf('polio') != -1"
                },
                "polio_at_the_age_<1_(out_of_service_area)": {
                    "line_number": "1k",
                    "fr": "Polio Umri mwaka <1 (Nje ya eneo la huduma)",
                    "en": "Polio at the age <1 (out of service area)",
                    "condition": "patient.current_age_years < 1 && subforms.immunization && subforms.immunization.vaccine_dispensed.indexOf('polio') != -1"
                },
                "polio_at_the_age_of_1_+_(out_of_service_area)": {
                    "line_number": "1l",
                    "fr": "Polio Umri mwaka 1+ (Nje ya eneo la huduma)",
                    "en": "Polio at the age of 1 + (out of service area)",
                    "condition": "patient.current_age_years >= 1 && subforms.immunization && subforms.immunization.vaccine_dispensed.indexOf('polio') != -1"
                },
                "penta_at_the_age_<1_(within_service_area)": {
                    "line_number": "1i",
                    "fr": "PENTA Umri mwaka <1 (Ndani ya eneo Ia huduma)",
                    "en": "PENTA at the age <1 (within service area)",
                    "condition": "patient.current_age_years < 1 && subforms.immunization && subforms.immunization.vaccine_dispensed.indexOf('polio') != -1"
                },
                "penta_at_the_age_1+_(within_service_area)": {
                    "line_number": "1j",
                    "fr": "PENTA Umri mwaka 1+ (Ndani ya eneo Ia huduma)",
                    "en": "PENTA at the age 1+ (within service area)",
                    "condition": "patient.current_age_years >= 1 && subforms.immunization && subforms.immunization.vaccine_dispensed.indexOf('penta') != -1"
                },
                "measles_at_the_age_<1_(within_service_area)": {
                    "line_number": "1m",
                    "fr": "Surua Umri mwaka <1 (Ndani ya eneo Ia huduma)",
                    "en": "measles at the age <1 (within service area)",
                    "condition": "patient.current_age_years < 1 && subforms.immunization && subforms.immunization.vaccine_dispensed.indexOf('measles') != -1"
                },
                "measles_at_the_age_1+_(within_service_area)": {
                    "line_number": "1n",
                    "fr": "Surua Umri mwaka 1+ (Ndani ya eneo Ia huduma)",
                    "en": "measles at the age 1+ (within service area)",
                    "condition": "patient.current_age_years >= 1 && subforms.immunization && subforms.immunization.vaccine_dispensed.indexOf('measles') != -1"
                },
                "measles_at_the_age_<1_(out_of_service_area)": {
                    "line_number": "1p",
                    "fr": "Surua Umri mwaka <1 (Nje ya eneo la huduma)",
                    "en": "measles at the age <1 (out of service area)",
                    "condition": "patient.current_age_years < 1 && subforms.immunization && subforms.immunization.vaccine_dispensed.indexOf('measles') != -1"
                },
                "attendance_growth_of_6_months_old_baby": {
                    "line_number": "3",
                    "fr": "Mahudhurio ya ukuaji wa mtoto umri wa miezi 6",
                    "en": "Attendance growth of 6 months old baby",
                    "condition": "true"
                },
                "total_attendance": {
                    "line_number": "7a",
                    "fr": "Jumla ya Mahudhurio",
                    "en": "Total attendance",
                    "condition": "subforms.well_child_visit"
                },
                "the_ratio_of_weight_by_age": {
                    "line_number": "5b",
                    "fr": "Uwaino wa uzito kwa umri",
                    "en": "the ratio of weight by age",
                    "condition": "true"

                },
                "the_ratio_of_weight_by_height": {
                    "line_number": "7c",
                    "fr": "Uwaino wa uzito kwa urefu",
                    "en": "the ratio of weight by height",
                    "condition": "true"

                },
                "the_ratio_of_height_by_age": {
                    "line_number": "7d",
                    "fr": "Uwaino wa urefu kwa umri",
                    "en": "the ratio of height by age",
                    "condition": "true"

                },
                "growth_attendance_of_6_months_old_baby": {
                    "line_number": "4",
                    "fr": "Mahudhurio ya ukuaji wa mtoto umri wa miezi 6",
                    "en": "Growth attendance of 6 months old baby",
                    "condition": "true"

                },
                "growth_attendance_of_12_months_old_baby": {
                    "line_number": "5",
                    "fr": "Mahudhurio ya ukuaji wa mtoto umri wa miezi 12",
                    "en": "growth attendance of 12 months old baby",
                    "condition": "true"

                },
                "growth_attendance_of_18_month_old_baby": {
                    "line_number": "6",
                    "fr": "Mahudhurio ya ukuaji wa mtoto umri wa miezi 18",
                    "en": "Growth attendance of 18 month old baby",
                    "condition": "true"

                },
                "growth_attendance_of_24_month_old_baby": {
                    "line_number": "7",
                    "fr": "Mahudhurio ya ukuaji wa mtoto umri wa miezi 24",
                    "en": "growth attendance of 24 month old baby",
                    "condition": "true"

                },
                "ratio_of_weight_by_age": {
                    "line_number": "7b",
                    "fr": "Uwaino wa uzito kwa umri",
                    "en": "ratio of weight by age",
                    "condition": "true"

                },
                "growth_attendance_of_36_month_old_baby": {
                    "line_number": "8",
                    "fr": "Mahudhurio ya ukuaji wa mtoto umri wa miezi 36",
                    "en": "growth attendance of 36 month old baby",
                    "condition": "true"

                },
                "growth_attendance_of_48_month_old_baby": {
                    "line_number": "9",
                    "fr": "Mahudhurio ya ukuaji wa mtoto umri wa miezi 48",
                    "en": "growth attendance of 48 month old baby",
                    "condition": "true"

                },
                "growth_attendance_of_59_month_old_baby": {
                    "line_number": "10",
                    "fr": "Mahudhurio ya ukuaji wa mtoto umri wa miezi 59",
                    "en": "growth attendance of 59 month old baby",
                    "condition": "true"

                },
                "additional_vitamin_a": {
                    "line_number": "11",
                    "fr": "Nyongeza ya Vitamini A",
                    "en": "additional Vitamin A",
                    "condition": "true"

                },
                "children_of_6-11_months": {
                    "line_number": "11a",
                    "fr": "Watoto umri wa miezi 6-11",
                    "en": "Children of 6-11 months",
                    "condition": "patient.current_age_months >= 6 && patient.current_age_months <= 11 && subforms.well_child_visit && subforms.well_child_visit.vitamin_a == 'yes'"
                },
                "children_of_12-17_months": {
                    "line_number": "11b",
                    "fr": "Watoto umri wa miezi 12-17",
                    "en": "Children of 12-17 months",
                    "condition": "patient.current_age_months >= 12 && patient.current_age_months <= 17 && subforms.well_child_visit && subforms.well_child_visit.vitamin_a == 'yes'"

                },
                "children_of_18-23_months": {
                    "line_number": "11c",
                    "fr": "Watoto umri wa miezi 18-23",
                    "en": "Children of 18-23 months",
                    "condition": "patient.current_age_months >= 18 && patient.current_age_months <= 23 && subforms.well_child_visit && subforms.well_child_visit.vitamin_a == 'yes'"
                },
                "children_of_24-59_months": {
                    "line_number": "11d",
                    "fr": "Watoto umri wa miezi 24-59",
                    "en": "Children of 24-59 months",
                    "condition": "patient.current_age_months >= 24 && patient.current_age_months <= 59 && subforms.well_child_visit && subforms.well_child_visit.vitamin_a == 'yes'"

                },
                "children_given_mebendazole/albendazole": {
                    "line_number": "12",
                    "fr": "Waliopewa Mebendazole/Albendazole",
                    "en": "Children given Mebendazole/Albendazole",
                    "condition": "subforms.well_child_visit.alben_tablets == 'yes'"

                },
                "children_of_12_months": {
                    "line_number": "12a",
                    "fr": "Watoto umri wa miezi 12",
                    "en": "Children of 12 months",
                    "condition": "patient.current_age_months == 12 && subforms.well_child_visit && subforms.well_child_visit.vitamin_a == 'yes'"

                },
                "children_of_18_months": {
                    "line_number": "12b",
                    "fr": "Watoto umri wa miezi 18",
                    "en": "Children of 18 months",
                    "condition": "patient.current_age_months == 18 && subforms.well_child_visit && subforms.well_child_visit.vitamin_a == 'yes'"
                },
                "children_of_24_months": {
                    "line_number": "12c",
                    "fr": "Watoto umri wa miezi 24",
                    "en": "Children of 24 months",
                    "condition": "patient.current_age_months == 24 && subforms.well_child_visit && subforms.well_child_visit.vitamin_a == 'yes'"
                },
                "children_of_30_months": {
                    "line_number": "12d",
                    "fr": "Watoto umri wa miezi 30",
                    "en": "Children of 30 months",
                    "condition": "patient.current_age_months == 30 && subforms.well_child_visit && subforms.well_child_visit.vitamin_a == 'yes'"
                },
                "feeding_infants_born_to_hiv_infected_mothers": {
                    "line_number": "13",
                    "fr": "Ulishaji wa Watoto Wachanga waliozaliwa na mama wenye VVU",
                    "en": "feeding infants born to HIV infected mothers"
                },
                "infants_breastfeeding_mothers_milk_only_(ebf)": {
                    "line_number": "13a",
                    "fr": "Watoto wachanga wanaonyonya maziwa ya mama pekee (EBF)",
                    "en": "Infants breastfeeding mothers milk only (EBF)",
                    "condition": "subforms.well_child_visit.mother_hiv_status == 'yes' && subforms.well_child_visit.milk_source == 'mother_milk_only'"
                },
                "infants_receiving_other_types_of_milk_(rf)": {
                    "line_number": "13b",
                    "fr": "Watoto wachanga wanaopewa maziwa mbadala (RF)",
                    "en": "Infants receiving other types of milk (RF)",
                    "condition": "subforms.well_child_visit.mother_hiv_status == 'yes' && subforms.well_child_visit.milk_source == 'other_only'"
                },
                "breastfeeding_infants_born_to_mothers_who_are_hiv_negative": {
                    "line_number": "14",
                    "fr": "Ulishaji wa Watoto Wachanga waliozaliwa na mama wasio na VVU",
                    "en": "breastfeeding infants born to mothers who are HIV negative",
                    "condition": "subforms.well_child_visit.mother_hiv_status == 'no' && subforms.well_child_visit.milk_source == 'mother_milk_only'"

                },
                "children_who_breastfeed_their_mothers_milk_only": {
                    "line_number": "14a",
                    "fr": "Watoto wachanga wanaonyonya maziwa ya mama pekee (EBF)",
                    "en": "Children who breastfeed their mothers milk only",
                    "condition": "subforms.well_child_visit.milk_source == 'mother_milk_only'"
                },
                "infants_feeding_on_other_types_of_milk": {
                    "line_number": "14b",
                    "fr": "Watoto wachanga wanaoyweshwa maziwa mbadala (RF)",
                    "en": "Infants feeding on other types of milk",
                    "condition": "subforms.well_child_visit.milk_source == 'other_only'"
                },
                "mothers_condition": {
                    "line_number": "15",
                    "fr": "Hali ya Mama",
                    "en": "Mothers condition"
                },
                "mothers_with_hiv": {
                    "line_number": "15a",
                    "fr": "Mama wenye VVU",
                    "en": "Mothers with HIV",
                    "condition": "subforms.well_child_visit.mother_hiv_status == 'yes'"
                },
                "mothers_without_hiv": {
                    "line_number": "15b",
                    "fr": "Mama wasio na VVU",
                    "en": "Mothers without HIV",
                    "condition": "subforms.well_child_visit.mother_hiv_status == 'no'"
                },
                "mothers_with_unknown_hiv_status": {
                    "line_number": "15c",
                    "fr": "Mama wasiojulikana hali yao ya VVU",
                    "en": "Mothers with unknown HIV status",
                    "condition": "subforms.well_child_visit.mother_hiv_status == 'unknown'"
                },
                "status_of_tetanus_vaccination_of_the_mother_during_delivery": {
                    "line_number": "16",
                    "fr": "Hali ya Chango ya Pepo punda kwa mama wakati wa kujifungua",
                    "en": "Status of Tetanus vaccination of the mother during delivery",
                    "condition": "subforms.well_child_visit.mother_tetanus_delivery == 'yes'"
                },
                "those_vaccinated": {
                    "line_number": "16a",
                    "fr": "Waliokingwa",
                    "en": "Those Vaccinated",
                    "condition": "true"
                },
                "those_not_vaccinated": {
                    "line_number": "16b",
                    "fr": "Wasiokuwa na Kinga",
                    "en": "Those not vaccinated",
                    "condition": "true"

                },
                "not_known": {
                    "line_number": "16c",
                    "fr": "Haijulikani",
                    "en": "not known",
                    "condition": "true"

                },
                "number_of_children_who_received_cotrimoxazole_i_arv_/given_bed_net__vouchers_and_ones_tested_for_hiv": {
                    "line_number": "17",
                    "fr": "Idadi ya Watoto waliopewa Cotrimoxazole I ARV / waliopewa hati punguzo nil waliopimwa VVU",
                    "en": "Number of children who received cotrimoxazole I ARV /given bed net vouchers and ones tested for HIV",
                    "condition": "subforms.well_child_visit.ctx_status == 'yes' && subforms.well_child_visit.bed_net_voucher == 'yes' && subforms.well_child_visit.hiv_pcr_test_2mo == 'yes'"
                },
                "children_with_the_possibility_of_hiv_infection": {
                    "line_number": "17a",
                    "fr": "Watoto wenye uwezekano wa uambukizo wa VVU",
                    "en": "Children with the possibility of HIV infection",
                    "condition": "subforms.well_child_visit.possible_hiv == 'yes'"
                },
                "children_who_were_started_on_cotrimoxazole_between_1_month_to_2_months": {
                    "line_number": "17b",
                    "fr": "Watoto walioanzishiwa Cotrimoxazole kati ya mwezi 1 hadi miezi 2 ya umri",
                    "en": "Children who were started on cotrimoxazole between 1 month to 2 months",
                    "condition": "subforms.well_child_visit && subforms.well_child_visit.ctx_status == 'yes' && patient.current_age_months < 2"
                },
                "children_who_were_tested_for_HIV_by_PCR_within_two_months_from_birth": {
                    "line_number": "17e",
                    "fr": "Watoto waliopimwa VVU kwa PCR ndani ya miezi miwili tangu kuzaliwa",
                    "en": "Children who were tested for HIV by PCR within two months from birth",
                    "condition": "subforms.well_child_visit.hiv_pcr_test_2mo == 'yes'"
                },
                "children_tested_for_HIV_by_PCR_6_weeks_after_stopping_breastfeeding_or_18_months": {
                    "line_number": "17f",
                    "fr": "Watoto waliopimwa VVU kwa PCR wiki 6 baada ya kuacha kunyonya maziwa ya mama au miezi 18 ya umri",
                    "en": "Children tested for HIV by PCR 6 weeks after stopping breastfeeding or 18 months",
                    "condition": "subforms.well_child_visit.hiv_pcr_test_18mo == 'yes'"

                },
                "children_tested_hiv_pcr_6_weeks_after_stopping_breastfeeding_or_18_months_of_age": {
                    "line_number": "17g",
                    "fr": "Watoto waliopimwa VVU kwa PCR wiki 6 baada ya kuacha kunyonya maziwa ya mama au miezi 18 ya umri",
                    "en": "Children tested HIV PCR 6 weeks after stopping breastfeeding or 18 months of age",
                    "condition": "subforms.well_child_visit.hiv_pcr_test_18mo == 'yes'"
                },
                "children_who_were_moved_from_clinic_care_and_treatment_of_hiv-positive_(ctc)": {
                    "line_number": "17h",
                    "fr": "Watoto waliohamishiwa Klinlki ya huduma na matibabu kwa wenye VVU (CTC)",
                    "en": "Children who were moved from clinic care and treatment of HIV-positive (CTC)",
                    "condition": "subforms.well_child_visit.referred_ctc == 'yes'"
                },
                "children_who_received_a_bed_net_voucher": {
                    "line_number": "17i",
                    "fr": "Watoto watiopatiwa hati punguzo ya chandarua",
                    "en": "Children who received a bed net voucher",
                    "condition": "subforms.well_child_visit.bed_net_voucher == 'yes'"
                }
            },
            "definitions": {
                "columns": {
                    "lessthan1male": {
                        "title": "males",
                        "condition": "patient.current_age_months < 1 && patient.gender == 'male'"
                    },
                    "lessthan1female": {
                        "title": "Less than 1 Month - females",
                        "condition": "patient.current_age_months < 1 && patient.gender == 'female'"
                    },
                    "lessthan1total": {
                        "title": "Less than 1 Month - Total",
                        "condition": "patient.current_age_months < 1"
                    },
                    "more1momale": {
                        "title": "More than 1 month and less than 1 Year - male",
                        "condition": "patient.current_age_years < 1 && patient.gender == 'male'"
                    },
                    "more1mofemale": {
                        "title": "More than 1 month and less than 1 Year - females",
                        "condition": "patient.current_age_years < 1 && patient.gender == 'female'"
                    },
                    "more1mototal": {
                        "title": "More than 1 month and less than 1 Year - Total",
                        "condition": "patient.current_age_years < 1 "
                    },
                    "above1below5male": {
                        "title": "More than 1 year and less than 5 Years - male",
                        "condition": "patient.current_age_years > 1 && patient.current_age_years < 5 && patient.gender == 'male'"
                    },
                    "above1below5female": {
                        "title": "More than 1 year and less than 5 Years - females",
                        "condition": "patient.current_age_years > 1 && patient.current_age_years < 5 && patient.gender == 'female'"
                    },
                    "above1below5total": {
                        "title": "More than 1 year and less than 5 Years - Total",
                        "condition": "patient.current_age_years > 1 && patient.current_age_years < 5"
                    }
                }
            }
        }, // end report_childgrowth
        "report_contraceptive": {

            "collection": "reports",
            "class": "schema",
            "_id": "reports/schema/contraceptive",
            "$schema": "http://json-schema.org/draft-04/schema#",
            "title": "Contraceptive",
            "type": "object",
            "properties": {
                "injectable_methods": {
                    "line_number": "1",
                    "fr": "Sindano",
                    "en": "Injectable methods"
                },
                "number_of_customers_who_use_contraceptive_injection": {
                    "line_number": "1a",
                    "fr": "Idaji ya Wateja wa Sindano",
                    "en": "Number of customers who use contraceptive injection",
                    "condition": "subforms.reproductive_counseling.contraception_current == 'Depo Provera'"
                },
                "contraceptive_pills": {
                    "line_number": "2",
                    "fr": "Vidonge",
                    "en": "Contraceptive pills"
                },
                "the_number_of_pills_clients_at_the_clinic": {
                    "line_number": "2a",
                    "fr": "Idadi ya wateja wa Vidonge Kituoni",
                    "en": "The number of pills clients at the clinic",
                    "condition": "subforms.reproductive_counseling && subforms.reproductive_counseling.contraception_current == 'pills' && subforms.reproductive_counseling.contraceptive_source == 'clinic'"
                },
                "number_of_pills_clients_through_cbd": {
                    "line_number": "2b",
                    "fr": "Idadi ya wateja wa vidonge wa CBD",
                    "en": "Number of pills clients through CBD(Community Based Distribution)",
                    "condition": "subforms.reproductive_counseling && subforms.reproductive_counseling.contraception_current == 'pills' && subforms.reproductive_counseling.contraceptive_source == 'cbd'"
                },
                "the_number_of_clients_who_were_given_pills_at_the_clinic_and_through_cbd": {
                    "line_number": "2c",
                    "fr": "Jumla walochukua Vidonge Kituoni na CBD (2a+2b)",
                    "en": "The number of clients who were given pills at the clinic and through CBD(2a+2b)",
                    "condition": "subforms.reproductive_counseling.contraception_current == 'pills'"
                },
                "condoms": {
                    "line_number": "3",
                    "fr": "Kondom",
                    "en": "Condoms"
                },
                "the_number_of_male_clients_who_were_given_condoms_at_the_clinic": {
                    "line_number": "3a",
                    "fr": "Idadi ya wateja waliochukua kondom Kituoni Me",
                    "en": "The number of male clients who were given condoms at the clinic",
                    "condition": "patient.gender == 'male' && subforms.reproductive_counseling && subforms.reproductive_counseling.contraception_current == 'condoms' && subforms.reproductive_counseling.contraceptive_source == 'clinic'"
                },
                "the_number_of_female_clients_who_were_given_condoms_at_the_clinic": {
                    "line_number": "3b",
                    "fr": "Idadi ya wateja waliochukua kondom Kituoni Ke",
                    "en": "The number of female clients who were given condoms at the clinic",
                    "condition": "patient.gender == 'female' && subforms.reproductive_counseling && subforms.reproductive_counseling.contraception_current == 'condoms' && subforms.reproductive_counseling.contraceptive_source == 'clinic'"
                },
                "number_of__male_clients_who_were_given_condoms_by_cbd": {
                    "line_number": "3c",
                    "fr": "Idadi ya wateja waliochukua kondom CBD Me",
                    "en": "Number of male clients who were given condoms by CBD",
                    "condition": "patient.gender == 'male' && subforms.reproductive_counseling && subforms.reproductive_counseling.contraception_current == 'condoms' && subforms.reproductive_counseling.contraceptive_source == 'cbd'"
                },
                "number_of_female_clients_who_were_given_condoms_by_cbd": {
                    "line_number": "3d",
                    "fr": "Idadi ya wateja waliochukua kondom CBD Ke",
                    "en": "Number of female clients who were given condoms by CBD",
                    "condition": "patient.gender == 'female' && subforms.reproductive_counseling && subforms.reproductive_counseling.contraception_current == 'condoms' && subforms.reproductive_counseling.contraceptive_source == 'cbd'"
                },
                "total_customers_who_given_condoms_at_the_clinic_and_cbd": {
                    "line_number": "3e",
                    "fr": "Jumla ya Wateja waliochukua kondomu (kituoni na CBD) (3a+3b+3c+3d)",
                    "en": "Total Customers who given condoms at the clinic and CBD (3a+3b+3c+3d)",
                    "condition": "subforms.reproductive_counseling.contraception_current == 'condoms'"
                },
                "total_customers_who_took_short-term_course": {
                    "line_number": "3f",
                    "fr": "Jumla ya Wateja waliochukua njia za muda mfupi (1+2c+3c)",
                    "en": "Total Customers who took short-term course (1+2c+3c)",
                    "condition": "subforms.reproductive_counseling.quantity_pills_dispensed == '1_month_supply'"
                },
                "methods_of_long-term_and_permanent_family_planning": {
                    "line_number": "4",
                    "fr": "Njia za muda Mrefu na za kudumu za Uzazi wa Mpango",
                    "en": "Methods of long-term and permanent family planning"
                },
                "sterilization": {
                    "line_number": "4",
                    "fr": "Kufunga Uzazi",
                    "en": "Sterilization"
                },
                "women_sterilization_ml_la_at_the_clinic": {
                    "line_number": "4a",
                    "fr": "Kufunga Uzazi mama (ML/LA) - kituoni",
                    "en": "Women sterilization (ML / LA) - at the clinic",
                    "condition": "patient.gender == 'female' && subforms.reproductive_counseling && subforms.reproductive_counseling.contraception_dispensed == 'sterilization' && subforms.reproductive_counseling.contraception_source == 'clinic'"
                },
                "women_sterilization_ml_la_outreach": {
                    "line_number": "4b",
                    "fr": "Kufunga Uzazi mama (ML/LA) - outreach",
                    "en": "Women sterilization (ML / LA) - outreach",
                    "condition": "patient.gender == 'female' && subforms.reproductive_counseling && subforms.reproductive_counseling.contraception_dispensed == 'sterilization' && subforms.reproductive_counseling.contraception_source == 'outreach'"
                },
                "men_sterilization_nsv_at_the_clinic": {
                    "line_number": "4c",
                    "fr": "Kufunga uzazi baba (NSV) - kituoni",
                    "en": "Men sterilization (NSV) - at the clinic",
                    "condition": "patient.gender == 'male' && subforms.reproductive_counseling && subforms.reproductive_counseling.contraception_dispensed == 'sterilization' && subforms.reproductive_counseling.contraception_source == 'clinic'"
                },
                "men_sterilization_nsv_outreach": {
                    "line_number": "4d",
                    "fr": "Kufung uzazi baba (NSV) - outreach",
                    "en": "Men sterilization (NSV) - outreach",
                    "condition": "patient.gender == 'male' && subforms.reproductive_counseling && subforms.reproductive_counseling.contraception_dispensed == 'sterilization' && subforms.reproductive_counseling.contraception_source == 'outreach'"
                },
                "implants": {
                    "line_number": "5",
                    "fr": "Vipandikizi",
                    "en": "Implants"
                },
                "those_who_put_implants_at_the_clinic": {
                    "line_number": "5a",
                    "fr": "Kuweka vipandikizi - kituoni",
                    "en": "Those who put implants - at the clinic",
                    "condition": "subforms.reproductive_counseling && subforms.reproductive_counseling.contraception_source == 'other_implants' && subforms.reproductive_counseling.contraception_source == 'clinic'"
                },
                "those_who_put_implants_outreach": {
                    "line_number": "5b",
                    "fr": "Kuweka vipandikizi - outreach",
                    "en": "Those who put implants - outreach",
                    "condition": "subforms.reproductive_counseling && subforms.reproductive_counseling.contraception_source == 'other_implants' && subforms.reproductive_counseling.contraception_source == 'outreach'"
                },
                "removing_implants": {
                    "line_number": "5c",
                    "fr": "Kuondoa vipandikizi",
                    "en": "Removing implants",
                    "condition": "subforms.reproductive_counseling && subforms.reproductive_counseling.contraception_source == 'remove_iud'"
                },
                "intrauterine_methods_iucd": {
                    "line_number": "6",
                    "fr": "Kitanzi (IUCD)",
                    "en": "Intrauterine methods(IUCD)"
                },
                "inserting_iud_clinic": {
                    "line_number": "6a",
                    "fr": "Kuweka Kitanzi - kituoni",
                    "en": "Inserting IUD (at the clinic)",
                    "condition": "subforms.reproductive_counseling && subforms.reproductive_counseling.contraception_source == 'iud' && subforms.reproductive_counseling.contraception_source == 'clinic'"
                },
                "inserting_iud_outreach": {
                    "line_number": "6b",
                    "fr": "Kuweka Kitanzi - outreach",
                    "en": "Inserting IUD (outreach)",
                    "condition": "subforms.reproductive_counseling && subforms.reproductive_counseling.contraception_source == 'iud' && subforms.reproductive_counseling.contraception_source == 'outreach'"
                },
                "removing_iud_clinic": {
                    "line_number": "6c",
                    "fr": "Kuondoa Kitanzi - kituoni",
                    "en": "Removing IUD (at the clinic)",
                    "condition": "subforms.reproductive_counseling && subforms.reproductive_counseling.contraception_source == 'remove_iud' && subforms.reproductive_counseling.contraception_source == 'clinic'"
                },
                "removing_iud_outreach": {
                    "line_number": "6d",
                    "fr": "Kuondoa Kitanzi - outreach",
                    "en": "Removing IUD (outreach)",
                    "condition": "subforms.reproductive_counseling && subforms.reproductive_counseling.contraception_source == 'remove_iud' && subforms.reproductive_counseling.contraception_source == 'outreach'"
                },
                "total_number_of_client_who_used_permanent_contraceptive_methods": {
                    "line_number": "6e",
                    "fr": "Jumla ya Wateja waliochukua njia za muda mrefu na za Kudumu za Uzazi wa Mpango (4a+4b+4c+4d+5a+5b+6a+6b)",
                    "en": "Total number of client who used permanent contraceptive methods(4a+4b+4c+4d+5a+5b+6a+6b)",
                    "condition": "subforms.reproductive_counseling.contraception_source == 'sterilization'"
                },
                "other_methods": {
                    "line_number": "7b",
                    "fr": "Njia nyingine",
                    "en": "Other methods",
                    "condition": "subforms.reproductive_counseling.contraception_source == 'pther'"
                },
                "natural_ways": {
                    "line_number": "7a",
                    "fr": "Njia za maumbile (mfano LAM, BOM, joto, kalenda)",
                    "en": "Natural ways(eg. LAM,BOM,body temperature and calendar",
                    "condition": "subforms.reproductive_counseling.contraception_source == 'natural_ways'"
                },
                "total_number_of_clients_who_used_other_methods": {
                    "line_number": "7c",
                    "fr": "Jumla ya Njia Nyinginezo (7a+7b)",
                    "en": "Total number of clients who used other methods(7a+7b)",
                    "condition": "subforms.reproductive_counseling && subforms.reproductive_counseling.contraception_source == 'natural_ways' && subforms.reproductive_counseling.contraception_source == 'other'"
                },
                "total_number_of_types_of_contraceptives": {
                    "line_number": "8",
                    "fr": "Jumla ya Aina zote Uzazi wa Mpango",
                    "en": "Total number of types of contraceptives",
                    "condition": "subforms.reproductive_counseling.contraception_source"
                },
                "total_number_of_clients_who_used_all_types_of_contraceptives": {
                    "line_number": "8a",
                    "fr": "Jumla ya Wateja waliochukua njia zote za Uzazi Mpango (3f+6e+7c)",
                    "en": "Total number of clients who used all types of contraceptives(3f+6e+7c)",
                    "condition": "subforms.reproductive_counseling.quantity_pills_dispensed != 'none'"
                },
                "cycles_distributed_at_the_clinic": {
                    "line_number": "9a",
                    "fr": "Idadi ya mizunguko iliyotolewa (Cycles Distributed) - Kituoni",
                    "en": "Cycles distributed at the Clinic",
                    "condition": "subforms.reproductive_counseling.contraception_source == 'clinic'"
                },
                "cycles_distributed_by_cbd": {
                    "line_number": "9b",
                    "fr": "Idadi ya mizunguko iliyotolewa (Cycles Distributed) - CBD",
                    "en": "Cycles distributed by CBD",
                    "condition": "subforms.reproductive_counseling.contraception_source == 'cbd'"
                },
                "total_number_of_cycles_distributed": {
                    "line_number": "9c",
                    "fr": "Idadi ya mizunguko iliyotolewa (Cycles Distributed) (Kituoni na CBD) (9a+9b)",
                    "en": "Total number of cycles distributed(at the clinic+CBD) (9a+9b)",
                    "condition": "subforms.reproductive_counseling && subforms.reproductive_counseling.contraception_source == 'cbd' && subforms.reproductive_counseling.contraception_source == 'clinic'"

                },
                "condoms_given_out_to_clients": {
                    "line_number": "10",
                    "fr": "Kondomu zilizotolewa",
                    "en": "Condoms given out to clients"
                },
                "number_of_condoms_given_to_male_clients_at_the_clinic": {
                    "line_number": "10a",
                    "fr": "Idadi ya kondomu zilizogawiwa Kituoni Me",
                    "en": "Number of condoms given to male clients at the clinic",
                    "condition": "patient.gender == 'male' && subforms.reproductive_counseling && subforms.reproductive_counseling.contraception_current == 'condoms' && subforms.reproductive_counseling.contraceptive_source == 'clinic'"
                },
                "number_of_condoms_given_to_female_clients_at_the_clinic": {
                    "line_number": "10b",
                    "fr": "Idadi ya kondomu zilizogawiwa Kituoni Ke",
                    "en": "Number of condoms given to female clients at the clinic",
                    "condition": "patient.gender == 'female' && subforms.reproductive_counseling && subforms.reproductive_counseling.contraception_current == 'condoms' && subforms.reproductive_counseling.contraceptive_source == 'clinic'"
                },
                "number_of_condoms_given_to_male_clients_by_cbd": {
                    "line_number": "10c",
                    "fr": "Idadi ya kondomu zilizogawiwa CBD Me",
                    "en": "Number of condoms given to male clients by CBD",
                    "condition": "patient.gender == 'male' && subforms.reproductive_counseling && subforms.reproductive_counseling.contraception_current == 'condoms' && subforms.reproductive_counseling.contraceptive_source == 'cbd'"
                },
                "number_of_condoms_given_to_female_clients_by_cbd": {
                    "line_number": "10d",
                    "fr": "Idadi ya kondomu zilizogawiwa cbd Ke",
                    "en": "Number of condoms given to female clients by CBD",
                    "condition": "patient.gender == 'female' && subforms.reproductive_counseling && subforms.reproductive_counseling.contraception_current == 'condoms' && subforms.reproductive_counseling.contraceptive_source == 'cbd'"
                },
                "total_number_of_condoms_given_to_clients": {
                    "line_number": "10e",
                    "fr": "Idadi ya kondomu zilizogawiwa kituoni na CBD (10a+10b+10c+10d)",
                    "en": "Total number of condoms given to clients from the clinic and by CBD(10a+10b+10c+10d)",
                    "condition": "subforms.reproductive_counseling.contraception_current == 'condoms'"
                },
                "service_after_miscarriage_cpac_after_giving_birth": {
                    "line_number": "11",
                    "fr": "Huduma baada ya mimba kuharibika (cPAC) Baada ya kujifungua",
                    "en": "Service after miscarriage (CPAC) After giving birth"
                },
                "those_who_got_treatment_after_miscarriages": {
                    "line_number": "11a",
                    "fr": "Waliopata huduma baada ya mimba kubaribika",
                    "en": "Those who got treatment after miscarriages",
                    "condition": "subforms.reproductive_counseling.family_planning_method_after_miscarriage == 'yes'"
                },
                "those_who_used_contraception_after_miscarriage": {
                    "line_number": "11b",
                    "fr": "Waliopata uzazi wa mpango baada ya mimba kubaribika",
                    "en": "Those who used contraception after miscarriage",
                    "condition": "subforms.reproductive_counseling.contraception_after_miscarriage == 'yes'"
                },
                "those_who_used_contraceptive_methods_42_days_after_giving_birth": {
                    "line_number": "11c",
                    "fr": "Waliopata njia ya uazazi wa mpango siku 42 baada ya kujifungua",
                    "en": "Those who used contraceptive methods 42 days after giving birth",
                    "condition": "subforms.reproductive_counseling.contraception_in_42_days == 'yes'"
                },
                "clients_who_screened_for_cancer": {
                    "line_number": "12",
                    "fr": "Wateja waliochunguzwa saratani",
                    "en": "clients who screened for cancer",
                    "condition": "subforms.reproductive_counseling.cervical_symptom"
                },
                "those_screened_for_breast_diseases": {
                    "line_number": "12a",
                    "fr": "waliochunguzwa tit",
                    "en": "Those Screened for breast diseases",
                    "condition": "subforms.reproductive_counseling.breast_symptom"
                },
                "detected_to_have_breast_cancer_symptoms": {
                    "line_number": "12b",
                    "fr": "Waliogundulika na matatizo ya matiti (mfano: kutoka damu kwenye chuchu au uvimbe wa matiti)",
                    "en": "Detected to have breast cancer symptoms (eg, bleeding or swelling of the breast nipples)",
                    "condition": "subforms.reproductive_counseling.breast_symptom"
                },
                "screened_for_cervical_diseases": {
                    "line_number": "12c",
                    "fr": "Waliochunguzwa Shingo ya mfuko wa uzazi",
                    "en": "Screened for cervical diseases",
                    "condition": "subforms.reproductive_counseling.cervical_symptom"
                },
                "detected_to_have_cervical_diseases": {
                    "line_number": "12d",
                    "fr": "Waliogundulika na matatizo ya shingo ya mfuko wa uzazi (mfano: mchubuko au kidonda)",
                    "en": "Detected to have cervical diseases (eg, bruise or cervical ulcer)",
                    "condition": "subforms.reproductive_counseling.cervical_symptom.length > 0"
                },
                "detected_to_have_cervical_cancer_symptoms": {
                    "line_number": "12e",
                    "fr": "Waliodhamwa wana saratani ya shingo ya mfuko wa uzazi",
                    "en": "Detected to have cervical cancer symptoms",
                    "condition": "subforms.reproductive_counseling.cervical_symptom.length > 0"
                },
                "those_who_got_cryotherapy_service": {
                    "line_number": "12f",
                    "fr": "Waliopewa huduma ya Cryotherapy",
                    "en": "Those who got Cryotherapy service",
                    "condition": "true"
                },
                "pitc": {
                    "line_number": "13",
                    "fr": "PITC",
                    "en": "PITC"
                },
                "those_who_already_have_an_hiv_infection": {
                    "line_number": "13a",
                    "fr": "Tayari wana uambukizo wa VVU",
                    "en": "Those who already have an HIV infection",
                    "condition": "subforms.reproductive_counseling.hiv_status == 'Positive'"
                },
                "those_who_got_hiv_counseling": {
                    "line_number": "13b",
                    "fr": "Waliopata ushauri nasha juu ya VVU",
                    "en": "Those who got HIV counseling",
                    "condition": "subforms.reproductive_counseling.hiv_counseling == 'yes'"
                },
                "clients_who_tested_for_hiv": {
                    "line_number": "13c",
                    "fr": "Wateja waliopima VVU",
                    "en": "Clients who tested for HIV",
                    "condition": "subforms.reproductive_counseling.hiv_tested == 'yes'"
                },
                "clients_who_received_post-test_counseling": {
                    "line_number": "13d",
                    "fr": "Wateja waliopata ushauri nasaha baada ya kupima",
                    "en": "Clients who received post-test counseling",
                    "condition": "subforms.reproductive_counseling.post_test_counseling == 'yes'"
                },
                "customers_who_tested_positive": {
                    "line_number": "13e",
                    "fr": "Wateja waliogundulika Positive (+)",
                    "en": "Customers who tested positive (+)",
                    "condition": "subforms.reproductive_counseling.hiv_positive_test == 'yes'"
                },
                "partners_who_tested_for_hiv": {
                    "line_number": "13f",
                    "fr": "Wenza waliopima VVU",
                    "en": "Partners who tested for HIV",
                    "condition": "subforms.reproductive_counseling.hiv_partner_test == 'yes'"
                },
                "partners_who_tested_positive": {
                    "line_number": "13g",
                    "fr": "Wenza Waliogundulika Positive (+)",
                    "en": "Partners Who tested Positive (+)",
                    "condition": "subforms.reproductive_counseling.hiv_partner_positive_test == 'yes'"
                },
                "discordant_couple": {
                    "line_number": "13h",
                    "fr": "Wateja ambao matokeo ya vipimo vya VVU yanatofautiana",
                    "en": "Clients who tested HIV and got different results(discordant couple)",
                    "condition": "subforms.reproductive_counseling.hiv_discordant == 'yes'"
                },
                "clients_who_were_reffered_to_ctc": {
                    "line_number": "13i",
                    "fr": "Wateja waliopata rufaa kwenda CTC",
                    "en": "Clients who were reffered to CTC",
                    "condition": "subforms.reproductive_counseling.referred_ctc == 'yes'"
                },
                "NEED_TRANSLATION": {
                    "line_number": "13j",
                    "fr": "Wataja waliopata rufaa kwenda CTC",
                    "en": "Patients who were referred to CTC",
                    "condition": "subforms.reproductive_counseling.referred_ctc == 'yes'"

                }
            },
            "definitions": {
                "columns": {
                    "10to14": {
                        "title": "10 to 14",
                        "condition": "patient.current_age_years >= 10 && patient.current_age_years <= 14"
                    },
                    "15to19": {
                        "title": "15 to 19",
                        "condition": "patient.current_age_years >= 15 && patient.current_age_years <= 19"
                    },
                    "20to24": {
                        "title": "20 to 24",
                        "condition": "patient.current_age_years >= 20 && patient.current_age_years <= 24"
                    },
                    "above25": {
                        "title": "Above 25",
                        "condition": "patient.current_age_years >= 25"
                    },
                    "return": {
                        "title": "Return",
                        "condition": "true"
                    },
                    "total": {
                        "title": "Total",
                        "condition": "true"
                    }
                }
            }
        }, // end report_contraceptive
        "report_dtc": {
            "collection": "reports",
            "class": "schema",
            "_id": "reports/schema/contraceptive",
            "$schema": "http://json-schema.org/draft-04/schema#",
            "title": "DTC",
            "type": "object",
            "properties": {
                "number_of_patients_treated_dtc_dtc-diarrhea_and_treatment_centre": {
                    "line_number": "1",
                    "fr": "Idadi ya wagonjwa waliotibiwa DTC DTC-Idara ya magonjwa ya kuhara",
                    "en": "Number of patients treated DTC DTC-Diarrhea and treatment centre",
                    "condition": "subforms.diarrhea && subforms.diarrhea.duration"
                },
                "number_of_dtc_patients_treated_with_acute_shortage_of_water_and_sodium_cloride_in_the_body": {
                    "line_number": "2",
                    "fr": "Idadi ya wagonjwa waliotibiwa DTC walio na upungufu mkubwa wa maji na churnvichumvi mwilini",
                    "en": "Number of DTC patients treated with acute shortage of water and Sodium cloride in the body",
                    "condition": "subforms.diarrhea && subforms.diarrhea.water_sodium_imbalance == 'severe'"
                },
                "number_of_dtc_patients_treated_with_little_shortage_of_water_and_sodium_cloride": {
                    "line_number": "3",
                    "fr": "Idadi ya wagonjwa waliotibiwa DTC walio na upungufu kiasi wa maji na chumvichumvi mwilini",
                    "en": "Number of DTC patients treated with little shortage of water and sodium cloride",
                    "condition": "subforms.diarrhea && subforms.diarrhea.water_sodium_imbalance == 'mild'"
                },
                "number_of_patients_with_blood_in_stool": {
                    "line_number": "4",
                    "fr": "Idadi ya wagonjwa walio na damu katika kinyesi",
                    "en": "Number of patients with blood in stool",
                    "condition": "subforms.diarrhea && subforms.diarrhea.blood_in_stool == 'yes'"
                },
                "the_number_of_patients_who_received_zinc": {
                    "line_number": "5",
                    "fr": "Idadi ya wagonjwa waliopewa zinki",
                    "en": "The number of patients who received zinc",
                    "condition": "subforms.diarrhea && subforms.diarrhea.given_zinc == 'yes'"
                },
                "the_number_of_patients_who_received_a_packet_of_ors": {
                    "line_number": "6",
                    "fr": "Idadi ya wagonjwa waliopatiwa paketi za ORS",
                    "en": "The number of patients who received a packet of ORS",
                    "condition": "subforms.diarrhea && subforms.diarrhea.given_ors == 'yes'"
                },
                "number_of_admitted_patients": {
                    "line_number": "7",
                    "fr": "Idadi ya wagonjwa waliolazwa",
                    "en": "Number of admitted patients",
                    "condition": "subforms.diarrhea && subforms.diarrhea.admission == 'yes'"
                },
                "the_number_of_refereed_patients": {
                    "line_number": "8",
                    "fr": "Idadi ya wagonjwa waliopewa rufaa",
                    "en": "The number of refereed patients",
                    "condition": "subforms.diarrhea && subforms.diarrhea.referral == 'no'"
                },
                "the_number_of_patients_who_died_of_dtc_diarrhoea_treatment_centre": {
                    "line_number": "9",
                    "fr": "Idadi ya wagonjwa waliofia DTC",
                    "en": "The number of patients who died of DTC_Diarrhoea treatment Centre",
                    "condition": "subforms.diarrhea && subforms.diarrhea.diarrhea_mortality == 'no'"
                }
            },
            "definitions": {
                "columns": {
                    "lessthan1male": {
                        "title": "Less than 1 Month - males",
                        "condition": "patient.gender == 'male'"
                    },
                    "lessthan1female": {
                        "title": "Less than 1 Month - females",
                        "condition": "patient.gender == 'female'"
                    },
                    "lessthan1total": {
                        "title": "Less than 1 Month - Total",
                        "condition": "patient.gender == 'male' && patient.gender == 'female'"
                    },
                    "more1momale": {
                        "title": "More than 1 month and less than 1 Year - male",
                        "condition": "patient.current_age_years < 1 && patient.gender == 'male'"
                    },
                    "more1mofemale": {
                        "title": "More than 1 month and less than 1 Year - females",
                        "condition": "patient.current_age_years < 1 && patient.gender == 'female'"
                    },
                    "more1mototal": {
                        "title": "More than 1 month and less than 1 Year - Total",
                        "condition": "patient.current_age_years < 1"
                    },
                    "above1below5male": {
                        "title": "More than 1 year and less than 5 Years - male",
                        "condition": "patient.current_age_years > 1 && patient.current_age_years < 5 && patient.gender == 'male'"
                    },
                    "above1below5female": {
                        "title": "More than 1 year and less than 5 Years - females",
                        "condition": "patient.current_age_years > 1 && patient.current_age_years < 5 && patient.gender == 'female'"
                    },
                    "above1below5total": {
                        "title": "More than 1 year and less than 5 Years - Total",
                        "condition": "patient.current_age_years > 1 && patient.current_age_years < 5"
                    }
                }
            }
        }, //end report_dtc
        "report_ipd": {

            "collection": "reports",
            "class": "schema",
            "_id": "reports/schema/reportipd",
            "$schema": "http://json-schema.org/draft-04/schema#",
            "title": "IPD Report",
            "type": "object",
            "properties": {
                "those_who_are_admitted_in_the_ward": {
                    "line_number": "1",
                    "fr": "Waliolazwa Wodini",
                    "en": "Those who are admitted into the ward"
                },
                "acute_flacid_paralysis": {
                    "line_number": "2",
                    "fr": "Acute Flacid Paralysis",
                    "en": "Acute Flacid Paralysis",
                    "condition": "subforms.disease_diagnosis && subforms.disease_diagnosis.admission == 'yes' && subforms.disease_diagnosis && subforms.disease_diagnosis.diagnosis == 'acute_flacid_paralysis'"
                },
                "cholera": {
                    "line_number": "3",
                    "fr": "Cholera",
                    "en": "Cholera",
                    "condition": "subforms.disease_diagnosis && subforms.disease_diagnosis.admission == 'yes' && subforms.disease_diagnosis && subforms.disease_diagnosis.diagnosis == 'cholera'"
                },
                "dysentery": {
                    "line_number": "4",
                    "fr": "Dysentery",
                    "en": "Dysentery",
                    "condition": "subforms.disease_diagnosis && subforms.disease_diagnosis.admission == 'yes' && subforms.disease_diagnosis && subforms.disease_diagnosis.diagnosis == 'dysentery'"
                },
                "measles": {
                    "line_number": "5",
                    "fr": "Measles",
                    "en": "Measles",
                    "condition": "subforms.disease_diagnosis && subforms.disease_diagnosis.admission == 'yes' && subforms.disease_diagnosis && subforms.disease_diagnosis.diagnosis == 'measles'"
                },
                "meningitis": {
                    "line_number": "6",
                    "fr": "Meningitis",
                    "en": "Meningitis",
                    "condition": "subforms.disease_diagnosis && subforms.disease_diagnosis.admission == 'yes' && subforms.disease_diagnosis && subforms.disease_diagnosis.diagnosis == 'meningitis'"
                },
                "tetanus_neonatal": {
                    "line_number": "7",
                    "fr": "Tetanus. Neonatal",
                    "en": "Tetanus. Neonatal",
                    "condition": "subforms.disease_diagnosis && subforms.disease_diagnosis.admission == 'yes' && subforms.disease_diagnosis && subforms.disease_diagnosis.diagnosis == 'tetanus_neonatal'"
                },
                "plague": {
                    "line_number": "8",
                    "fr": "Plague",
                    "en": "Plague",
                    "condition": "subforms.disease_diagnosis && subforms.disease_diagnosis.admission == 'yes' && subforms.disease_diagnosis && subforms.disease_diagnosis.diagnosis == 'plague'"
                },
                "relapsing_fever_louse_borne_typhus": {
                    "line_number": "9",
                    "fr": "Relapsing Fever Louse borne Typhus",
                    "en": "Relapsing Fever Louse borne Typhus",
                    "condition": "subforms.disease_diagnosis && subforms.disease_diagnosis.admission == 'yes' && subforms.disease_diagnosis && subforms.disease_diagnosis.diagnosis == 'relapsing_fever'"
                },
                "typhoid": {
                    "line_number": "10",
                    "fr": "Typhoid",
                    "en": "Typhoid",
                    "condition": "subforms.disease_diagnosis && subforms.disease_diagnosis.admission == 'yes' && subforms.disease_diagnosis && subforms.disease_diagnosis.diagnosis == 'typhoid'"
                },
                "diarrhea_acute": {
                    "line_number": "11",
                    "fr": "Diarrhea Acute <14days",
                    "en": "Diarrhea Acute <14days",
                    "condition": "subforms.disease_diagnosis && subforms.disease_diagnosis.admission == 'yes' && subforms.disease_diagnosis && subforms.disease_diagnosis.diagnosis == 'diarrhea_acute'"
                },
                "diarrhea_chronic": {
                    "line_number": "12",
                    "fr": "Diarrhea Chronic >or= 14days",
                    "en": "Diarrhea Chronic >or= 14days",
                    "condition": "subforms.disease_diagnosis && subforms.disease_diagnosis.admission == 'yes' && subforms.disease_diagnosis && subforms.disease_diagnosis.diagnosis == 'diarrhea_chronic'"
                },
                "malaria_severe_complicated_blood_side_positive": {
                    "line_number": "13a",
                    "fr": "Malaria Severe/Complicated Blood Side Positive",
                    "en": "maleria Severe/Complicated Blood Side Positive",
                    "condition": "subforms.disease_diagnosis && subforms.disease_diagnosis.admission == 'yes' && subforms.disease_diagnosis && subforms.disease_diagnosis.diagnosis == 'maleria'"
                },
                "malaria_severe_complicated_mrdt_positive": {
                    "line_number": "13b",
                    "fr": "Malaria Severe/Complicated mRDT Positive",
                    "en": "maleria Severe/Complicated mRDT Positive",
                    "condition": "subforms.disease_diagnosis && subforms.disease_diagnosis.admission == 'yes' && subforms.disease_diagnosis && subforms.disease_diagnosis.diagnosis == 'maleria'"
                },
                "malaria_severe_complicated_clinical_no_test": {
                    "line_number": "13c",
                    "fr": "Malaria Severe/Complicated Clinical no test",
                    "en": "maleria Severe/Complicated Clinical no test",
                    "condition": "subforms.disease_diagnosis && subforms.disease_diagnosis.admission == 'yes' && subforms.disease_diagnosis && subforms.disease_diagnosis.diagnosis == 'maleria'"
                },
                "schistosomiasis": {
                    "line_number": "14",
                    "fr": "Schistosomiasis",
                    "en": "Schistosomiasis",
                    "condition": "subforms.disease_diagnosis && subforms.disease_diagnosis.admission == 'yes' && subforms.disease_diagnosis && subforms.disease_diagnosis.diagnosis == 'schistosomiasis'"
                },
                "sti_genital_discharge_syndrome_gds": {
                    "line_number": "15",
                    "fr": "STI Genital Discharge Syndrome GDS",
                    "en": "STI Genital Discharge Syndrome GDS",
                    "condition": "subforms.disease_diagnosis && subforms.disease_diagnosis.admission == 'yes' && subforms.disease_diagnosis && subforms.disease_diagnosis.diagnosis == 'sti_genital_discharge_syndrome'"
                },
                "sti_genital_ulcer_diseases_gud": {
                    "line_number": "16",
                    "fr": "STI Genital Ulcer Diseases GUD",
                    "en": "STI Genital Ulcer Diseases GUD",
                    "condition": "subforms.disease_diagnosis && subforms.disease_diagnosis.admission == 'yes' && subforms.disease_diagnosis && subforms.disease_diagnosis.diagnosis == 'sti_genital_ulcer_diseases'"
                },
                "sti_pelvic_inflammatory_diseases": {
                    "line_number": "17",
                    "fr": "STI Pelvic Inflammatory diseases PID",
                    "en": "STI Pelvic Inflammatory diseases PID",
                    "condition": "subforms.disease_diagnosis && subforms.disease_diagnosis.admission == 'yes' && subforms.disease_diagnosis && subforms.disease_diagnosis.diagnosis == 'sti_pelvic_inflammatory_diseases'"
                },
                "sexually_transmitted_infection_other": {
                    "line_number": "18",
                    "fr": "Sexually Transmitted Infection Other",
                    "en": "Sexually Transmitted Infection Other",
                    "condition": "subforms.disease_diagnosis && subforms.disease_diagnosis.admission == 'yes' && subforms.disease_diagnosis && subforms.disease_diagnosis.diagnosis == 'sexually_transmitted_infections_other'"
                },
                "gynaecological_diseases": {
                    "line_number": "19",
                    "fr": "Gynaecological diseases Other",
                    "en": "Gynaecological diseases Other",
                    "condition": "subforms.disease_diagnosis && subforms.disease_diagnosis.admission == 'yes' && subforms.disease_diagnosis && subforms.disease_diagnosis.diagnosis == 'gynaecological_diseases_other'"
                },
                "tuberculosis": {
                    "line_number": "20",
                    "fr": "Tuberculosis",
                    "en": "Tuberculosis",
                    "condition": "subforms.disease_diagnosis && subforms.disease_diagnosis.admission == 'yes' && subforms.disease_diagnosis && subforms.disease_diagnosis.diagnosis == 'tuberculosis'"
                },
                "leprosy": {
                    "line_number": "21",
                    "fr": "Leprosy",
                    "en": "Leprosy",
                    "condition": "subforms.disease_diagnosis && subforms.disease_diagnosis.admission == 'yes' && subforms.disease_diagnosis && subforms.disease_diagnosis.diagnosis == 'leprosy'"
                },
                "diabetes_mellitus": {
                    "line_number": "22",
                    "fr": "Diabetes Mellitus",
                    "en": "Diabetes Mellitus",
                    "condition": "subforms.disease_diagnosis && subforms.disease_diagnosis.admission == 'yes' && subforms.disease_diagnosis && subforms.disease_diagnosis.diagnosis == 'diabetes_mellitus'"
                },
                "infant_of_diabetic_mother": {
                    "line_number": "23",
                    "fr": "Infant of Diabetic Mother",
                    "en": "Infant of Diabetic Mother",
                    "condition": "subforms.disease_diagnosis && subforms.disease_diagnosis.admission == 'yes' && subforms.disease_diagnosis && subforms.disease_diagnosis.diagnosis == 'infant_of_diabetic_mother'"
                },
                "kwashiorkor": {
                    "line_number": "24",
                    "fr": "Kwashiorkor",
                    "en": "Kwashiorkor",
                    "condition": "subforms.disease_diagnosis && subforms.disease_diagnosis && subforms.disease_diagnosis.admission == 'yes' && subforms.disease_diagnosis && subforms.disease_diagnosis.diagnosis == 'kwashiorkor'"
                },
                "marasmus": {
                    "line_number": "25",
                    "fr": "Marasmus",
                    "en": "Marasmus",
                    "condition": "subforms.disease_diagnosis && subforms.disease_diagnosis.admission == 'yes' && subforms.disease_diagnosis && subforms.disease_diagnosis.diagnosis == 'marasmus'"
                },
                "marasmic_kwashiorkor": {
                    "line_number": "26",
                    "fr": "Marasmic_kwashiorkor",
                    "en": "Marasmic_kwashiorkor",
                    "condition": "subforms.disease_diagnosis && subforms.disease_diagnosis.admission == 'yes' && subforms.disease_diagnosis && subforms.disease_diagnosis.diagnosis == 'marasmic_kwashiorkor'"
                },
                "moderate_malnutrition": {
                    "line_number": "27",
                    "fr": "Moderate Malnutrition",
                    "en": "Moderate Malnutrition",
                    "condition": "subforms.disease_diagnosis && subforms.disease_diagnosis.admission == 'yes' && subforms.disease_diagnosis && subforms.disease_diagnosis.diagnosis == 'moderate_malnutrition'"
                },
                "nutritional_disoders_other": {
                    "line_number": "28",
                    "fr": "Nutritional Disorders Other",
                    "en": "Nutritional Disorders Other",
                    "condition": "subforms.disease_diagnosis && subforms.disease_diagnosis.admission == 'yes' && subforms.disease_diagnosis && subforms.disease_diagnosis.diagnosis == 'nutritional_disorders_other'"
                },
                "thyroid_diseases": {
                    "line_number": "29",
                    "fr": "Thyroid Diseases",
                    "en": "Thyroid Diseases",
                    "condition": "subforms.disease_diagnosis && subforms.disease_diagnosis.admission == 'yes' && subforms.disease_diagnosis && subforms.disease_diagnosis.diagnosis == 'thyroid_diseases'"
                },
                "sickle_cell_disease": {
                    "line_number": "30",
                    "fr": "Sickle cell Disease",
                    "en": "Sickle cell Disease",
                    "condition": "subforms.disease_diagnosis && subforms.disease_diagnosis.admission == 'yes' && subforms.disease_diagnosis && subforms.disease_diagnosis.diagnosis == 'sickle_cell_disease'"
                },
                "anaemia_mild_moderate": {
                    "line_number": "31",
                    "fr": "Anaemia Mild/Moderate",
                    "en": "Anaemia Mild/Moderate",
                    "condition": "subforms.disease_diagnosis && subforms.disease_diagnosis.admission == 'yes' && subforms.disease_diagnosis && subforms.disease_diagnosis.diagnosis == 'anaemia_mild_moderate'"
                },
                "anaemia_severe": {
                    "line_number": "32",
                    "fr": "Anaemia Severe",
                    "en": "Anaemia Severe",
                    "condition": "subforms.disease_diagnosis && subforms.disease_diagnosis.admission == 'yes' && subforms.disease_diagnosis && subforms.disease_diagnosis.diagnosis == 'anaemia_severe'"
                },
                "psychoses": {
                    "line_number": "33",
                    "fr": "Psychoses",
                    "en": "Psychoses",
                    "condition": "subforms.disease_diagnosis && subforms.disease_diagnosis.admission == 'yes' && subforms.disease_diagnosis && subforms.disease_diagnosis.diagnosis == 'psychoses'"
                },
                "neuroses": {
                    "line_number": "34",
                    "fr": "Neuroses",
                    "en": "Neuroses",
                    "condition": "subforms.disease_diagnosis && subforms.disease_diagnosis.admission == 'yes' && subforms.disease_diagnosis && subforms.disease_diagnosis.diagnosis == 'neuroses'"
                },
                "cerebral_palsy": {
                    "line_number": "35",
                    "fr": "Cerebral Palsy",
                    "en": "Cerebral Palsy",
                    "condition": "subforms.disease_diagnosis && subforms.disease_diagnosis.admission == 'yes' && subforms.disease_diagnosis && subforms.disease_diagnosis.diagnosis == 'cerebral_palsy'"
                },
                "epilepsy": {
                    "line_number": "36",
                    "fr": "Epilepsy",
                    "en": "Epilepsy",
                    "condition": "subforms.disease_diagnosis && subforms.disease_diagnosis.admission == 'yes' && subforms.disease_diagnosis && subforms.disease_diagnosis.diagnosis == 'epilepsy'"
                },
                "ear_diseases_non_infectious": {
                    "line_number": "37",
                    "fr": "Ear Diseases non-infectious",
                    "en": "Ear Diseases non-infectious",
                    "condition": "subforms.disease_diagnosis && subforms.disease_diagnosis.admission == 'yes' && subforms.disease_diagnosis && subforms.disease_diagnosis.diagnosis == 'Ear Diseases non-infectious'"
                },
                "ear_infection_acute": {
                    "line_number": "38",
                    "fr": "Ear infection Acute",
                    "en": "Ear infection Acute",
                    "condition": "subforms.disease_diagnosis && subforms.disease_diagnosis.admission == 'yes' && subforms.disease_diagnosis && subforms.disease_diagnosis.diagnosis == 'ear_infection_acute'"
                },
                "ear_infection_chronic": {
                    "line_number": "39",
                    "fr": "Ear Infection Chronic",
                    "en": "Ear Infection Chronic",
                    "condition": "subforms.disease_diagnosis && subforms.disease_diagnosis.admission == 'yes' && subforms.disease_diagnosis && subforms.disease_diagnosis.diagnosis == 'ear_infection_chronic'"
                },
                "eye_infections_viral_keratoconjunctivitis": {
                    "line_number": "40",
                    "fr": "Eye Infections Viral Keratoconjunctivitis",
                    "en": "Eye Infections Viral Keratoconjunctivitis",
                    "condition": "subforms.disease_diagnosis && subforms.disease_diagnosis.admission == 'yes' && subforms.disease_diagnosis && subforms.disease_diagnosis.diagnosis == 'eye_infection'"
                },
                "eye_infections_other": {
                    "line_number": "41",
                    "fr": "Eye Infections Other",
                    "en": "Eye Infections Other",
                    "condition": "subforms.disease_diagnosis && subforms.disease_diagnosis.admission == 'yes' && subforms.disease_diagnosis && subforms.disease_diagnosis.diagnosis == 'eye_diseases_other_non_infectious'"
                },
                "eye_diseases_non-infectious": {
                    "line_number": "42",
                    "fr": "Eye Diseases non-infectious",
                    "en": "Eye Diseases non-infectious",
                    "condition": "subforms.disease_diagnosis && subforms.disease_diagnosis.admission == 'yes' && subforms.disease_diagnosis && subforms.disease_diagnosis.diagnosis == 'eye_diseases_other_non_infectious'"
                },
                "cardiac_failure": {
                    "line_number": "43",
                    "fr": "Cardiac Failure",
                    "en": "Cardiac Failure",
                    "condition": "subforms.disease_diagnosis && subforms.disease_diagnosis.admission == 'yes' && subforms.disease_diagnosis && subforms.disease_diagnosis.diagnosis == 'cardiac_failure'"
                },
                "hypertension_severe": {
                    "line_number": "44",
                    "fr": "Hypertension severe",
                    "en": "Hypertension severe",
                    "condition": "subforms.disease_diagnosis && subforms.disease_diagnosis.admission == 'yes' && subforms.disease_diagnosis && subforms.disease_diagnosis.diagnosis == 'hypertension_severe'"
                },
                "rheumatic_fever": {
                    "line_number": "45",
                    "fr": "Rheumatic Fever",
                    "en": "Rheumatic Fever",
                    "condition": "subforms.disease_diagnosis && subforms.disease_diagnosis.admission == 'yes' && subforms.disease_diagnosis && subforms.disease_diagnosis.diagnosis == 'rheumatic_fever'"
                },
                "cardiovascular_disorders_other": {
                    "line_number": "46",
                    "fr": "Cardiovascular Disorders Other",
                    "en": "Cardiovascular Disorders Other",
                    "condition": "subforms.disease_diagnosis && subforms.disease_diagnosis.admission == 'yes' && subforms.disease_diagnosis && subforms.disease_diagnosis.diagnosis == 'cardiovascular_disorders_other'"
                },
                "broncial_asthma_severe": {
                    "line_number": "47",
                    "fr": "Broncial Asthma Severe",
                    "en": "Broncial Asthma Severe",
                    "condition": "subforms.disease_diagnosis && subforms.disease_diagnosis.admission == 'yes' && subforms.disease_diagnosis && subforms.disease_diagnosis.diagnosis == 'broncial_asthma_severe'"
                },
                "upper_respiratory_infections_pharyngitis_tonsillitis_rhinitis": {
                    "line_number": "48",
                    "fr": "Upper Respiratory Infections Pharyngitis/Tonsillitis/Rhinitis",
                    "en": "Upper Respiratory Infections Pharyngitis/Tonsillitis/Rhinitis",
                    "condition": "subforms.disease_diagnosis && subforms.disease_diagnosis.admission == 'yes' && subforms.disease_diagnosis && subforms.disease_diagnosis.diagnosis == 'upper_respiratory_infections'"
                },
                "pneumonia": {
                    "line_number": "49",
                    "fr": "Pneumonia",
                    "en": "Pneumonia",
                    "condition": "subforms.disease_diagnosis && subforms.disease_diagnosis.admission == 'yes' && subforms.disease_diagnosis && subforms.disease_diagnosis.diagnosis == 'pneumonia'"
                },
                "pneumonia_severe": {
                    "line_number": "50",
                    "fr": "Pneumonia Severe",
                    "en": "Pneumonia Severe",
                    "condition": "subforms.disease_diagnosis && subforms.disease_diagnosis.admission == 'yes' && subforms.disease_diagnosis && subforms.disease_diagnosis.diagnosis == 'pneumonia_severe'"
                },
                "respiratory_system_disorders_other": {
                    "line_number": "51",
                    "fr": "Respiratory System disorders Other",
                    "en": "Respiratory System disorders Other",
                    "condition": "subforms.disease_diagnosis && subforms.disease_diagnosis.admission == 'yes' && subforms.disease_diagnosis && subforms.disease_diagnosis.diagnosis == 'respiratory_system_disorders_other'"
                },
                "peptic_ulcers": {
                    "line_number": "52",
                    "fr": "Peptic ulcers",
                    "en": "Peptic ulcers",
                    "condition": "subforms.disease_diagnosis && subforms.disease_diagnosis.admission == 'yes' && subforms.disease_diagnosis && subforms.disease_diagnosis.diagnosis == 'peptic_ulcers'"
                },
                "liver_diseases_non_infectious": {
                    "line_number": "53",
                    "fr": "Liver diseases non-infectious",
                    "en": "Liver diseases non-infectious",
                    "condition": "subforms.disease_diagnosis && subforms.disease_diagnosis.admission == 'yes' && subforms.disease_diagnosis && subforms.disease_diagnosis.diagnosis == 'liver_diseases_non_infectious'"
                },
                "gastrointestinal_disease_other_non_infectious": {
                    "line_number": "54",
                    "fr": "Gastrointestinal diseases Other non-infectious",
                    "en": "Gastrointestinal diseases Other non-infectious",
                    "condition": "subforms.disease_diagnosis && subforms.disease_diagnosis.admission == 'yes' && subforms.disease_diagnosis && subforms.disease_diagnosis.diagnosis == 'gastrointestinal_diseases'"
                },
                "urinary_tract_infections": {
                    "line_number": "55",
                    "fr": "Urinary Tract Infections UTI",
                    "en": "Urinary Tract Infections UTI",
                    "condition": "subforms.disease_diagnosis && subforms.disease_diagnosis.admission == 'yes' && subforms.disease_diagnosis && subforms.disease_diagnosis.diagnosis == 'urinary_tract_infections'"
                },
                "nephrotic_syndrome": {
                    "line_number": "56",
                    "fr": "Nephrotic Syndrome",
                    "en": "Nephrotic Syndrome",
                    "condition": "subforms.disease_diagnosis && subforms.disease_diagnosis.admission == 'yes' && subforms.disease_diagnosis && subforms.disease_diagnosis.diagnosis == 'nephrotic_syndrome'"
                },
                "acute_glumerulonephritis": {
                    "line_number": "57",
                    "fr": "Acute glumerulonephritis",
                    "en": "Acute glumerulonephritis",
                    "condition": "subforms.disease_diagnosis && subforms.disease_diagnosis.admission == 'yes' && subforms.disease_diagnosis && subforms.disease_diagnosis.diagnosis == 'acute_glumerulonephritis'"
                },
                "skin_infections": {
                    "line_number": "58",
                    "fr": "Skin Infections",
                    "en": "Skin Infections",
                    "condition": "subforms.disease_diagnosis && subforms.disease_diagnosis.admission == 'yes' && subforms.disease_diagnosis && subforms.disease_diagnosis.diagnosis == 'skin_infection'"
                },
                "skin_diseases_non_infectious": {
                    "line_number": "59",
                    "fr": "Skin diseases non-infectious",
                    "en": "Skin diseases non-infectious",
                    "condition": "subforms.disease_diagnosis && subforms.disease_diagnosis.admission == 'yes' && subforms.disease_diagnosis && subforms.disease_diagnosis.diagnosis == 'skin_diseases_non_infectious'"
                },
                "osteomyelitis": {
                    "line_number": "60",
                    "fr": "Osteomyelitis",
                    "en": "Osteomyelitis",
                    "condition": "subforms.disease_diagnosis && subforms.disease_diagnosis.admission == 'yes' && subforms.disease_diagnosis && subforms.disease_diagnosis.diagnosis == 'osteomyelitis'"
                },
                "rheumatoid_and_joint_disease": {
                    "line_number": "61",
                    "fr": "Rheumatoid and Joint diseases",
                    "en": "Rheumatoid and Joint diseases",
                    "condition": "subforms.disease_diagnosis && subforms.disease_diagnosis.admission == 'yes' && subforms.disease_diagnosis && subforms.disease_diagnosis.diagnosis == 'rheumatoid_and_joint_diseases'"
                },
                "low_birth_weight_and_prematurity_complications": {
                    "line_number": "62",
                    "fr": "Low birth weight and Prematurity complications",
                    "en": "Low birth weight and Prematurity complications",
                    "condition": "subforms.disease_diagnosis && subforms.disease_diagnosis.admission == 'yes' && subforms.disease_diagnosis && subforms.disease_diagnosis.diagnosis == 'Low birth weight and Prematurity complications'"
                },
                "birth_asphyxia": {
                    "line_number": "63",
                    "fr": "Birth asphyxia",
                    "en": "Birth asphyxia",
                    "condition": "subforms.disease_diagnosis && subforms.disease_diagnosis.admission == 'yes' && subforms.disease_diagnosis && subforms.disease_diagnosis.diagnosis == 'Birth asphyxia'"
                },
                "neonatal_septicaemia_local_infections": {
                    "line_number": "64",
                    "fr": "Neonatal Septicaemia Local infections",
                    "en": "Neonatal Septicaemia Local infections",
                    "condition": "subforms.disease_diagnosis && subforms.disease_diagnosis.admission == 'yes' && subforms.disease_diagnosis && subforms.disease_diagnosis.diagnosis == 'low_birth_weight_and_prematurity_complications'"
                },
                "road_traffic_accidents": {
                    "line_number": "65",
                    "fr": "Road Traffic Accidents",
                    "en": "Road Traffic Accidents",
                    "condition": "subforms.disease_diagnosis && subforms.disease_diagnosis.admission == 'yes' && subforms.disease_diagnosis && subforms.disease_diagnosis.diagnosis == 'road_traffic_accidents'"
                },
                "fractures": {
                    "line_number": "66",
                    "fr": "Fractures",
                    "en": "Fractures",
                    "condition": "subforms.disease_diagnosis && subforms.disease_diagnosis.admission == 'yes' && subforms.disease_diagnosis && subforms.disease_diagnosis.diagnosis == 'fractures'"
                },
                "poisoning": {
                    "line_number": "67",
                    "fr": "Poisoning",
                    "en": "Poisoning",
                    "condition": "subforms.disease_diagnosis && subforms.disease_diagnosis && subforms.disease_diagnosis.admission == 'yes' && subforms.disease_diagnosis && subforms.disease_diagnosis.diagnosis == 'poisoning'"
                },
                "burns": {
                    "line_number": "68",
                    "fr": "Burns",
                    "en": "Burns",
                    "condition": "subforms.disease_diagnosis && subforms.disease_diagnosis.admission == 'yes' && subforms.disease_diagnosis && subforms.disease_diagnosis.diagnosis == 'burns'"
                },
                "animal_bites_suspected_rabies": {
                    "line_number": "69",
                    "fr": "Animal Bites Suspected Rabies",
                    "en": "Animal Bites Suspected Rabies",
                    "condition": "subforms.disease_diagnosis && subforms.disease_diagnosis.admission == 'yes' && subforms.disease_diagnosis && subforms.disease_diagnosis.diagnosis == 'animal_bite_suspected_rabies'"
                },
                "animal_bites_no_suspected_rabies": {
                    "line_number": "70",
                    "fr": "Animal Bites no suspected Rabies",
                    "en": "Animal Bites no suspected Rabies",
                    "condition": "subforms.disease_diagnosis && subforms.disease_diagnosis.admission == 'yes' && subforms.disease_diagnosis && subforms.disease_diagnosis.diagnosis == 'animal_bite_no_rabies'"
                },
                "hiv_infection_symptomatic": {
                    "line_number": "71",
                    "fr": "HIV infection Symptomatic",
                    "en": "HIV infection Symptomatic",
                    "condition": "subforms.disease_diagnosis && subforms.disease_diagnosis.admission == 'yes' && subforms.disease_diagnosis && subforms.disease_diagnosis.diagnosis == 'hiv_infection_symptomatic'"
                },
                "congenital_disorders": {
                    "line_number": "72",
                    "fr": "Congenital Disorders",
                    "en": "Congenital Disorders",
                    "condition": "subforms.disease_diagnosis && subforms.disease_diagnosis.admission == 'yes' && subforms.disease_diagnosis && subforms.disease_diagnosis.diagnosis == 'congenital_disorders'"
                },
                "hepatitis": {
                    "line_number": "73",
                    "fr": "Hepatitis",
                    "en": "Hepatitis",
                    "condition": "subforms.disease_diagnosis && subforms.disease_diagnosis.admission == 'yes' && subforms.disease_diagnosis && subforms.disease_diagnosis.diagnosis == 'hepatitis'"
                },
                "neoplasm": {
                    "line_number": "74",
                    "fr": "Neoplasm",
                    "en": "Neoplasm",
                    "condition": "subforms.disease_diagnosis && subforms.disease_diagnosis.admission == 'yes' && subforms.disease_diagnosis && subforms.disease_diagnosis.diagnosis == 'neoplasm'"
                },
                "soil_transmitted_helminths": {
                    "line_number": "75",
                    "fr": "Soil transmitted helminths",
                    "en": "Soil transmitted helminths",
                    "condition": "subforms.disease_diagnosis && subforms.disease_diagnosis.admission == 'yes' && subforms.disease_diagnosis && subforms.disease_diagnosis.diagnosis == 'soil_transmitted_helminths'"
                },
                "lympatic_filairiasis": {
                    "line_number": "76",
                    "fr": "Lympatic filairiasis",
                    "en": "Lympatic filairiasis",
                    "condition": "subforms.disease_diagnosis && subforms.disease_diagnosis.admission == 'yes' && subforms.disease_diagnosis && subforms.disease_diagnosis.diagnosis == 'lympatic_filairiasis'"
                },
                "anthrax": {
                    "line_number": "77",
                    "fr": "Anthrax",
                    "en": "Anthrax",
                    "condition": "subforms.disease_diagnosis && subforms.disease_diagnosis.admission == 'yes' && subforms.disease_diagnosis && subforms.disease_diagnosis.diagnosis == 'anthrax'"
                },
                "diagnoses_other": {
                    "line_number": "78",
                    "fr": "Diagnoses Other",
                    "en": "Diagnoses Other",
                    "condition": "subforms.disease_diagnosis && subforms.disease_diagnosis.admission == 'yes' && subforms.disease_diagnosis && subforms.disease_diagnosis.diagnosis == 'diagnoses_other'"
                }
            },
            "definitions": {
                "columns": {
                    "lessthan1male": {
                        "title": "Less than 1 Month - males",
                        "condition": "patient.current_age_months < 1 && patient.gender == 'male'"
                    },
                    "lessthan1female": {
                        "title": "Less than 1 Month - females",
                        "condition": "patient.current_age_months < 1 && patient.gender == 'female'"
                    },
                    "lessthan1total": {
                        "title": "Less than 1 Month - Total",
                        "condition": "patient.current_age_months < 1"
                    },
                    "more1momale": {
                        "title": "More than 1 month and less than 1 Year - male",
                        "condition": "patient.current_age_years < 1 && patient.gender == 'male'"
                    },
                    "more1mofemale": {
                        "title": "More than 1 month and less than 1 Year - females",
                        "condition": "patient.current_age_years < 1 && patient.gender == 'female'"
                    },
                    "more1mototal": {
                        "title": "More than 1 month and less than 1 Year - Total",
                        "condition": "patient.current_age_years < 1"
                    },
                    "above1below5male": {
                        "title": "More than 1 year and less than 5 Years - male",
                        "condition": "patient.current_age_years > 1 && patient.current_age_years < 5 && patient.gender == 'male'"
                    },
                    "above1below5female": {
                        "title": "More than 1 year and less than 5 Years - females",
                        "condition": "patient.current_age_years > 1 && patient.current_age_years < 5 && patient.gender == 'female'"
                    },
                    "above1below5total": {
                        "title": "More than 1 year and less than 5 Years - Total",
                        "condition": "patient.current_age_years > 1 && patient.current_age_years < 5"
                    },
                    "total_ipd": {
                        "title": "Total (All Ages)",
                        "condition": "true"
                    }
                }
            }

        }, //end report_ipd
        "report_leprosy": {

            "collection": "reports",
            "class": "schema",
            "_id": "reports.schema.leprosytb",
            "$schema": "http:..json-schema.org.draft-04.schema#",
            "title": "Leprosy and TB",
            "type": "object",
            "properties": {
                "totals": {
                    "title": "Total (a)",
                    "type": "number",
                    "line_number": "1",
                    "condition": "subforms.tb_leprosy && subforms.tb_leprosy.diagnosis.indexOf('leprosy') != -1"
                },
                "newly_registered": {
                    "title": "New",
                    "type": "number",
                    "line_number": "2a",
                    "condition": "subforms.tb_leprosy && subforms.tb_leprosy.leprosy_status == 'new_patient'"
                },
                "return_after_default": {
                    "title": "Return after Default",
                    "type": "number",
                    "line_number": "2b",
                    "condition": "subforms.tb_leprosy && subforms.tb_leprosy.leprosy_status == 'return_after_default'"
                },
                "relapse_after_MDT": {
                    "title": "Relapse after MDT",
                    "type": "number",
                    "line_number": "2c",
                    "condition": "subforms.tb_leprosy && subforms.tb_leprosy.leprosy_status == 'relapse_after_mdt'"
                },
                "relapse_after_dds": {
                    "title": "Relapse after DDS.Others",
                    "type": "number",
                    "line_number": "2d",
                    "condition": "subforms.tb_leprosy && subforms.tb_leprosy.leprosy_status == 'relapse_after_dds'"
                },
                "total_notifications": {
                    "title": "Total notifications (b)",
                    "type": "number",
                    "line_number": "2e",
                    "condition": "subforms.tb_leprosy && subforms.tb_leprosy.leprosy_status == 'new_patient' && subforms.tb_leprosy.leprosy_status == 'return after default' && subforms.tb_leprosy.leprosy_status == 'relapse after mdt' && subforms.tb_leprosy.leprosy_status == 'relapse after dds'"
                },
                "1mb": {
                    "title": "1MB",
                    "type": "number",
                    "line_number": "3a",
                    "condition": "subforms.tb_leprosy && subforms.tb_leprosy.leprosy_classification == 'mb_a' || subforms.tb_leprosy.leprosy_classification == 'mb_b' "
                },
                "1pb": {
                    "title": "1PB",
                    "type": "number",
                    "line_number": "3b",
                    "condition": "subforms.tb_leprosy && subforms.tb_leprosy.leprosy_classification == 'pb_a' || subforms.tb_leprosy.leprosy_classification == 'pb_b' "
                },
                "disability_grade_0": {
                    "title": "Grade 0",
                    "type": "number",
                    "line_number": "4a",
                    "condition": "subforms.tb_leprosy && subforms.tb_leprosy.disability_grade == 'grade_0'"
                },
                "disability_grade_1": {
                    "title": "Grade 1",
                    "type": "number",
                    "line_number": "4b",
                    "condition": "subforms.tb_leprosy && subforms.tb_leprosy.disability_grade == 'grade_1'"
                },
                "disability_grade_2": {
                    "title": "Grade 2",
                    "type": "number",
                    "line_number": "4c",
                    "condition": "subforms.tb_leprosy && subforms.tb_leprosy.disability_grade == 'grade_2'"
                },
                "disability_grade_total": {
                    "title": "Total",
                    "type": "number",
                    "line_number": "4d",
                    "condition": "subforms.tb_leprosy && subforms.tb_leprosy && subforms.tb_leprosy.disability_grade"
                },
                "treatment_completed": {
                    "title": "Treatment Completed",
                    "type": "number",
                    "line_number": "5a",
                    "condition": "subforms.tb_leprosy && subforms.tb_leprosy.end_result == 'treatment_completed'"
                },
                "died": {
                    "title": "Died",
                    "type": "number",
                    "line_number": "5b",
                    "condition": "subforms.tb_leprosy && subforms.tb_leprosy.end_result == 'died'"
                },
                "transferred_out": {
                    "title": "Transferred Out",
                    "type": "number",
                    "line_number": "5c",
                    "condition": "subforms.tb_leprosy && subforms.tb_leprosy.end_result == 'transferred_out'"
                },
                "defaulter": {
                    "title": "Defaulter",
                    "type": "number",
                    "line_number": "5d",
                    "condition": "subforms.tb_leprosy && subforms.tb_leprosy.end_result == 'defaulter'"
                },
                "total_c": {
                    "title": "Total (c)",
                    "type": "number",
                    "line_number": "5e",
                    "condition": "subforms.tb_leprosy && subforms.tb_leprosy.end_result"
                },
                "registered_at_end_of_quarter": {
                    "title": "(a) + (b) - (c)",
                    "type": "number",
                    "line_number": "6",
                    "condition": "(subforms.tb_leprosy.leprosy_status + subforms.tb_leprosy.classification) - subforms.tb_leprosy.end_result"
                },
                "corticosteroids": {
                    "title": "Patients who started corticosteroids in the quarter",
                    "type": "number",
                    "line_number": "7",
                    "condition": "subforms.tb_leprosy.corticosteroid_treatment == 'yes'"
                }
            },
            "definitions": {
                "columns": {
                    "mb_a": {
                        "title": "MB(A)",
                        "condition": "subforms.tb_leprosy && subforms.tb_leprosy.leprosy_classification == 'mb_a'"
                    },
                    "mb_c": {
                        "title": "MB(C)",
                        "condition": "subforms.tb_leprosy && subforms.tb_leprosy.leprosy_classification == 'mb_c'"
                    },
                    "pb_a": {
                        "title": "PB(A)",
                        "condition": "subforms.tb_leprosy && subforms.tb_leprosy.leprosy_classification == 'pb_a'"
                    },
                    "pb_c": {
                        "type": "number",
                        "condition": "subforms.tb_leprosy && subforms.tb_leprosy.leprosy_classification == 'pb_c'"
                    },
                    "total": {
                        "title": "Total",
                        "condition": "subforms.tb_leprosy && subforms.tb_leprosy.leprosy_classification"
                    },

                    "0_14_male": {
                        "title": "0-14 male",
                        "condition": "patient.current_age_years <= 14 && patient.gender == 'male'"
                    },

                    "0_14_female": {
                        "title": "0-14 female",
                        "condition": "patient.current_age_years <= 14 && patient.gender == 'female'"
                    },
                    "15_24_male": {
                        "title": "15-24 male",
                        "condition": "patient.current_age_years >= 15 && patient.current_age_years <= 24  && patient.gender == 'male'"
                    },

                    "15_24_female": {
                        "title": "15-24 female",
                        "condition": "patient.current_age_years >= 15 && patient.current_age_years <= 24  && patient.gender == 'female'"
                    },
                    "25_34_male": {
                        "title": "25-34 male",
                        "condition": "patient.current_age_years >= 25 && patient.current_age_years <= 34  && patient.gender == 'male'"
                    },

                    "25_34_female": {
                        "title": "25-34 female",
                        "condition": "patient.current_age_years >= 25 && patient.current_age_years <= 34  && patient.gender == 'female'"
                    },

                    "35_44_male": {
                        "title": "35-44 male",
                        "condition": "patient.current_age_years >= 35 && patient.current_age_years <= 44  && patient.gender == 'male'"
                    },

                    "35_44_female": {
                        "title": "35-44 female",
                        "condition": "patient.current_age_years >= 35 && patient.current_age_years <= 44  && patient.gender == 'female'"
                    },
                    "45_54_male": {
                        "title": "45-54 male",
                        "condition": "patient.current_age_years >= 45 && patient.current_age_years <= 54  && patient.gender == 'male'"
                    },

                    "45_54_female": {
                        "title": "45-54 female",
                        "condition": "patient.current_age_years >= 45 && patient.current_age_years <= 54  && patient.gender == 'female'"
                    },
                    "55_64_male": {
                        "title": "55-64 male",
                        "condition": "patient.current_age_years >= 55 && patient.current_age_years <= 64  && patient.gender == 'male'"
                    },

                    "55_64_female": {
                        "title": "55-64 female",
                        "condition": "patient.current_age_years >= 55 && patient.current_age_years <= 64  && patient.gender == 'female'"
                    },

                    "65_male": {
                        "title": "65+ male",
                        "condition": "patient.current_age_years >= 65 && patient.gender == 'male'"
                    },

                    "65_female": {
                        "title": "65+ female",
                        "condition": "patient.current_age_years >= 65 && patient.gender == 'female'"
                    },

                    "total_male": {
                        "title": "Total male",
                        "condition": "patient.gender == 'male'"
                    },

                    "total_female": {
                        "title": "Total female",
                        "condition": "patient.gender == 'female'"
                    },
                    "total_leprosy": {
                        "title": "Total",
                        "condition": "true"
                    }
                }
            }

        }, // end report_leprosy
        "report_motherchildward": {

            "collection": "reports",
            "class": "schema",
            "_id": "reports/schema/motherchildward",
            "$schema": "http://json-schema.org/draft-04/schema#",
            "title": "Mother and Child Ward",
            "type": "object",
            "properties": {
                "those_who_were_expected_to_deliver": {
                    "line_number": "1",
                    "fr": "Waliotarajiwa kujifungua",
                    "en": "Those who were expected to deliver",
                    "condition": "subforms.anc_followup && subforms.anc_followup.current_gestationalage_weeks >= 36"
                },
                "reprot_for_mothers_who_delivered": {
                    "line_number": "2",
                    "fr": "Taarifa ya Waliojifungua",
                    "en": "Report for mothers who delivered"
                },
                "those_who_delivered_at_the_clinic": {
                    "line_number": "2a",
                    "fr": "Waliojifungulia katika kituo cha kutolea huduma za afya",
                    "en": "Those who delivered at the clinic",
                    "condition": "subforms.delivery_record && subforms.delivery_record.delivery_location == 'delivered_in_clinic'"
                },
                "those_who_delivered_on_while_on_their_way_to_the_clinic": {
                    "line_number": "2b",
                    "fr": "Waliojifungua kabla ya kufika kituoni (BBA)",
                    "en": "Those who delivered on while on their way to the clinic (BBA)",
                    "condition": "subforms.delivery_record && subforms.delivery_record.delivery_location == 'delivered_on_the_way_to_clinic'"
                },
                "those_helped_to_deliver_by_traditional_birth_attendants_tba": {
                    "line_number": "2c",
                    "fr": "Waliozalishwa na wakunga wa jadi (TBA)",
                    "en": "Those helped to deliver by traditional birth attendants (TBA)",
                    "condition": "subforms.delivery_record && subforms.delivery_record.delivery_location == 'delivered_by_traditional_birth_attendant'"
                },
                "home_delivery": {
                    "line_number": "2d",
                    "fr": "Waliojifungua nyumbani (H)",
                    "en": "Home delivery (H)",
                    "condition": "subforms.delivery_record && subforms.delivery_record.delivery_location == 'home_delivery'"
                },
                "total_giving_birth": {
                    "line_number": "2e",
                    "fr": "Jumla waliojifungua (2a+2b+2c+2d)",
                    "en": "Total giving birth (2a +2 b +2 c +2 d)",
                    "condition": "subforms.delivery_record"
                },
                "those_who_were_helped_to_deliver_by_skilled_providers": {
                    "line_number": "2f",
                    "fr": "Waliozalishwa na watoa huduma wanye ujuzi",
                    "en": "Those who were helped to deliver by skilled providers",
                    "condition": "subforms.delivery_record && subforms.delivery_record.delivery_location == 'delivered_by_skilled_provider'"
                },
                "percentage_of_all_who_delivered_at_the_clinic": {
                    "line_number": "2g",
                    "fr": "Asilimia ya waliojifungulia katika vituo vya kutolea huduma za afya (2a/1) x 100",
                    "en": "Percentage of all who delivered at the Clinic (2a / 1) x 100",
                    "condition": "subforms.delivery_record && ((subforms.delivery_record.delivery_location == 'delivered_in_clinic'/1)*100)"
                },
                "clinic_reports_on_different_methods_of_methods_of_delivery": {
                    "line_number": "3",
                    "fr": "Taarifa ya njia za kujifungua kutoka vituo vya kutolea huduma za afya",
                    "en": "Clinic reports on different methods of methods of delivery"
                },
                "normal_delivery_kw": {
                    "line_number": "3a",
                    "fr": "Waliojifungua Kawaida (KW)",
                    "en": "normal delivery (KW)",
                    "condition": "subforms.delivery_record && subforms.delivery_record.delivery_mode == 'vaginal'"
                },
                "vacuum_vm_delivery": {
                    "line_number": "3b",
                    "fr": "Waliojifungua kwa Vacuum (VM)",
                    "en": "Vacuum (VM) delivery",
                    "condition": "subforms.delivery_record && subforms.delivery_record.delivery_mode == 'vacuum'"
                },
                "breech_delivery": {
                    "line_number": "3c",
                    "fr": "Breech Delivery",
                    "en": "breech Delivery",
                    "condition": "subforms.delivery_record && subforms.delivery_record.delivery_mode == 'breech'"
                },
                "caesarian_section_cs_delivery": {
                    "line_number": "3d",
                    "fr": "Waliojifungua kwa Caesarian Section (CS)",
                    "en": "Caesarian Section (CS) delivery",
                    "condition": "subforms.delivery_record && subforms.delivery_record.delivery_mode == 'c_section'"
                },
                "delivery_through_other_ways": {
                    "line_number": "3e",
                    "fr": "Waliojifungua kwa njia nyingizezo",
                    "en": "Delivery through other ways",
                    "condition": "subforms.delivery_record && subforms.delivery_record.delivery_mode == 'other'"
                },
                "total": {
                    "line_number": "3f",
                    "fr": "Jumla (3a+3b+3c+3d+3e)",
                    "en": "Total (3a +3 b +3 c +3 d +3 e)",
                    "condition": "subforms.delivery_record && subforms.delivery_record.delivery_mode"
                },
                "the_number_of_pregnant_women_who_underwent_amtsl": {
                    "line_number": "3g",
                    "fr": "Idadi ya wajawazito walio fanyiwa AMTSL",
                    "en": "The number of pregnant women who underwent AMTSL",
                    "condition": "true"
                },
                "prenatal_problems": {
                    "line_number": "4",
                    "fr": "Matatizo kabla ya kujifungua",
                    "en": "Prenatal problems"
                },
                "aph": {
                    "line_number": "4a",
                    "fr": "APH",
                    "en": "APH",
                    "condition": "subforms.delivery_record && subforms.delivery_record.prenatal_problems.indexOf('aph') != -1"
                },
                "pre_mature_rupture_of_membrane_prom": {
                    "line_number": "4b",
                    "fr": "Pre-mature Rupture of Membrane (PROM)",
                    "en": "Pre-mature rupture of membrane (PROM)",
                    "condition": "subforms.delivery_record && subforms.delivery_record.prenatal_problems.indexOf('prom') != -1"
                },
                "high_bp": {
                    "line_number": "4c",
                    "fr": "High BP",
                    "en": "high BP",
                    "condition": "subforms.delivery_record && subforms.delivery_record.prenatal_problems.indexOf('high_bp') != -1"
                },
                "eclampsia": {
                    "line_number": "6b",
                    "fr": "Eclampsia",
                    "en": "eclampsia",
                    "condition": "subforms.delivery_record && subforms.delivery_record.prenatal_problems.indexOf('eclampsia') != -1"
                },
                "anaemia": {
                    "line_number": "4e",
                    "fr": "Anaemia",
                    "en": "Anaemia",
                    "condition": "subforms.delivery_record && subforms.delivery_record.prenatal_problems.indexOf('anemia') != -1"
                },
                "malaria": {
                    "line_number": "4f",
                    "fr": "Malaria",
                    "en": "malaria",
                    "condition": "subforms.delivery_record && subforms.delivery_record.prenatal_problems.indexOf('Malaria') != -1"
                },
                "hiv_stage_iii_or_iv": {
                    "line_number": "4g",
                    "fr": "HIV+ stage III or IV",
                    "en": "HIV + stage III or IV",
                    "condition": "subforms.delivery_record && subforms.delivery_record.prenatal_problems.indexOf('hiv_stage_iii_or_iv') != -1"
                },
                "eptopic_pregnancy": {
                    "line_number": "4h",
                    "fr": "Ectopic Pregnancy",
                    "en": "ectopic Pregnancy",
                    "condition": "subforms.delivery_record && subforms.delivery_record.prenatal_problems.indexOf('ectopic_pregnancy') != -1"
                },
                "abortion_or_abortion_complications": {
                    "line_number": "4i",
                    "fr": "Abortion / Abortion Complications",
                    "en": "Abortion / Abortion Complications",
                    "condition": "subforms.delivery_record && subforms.delivery_record.prenatal_problems.indexOf('abortion_complications') != -1"
                },
                "other": {
                    "line_number": "6h",
                    "fr": "Mengineyo",
                    "en": "other",
                    "condition": "subforms.delivery_record && subforms.delivery_record.prenatal_problems.indexOf('other') != -1"
                },
                "total_impaired_prenatal": {
                    "line_number": "4k",
                    "fr": "Jumla wenye matatizo kabla ya kujifungua (4a+4b+4c+4d+4e+4f+4h+4i+4j+4k)",
                    "en": "Total impaired prenatal (4a +4 b +4 c +4 d +4 e +4 f +4 h +4 i +4 j +4 k)",
                    "condition": "subforms.delivery_record && subforms.delivery_record.prenatal_problems"
                },
                "waliokeketwa_fgm": {
                    "line_number": "5",
                    "fr": "Waliokeketwa (FGM)",
                    "en": "Waliokeketwa (FGM)",
                    "condition": "true"
                },
                "complications_during_and_after_childbirth": {
                    "line_number": "6",
                    "fr": "Matatizo wakati na baada ya kujifungua",
                    "en": "Complications during and after childbirth"
                },
                "pph": {
                    "line_number": "6a",
                    "fr": "PPH",
                    "en": "PPH",
                    "condition": "subforms.delivery_record && subforms.delivery_record.childbirth_complications.indexOf('pph') != -1"
                },
                "obstructed_labour": {
                    "line_number": "6c",
                    "fr": "Obstructed Labour",
                    "en": "Obstructed Labour",
                    "condition": "subforms.delivery_record && subforms.delivery_record.childbirth_complications.indexOf('obstructed_labor') != -1"
                },
                "retained_placenta": {
                    "line_number": "6d",
                    "fr": "Retained Placenta",
                    "en": "Retained Placenta",
                    "condition": "subforms.delivery_record && subforms.delivery_record.childbirth_complications.indexOf('retained_placenta') != -1"
                },
                "tear_third_degree_tear": {
                    "line_number": "6e",
                    "fr": "Tear (Third Degree Tear)",
                    "en": "Tear (Third Degree Tear)",
                    "condition": "subforms.delivery_record && subforms.delivery_record.childbirth_complications.indexOf('tear_third_degree_tear)') != -1"
                },
                "ruptured_uterus": {
                    "line_number": "6f",
                    "fr": "Ruptured Uterus",
                    "en": "Ruptured Uterus",
                    "condition": "subforms.delivery_record && subforms.delivery_record.childbirth_complications.indexOf('ruptured_uterus') != -1"
                },
                "infection_or_sepsis": {
                    "line_number": "6g",
                    "fr": "Uambukizo / Sepsis",
                    "en": "Infection/sepsis",
                    "condition": "subforms.delivery_record && subforms.delivery_record.childbirth_complications.indexOf('sepsis_infection') != -1"
                },
                "total_complications_after_childbirth": {
                    "line_number": "6i",
                    "fr": "Jumla ya matatizo baada ya kujifungua (6a+6b+6c+6d+6e+6f+6g+6h)",
                    "en": "Total complications after childbirth (6a +6 b +6 +6 c d e +6 +6 +6 G+ f 6h)",
                    "condition": "subforms.delivery_record && subforms.delivery_record.childbirth_complications"
                },
                "emoc": {
                    "line_number": "7",
                    "fr": "EmOC",
                    "en": "EmOC"
                },
                "given_iv_antibiotics": {
                    "line_number": "7a",
                    "fr": "Amepewa (IV) Antibiotiki",
                    "en": "given (IV) antibiotics",
                    "condition": "subforms.delivery_record && subforms.delivery_record.childbirth_complications.indexOf('given_iv_antibiotics') != -1"
                },
                "given_iv_uterontonic": {
                    "line_number": "7b",
                    "fr": "Amepewa (IV) Uterotonic",
                    "en": "given (IV) Uterotonic",
                    "condition": "subforms.delivery_record && subforms.delivery_record.childbirth_complications.indexOf('given_uterotonics') != -1"
                },
                "given_iv_anticonvulsants": {
                    "line_number": "7c",
                    "fr": "Amepewa (IV) Anticonvulsants",
                    "en": "Given (IV) Anticonvulsants",
                    "condition": "subforms.delivery_record && subforms.delivery_record.childbirth_complications.indexOf('given_iv_anticonvulsants') != -1"
                },
                "placenta_has_been_dismissed_by_hand": {
                    "line_number": "7d",
                    "fr": "Ameondolewa kondo la nyuma kwa mkono",
                    "en": "Placenta has been dismissed by hand",
                    "condition": "subforms.delivery_record &&subforms.delivery_record.childbirth_complications.indexOf('placenta_removed_by_hand') != -1"
                },
                "those_who_did_mva": {
                    "line_number": "7e",
                    "fr": "Amefanyiwa MVA",
                    "en": "Those who did MVA",
                    "condition": "subforms.delivery_record && subforms.delivery_record.childbirth_complications.indexOf('mva_needed') != -1"
                },
                "those_who_got_blood_transfusion": {
                    "line_number": "7f",
                    "fr": "Ameongezewa Damu",
                    "en": "Those who got blood transfusion",
                    "condition": "subforms.delivery_record && subforms.delivery_record.childbirth_complications.indexOf('given_blood_transfusion') != -1"
                },
                "pmtct": {
                    "line_number": "8",
                    "fr": "PMTCT",
                    "en": "PMTCT"
                },
                "total_who_tested_hiv_anc": {
                    "line_number": "8a",
                    "fr": "Jumla waliopimwa VVU ANC",
                    "en": "Total who tested HIV ANC",
                    "condition": "subforms.anc_followup && subforms.anc_followup.tested_hiv_firstvisit == 'yes'"
                },
                "those_who_were_found_positive_at_anc": {
                    "line_number": "8b",
                    "fr": "Waliogundulika Positive kutoka ANC",
                    "en": "Those who were found positive at ANC",
                    "condition": "subforms.anc_followup && subforms.anc_followup.second_hiv_test == 'yes'"
                },
                "those_who_started_using_arv_during_pregnancy_at_anc": {
                    "line_number": "8c",
                    "fr": "Walioanzishiwa dawa za ARV wakati wa ajauzito (ANC)",
                    "en": "Those who started using ARV during pregnancy at ANC",
                    "condition": "subforms.anc_followup && subforms.anc_followup.combo_drugs == 'yes'"
                },
                "those_who_started_using_art_treatment_during_pregnancy_anc": {
                    "line_number": "8d",
                    "fr": "Walioanza matibabu ya ART wakati wa ujauzito (ANC)",
                    "en": "Those who started using ART treatment during pregnancy (ANC)",
                    "condition": "subforms.anc_followup && subforms.anc_followup.art_drugs == 'yes'"
                },
                "total_number_of_clients_who_tested_for_hiv_during_and_after_childbirth": {
                    "line_number": "8e",
                    "fr": "Jumla waliopimwa VVU wakati na baada ya kujifungua",
                    "en": "Total number of clients who tested for HIV during and after childbirth",
                    "condition": "subforms.postnatal && subforms.postnatal.postnatal_hiv_test == 'yes'"
                },
                "those_tested_positive_during_and_after_childbirth": {
                    "line_number": "8f",
                    "fr": "Waliogundulika Positive wakati na baada ya kujifungua",
                    "en": "Those tested positive during and after childbirth",
                    "condition": "subforms.postnatal && subforms.postnatal.postnatal_hiv_positive == 'yes'"
                },
                "those_who_started_using_arvs_during_labor_and_delivery": {
                    "line_number": "8g",
                    "fr": "Walioanzishiwa dawa za ARV wakati wa uchungu na kujifungua",
                    "en": "Those who started using ARV's during labor and delivery",
                    "condition": "subforms.anc_followup && subforms.anc_followup.combo_drugs == 'yes'"
                },
                "those_who_started_art_treatment_during_labor_and_delivery": {
                    "line_number": "8h",
                    "fr": "Walioanza matibabu ya ART wakati wa uchungu na kujifungua",
                    "en": "Those who started ART treatment during labor and delivery",
                    "condition": "subforms.anc_followup && subforms.anc_followup.art_drugs == 'yes'"
                },
                "total_clients_with_hiv": {
                    "line_number": "8i",
                    "fr": "Jumla Walio na VVU (8b+8f)",
                    "en": "Total Clients with HIV (8b +8 f)",
                    "condition": "subforms.postnatal && subforms.postnatal.postnatal_hiv_positive && subforms.anc_followup && subforms.anc_followup.second_hiv_test"
                },
                "mothers_who_chose_to_breastfeed_only_ebf": {
                    "line_number": "8j",
                    "fr": "Waliochagua kunyonyesha maziwa ya mama pekee (EBF)",
                    "en": "Mothers who chose to breastfeed only (EBF)",
                    "condition": "subforms.postnatal && subforms.postnatal.milk_type == 'mother_milk_only'"
                },
                "mothers_who_chose_to_feed_milk_substitute_rf": {
                    "line_number": "8k",
                    "fr": "Waliochagua ulishaji wa maziwa mbadala (RF)",
                    "en": "Mothers who chose to feeding milk substitute (RF)",
                    "condition": "subforms.postnatal && subforms.postnatal.milk_type == 'formula_only'"
                },
                "those_given_arv_prophylaxis_tail_when_discharged": {
                    "line_number": "8l",
                    "fr": "Waliopewa ARV Prophylaxis (tail) wakati wa kuruhusiwa",
                    "en": "Those given ARV prophylaxis (tail) when discharged",
                    "condition": "true"
                },
                "those_given_referral_to_clinical_care_and_treatment_center_ctc": {
                    "line_number": "8m",
                    "fr": "Waliopata rufaa kwenda kliniki ya huduma na matibabu ya wenye VVU (CTC)",
                    "en": "Those given referral to clinical care and treatment center (CTC)",
                    "condition": "true"
                },
                "total_hiv_positive_mothers_who_are_younger_than_20_years": {
                    "line_number": "8n",
                    "fr": "Jumla ya akina mama walio na VVU wenye umri chini ya miaka 20",
                    "en": "Total HIV-positive mothers who are younger than 20 years",
                    "condition": "patient.current_age_years < 20 && subforms.postnatal && subforms.postnatal.postnatal_hiv_positive == 'yes'"
                },
                "9_children_single_birth": {
                    "line_number": "9",
                    "fr": "Watoto Waliozaliwa mmoja",
                    "en": "Children single birth"
                },
                "9a_total_children_born_alive": {
                    "line_number": "9a",
                    "fr": "Jumla ya watoto waliozaliwa hai",
                    "en": "Total children born alive",
                    "condition": "subforms.postnatal && subforms.postnatal.child_diagnoses.indexOf('neonatal_death') != -1"
                },
                "9b_live_births_weight_low": {
                    "line_number": "9b",
                    "fr": "Waliozaliwa hai Uzito <2.5kg",
                    "en": "9b live births Weight < 2.5kg",
                    "condition": "subforms.well_child_visit && subforms.well_child_visit.weight < 2"
                },
                "9c_live_births_weight_high": {
                    "line_number": "9c",
                    "fr": "Waliozaliwa hai Uzito =>2.5kg",
                    "en": "Live births Weight = > 2.5kg",
                    "condition": "subforms.well_child_visit && subforms.well_child_visit.weight >= 2"
                },
                "9d_macerated_dead_births_msb": {
                    "line_number": "9d",
                    "fr": "Waliozaliwa wafu Macerated (MSB)",
                    "en": "Macerated dead births ( MSB )",
                    "condition": "true"
                },
                "fresh_dead_births_9e_msb": {
                    "line_number": "9e",
                    "fr": "Waliozaliwa wafu Fresh (MSB)",
                    "en": "Fresh dead births (MSB)",
                    "condition": "true"
                },
                "9f_births_to_mothers_with_hiv": {
                    "line_number": "9f",
                    "fr": "Waliozaliwa na mama wenye VVU",
                    "en": "Births to mothers with HIV",
                    "condition": "subforms.well_child_visit && subforms.well_child_visit.mother_hiv_status == 'yes'"
                },
                "9g_children_given_arv_drugs": {
                    "line_number": "9g",
                    "fr": "Waliopewa dawa za ARV",
                    "en": "Children given ARV drugs",
                    "condition": "true"
                },
                "9h_total_babies_born_alive_and_dead": {
                    "line_number": "9h",
                    "fr": "Jumla ya watoto waliozaliwa (hai na wafu) (9a+9d+9e)",
                    "en": "Total babies born (Alive and dead) ( 9a +9 +9 d e )",
                    "condition": "subforms.delivery_record"
                },
                "children_9i_apgar_score_less_than_7_at_5_minutes": {
                    "line_number": "9i",
                    "fr": "Watoto wenye APGAR Score chini ya 7 katika dakika 5",
                    "en": "Children Apgar Score less than 7 at 5 minutes",
                    "condition": "true"
                },
                "10_twin_births": {
                    "line_number": "10",
                    "fr": "Watoto Waliozaliwa mapacha",
                    "en": "Twin births",
                    "condition": "true"
                },
                "10a_total_children_born_alive": {
                    "line_number": "10a",
                    "fr": "Jumla ya watoto waliozaliwa hai",
                    "en": "Total children born alive",
                    "condition": "true"
                },
                "10b_live_births_weight_low": {
                    "line_number": "10b",
                    "fr": "Waliozaliwa hai Uzito <2.5kg",
                    "en": "live births Weight < 2.5kg",
                    "condition": "true"
                },
                "10c_live_births_weight_high": {
                    "line_number": "10c",
                    "fr": "Waliozaliwa hai Uzito =>2.5kg",
                    "en": "live births Weight = > 2.5kg",
                    "condition": "true"
                },
                "10d_macerated_dead_births_msb": {
                    "line_number": "10d",
                    "fr": "Waliozaliwa wafu Macerated (MSB)",
                    "en": "macerated dead births ( MSB )",
                    "condition": "true"
                },
                "fresh_dead_births_10e_msb": {
                    "line_number": "10e",
                    "fr": "Waliozaliwa wafu Fresh (MSB)",
                    "en": "Fresh dead births 10E ( MSB )",
                    "condition": "true"
                },
                "10f_births_to_mothers_with_hiv": {
                    "line_number": "10f",
                    "fr": "Waliozaliwa na mama wenye VVU",
                    "en": "births to mothers with HIV",
                    "condition": "true"
                },
                "10g_children_given_arvs": {
                    "line_number": "10g",
                    "fr": "Waliopewa dawa za ARV",
                    "en": "Children given ARVs",
                    "condition": "true"
                },
                "10h_total_babies_born_alive_and_dead": {
                    "line_number": "10h",
                    "fr": "Jumla ya watoto waliozaliwa(hai na wafu)(9a + 9d + 9e)",
                    "en": "Total babies born(alive and dead)(9a + 9 + 9 d e)",
                    "condition": "subforms.delivery_record"
                },
                "children_with_apgar_score_less_than_7_at_5_minutes ": {
                    "line_number": "10i",
                    "fr": "Watoto wenye APGAR Score chini ya 7 katika dakika 5",
                    "en": "Children with Apgar Score less than 7 at 5 minutes",
                    "condition": "true"
                },
                "11_children_who_were_assisted_to_breath": {
                    "line_number": "11",
                    "fr": "Watoto waliosaidiwa kupumua",
                    "en": "children who were assisted to breath",
                    "condition": "true"
                },
                "11a_number_of_children_assisted_to_breathe_stimulation": {
                    "line_number": "11a",
                    "fr": "Idadi ya Watoto Waliosaidiwa Kupumua - stimulation",
                    "en": "Number of Children assisted to beathe - stimulation",
                    "condition ": "true"
                },
                "11b_number_of_children_assisted_to_breath_suction": {
                    "line_number": "11b",
                    "fr": "Idadi ya Watoto Waliosaidiwa Kupumua - suction",
                    "en": "Number of children assisted to breathe - suction",
                    "condition ": "true"
                },
                "11c_number_of_children_who_were_assisted_to_breathe_bag_and_mask": {
                    "line_number": "11c",
                    "fr": "Idadi ya Watoto Waliosaidiwa Kupumua - bag and mask",
                    "en": "Number of Children who were assisted to breathe - bag and mask",
                    "condition ": "true"
                },
                "12_other_services": {
                    "line_number": "12",
                    "fr": "Huduma nyinginezo",
                    "en": "Other Services"
                },
                "12_the_number_of_children_who_were_breastfed_hour_after_birth": {
                    "line_number": "12",
                    "fr": "idadi ya Watoto walionyonyeshwa saa moja baada ya kuzaliwa",
                    "en": "The number of children who were breastfed hour after birth",
                    "condition ": "true"
                },
                "13_those_assessed_24_hours_after_birth": {
                    "line_number": "13",
                    "fr": "Waliofanyiwa tathmini masaa 24 baada ya kuzaliwa",
                    "en": "Those assessed 24 hours after birth",
                    "condition ": "true"
                },
                "14_mother_and_child_given_referral": {
                    "line_number": "14",
                    "fr": "Mama na Mtoto waliopewa rufaa",
                    "en": "Mother and child given referral",
                    "condition ": "true"
                }
            },
            "definitions": {
                "columns": {
                    "below20": {
                        "title": "Below 20 years old",
                        "condition": "patient.current_age_years < 20"
                    },
                    "above20": {
                        "title": "Above 20 years old",
                        "condition": "patient.current_age_years >= 20"
                    },
                    "total": {
                        "title": "Total",
                        "condition": "true"
                    }
                }
            }
        }, //end report_motherchildward
        "report_opd": {
            "collection": "reports",
            "class": "schema",
            "_id": "reports/schema/reportopd",
            "$schema": "http://json-schema.org/draft-04/schema#",
            "title": "OPD Report",
            "type": "object",
            "properties": {
                "1": {
                    "line_number": "1",
                    "en": "OPD attendance",
                    "fr": "Mahudhurio ya OPD",
                    "condition": "subforms.disease_diagnosis && subforms.disease_diagnosis.diagnosis"
                },
                "2": {
                    "line_number": "2",
                    "en": "Patient who visited for the first time this year\n",
                    "fr": "Wagonjwa waliohudhuria kwa mara ya kwanza mwaka huu (*)",
                    "condition": "subforms.disease_diagnosis && subforms.disease_diagnosis.diagnosis && patient.current_created_years < 1"
                },
                "3": {
                    "line_number": "3",
                    "en": "Repeated attendance",
                    "fr": "Mahudhurio ya Marudio",
                    "condition": "subforms.disease_diagnosis && subforms.disease_diagnosis.diagnosis"
                },
                "3a": {
                    "line_number": "3a",
                    "en": "Diagnoses for OPD",
                    "fr": "Diagnoses za OPD",
                    "condition": "subforms.disease_diagnosis && subforms.disease_diagnosis.diagnosis"
                },
                "4": {
                    "line_number": "4",
                    "en": "Acute Flacid Paralysis",
                    "condition": "subforms.disease_diagnosis && subforms.disease_diagnosis.diagnosis == 'acute_flacid_paralysis'"
                },
                "5": {
                    "line_number": "5",
                    "en": "Cholera",
                    "condition": "subforms.disease_diagnosis && subforms.disease_diagnosis.diagnosis == 'cholera'"
                },
                "6": {
                    "line_number": "6",
                    "en": "Dysentery",
                    "condition": "subforms.disease_diagnosis && subforms.disease_diagnosis.diagnosis == 'dysentery'"
                },
                "7": {
                    "line_number": "7",
                    "en": "Measles",
                    "condition": "subforms.disease_diagnosis && subforms.disease_diagnosis.diagnosis == 'measles'"
                },
                "8": {
                    "line_number": "8",
                    "en": "Meningitis",
                    "condition": "subforms.disease_diagnosis && subforms.disease_diagnosis.diagnosis == 'meningitis'"
                },
                "9": {
                    "line_number": "9",
                    "en": "Neonatal Tetanus",
                    "condition": "subforms.disease_diagnosis && subforms.disease_diagnosis.diagnosis == 'neonatal_tetanus'"
                },
                "10": {
                    "line_number": "10",
                    "en": "Plague",
                    "condition": "subforms.disease_diagnosis && subforms.disease_diagnosis.diagnosis == 'plague'"
                },
                "11": {
                    "line_number": "11",
                    "en": "Relapsing Fever (Louse borne typhus)",
                    "condition": "subforms.disease_diagnosis && subforms.disease_diagnosis.diagnosis == 'relapsing_fever'"
                },
                "12": {
                    "line_number": "12",
                    "en": "Yellow Fever",
                    "condition": "subforms.disease_diagnosis && subforms.disease_diagnosis.diagnosis == 'yellow_fever'"
                },
                "13": {
                    "line_number": "13",
                    "en": "Influenza",
                    "condition": "subforms.disease_diagnosis && subforms.disease_diagnosis.diagnosis == 'influenza'"
                },
                "14": {
                    "line_number": "14",
                    "en": "Typhoid",
                    "condition": "subforms.disease_diagnosis && subforms.disease_diagnosis.diagnosis == 'typhoid'"
                },
                "15": {
                    "line_number": "15",
                    "en": "Rabies/Suspected rabies bites",
                    "condition": "subforms.disease_diagnosis && subforms.disease_diagnosis.diagnosis == 'rabies_suspected_rabies_bites'"
                },
                "16": {
                    "line_number": "16",
                    "en": "Trachoma",
                    "condition": "subforms.disease_diagnosis && subforms.disease_diagnosis.diagnosis == 'trachoma'"
                },
                "17": {
                    "line_number": "17",
                    "en": "Onchocerciasis",
                    "condition": "subforms.disease_diagnosis && subforms.disease_diagnosis.diagnosis == 'onchocerciasis'"
                },
                "18": {
                    "line_number": "18",
                    "en": "Trypanosomiasis",
                    "condition": "subforms.disease_diagnosis && subforms.disease_diagnosis.diagnosis == 'trypanosomiasis'"
                },
                "19": {
                    "line_number": "19",
                    "en": "Viral haemorrhagic fevers",
                    "condition": "subforms.disease_diagnosis && subforms.disease_diagnosis.diagnosis == 'viral_haemorrhagic_fevers'"
                },
                "20": {
                    "line_number": "20",
                    "en": "Keratoconjuctivitis",
                    "condition": "subforms.disease_diagnosis && subforms.disease_diagnosis.diagnosis == 'keratoconjuctivitis'"
                },
                "21": {
                    "line_number": "21",
                    "en": "Diarrhea, Acute (< 14 days)",
                    "condition": "subforms.disease_diagnosis && subforms.disease_diagnosis.diagnosis == 'diarrhea_acute'"
                },
                "22": {
                    "line_number": "22",
                    "en": "Diarrhea, Chronic (.> 14 days)",
                    "condition": "subforms.disease_diagnosis && subforms.disease_diagnosis.diagnosis == 'diarrhea_chronic'"
                },
                "23": {
                    "line_number": "23",
                    "en": "Malaria",
                    "condition": "subforms.disease_diagnosis && subforms.disease_diagnosis.diagnosis == 'malaria'"
                },
                "23a": {
                    "line_number": "23a",
                    "en": "Blood Slide positive",
                    "condition": "subforms.disease_diagnosis && subforms.disease_diagnosis.diagnosis == 'blood_slide_positive'"
                },
                "23b": {
                    "line_number": "23b",
                    "en": "mRDT postivie",
                    "condition": "subforms.disease_diagnosis && subforms.disease_diagnosis.diagnosis == 'mrdt_postivie'"
                },
                "23c": {
                    "line_number": "23c",
                    "en": "Clinical (no Test)",
                    "condition": "subforms.disease_diagnosis && subforms.disease_diagnosis.diagnosis == 'clinical'"
                },
                "23d": {
                    "line_number": "23d",
                    "en": "In Pregnancy",
                    "condition": "subforms.disease_diagnosis && subforms.disease_diagnosis.diagnosis == 'in_pregnancy'"
                },
                "24": {
                    "line_number": "24",
                    "en": "Schistosomiasis",
                    "condition": "subforms.disease_diagnosis && subforms.disease_diagnosis.diagnosis == 'schistosomiasis'"
                },
                "25": {
                    "line_number": "25",
                    "en": "STI Genital Discharge Syndrome (GDS)",
                    "condition": "subforms.disease_diagnosis && subforms.disease_diagnosis.diagnosis == 'sti_genital_discharge_syndrome'"
                },
                "26": {
                    "line_number": "26",
                    "en": "STI Genital Ulcer Diseases (GUD)",
                    "condition": "subforms.disease_diagnosis && subforms.disease_diagnosis.diagnosis == 'sti_genital_ulcer_diseases'"
                },
                "27": {
                    "line_number": "27",
                    "en": "STI Pelvic Inflammatory Diseases (PID)",
                    "condition": "subforms.disease_diagnosis && subforms.disease_diagnosis.diagnosis == 'sti_pelvic_inflammatory_diseases'"
                },
                "28": {
                    "line_number": "28",
                    "en": "Sexually Transmitted Infections, Other",
                    "condition": "subforms.disease_diagnosis && subforms.disease_diagnosis.diagnosis == 'sexually_transmitted_infections_other'"
                },
                "29": {
                    "line_number": "29",
                    "en": "Tuberculosis",
                    "condition": "subforms.disease_diagnosis && subforms.disease_diagnosis.diagnosis == 'tuberculosis'"
                },
                "30": {
                    "line_number": "30",
                    "en": "Leprosy",
                    "condition": "subforms.disease_diagnosis && subforms.disease_diagnosis.diagnosis == 'leprosy'"
                },
                "31": {
                    "line_number": "31",
                    "en": "Intestinal Worms",
                    "condition": "subforms.disease_diagnosis && subforms.disease_diagnosis.diagnosis == 'intestinal_worms'"
                },
                "32": {
                    "line_number": "32",
                    "en": "Anaemia, Mild / Moderate ",
                    "condition": "subforms.disease_diagnosis && subforms.disease_diagnosis.diagnosis == 'anaemia_mild_moderate'"
                },
                "33": {
                    "line_number": "33",
                    "en": "Anaemia, Severe",
                    "condition": "subforms.disease_diagnosis && subforms.disease_diagnosis.diagnosis == 'anaemia_severe'"
                },
                "34": {
                    "line_number": "34",
                    "en": "Sickle cell Disease ",
                    "condition": "subforms.disease_diagnosis && subforms.disease_diagnosis.diagnosis == 'sickle_cell_disease'"
                },
                "35": {
                    "line_number": "35",
                    "en": "HIV Positive",
                    "condition": "subforms.disease_diagnosis && subforms.disease_diagnosis.diagnosis == 'hiv_positive'"
                },
                "36": {
                    "line_number": "36",
                    "en": "HIV Infection, Symptomatic",
                    "condition": "subforms.disease_diagnosis && subforms.disease_diagnosis.diagnosis == 'hiv_infection_symptomatic'"
                },
                "37": {
                    "line_number": "37",
                    "en": "Ear Infection, Acute",
                    "condition": "subforms.disease_diagnosis && subforms.disease_diagnosis.diagnosis == 'ear_infection_acute'"
                },
                "38": {
                    "line_number": "38",
                    "en": "Ear Infection, Chronic",
                    "condition": "subforms.disease_diagnosis && subforms.disease_diagnosis.diagnosis == 'ear_infection_chronic'"
                },
                "39": {
                    "line_number": "39",
                    "en": "Eye Infection",
                    "condition": "subforms.disease_diagnosis && subforms.disease_diagnosis.diagnosis == 'eye_infection'"
                },
                "40": {
                    "line_number": "40",
                    "en": "Cataract",
                    "condition": "subforms.disease_diagnosis && subforms.disease_diagnosis.diagnosis == 'cataract'"
                },
                "41": {
                    "line_number": "41",
                    "en": "Eye Diseases, Other non-infectious",
                    "condition": "subforms.disease_diagnosis && subforms.disease_diagnosis.diagnosis == 'eye_diseases_other_non_infectious'"
                },
                "42": {
                    "line_number": "42",
                    "en": "Skin Infection, non-Fungal",
                    "condition": "subforms.disease_diagnosis && subforms.disease_diagnosis.diagnosis == 'skin_infection_non_fungal'"
                },
                "43": {
                    "line_number": "43",
                    "en": "Skin Infection, Fungal",
                    "condition": "subforms.disease_diagnosis && subforms.disease_diagnosis.diagnosis == 'skin_infection_fungal'"
                },
                "44": {
                    "line_number": "44",
                    "en": "Skin Diseases, non-infectious",
                    "condition": "subforms.disease_diagnosis && subforms.disease_diagnosis.diagnosis == 'skin_diseases_non_infectious'"
                },
                "45": {
                    "line_number": "45",
                    "en": "Fungal Infection, non-skin",
                    "condition": "subforms.disease_diagnosis && subforms.disease_diagnosis.diagnosis == 'fungal_infection_non_skin'"
                },
                "46": {
                    "line_number": "46",
                    "en": "Osteomyelitis",
                    "condition": "subforms.disease_diagnosis && subforms.disease_diagnosis.diagnosis == 'osteomyelitis'"
                },
                "47": {
                    "line_number": "47",
                    "en": "Neonatal sepsis",
                    "condition": "subforms.disease_diagnosis && subforms.disease_diagnosis.diagnosis == 'neonatal_sepsis'"
                },
                "48": {
                    "line_number": "48",
                    "en": "Low birth weight and Prematurity complications",
                    "condition": "subforms.disease_diagnosis && subforms.disease_diagnosis.diagnosis == 'low_birth_weight_and_prematurity_complications'"
                },
                "49": {
                    "line_number": "49",
                    "en": "Birth asphyxia",
                    "condition": "subforms.disease_diagnosis && subforms.disease_diagnosis.diagnosis == 'birth_asphyxia'"
                },
                "50": {
                    "line_number": "50",
                    "en": "Acute Respiratory Infection (ARI)",
                    "condition": "subforms.disease_diagnosis && subforms.disease_diagnosis.diagnosis == 'acute_respiratory_infection'"
                },
                "51": {
                    "line_number": "51",
                    "en": "Pneumonia, non-Severe",
                    "condition": "subforms.disease_diagnosis && subforms.disease_diagnosis.diagnosis == 'pneumonia_non_severe'"
                },
                "52": {
                    "line_number": "52",
                    "en": "Cerebral palsy",
                    "condition": "subforms.disease_diagnosis && subforms.disease_diagnosis.diagnosis == 'cerebral_palsy'"
                },
                "53": {
                    "line_number": "53",
                    "en": "Pneumonia, Severe",
                    "condition": "subforms.disease_diagnosis && subforms.disease_diagnosis.diagnosis == 'pneumonia_severe'"
                },
                "54": {
                    "line_number": "54",
                    "en": "Upper Respiratory Infections (Pharyngitis, Tonsillitis, Rhinitis)",
                    "condition": "subforms.disease_diagnosis && subforms.disease_diagnosis.diagnosis == 'upper_respiratory_infections'"
                },
                "55": {
                    "line_number": "55",
                    "en": "Urinary Tract Infections (UTI)",
                    "condition": "subforms.disease_diagnosis && subforms.disease_diagnosis.diagnosis == 'urinary_tract_infections'"
                },
                "56": {
                    "line_number": "56",
                    "en": "Gynaecological diseases, Other",
                    "condition": "subforms.disease_diagnosis && subforms.disease_diagnosis.diagnosis == 'gynaecological_diseases_other'"
                },
                "57": {
                    "line_number": "57",
                    "en": "Kwashiokor",
                    "condition": "subforms.disease_diagnosis && subforms.disease_diagnosis.diagnosis == 'kwashiokor'"
                },
                "58": {
                    "line_number": "58",
                    "en": "Marasmus",
                    "condition": "subforms.disease_diagnosis && subforms.disease_diagnosis.diagnosis == 'marasmus'"
                },
                "59": {
                    "line_number": "59",
                    "en": "Marasmic Kwashiokor",
                    "condition": "subforms.disease_diagnosis && subforms.disease_diagnosis.diagnosis == 'marasmic_kwashiokor'"
                },
                "60": {
                    "line_number": "60",
                    "en": "Moderate Malnutrition",
                    "condition": "subforms.disease_diagnosis && subforms.disease_diagnosis.diagnosis == 'moderate_malnutrition'"
                },
                "61": {
                    "line_number": "61",
                    "en": "Vitamin A Deficiency",
                    "condition": "subforms.disease_diagnosis && subforms.disease_diagnosis.diagnosis == 'vitamin_a_deficiency'"
                },
                "62": {
                    "line_number": "62",
                    "en": "Other Nutritional Disorders",
                    "condition": "subforms.disease_diagnosis && subforms.disease_diagnosis.diagnosis == 'other_nutritional_disorders'"
                },
                "63": {
                    "line_number": "63",
                    "en": "Caries",
                    "condition": "subforms.disease_diagnosis && subforms.disease_diagnosis.diagnosis == 'caries'"
                },
                "64": {
                    "line_number": "64",
                    "en": "Periodontal Diseases",
                    "condition": "subforms.disease_diagnosis && subforms.disease_diagnosis.diagnosis == 'periodontal_diseases'"
                },
                "65": {
                    "line_number": "65",
                    "en": "Dental Emergency Care",
                    "condition": "subforms.disease_diagnosis && subforms.disease_diagnosis.diagnosis == 'dental_emergency_care'"
                },
                "66": {
                    "line_number": "66",
                    "en": "Dental Conditions, Other",
                    "condition": "subforms.disease_diagnosis && subforms.disease_diagnosis.diagnosis == 'dental_Conditions_other'"
                },
                "67": {
                    "line_number": "67",
                    "en": "Fractures / Dislocations",
                    "condition": "subforms.disease_diagnosis && subforms.disease_diagnosis.diagnosis == 'fractures_dislocations'"
                },
                "68": {
                    "line_number": "68",
                    "en": "Burn",
                    "condition": "subforms.disease_diagnosis && subforms.disease_diagnosis.diagnosis == 'burn'"
                },
                "69": {
                    "line_number": "69",
                    "en": "Poisoning",
                    "condition": "subforms.disease_diagnosis && subforms.disease_diagnosis.diagnosis == 'poisoning'"
                },
                "70": {
                    "line_number": "70",
                    "en": "Road Traffic Accidents",
                    "condition": "subforms.disease_diagnosis && subforms.disease_diagnosis.diagnosis == 'road_traffic_accidents'"
                },
                "71": {
                    "line_number": "71",
                    "en": "Pregnancy complications",
                    "condition": "subforms.disease_diagnosis && subforms.disease_diagnosis.diagnosis == 'pregnancy_complications'"
                },
                "72": {
                    "line_number": "72",
                    "en": "Abortion",
                    "condition": "subforms.disease_diagnosis && subforms.disease_diagnosis.diagnosis == 'abortion'"
                },
                "73": {
                    "line_number": "73",
                    "en": "Snake and Insect Bites",
                    "condition": "subforms.disease_diagnosis && subforms.disease_diagnosis.diagnosis == 'snake_and_insect_bites'"
                },
                "74": {
                    "line_number": "74",
                    "en": "Emergencies, Other",
                    "condition": "subforms.disease_diagnosis && subforms.disease_diagnosis.diagnosis == 'emergencies_other'"
                },
                "75": {
                    "line_number": "75",
                    "en": "Surgical conditions, other",
                    "condition": "subforms.disease_diagnosis && subforms.disease_diagnosis.diagnosis == 'surgical_conditions_other'"
                },
                "76": {
                    "line_number": "76",
                    "en": "Epilepsy",
                    "condition": "subforms.disease_diagnosis && subforms.disease_diagnosis.diagnosis == 'epilepsy'"
                },
                "77": {
                    "line_number": "77",
                    "en": "Psychoses",
                    "condition": "subforms.disease_diagnosis && subforms.disease_diagnosis.diagnosis == 'psychoses'"
                },
                "78": {
                    "line_number": "78",
                    "en": "Neurosis",
                    "condition": "subforms.disease_diagnosis && subforms.disease_diagnosis.diagnosis == 'neurosis'"
                },
                "79": {
                    "line_number": "79",
                    "en": "Mental conditions, Other",
                    "condition": "subforms.disease_diagnosis && subforms.disease_diagnosis.diagnosis == 'mental_conditions_other'"
                },
                "80": {
                    "line_number": "80",
                    "en": "Hypertension",
                    "condition": "subforms.disease_diagnosis && subforms.disease_diagnosis.diagnosis == 'hypertension'"
                },
                "81": {
                    "line_number": "81",
                    "en": "Rheumatic Fever",
                    "condition": "subforms.disease_diagnosis && subforms.disease_diagnosis.diagnosis == 'rheumatic_fever'"
                },
                "82": {
                    "line_number": "82",
                    "en": "Cardiovascular Diseases, Other",
                    "condition": "subforms.disease_diagnosis && subforms.disease_diagnosis.diagnosis == 'cardiovascular_diseases_other'"
                },
                "83": {
                    "line_number": "83",
                    "en": "Bronchial Asthma",
                    "condition": "subforms.disease_diagnosis && subforms.disease_diagnosis.diagnosis == 'bronchial_asthma'"
                },
                "84": {
                    "line_number": "84",
                    "en": "Peptic Ulcers",
                    "condition": "subforms.disease_diagnosis && subforms.disease_diagnosis.diagnosis == 'peptic_ulcers'"
                },
                "85": {
                    "line_number": "85",
                    "en": "GIT Diseases, Other non-infectious",
                    "condition": "subforms.disease_diagnosis && subforms.disease_diagnosis.diagnosis == 'git_diseases_other_non_infectious'"
                },
                "86": {
                    "line_number": "86",
                    "en": "Diabetes Mellitus",
                    "condition": "subforms.disease_diagnosis && subforms.disease_diagnosis.diagnosis == 'diabetes_mellitus'"
                },
                "87": {
                    "line_number": "87",
                    "en": "Rheumatoid and Joint Diseases",
                    "condition": "subforms.disease_diagnosis && subforms.disease_diagnosis.diagnosis == 'rheumatoid_and_joint_diseases'"
                },
                "88": {
                    "line_number": "88",
                    "en": "Thyroid Diseases",
                    "condition": "subforms.disease_diagnosis && subforms.disease_diagnosis.diagnosis == 'thyroid_diseases'"
                },
                "89": {
                    "line_number": "89",
                    "en": "Neoplasms",
                    "condition": "subforms.disease_diagnosis && subforms.disease_diagnosis.diagnosis == 'neoplasms'"
                },
                "90": {
                    "line_number": "90",
                    "en": "Ill Defined Symptoms (no Diagnosis)",
                    "condition": "subforms.disease_diagnosis && subforms.disease_diagnosis.diagnosis == 'ill_defined_symptoms_no_diagnosis'"
                },
                "91": {
                    "line_number": "91",
                    "en": "Diagnoses, Other",
                    "condition": "subforms.disease_diagnosis && subforms.disease_diagnosis.diagnosis == 'diagnoses_other'"
                },
                "92": {
                    "line_number": "92",
                    "en": "Waliopewa Rufaa",
                    "condition": "subforms.disease_diagnosis && subforms.disease_diagnosis.diagnosis == 'waliopewa_rufaa'"
                }
            },
            "definitions": {
                "columns": {
                    "lessthan1male": {
                        "title": "males",
                        "condition": "patient.current_age_months < 1 && patient.gender == 'male'"
                    },
                    "lessthan1female": {
                        "title": "Less than 1 Month - females",
                        "condition": "patient.current_age_months < 1 && patient.gender == 'female'"
                    },
                    "lessthan1total": {
                        "title": "Less than 1 Month - Total",
                        "condition": "patient.current_age_months < 1"
                    },
                    "more1momale": {
                        "title": "More than 1 month and less than 1 Year - male",
                        "condition": "patient.current_age_months > 1 && patient.current_age_months < 12 && patient.gender == 'male'"
                    },
                    "more1mofemale": {
                        "title": "More than 1 month and less than 1 Year - females",
                        "condition": "patient.current_age_months > 1 && patient.current_age_months < 12 && patient.gender == 'female'"
                    },
                    "more1mototal": {
                        "title": "More than 1 month and less than 1 Year - Total",
                        "condition": "patient.current_age_months > 1 && patient.current_age_months < 12"
                    },
                    "above1below5male": {
                        "title": "More than 1 year and less than 5 Years - male",
                        "condition": "patient.current_age_years > 1 && patient.current_age_years < 5 && patient.gender == 'male'"
                    },
                    "above1below5female": {
                        "title": "More than 1 year and less than 5 Years - females",
                        "condition": "patient.current_age_years > 1 && patient.current_age_years < 5 && patient.gender == 'female'"
                    },
                    "above1below5total": {
                        "title": "More than 1 year and less than 5 Years - Total",
                        "condition": "patient.current_age_years > 1 && patient.current_age_years < 5"
                    }
                }
            }
        }, //end report_opd
        "report_postnatal": {
            "collection": "reports",
            "class": "schema",
            "_id": "reports/schema/postnatal",
            "$schema": "http://json-schema.org/draft-04/schema#",
            "title": "Report Postnatal",
            "type": "object",
            "properties": {
                "attendees_within_24_hours": {
                    "line_number": "12a",
                    "fr": "Waliohudhuria Ndani ya saa 24",
                    "en": "Attendees Within 24 hours",
                    "condition": "subforms.postnatal && subforms.postnatal.days_postpartum <= 1"
                },
                "attendess_between_2_and_7_days": {
                    "line_number": "1b",
                    "fr": "Waliohudhuria kati ya siku ya 2-7",
                    "en": "Attendees between 2-7 days",
                    "condition": "subforms.postnatal && subforms.postnatal.days_postpartum >= 2 && subforms.postnatal.days_postpartum <= 7"
                },
                "total_attendees_within_7_days": {
                    "line_number": "1c",
                    "fr": "Jumla Waliohudhuria ndani ya siku 7 (la+lb)",
                    "en": "Total attendees within 7 days",
                    "condition": "subforms.postnatal && subforms.postnatal.days_postpartum <= 7"
                },
                "those_who_finished_all_visits_24_hours_days_2_and_7_day_28_day_42": {
                    "line_number": "2a",
                    "fr": "Waliomaliza mahudhurio yote (saa 24, siku 2-7, siku 28, siku 42)",
                    "en": "Those who finished all visits (24 hours, days 2-7, day 28, day 42)",
                    "condition": "subforms.postnatal.completed_4_visits == 'yes'"
                },
                "those_with_severe_anema": {
                    "line_number": "3",
                    "fr": "Wenye upungufu mkubwa wa damu (Hb < 8.5 g/dl)",
                    "en": "Those with severe anemia (Hb <8.5 g / dl)",
                    "condition": "subforms.postnatal.anemia_severe == 'less_8_5'"
                },
                "those_with_mental_disorder": {
                    "line_number": "4",
                    "fr": "Waliopata matatizo ya akili",
                    "en": "Those with mental disorder",
                    "condition": "subforms.postnatal.maternal_diagnoses.indexOf('mental_disorder') != -1"
                },
                "those_given_vita": {
                    "line_number": "5",
                    "fr": "Waliopata Vit.A",
                    "en": "Those given Vit.A",
                    "condition": "subforms.postnatal.given_vitamina"
                },
                "those_with_gaping_or_infected_perineum": {
                    "line_number": "6",
                    "fr": "Wenye msamba ulioambukizwa/Ulioachia",
                    "en": "Those with gaping or infected perineum",
                    "condition": "subforms.postnatal.maternal_diagnoses.indexOf('gaping_or_infected_perineum') != -1"
                },
                "those_with_fistula": {
                    "line_number": "7",
                    "fr": "Wenyc fistula",
                    "en": "Those with fistula",
                    "condition": "subforms.postnatal.maternal_diagnoses.indexOf('fistula') != -1"
                },
                "those_who_delivered_outside_the_health_centre_bba_tba_home_etc": {
                    "line_number": "8",
                    "fr": "Waliojifungulia Nje ya kituo cha kutoa huduma za Afya (BBA,TBA, Nyumbani etc)",
                    "en": "Those who delivered outside the Health Centre(BBA, TBA, Home etc)",
                    "condition": "subforms.postnatal.delivered_outside == 'yes'"
                },
                "number_of_those_who_delivered_at_home": {
                    "line_number": "9",
                    "fr": "Idadi ya waliojifungulia nyumbani",
                    "en": "number of those who delivered at home",
                    "condition": "subforms.postnatal.delivered_outside == 'no'"
                },
                "family_planning": {
                    "line_number": "10",
                    "fr": "Uzazi wa Mpango",
                    "en": "family planning"
                },
                "ones_who_received_counseling": {
                    "line_number": "10a",
                    "fr": "Waliopata ushauri nasaha",
                    "en": "Those who received counseling",
                    "condition": "subforms.postnatal.family_planning_counseling == 'yes'"
                },
                "those_received_methods_of_family_planning": {
                    "line_number": "10b",
                    "fr": "Waliopata njia za Uzazi wa Mpango",
                    "en": "Those who received methods of family planning",
                    "condition": "subforms.postnatal.family_planning_method_after_delivery == 'yes'"
                },
                "those_received_family_planning_methods_after_miscarriage": {
                    "line_number": "10c",
                    "fr": "Waliopata njia za Uzazi wa mpango baada ya mimba kuharibika",
                    "en": "Those who received family planning methods after miscarriage",
                    "condition": "subforms.postnatal.family_planning_method_after_miscarriage == 'yes'"
                },
                "those_who_used_methods_of_contraception_within_40_days_after_delivery": {
                    "line_number": "10d",
                    "fr": "Waliopata njia za uzazi wa mpango kwenye arobaini ya uzazi",
                    "en": "Those who used methods of contraception within 40 days after delivery",
                    "condition": "subforms.postnatal.contraception_within_40_days == 'yes'"
                },
                "ptmct": {
                    "line_number": "11",
                    "fr": "PTMCT",
                    "en": "PTMCT"
                },
                "that_came_as_positive_during_postnatal": {
                    "line_number": "11a",
                    "fr": "Waliokuja postnata wakiwa positive",
                    "en": "That came as positive during postnatal",
                    "condition": "subforms.postnatal.postnatal_hiv_positive == 'yes'"
                },
                "those_tested_for_hiv_during_postnatal_within_42_days_from_delivery": {
                    "line_number": "11b",
                    "fr": "Waliopima VVU wakati wa postnatal (ndani ya siku 42 tangu kujifungua)",
                    "en": "Those tested for HIV during postnatal (within 42 days from delivery)",
                    "condition": "subforms.postnatal.days_postpartum < 42 && subforms.postnatal.postnatal_hiv_test == 'yes'"
                },
                "those_who_were_found_hiv_positive_during_postnatal_within_42_days_from_delivery": {
                    "line_number": "11c",
                    "fr": "Waliogundulika wana VVU wakati wa postnatal (ndani ya siku 42 tangu kujifungua)",
                    "en": "Those who were found HIV positive during postnatal (within 42 days from delivery)",
                    "condition": "subforms.postnatal.days_postpartum < 42 && subforms.postnatal.postnatal_hiv_positive == 'yes'"
                },
                "people_with_hiv_who_chose_to_breastfeed_exclusively_breastfed_ebf": {
                    "line_number": "11d",
                    "fr": "Wenye VVU waliochagua kunyonyesha maziwa ya mama pekee (EBF)",
                    "en": "People with HIV who chose to breastfeed exclusively breastfed ( EBF )",
                    "condition": "subforms.postnatal.postnatal_hiv_positive == 'yes' && subforms.postnatal.milk_type == 'mother_milk_only'"
                },
                "people_with_hiv_who_chose_to_use_milk_substitute_rf": {
                    "line_number": "11e",
                    "fr": "Wenye VVU waliochagua kunywesha maziwa mbadala (RF)",
                    "en": "People with HIV who chose to use milk substitute ( RF )",
                    "condition": "subforms.postnatal.postnatal_hiv_positive == 'yes' && subforms.postnatal.milk_type != 'mother_milk_only'"
                },
                "child": {
                    "line_number": "12",
                    "fr": "MTOTO",
                    "en": "CHILD"
                },
                "attendees_between_2_and_7_days": {
                    "line_number": "12b",
                    "fr": "Waliohudhuria kati ya siku ya 2-7",
                    "en": "Attendees between 2-7 days",
                    "condition": "subforms.postnatal.days_postpartum >= 2 && subforms.postnatal.days_postpartum <= 7"
                },
                "attendees_total_within_7_days": {
                    "line_number": "12c",
                    "fr": "Jumla Waliohudhuria ndani ya siku 7 (la+lb)",
                    "en": "Attendees total within 7 days (la + lb )",
                    "condition": "subforms.postnatal.days_postpartum <= 7"
                },
                "those_who_finished_all_visits": {
                    "line_number": "12d",
                    "fr": "Waliomaliza mahudhurio yote (saa 24, siku 2-7, siku 28, siku 42)",
                    "en": "Those who finished  all visits (24 hours , days 2-7 , day 28, day 42 )",
                    "condition": "subforms.postnatal.completed_4_visits == 'yes'"
                },
                "child_services": {
                    "line_number": "13",
                    "fr": "HUDUMA KWA MTOTO",
                    "en": "CHILD SERVICES"
                },
                "number_of_children_who_received_bcg": {
                    "line_number": "13a",
                    "fr": "Idadi ya watoto waliopewa BCG",
                    "en": "Number of children who received BCG",
                    "condition": "subforms.postnatal.bcg_opv.indexOf('bcg') != -1"
                },
                "number_of_children_who_received_opv_0": {
                    "line_number": "13b",
                    "fr": "Idadi ya watoto waliopewa OPV 0",
                    "en": "Number of children who received OPV 0",
                    "condition": "subforms.postnatal.bcg_opv.indexOf('opv-0') != -1"
                },
                "the_number_of_children_born_with_a_low_weight_were_given_kmc": {
                    "line_number": "13c",
                    "fr": "Idadi ya watoto waliozaliwa na uzito wa < 2.5kg wakapatiwa KMC",
                    "en": "The number of children born with a weight of < 2.5 kg were given KMC",
                    "condition": "true"
                },
                "number_of_children_at_home_under_the_born_low_weight": {
                    "line_number": "13d",
                    "fr": "Idadi ya watoto walozaliwa nyumbani chini ya 2.5kg",
                    "en": "Number of children at home under the born 2.5kg",
                    "condition": "subforms.postnatal.delivered_outside == 'yes' && subforms.postnatal.less_than_2_5kg == 'yes'"
                },
                "number_of_babies_born_at_home_were_started_on_kangaroo_care_kmc": {
                    "line_number": "13e",
                    "fr": "Idadi ya watoto waliozaliwa nyumbani walioanzishiwa huduma ya kangaroo (KMC)",
                    "en": "Number of babies born at home were started on kangaroo care ( KMC )",
                    "condition": "subforms.postnatal.delivered_outside == 'yes' && subforms.postnatal.kangaroo_care == 'yes'"
                },
                "with_severe_anemia": {
                    "line_number": "13f",
                    "fr": "Wenye upungufu mkubwa wa damu (Hb < 10 g/dl au viganja vyeupe sana)",
                    "en": "With severe anemia ( Hb < 10 g / dl or very white hands )",
                    "condition": "subforms.postnatal.anemia_severe == 'less_8_5'"
                },
                "infections_of_the_child": {
                    "line_number": "14",
                    "fr": "UAMBUKIZO WA MTOTO",
                    "en": "INFECTIONS OF THE CHILD"
                },
                "children_with_severe_infections_septicaemia": {
                    "line_number": "14a",
                    "fr": "Watoto wenye uambukizo mkali (septicaemia)",
                    "en": "Children with severe infections ( septicemia )",
                    "condition": "subforms.postnatal.child_diagnoses == 'septicemia'"
                },
                "children_with_umbilical_cord_infection": {
                    "line_number": "14b",
                    "fr": "Watoto wenye uambukizo kwenye kitovu",
                    "en": "Children with umbilical cord infection",
                    "condition": "subforms.postnatal.child_diagnoses == 'umbilical_cord_infection'"
                },
                "children_with_skin_infection": {
                    "line_number": "14c",
                    "fr": "Watoto wenye uambukizo kwenye ngozi",
                    "en": "Children with skin infection",
                    "condition": "subforms.postnatal.child_diagnoses == 'skin_infection'"
                },
                "deaths_of_infants_born_at_home_prenatal_and_neonatal": {
                    "line_number": "15",
                    "fr": "Vifo vya watoto wachanga waliozaliwa nyumbani (perinatal); neonatal",
                    "en": "Deaths of infants born at home ( perinatal ) , neonatal",
                    "condition": "subforms.postnatal.delivered_outside == 'yes' && subforms.postnatal.child_diagnoses == 'neonatal_death'"
                },
                "those_received_methods_of_family_planning_after_miscarriage": {
                    "line_number": "16",
                    "fr": "Waliopata njia za Uzazi wa mpango baada ya mimba kuharibika",
                    "en": "Those received methods of Family Planning after miscarriage",
                    "condition": "subforms.postnatal.family_planning_method_after_delivery == 'yes'"
                },
                "infant_feeding": {
                    "line_number": "17",
                    "fr": "ULISHAJI WA MTOTO",
                    "en": "INFANT FEEDING"
                },
                "infants_who_are_breastfed_exclusively_breastfed_ebf": {
                    "line_number": "17a",
                    "fr": "Watoto wachanga wanaonyonya maziwa ya mama pekee (EBF)",
                    "en": "Infants who are breastfed exclusively breastfed ( EBF )",
                    "condition": "subforms.postnatal.milk_type == 'mother_milk_only'"
                },
                "infants_who_drik_milk_substitute_rf": {
                    "line_number": "17b",
                    "fr": "Watoto wachanga wanaonyweshwa maziwa mbadala (RF)",
                    "en": "Infants who drink milk substitute (RF)",
                    "condition": "subforms.postnatal.milk_type && subforms.postnatal.milk_type != 'mother_milk_only' && subforms.postnatal.milk_type != 'mother_milk_plus_other'"
                },
                "infants_who_drink_breast_milk_and_other_food_access_mf": {
                    "line_number": "17c",
                    "fr": "Watoto wachanga wanaonyweshwa maziwa ya mama na kupatiwa chakula kingine (MF)",
                    "en": "Infants who drink breast milk and other food access (MF)",
                    "condition": "subforms.postnatal.milk_type == 'mother_milk_plus_other'"
                }
            },
            "definitions": {
                "columns": {
                    "below20": {
                        "title": "Below 20 years old",
                        "condition": "patient.current_age_years < 20"
                    },
                    "above20": {
                        "title": "Above 20 years old",
                        "condition": "patient.current_age_years >= 20"
                    },
                    "total": {
                        "title": "Total",
                        "condition": "true"
                    }
                }
            }
        } //end report_postnatal
    };
};
