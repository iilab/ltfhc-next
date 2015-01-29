exports.reports = function () {
    return {
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
                        "fr": "Aire de Santé",
                        "en": "Health Area",
                        "condition": "true"
                    },
                    "HAS": {
                        "fr": "Hors aire de Santé",
                        "en": "Out of Health Area",
                        "condition": "true"
                    },
                    "HZ": {
                        "fr": "Hors Zone de Santé",
                        "en": "Out of Health Zone",
                        "condition": "true"
                    },
                    "total": {
                        "fr": "Total",
                        "en": "Total",
                        "condition": "true"
                    }
                }
            }
        },
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
                    "sw": "Aina ya Chanjo Kwa Umri",
                    "en": "Type of vaccine by age"
                },
                "bcg_at_the_age_of_1+_(within_service_area_)": {
                    "line_number": "1b",
                    "sw": "BCG Umri mwaka 1+ (Ndani ya eneo Ia huduma)",
                    "en": "BCG at the age of 1+ (Within service area )"
                },
                "bcg_age_<1_year_+_(within_service_area)": {
                    "line_number": "1c",
                    "sw": "BCG Umri mwaka <1 (Nje ya eneo la huduma)",
                    "en": "BCG Age <1 year + (Within service area)"
                },
                "bcgat_the_age_of_1_+_(out_of_service_area)": {
                    "line_number": "1d",
                    "sw": "BCG Umri mwaka 1+ (Nje ya eneo la huduma)",
                    "en": "BCGat the Age of 1 + (out of service area)"
                },
                "polio_at_the_age_<1_(within_area_service)": {
                    "line_number": "1e",
                    "sw": "Polio Umri mwaka <1 (Ndani ya eneo Ia huduma)",
                    "en": "Polio at the age <1 (within area service)"
                },
                "polio_at_the_age_1+_(within_service_area)": {
                    "line_number": "1f",
                    "sw": "Polio Umri mwaka 1+ (Ndani ya eneo Ia huduma)",
                    "en": "Polio at the age 1+ (within service area)"
                },
                "polio_at_the_age_<1_(out_of_service_area)": {
                    "line_number": "1k",
                    "sw": "Polio Umri mwaka <1 (Nje ya eneo la huduma)",
                    "en": "Polio at the age <1 (out of service area)"
                },
                "polio_at_the_age_of_1_+_(out_of_service_area)": {
                    "line_number": "1l",
                    "sw": "Polio Umri mwaka 1+ (Nje ya eneo la huduma)",
                    "en": "Polio at the age of 1 + (out of service area)"
                },
                "penta_at_the_age_<1_(within_service_area)": {
                    "line_number": "1i",
                    "sw": "PENTA Umri mwaka <1 (Ndani ya eneo Ia huduma)",
                    "en": "PENTA at the age <1 (within service area)"
                },
                "penta_at_the_age_1+_(within_service_area)": {
                    "line_number": "1j",
                    "sw": "PENTA Umri mwaka 1+ (Ndani ya eneo Ia huduma)",
                    "en": "PENTA at the age 1+ (within service area)"
                },
                "measles_at_the_age_<1_(within_service_area)": {
                    "line_number": "1m",
                    "sw": "Surua Umri mwaka <1 (Ndani ya eneo Ia huduma)",
                    "en": "measles at the age <1 (within service area)"
                },
                "measles_at_the_age_1+_(within_service_area)": {
                    "line_number": "1n",
                    "sw": "Surua Umri mwaka 1+ (Ndani ya eneo Ia huduma)",
                    "en": "measles at the age 1+ (within service area)"
                },
                "measles_at_the_age_<1_(out_of_service_area)": {
                    "line_number": "1p",
                    "sw": "Surua Umri mwaka <1 (Nje ya eneo la huduma)",
                    "en": "measles at the age <1 (out of service area)"
                },
                "attendance_growth_of_6_months_old_baby": {
                    "line_number": "3",
                    "sw": "Mahudhurio ya ukuaji wa mtoto umri wa miezi 6",
                    "en": "Attendance growth of 6 months old baby"
                },
                "total_attendance": {
                    "line_number": "7a",
                    "sw": "Jumla ya Mahudhurio",
                    "en": "Total attendance"
                },
                "the_ratio_of_weight_by_age": {
                    "line_number": "5b",
                    "sw": "Uwaino wa uzito kwa umri",
                    "en": "the ratio of weight by age"
                },
                "the_ratio_of_weight_by_height": {
                    "line_number": "7c",
                    "sw": "Uwaino wa uzito kwa urefu",
                    "en": "the ratio of weight by height"
                },
                "the_ratio_of_height_by_age": {
                    "line_number": "7d",
                    "sw": "Uwaino wa urefu kwa umri",
                    "en": "the ratio of height by age"
                },
                "growth_attendance_of_6_months_old_baby": {
                    "line_number": "4",
                    "sw": "Mahudhurio ya ukuaji wa mtoto umri wa miezi 6",
                    "en": "Growth attendance of 6 months old baby"
                },
                "growth_attendance_of_12_months_old_baby": {
                    "line_number": "5",
                    "sw": "Mahudhurio ya ukuaji wa mtoto umri wa miezi 12",
                    "en": "growth attendance of 12 months old baby"
                },
                "growth_attendance_of_18_month_old_baby": {
                    "line_number": "6",
                    "sw": "Mahudhurio ya ukuaji wa mtoto umri wa miezi 18",
                    "en": "Growth attendance of 18 month old baby"
                },
                "growth_attendance_of_24_month_old_baby": {
                    "line_number": "7",
                    "sw": "Mahudhurio ya ukuaji wa mtoto umri wa miezi 24",
                    "en": "growth attendance of 24 month old baby"
                },
                "ratio_of_weight_by_age": {
                    "line_number": "7b",
                    "sw": "Uwaino wa uzito kwa umri",
                    "en": "ratio of weight by age"
                },
                "growth_attendance_of_36_month_old_baby": {
                    "line_number": "8",
                    "sw": "Mahudhurio ya ukuaji wa mtoto umri wa miezi 36",
                    "en": "growth attendance of 36 month old baby"
                },
                "growth_attendance_of_48_month_old_baby": {
                    "line_number": "9",
                    "sw": "Mahudhurio ya ukuaji wa mtoto umri wa miezi 48",
                    "en": "growth attendance of 48 month old baby"
                },
                "growth_attendance_of_59_month_old_baby": {
                    "line_number": "10",
                    "sw": "Mahudhurio ya ukuaji wa mtoto umri wa miezi 59",
                    "en": "growth attendance of 59 month old baby"
                },
                "additional_vitamin_a": {
                    "line_number": "11",
                    "sw": "Nyongeza ya Vitamini A",
                    "en": "additional Vitamin A"
                },
                "children_of_6-11_months": {
                    "line_number": "11a",
                    "sw": "Watoto umri wa miezi 6-11",
                    "en": "Children of 6-11 months"
                },
                "children_of_12-17_months": {
                    "line_number": "11b",
                    "sw": "Watoto umri wa miezi 12-17",
                    "en": "Children of 12-17 months"
                },
                "children_of_18-23_months": {
                    "line_number": "11c",
                    "sw": "Watoto umri wa miezi 18-23",
                    "en": "Children of 18-23 months"
                },
                "children_of_24-59_months": {
                    "line_number": "11d",
                    "sw": "Watoto umri wa miezi 24-59",
                    "en": "Children of 24-59 months"
                },
                "children_given_mebendazole/albendazole": {
                    "line_number": "12",
                    "sw": "Waliopewa Mebendazole/Albendazole",
                    "en": "Children given Mebendazole/Albendazole"
                },
                "children_of_12_months": {
                    "line_number": "12a",
                    "sw": "Watoto umri wa miezi 12",
                    "en": "Children of 12 months"
                },
                "children_of_18_months": {
                    "line_number": "12b",
                    "sw": "Watoto umri wa miezi 18",
                    "en": "Children of 18 months"
                },
                "children_of_24_months": {
                    "line_number": "12c",
                    "sw": "Watoto umri wa miezi 24",
                    "en": "Children of 24 months"
                },
                "children_of_30_months": {
                    "line_number": "12d",
                    "sw": "Watoto umri wa miezi 30",
                    "en": "Children of 30 months"
                },
                "feeding_infants_born_to_hiv_infected_mothers": {
                    "line_number": "13",
                    "sw": "Ulishaji wa Watoto Wachanga waliozaliwa na mama wenye VVU",
                    "en": "feeding infants born to HIV infected mothers"
                },
                "infants_breastfeeding_mothers_milk_only_(ebf)": {
                    "line_number": "13a",
                    "sw": "Watoto wachanga wanaonyonya maziwa ya mama pekee (EBF)",
                    "en": "Infants breastfeeding mothers milk only (EBF)"
                },
                "infants_receiving_other_types_of_milk_(rf)": {
                    "line_number": "13b",
                    "sw": "Watoto wachanga wanaopewa maziwa mbadala (RF)",
                    "en": "Infants receiving other types of milk (RF)"
                },
                "breastfeeding_infants_born_to_mothers_who_are_hiv_negative": {
                    "line_number": "14",
                    "sw": "Ulishaji wa Watoto Wachanga waliozaliwa na mama wasio na VVU",
                    "en": "breastfeeding infants born to mothers who are HIV negative"
                },
                "children_who_breastfeed_their_mothers_milk_only": {
                    "line_number": "14a",
                    "sw": "Watoto wachanga wanaonyonya maziwa ya mama pekee (EBF)",
                    "en": "Children who breastfeed their mothers milk only"
                },
                "infants_feeding_on_other_types_of_milk": {
                    "line_number": "14b",
                    "sw": "Watoto wachanga wanaoyweshwa maziwa mbadala (RF)",
                    "en": "Infants feeding on other types of milk"
                },
                "mothers_condition": {
                    "line_number": "15",
                    "sw": "Hali ya Mama",
                    "en": "Mothers condition"
                },
                "mothers_with_hiv": {
                    "line_number": "15a",
                    "sw": "Mama wenye VVU",
                    "en": "Mothers with HIV"
                },
                "mothers_without_hiv": {
                    "line_number": "15b",
                    "sw": "Mama wasio na VVU",
                    "en": "Mothers without HIV"
                },
                "mothers_with_unknown_hiv_status": {
                    "line_number": "15c",
                    "sw": "Mama wasiojulikana hali yao ya VVU",
                    "en": "Mothers with unknown HIV status"
                },
                "status_of_tetanus_vaccination_of_the_mother_during_delivery": {
                    "line_number": "16",
                    "sw": "Hali ya Chango ya Pepo punda kwa mama wakati wa kujifungua",
                    "en": "Status of Tetanus vaccination of the mother during delivery"
                },
                "those_vaccinated": {
                    "line_number": "16a",
                    "sw": "Waliokingwa",
                    "en": "Those Vaccinated"
                },
                "those_not_vaccinated": {
                    "line_number": "16b",
                    "sw": "Wasiokuwa na Kinga",
                    "en": "Those Not vaccinated"
                },
                "not_known": {
                    "line_number": "16c",
                    "sw": "Haijulikani",
                    "en": "Not known"
                },
                "number_of_children_who_received_cotrimoxazole_i_arv_/given_bed_net__vouchers_and_ones_tested_for_hiv": {
                    "line_number": "17",
                    "sw": "Idadi ya Watoto waliopewa Cotrimoxazole I ARV / waliopewa hati punguzo nil waliopimwa VVU",
                    "en": "Number of children who received cotrimoxazole I ARV /given bed net  vouchers and ones tested for HIV"
                },
                "children_with_the_possibility_of_hiv_infection": {
                    "line_number": "17a",
                    "sw": "Watoto wenye uwezekano wa uambukizo wa VVU",
                    "en": "Children with the possibility of HIV infection"
                },
                "children_who_were_started_on_cotrimoxazole_between_1_month_to_2_months": {
                    "line_number": "17b",
                    "sw": "Watoto walioanzishiwa Cotrimoxazole kati ya mwezi 1 hadi miezi 2 ya umri",
                    "en": "Children who were started on cotrimoxazole between 1 month to 2 months"
                },
                "Children who were tested for HIV by PCR within two months from birth": {
                    "line_number": "17e",
                    "sw": "Watoto waliopimwa VVU kwa PCR ndani ya miezi miwili tangu kuzaliwa",
                    "en": "Children who were tested for HIV by PCR within two months from birth"
                },
                "Children tested for HIV by PCR 6 weeks after stopping breastfeeding or 18 months": {
                    "line_number": "17f",
                    "sw": "Watoto waliopimwa VVU kwa PCR wiki 6 baada ya kuacha kunyonya maziwa ya mama au miezi 18 ya umri",
                    "en": "Children tested for HIV by PCR 6 weeks after stopping breastfeeding or 18 months"
                },
                "children_tested_hiv_pcr_6_weeks_after_stopping_breastfeeding_or_18_months_of_age": {
                    "line_number": "17g",
                    "sw": "Watoto waliopimwa VVU kwa PCR wiki 6 baada ya kuacha kunyonya maziwa ya mama au miezi 18 ya umri",
                    "en": "Children tested HIV PCR 6 weeks after stopping breastfeeding or 18 months of age"
                },
                "children_who_were_moved_from_clinic_care_and_treatment_of_hiv-positive_(ctc)": {
                    "line_number": "17h",
                    "sw": "Watoto waliohamishiwa Klinlki ya huduma na matibabu kwa wenye VVU (CTC)",
                    "en": "Children who were moved from clinic care and treatment of HIV-positive (CTC)"
                },
                "children_who_received_a_bed_net_voucher": {
                    "line_number": "17i",
                    "sw": "Watoto watiopatiwa hati punguzo ya chandarua",
                    "en": "Children who received a bed net voucher"
                },
                "definitions": {
                    "columns": {
                        "lessthan1male": {
                            "title": "Males",
                            "condition": "FIXME && patient.gender == 'male'"
                        },
                        "lessthan1female": {
                            "title": "Less than 1 Month - Females",
                            "condition": "FIXME && patient.gender == 'female'"
                        },
                        "lessthan1total": {
                            "title": "Less than 1 Month - Total",
                            "condition": "FIXME"
                        },
                        "more1momale": {
                            "title": "More than 1 month and less than 1 Year - Male",
                            "condition": "FIXME && patient.gender == 'male'"
                        },
                        "more1mofemale": {
                            "title": "More than 1 month and less than 1 Year - Females",
                            "condition": "FIXME && patient.gender == 'female'"
                        },
                        "more1mototal": {
                            "title": "More than 1 month and less than 1 Year - Total",
                            "condition": "FIXME "
                        },
                        "above1below5male": {
                            "title": "More than 1 year and less than 5 Years - Male",
                            "condition": "patient.approxage > 1 && patient.approxage < 5 && patient.gender == 'male'"
                        },
                        "above1below5female": {
                            "title": "More than 1 year and less than 5 Years - Females",
                            "condition": "patient.approxage > 1 && patient.approxage < 5 && patient.gender == 'female'"
                        },
                        "above1below5total": {
                            "title": "More than 1 year and less than 5 Years - Total",
                            "condition": "patient.approxage > 1 && patient.approxage < 5"
                        }
                    }
                }
            }
        },
        "report_community_1": {
            "title": "6.1 Reference of Community care site activities",
            "type": "object",
            "properties": {
                "active_care_sites": {
                    "line_number": "1",
                    "fr": "Sites de soins fonctionnels",
                    "en": "Active care sites"
                },
                "care_sites_wich_have_reported": {
                    "line_number": "2",
                    "fr": "Sites de soins ayant rapporté",
                    "en": "Care sites wich have reported"
                },
                "care_sites_wich_have_reported_on_the_dead_line": {
                    "line_number": "3",
                    "fr": "SSC ayant rapporté dans le délai",
                    "en": "Care sites wich have reported on the dead line"
                }
            },
            "definitions": {
                "columns": {
                    "number": {
                        "fr": "Nombre",
                        "en": "Number"
                    }
                }
            },
            "parent": "report_community"
        },
        "report_community_2": {
            "title": "6.2 Treatment and Notification",
            "type": "object",
            "properties": {
                "new_children_cases_receivedat_the_site": {
                    "line_number": "1",
                    "fr": "Nouveaux cas enfants reçus au site",
                    "en": "New children cases receivedat the site"
                },
                "nbr_of_old_cases_received_at_the_site": {
                    "line_number": "2",
                    "fr": "Nombre d’anciens cas reçus au site",
                    "en": "Nbr of old cases received at the site"
                },
                "nbr_of_referals_to_hc": {
                    "line_number": "3",
                    "fr": "Nombre de référés vers CS",
                    "en": "Nbr of referals to HC"
                },
                "nbr_of_contre_refered": {
                    "line_number": "4",
                    "fr": "Nombre de contre-référés",
                    "en": "Nbr of contre - refered"
                }
            },
            "definitions": {
                "columns": {
                    "as": {
                        "fr": "AS",
                        "en": "AS"
                    },
                    "has": {
                        "fr": "HAS",
                        "en": "HAS"
                    },
                    "hz": {
                        "fr": "HZ",
                        "en": "HZ"
                    },
                    "total": {
                        "fr": "Total",
                        "en": "Total"
                    }
                }
            },
            "parent": "report_community"
        },
        "report_community_3": {
            "title": "6.2 Treatment and Notification (cont)",
            "type": "object",
            "properties": {
                "cases_of_fever_in_malaria_zone_at_risk": {
                    "line_number": "1",
                    "fr": "Cas de fièvre dans une zone a risque du paludisme",
                    "en": "Cases of fever in malaria zone at risk"
                },
                "realized_tdrs": {
                    "line_number": "2",
                    "fr": "TDRs réalisés",
                    "en": "Realized TDRs"
                },
                "including_positive": {
                    "line_number": "3",
                    "fr": "Dont positif",
                    "en": "Including positive"
                },
                "including_treated": {
                    "line_number": "4",
                    "fr": "Dont traité",
                    "en": "Including treated"
                },
                "pneumonia": {
                    "line_number": "5",
                    "fr": "Pneumonie",
                    "en": "Pneumonia"
                },
                "including_treaed_under_national_policy": {
                    "line_number": "6",
                    "fr": "Dont traité avec la politique national",
                    "en": "Including treaed under national policy"
                },
                "cough_and_cold": {
                    "line_number": "7",
                    "fr": "Toux ou Rhume",
                    "en": "Cough and cold"
                },
                "diarrhea": {
                    "line_number": "8",
                    "fr": "Diarrhée",
                    "en": "Diarrhea"
                },
                "including_treated_under_national_policy": {
                    "line_number": "9",
                    "fr": "Dont traité avec la politique national",
                    "en": "Including treated under national policy"
                },
                "malnutrition": {
                    "line_number": "10",
                    "fr": "Malnutrition",
                    "en": "Malnutrition"
                },
                "including_pb_under_the_red_line": {
                    "line_number": "11",
                    "fr": "Dont PB sur la bande rouge",
                    "en": "Including PB under the red line"
                },
                "danger_signs_alert_referal_cases": {
                    "line_number": "12",
                    "fr": "Signe de danger/alerte & cas à orienter",
                    "en": "Danger signs/alert& referal cases"
                }
            },
            "definitions": {
                "columns": {
                    "number": {
                        "fr": "Nombre",
                        "en": "Number"
                    }
                }
            },
            "parent": "report_community"
        },
        "report_community_4": {
            "title": "6.3  Consumption of medicines",
            "type": "object",
            "properties": {
                "amoxyciline_250mg_or_syrup_125mg": {
                    "line_number": "1",
                    "fr": "Amoxycilline caps 250 mg ou sirop 125 mg",
                    "en": "Amoxyciline  250mg or Syrup 125mg"
                },
                "artesunate_amodiaquine_2_11_months": {
                    "line_number": "2",
                    "fr": "Artésunate-Amodiaquine (2-11 mois)",
                    "en": "Artesunate-Amodiaquine 2-11 months"
                },
                "artesunate_amodiaquine_12_59_months": {
                    "line_number": "3",
                    "fr": "Artésunate-Amodiaquine (12 -59 mois)",
                    "en": "Artesunate-Amodiaquine 12-59 months"
                },
                "paracetamol_500mg": {
                    "line_number": "4",
                    "fr": "Paracétamol 500mg",
                    "en": "Paracetamol 500mg"
                },
                "ors": {
                    "line_number": "5",
                    "fr": "SRO",
                    "en": "ORS"
                },
                "tdr": {
                    "line_number": "6",
                    "fr": "TDR",
                    "en": "TDR"
                },
                "zinc_20mg": {
                    "line_number": "7",
                    "fr": "Zinc 20 mg",
                    "en": "Zinc 20mg"
                }
            },
            "definitions": {
                "columns": {
                    "qty_at_beginning": {
                        "fr": "Quantité au début",
                        "en": "Qty at beginning"
                    },
                    "entries": {
                        "fr": "Entrées",
                        "en": "Entries"
                    },
                    "consumed_qty": {
                        "fr": "Quantité consommée",
                        "en": "Consumed QTY"
                    },
                    "qty_at_the_end_of_month": {
                        "fr": "Quantité à la fin du mois",
                        "en": "QTY at the end of month"
                    }
                }
            },
            "parent": "report_community"
        },
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
                    "sw": "Sindano",
                    "en": "Injectable methods"
                },
                "number_of_customers_who_use_contraceptive_injection": {
                    "line_number": "1a",
                    "sw": "Idaji ya Wateja wa Sindano",
                    "en": "Number of customers who use contraceptive injection",
                    "condition": "reproductive_counseling.contraception_current == 'Depo Provera'"
                },
                "contraceptive_pills": {
                    "line_number": "2",
                    "sw": "Vidonge",
                    "en": "Contraceptive pills"
                },
                "the_number_of_pills_clients_at_the_clinic": {
                    "line_number": "2a",
                    "sw": "Idadi ya wateja wa Vidonge Kituoni",
                    "en": "The number of pills clients at the clinic",
                    "condition": "reproductive_counseling.contraception_current == 'Pills' && reproductive_counseling.contraceptive_source == 'Clinic'"
                },
                "number_of_pills_clients_through_cbd": {
                    "line_number": "2b",
                    "sw": "Idadi ya wateja wa vidonge wa CBD",
                    "en": "Number of pills clients through CBD(Community Based Distribution)",
                    "condition": "reproductive_counseling.contraception_current == 'Pills' && reproductive_counseling.contraceptive_source == 'CBD'"
                },
                "the_number_of_clients_who_were_given_pills_at_the_clinic_and_through_cbd": {
                    "line_number": "2c",
                    "sw": "Jumla walochukua Vidonge Kituoni na CBD (2a+2b)",
                    "en": "The number of clients who were given pills at the clinic and through CBD(2a+2b)",
                    "condition": "reproductive_counseling.contraception_current == 'Pills'"
                },
                "condoms": {
                    "line_number": "3",
                    "sw": "Kondom",
                    "en": "Condoms"
                },
                "the_number_of_male_clients_who_were_given_condoms_at_the_clinic": {
                    "line_number": "3a",
                    "sw": "Idadi ya wateja waliochukua kondom Kituoni Me",
                    "en": "The number of Male clients who were given condoms at the clinic",
                    "condition": "patient.gender == 'male' && reproductive_counseling.contraception_current == 'Condoms' && reproductive_counseling.contraceptive_source == 'Clinic'"
                },
                "the_number_of_female_clients_who_were_given_condoms_at_the_clinic": {
                    "line_number": "3b",
                    "sw": "Idadi ya wateja waliochukua kondom Kituoni Ke",
                    "en": "The number of Female clients who were given condoms at the clinic",
                    "condition": "patient.gender == 'female' && reproductive_counseling.contraception_current == 'Condoms' && reproductive_counseling.contraceptive_source == 'Clinic'"
                },
                "number_of__male_clients_who_were_given_condoms_by_cbd": {
                    "line_number": "3c",
                    "sw": "Idadi ya wateja waliochukua kondom CBD Me",
                    "en": "Number of male clients who were given condoms by CBD",
                    "condition": "patient.gender == 'male' && reproductive_counseling.contraception_current == 'Condoms' && reproductive_counseling.contraceptive_source == 'CBD'"
                },
                "number_of_female_clients_who_were_given_condoms_by_cbd": {
                    "line_number": "3d",
                    "sw": "Idadi ya wateja waliochukua kondom CBD Ke",
                    "en": "Number of female clients who were given condoms by CBD",
                    "condition": "patient.gender == 'female' && reproductive_counseling.contraception_current == 'Condoms' && reproductive_counseling.contraceptive_source == 'CBD'"
                },
                "total_customers_who_given_condoms_at_the_clinic_and_cbd": {
                    "line_number": "3e",
                    "sw": "Jumla ya Wateja waliochukua kondomu (kituoni na CBD) (3a+3b+3c+3d)",
                    "en": "Total Customers who given condoms at the clinic and CBD (3a+3b+3c+3d)",
                    "condition": "reproductive_counseling.contraception_current == 'Condoms'"
                },
                "total_customers_who_took_short-term_course": {
                    "line_number": "3f",
                    "sw": "Jumla ya Wateja waliochukua njia za muda mfupi (1+2c+3c)",
                    "en": "Total Customers who took short-term course (1+2c+3c)",
                    "condition": "reproductive_counseling.???"
                },
                "methods_of_long-term_and_permanent_family_planning": {
                    "line_number": "4",
                    "sw": "Njia za muda Mrefu na za kudumu za Uzazi wa Mpango",
                    "en": "Methods of long-term and permanent family planning"
                },
                "sterilization": {
                    "line_number": "4",
                    "sw": "Kufunga Uzazi",
                    "en": "Sterilization"
                },
                "women_sterilization_ml_la_at_the_clinic": {
                    "line_number": "4a",
                    "sw": "Kufunga Uzazi mama (ML/LA) - kituoni",
                    "en": "Women sterilization (ML / LA) - at the clinic",
                    "condition": "patient.gender == 'female' && reproductive_counseling.contraception_dispensed == 'Sterilization' && reproductive_counseling.contraception_source == 'Clinic'"
                },
                "women_sterilization_ml_la_outreach": {
                    "line_number": "4b",
                    "sw": "Kufunga Uzazi mama (ML/LA) - outreach",
                    "en": "Women sterilization (ML / LA) - outreach",
                    "condition": "patient.gender == 'female' && reproductive_counseling.contraception_dispensed == 'Sterilization' && reproductive_counseling.contraception_source == 'outreach'"
                },
                "men_sterilization_nsv_at_the_clinic": {
                    "line_number": "4c",
                    "sw": "Kufunga uzazi baba (NSV) - kituoni",
                    "en": "Men sterilization (NSV) - at the clinic",
                    "condition": "patient.gender == 'male' && reproductive_counseling.contraception_dispensed == 'Sterilization' && reproductive_counseling.contraception_source == 'Clinic'"
                },
                "men_sterilization_nsv_outreach": {
                    "line_number": "4d",
                    "sw": "Kufung uzazi baba (NSV) - outreach",
                    "en": "Men sterilization (NSV) - outreach",
                    "condition": "patient.gender == 'male' && reproductive_counseling.contraception_dispensed == 'Sterilization' && reproductive_counseling.contraception_source == 'outreach'"
                },
                "implants": {
                    "line_number": "5",
                    "sw": "Vipandikizi",
                    "en": "Implants"
                },
                "those_who_put_implants_at_the_clinic": {
                    "line_number": "5a",
                    "sw": "Kuweka vipandikizi - kituoni",
                    "en": "Those who put implants - at the clinic",
                    "condition": "reproductive_counseling.contraception_source == 'Other Implants' && reproductive_counseling.contraception_source == 'Clinic'"
                },
                "those_who_put_implants_outreach": {
                    "line_number": "5b",
                    "sw": "Kuweka vipandikizi - outreach",
                    "en": "Those who put implants - outreach",
                    "condition": "reproductive_counseling.contraception_source == 'Other Implants' && reproductive_counseling.contraception_source == 'outreach'"
                },
                "removing_implants": {
                    "line_number": "5c",
                    "sw": "Kuondoa vipandikizi",
                    "en": "Removing implants",
                    "condition": "reproductive_counseling.contraception_source == 'Remove IUD'"
                },
                "intrauterine_methods_iucd": {
                    "line_number": "6",
                    "sw": "Kitanzi (IUCD)",
                    "en": "Intrauterine methods(IUCD)"
                },
                "inserting_iud_clinic": {
                    "line_number": "6a",
                    "sw": "Kuweka Kitanzi - kituoni",
                    "en": "Inserting IUD (at the clinic)",
                    "condition": "reproductive_counseling.contraception_source == 'IUD' && reproductive_counseling.contraception_source == 'Clinic'"
                },
                "inserting_iud_outreach": {
                    "line_number": "6b",
                    "sw": "Kuweka Kitanzi - outreach",
                    "en": "Inserting IUD (outreach)",
                    "condition": "reproductive_counseling.contraception_source == 'IUD' && reproductive_counseling.contraception_source == 'outreach'"
                },
                "removing_iud_clinic": {
                    "line_number": "6c",
                    "sw": "Kuondoa Kitanzi - kituoni",
                    "en": "Removing IUD (at the clinic)",
                    "condition": "reproductive_counseling.contraception_source == 'Remove IUD' && reproductive_counseling.contraception_source == 'Clinic'"
                },
                "removing_iud_outreach": {
                    "line_number": "6d",
                    "sw": "Kuondoa Kitanzi - outreach",
                    "en": "Removing IUD (outreach)",
                    "condition": "reproductive_counseling.contraception_source == 'Remove IUD' && reproductive_counseling.contraception_source == 'outreach'"
                },
                "total_number_of_client_who_used_permanent_contraceptive_methods": {
                    "line_number": "6e",
                    "sw": "Jumla ya Wateja waliochukua njia za muda mrefu na za Kudumu za Uzazi wa Mpango (4a+4b+4c+4d+5a+5b+6a+6b)",
                    "en": "Total number of client who used permanent contraceptive methods(4a+4b+4c+4d+5a+5b+6a+6b)",
                    "condition": "reproductive_counseling.contraception_source == 'Sterilization'"
                },
                "other_methods": {
                    "line_number": "7b",
                    "sw": "Njia nyingine",
                    "en": "Other methods",
                    "condition": "reproductive_counseling.contraception_source == 'Other'"
                },
                "natural_ways": {
                    "line_number": "7a",
                    "sw": "Njia za maumbile (mfano LAM, BOM, joto, kalenda)",
                    "en": "Natural ways(eg. LAM,BOM,body temperature and calendar",
                    "condition": "reproductive_counseling.contraception_source == 'Natural ways'"
                },
                "total_number_of_clients_who_used_other_methods": {
                    "line_number": "7c",
                    "sw": "Jumla ya Njia Nyinginezo (7a+7b)",
                    "en": "Total number of clients who used other methods(7a+7b)",
                    "condition": "reproductive_counseling.contraception_source == 'Natural ways' && reproductive_counseling.contraception_source == 'Other'"
                },
                "total_number_of_types_of_contraceptives": {
                    "line_number": "8",
                    "sw": "Jumla ya Aina zote Uzazi wa Mpango",
                    "en": "Total number of types of contraceptives",
                    "condition": "FIXME"
                },
                "total_number_of_clients_who_used_all_types_of_contraceptives": {
                    "line_number": "8a",
                    "sw": "Jumla ya Wateja waliochukua njia zote za Uzazi Mpango (3f+6e+7c)",
                    "en": "Total number of clients who used all types of contraceptives(3f+6e+7c)",
                    "condition": "FIXME"
                },
                "total_number_of_cycles_distributed": {
                    "line_number": "9c",
                    "sw": "Idadi ya mizunguko iliyotolewa (Cycles Distributed) (Kituoni na CBD) (9a+9b)",
                    "en": "Total number of cycles distributed(at the clinic+CBD) (9a+9b"
                },
                "cycles_distributed_at_the_clinic": {
                    "line_number": "9a",
                    "sw": "Idadi ya mizunguko iliyotolewa (Cycles Distributed) - Kituoni",
                    "en": "Cycles distributed at the Clinic",
                    "condition": "FIXME"
                },
                "cycles_distributed_by_cbd": {
                    "line_number": "9b",
                    "sw": "Idadi ya mizunguko iliyotolewa (Cycles Distributed) - CBD",
                    "en": "Cycles distributed by CBD",
                    "condition": "FIXME"
                },
                "condoms_given_out_to_clients": {
                    "line_number": "10",
                    "sw": "Kondomu zilizotolewa",
                    "en": "Condoms given out to clients"
                },
                "number_of_condoms_given_to_male_clients_at_the_clinic": {
                    "line_number": "10a",
                    "sw": "Idadi ya kondomu zilizogawiwa Kituoni Me",
                    "en": "Number of condoms given to male clients at the clinic",
                    "condition": "patient.gender == 'male' && reproductive_counseling.contraception_current == 'Condoms' && reproductive_counseling.contraceptive_source == 'Clinic'"
                },
                "number_of_condoms_given_to_female_clients_at_the_clinic": {
                    "line_number": "10b",
                    "sw": "Idadi ya kondomu zilizogawiwa Kituoni Ke",
                    "en": "Number of condoms given to female clients at the clinic",
                    "condition": "patient.gender == 'female' && reproductive_counseling.contraception_current == 'Condoms' && reproductive_counseling.contraceptive_source == 'Clinic'"
                },
                "number_of_condoms_given_to_male_clients_by_cbd": {
                    "line_number": "10c",
                    "sw": "Idadi ya kondomu zilizogawiwa CBD Me",
                    "en": "Number of condoms given to male clients by CBD",
                    "condition": "patient.gender == 'male' && reproductive_counseling.contraception_current == 'Condoms' && reproductive_counseling.contraceptive_source == 'CBD'"
                },
                "number_of_condoms_given_to_female_clients_by_cbd": {
                    "line_number": "10d",
                    "sw": "Idadi ya kondomu zilizogawiwa CBD Ke",
                    "en": "Number of condoms given to female clients by CBD",
                    "condition": "patient.gender == 'female' && reproductive_counseling.contraception_current == 'Condoms' && reproductive_counseling.contraceptive_source == 'CBD'"
                },
                "total_number_of_condoms_given_to_clients": {
                    "line_number": "10e",
                    "sw": "Idadi ya kondomu zilizogawiwa kituoni na CBD (10a+10b+10c+10d)",
                    "en": "Total number of condoms given to clients from the clinic and by CBD(10a+10b+10c+10d)",
                    "condition": "reproductive_counseling.contraception_current == 'Condoms'"
                },
                "service_after_miscarriage_cpac_after_giving_birth": {
                    "line_number": "11",
                    "sw": "Huduma baada ya mimba kuharibika (cPAC) Baada ya kujifungua",
                    "en": "Service after miscarriage (CPAC) After giving birth"
                },
                "those_who_got_treatment_after_miscarriages": {
                    "line_number": "11a",
                    "sw": "Waliopata huduma baada ya mimba kubaribika",
                    "en": "Those who got treatment after miscarriages",
                    "condition": "postnatal.family_planning_method_after_miscarriage == true"
                },
                "those_who_used_contraception_after_miscarriage": {
                    "line_number": "11b",
                    "sw": "Waliopata uzazi wa mpango baada ya mimba kubaribika",
                    "en": "Those who used contraception after miscarriage"
                },
                "those_who_used_contraceptive_methods_42_days_after_giving_birth": {
                    "line_number": "11c",
                    "sw": "Waliopata njia ya uazazi wa mpango siku 42 baada ya kujifungua",
                    "en": "Those who used contraceptive methods 42 days after giving birth",
                    "condition": "postnatal.contraception_within_40_days == true"
                },
                "clients_who_screened_for_cancer": {
                    "line_number": "12",
                    "sw": "Wateja waliochunguzwa saratani",
                    "en": "clients who screened for cancer",
                    "condition": "FIXME"
                },
                "those_screened_for_breast_diseases": {
                    "line_number": "12a",
                    "sw": "waliochunguzwa tit",
                    "en": "Those Screened for breast diseases",
                    "condition": "FIXME"
                },
                "detected_to_have_breast_cancer_symptoms": {
                    "line_number": "12b",
                    "sw": "Waliogundulika na matatizo ya matiti (mfano: kutoka damu kwenye chuchu au uvimbe wa matiti)",
                    "en": "Detected to have breast cancer symptoms (eg, bleeding or swelling of the breast nipples)",
                    "condition": "FIXME"
                },
                "screened_for_cervical_diseases": {
                    "line_number": "12c",
                    "sw": "Waliochunguzwa Shingo ya mfuko wa uzazi",
                    "en": "Screened for cervical diseases",
                    "condition": "FIXME"
                },
                "detected_to_have_cervical_diseases": {
                    "line_number": "12d",
                    "sw": "Waliogundulika na matatizo ya shingo ya mfuko wa uzazi (mfano: mchubuko au kidonda)",
                    "en": "Detected to have cervical diseases (eg, bruise or cervical ulcer)",
                    "condition": "FIXME"
                },
                "detected_to_have_cervical_cancer_symptoms": {
                    "line_number": "12e",
                    "sw": "Waliodhamwa wana saratani ya shingo ya mfuko wa uzazi",
                    "en": "Detected to have cervical cancer symptoms",
                    "condition": "FIXME"
                },
                "those_who_got_cryotherapy_service": {
                    "line_number": "12f",
                    "sw": "Waliopewa huduma ya Cryotherapy",
                    "en": "Those who got Cryotherapy service",
                    "condition": "FIXME"
                },
                "pitc": {
                    "line_number": "13",
                    "sw": "PITC",
                    "en": "PITC"
                },
                "those_who_already_have_an_hiv_infection": {
                    "line_number": "13a",
                    "sw": "Tayari wana uambukizo wa VVU",
                    "en": "Those who already have an HIV infection",
                    "condition": "FIXME"
                },
                "those_who_got_hiv_counseling": {
                    "line_number": "13b",
                    "sw": "Waliopata ushauri nasha juu ya VVU",
                    "en": "Those who got HIV counseling",
                    "condition": "FIXME"
                },
                "clients_who_tested_for_hiv": {
                    "line_number": "13c",
                    "sw": "Wateja waliopima VVU",
                    "en": "Clients who tested for HIV",
                    "condition": "FIXME"
                },
                "clients_who_received_post-test_counseling": {
                    "line_number": "13d",
                    "sw": "Wateja waliopata ushauri nasaha baada ya kupima",
                    "en": "Clients who received post-test counseling",
                    "condition": "FIXME"
                },
                "customers_who_tested_positive": {
                    "line_number": "13e",
                    "sw": "Wateja waliogundulika Positive (+)",
                    "en": "Customers who tested positive (+)",
                    "condition": "FIXME"
                },
                "partners_who_tested_for_hiv": {
                    "line_number": "13f",
                    "sw": "Wenza waliopima VVU",
                    "en": "Partners who tested for HIV",
                    "condition": "FIXME"
                },
                "partners_who_tested_positive": {
                    "line_number": "13g",
                    "sw": "Wenza Waliogundulika Positive (+)",
                    "en": "Partners Who tested Positive (+)",
                    "condition": "FIXME"
                },
                "discordant_couple": {
                    "line_number": "13h",
                    "sw": "Wateja ambao matokeo ya vipimo vya VVU yanatofautiana",
                    "en": "Clients who tested HIV and got different results(discordant couple)",
                    "condition": "FIXME"
                },
                "clients_who_were_reffered_to_ctc": {
                    "line_number": "13i",
                    "sw": "Wateja waliopata rufaa kwenda CTC",
                    "en": "Clients who were reffered to CTC",
                    "condition": "FIXME"
                },
                "NEED_TRANSLATION": {
                    "line_number": "13j",
                    "sw": "Wataja waliopata rufaa kwenda CTC",
                    "en": "NEED TRANSLATION"
                }
            },
            "definitions": {
                "columns": {
                    "10to14": {
                        "title": "10 to 14",
                        "condition": "patient.approxage => 10 && patient.approxage <= 14"
                    },
                    "15to19": {
                        "title": "15 to 19",
                        "condition": "patient.approxage >= 15 patient.approxage <= 19"
                    },
                    "20to24": {
                        "title": "20 to 24",
                        "condition": "patient.approxage >= 20 patient.approxage <= 24"
                    },
                    "above25": {
                        "title": "Above 25",
                        "condition": "patient.approxage >= 25"
                    },
                    "return": {
                        "title": "Return???",
                        "condition": "FIXME"
                    },
                    "total": {
                        "title": "Total",
                        "condition": "true"
                    }
                }
            }
        },
        "report_dtc": {
            "collection": "reports",
            "class": "schema",
            "_id": "reports/schema/contraceptive",
            "$schema": "http://json-schema.org/draft-04/schema#",
            "title": "Contraceptive",
            "type": "object",
            "properties": {
                "number_of_patients_treated_dtc_dtc-diarrhea_and_treatment_centre": {
                    "line_number": 1,
                    "sw": "Idadi ya wagonjwa waliotibiwa DTC DTC-Idara ya magonjwa ya kuhara",
                    "en": "Number of patients treated DTC DTC-Diarrhea and treatment centre",
                    "condition": "diarrhea.duration"
                },
                "number_of_dtc_patients_treated_with_acute_shortage_of_water_and_sodium_cloride_in_the_body": {
                    "line_number": 2,
                    "sw": "Idadi ya wagonjwa waliotibiwa DTC walio na upungufu mkubwa wa maji na churnvichumvi mwilini",
                    "en": "Number of DTC patients treated with acute shortage of water and Sodium cloride in the body",
                    "condition": "diarrhea.water_sodium_imbalance == 'Severe'"
                },
                "number_of_dtc_patients_treated_with_little_shortage_of_water_and_sodium_cloride": {
                    "line_number": 3,
                    "sw": "Idadi ya wagonjwa waliotibiwa DTC walio na upungufu kiasi wa maji na chumvichumvi mwilini",
                    "en": "Number of DTC patients treated with little shortage of water and sodium cloride",
                    "condition": "diarrhea.water_sodium_imbalance == 'Mild'"
                },
                "number_of_patients_with_blood_in_stool": {
                    "line_number": 4,
                    "sw": "Idadi ya wagonjwa walio na damu katika kinyesi",
                    "en": "Number of patients with blood in stool",
                    "condition": "diarrhea.blood_in_stool"
                },
                "the_number_of_patients_who_received_zinc": {
                    "line_number": 5,
                    "sw": "Idadi ya wagonjwa waliopewa zinki",
                    "en": "The number of patients who received zinc",
                    "condition": "diarrhea.given_zinc"
                },
                "the_number_of_patients_who_received_a_packet_of_ors": {
                    "line_number": 6,
                    "sw": "Idadi ya wagonjwa waliopatiwa paketi za ORS",
                    "en": "The number of patients who received a packet of ORS",
                    "condition": "diarrhea.given_ors"
                },
                "number_of_admitted_patients": {
                    "line_number": 7,
                    "sw": "Idadi ya wagonjwa waliolazwa",
                    "en": "Number of admitted patients",
                    "condition": "diarrhea.admission"
                },
                "the_number_of_refereed_patients": {
                    "line_number": 8,
                    "sw": "Idadi ya wagonjwa waliopewa rufaa",
                    "en": "The number of refereed patients",
                    "condition": "diarrhea.referral"
                },
                "the_number_of_patients_who_died_of_dtc_diarrhoea_treatment_centre": {
                    "line_number": 9,
                    "sw": "Idadi ya wagonjwa waliofia DTC",
                    "en": "The number of patients who died of DTC_Diarrhoea treatment Centre",
                    "condition": "diarrhea.diarrhea_mortality"
                },
                "definitions": {
                    "columns": {
                        "lessthan1male": {
                            "title": "Males",
                            "condition": "FIXME && patient.gender == 'male'"
                        },
                        "lessthan1female": {
                            "title": "Less than 1 Month - Females",
                            "condition": "FIXME && patient.gender == 'female'"
                        },
                        "lessthan1total": {
                            "title": "Less than 1 Month - Total",
                            "condition": "FIXME"
                        },
                        "more1momale": {
                            "title": "More than 1 month and less than 1 Year - Male",
                            "condition": "FIXME && patient.gender == 'male'"
                        },
                        "more1mofemale": {
                            "title": "More than 1 month and less than 1 Year - Females",
                            "condition": "FIXME && patient.gender == 'female'"
                        },
                        "more1mototal": {
                            "title": "More than 1 month and less than 1 Year - Total",
                            "condition": "FIXME "
                        },
                        "above1below5male": {
                            "title": "More than 1 year and less than 5 Years - Male",
                            "condition": "patient.approxage > 1 && patient.approxage < 5 && patient.gender == 'male'"
                        },
                        "above1below5female": {
                            "title": "More than 1 year and less than 5 Years - Females",
                            "condition": "patient.approxage > 1 && patient.approxage < 5 && patient.gender == 'female'"
                        },
                        "above1below5total": {
                            "title": "More than 1 year and less than 5 Years - Total",
                            "condition": "patient.approxage > 1 && patient.approxage < 5"
                        }
                    }
                }
            }
        },
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
            "parent": "report_familyplanning",
            "parent_title": "Family Planning",
            "overrides": {
                "thead_prefix": "<tr><th></th><th></th><th colspan=\"2\">Complex header 1</th><th colspan=\"3\">Complex header 2</th></tr>",
                "disabled": [
                    {
                        "row": "including_20yrs",
                        "col": "hz"
                    }
                ]
            }
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
            "parent": "report_familyplanning",
            "parent_title": "Family Planning"
        },
        "report_ipd": {
            "collection": "reports",
            "class": "schema",
            "_id": "reports/schema/reportipd",
            "$schema": "http://json-schema.org/draft-04/schema#",
            "title": "Leprosy and TB",
            "type": "object",
            "properties": {
                "those_who_are_admitted_in_the_ward": {
                    "line_number": "1",
                    "sw": "Waliolazwa Wodini",
                    "en": "Those who are admitted into the ward"
                },
                "acute_flacid_paralysis": {
                    "line_number": "2",
                    "sw": "Acute Flacid Paralysis",
                    "en": "Acute Flacid Paralysis",
                    "condition": "disease_diagnosis.admission && disease_diagnosis.diagnosis == 'Acute Flacid Paralysis'"
                },
                "cholera": {
                    "line_number": "3",
                    "sw": "Cholera",
                    "en": "Cholera",
                    "condition": "disease_diagnosis.admission && disease_diagnosis.diagnosis == 'Cholera'"
                },
                "dysentery": {
                    "line_number": "4",
                    "sw": "Dysentery",
                    "en": "Dysentery",
                    "condition": "disease_diagnosis.admission && disease_diagnosis.diagnosis == 'Dysentery'"
                },
                "measles": {
                    "line_number": "5",
                    "sw": "Measles",
                    "en": "Measles",
                    "condition": "disease_diagnosis.admission && disease_diagnosis.diagnosis == 'Measles'"
                },
                "meningitis": {
                    "line_number": "6",
                    "sw": "Meningitis",
                    "en": "Meningitis",
                    "condition": "disease_diagnosis.admission && disease_diagnosis.diagnosis == 'Meningitis'"
                },
                "tetanus_neonatal": {
                    "line_number": "7",
                    "sw": "Tetanus. Neonatal",
                    "en": "Tetanus. Neonatal",
                    "condition": "disease_diagnosis.admission && disease_diagnosis.diagnosis == 'Tetanus. Neonatal'"
                },
                "plague": {
                    "line_number": "8",
                    "sw": "Plague",
                    "en": "Plague",
                    "condition": "disease_diagnosis.admission && disease_diagnosis.diagnosis == 'Plague'"
                },
                "relapsing_fever_louse_borne_typhus": {
                    "line_number": "9",
                    "sw": "Relapsing Fever Louse borne Typhus",
                    "en": "Relapsing Fever Louse borne Typhus",
                    "condition": "disease_diagnosis.admission && disease_diagnosis.diagnosis == 'Relapsing Fever Louse borne Typhus'"
                },
                "typhoid": {
                    "line_number": "10",
                    "sw": "Typhoid",
                    "en": "Typhoid",
                    "condition": "disease_diagnosis.admission && disease_diagnosis.diagnosis == 'Typhoid'"
                },
                "diarrhea_acute": {
                    "line_number": "11",
                    "sw": "Diarrhea Acute <14days",
                    "en": "Diarrhea Acute <14days",
                    "condition": "disease_diagnosis.admission && disease_diagnosis.diagnosis == 'Diarrhea Acute <14days'"
                },
                "diarrhea_chronic": {
                    "line_number": "1",
                    "sw": "Diarrhea Chronic >or= 14days",
                    "en": "Diarrhea Chronic >or= 14days",
                    "condition": "disease_diagnosis.admission && disease_diagnosis.diagnosis == 'Diarrhea Chronic >or= 14days'"
                },
                "malaria_severe_complicated_blood_side_positive": {
                    "line_number": "13a",
                    "sw": "Malaria Severe/Complicated Blood Side Positive",
                    "en": "Maleria Severe/Complicated Blood Side Positive",
                    "condition": "disease_diagnosis.admission && disease_diagnosis.diagnosis == 'Maleria Severe/Complicated Blood Side Positive'"
                },
                "malaria_severe_complicated_mrdt_positive": {
                    "line_number": "13b",
                    "sw": "Malaria Severe/Complicated mRDT Positive",
                    "en": "Maleria Severe/Complicated mRDT Positive",
                    "condition": "disease_diagnosis.admission && disease_diagnosis.diagnosis == 'Maleria Severe/Complicated mRDT Positive'"
                },
                "malaria_severe_complicated_clinical_no_test": {
                    "line_number": "13c",
                    "sw": "Malaria Severe/Complicated Clinical no test",
                    "en": "Maleria Severe/Complicated Clinical no test",
                    "condition": "disease_diagnosis.admission && disease_diagnosis.diagnosis == 'Maleria Severe/Complicated Clinical no test'"
                },
                "schistosomiasis": {
                    "line_number": "14",
                    "sw": "Schistosomiasis",
                    "en": "Schistosomiasis",
                    "condition": "disease_diagnosis.admission && disease_diagnosis.diagnosis == 'Schistosomiasis'"
                },
                "sti_genital_discharge_syndrome_gds": {
                    "line_number": "15",
                    "sw": "STI Genital Discharge Syndrome GDS",
                    "en": "STI Genital Discharge Syndrome GDS",
                    "condition": "disease_diagnosis.admission && disease_diagnosis.diagnosis == 'STI Genital Discharge Syndrome GDS'"
                },
                "sti_genital_ulcer_diseases_gud": {
                    "line_number": "16",
                    "sw": "STI Genital Ulcer Diseases GUD",
                    "en": "STI Genital Ulcer Diseases GUD",
                    "condition": "disease_diagnosis.admission && disease_diagnosis.diagnosis == 'STI Genital Ulcer Diseases GUD'"
                },
                "sti_pelvic_inflammatory_diseases": {
                    "line_number": "17",
                    "sw": "STI Pelvic Inflammatory diseases PID",
                    "en": "STI Pelvic Inflammatory diseases PID",
                    "condition": "disease_diagnosis.admission && disease_diagnosis.diagnosis == 'STI Pelvic Inflammatory diseases PID'"
                },
                "sexually_transmitted_infection_other": {
                    "line_number": "18",
                    "sw": "Sexually Transmitted Infection Other",
                    "en": "Sexually Transmitted Infection Other",
                    "condition": "disease_diagnosis.admission && disease_diagnosis.diagnosis == 'Sexually Transmitted Infection Other'"
                },
                "gynaecological_diseases": {
                    "line_number": "19",
                    "sw": "Gynaecological diseases Other",
                    "en": "Gynaecological diseases Other",
                    "condition": "disease_diagnosis.admission && disease_diagnosis.diagnosis == 'Gynaecological diseases Other'"
                },
                "tuberculosis": {
                    "line_number": "20",
                    "sw": "Tuberculosis",
                    "en": "Tuberculosis",
                    "condition": "disease_diagnosis.admission && disease_diagnosis.diagnosis == 'Tuberculosis'"
                },
                "leprosy": {
                    "line_number": "21",
                    "sw": "Leprosy",
                    "en": "Leprosy",
                    "condition": "disease_diagnosis.admission && disease_diagnosis.diagnosis == 'Leprosy'"
                },
                "diabetes_mellitus": {
                    "line_number": "22",
                    "sw": "Diabetes Mellitus",
                    "en": "Diabetes Mellitus",
                    "condition": "disease_diagnosis.admission && disease_diagnosis.diagnosis == 'Diabetes Mellitus'"
                },
                "infant_of_diabetic_mother": {
                    "line_number": "23",
                    "sw": "Infant of Diabetic Mother",
                    "en": "Infant of Diabetic Mother",
                    "condition": "disease_diagnosis.admission && disease_diagnosis.diagnosis == 'Infant of Diabetic Mother'"
                },
                "kwashiorkor": {
                    "line_number": "24",
                    "sw": "Kwashiorkor",
                    "en": "Kwashiorkor",
                    "condition": "disease_diagnosis.admission && disease_diagnosis.diagnosis == 'Kwashiorkor'"
                },
                "marasmus": {
                    "line_number": "25",
                    "sw": "Marasmus",
                    "en": "Marasmus",
                    "condition": "disease_diagnosis.admission && disease_diagnosis.diagnosis == 'Marasmus'"
                },
                "marasmic_kwashiorkor": {
                    "line_number": "26",
                    "sw": "Marasmic_kwashiorkor",
                    "en": "Marasmic_kwashiorkor",
                    "condition": "disease_diagnosis.admission && disease_diagnosis.diagnosis == 'Marasmic_kwashiorkor'"
                },
                "moderate_malnutrition": {
                    "line_number": "27",
                    "sw": "Moderate Malnutrition",
                    "en": "Moderate Malnutrition",
                    "condition": "disease_diagnosis.admission && disease_diagnosis.diagnosis == 'Moderate Malnutrition'"
                },
                "nutritional_disoders_other": {
                    "line_number": "28",
                    "sw": "Nutritional Disorders Other",
                    "en": "Nutritional Disorders Other",
                    "condition": "disease_diagnosis.admission && disease_diagnosis.diagnosis == 'Nutritional Disorders Other'"
                },
                "thyroid_diseases": {
                    "line_number": "29",
                    "sw": "Thyroid Diseases",
                    "en": "Thyroid Diseases",
                    "condition": "disease_diagnosis.admission && disease_diagnosis.diagnosis == 'Thyroid Diseases'"
                },
                "sickle_cell_disease": {
                    "line_number": "30",
                    "sw": "Sickle cell Disease",
                    "en": "Sickle cell Disease",
                    "condition": "disease_diagnosis.admission && disease_diagnosis.diagnosis == 'Sickle cell Disease'"
                },
                "anaemia_mild_moderate": {
                    "line_number": "31",
                    "sw": "Anaemia Mild/Moderate",
                    "en": "Anaemia Mild/Moderate",
                    "condition": "disease_diagnosis.admission && disease_diagnosis.diagnosis == 'Anaemia Mild/Moderate'"
                },
                "anaemia_severe": {
                    "line_number": "32",
                    "sw": "Anaemia Severe",
                    "en": "Anaemia Severe",
                    "condition": "disease_diagnosis.admission && disease_diagnosis.diagnosis == 'Anaemia Severe'"
                },
                "psychoses": {
                    "line_number": "33",
                    "sw": "Psychoses",
                    "en": "Psychoses",
                    "condition": "disease_diagnosis.admission && disease_diagnosis.diagnosis == 'Psychoses'"
                },
                "neuroses": {
                    "line_number": "34",
                    "sw": "Neuroses",
                    "en": "Neuroses",
                    "condition": "disease_diagnosis.admission && disease_diagnosis.diagnosis == 'Neuroses'"
                },
                "cerebral_palsy": {
                    "line_number": "35",
                    "sw": "Cerebral Palsy",
                    "en": "Cerebral Palsy",
                    "condition": "disease_diagnosis.admission && disease_diagnosis.diagnosis == 'Cerebral Palsy'"
                },
                "epilepsy": {
                    "line_number": "36",
                    "sw": "Epilepsy",
                    "en": "Epilepsy",
                    "condition": "disease_diagnosis.admission && disease_diagnosis.diagnosis == 'Epilepsy'"
                },
                "ear_diseases_non_infectious": {
                    "line_number": "37",
                    "sw": "Ear Diseases non-infectious",
                    "en": "Ear Diseases non-infectious",
                    "condition": "disease_diagnosis.admission && disease_diagnosis.diagnosis == 'Ear Diseases non-infectious'"
                },
                "ear_infection_acute": {
                    "line_number": "38",
                    "sw": "Ear infection Acute",
                    "en": "Ear infection Acute",
                    "condition": "disease_diagnosis.admission && disease_diagnosis.diagnosis == 'Ear infection Acute'"
                },
                "ear_infection_chronic": {
                    "line_number": "39",
                    "sw": "Ear Infection Chronic",
                    "en": "Ear Infection Chronic",
                    "condition": "disease_diagnosis.admission && disease_diagnosis.diagnosis == 'Ear Infection Chronic'"
                },
                "eye_infections_viral_keratoconjunctivitis": {
                    "line_number": "40",
                    "sw": "Eye Infections Viral Keratoconjunctivitis",
                    "en": "Eye Infections Viral Keratoconjunctivitis",
                    "condition": "disease_diagnosis.admission && disease_diagnosis.diagnosis == 'Eye Infections Viral Keratoconjunctivitis'"
                },
                "eye_infections_other": {
                    "line_number": "41",
                    "sw": "Eye Infections Other",
                    "en": "Eye Infections Other",
                    "condition": "disease_diagnosis.admission && disease_diagnosis.diagnosis == 'Eye Infections Other'"
                },
                "eye_diseases_non-infectious": {
                    "line_number": "42",
                    "sw": "Eye Diseases Non-infectious",
                    "en": "Eye Diseases Non-infectious",
                    "condition": "disease_diagnosis.admission && disease_diagnosis.diagnosis == 'Eye Diseases Non-infectious'"
                },
                "cardiac_failure": {
                    "line_number": "43",
                    "sw": "Cardiac Failure",
                    "en": "Cardiac Failure",
                    "condition": "disease_diagnosis.admission && disease_diagnosis.diagnosis == 'Cardiac Failure'"
                },
                "hypertension_severe": {
                    "line_number": "44",
                    "sw": "Hypertension severe",
                    "en": "Hypertension severe",
                    "condition": "disease_diagnosis.admission && disease_diagnosis.diagnosis == 'Hypertension severe'"
                },
                "rheumatic_fever": {
                    "line_number": "45",
                    "sw": "Rheumatic Fever",
                    "en": "Rheumatic Fever",
                    "condition": "disease_diagnosis.admission && disease_diagnosis.diagnosis == 'Rheumatic Fever'"
                },
                "cardiovascular_disorders_other": {
                    "line_number": "46",
                    "sw": "Cardiovascular Disorders Other",
                    "en": "Cardiovascular Disorders Other",
                    "condition": "disease_diagnosis.admission && disease_diagnosis.diagnosis == 'Cardiovascular Disorders Other'"
                },
                "broncial_asthma_severe": {
                    "line_number": "47",
                    "sw": "Broncial Asthma Severe",
                    "en": "Broncial Asthma Severe",
                    "condition": "disease_diagnosis.admission && disease_diagnosis.diagnosis == 'Broncial Asthma Severe'"
                },
                "upper_respiratory_infections_pharyngitis_tonsillitis_rhinitis": {
                    "line_number": "48",
                    "sw": "Upper Respiratory Infections Pharyngitis/Tonsillitis/Rhinitis",
                    "en": "Upper Respiratory Infections Pharyngitis/Tonsillitis/Rhinitis",
                    "condition": "disease_diagnosis.admission && disease_diagnosis.diagnosis == 'Upper Respiratory Infections Pharyngitis/Tonsillitis/Rhinitis'"
                },
                "pneumonia": {
                    "line_number": "49",
                    "sw": "Pneumonia",
                    "en": "Pneumonia",
                    "condition": "disease_diagnosis.admission && disease_diagnosis.diagnosis == 'Pneumonia'"
                },
                "pneumonia_severe": {
                    "line_number": "50",
                    "sw": "Pneumonia Severe",
                    "en": "Pneumonia Severe",
                    "condition": "disease_diagnosis.admission && disease_diagnosis.diagnosis == 'Pneumonia Severe'"
                },
                "respiratory_system_disorders_other": {
                    "line_number": "51",
                    "sw": "Respiratory System disorders Other",
                    "en": "Respiratory System disorders Other",
                    "condition": "disease_diagnosis.admission && disease_diagnosis.diagnosis == 'Respiratory System disorders Other'"
                },
                "peptic_ulcers": {
                    "line_number": "52",
                    "sw": "Peptic ulcers",
                    "en": "Peptic ulcers",
                    "condition": "disease_diagnosis.admission && disease_diagnosis.diagnosis == 'Peptic ulcers'"
                },
                "liver_diseases_non_infectious": {
                    "line_number": "53",
                    "sw": "Liver diseases Non-infectious",
                    "en": "Liver diseases Non-infectious",
                    "condition": "disease_diagnosis.admission && disease_diagnosis.diagnosis == 'Liver diseases Non-infectious'"
                },
                "gastrointestinal_disease_other_non_infectious": {
                    "line_number": "54",
                    "sw": "Gastrointestinal diseases Other non-infectious",
                    "en": "Gastrointestinal diseases Other non-infectious",
                    "condition": "disease_diagnosis.admission && disease_diagnosis.diagnosis == 'Gastrointestinal diseases Other non-infectious'"
                },
                "urinary_tract_infections": {
                    "line_number": "55",
                    "sw": "Urinary Tract Infections UTI",
                    "en": "Urinary Tract Infections UTI",
                    "condition": "disease_diagnosis.admission && disease_diagnosis.diagnosis == 'Urinary Tract Infections UTI'"
                },
                "nephrotic_syndrome": {
                    "line_number": "56",
                    "sw": "Nephrotic Syndrome",
                    "en": "Nephrotic Syndrome",
                    "condition": "disease_diagnosis.admission && disease_diagnosis.diagnosis == 'Nephrotic Syndrome'"
                },
                "acute_glumerulonephritis": {
                    "line_number": "57",
                    "sw": "Acute glumerulonephritis",
                    "en": "Acute glumerulonephritis",
                    "condition": "disease_diagnosis.admission && disease_diagnosis.diagnosis == 'Acute glumerulonephritis'"
                },
                "skin_infections": {
                    "line_number": "58",
                    "sw": "Skin Infections",
                    "en": "Skin Infections",
                    "condition": "disease_diagnosis.admission && disease_diagnosis.diagnosis == 'Skin Infections'"
                },
                "skin_diseases_non_infectious": {
                    "line_number": "59",
                    "sw": "Skin diseases Non-infectious",
                    "en": "Skin diseases Non-infectious",
                    "condition": "disease_diagnosis.admission && disease_diagnosis.diagnosis == 'Skin diseases Non-infectious'"
                },
                "osteomyelitis": {
                    "line_number": "60",
                    "sw": "Osteomyelitis",
                    "en": "Osteomyelitis",
                    "condition": "disease_diagnosis.admission && disease_diagnosis.diagnosis == 'Osteomyelitis'"
                },
                "rheumatoid_and_joint_disease": {
                    "line_number": "61",
                    "sw": "Rheumatoid and Joint diseases",
                    "en": "Rheumatoid and Joint diseases",
                    "condition": "disease_diagnosis.admission && disease_diagnosis.diagnosis == 'Rheumatoid and Joint diseases'"
                },
                "low_birth_weight_and_prematurity_complications": {
                    "line_number": "62",
                    "sw": "Low birth weight and Prematurity complications",
                    "en": "Low birth weight and Prematurity complications",
                    "condition": "disease_diagnosis.admission && disease_diagnosis.diagnosis == 'Low birth weight and Prematurity complications'"
                },
                "birth_asphyxia": {
                    "line_number": "63",
                    "sw": "Birth asphyxia",
                    "en": "Birth asphyxia",
                    "condition": "disease_diagnosis.admission && disease_diagnosis.diagnosis == 'Birth asphyxia'"
                },
                "neonatal_septicaemia_local_infections": {
                    "line_number": "64",
                    "sw": "Neonatal Septicaemia Local infections",
                    "en": "Neonatal Septicaemia Local infections",
                    "condition": "disease_diagnosis.admission && disease_diagnosis.diagnosis == 'Neonatal Septicaemia Local infections'"
                },
                "road_traffic_accidents": {
                    "line_number": "65",
                    "sw": "Road Traffic Accidents",
                    "en": "Road Traffic Accidents",
                    "condition": "disease_diagnosis.admission && disease_diagnosis.diagnosis == 'Road Traffic Accidents'"
                },
                "fractures": {
                    "line_number": "66",
                    "sw": "Fractures",
                    "en": "Fractures",
                    "condition": "disease_diagnosis.admission && disease_diagnosis.diagnosis == 'Fractures'"
                },
                "poisoning": {
                    "line_number": "67",
                    "sw": "Poisoning",
                    "en": "Poisoning",
                    "condition": "disease_diagnosis.admission && disease_diagnosis.diagnosis == 'Poisoning'"
                },
                "burns": {
                    "line_number": "68",
                    "sw": "Burns",
                    "en": "Burns",
                    "condition": "disease_diagnosis.admission && disease_diagnosis.diagnosis == 'Burns'"
                },
                "animal_bites_suspected_rabies": {
                    "line_number": "69",
                    "sw": "Animal Bites Suspected Rabies",
                    "en": "Animal Bites Suspected Rabies",
                    "condition": "disease_diagnosis.admission && disease_diagnosis.diagnosis == 'Animal Bites Suspected Rabies'"
                },
                "animal_bites_no_suspected_rabies": {
                    "line_number": "70",
                    "sw": "Animal Bites No suspected Rabies",
                    "en": "Animal Bites No suspected Rabies",
                    "condition": "disease_diagnosis.admission && disease_diagnosis.diagnosis == 'Animal Bites No suspected Rabies'"
                },
                "hiv_infection_symptomatic": {
                    "line_number": "71",
                    "sw": "HIV infection Symptomatic",
                    "en": "HIV infection Symptomatic",
                    "condition": "disease_diagnosis.admission && disease_diagnosis.diagnosis == 'HIV infection Symptomatic'"
                },
                "congenital_disorders": {
                    "line_number": "72",
                    "sw": "Congenital Disorders",
                    "en": "Congenital Disorders",
                    "condition": "disease_diagnosis.admission && disease_diagnosis.diagnosis == 'Congenital Disorders'"
                },
                "hepatitis": {
                    "line_number": "73",
                    "sw": "Hepatitis",
                    "en": "Hepatitis",
                    "condition": "disease_diagnosis.admission && disease_diagnosis.diagnosis == 'Hepatitis'"
                },
                "neoplasm": {
                    "line_number": "74",
                    "sw": "Neoplasm",
                    "en": "Neoplasm",
                    "condition": "disease_diagnosis.admission && disease_diagnosis.diagnosis == 'Neoplasm'"
                },
                "soil_transmitted_helminths": {
                    "line_number": "75",
                    "sw": "Soil transmitted helminths",
                    "en": "Soil transmitted helminths",
                    "condition": "disease_diagnosis.admission && disease_diagnosis.diagnosis == 'Soil transmitted helminths'"
                },
                "lympatic_filairiasis": {
                    "line_number": "76",
                    "sw": "Lympatic filairiasis",
                    "en": "Lympatic filairiasis",
                    "condition": "disease_diagnosis.admission && disease_diagnosis.diagnosis == 'Lympatic filairiasis'"
                },
                "anthrax": {
                    "line_number": "77",
                    "sw": "Anthrax",
                    "en": "Anthrax",
                    "condition": "disease_diagnosis.admission && disease_diagnosis.diagnosis == 'Anthrax'"
                },
                "diagnoses_other": {
                    "line_number": "78",
                    "sw": "Diagnoses Other",
                    "en": "Diagnoses Other",
                    "condition": "disease_diagnosis.admission && disease_diagnosis.diagnosis == 'Diagnoses Other'"
                },
                "definitions": {
                    "columns": {
                        "lessthan1male": {
                            "title": "Males",
                            "condition": "FIXME && patient.gender == 'male'"
                        },
                        "lessthan1female": {
                            "title": "Less than 1 Month - Females",
                            "condition": "FIXME && patient.gender == 'female'"
                        },
                        "lessthan1total": {
                            "title": "Less than 1 Month - Total",
                            "condition": "FIXME"
                        },
                        "more1momale": {
                            "title": "More than 1 month and less than 1 Year - Male",
                            "condition": "FIXME && patient.gender == 'male'"
                        },
                        "more1mofemale": {
                            "title": "More than 1 month and less than 1 Year - Females",
                            "condition": "FIXME && patient.gender == 'female'"
                        },
                        "more1mototal": {
                            "title": "More than 1 month and less than 1 Year - Total",
                            "condition": "FIXME "
                        },
                        "above1below5male": {
                            "title": "More than 1 year and less than 5 Years - Male",
                            "condition": "patient.approxage > 1 && patient.approxage < 5 && patient.gender == 'male'"
                        },
                        "above1below5female": {
                            "title": "More than 1 year and less than 5 Years - Females",
                            "condition": "patient.approxage > 1 && patient.approxage < 5 && patient.gender == 'female'"
                        },
                        "above1below5total": {
                            "title": "More than 1 year and less than 5 Years - Total",
                            "condition": "patient.approxage > 1 && patient.approxage < 5"
                        }
                    }
                }
            }
        },
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
                    "condition": "tb_leprosy.classification"
                },
                "newly_registered": {
                    "title": "New",
                    "type": "number",
                    "line_number": "2a",
                    "condition": "tb_leprosy.patient_count"
                },
                "return_after_default": {
                    "title": "Return after Default",
                    "type": "number",
                    "line_number": "2b",
                    "condition": "tb_leprosy.leprosy_status == 'return after default'"
                },
                "relapse_after_MDT": {
                    "title": "Relapse after MDT",
                    "type": "number",
                    "line_number": "2c",
                    "condition": "tb_leprosy.leprosy_status == 'relapse after mdt'"
                },
                "relapse_after_dds": {
                    "title": "Relapse after DDS.Others",
                    "type": "number",
                    "line_number": "2d",
                    "condition": "tb_leprosy.leprosy_status == 'relapse after dds'"
                },
                "total_notifications": {
                    "title": "Total Notifications (b)",
                    "type": "number",
                    "line_number": "2e",
                    "condition": "tb_leprosy.leprosy_status"
                },
                "1mb": {
                    "title": "1MB",
                    "type": "number",
                    "line_number": "3a",
                    "condition": "FIXME"
                },
                "1pb": {
                    "title": "1PB",
                    "type": "number",
                    "line_number": "3b",
                    "condition": "FIXME"
                },
                "disability_grade_0": {
                    "title": "Grade 0",
                    "type": "number",
                    "line_number": "4a",
                    "condition": "tb_leprosy.disability_grade == 'grade 0'"
                },
                "disability_grade_1": {
                    "title": "Grade 1",
                    "type": "number",
                    "line_number": "4b",
                    "condition": "tb_leprosy.disability_grade == 'grade 1'"
                },
                "disability_grade_2": {
                    "title": "Grade 2",
                    "type": "number",
                    "line_number": "4c",
                    "condition": "tb_leprosy.disability_grade == 'grade 2"
                },
                "disability_grade_total": {
                    "title": "Total",
                    "type": "number",
                    "line_number": "4d",
                    "condition": "tb_leprosy.disability_grade"
                },
                "treatment_completed": {
                    "title": "Treatment Completed",
                    "type": "number",
                    "line_number": "5a",
                    "condition": "tb_leprosy.end_result == 'treatment completed'"
                },
                "died": {
                    "title": "Died",
                    "type": "number",
                    "line_number": "5b",
                    "condition": "tb_leprosy.end_result == 'died'"
                },
                "transferred_out": {
                    "title": "Transferred Out",
                    "type": "number",
                    "line_number": "5c",
                    "condition": "tb_leprosy.end_result == 'transferred out'"
                },
                "defaulter": {
                    "title": "Defaulter",
                    "type": "number",
                    "line_number": "5d",
                    "condition": "tb_leprosy.end_result == 'defaulter'"
                },
                "total_c": {
                    "title": "Total (c)",
                    "type": "number",
                    "line_number": "5e",
                    "condition": "tb_leprosy.end_result"
                },
                "registered_at_end_of_quarter": {
                    "title": "(a) + (b) - (c)",
                    "type": "number",
                    "line_number": "6",
                    "condition": "FIXME"
                },
                "corticosteroids": {
                    "title": "Patients who started corticosteroids in the quarter",
                    "type": "number",
                    "line_number": "7",
                    "condition": "tb_leprosy.corticosteroid_treatment"
                }
            },
            "definitions": {
                "65": {
                    "title": "65+",
                    "type": "object",
                    "properties": {
                        "male": {
                            "type": "number",
                            "title": "Male"
                        },
                        "female": {
                            "type": "number",
                            "title": "Female"
                        }
                    }
                },
                "treatment_categories": {
                    "mb_a": {
                        "type": "number",
                        "title": "MB(A)"
                    },
                    "mb_c": {
                        "type": "number",
                        "title": "MB(C)"
                    },
                    "pb_a": {
                        "type": "number",
                        "title": "PB(A)"
                    },
                    "pb_c": {
                        "type": "number",
                        "title": "PB(C)"
                    },
                    "total": {
                        "type": "number",
                        "title": "Total"
                    }
                },
                "age_ranges": {
                    "0_14": {
                        "title": "0-14",
                        "type": "object",
                        "properties": {
                            "male": {
                                "type": "number",
                                "title": "Male"
                            },
                            "female": {
                                "type": "number",
                                "title": "Female"
                            }
                        }
                    }
                },
                "15_24": {
                    "title": "15-24",
                    "type": "object",
                    "properties": {
                        "male": {
                            "type": "number",
                            "title": "Male"
                        },
                        "female": {
                            "type": "number",
                            "title": "Female"
                        }
                    }
                },
                "25-34": {
                    "title": "25-34",
                    "type": "object",
                    "properties": {
                        "male": {
                            "type": "number",
                            "title": "Male"
                        },
                        "female": {
                            "type": "number",
                            "title": "Female"
                        }
                    }
                },
                "35_44": {
                    "title": "35-44",
                    "type": "object",
                    "properties": {
                        "male": {
                            "type": "number",
                            "title": "Male"
                        },
                        "female": {
                            "type": "number",
                            "title": "Female"
                        }
                    }
                },
                "45_54": {
                    "title": "45-54",
                    "type": "object",
                    "properties": {
                        "male": {
                            "type": "number",
                            "title": "Male"
                        },
                        "female": {
                            "type": "number",
                            "title": "Female"
                        }
                    }
                },
                "55_64": {
                    "title": "55-64",
                    "type": "object",
                    "properties": {
                        "male": {
                            "type": "number",
                            "title": "Male"
                        },
                        "female": {
                            "type": "number",
                            "title": "Female"
                        }
                    }
                },
                "total": {
                    "title": "Total",
                    "type": "object",
                    "properties": {
                        "male": {
                            "type": "number",
                            "title": "Male"
                        },
                        "female": {
                            "type": "number",
                            "title": "Female"
                        },
                        "total": {
                            "type": "number",
                            "title": "Total"
                        }
                    }
                }
            }
        },
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
                    "sw": "Waliotarajiwa kujifungua",
                    "en": "Those who were expected to deliver",
                    "condition": ""
                },
                "reprot_for_mothers_who_delivered": {
                    "line_number": "2",
                    "sw": "Taarifa ya Waliojifungua",
                    "en": "Report for mothers who delivered",
                    "condition": ""
                },
                "those_who_delivered_at_the_clinic": {
                    "line_number": "2a",
                    "sw": "Waliojifungulia katika kituo cha kutolea huduma za afya",
                    "en": "Those who delivered at the clinic",
                    "condition": ""
                },
                "those_who_delivered_on_while_on_their_way_to_the_clinic": {
                    "line_number": "2b",
                    "sw": "Waliojifungua kabla ya kufika kituoni (BBA)",
                    "en": "Those who delivered on while on their way to the clinic (BBA)",
                    "condition": ""
                },
                "those_helped_to_deliver_by_traditional_birth_attendants_tba": {
                    "line_number": "2c",
                    "sw": "Waliozalishwa na wakunga wa jadi (TBA)",
                    "en": "Those helped to deliver by traditional birth attendants (TBA)",
                    "condition": ""
                },
                "home_delivery": {
                    "line_number": "2d",
                    "sw": "Waliojifungua nyumbani (H)",
                    "en": "Home delivery (H)",
                    "condition": ""
                },
                "total_giving_birth": {
                    "line_number": "2e",
                    "sw": "Jumla waliojifungua (2a+2b+2c+2d)",
                    "en": "Total giving birth (2a +2 b +2 c +2 d)",
                    "condition": ""
                },
                "those_who_were_helped_to_deliver_by_skilled_providers": {
                    "line_number": "2f",
                    "sw": "Waliozalishwa na watoa huduma wanye ujuzi",
                    "en": "Those who were helped to deliver by skilled providers",
                    "condition": ""
                },
                "percentage_of_all_who_delivered_at_the_clinic": {
                    "line_number": "2g",
                    "sw": "Asilimia ya waliojifungulia katika vituo vya kutolea huduma za afya (2a/1) x 100",
                    "en": "Percentage of all who delivered at the Clinic (2a / 1) x 100",
                    "condition": ""
                },
                "clinic_reports_on_different_methods_of_methods_of_delivery": {
                    "line_number": "3",
                    "sw": "Taarifa ya njia za kujifungua kutoka vituo vya kutolea huduma za afya",
                    "en": "Clinic reports on different methods of methods of delivery",
                    "condition": ""
                },
                "normal_delivery_kw": {
                    "line_number": "3a",
                    "sw": "Waliojifungua Kawaida (KW)",
                    "en": "Normal delivery (KW)",
                    "condition": ""
                },
                "vacuum_vm_delivery": {
                    "line_number": "3b",
                    "sw": "Waliojifungua kwa Vacuum (VM)",
                    "en": "Vacuum (VM) delivery",
                    "condition": ""
                },
                "breech_delivery": {
                    "line_number": "3c",
                    "sw": "Breech Delivery",
                    "en": "breech Delivery",
                    "condition": ""
                },
                "caesarian_section_cs_delivery": {
                    "line_number": "3d",
                    "sw": "Waliojifungua kwa Caesarian Section (CS)",
                    "en": "Caesarian Section (CS) delivery",
                    "condition": ""
                },
                "delivery_through_other_ways": {
                    "line_number": "3e",
                    "sw": "Waliojifungua kwa njia nyingizezo",
                    "en": "Delivery through other ways",
                    "condition": ""
                },
                "total": {
                    "line_number": "3f",
                    "sw": "Jumla (3a+3b+3c+3d+3e)",
                    "en": "Total (3a +3 b +3 c +3 d +3 e)",
                    "condition": ""
                },
                "the_number_of_pregnant_women_who_underwent_amtsl": {
                    "line_number": "3g",
                    "sw": "Idadi ya wajawazito walio fanyiwa AMTSL",
                    "en": "The number of pregnant women who underwent AMTSL",
                    "condition": ""
                },
                "prenatal_problems": {
                    "line_number": "4",
                    "sw": "Matatizo kabla ya kujifungua",
                    "en": "Prenatal problems",
                    "condition": ""
                },
                "aph": {
                    "line_number": "4a",
                    "sw": "APH",
                    "en": "APH",
                    "condition": ""
                },
                "pre_mature_rupture_of_membrane_prom": {
                    "line_number": "4b",
                    "sw": "Pre-mature Rupture of Membrane (PROM)",
                    "en": "Pre-mature rupture of membrane (PROM)",
                    "condition": ""
                },
                "high_bp": {
                    "line_number": "4c",
                    "sw": "High BP",
                    "en": "high BP",
                    "condition": ""
                },
                "eclampsia": {
                    "line_number": "6b",
                    "sw": "Eclampsia",
                    "en": "eclampsia",
                    "condition": ""
                },
                "anaemia": {
                    "line_number": "4e",
                    "sw": "Anaemia",
                    "en": "Anaemia",
                    "condition": ""
                },
                "malaria": {
                    "line_number": "4f",
                    "sw": "Malaria",
                    "en": "malaria",
                    "condition": ""
                },
                "hiv_stage_iii_or_iv": {
                    "line_number": "4g",
                    "sw": "HIV+ stage III or IV",
                    "en": "HIV + stage III or IV",
                    "condition": ""
                },
                "eptopic_pregnancy": {
                    "line_number": "4h",
                    "sw": "Ectopic Pregnancy",
                    "en": "ectopic Pregnancy",
                    "condition": ""
                },
                "abortion_or_abortion_complications": {
                    "line_number": "4i",
                    "sw": "Abortion / Abortion Complications",
                    "en": "Abortion / Abortion Complications",
                    "condition": ""
                },
                "other": {
                    "line_number": "6h",
                    "sw": "Mengineyo",
                    "en": "other",
                    "condition": ""
                },
                "total_impaired_prenatal": {
                    "line_number": "4k",
                    "sw": "Jumla wenye matatizo kabla ya kujifungua (4a+4b+4c+4d+4e+4f+4h+4i+4j+4k)",
                    "en": "Total impaired prenatal (4a +4 b +4 c +4 d +4 e +4 f +4 h +4 i +4 j +4 k)",
                    "condition": ""
                },
                "waliokeketwa_fgm": {
                    "line_number": "5",
                    "sw": "Waliokeketwa (FGM)",
                    "en": "Waliokeketwa (FGM)",
                    "condition": ""
                },
                "complications_during_and_after_childbirth": {
                    "line_number": "6",
                    "sw": "Matatizo wakati na baada ya kujifungua",
                    "en": "Complications during and after childbirth",
                    "condition": ""
                },
                "pph": {
                    "line_number": "6a",
                    "sw": "PPH",
                    "en": "PPH",
                    "condition": ""
                },
                "obstructed_labour": {
                    "line_number": "6c",
                    "sw": "Obstructed Labour",
                    "en": "Obstructed Labour",
                    "condition": ""
                },
                "retained_placenta": {
                    "line_number": "6d",
                    "sw": "Retained Placenta",
                    "en": "Retained Placenta",
                    "condition": ""
                },
                "tear_third_degree_tear": {
                    "line_number": "6e",
                    "sw": "Tear (Third Degree Tear)",
                    "en": "Tear (Third Degree Tear)",
                    "condition": ""
                },
                "ruptured_uterus": {
                    "line_number": "6f",
                    "sw": "Ruptured Uterus",
                    "en": "Ruptured Uterus",
                    "condition": ""
                },
                "infection_or_sepsis": {
                    "line_number": "6g",
                    "sw": "Uambukizo / Sepsis",
                    "en": "infenction/sepsis",
                    "condition": ""
                },
                "total_complications_after_childbirth": {
                    "line_number": "6i",
                    "sw": "Jumla ya matatizo baada ya kujifungua (6a+6b+6c+6d+6e+6f+6g+6h)",
                    "en": "Total complications after childbirth (6a +6 b +6 +6 c d e +6 +6 +6 G+ f 6h)",
                    "condition": ""
                },
                "emoc": {
                    "line_number": "7",
                    "sw": "EmOC",
                    "en": "EmOC",
                    "condition": ""
                },
                "given_iv_antibiotics": {
                    "line_number": "7a",
                    "sw": "Amepewa (IV) Antibiotiki",
                    "en": "given (IV) antibiotics",
                    "condition": ""
                },
                "given_iv_uterontonic": {
                    "line_number": "7b",
                    "sw": "Amepewa (IV) Uterotonic",
                    "en": "given (IV) Uterotonic",
                    "condition": ""
                },
                "given_iv_anticonvulsants": {
                    "line_number": "7c",
                    "sw": "Amepewa (IV) Anticonvulsants",
                    "en": "given (IV) Anticonvulsants",
                    "condition": ""
                },
                "placenta_has_been_dismissed_by_hand": {
                    "line_number": "7d",
                    "sw": "Ameondolewa kondo la nyuma kwa mkono",
                    "en": "Placenta has been dismissed by hand",
                    "condition": ""
                },
                "those_who_did_mva": {
                    "line_number": "7e",
                    "sw": "Amefanyiwa MVA",
                    "en": "Those who did MVA",
                    "condition": ""
                },
                "those_who_got_blood_transfusion": {
                    "line_number": "7f",
                    "sw": "Ameongezewa Damu",
                    "en": "Those who got blood transfusion",
                    "condition": ""
                },
                "pmtct": {
                    "line_number": "8",
                    "sw": "PMTCT",
                    "en": "PMTCT",
                    "condition": ""
                },
                "total_who_tested_hiv_anc": {
                    "line_number": "8a",
                    "sw": "Jumla waliopimwa VVU ANC",
                    "en": "Total who tested HIV ANC",
                    "condition": ""
                },
                "those_who_were_found_positive_at_anc": {
                    "line_number": "8b",
                    "sw": "Waliogundulika Positive kutoka ANC",
                    "en": "Those who were found positive at ANC",
                    "condition": ""
                },
                "those_who_started_using_arv_during_pregnancy_at_anc": {
                    "line_number": "8c",
                    "sw": "Walioanzishiwa dawa za ARV wakati wa ajauzito (ANC)",
                    "en": "Those who started using ARV during pregnancy at ANC",
                    "condition": ""
                },
                "those_who_started_using_art_treatment_during_pregnancy_anc": {
                    "line_number": "8d",
                    "sw": "Walioanza matibabu ya ART wakati wa ujauzito (ANC)",
                    "en": "Those who started using ART treatment during pregnancy (ANC)",
                    "condition": ""
                },
                "total_number_of_clients_who_tested_for_hiv_during_and_after_childbirth": {
                    "line_number": "8e",
                    "sw": "Jumla waliopimwa VVU wakati na baada ya kujifungua",
                    "en": "Total number of clients who tested for HIV during and after childbirth",
                    "condition": ""
                },
                "those_tested_positive_during_and_after_childbirth": {
                    "line_number": "8f",
                    "sw": "Waliogundulika Positive wakati na baada ya kujifungua",
                    "en": "Those tested positive during and after childbirth",
                    "condition": ""
                },
                "those_who_started_using_arvs_during_labor_and_delivery": {
                    "line_number": "8g",
                    "sw": "Walioanzishiwa dawa za ARV wakati wa uchungu na kujifungua",
                    "en": "Those who started using ARV's during labor and delivery",
                    "condition": ""
                },
                "those_who_started_art_treatment_during_labor_and_delivery": {
                    "line_number": "8h",
                    "sw": "Walioanza matibabu ya ART wakati wa uchungu na kujifungua",
                    "en": "Those who started ART treatment during labor and delivery",
                    "condition": ""
                },
                "total_clients_with_hiv": {
                    "line_number": "8i",
                    "sw": "Jumla Walio na VVU (8b+8f)",
                    "en": "Total Clients with HIV (8b +8 f)",
                    "condition": ""
                },
                "mothers_who_chose_to_breastfeed_only_ebf": {
                    "line_number": "8j",
                    "sw": "Waliochagua kunyonyesha maziwa ya mama pekee (EBF)",
                    "en": "Mothers who chose to breastfeed only (EBF)",
                    "condition": ""
                },
                "mothers_who_chose_to_feed_milk_substitute_rf": {
                    "line_number": "8k",
                    "sw": "Waliochagua ulishaji wa maziwa mbadala (RF)",
                    "en": "Mothers who chose to feeding milk substitute (RF)",
                    "condition": ""
                },
                "those_given_arv_prophylaxis_tail_when_discharged": {
                    "line_number": "8l",
                    "sw": "Waliopewa ARV Prophylaxis (tail) wakati wa kuruhusiwa",
                    "en": "Those given ARV prophylaxis (tail) when discharged",
                    "condition": ""
                },
                "those_given_referral_to_clinical_care_and_treatment_center_ctc": {
                    "line_number": "8m",
                    "sw": "Waliopata rufaa kwenda kliniki ya huduma na matibabu ya wenye VVU (CTC)",
                    "en": "Those given referral to clinical care and treatment center (CTC)",
                    "condition": ""
                },
                "total_hiv_positive_mothers_who_are_younger_than_20_years": {
                    "line_number": "8n",
                    "sw": "Jumla ya akina mama walio na VVU wenye umri chini ya miaka 20",
                    "en": "Total HIV-positive mothers who are younger than 20 years",
                    "condition": ""
                },
                "9_children_single_birth": {
                    "line_number": "9",
                    "sw": "Watoto Waliozaliwa mmoja",
                    "en": "9 children single birth",
                    "condition": ""
                },
                "9a_total_children_born_alive": {
                    "line_number": "9a",
                    "sw": "Jumla ya watoto waliozaliwa hai",
                    "en": "Total children born alive",
                    "condition": ""
                },
                "9b_live_births_weight_low": {
                    "line_number": "9b",
                    "sw": "Waliozaliwa hai Uzito <2.5kg",
                    "en": "9b live births Weight < 2.5kg",
                    "condition": ""
                },
                "9c_live_births_weight_high": {
                    "line_number": "9c",
                    "sw": "Waliozaliwa hai Uzito =>2.5kg",
                    "en": "9c live births Weight = > 2.5kg",
                    "condition": ""
                },
                "9d_macerated_dead_births_msb": {
                    "line_number": "9d",
                    "sw": "Waliozaliwa wafu Macerated (MSB)",
                    "en": "9D macerated dead births ( MSB )",
                    "condition": ""
                },
                "fresh_dead_births_9e_msb": {
                    "line_number": "9e",
                    "sw": "Waliozaliwa wafu Fresh (MSB)",
                    "en": "Fresh dead births 9e ( MSB )",
                    "condition": ""
                },
                "9f_births_to_mothers_with_hiv": {
                    "line_number": "9f",
                    "sw": "Waliozaliwa na mama wenye VVU",
                    "en": "births to mothers with HIV",
                    "condition": ""
                },
                "9g_children_given_arv_drugs": {
                    "line_number": "9g",
                    "sw": "Waliopewa dawa za ARV",
                    "en": "Children given ARV drugs",
                    "condition": ""
                },
                "9h_total_babies_born_alive_and_dead": {
                    "line_number": "9h",
                    "sw": "Jumla ya watoto waliozaliwa (hai na wafu) (9a+9d+9e)",
                    "en": "Total babies born ( alive and dead ) ( 9a +9 +9 d e )",
                    "condition": ""
                },
                "children_9i_apgar_score_less_than_7_at_5_minutes": {
                    "line_number": "9i",
                    "sw": "Watoto wenye APGAR Score chini ya 7 katika dakika 5",
                    "en": "Children Apgar Score less than 7 at 5 minutes",
                    "condition": ""
                },
                "10_twin_births": {
                    "line_number": "10",
                    "sw": "Watoto Waliozaliwa mapacha",
                    "en": "Twin births",
                    "condition": ""
                },
                "10a_total_children_born_alive": {
                    "line_number": "10a",
                    "sw": "Jumla ya watoto waliozaliwa hai",
                    "en": "Total children born alive",
                    "condition": ""
                },
                "10b_live_births_weight_low": {
                    "line_number": "10b",
                    "sw": "Waliozaliwa hai Uzito <2.5kg",
                    "en": "live births Weight < 2.5kg",
                    "condition": ""
                },
                "10c_live_births_weight_high": {
                    "line_number": "10c",
                    "sw": "Waliozaliwa hai Uzito =>2.5kg",
                    "en": "live births Weight = > 2.5kg",
                    "condition": ""
                },
                "10d_macerated_dead_births_msb": {
                    "line_number": "10d",
                    "sw": "Waliozaliwa wafu Macerated (MSB)",
                    "en": "macerated dead births ( MSB )",
                    "condition": ""
                },
                "fresh_dead_births_10e_msb": {
                    "line_number": "10e",
                    "sw": "Waliozaliwa wafu Fresh (MSB)",
                    "en": "Fresh dead births 10E ( MSB )",
                    "condition": ""
                },
                "10f_births_to_mothers_with_hiv": {
                    "line_number": "10f",
                    "sw": "Waliozaliwa na mama wenye VVU",
                    "en": "births to mothers with HIV",
                    "condition": ""
                },
                "10g_children_given_arvs": {
                    "line_number": "10g",
                    "sw": "Waliopewa dawa za ARV",
                    "en": "Children given ARVs",
                    "condition": ""
                },
                "10h_total_babies_born_alive_and_dead": {
                    "line_number": "10h",
                    "sw ": "Jumla ya watoto waliozaliwa(hai na wafu)(9a + 9d + 9e)",
                    "en ": "Total babies born(alive and dead)(9a + 9 + 9 d e)",
                    "condition": ""
                },
                "children_with_apgar_score_less_than_7_at_5_minutes ": {
                    "line_number": "10i",
                    "sw": "Watoto wenye APGAR Score chini ya 7 katika dakika 5",
                    "en": "Children with Apgar Score less than 7 at 5 minutes",
                    "condition": ""
                },
                "11_children_who_were_assisted_to_breath": {
                    "line_number": "11",
                    "sw": "Watoto waliosaidiwa kupumua",
                    "en": "children who were assisted to breath",
                    "condition": ""
                },
                "11a_number_of_children_assisted_to_breathe_stimulation ": {
                    "line_number ": "11a",
                    "sw ": "Idadi ya Watoto Waliosaidiwa Kupumua - stimulation",
                    "en ": "Number of Children assisted to beathe - stimulation",
                    "condition ": ""
                },
                "11b_number_of_children_assisted_to_breath_suction ": {
                    "line_number ": "11b",
                    "sw ": "Idadi ya Watoto Waliosaidiwa Kupumua - suction",
                    "en ": "Number of children assisted to breathe - suction",
                    "condition ": ""
                },
                "11c_number_of_children_who_were_assisted_to_breathe_bag_and_mask ": {
                    "line_number ": "11c",
                    "sw ": "Idadi ya Watoto Waliosaidiwa Kupumua - bag and mask",
                    "en ": "Number of Children who were assisted to breathe - bag and mask",
                    "condition ": ""
                },
                "12_other_services ": {
                    "line_number ": "12",
                    "sw ": "Huduma nyinginezo",
                    "en ": "Other Services "
                },
                "12_the_number_of_children_who_were_breastfed_hour_after_birth ": {
                    "line_number ": "12",
                    "sw ": "idadi ya Watoto walionyonyeshwa saa moja baada ya kuzaliwa",
                    "en ": "The number of children who were breastfed hour after birth",
                    "condition ": ""
                },
                "13_those_assessed_24_hours_after_birth ": {
                    "line_number ": "13",
                    "sw ": "Waliofanyiwa tathmini masaa 24 baada ya kuzaliwa",
                    "en ": "Those assessed 24 hours after birth",
                    "condition ": ""
                },
                "14_mother_and_child_given_referral ": {
                    "line_number ": "14",
                    "sw ": "Mama na Mtoto waliopewa rufaa",
                    "en ": "Mother and child given referral",
                    "condition ": ""
                },
                "definitions": {
                    "columns": {
                        "below20": {
                            "title": "Below 20 years old",
                            "condition": "patient.approxage < 20"
                        },
                        "above20": {
                            "title": "Above 20 years old",
                            "condition": "patient.approxage >= 20"
                        },
                        "total": {
                            "title": "Total",
                            "condition": "true"
                        }
                    }
                }
            }
        },
        "report_mutual": {
            "title": "9. Health's Mutual",
            "type": "object",
            "properties": {
                "news_mutual_cases": {
                    "line_number": "1",
                    "fr": "Nouveaux cas mutualis tes",
                    "en": "News mutual cases"
                },
                "including_new_mutual_patients": {
                    "line_number": "2",
                    "fr": "Dont nouveaux patients mutual is tes",
                    "en": "Including new mutual patients"
                },
                "old_mutual_cases": {
                    "line_number": "3",
                    "fr": "Anciens cas mutualis tes",
                    "en": "Old mutual cases"
                },
                "including_contre_refered_mutuals": {
                    "line_number": "4",
                    "fr": "Dont contre-référés mutual is tes",
                    "en": "Including contre- refered mutuals"
                },
                "mutual_eutocic_deliveries": {
                    "line_number": "5",
                    "fr": "Accouchements eutociques mutuali s tes",
                    "en": "Mutual eutocic deliveries"
                },
                "mutual_dystocic_deliveries": {
                    "line_number": "6",
                    "fr": "Accouchements dys toci ques mutual is tes",
                    "en": "Mutual Dystocic deliveries"
                },
                "use_of_services_rate_of_mutual_member_of_the_hc": {
                    "line_number": "7",
                    "line": "singlecell",
                    "fr": "Taux d'utilisation des services par les adhérents de la mutuelle de santé = Nb d’adhérents de mutuelles ayant consulté au CS X 100 / Total des adhérents",
                    "en": "Use of services rate of mutual member of the HC= Nbr of members who were consulted at the HC X100/Total members",
                    "condition": "FIXME"
                },
                "penetration_rate": {
                    "line_number": "8",
                    "line": "singlecell",
                    "fr": "Total Consultations SVS (a+b)",
                    "en": "Penetration rate=nbr of persons who joined an health mutual (Nbr of new mutualistcases + old mutualist cases)X 100/population",
                    "condition": "FIXME"
                }
            },
            "definitions": {
                "columns": {
                    "as": {
                        "fr": "AS",
                        "en": "AS"
                    },
                    "has": {
                        "fr": "HAS",
                        "en": "HAS"
                    },
                    "hz": {
                        "fr": "HZ",
                        "en": "HZ"
                    },
                    "total": {
                        "fr": "Total",
                        "en": "Total"
                    }
                }
            }
        },
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
                    "sw": "Mahudhurio ya OPD",
                    "condition": "FIXME"
                },
                "2": {
                    "line_number": "2",
                    "en": "Patient who visited for the first time this year\n",
                    "sw": "Wagonjwa waliohudhuria kwa mara ya kwanza mwaka huu (*)",
                    "condition": "FIXME"
                },
                "3": {
                    "line_number": "3",
                    "en": "Repeated attendance",
                    "sw": "Mahudhurio ya Marudio",
                    "condition": "FIXME"
                },
                "4": {
                    "line_number": "4",
                    "en": "Acute Flacid Paralysis",
                    "condition": "disease_diagnosis.diagnosis == 'Acute Flacid Paralysis'"
                },
                "5": {
                    "line_number": "5",
                    "en": "Cholera",
                    "condition": "disease_diagnosis.diagnosis == 'Cholera'"
                },
                "6": {
                    "line_number": "6",
                    "en": "Dysentery",
                    "condition": "disease_diagnosis.diagnosis == 'Dysentery'"
                },
                "7": {
                    "line_number": "7",
                    "en": "Measles",
                    "condition": "disease_diagnosis.diagnosis == 'Measles'"
                },
                "8": {
                    "line_number": "8",
                    "en": "Meningitis",
                    "condition": "disease_diagnosis.diagnosis == 'Meningitis'"
                },
                "9": {
                    "line_number": "9",
                    "en": "Neonatal Tetanus",
                    "condition": "disease_diagnosis.diagnosis == 'Neonatal Tetanus'"
                },
                "10": {
                    "line_number": "10",
                    "en": "Plague",
                    "condition": "disease_diagnosis.diagnosis == 'Plague'"
                },
                "11": {
                    "line_number": "11",
                    "en": "Relapsing Fever (Louse borne typhus)",
                    "condition": "disease_diagnosis.diagnosis == 'Relapsing Fever (Louse borne typhus)'"
                },
                "12": {
                    "line_number": "12",
                    "en": "Yellow Fever",
                    "condition": "disease_diagnosis.diagnosis == 'Yellow Fever'"
                },
                "13": {
                    "line_number": "13",
                    "en": "Influenza",
                    "condition": "disease_diagnosis.diagnosis == 'Influenza'"
                },
                "14": {
                    "line_number": "14",
                    "en": "Typhoid",
                    "condition": "disease_diagnosis.diagnosis == 'Typhoid'"
                },
                "15": {
                    "line_number": "15",
                    "en": "Rabies/Suspected rabies bites",
                    "condition": "disease_diagnosis.diagnosis == 'Rabies/Suspected rabies bites'"
                },
                "16": {
                    "line_number": "16",
                    "en": "Trachoma",
                    "condition": "disease_diagnosis.diagnosis == 'Trachoma'"
                },
                "17": {
                    "line_number": "17",
                    "en": "Onchocerciasis",
                    "condition": "disease_diagnosis.diagnosis == 'Onchocerciasis'"
                },
                "18": {
                    "line_number": "18",
                    "en": "Trypanosomiasis",
                    "condition": "disease_diagnosis.diagnosis == 'Trypanosomiasis'"
                },
                "19": {
                    "line_number": "19",
                    "en": "Viral haemorrhagic fevers",
                    "condition": "disease_diagnosis.diagnosis == 'Viral haemorrhagic fevers'"
                },
                "20": {
                    "line_number": "20",
                    "en": "Keratoconjuctivitis",
                    "condition": "disease_diagnosis.diagnosis == 'Keratoconjuctivitis'"
                },
                "21": {
                    "line_number": "21",
                    "en": "Diarrhea, Acute (< 14 days)",
                    "condition": "disease_diagnosis.diagnosis == 'Diarrhea, Acute (< 14 days)'"
                },
                "22": {
                    "line_number": "22",
                    "en": "Diarrhea, Chronic (.> 14 days)",
                    "condition": "disease_diagnosis.diagnosis == 'Diarrhea, Chronic (.> 14 days)'"
                },
                "23": {
                    "line_number": "23",
                    "en": "Malaria",
                    "condition": "disease_diagnosis.diagnosis == 'Malaria'"
                },
                "24": {
                    "line_number": "24",
                    "en": "Schistosomiasis",
                    "condition": "disease_diagnosis.diagnosis == 'Schistosomiasis'"
                },
                "25": {
                    "line_number": "25",
                    "en": "STI Genital Discharge Syndrome (GDS)",
                    "condition": "disease_diagnosis.diagnosis == 'STI Genital Discharge Syndrome (GDS)'"
                },
                "26": {
                    "line_number": "26",
                    "en": "STI Genital Ulcer Diseases (GUD)",
                    "condition": "disease_diagnosis.diagnosis == 'STI Genital Ulcer Diseases (GUD)'"
                },
                "27": {
                    "line_number": "27",
                    "en": "STI Pelvic Inflammatory Diseases (PID)",
                    "condition": "disease_diagnosis.diagnosis == 'STI Pelvic Inflammatory Diseases (PID)'"
                },
                "28": {
                    "line_number": "28",
                    "en": "Sexually Transmitted Infections, Other",
                    "condition": "disease_diagnosis.diagnosis == 'Sexually Transmitted Infections, Other'"
                },
                "29": {
                    "line_number": "29",
                    "en": "Tuberculosis",
                    "condition": "disease_diagnosis.diagnosis == 'Tuberculosis'"
                },
                "30": {
                    "line_number": "30",
                    "en": "Leprosy",
                    "condition": "disease_diagnosis.diagnosis == 'Leprosy'"
                },
                "31": {
                    "line_number": "31",
                    "en": "Intestinal Worms",
                    "condition": "disease_diagnosis.diagnosis == 'Intestinal Worms'"
                },
                "32": {
                    "line_number": "32",
                    "en": "Anaemia, Mild / Moderate ",
                    "condition": "disease_diagnosis.diagnosis == 'Anaemia, Mild / Moderate '"
                },
                "33": {
                    "line_number": "33",
                    "en": "Anaemia, Severe",
                    "condition": "disease_diagnosis.diagnosis == 'Anaemia, Severe'"
                },
                "34": {
                    "line_number": "34",
                    "en": "Sickle cell Disease ",
                    "condition": "disease_diagnosis.diagnosis == 'Sickle cell Disease '"
                },
                "35": {
                    "line_number": "35",
                    "en": "HIV Positive",
                    "condition": "disease_diagnosis.diagnosis == 'HIV Positive'"
                },
                "36": {
                    "line_number": "36",
                    "en": "HIV Infection, Symptomatic",
                    "condition": "disease_diagnosis.diagnosis == 'HIV Infection, Symptomatic'"
                },
                "37": {
                    "line_number": "37",
                    "en": "Ear Infection, Acute",
                    "condition": "disease_diagnosis.diagnosis == 'Ear Infection, Acute'"
                },
                "38": {
                    "line_number": "38",
                    "en": "Ear Infection, Chronic",
                    "condition": "disease_diagnosis.diagnosis == 'Ear Infection, Chronic'"
                },
                "39": {
                    "line_number": "39",
                    "en": "Eye Infection",
                    "condition": "disease_diagnosis.diagnosis == 'Eye Infection'"
                },
                "40": {
                    "line_number": "40",
                    "en": "Cataract",
                    "condition": "disease_diagnosis.diagnosis == 'Cataract'"
                },
                "41": {
                    "line_number": "41",
                    "en": "Eye Diseases, Other non-infectious",
                    "condition": "disease_diagnosis.diagnosis == 'Eye Diseases, Other non-infectious'"
                },
                "42": {
                    "line_number": "42",
                    "en": "Skin Infection, Non-Fungal",
                    "condition": "disease_diagnosis.diagnosis == 'Skin Infection, Non-Fungal'"
                },
                "43": {
                    "line_number": "43",
                    "en": "Skin Infection, Fungal",
                    "condition": "disease_diagnosis.diagnosis == 'Skin Infection, Fungal'"
                },
                "44": {
                    "line_number": "44",
                    "en": "Skin Diseases, Non-infectious",
                    "condition": "disease_diagnosis.diagnosis == 'Skin Diseases, Non-infectious'"
                },
                "45": {
                    "line_number": "45",
                    "en": "Fungal Infection, Non-skin",
                    "condition": "disease_diagnosis.diagnosis == 'Fungal Infection, Non-skin'"
                },
                "46": {
                    "line_number": "46",
                    "en": "Osteomyelitis",
                    "condition": "disease_diagnosis.diagnosis == 'Osteomyelitis'"
                },
                "47": {
                    "line_number": "47",
                    "en": "Neonatal sepsis",
                    "condition": "disease_diagnosis.diagnosis == 'Neonatal sepsis'"
                },
                "48": {
                    "line_number": "48",
                    "en": "Low birth weight and Prematurity complications",
                    "condition": "disease_diagnosis.diagnosis == 'Low birth weight and Prematurity complications'"
                },
                "49": {
                    "line_number": "49",
                    "en": "Birth asphyxia",
                    "condition": "disease_diagnosis.diagnosis == 'Birth asphyxia'"
                },
                "50": {
                    "line_number": "50",
                    "en": "Acute Respiratory Infection (ARI)",
                    "condition": "disease_diagnosis.diagnosis == 'Acute Respiratory Infection (ARI)'"
                },
                "51": {
                    "line_number": "51",
                    "en": "Pneumonia, Non-Severe",
                    "condition": "disease_diagnosis.diagnosis == 'Pneumonia, Non-Severe'"
                },
                "52": {
                    "line_number": "52",
                    "en": "Cerebral palsy",
                    "condition": "disease_diagnosis.diagnosis == 'Cerebral palsy'"
                },
                "53": {
                    "line_number": "53",
                    "en": "Pneumonia, Severe",
                    "condition": "disease_diagnosis.diagnosis == 'Pneumonia, Severe'"
                },
                "54": {
                    "line_number": "54",
                    "en": "Upper Respiratory Infections (Pharyngitis, Tonsillitis, Rhinitis)",
                    "condition": "disease_diagnosis.diagnosis == 'Upper Respiratory Infections (Pharyngitis, Tonsillitis, Rhinitis)'"
                },
                "55": {
                    "line_number": "55",
                    "en": "Urinary Tract Infections (UTI)",
                    "condition": "disease_diagnosis.diagnosis == 'Urinary Tract Infections (UTI)'"
                },
                "56": {
                    "line_number": "56",
                    "en": "Gynaecological diseases, Other",
                    "condition": "disease_diagnosis.diagnosis == 'Gynaecological diseases, Other'"
                },
                "57": {
                    "line_number": "57",
                    "en": "Kwashiokor",
                    "condition": "disease_diagnosis.diagnosis == 'Kwashiokor'"
                },
                "58": {
                    "line_number": "58",
                    "en": "Marasmus",
                    "condition": "disease_diagnosis.diagnosis == 'Marasmus'"
                },
                "59": {
                    "line_number": "59",
                    "en": "Marasmic Kwashiokor",
                    "condition": "disease_diagnosis.diagnosis == 'Marasmic Kwashiokor'"
                },
                "60": {
                    "line_number": "60",
                    "en": "Moderate Malnutrition",
                    "condition": "disease_diagnosis.diagnosis == 'Moderate Malnutrition'"
                },
                "61": {
                    "line_number": "61",
                    "en": "Vitamin A Deficiency",
                    "condition": "disease_diagnosis.diagnosis == 'Vitamin A Deficiency'"
                },
                "62": {
                    "line_number": "62",
                    "en": "Other Nutritional Disorders",
                    "condition": "disease_diagnosis.diagnosis == 'Other Nutritional Disorders'"
                },
                "63": {
                    "line_number": "63",
                    "en": "Caries",
                    "condition": "disease_diagnosis.diagnosis == 'Caries'"
                },
                "64": {
                    "line_number": "64",
                    "en": "Periodontal Diseases",
                    "condition": "disease_diagnosis.diagnosis == 'Periodontal Diseases'"
                },
                "65": {
                    "line_number": "65",
                    "en": "Dental Emergency Care",
                    "condition": "disease_diagnosis.diagnosis == 'Dental Emergency Care'"
                },
                "66": {
                    "line_number": "66",
                    "en": "Dental Conditions, Other",
                    "condition": "disease_diagnosis.diagnosis == 'Dental Conditions, Other'"
                },
                "67": {
                    "line_number": "67",
                    "en": "Fractures / Dislocations",
                    "condition": "disease_diagnosis.diagnosis == 'Fractures / Dislocations'"
                },
                "68": {
                    "line_number": "68",
                    "en": "Burn",
                    "condition": "disease_diagnosis.diagnosis == 'Burn'"
                },
                "69": {
                    "line_number": "69",
                    "en": "Poisoning",
                    "condition": "disease_diagnosis.diagnosis == 'Poisoning'"
                },
                "70": {
                    "line_number": "70",
                    "en": "Road Traffic Accidents",
                    "condition": "disease_diagnosis.diagnosis == 'Road Traffic Accidents'"
                },
                "71": {
                    "line_number": "71",
                    "en": "Pregnancy complications",
                    "condition": "disease_diagnosis.diagnosis == 'Pregnancy complications'"
                },
                "72": {
                    "line_number": "72",
                    "en": "Abortion",
                    "condition": "disease_diagnosis.diagnosis == 'Abortion'"
                },
                "73": {
                    "line_number": "73",
                    "en": "Snake and Insect Bites",
                    "condition": "disease_diagnosis.diagnosis == 'Snake and Insect Bites'"
                },
                "74": {
                    "line_number": "74",
                    "en": "Emergencies, Other",
                    "condition": "disease_diagnosis.diagnosis == 'Emergencies, Other'"
                },
                "75": {
                    "line_number": "75",
                    "en": "Surgical conditions, other",
                    "condition": "disease_diagnosis.diagnosis == 'Surgical conditions, other'"
                },
                "76": {
                    "line_number": "76",
                    "en": "Epilepsy",
                    "condition": "disease_diagnosis.diagnosis == 'Epilepsy'"
                },
                "77": {
                    "line_number": "77",
                    "en": "Psychoses",
                    "condition": "disease_diagnosis.diagnosis == 'Psychoses'"
                },
                "78": {
                    "line_number": "78",
                    "en": "Neurosis",
                    "condition": "disease_diagnosis.diagnosis == 'Neurosis'"
                },
                "79": {
                    "line_number": "79",
                    "en": "Mental conditions, Other",
                    "condition": "disease_diagnosis.diagnosis == 'Mental conditions, Other'"
                },
                "80": {
                    "line_number": "80",
                    "en": "Hypertension",
                    "condition": "disease_diagnosis.diagnosis == 'Hypertension'"
                },
                "81": {
                    "line_number": "81",
                    "en": "Rheumatic Fever",
                    "condition": "disease_diagnosis.diagnosis == 'Rheumatic Fever'"
                },
                "82": {
                    "line_number": "82",
                    "en": "Cardiovascular Diseases, Other",
                    "condition": "disease_diagnosis.diagnosis == 'Cardiovascular Diseases, Other'"
                },
                "83": {
                    "line_number": "83",
                    "en": "Bronchial Asthma",
                    "condition": "disease_diagnosis.diagnosis == 'Bronchial Asthma'"
                },
                "84": {
                    "line_number": "84",
                    "en": "Peptic Ulcers",
                    "condition": "disease_diagnosis.diagnosis == 'Peptic Ulcers'"
                },
                "85": {
                    "line_number": "85",
                    "en": "GIT Diseases, Other Non-infectious",
                    "condition": "disease_diagnosis.diagnosis == 'GIT Diseases, Other Non-infectious'"
                },
                "86": {
                    "line_number": "86",
                    "en": "Diabetes Mellitus",
                    "condition": "disease_diagnosis.diagnosis == 'Diabetes Mellitus'"
                },
                "87": {
                    "line_number": "87",
                    "en": "Rheumatoid and Joint Diseases",
                    "condition": "disease_diagnosis.diagnosis == 'Rheumatoid and Joint Diseases'"
                },
                "88": {
                    "line_number": "88",
                    "en": "Thyroid Diseases",
                    "condition": "disease_diagnosis.diagnosis == 'Thyroid Diseases'"
                },
                "89": {
                    "line_number": "89",
                    "en": "Neoplasms",
                    "condition": "disease_diagnosis.diagnosis == 'Neoplasms'"
                },
                "90": {
                    "line_number": "90",
                    "en": "Ill Defined Symptoms (no Diagnosis)",
                    "condition": "disease_diagnosis.diagnosis == 'Ill Defined Symptoms (no Diagnosis)'"
                },
                "91": {
                    "line_number": "91",
                    "en": "Diagnoses, Other",
                    "condition": "disease_diagnosis.diagnosis == 'Diagnoses, Other'"
                },
                "92": {
                    "line_number": "92",
                    "en": "Waliopewa Rufaa",
                    "condition": "disease_diagnosis.diagnosis == 'Waliopewa Rufaa'"
                },
                "": {
                    "en": "Diagnoses for OPD",
                    "sw": "Diagnoses za OPD"
                },
                "23a": {
                    "line_number": "23a",
                    "en": "Blood Slide positive",
                    "condition": "disease_diagnosis.diagnosis == 'Blood Slide positive'"
                },
                "23b": {
                    "line_number": "23b",
                    "en": "mRDT postivie",
                    "condition": "disease_diagnosis.diagnosis == 'mRDT postivie'"
                },
                "23c": {
                    "line_number": "23c",
                    "en": "Clinical (No Test)",
                    "condition": "disease_diagnosis.diagnosis == 'Clinical (No Test)'"
                },
                "23d": {
                    "line_number": "23d",
                    "en": "In Pregnancy",
                    "condition": "disease_diagnosis.diagnosis == 'In Pregnancy'"
                },
                "definitions": {
                    "columns": {
                        "lessthan1male": {
                            "title": "Males",
                            "condition": "FIXME && patient.gender == 'male'"
                        },
                        "lessthan1female": {
                            "title": "Less than 1 Month - Females",
                            "condition": "FIXME && patient.gender == 'female'"
                        },
                        "lessthan1total": {
                            "title": "Less than 1 Month - Total",
                            "condition": "FIXME"
                        },
                        "more1momale": {
                            "title": "More than 1 month and less than 1 Year - Male",
                            "condition": "FIXME && patient.gender == 'male'"
                        },
                        "more1mofemale": {
                            "title": "More than 1 month and less than 1 Year - Females",
                            "condition": "FIXME && patient.gender == 'female'"
                        },
                        "more1mototal": {
                            "title": "More than 1 month and less than 1 Year - Total",
                            "condition": "FIXME "
                        },
                        "above1below5male": {
                            "title": "More than 1 year and less than 5 Years - Male",
                            "condition": "patient.approxage > 1 && patient.approxage < 5 && patient.gender == 'male'"
                        },
                        "above1below5female": {
                            "title": "More than 1 year and less than 5 Years - Females",
                            "condition": "patient.approxage > 1 && patient.approxage < 5 && patient.gender == 'female'"
                        },
                        "above1below5total": {
                            "title": "More than 1 year and less than 5 Years - Total",
                            "condition": "patient.approxage > 1 && patient.approxage < 5"
                        }
                    }
                }
            }
        },
        "report_pmtct": {
            "title": "3.2 PMTCT",
            "type": "object",
            "properties": {
                "who_know_their_hiv_status_before_anc_1": {
                    "line_number": "1",
                    "fr": "Qui connaissent leur statut sérologique VIH avant l a CPN1",
                    "en": "Who know their HIV status before ANC 1"
                },
                "who_were_counseled_for_hiv_test": {
                    "line_number": "2",
                    "fr": "Qui ont été conseillée pour un test VIH",
                    "en": "Who were counseled for HIV test"
                },
                "who_were_hiv_tested": {
                    "line_number": "3",
                    "fr": "Qui ont été testées pour le VIH",
                    "en": "Who were HIV tested"
                },
                "who_were_informed_about_their_result": {
                    "line_number": "4",
                    "fr": "Qui ont été informées du résultat",
                    "en": "who were informed about their result"
                },
                "who_had_hiv_test": {
                    "line_number": "5",
                    "fr": "Qui ont eu un test positif au VIH",
                    "en": "Who had HIV+ test"
                },
                "who_had_hiv_test_and_were_informed_about_their_results": {
                    "line_number": "6",
                    "fr": "Qui ont eu un test positif au VIH et ont été informées du résultat",
                    "en": "Who had HIV+ test and were informed about their results"
                },
                "who_are_hiv_and_beneficiated_a_prophylaxie_at_arv_azt_3tc_nvp)": {
                    "line_number": "7",
                    "fr": "Qui sont VIH+ ayant bénéficié de la prophylaxie aux ARV (AZT /AZT+3TC+NVP)",
                    "en": "Who are HIV+ and beneficiated a prophylaxie at ARV (AZT+3TC+NVP)"
                },
                "who_are_hiv_and_beneficiated_a_prophylaxie_and_cotrimoxazole": {
                    "line_number": "8",
                    "fr": "Qui sont VIH+ ayant bénéficié de la prophylaxie au cotrimoxazole",
                    "en": "Who are HIV+ and beneficiated a prophylaxie and cotrimoxazole"
                },
                "who_are_hiv_and_refered_to_a_pec_center": {
                    "line_number": "9",
                    "fr": "Qui sont VIH+ qui sont référées vers une structure de PEC",
                    "en": "Who are HIV+ and refered to a PEC center"
                },
                "tested_and_informed_about_their_results_during_labour_delivery_and_post_portum_72": {
                    "line_number": "10",
                    "fr": "Testées et informées de leur résultat lors du trava il, accouchement et post partum (72 h)",
                    "en": "Tested and informed about their results during labour, delivery and post-portum (72)"
                },
                "pregnant_women_put_under_arvt": {
                    "line_number": "11",
                    "fr": "Femmes enceintes ont été mis sous TARV",
                    "en": "Pregnant women put under ARVT"
                },
                "who_were_pregnants_after_being_raped": {
                    "line_number": "12",
                    "fr": "Qui ont eu la grossesse à lissue dun Viol",
                    "en": "Who were pregnants after being raped"
                },
                "hiv_mother_who_opted_the_breast_feeding_up_to_6_months": {
                    "line_number": "13",
                    "fr": "Mères VIH+ ayant opté pour lallaitement exclusif jusquà 6 mois",
                    "en": "HIV+ mother who opted the breast feeding up to 6 months"
                },
                "who_were_tested_for_ghonorrhea": {
                    "line_number": "14",
                    "fr": "?",
                    "en": "Who were tested for Ghonorrhea"
                },
                "hiv_mother_put_under_double_protection_pf_preservatif": {
                    "line_number": "15",
                    "fr": "Dont mères VIH+ mises sous double protection (PF+ préservatif)",
                    "en": "HIV+ mother put under double protection (PF+ preservatif)"
                },
                "delivered_hiv": {
                    "line_number": "16",
                    "fr": "?",
                    "en": "Delivered HIV+"
                },
                "including_those_have_received_the_nevirapine_azt_lav": {
                    "line_number": "17",
                    "fr": "Dont ayant reçu de la névirapine + AZT+LAV",
                    "en": "Including those have received the Nevirapine + AZT + LAV"
                },
                "children_born_from_hiv_mothers_who_were_put_under_nevirapine_at_birth": {
                    "line_number": "18",
                    "fr": "Enfants nés de mère VIH+",
                    "en": "Children born from HIV+ mothers who were put under nevirapine at birth."
                },
                "who_were_put_under_cotrimoxazole_during_6_weeks_after_birth": {
                    "line_number": "19",
                    "fr": "Dont mis sous cotrimoxazole pendant 6 semaines après la naissance",
                    "en": "Who were put under cotrimoxazole during 6 weeks after birth"
                },
                "who_were_put_under_nevirapine_during_the_12_months_after_birth": {
                    "line_number": "20",
                    "fr": "Dont mis sous NVP pendant 12 mois après la naissance",
                    "en": "Who were put under Nevirapine during the 12 months after birth"
                },
                "exposed_children_who_were_tested_hiv_at_pcr_1_after_6_weeks_after_birth": {
                    "line_number": "21",
                    "fr": "Enfants exposés reçus et testés au PCR1 à 6 semaines après la naissance",
                    "en": "Exposed children who were tested HIV+ at PCR 1 after 6 weeks after birth"
                },
                "exposed_children_who_were_tested_at_pcr_2_at_10_weeks_after_birth": {
                    "line_number": "22",
                    "fr": "Enfants exposés reçus et testés au PCR2 à 10 semaines après la naissance",
                    "en": "Exposed children who were tested at PCR 2 at 10 weeks after birth"
                },
                "exposed_children_who_were_tested_hiv_at_pcr2_at_10_weeks_after_birth": {
                    "line_number": "23",
                    "fr": "Enfants exposés testés positifs au PCR2 à 10 semai nes après la naissance",
                    "en": "Exposed children who were tested HIV+at PCR2 at 10 weeks after birth"
                },
                "exposed_children_tested_at_pcr1_who_receiveda_hiv_test_at_12_months": {
                    "line_number": "24",
                    "fr": "Enfants exposés testés au PCR1 ayant bénéficié d'untest séro. à 12 mois",
                    "en": "Exposed children tested at PCR1 who receiveda HIV test at 12 months"
                }
            },
            "definitions": {
                "columns": {
                    "number": {
                        "fr": "Nombre",
                        "en": "Number"
                    }
                }
            }
        },
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
                    "sw": "Waliohudhuria Ndani ya saa 24",
                    "en": "Attendees Within 24 hours",
                    "condition": "patient.age < 1 && postnatal.days_postpartum <= 1"
                },
                "attendess_between_2_and_7_days": {
                    "line_number": "1b",
                    "sw": "Waliohudhuria kati ya siku ya 2-7",
                    "en": "Attendees between 2-7 days",
                    "condition": "patient.age > 1 && postnatal.days_postpartum >= 2 && postnatal.days_postpartum <= 7"
                },
                "total_attendees_within_7_days": {
                    "line_number": "1c",
                    "sw": "Jumla Waliohudhuria ndani ya siku 7 (la+lb)",
                    "en": "Total attendees within 7 days",
                    "condition": "patient.age > 1 && postnatal.days_postpartum <= 7"
                },
                "those_who_finished_all_visits_24_hours_days_2_and_7_day_28_day_42": {
                    "line_number": "2a",
                    "sw": "Waliomaliza mahudhurio yote (saa 24, siku 2-7, siku 28, siku 42)",
                    "en": "Those who finished all visits (24 hours, days 2-7, day 28, day 42)",
                    "condition": "FIXME"
                },
                "those_with_severe_anema": {
                    "line_number": "3",
                    "sw": "Wenye upungufu mkubwa wa damu (Hb < 8.5 g/dl)",
                    "en": "Those with severe anemia (Hb <8.5 g / dl)",
                    "condition": "postnatal.anemia_severe == '<8.5g/dl'"
                },
                "those_with_mental_disorder": {
                    "line_number": "4",
                    "sw": "Waliopata matatizo ya akili",
                    "en": "Those with mental disorder",
                    "condition": "postnatal.maternal_diagnoses == 'mental disorder'"
                },
                "those_given_vita": {
                    "line_number": "5",
                    "sw": "Waliopata Vit.A",
                    "en": "Those given Vit.A",
                    "condition": "postnatal.given_vitamina"
                },
                "those_with_gaping_or_infected_perineum": {
                    "line_number": "6",
                    "sw": "Wenye msamba ulioambukizwa/Ulioachia",
                    "en": "Those with gaping or infected perineum",
                    "condition": "postnatal.maternal_diagnoses == 'gaping or infected perineum'"
                },
                "those_with_fistula": {
                    "line_number": "7",
                    "sw": "Wenyc fistula",
                    "en": "Those with fistula",
                    "condition": "postnatal.maternal_diagnoses == 'fistula'"
                },
                "those_who_delivered_outside_the_health_centre_bba_tba_home_etc": {
                    "line_number": "8",
                    "sw": "Waliojifungulia Nje ya kituo cha kutoa huduma za Afya (BBA,TBA, Nyumbani etc)",
                    "en": "Those who delivered outside the Health Centre(BBA, TBA, Home etc)",
                    "condition": "postnatal.delivered_outside"
                },
                "number_of_those_who_delivered_at_home": {
                    "line_number": "9",
                    "sw": "Idadi ya waliojifungulia nyumbani",
                    "en": "number of those who delivered at home",
                    "condition": "postnatal.delivered_outside == false"
                },
                "family_planning": {
                    "line_number": "10",
                    "sw": "Uzazi wa Mpango",
                    "en": "family planning"
                },
                "ones_who_received_counseling": {
                    "line_number": "10a",
                    "sw": "Waliopata ushauri nasaha",
                    "en": "Those who received counseling",
                    "condition": "postnatal.family_planning_counseling"
                },
                "those_received_methods_of_family_planning": {
                    "line_number": "10b",
                    "sw": "Waliopata njia za Uzazi wa Mpango",
                    "en": "Those who received methods of family planning",
                    "condition": "postnatal.family_planning_method_after_delivery"
                },
                "those_received_family_planning_methods_after_miscarriage": {
                    "line_number": "10c",
                    "sw": "Waliopata njia za Uzazi wa mpango baada ya mimba kuharibika",
                    "en": "Those who received family planning methods after miscarriage",
                    "condition": "postnatal.family_planning_method_after_miscarriage"
                },
                "those_who_used_methods_of_contraception_within_40_days_after_delivery": {
                    "line_number": "10d",
                    "sw": "Waliopata njia za uzazi wa mpango kwenye arobaini ya uzazi",
                    "en": "Those who used methods of contraception within 40 days after delivery",
                    "condition": "postnatal.contraception_within_40_days"
                },
                "ptmct": {
                    "line_number": "11",
                    "sw": "PTMCT",
                    "en": "PTMCT"
                },
                "that_came_as_positive_during_postnatal": {
                    "line_number": "11a",
                    "sw": "Waliokuja postnata wakiwa positive",
                    "en": "That came as positive during postnatal",
                    "condition": "postnatal.postnatal_hiv_positive"
                },
                "those_tested_for_hiv_during_postnatal_within_42_days_from_delivery": {
                    "line_number": "11b",
                    "sw": "Waliopima VVU wakati wa postnatal (ndani ya siku 42 tangu kujifungua)",
                    "en": "Those tested for HIV during postnatal (within 42 days from delivery)",
                    "condition": "postnatal.days_postpartum < 42 && postnatal.postnatal_hiv_test"
                },
                "those_who_were_found_hiv_positive_during_postnatal_within_42_days_from_delivery": {
                    "line_number": "11c",
                    "sw": "Waliogundulika wana VVU wakati wa postnatal (ndani ya siku 42 tangu kujifungua)",
                    "en": "Those who were found HIV positive during postnatal (within 42 days from delivery)",
                    "condition": "postnatal.days_postpartum < 42 && postnatal.postnatal_hiv_positive"
                },
                "people_with_hiv_who_chose_to_breastfeed_exclusively_breastfed_ebf": {
                    "line_number": "11d",
                    "sw": "Wenye VVU waliochagua kunyonyesha maziwa ya mama pekee (EBF)",
                    "en": "People with HIV who chose to breastfeed exclusively breastfed ( EBF )",
                    "condition": "postnatal.postnatal_hiv_positive && postnatal.milk_type == 'Mother's Milk ONLY'"
                },
                "people_with_hiv_who_chose_to_use_milk_substitute_rf": {
                    "line_number": "11e",
                    "sw": "Wenye VVU waliochagua kunywesha maziwa mbadala (RF)",
                    "en": "People with HIV who chose to use milk substitute ( RF )",
                    "condition": "postnatal.postnatal_hiv_positive && postnatal.milk_type != 'Mother's Milk ONLY'"
                },
                "child": {
                    "line_number": "12",
                    "sw": "MTOTO",
                    "en": "CHILD"
                },
                "attendees_between_2_and_7_days": {
                    "line_number": "12b",
                    "sw": "Waliohudhuria kati ya siku ya 2-7",
                    "en": "Attendees between 2-7 days",
                    "condition": "patient.age < 1 && postnatal.days_postpartum >= 2 && postnatal.days_postpartum <= 7"
                },
                "attendees_total_within_7_days": {
                    "line_number": "12c",
                    "sw": "Jumla Waliohudhuria ndani ya siku 7 (la+lb)",
                    "en": "Attendees total within 7 days (la + lb )",
                    "condition": "patient.age < 1 && postnatal.days_postpartum <= 7"
                },
                "those_who_finished_all_visits": {
                    "line_number": "12d",
                    "sw": "Waliomaliza mahudhurio yote (saa 24, siku 2-7, siku 28, siku 42)",
                    "en": "Those who finished  all visits (24 hours , days 2-7 , day 28, day 42 )",
                    "condition": "FIXME"
                },
                "child_services": {
                    "line_number": "13",
                    "sw": "HUDUMA KWA MTOTO",
                    "en": "CHILD SERVICES"
                },
                "number_of_children_who_received_bcg": {
                    "line_number": "13a",
                    "sw": "Idadi ya watoto waliopewa BCG",
                    "en": "Number of children who received BCG",
                    "condition": "postnatal.bcg_opv == 'bcg'"
                },
                "number_of_children_who_received_opv_0": {
                    "line_number": "13b",
                    "sw": "Idadi ya watoto waliopewa OPV 0",
                    "en": "Number of children who received OPV 0",
                    "condition": "postnatal.bcg_opv == 'opv-0'"
                },
                "the_number_of_children_born_with_a_low_weight_were_given_kmc": {
                    "line_number": "13c",
                    "sw": "Idadi ya watoto waliozaliwa na uzito wa < 2.5kg wakapatiwa KMC",
                    "en": "The number of children born with a weight of < 2.5 kg were given KMC",
                    "condition": "FIXME"
                },
                "number_of_children_at_home_under_the_born_low_weight": {
                    "line_number": "13d",
                    "sw": "Idadi ya watoto walozaliwa nyumbani chini ya 2.5kg",
                    "en": "Number of children at home under the born 2.5kg",
                    "condition": "postnatal.delivered_outside && postnatal.less_than_2.5kg"
                },
                "number_of_babies_born_at_home_were_started_on_kangaroo_care_kmc": {
                    "line_number": "13e",
                    "sw": "Idadi ya watoto waliozaliwa nyumbani walioanzishiwa huduma ya kangaroo (KMC)",
                    "en": "Number of babies born at home were started on kangaroo care ( KMC )",
                    "condition": "postnatal.delivered_outside && postnatal.kangaroo_care"
                },
                "with_severe_anemia": {
                    "line_number": "13f",
                    "sw": "Wenye upungufu mkubwa wa damu (Hb < 10 g/dl au viganja vyeupe sana)",
                    "en": "With severe anemia ( Hb < 10 g / dl or very white hands )",
                    "condition": "patient.age < 1 && postnatal.anemia_severe == '<8.5g/dl'"
                },
                "infections_of_the_child": {
                    "line_number": "14",
                    "sw": "UAMBUKIZO WA MTOTO",
                    "en": "INFECTIONS OF THE CHILD"
                },
                "children_with_severe_infections_septicaemia": {
                    "line_number": "14a",
                    "sw": "Watoto wenye uambukizo mkali (septicaemia)",
                    "en": "Children with severe infections ( septicemia )",
                    "condition": "postnatal.child_diagnoses == 'septicemia'"
                },
                "children_with_umbilical_cord_infection": {
                    "line_number": "14b",
                    "sw": "Watoto wenye uambukizo kwenye kitovu",
                    "en": "Children with umbilical cord infection",
                    "condition": "postnatal.child_diagnoses == 'umbilical cord infection'"
                },
                "children_with_skin_infection": {
                    "line_number": "14c",
                    "sw": "Watoto wenye uambukizo kwenye ngozi",
                    "en": "Children with skin infection",
                    "condition": "postnatal.child_diagnoses == 'skin infection'"
                },
                "deaths_of_infants_born_at_home_prenatal_and_neonatal": {
                    "line_number": "15",
                    "sw": "Vifo vya watoto wachanga waliozaliwa nyumbani (perinatal); neonatal",
                    "en": "Deaths of infants born at home ( perinatal ) , neonatal",
                    "condition": "postnatal.delivered_outside && postnatal.child_diagnoses == 'neonatal death'"
                },
                "those_received_methods_of_family_planning_after_miscarriage": {
                    "line_number": "16",
                    "sw": "Waliopata njia za Uzazi wa mpango baada ya mimba kuharibika",
                    "en": "Those received methods of Family Planning after miscarriage",
                    "condition": "postnatal.family_planning_method_after_delivery"
                },
                "infant_feeding": {
                    "line_number": "17",
                    "sw": "ULISHAJI WA MTOTO",
                    "en": "INFANT FEEDING"
                },
                "infants_who_are_breastfed_exclusively_breastfed_ebf": {
                    "line_number": "17a",
                    "sw": "Watoto wachanga wanaonyonya maziwa ya mama pekee (EBF)",
                    "en": "Infants who are breastfed exclusively breastfed ( EBF )",
                    "condition": "postnatal.milk_type == 'Mother's Milk ONLY'"
                },
                "infants_who_drik_milk_substitute_rf": {
                    "line_number": "17b",
                    "sw": "Watoto wachanga wanaonyweshwa maziwa mbadala (RF)",
                    "en": "Infants who drink milk substitute ( RF )",
                    "condition": "postnatal.milk_type != 'Mother's Milk ONLY' && postnatal.milk_type != 'Mother's Milk + Other'"
                },
                "infants_who_drink_breast_milk_and_other_food_access_mf": {
                    "line_number": "17c",
                    "sw": "Watoto wachanga wanaonyweshwa maziwa ya mama na kupatiwa chakula kingine (MF)",
                    "en": "Infants who drink breast milk and other food access ( MF )",
                    "condition": "postnatal.milk_type == 'Mother's Milk + Other'"
                },
                "definitions": {
                    "columns": {
                        "below20": {
                            "title": "Below 20 years old",
                            "condition": "patient.approxage < 20"
                        },
                        "above20": {
                            "title": "Above 20 years old",
                            "condition": "patient.approxage >= 20"
                        },
                        "total": {
                            "title": "Total",
                            "condition": "true"
                        }
                    }
                }
            }
        },
        "report_pregnant_1": {
            "title": "3.4 Pregnant women vaccination",
            "type": "object",
            "properties": {
                "vat_1": {
                    "line_number": "1",
                    "fr": "VAT 1",
                    "en": "VAT 1"
                },
                "vat_2": {
                    "line_number": "2",
                    "fr": "VAT 2",
                    "en": "VAT 2"
                },
                "vat_3": {
                    "line_number": "3",
                    "fr": "VAT 3",
                    "en": "VAT 3"
                },
                "vat_4": {
                    "line_number": "4",
                    "fr": "VAT 4",
                    "en": "VAT 4"
                },
                "vat_5": {
                    "line_number": "5",
                    "fr": "VAT 5",
                    "en": "VAT 5"
                }
            },
            "definitions": {
                "columns": {
                    "as": {
                        "fr": "AS",
                        "en": "AS"
                    },
                    "has": {
                        "fr": "HAS",
                        "en": "HAS"
                    },
                    "hz": {
                        "fr": "HZ",
                        "en": "HZ"
                    },
                    "total": {
                        "fr": "TOTAL",
                        "en": "TOTAL"
                    }
                }
            },
            "parent": "report_pregnant"
        },
        "report_pregnant_2": {
            "title": "3.5.1 Deliveries at the Health center",
            "type": "object",
            "properties": {
                "eutocic_deliveries": {
                    "line_number": "1",
                    "fr": "Accouchements eutociques",
                    "en": "Eutocic deliveries"
                },
                "dystocic_deliveries": {
                    "line_number": "2",
                    "fr": "Accouchements dystociques",
                    "en": "Dystocic deliveries"
                },
                "including_20_yrs": {
                    "line_number": "3",
                    "fr": "Dont âgés de < 20 an",
                    "en": "Including < 20 yrs"
                },
                "including_watched_out": {
                    "line_number": "4",
                    "fr": "Dont surveillés",
                    "en": "Including watched out"
                },
                "mother_who_beneficiated_gatpa": {
                    "line_number": "5",
                    "fr": "Mère ayant bénéficié de la GATPA",
                    "en": "Mother who beneficiated GATPA"
                }
            },
            "definitions": {
                "columns": {
                    "as": {
                        "fr": "AS",
                        "en": "AS"
                    },
                    "has": {
                        "fr": "HAS",
                        "en": "HAS"
                    },
                    "hz": {
                        "fr": "HZ",
                        "en": "HZ"
                    },
                    "total": {
                        "fr": "TOTAL",
                        "en": "TOTAL"
                    }
                }
            },
            "parent": "report_pregnant"
        },
        "report_pregnant_3": {
            "title": "3.5.2 Delveries in the community",
            "type": "object",
            "properties": {
                "eutocic_deliveries": {
                    "line_number": "1",
                    "fr": "Accouchements par accoucheuse traditionnelle",
                    "en": "Deliveries assisted by TBA"
                },
                "dystocic_deliveries": {
                    "line_number": "2",
                    "fr": "Dont Accouchements par accoucheuses traditionnellesrecyclées",
                    "en": "Including deliverie by trained TBAs"
                },
                "including_20_yrs": {
                    "line_number": "3",
                    "fr": "Dont référés au CS",
                    "en": "Including the refered to Health center"
                },
                "including_watched_out": {
                    "line_number": "4",
                    "fr": "Total accouchement dans la communauté",
                    "en": "Total deliveries in the community"
                },
                "rate_of_deliveries_assited_by_qualified_personnel": {
                    "line_number": "5",
                    "line": "singlecell",
                    "fr": "Taux d'accouchements assistés par du personnel qualifié = Nb total d’Accouchements en présence d'un personnelqualifié/formé X 100 / Total accouchements attendus",
                    "en": "rate of deliveries assited by qualified personnel=tottal of deliveries in presence of one qualified personnel/trainedX100/total number of deliveries attended",
                    "condition": "FIXME"
                }
            },
            "definitions": {
                "columns": {
                    "number": {
                        "fr": "Nombre",
                        "en": "Number"
                    }
                }
            },
            "parent": "report_pregnant"
        },
        "report_pregnant_4": {
            "title": "3.5.3 Births and deaths",
            "type": "object",
            "properties": {
                "alive_births": {
                    "line_number": "1",
                    "fr": "Naissances vivantes",
                    "en": "Alive births"
                },
                "births_at_the_health_center": {
                    "line_number": "2",
                    "fr": "Naissances CS",
                    "en": "Births at the health center"
                },
                "mature_nbb": {
                    "line_number": "3",
                    "fr": "Nouveaux-nés à terme",
                    "en": "Mature NBB"
                },
                "mature_nbb_2500g": {
                    "line_number": "4",
                    "fr": "Nouveaux-nés à terme < 2 500 g",
                    "en": "Mature NBB < 2500g"
                },
                "fresh_stillborn_babies": {
                    "line_number": "5",
                    "fr": "Morts nés frais",
                    "en": "Fresh stillborn babies"
                },
                "mort_maceres": {
                    "line_number": "6",
                    "fr": "Mort-nés macéré",
                    "en": "Mort-né maceres"
                },
                "new_born": {
                    "line_number": "7",
                    "fr": "Nouveau-nés avec malformation congénitale visible",
                    "en": "New born"
                },
                "pre_mature_nbb": {
                    "line_number": "8",
                    "fr": "Nouveaux-nés Prématurés",
                    "en": "Pre- mature NBB"
                },
                "pre_mature_nbb_born_with_weak_weight_treated_with_kangaroo_method": {
                    "line_number": "9",
                    "fr": "Nouveaux nés prématurés et de faibles poids de naissance soignés selon la méthode du Kangourou",
                    "en": "Pre- mature NBB born with weak weight treated with Kangaroo Method"
                },
                "nbb_who_have_received_an_efficient_care": {
                    "line_number": "10",
                    "fr": "Nouveaux-nés ayant bénéficiés des soins essentiels",
                    "en": "NBB who have received an efficient care"
                },
                "nbb_who_have_received_the_antibiotic": {
                    "line_number": "11",
                    "fr": "Nouveaux-nés ayant reçus d’antibiotiques",
                    "en": "NBB who have received the antibiotic"
                },
                "nbb_put_on_breast_feeding_an_hour_after_delivery": {
                    "line_number": "12",
                    "fr": "Nouveaux-nés mis au sein dans l’heure qui suit l’accouchement",
                    "en": "NBB put on breast feeding an hour after delivery"
                },
                "assisted_deliveries_rate": {
                    "line_number": "13",
                    "line": "singlecell",
                    "fr": "Taux d’accouchements assistés = Accouchement par personnel soignant qualifié (a) X 100 / Femmes de l’AS attendues",
                    "en": "Assisted deliveries rate = deliveries by a qualified personnel (a)X100/women attended in the health area",
                    "condition": "FIXME"
                }
            },
            "definitions": {
                "columns": {
                    "number": {
                        "fr": "Nombre",
                        "en": "Number"
                    }
                }
            },
            "parent": "report_pregnant_4"
        },
        "report_pregnant_5": {
            "title": "3.5.3 Births and deaths (cont)",
            "type": "object",
            "properties": {
                "refered_mother_and_child": {
                    "line_number": "1",
                    "fr": "Références mère et bébé",
                    "en": "Refered mother and child"
                },
                "nbb_deaths_7days": {
                    "line_number": "2",
                    "fr": "Décès nouveau-nés ≤ 7 jours",
                    "en": "NBB deaths < 7days"
                },
                "nbb_deaths_28days": {
                    "line_number": "3",
                    "fr": "Décès nouveau-nés ≤ 28 jours",
                    "en": "NBB deaths < 28days"
                },
                "assisted_births": {
                    "line_number": "4",
                    "fr": "Naissances assistées",
                    "en": "Assisted births"
                },
                "including_stillborn_babies": {
                    "line_number": "4",
                    "fr": "Dont mort-nés",
                    "en": "Including stillborn babies"
                }
            },
            "definitions": {
                "columns": {
                    "number": {
                        "fr": "Nombre",
                        "en": "Number"
                    }
                }
            },
            "parent": "report_pregnant"
        },
        "report_pregnant_6": {
            "title": "3.5.4 Follow up",
            "type": "object",
            "properties": {
                "maternal_deaths_at_the_health_center": {
                    "line_number": "1",
                    "fr": "Décès maternels au CS",
                    "en": "Maternal deaths at the Health center"
                },
                "including_audited_maternal_deaths": {
                    "line_number": "2",
                    "fr": "Dont décès maternels audités",
                    "en": "Including audited maternal deaths"
                },
                "maternal_deaths_in_the_community": {
                    "line_number": "3",
                    "fr": "Décès maternels dans la communauté",
                    "en": "maternal deaths in the community"
                },
                "including_audited_maternal_deaths_in_the_community": {
                    "line_number": "4",
                    "fr": "Dont décès maternels dans la communauté audités",
                    "en": "Including audited maternal deaths in the community"
                },
                "perinatal_mortality_rate": {
                    "line_number": "5",
                    "line": "singlecell",
                    "fr": "Taux d’accouchements assistés = Accouchement par personnel soignant qualifié (a) X 100 / Femmes de l’AS attendues",
                    "en": "Perinatal mortality rate=stillborn babies + the number of of deaths within 0-7 days of life X100/total births at the health center",
                    "condition": "FIXME"
                },
                "neonatal_mortality_rate": {
                    "line_number": "6",
                    "line": "singlecell",
                    "fr": "Taux d’accouchements assistés = Accouchement par personnel soignant qualifié (a) X 100 / Femmes de l’AS attendues",
                    "en": "Neonatal mortality rate=total number of children who died between birth and 28 daysX 100/total births registered at the health center",
                    "condition": "FIXME"
                }
            },
            "definitions": {
                "columns": {
                    "number": {
                        "fr": "Nombre",
                        "en": "Number"
                    }
                }
            },
            "parent": "report_pregnant"
        },
        "report_promo_1": {
            "title": "5.1 Community participation",
            "type": "object",
            "properties": {
                "prepared_meetings": {
                    "line_number": "1",
                    "fr": "Réunions prévues",
                    "en": "Prepared meetings"
                },
                "meeting_held_with_minutes": {
                    "line_number": "2",
                    "fr": "Réunions tenues avec compte rendus",
                    "en": "Meeting held with minutes"
                },
                "nbr_of_monitoring_meeting_held": {
                    "line_number": "3",
                    "fr": "Nb réunions de monitoring tenues",
                    "en": "Nbr of monitoring meeting held"
                },
                "prepared_community_activities": {
                    "line_number": "4",
                    "fr": "Activités communautaires prévues",
                    "en": "Prepared community activities"
                },
                "realised_community_activities": {
                    "line_number": "5",
                    "fr": "Activités communautaires réalisées",
                    "en": "Realised community activities"
                },
                "nbr_of_meetings_of_analysis_of_data": {
                    "line_number": "6",
                    "fr": "Nb de réunion d’analyse des données",
                    "en": "Nbr of meetings of analysis of data"
                },
                "nbr_of_decisions_taken_in_the_previous_meeting": {
                    "line_number": "7",
                    "fr": "Nb de décisions prises le mois antérieur",
                    "en": "Nbr of decisions taken in the previous meeting"
                },
                "nbr_executed_decisions_of_last_month": {
                    "line_number": "8",
                    "fr": "Nb de décisions du mois antérieur exécutées",
                    "en": "Nbr Executed decisions of last month"
                },
                "nbr_of_decisions_taken_this_month": {
                    "line_number": "9",
                    "fr": "Nb de décisions prises au cours du mois",
                    "en": "Nbr of decisions taken this month"
                },
                "average_of_held_meeting_by_codesa": {
                    "line_number": "10",
                    "line": "singlecell",
                    "fr": "Proportion des réunions CODESA tenues = Nombre des réunions prevues x 100 / nombre des réunions programmées",
                    "en": "Averageof held meeting by CODESA=Nbr of provided meetings X100/Nbr of meetings programed",
                    "condition": "FIXME"
                },
                "average_of_community_activities_realized": {
                    "line_number": "11",
                    "line": "singlecell",
                    "fr": "Proportion des activités communaut. Réalisées = Nombre des activités prevues x 100 / le nombres des activtés realisées",
                    "en": "Average of community activities realized X 100/Nbr of realized activities",
                    "condition": "FIXME"
                },
                "average_of_codesa_executed_decisions": {
                    "line_number": "12",
                    "line": "singlecell",
                    "fr": "Proportion des décisions CODESA exécutées = Nombre des décisions exécutées x 100 / le nombres des décisions prises",
                    "en": "Average of CODESA executed decisions =Nbr of executed decision X 100/Nbr of decision made",
                    "condition": "FIXME"
                }
            },
            "definitions": {
                "columns": {
                    "codesa": {
                        "fr": "CODESA",
                        "en": "CODESA"
                    },
                    "cac": {
                        "fr": "CAC",
                        "en": "CAC"
                    },
                    "others": {
                        "fr": "Autres",
                        "en": "OTHERS"
                    }
                }
            },
            "parent": "report_promo"
        },
        "report_promo_2": {
            "title": "5.2 Follow of Relais Communautaire",
            "type": "object",
            "properties": {
                "nbr_of_children_on_middle_line_growth_chart": {
                    "line_number": "1",
                    "fr": "Relais communautaires ",
                    "en": "Relaiscommunautaire"
                },
                "nbr_of_light_malunutrition_cases": {
                    "line_number": "2",
                    "fr": "Relais communautaires Actifs",
                    "en": "Active relais communautaire"
                },
                "nbr_of_high_balanced_malnutriation_cases": {
                    "line_number": "3",
                    "fr": "MILD distribuées par les RECO",
                    "en": "MILD distributed by the relais communautaire"
                }
            },
            "definitions": {
                "columns": {
                    "ladies": {
                        "fr": "Femme",
                        "en": "Ladies"
                    },
                    "men": {
                        "fr": "Homme",
                        "en": "Men"
                    },
                    "totals": {
                        "fr": "Total",
                        "en": "Total"
                    }
                }
            },
            "parent": "report_promo"
        },
        "report_promo_3": {
            "title": "5.3 Communication for behavioral change CCC",
            "type": "object",
            "properties": {
                "nbr_of_sessions_planned": {
                    "line_number": "1",
                    "fr": "Nb séances prévues",
                    "en": "Nbr of sessions planned"
                },
                "nbr_of_realised_sessions": {
                    "line_number": "2",
                    "fr": "Nb séances réalisées",
                    "en": "Nbr of realised sessions"
                },
                "nbr_of_male_participants_ccc": {
                    "line_number": "3",
                    "fr": "Nb de participants Hommes CCC",
                    "en": "Nbr of male participants CCC"
                },
                "nbr_of_female_participants_ccc": {
                    "line_number": "4",
                    "fr": "Nb de participants Femmes CCC",
                    "en": "Nbr of female participants ccc"
                }
            },
            "definitions": {
                "columns": {
                    "ladies": {
                        "fr": "Femme",
                        "en": "Ladies"
                    },
                    "men": {
                        "fr": "Homme",
                        "en": "Men"
                    },
                    "totals": {
                        "fr": "Total",
                        "en": "Total"
                    }
                }
            },
            "parent": "report_promo"
        },
        "report_promo_4": {
            "title": "5.4 Hygiene & Disposals management (health center)",
            "type": "object",
            "properties": {
                "incinarator": {
                    "line_number": "1",
                    "fr": "Incinérateur",
                    "en": "Incinarator"
                },
                "hygienic_latrines": {
                    "line_number": "2",
                    "fr": "Latrines hygiénique",
                    "en": "Hygienic latrines"
                },
                "dust_bins": {
                    "line_number": "3",
                    "fr": "Poubelles",
                    "en": "Dust bins"
                },
                "placenta_hall": {
                    "line_number": "4",
                    "fr": "Fosse à placenta",
                    "en": "Placenta hall"
                },
                "rabbish_pit": {
                    "line_number": "5",
                    "fr": "Trou à ordures",
                    "en": "Rabbish pit"
                },
                "flowing_water_and_tapes": {
                    "line_number": "6",
                    "fr": "Eau courante (avec robinet)",
                    "en": "Flowing water and tapes"
                },
                "existing_water_point": {
                    "line_number": "7",
                    "fr": "Points d’eau existant",
                    "en": "Existing water point"
                }
            },
            "definitions": {
                "columns": {
                    "functional_tools": {
                        "fr": "Ouvrages Fonctionnels",
                        "en": "Functional tools"
                    },
                    "days_off": {
                        "fr": "Jours Non Fonctionne",
                        "en": "Days off"
                    }
                }
            },
            "parent": "report_promo"
        },
        "report_promo_5": {
            "title": "5.5 Relais communautaire Identification (RECO)",
            "type": "object",
            "properties": {
                "nbr_of_needed": {
                    "line_number": "1",
                    "fr": "Nombre de RECO prévus",
                    "en": "Nbr of needed"
                },
                "nbr_of_existing_reco": {
                    "line_number": "2",
                    "fr": "Nombre des RECO existants",
                    "en": "Nbr of existing RECO"
                },
                "nbr_of_actif_reco": {
                    "line_number": "3",
                    "fr": "Nombre des RECO opérationnels",
                    "en": "Nbr of actif RECO"
                },
                "average_of_active_reco": {
                    "line_number": "4",
                    "line": "singlecell",
                    "fr": "Proportion des RECO opérationnels = Nombre des RECO opérationnels X 100 / Nombre tot. des RECO",
                    "en": "Average of active RECO= Nbrof active RECO X 100/Nbr of RECO",
                    "condition": "FIXME"
                },
                "coverage_of_reco_in_the_health_area": {
                    "line_number": "5",
                    "line": "singlecell",
                    "fr": "Couverture en RECO dans l’AS = Nombre des RECO existantsX100/Nombre des RECO prévus",
                    "en": "Coverageof RECO in the health area= Nbr of existing RECO X100/Nbr of RECO Provided",
                    "condition": "FIXME"
                }
            },
            "definitions": {
                "columns": {
                    "ladies": {
                        "fr": "Femme",
                        "en": "Ladies"
                    },
                    "men": {
                        "fr": "Homme",
                        "en": "Men"
                    },
                    "totals": {
                        "fr": "Total",
                        "en": "Total"
                    }
                }
            },
            "parent": "report_promo"
        },
        "report_promo_6": {
            "title": "5.6 Water coverage",
            "type": "object",
            "properties": {
                "improved_existing_water_points": {
                    "line_number": "1",
                    "fr": "Points d’eau amenagés existant",
                    "en": "Improved existing water points"
                },
                "improved_existing_water_points_with_tested_water": {
                    "line_number": "2",
                    "fr": "Points d’eau amenagés don’t la qualite d'eau a ete teste au mois",
                    "en": "Improved existing water points with tested water"
                },
                "water_management_programed": {
                    "line_number": "3",
                    "fr": "Aménagement programmés",
                    "en": "Water management programed"
                },
                "water_management_realised_this_month": {
                    "line_number": "4",
                    "fr": "Aménagement réalisés durant le mois",
                    "en": "Water management realised this month"
                },
                "population_served_by_new_water_point": {
                    "line_number": "5",
                    "fr": "Pop. desservie par les nv points d’eau",
                    "en": "Population served by new water point"
                },
                "house_hold_living_in_the_health_area": {
                    "line_number": "6",
                    "fr": "Ménages vivant dans l'Aire de Sante",
                    "en": "House hold living in the health area"
                },
                "house_hold_with_hygienic_latrines": {
                    "line_number": "7",
                    "fr": "Ménages avec latrines hygiéniques",
                    "en": "House hold with hygienic latrines"
                },
                "house_hold_who_use_the_treated_water": {
                    "line_number": "8",
                    "fr": "Ménages qui recourent au traitement d’eau de boisson avant l'utilisation",
                    "en": "House hold who use the treated water"
                }
            },
            "definitions": {
                "columns": {
                    "functional_tools": {
                        "fr": "Ouvrages Fonctionnels",
                        "en": "Functional tools"
                    },
                    "number": {
                        "fr": "Nombre",
                        "en": "Number"
                    }
                }
            },
            "parent": "report_promo"
        },
        "report_promo_7": {
            "title": "5.8 Other Community Information",
            "type": "object",
            "properties": {
                "deaths_in_the_community": {
                    "line_number": "1",
                    "fr": "Décès dans la communauté",
                    "en": "Deaths in the community"
                },
                "births_in_the_community": {
                    "line_number": "2",
                    "fr": "Naissances dans la communauté",
                    "en": "Births in the community"
                },
                "deaths_of_children_aged_0_59_months": {
                    "line_number": "3",
                    "fr": "Décès d’enfants de 0 à 59 mois",
                    "en": "deaths of children aged 0-59 months"
                }
            },
            "definitions": {
                "columns": {
                    "number": {
                        "fr": "Nombre",
                        "en": "Number"
                    }
                }
            },
            "parent": "report_promo"
        },
        "report_promo_8": {
            "title": "Other Community Information (cont)",
            "type": "object",
            "properties": {
                "people_with_handicap": {
                    "line_number": "1",
                    "fr": "Personnes avec handicap",
                    "en": "People with handicap"
                },
                "in_the_community": {
                    "line_number": "2",
                    "fr": "dans la communauté",
                    "en": "in the community"
                }
            },
            "definitions": {
                "columns": {
                    "under_5_ac": {
                        "fr": "< 5 ans AC",
                        "en": "Under 5 AC"
                    },
                    "under_5_nc": {
                        "fr": "< 5 ans NC",
                        "en": "Under 5 NC"
                    },
                    "above_5_ac": {
                        "fr": "> 5 ans AC",
                        "en": "Above 5 AC"
                    },
                    "above_5_nc": {
                        "fr": "> 5 ans NC",
                        "en": "Above 5 NC"
                    }
                }
            },
            "parent": "report_promo"
        },
        "report_screening_1": {
            "title": "2.1 SCREENING",
            "type": "object",
            "properties": {
                "new_cases": {
                    "line_number": "1",
                    "fr": "Nouveaux Cas",
                    "en": "New cases",
                    "condition": "true"
                }
            },
            "definitions": {
                "columns": {
                    "under_5_years_as": {
                        "fr": "AS",
                        "en": "AS",
                        "condition": "true"
                    },
                    "under_5_years_has": {
                        "fr": "HAS",
                        "en": "HAS",
                        "condition": "true"
                    },
                    "under_5_years_hz": {
                        "fr": "HZ",
                        "en": "HZ",
                        "condition": "true"
                    },
                    "above_5_years_as": {
                        "fr": "AS",
                        "en": "AS",
                        "condition": "true"
                    },
                    "above_5_years_has": {
                        "fr": "HAS",
                        "en": "HAS",
                        "condition": "true"
                    },
                    "above_5_years_hz": {
                        "fr": "HZ",
                        "en": "HZ",
                        "condition": "true"
                    },
                    "above_5_years_total": {
                        "fr": "Total",
                        "en": "Total",
                        "condition": "true"
                    }
                }
            },
            "parent": "report_screening",
            "overrides": {
                "thead_prefix": "<tr><th></th><th></th><th></th><th colspan=\"3\">&lt; 5 ans</th><th colspan=\"3\">&gt; 5 ans</th><th></th></tr>"
            }
        },
        "report_screening_2": {
            "title": "2.1 SCREENING(table1)",
            "type": "object",
            "properties": {
                "including_new_patients": {
                    "line_number": "1",
                    "fr": "Dont nouveaux patients",
                    "en": "Including New Patients",
                    "condition": "true"
                },
                "including_night_health_attendants": {
                    "line_number": "2",
                    "fr": "Dont adhérents de mut. de santé",
                    "en": "including night health attendants",
                    "condition": "true"
                },
                "old_cases": {
                    "line_number": "3",
                    "fr": "Anciens cas",
                    "en": "Old cases",
                    "condition": "true"
                },
                "including_oldcases_contr_refered": {
                    "line_number": "4",
                    "fr": "Dont anciens cas contre-référés",
                    "en": "Including oldcases contr- refered",
                    "condition": "true"
                }
            },
            "definitions": {
                "columns": {
                    "as": {
                        "fr": "AS",
                        "en": "AS",
                        "condition": "true"
                    },
                    "has": {
                        "fr": "HAS",
                        "en": "HAS",
                        "condition": "true"
                    },
                    "hz": {
                        "fr": "HZ",
                        "en": "HZ",
                        "condition": "true"
                    },
                    "total": {
                        "fr": "Total",
                        "en": "Total",
                        "condition": "true"
                    }
                }
            },
            "parent": "report_screening"
        },
        "report_screening_3": {
            "title": "2.1 SCREENING(table2)",
            "type": "object",
            "properties": {
                "refered_to_the_general_hospital": {
                    "line_number": "1",
                    "fr": "Référés vers HGR",
                    "en": "Refered to the General Hospital",
                    "condition": "true"
                },
                "refered_by_community_health_workers": {
                    "line_number": "2",
                    "fr": "Référés par les RECO",
                    "en": "Refered by Community Health Workers",
                    "condition": "true"
                },
                "new_feminin_cases": {
                    "line_number": "3",
                    "fr": "Nouveaux cas féminins",
                    "en": "New feminin cases",
                    "condition": "true"
                },
                "including_pw": {
                    "line_number": "4",
                    "fr": "Dont Femmes enceintes",
                    "en": "Including PW",
                    "condition": "true"
                },
                "indigents": {
                    "line_number": "5",
                    "fr": "Indigents",
                    "en": "Indigents",
                    "condition": "true"
                },
                "follow_ups_in_observation": {
                    "line_number": "6",
                    "fr": "Suivi en observation",
                    "en": "Follow ups in observation",
                    "condition": "true"
                },
                "children_under_5_deaths": {
                    "line_number": "7",
                    "fr": "Décés enfants <5 ans",
                    "en": "Children under 5 deaths",
                    "condition": "true"
                },
                "targeted_population": {
                    "line_number": "8",
                    "line": "singlecell",
                    "fr": "Population cible = population du mois",
                    "en": "Targeted population = Monthly popualtion",
                    "condition": "true"
                },
                "total_consultation": {
                    "line_number": "9",
                    "line": "singlecell",
                    "fr": "Total Consultations (c+d)",
                    "en": "Total consultation (c+d)",
                    "condition": "true"
                },
                "curatif_used_rate": {
                    "line_number": "10",
                    "line": "singlecell",
                    "fr": "Taux d’utilisation du curatif = Total Nouveaux Cas AS (a+b) x 100 / pop du mois",
                    "en": "Curatif used rate = total new case AS(a+b)X100/monthly population",
                    "condition": "true"
                }
            },
            "definitions": {
                "columns": {
                    "number": {
                        "fr": "Nombre",
                        "en": "Number",
                        "condition": "true"
                    }
                }
            },
            "parent": "report_screening"
        },
        "report_summary": {
            "title": "10. Summary  of the use of serivces",
            "type": "object",
            "properties": {
                "news_curative_cases_all_new_curative_cases": {
                    "line_number": "1",
                    "fr": "Nouveaux cas curatif (Tous les NC curatifs)",
                    "en": "News curative cases (all new curative cases)"
                },
                "new_pmtct_cases_anc_cpon_fp": {
                    "line_number": "2",
                    "fr": "Nouveaux cas prévention mère (CPN,CPON,PF)",
                    "en": "New PMTCT cases (ANC, CPON FP)"
                },
                "new_child_prevention_cases_psc1": {
                    "line_number": "3",
                    "fr": "Nouveaux cas prévention enfant (CPS1",
                    "en": "New Child prevention cases (PSC1)"
                },
                "total_new_cases": {
                    "line_number": "4",
                    "fr": "Total des Nouveaux Cas",
                    "en": "Total new cases"
                },
                "use_of_service_rate_at_the_hc_total": {
                    "line_number": "5",
                    "line": "singlecell",
                    "fr": "Taux d’utilisation des services au CS= Total Nouveaux Cas reçus au CS X100/Population",
                    "en": "Use of service rate at the HC Total of new cases received at the HC X100/population",
                    "condition": "FIXME"
                }
            },
            "definitions": {
                "columns": {
                    "as": {
                        "fr": "AS",
                        "en": "AS"
                    },
                    "has": {
                        "fr": "HAS",
                        "en": "HAS"
                    },
                    "hz": {
                        "fr": "HZ",
                        "en": "HZ"
                    },
                    "total": {
                        "fr": "Total",
                        "en": "Total"
                    }
                }
            }
        },
        "report_supervision_1": {
            "title": "7.1 Realised supervisions by the health center and the RECO in the community",
            "type": "object",
            "properties": {
                "nbr_of_visits_from_the_health_center_team_to_reco": {
                    "line_number": "1",
                    "fr": "Nb Visites de l’équipe du CS auprès de relais communautaires",
                    "en": "Nbr of visits from the health center team to RECO"
                },
                "nbr_of_visits_of_reco_to_the_community_including_family_planning": {
                    "line_number": "2",
                    "fr": "Nb Visites des RECO vers la communauté dont Counsel ing PF",
                    "en": "Nbr of visits of RECO to the community including Family Planning"
                },
                "nbr_of_visits_of_reco_to_the_community_for_other_problems": {
                    "line_number": "3",
                    "fr": "Nb Visites des RECO vers la communauté dont pour autres problèmes de santé",
                    "en": "Nbr of visits of RECO to the community for  other problems"
                },
                "nbr_of_visits_of_reco_to_the_community_for_family_planning_material_distribution": {
                    "line_number": "4",
                    "fr": "Nb Visites des RECO vers la communauté dont distribution des intrants PF",
                    "en": "Nbr of visits of RECO to the community for family planning material distribution"
                },
                "nbr_of_visits_of_reco_to_the_community_for_other_intrants_distribution": {
                    "line_number": "5",
                    "fr": "Nb Visites des RECO vers la communauté dont distribution autres intrants",
                    "en": "Nbr of visits of RECo to the community for other intrants distribution"
                }
            },
            "definitions": {
                "columns": {
                    "program": {
                        "fr": "Program",
                        "en": "Program"
                    },
                    "realised": {
                        "fr": "Réalisées",
                        "en": "Realised"
                    }
                }
            },
            "parent": "report_supervision"
        },
        "report_supervision_2": {
            "title": "7.2 Supervisions realies by the main nurses and/or the ECZS to other structures",
            "type": "object",
            "properties": {
                "visited_strucutres": {
                    "line_number": "1",
                    "fr": "Structures visitées",
                    "en": "Visited strucutres"
                },
                "programed_supervision_visits": {
                    "line_number": "2",
                    "fr": "Visites de supervisions programmées",
                    "en": "Programed supervision visits"
                },
                "realised_supervision_visits": {
                    "line_number": "3",
                    "fr": "Visites de supervisions réalisées",
                    "en": "Realised supervision visits"
                },
                "visits_of_supervision_received": {
                    "line_number": "4",
                    "fr": "Visites de supervisions reçues",
                    "en": "Visits of supervision received"
                },
                "recipients_who_beneficiated_with_one_supervision": {
                    "line_number": "5",
                    "fr": "Prestataires ayant bénéficié d'une supervision",
                    "en": "Recipients who beneficiated with one supervision"
                },
                "written_retro_information_received": {
                    "line_number": "6",
                    "fr": "Rétro-informations écrites reçues",
                    "en": "Written retro-information received"
                },
                "accoplished_visits_rate_from_the_hc_to_the_reco": {
                    "line_number": "7",
                    "line": "singlecell",
                    "fr": "Taux de réalisation des visites du CS vers le RC = Nb de visites réalisées X 100 / Nb de visites programmées par le CS",
                    "en": "Accoplished visits rate from the HC to the RECO = Nbr of visits realized X 100/nbr of programed visits to the HC",
                    "condition": "FIXME"
                },
                "accomplished_visits_rate_from_the_reco_to_the_community": {
                    "line_number": "8",
                    "line": "singlecell",
                    "fr": "Taux de réalisation des visites des RC dans la communauté = Nb de visites réalisées X 100/ Nb de visites programmées par le RC",
                    "en": "Accomplished visits rate from the RECO to the community =Nbr of visits realized X100/Nbr of visits programed the RECO",
                    "condition": "FIXME"
                }
            },
            "definitions": {
                "columns": {
                    "main_nurse": {
                        "fr": "IT",
                        "en": "Main Nurse"
                    },
                    "ecz": {
                        "fr": "ECZ",
                        "en": "ECZ"
                    },
                    "combined_team": {
                        "fr": "Equipe Conjointe",
                        "en": "Combined team"
                    },
                    "others": {
                        "fr": "Autres",
                        "en": "Others"
                    },
                    "total": {
                        "fr": "Total",
                        "en": "Total"
                    }
                }
            },
            "parent": "report_supervision"
        }
    };
};
