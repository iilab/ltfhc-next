// in the map, for each document
//   for each report line
//     for each bucket
//        

exports.reports_new = function() {
    return {
        "report_anc": {
            "collection": "reports",
            "class": "schema",
            "_id": "reports/schema/anc",
            "$schema": "http://json-schema.org/draft-04/schema#",
            "title": "Report ANC",
            "type": "object",
            "properties": {
                "number_of_expected_pregnant_women": {
                    "line_number": "1",
                    "sw": "Idadi ya Wajawazito Waliotegemewa",
                    "en": "Number of expected pregnant women",
                    "condition": "subforms.FIXME"
                },
                "first_visit": {
                    "line_number": "2",
                    "sw": "Hudhurio la kwanza",
                    "en": "First visit"
                },
                "gestational_age_below_12_weeks": {
                    "line_number": "2a",
                    "sw": "Umri wa mimba chini ya wiki 12 (<12weeks)",
                    "en": "Gestational age below 12 weeks(<12weeks)",
                    "condition": "subforms.anc_first_visit.gestational_age < '12'"
                },
                "gestational_at_week_12_or_more": {
                    "line_number": "2b",
                    "sw": "Umri wa mimba wiki 12 au zaidi (12+ weeks)",
                    "en": "Gestational at week 12 or more (12+weeks)",
                    "condition": "subforms.anc_first_visit.gestational_age >= '12'"
                },
                "total_attendance_of_first_visits(2a+2b)": {
                    "line_number": "2c",
                    "sw": "Jumla ya hudhurio la Kwanza (2a+2b)",
                    "en": "Total attendance of first visits(2a+2b)",
                    "condition": "subforms.anc_first_visit.gestational_age < '12' && subforms.anc_first_visit.gestational_age >= '12'"
                },
                "clients_for_return_visits": {
                    "line_number": "2d",
                    "sw": "Wateja wa marudio",
                    "en": "clients for return visits",
                    "condition": "subforms.anc_followup"
                },
                "fourth_visits_for_all_pregnant_women": {
                    "line_number": "2e",
                    "sw": "Hudhurio la nne wajawazito wote",
                    "en": "Fourth visits for all pregnant women",
                    "condition": "subforms.anc_followup == 4"
                },
                "total_attendance": {
                    "line_number": "2f",
                    "sw": "Jumla ya Mahudhurio yote (2c+2d)",
                    "en": "total attendance(2c+2d)",
                    "condition": "subforms.anc_first_visit && subforms.anc_followup"
                },
                "number_of_pregnant_women_tested_first_visit": {
                    "line_number": "2g",
                    "sw": "Idadi ya wajawazito waliopima damu hudhurio la kwanza",
                    "en": "Number of pregnant women who tested during the first visit at the clinic",
                    "condition": "subforms.anc_first_visit.pregnancy_test == 'yes'"
                },
                "pregnant_women_who_received_vaccination_of_tt2": {
                    "line_number": "3",
                    "sw": "Wajawazito waliopata Chanjo ya TT2+:",
                    "en": "Pregnant women who received vaccination of TT2+",
                    "condition": "subforms.anc_first_visit.tt2plus_vaccine == 'yes'"
                },
                "risk_factors": {
                    "line_number": "4",
                    "sw": "Vidokezo vya Hatari:",
                    "en": "Risk factors"
                },
                "conceived_more_than_four_times": {
                    "line_number": "4a",
                    "sw": "Mimba zaidi ya 4:",
                    "en": "conceived more than four times",
                    "condition": "subforms.anc_first_visit.number_pregnancy > '4'"
                },
                "age_less_than_20_years": {
                    "line_number": "4b",
                    "sw": "Umri chini ya miaka 20:",
                    "en": "age less than 20 years",
                    "condition": "patient.patient_age < '20'"
                },
                "age_over_35_years": {
                    "line_number": "4c",
                    "sw": "Umri zaidi ya miaka 35:",
                    "en": "age over 35 years",
                    "condition": "patient.patient_age > '35'"
                },
                "severe_anemia_first_attendance": {
                    "line_number": "4d",
                    "sw": "Upungufu mkubwa wa damu <8.5g/dl - Anaemia hudhurio Ia kwanza:",
                    "en": "severe anemia <8.5g/dl - Anaemia first attendance",
                    "condition": "subforms.anc_first_visit.anemia == 'less_8_5'"
                },
                "blood_pressure_high": {
                    "line_number": "4e",
                    "sw": "Shinikizo Ia damu (BP => 140/90mm/hg):",
                    "en": "blood pressure (BP => 140/90mm/hg):",
                    "condition": "((subforms.anc_first_visit.bp_systolic || subforms.anc_followup.bp_systolic) >= 140) && ((subforms.anc_first_visit.bp_diastolic || subforms.anc_followup.bp_diastolic) >= 90)"
                },
                "heart_disease": {
                    "line_number": "4f",
                    "sw": "Ugonjwa wa moyo:",
                    "en": "Heart disease",
                    "condition": "._contains(subforms.anc_first_visit.pregnancy_diseases,'Heart Disease')"
                },
                "diabetes": {
                    "line_number": "4g",
                    "sw": "Kisukari:",
                    "en": "Diabetes",
                    "condition": "_.contains(subforms.anc_first_visit.pregnancy_diseases,'Diabetes')"
                },
                "tuberculosis": {
                    "line_number": "4h",
                    "sw": "Kifua kikuu:",
                    "en": "Tuberculosis",
                    "condition": "_.contains(subforms.anc_first_visit.pregnancy_diseases.'Tuberculosis')"
                },
                "those_who_tested_for_syphillus": {
                    "line_number": "4i",
                    "sw": "Waliopima Kaswendwe:",
                    "en": "Those who tested for Syphillus",
                    "condition": "subforms.anc_first_visit.syphillus_test == 'yes' && subforms.anc_followup.syphillus_test == 'yes'"
                },
                "those_who_were_infected_with_syphilis": {
                    "line_number": "4j",
                    "sw": "Waliogundulika na maambukizi ya Kaswende:",
                    "en": "Those who were infected with Syphillus",
                    "condition": "subforms.anc_first_visit.syphillus_status == 'yes' && subforms.anc_followup.syphillus_status == 'yes'"
                },
                "those_who_got_syphillis_treatment": {
                    "line_number": "4k",
                    "sw": "Waliopata matibabu ya Kaswende:",
                    "en": "Those who got Syphillis treatment",
                    "condition": "subforms.anc_first_visit.syphillus_treatment == 'yes'|| subforms.anc_followup.syphillus_treatment == 'yes'"
                },
                "partners_husbands_who_tested_for_syphillis": {
                    "line_number": "4l",
                    "sw": "Wenza/Waume waliopima Kaswende:",
                    "en": "Patners/husbands who tested for Syphillis",
                    "condition": "subforms.anc_first_visit.partner_syphillus_test == 'yes' || subforms.anc_followup.partner_syphillus_test == 'yes'"
                },
                "patners_husbands_who_were_infected_with_syphilis": {
                    "line_number": "4m",
                    "sw": "Wenza/Waume Waliogundulika na maambukizi ya Kaswende:",
                    "en": "Partners/husbands who were infected with Syphilis",
                    "condition": "subforms.anc_first_visit.partner_syphillus_status == 'yes' || subforms.anc_followup.partner_syphillus_status == 'yes'"
                },
                "patners_husbands_who_got_treatment_for_syphilis": {
                    "line_number": "4n",
                    "sw": "Wenza/waume waliopata matibabu ya Kaswende:",
                    "en": "Patners/husbands who got treatment for Syphilis",
                    "condition": "subforms.anc_first_visit.partner_syphillus_treatment == 'yes' || subforms.anc_followup.partner_syphillus_treatment == 'yes'"
                },
                "pregnant_women_who_were_infected_with_stds": {
                    "line_number": "4o",
                    "sw": "Waliopatikana na magoniwa ya mambukizo ya ngono:",
                    "en": "Pregnant women who were infected with STD's",
                    "condition": "subforms.anc_first_visit.std_status == 'yes' || subforms.anc_followup.std_status == 'yes'"
                },
                "patners_husbands_who_were_infected_with_stds": {
                    "line_number": "4p",
                    "sw": "Wenzi/waume Waliopatikana na magonjwa ya mambukizo ya ngono:",
                    "en": "Patners/husbands who were infected with STD's",
                    "condition": "subforms.anc_first_visit.partner_std == 'yes' || subforms.anc_followup.partner_std == 'yes'"
                },
                "pregnant_women_who_got_appropriate_treatment_for_stds": {
                    "line_number": "4q",
                    "sw": "Waliopata tiba sahihi ya magonjwa ya ngono:",
                    "en": "Pregnant women who got appropriate treatment for STD's",
                    "condition": "subforms.anc_first_visit.std_treatment == 'yes'|| subforms.anc_followup.std_treatment == 'yes'"
                },
                "patners_who_got_approprite_treatment_for_stds": {
                    "line_number": "4r",
                    "sw": "Wenzi/waume waliooata tiba sahihi ya magoniwa ya ngono:",
                    "en": "Patners who got appropriate treatment for STD's",
                    "condition": "subforms.anc_first_visit.partner_std_treatment == 'yes'|| subforms.anc_followup.partner_std_treatment== 'yes'"
                },
                "pmtct": {
                    "line_number": "5",
                    "sw": "PMTCT:",
                    "en": "PMTCT"
                },
                "pw_who_were_already_infected_by_hiv_before_starting_clinic": {
                    "line_number": "5a",
                    "sw": "Tayari wana maambukizi ya VVU kabla ya kuanza kliniki:",
                    "en": "PW who were already infected by HIV before starting Clinic",
                    "condition": "subforms.hiv_pregnancy_clinic.hiv_status_prior_firstvisit == 'yes' || subforms.anc_followup.hiv_status_prior_firstvisit == 'yes'|| subforms.anc_first_visit.hiv_status_prior_firstvisit== 'yes'"
                },
                "pw_who_were_counselled_before_testing_for_hiv": {
                    "line_number": "5b",
                    "sw": "Wajawazito wote waliopata ushauri nasaha kabla ya kupima VVU kliniki:",
                    "en": "PW who were counselled before testing for HIV",
                    "condition": "subforms.hiv_pregnancy_clinic.counseled_hiv_prior_test == 'yes' || subforms.anc_first_visit.counseled_hiv_prior_test == 'yes' || subforms.anc_followup.counseled_hiv_prior_test == 'yes'"
                },
                "pw_who_tested_for_hiv_for_the_first_time_at_the_clinic": {
                    "line_number": "5c",
                    "sw": "Wajawazito Waliopima VVU kipimo cha kwanza kliniki:",
                    "en": "PW who tested for HIV for the first time at the clinic",
                    "condition": "subforms.hiv_pregnancy_clinic.tested_hiv_firstvisit == 'yes' || subforms.anc_followup.tested_hiv_firstvisit == 'yes' || subforms.anc_first_visit.tested_hiv_firstvisit == 'yes'"
                },
                "pw_who_tested_positive_by_the_first_test": {
                    "line_number": "5d",
                    "sw": "Wajawazito Waliokutwa na VVU (positive) kipimo cha kwanza:",
                    "en": "PW who tested positive by the first test",
                    "condition": "subforms.hiv_pregnancy_clinic.first_hiv_status == 'yes' || subforms.anc_first_visit.first_hiv_status == 'yes' || subforms.anc_followup.first_hiv_status == 'yes'"
                },
                "pw_below_25_years_who_tested_for_hiv_for_the_first_time_at_the_clinic": {
                    "line_number": "5e",
                    "sw": "Wajawazito waliopimwa VVU Kipimo cha kwanza chini ya Umri wa miaka 25",
                    "en": " PW below 25 years who tested for HIV for the first time at the clinic",
                    "condition": "patient.approximate_age < 25 && (hiv_pregnancy_clinic.tested_hiv_firstvisit == 'yes' || subforms.anc_first_visit.tested_hiv_firstvisit_"
                },
                "pw_below_25_years_who_tested_positive_by_the_first_test": {
                    "line_number": "5f",
                    "sw": "Wajawazito Waliokutwa na VVU (positive) kipimo cha kwanza walio chini ya umri wa miaka 25:",
                    "en": "PW below 25 years who tested positive by the first test",
                    "condition": "patient.approximate_age < 25 && (hiv_pregnancy_clinic.first_hiv_status == 'yes' || subforms.anc_followup.first_hiv_status == 'yes')"
                },
                "pw_who_were_counselled_after_testing_hiv": {
                    "line_number": "5g",
                    "sw": "Wajawazito Waliopata Ushauri baada ya kupima:",
                    "en": "PW who were counselled after testing HIV",
                    "condition": "subforms.hiv_pregnancy_clinic.counseled_hiv_prior_test == 'yes' || subforms.anc_first_visit.counseled_hiv_prior_test == 'yes' || subforms.anc_followup.counseled_hiv_prior_test  == 'yes'"
                },
                "pw_who_tested_together_with_their_couple_together_at_the_clinic": {
                    "line_number": "5h",
                    "sw": "Wajawazito waliopimwa VVU na wenza wao (Couple) kwa pamoja katika kliniki ya wajawazito:",
                    "en": "PW who tested together with their couple together at the clinic",
                    "condition": "subforms.hiv_pregnancy_clinic.partner_hiv == 'yes' || subforms.anc_followup.partner_hiv == 'yes' || subforms.anc_first_visit.partner_hiv == 'yes'"
                },
                "pw_who_tested_hiv_by_the_second_test": {
                    "line_number": "5i",
                    "sw": "Wajawazito waliopima VVU kipimo cha pili:",
                    "en": "PW who tested HIV by the second test",
                    "condition": "subforms.hiv_pregnancy_clinic.second_hiv_test == 'yes' || subforms.anc_first_visit.second_hiv_test == 'yes' || subforms.anc_followup.second_hiv_test == 'yes'"
                },
                "pw_who_tested_positive_by_the_second_test": {
                    "line_number": "5j",
                    "sw": "Wajawazito waliokutwa na maambukizi ya VVU kipimo cha pili:",
                    "en": "PW who tested positive by the second test",
                    "condition": "subforms.hiv_pregnancy_clinic.second_hiv_test == 'yes' || subforms.anc_first_visit.second_hiv_test == 'yes' || subforms.anc_followup.second_hiv_test == 'yes'"
                },
                "partners_husbands_who_tested_for_hiv_at_the_clinic": {
                    "line_number": "5k",
                    "sw": "Wenza waliopima VVU Kliniki ya wajawazito:",
                    "en": "Patners/husbands who tested for HIV at the clinic",
                    "condition": "subforms.hiv_pregnancy_clinic.partner_hiv == 'yes' || subforms.anc_first_visit.partner_hiv == 'yes' || subforms.anc_followup.partner_hiv == 'yes'"
                },
                "partners_husbands_who_tested_positive_at_the_clinic": {
                    "line_number": "5l",
                    "sw": "Wenza waliogundulika kuwa na maambukizi ya VVU katika kliniki va wajawazito:",
                    "en": "Patners/husbands who tested positive at the clinic",
                    "condition": "subforms.hiv_pregnancy_clinic.partner_positive == 'yes' || subforms.anc_first_visit.partner_positive == 'yes' || subforms.anc_followup.partner_positive == 'yes'"
                },
                "discordant_couples": {
                    "line_number": "5m",
                    "sw": "Wajawazito na wenza waliopata majibu tofauti (discordant) baada ya kupima VVU kliniki",
                    "en": "Couples who have different HIV results after testing at the clinic(discordant couple)",
                    "condition": "subforms.hiv_pregnancy_clinic.discordant_couple == 'yes' || subforms.anc_first_visit.discordant_couple == 'yes' || subforms.anc_followup.discordant_couple == 'yes'"
                },
                "pw_who_received_pmtct_combination_drugs": {
                    "line_number": "5n",
                    "sw": "Wajawazito waliopewa dawa za Mchanganyiko za PMTCT:",
                    "en": "PW who received PMTCT combination drugs:",
                    "condition": "subforms.hiv_pregnancy_clinic.combo_drugs == 'yes' || subforms.anc_first_visit.combo_drugs == 'yes' || subforms.anc_followup.combo_drugs == 'yes'"
                },
                "pw_whi_are_using_art_drugs": {
                    "line_number": "5o",
                    "sw": "Wajawazito wanaotumia dawa za ART:",
                    "en": "PW whi are using ART drugs",
                    "condition": "subforms.hiv_pregnancy_clinic.art_drugs == 'yes' || subforms.anc_first_visit.art_drugs == 'yes' || subforms.anc_followup.art_drugs == 'yes'"
                },
                "pw_who_were_given_ctx": {
                    "line_number": "5p",
                    "sw": "Wajawazito Waliopewa CTX:",
                    "en": "PW who were given CTX (Cotrimocxazole)",
                    "condition": "subforms.hiv_pregnancy_clinic.ctx_given == 'yes' || subforms.anc_first_visit.ctx_given == 'yes' || subforms.anc_followup.ctx_given == 'yes'"
                },
                "pw_who_were_counselled_on_feeding_the_baby": {
                    "line_number": "5q",
                    "sw": "Waliopata ushauri iuu ya ulishaji wa mtoto:",
                    "en": "PW who were counselled on feeding the baby",
                    "condition": "subforms.hiv_pregnancy_clinic.counsel_feeding == 'yes' || subforms.anc_first_visit.counsel_feeding == 'yes' || subforms.anc_followup.counsel_feeding == 'yes'"
                },
                "malaria": {
                    "line_number": "6",
                    "sw": "Malaria:",
                    "en": "Malaria"
                },
                "pw_given_a_voucher_for_hati_punguzo": {
                    "line_number": "6a",
                    "sw": "Waliopewa vocha ya hati punguzo:",
                    "en": "PW given a voucher for Hati Punguzo (voucher for free mosquito net)",
                    "condition": "subforms.anc_first_visit.bednet_voucher == 'yes' || subforms.anc_followup.bednet_voucher == 'yes'"
                },
                "pw_tested_for_malaria": {
                    "line_number": "6b",
                    "sw": "Waliopima Malaria:",
                    "en": "PW tested for malaria",
                    "condition": "subforms.anc_first_visit.malaria_test == 'yes' || subforms.anc_followup.malaria_test == 'yes'"
                },
                "pw_tested_positive_for_malaria": {
                    "line_number": "6c",
                    "sw": "Waliopima Malaria positive:",
                    "en": "PW tested positive for Malaria",
                    "condition": "subforms.anc_first_visit.malaria_poss == 'yes' || subforms.anc_followup.malaria_poss == 'yes'"
                },
                "pw_given_ipt1_preventive_treatment": {
                    "line_number": "6d",
                    "sw": "Waliopewa IPT1:",
                    "en": "PW given IPT1 (IPT--Intermittent Preventive Treatment)",
                    "condition": "subforms.anc_first_visit.ipt1 == 'yes' || subforms.anc_followup.ipt1 == 'yes'"
                },
                "pw_given_ipt2": {
                    "line_number": "6e",
                    "sw": "Waliopewa IPT2:",
                    "en": "PW given IPT2",
                    "condition": "subforms.anc_first_visit.ipt2 == 'yes' || subforms.anc_followup.ipt2 == 'yes'"
                },
                "other_services": {
                    "line_number": "7",
                    "sw": "Huduma Nyingine:",
                    "en": "Other services"
                },
                "pw_given_enough_iron_folic_tablets": {
                    "line_number": "7",
                    "sw": "Waliopewa Iron/Folic vidonge vya kutosha:",
                    "en": "PW given enough Iron/Folic tablets",
                    "condition": "subforms.anc_first_visit.iron_tablets == 'yes' || subforms.anc_followup.iron_tablets == 'yes'"
                },
                "pw_given_antihelminths": {
                    "line_number": "8",
                    "sw": "Waliopewa Dawa za minyoo (Mebendazole / Albendazole):",
                    "en": "PW given antihelminths (Mebendazole/Albendazole)",
                    "condition": "subforms.anc_first_visit.alben_tablets == 'yes' || subforms.anc_followup.alben_tablets == 'yes'"
                },
                "pw_who_were_given_refferals": {
                    "line_number": "9",
                    "sw": "Waliopewa Rufaa wakati wa uiauzito:",
                    "en": "PW who were given refferals",
                    "condition": "subforms.anc_first_visit.referral == 'yes' || subforms.anc_followup.referral == 'yes'"
                },
                "pw_reffered_to_ctc": {
                    "line_number": "10",
                    "sw": "Waliopcwa Rufaa kwenda CTC:",
                    "en": "PW reffered to CTC (CTC-care and treatment center)",
                    "condition": "subforms.hiv_pregnancy_clinic.referred_ctc == 'yes' || subforms.anc_first_visit.referred_ctc == 'yes' || subforms.anc_followup.referred_ctc == 'yes'"
                },
                "definitions": {
                    "columns": {
                        "below20": {
                            "title": "Below 20 years old",
                            "condition": "patient.approximate_age < 20"
                        },
                        "above20": {
                            "title": "Above 20 years old",
                            "condition": "patient.approximate_age >= 20"
                        },
                        "total": {
                            "title": "Total",
                            "condition": "true"
                        }
                    }
                }
            }
        }, // end of report_anc
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
                    "condition": "subforms.reproductive_counseling.contraception_current == 'Depo Provera'"
                },
                "contraceptive_pills": {
                    "line_number": "2",
                    "sw": "Vidonge",
                    "en": "Contraceptive pills",
                },
                "the_number_of_pills_clients_at_the_clinic": {
                    "line_number": "2a",
                    "sw": "Idadi ya wateja wa Vidonge Kituoni",
                    "en": "The number of pills clients at the clinic",
                    "condition": "subforms.reproductive_counseling.contraception_current == 'Pills' && !(reproductive_counseling.contraception_distribution == 'CBD')"
                },
                "number_of_pills_clients_through_cbd": {
                    "line_number": "2b",
                    "sw": "Idadi ya wateja wa vidonge wa CBD",
                    "en": "Number of pills clients through CBD(Community Based Distribution)",
                    "condition": "subforms.reproductive_counseling.contraception_current == 'Pills' && reproductive_counseling.contraception_distribution == 'CBD'"
                },
                "the_number_of_clients_who_were_given_pills_at_the_clinic_and_through_cbd": {
                    "line_number": "2c",
                    "sw": "Jumla walochukua Vidonge Kituoni na CBD (2a+2b)",
                    "en": "The number of clients who were given pills at the clinic and through CBD(2a+2b)",
                    "condition": "subforms.reproductive_counseling.contraception_current == 'Pills'"
                },
                "condoms": {
                    "line_number": "3",
                    "sw": "Kondom",
                    "en": "Condoms",
                    "heading": true
                },
                "the_number_of_male_clients_who_were_given_condoms_at_the_clinic": {
                    "line_number": "3a",
                    "sw": "Idadi ya wateja waliochukua kondom Kituoni Me",
                    "en": "The number of Male clients who were given condoms at the clinic",
                    "value": {
                        "field": "/visit/reproductive_counseling/male/condoms"
                    }
                },
                "the_number_of_female_clients_who_were_given_condoms_at_the_clinic": {
                    "line_number": "3b",
                    "sw": "Idadi ya wateja waliochukua kondom Kituoni Ke",
                    "en": "The number of Female clients who were given condoms at the clinic",
                    "value": {
                        "field": "/visit/reproductive_counseling/female/condoms"
                    }
                },
                "number_of__male_clients_who_were_given_condoms_by_cbd": {
                    "line_number": "3c",
                    "sw": "Idadi ya wateja waliochukua kondom CBD Me",
                    "en": "Number of male clients who were given condoms by CBD",
                    "value": {
                        "field": "/visit/reproductive_counseling/male/condoms_cbd"
                    }
                },
                "number_of_female_clients_who_were_given_condoms_by_cbd": {
                    "line_number": "3d",
                    "sw": "Idadi ya wateja waliochukua kondom CBD Ke",
                    "en": "Number of female clients who were given condoms by CBD",
                    "value": {
                        "field": "/visit/reproductive_counseling/female/condoms_cbd"
                    }
                },
                "total_customers_who_given_condoms_at_the_clinic_and_cbd": {
                    "line_number": "3e",
                    "sw": "Jumla ya Wateja waliochukua kondomu (kituoni na CBD) (3a+3b+3c+3d)",
                    "en": "Total Customers who given condoms at the clinic and CBD (3a+3b+3c+3d)",
                    "value": {
                        "field": "/visit/reproductive_counseling/condoms/total"
                    }
                },
                "total_customers_who_took_short-term_course": {
                    "line_number": "3f",
                    "sw": "Jumla ya Wateja waliochukua njia za muda mfupi (1+2c+3c)",
                    "en": "Total Customers who took short-term course (1+2c+3c)",
                    "value": {
                        "field": "/visit/reproductive_counseling/???"
                    }
                },
                "methods_of_long-term_and_permanent_family_planning": {
                    "line_number": "4",
                    "sw": "Njia za muda Mrefu na za kudumu za Uzazi wa Mpango",
                    "en": "Methods of long-term and permanent family planning",
                    "heading": true
                },
                "sterilization": {
                    "line_number": "4",
                    "sw": "Kufunga Uzazi",
                    "en": "Sterilization",
                    "heading": true
                },
                "women_sterilization_ml_la_at_the_clinic": {
                    "line_number": "4a",
                    "sw": "Kufunga Uzazi mama (ML/LA) - kituoni",
                    "en": "Women sterilization (ML / LA) - at the clinic",
                    "value": {
                        "field": "/visit/reproductive_counseling/female/sterilization"
                    }
                },
                "women_sterilization_ml_la_outreach": {
                    "line_number": "4b",
                    "sw": "Kufunga Uzazi mama (ML/LA) - outreach",
                    "en": "Women sterilization (ML / LA) - outreach",
                    "value": {
                        "field": "/visit/reproductive_counseling/female/sterilization/outreach"
                    }
                },
                "men_sterilization_nsv_at_the_clinic": {
                    "line_number": "4c",
                    "sw": "Kufunga uzazi baba (NSV) - kituoni",
                    "en": "Men sterilization (NSV) - at the clinic",
                    "value": {
                        "field": "/visit/reproductive_counseling/male/sterilization/clinic"
                    }
                },
                "men_sterilization_nsv_outreach": {
                    "line_number": "4d",
                    "sw": "Kufung uzazi baba (NSV) - outreach",
                    "en": "Men sterilization (NSV) - outreach",
                    "value": {
                        "field": "/visit/reproductive_counseling/male/sterilization/outreach"
                    }
                },
                "implants": {
                    "line_number": "5",
                    "sw": "Vipandikizi",
                    "en": "Implants",
                    "heading": true
                },
                "those_who_put_implants_at_the_clinic": {
                    "line_number": "5a",
                    "sw": "Kuweka vipandikizi - kituoni",
                    "en": "Those who put implants - at the clinic",
                    "value": {
                        "field": "/visit/reproductive_counseling/implants/clinic"
                    }
                },
                "those_who_put_implants_outreach": {
                    "line_number": "5b",
                    "sw": "Kuweka vipandikizi - outreach",
                    "en": "Those who put implants - outreach",
                    "value": {
                        "field": "/visit/reproductive_counseling/implants/outreach"
                    }
                },
                "removing_implants": {
                    "line_number": "5c",
                    "sw": "Kuondoa vipandikizi",
                    "en": "Removing implants",
                    "value": {
                        "field": "/visit/reproductive_counseling/implants/removal"
                    }
                },
                "intrauterine_methods_iucd": {
                    "line_number": "6",
                    "sw": "Kitanzi (IUCD)",
                    "en": "Intrauterine methods(IUCD)",
                    "value": {
                        "field": "/visit/reproductive_counseling/contraception_current/IUD"
                    }
                },
                "inserting_iud_clinic": {
                    "line_number": "6a",
                    "sw": "Kuweka Kitanzi - kituoni",
                    "en": "Inserting IUD (at the clinic)",
                    "value": {
                        "field": "/visit/reproductive_counseling/iud/insert/clinic"
                    }
                },
                "inserting_iud_outreach": {
                    "line_number": "6b",
                    "sw": "Kuweka Kitanzi - outreach",
                    "en": "Inserting IUD (outreach)",
                    "value": {
                        "field": "/visit/reproductive_counseling/iud/insert/outreach"
                    }
                },
                "removing_iud_clinic": {
                    "line_number": "6c",
                    "sw": "Kuondoa Kitanzi - kituoni",
                    "en": "Removing IUD (at the clinic)",
                    "value": {
                        "field": "/visit/reproductive_counseling/iud/removal/clinic"
                    }
                },
                "removing_iud_outreach": {
                    "line_number": "6d",
                    "sw": "Kuondoa Kitanzi - outreach",
                    "en": "Removing IUD (outreach)",
                    "value": {
                        "field": "/visit/reproductive_counseling/"
                    }
                },
                "total_number_of_client_who_used_permanent_contraceptive_methods": {
                    "line_number": "6e",
                    "sw": "Jumla ya Wateja waliochukua njia za muda mrefu na za Kudumu za Uzazi wa Mpango (4a+4b+4c+4d+5a+5b+6a+6b)",
                    "en": "Total number of client who used permanent contraceptive methods(4a+4b+4c+4d+5a+5b+6a+6b)"
                },
                "other_methods": {
                    "line_number": "7",
                    "sw": "Njia Nyinginezo",
                    "en": "Other methods"
                },
                "natural_ways": {
                    "line_number": "7a",
                    "sw": "Njia za maumbile (mfano LAM, BOM, joto, kalenda)",
                    "en": "Natural ways(eg. LAM,BOM,body temperature and calendar"
                },
                "other_methods": {
                    "line_number": "7b",
                    "sw": "Njia nyingine",
                    "en": "Other methods"
                },
                "total_number_of_clients_who_used_other_methods": {
                    "line_number": "7c",
                    "sw": "Jumla ya Njia Nyinginezo (7a+7b)",
                    "en": "Total number of clients who used other methods(7a+7b)"
                },
                "total_number_of_types_of_contraceptives": {
                    "line_number": "8",
                    "sw": "Jumla ya Aina zote Uzazi wa Mpango",
                    "en": "Total number of types of contraceptives"
                },
                "total_number_of_clients_who_used_all_types_of_contraceptives": {
                    "line_number": "8a",
                    "sw": "Jumla ya Wateja waliochukua njia zote za Uzazi Mpango (3f+6e+7c)",
                    "en": "Total number of clients who used all types of contraceptives(3f+6e+7c)"
                },
                "total_number_of_cycles_distributed": {
                    "line_number": "9",
                    "sw": "Jumla ya Mizunguko ya Vidonge Iliyotolewa",
                    "en": "Total number of cycles distributed"
                },
                "cycles_distributed_at_the_clinic": {
                    "line_number": "9a",
                    "sw": "Idadi ya mizunguko iliyotolewa (Cycles Distributed) - Kituoni",
                    "en": "Cycles distributed at the Clinic"
                },
                "cycles_distributed_by_cbd": {
                    "line_number": "9b",
                    "sw": "Idadi ya mizunguko iliyotolewa (Cycles Distributed) - CBD",
                    "en": "Cycles distributed by CBD"
                },
                "total_number_of_cycles_distributed": {
                    "line_number": "9c",
                    "sw": "Idadi ya mizunguko iliyotolewa (Cycles Distributed) (Kituoni na CBD) (9a+9b)",
                    "en": "Total number of cycles distributed(at the clinic+CBD) (9a+9b"
                },
                "condoms_given_out_to_clients": {
                    "line_number": "10",
                    "sw": "Kondomu zilizotolewa",
                    "en": "Condoms given out to clients"
                },
                "number_of_condoms_given_to_male_clients_at_the_clinic": {
                    "line_number": "10a",
                    "sw": "Idadi ya kondomu zilizogawiwa Kituoni Me",
                    "en": "Number of condoms given to male clients at the clinic"
                },
                "number_of_condoms_given_to_female_clients_at_the_clinic": {
                    "line_number": "10b",
                    "sw": "Idadi ya kondomu zilizogawiwa Kituoni Ke",
                    "en": "Number of condoms given to female clients at the clinic"
                },
                "number_of_condoms_given_to_male_clients_by_cbd": {
                    "line_number": "10c",
                    "sw": "Idadi ya kondomu zilizogawiwa CBD Me",
                    "en": "Number of condoms given to male clients by CBD"
                },
                "number_of_condoms_given_to_female_clients_by_cbd": {
                    "line_number": "10d",
                    "sw": "Idadi ya kondomu zilizogawiwa CBD Ke",
                    "en": "Number of condoms given to female clients by CBD"
                },
                "total_number_of_condoms_given_to_clients": {
                    "line_number": "10e",
                    "sw": "Idadi ya kondomu zilizogawiwa kituoni na CBD (10a+10b+10c+10d)",
                    "en": "Total number of condoms given to clients from the clinic and by CBD(10a+10b+10c+10d)",
                },
                "service_after_miscarriage_cpac_after_giving_birth": {
                    "line_number": "11",
                    "sw": "Huduma baada ya mimba kuharibika (cPAC) Baada ya kujifungua",
                    "en": "Service after miscarriage (CPAC) After giving birth",
                },
                "those_who_got_treatment_after_miscarriages": {
                    "line_number": "11a",
                    "sw": "Waliopata huduma baada ya mimba kubaribika",
                    "en": "Those who got treatment after miscarriages",
                },
                "those_who_used_contraception_after_miscarriage": {
                    "line_number": "11b",
                    "sw": "Waliopata uzazi wa mpango baada ya mimba kubaribika",
                    "en": "Those who used contraception after miscarriage",
                },
                "those_who_used_contraceptive_methods_42_days_after_giving_birth": {
                    "line_number": "11c",
                    "sw": "Waliopata njia ya uazazi wa mpango siku 42 baada ya kujifungua",
                    "en": "Those who used contraceptive methods 42 days after giving birth",
                },
                "clients_who_screened_for_cancer": {
                    "line_number": "12",
                    "sw": "Wateja waliochunguzwa saratani",
                    "en": "clients who screened for cancer",
                },
                "those_screened_for_breast_diseases": {
                    "line_number": "12a",
                    "sw": "waliochunguzwa tit",
                    "en": "Those Screened for breast diseases",
                },
                "detected_to_have_breast_cancer_symptoms": {
                    "line_number": "12b",
                    "sw": "Waliogundulika na matatizo ya matiti (mfano: kutoka damu kwenye chuchu au uvimbe wa matiti)",
                    "en": "Detected to have breast cancer symptoms (eg, bleeding or swelling of the breast nipples)",
                },
                "screened_for_cervical_diseases": {
                    "line_number": "12c",
                    "sw": "Waliochunguzwa Shingo ya mfuko wa uzazi",
                    "en": "Screened for cervical diseases",
                },
                "detected_to_have_cervical_diseases": {
                    "line_number": "12d",
                    "sw": "Waliogundulika na matatizo ya shingo ya mfuko wa uzazi (mfano: mchubuko au kidonda)",
                    "en": "Detected to have cervical diseases (eg, bruise or cervical ulcer)",
                },
                "detected_to_have_cervical_cancer_symptoms": {
                    "line_number": "12e",
                    "sw": "Waliodhamwa wana saratani ya shingo ya mfuko wa uzazi",
                    "en": "Detected to have cervical cancer symptoms",
                },
                "those_who_got_cryotherapy_service": {
                    "line_number": "12f",
                    "sw": "Waliopewa huduma ya Cryotherapy",
                    "en": "Those who got Cryotherapy service",
                },
                "pitc": {
                    "line_number": "13",
                    "sw": "PITC",
                    "en": "PITC",
                },
                "those_who_already_have_an_hiv_infection": {
                    "line_number": "13a",
                    "sw": "Tayari wana uambukizo wa VVU",
                    "en": "Those who already have an HIV infection",
                },
                "those_who_got_hiv_counseling": {
                    "line_number": "13b",
                    "sw": "Waliopata ushauri nasha juu ya VVU",
                    "en": "Those who got HIV counseling",
                },
                "clients_who_tested_for_hiv": {
                    "line_number": "13c",
                    "sw": "Wateja waliopima VVU",
                    "en": "Clients who tested for HIV",
                },
                "clients_who_received_post-test_counseling": {
                    "line_number": "13d",
                    "sw": "Wateja waliopata ushauri nasaha baada ya kupima",
                    "en": "Clients who received post-test counseling",
                },
                "customers_who_tested_positive": {
                    "line_number": "13e",
                    "sw": "Wateja waliogundulika Positive (+)",
                    "en": "Customers who tested positive (+)",
                },
                "partners_who_tested_for_hiv": {
                    "line_number": "13f",
                    "sw": "Wenza waliopima VVU",
                    "en": "Partners who tested for HIV",
                },
                "partners_who_tested_positive": {
                    "line_number": "13g",
                    "sw": "Wenza Waliogundulika Positive (+)",
                    "en": "Partners Who tested Positive (+)",
                },
                "discordant_couple": {
                    "line_number": "13h",
                    "sw": "Wateja ambao matokeo ya vipimo vya VVU yanatofautiana",
                    "en": "Clients who tested HIV and got different results(discordant couple)",
                },
                "clients_who_were_reffered_to_ctc": {
                    "line_number": "13i",
                    "sw": "Wateja waliopata rufaa kwenda CTC",
                    "en": "Clients who were reffered to CTC",
                },
                "NEED_TRANSLATION": {
                    "line_number": "13j",
                    "sw": "Wataja waliopata rufaa kwenda CTC",
                    "en": "NEED TRANSLATION"
                },
            },
            "definitions": {
                "columns": {
                    "below20": {
                        "title": "Below 20 years old",
                        "condition": "patient.approximate_age < 20"
                    },
                    "above20": {
                        "title": "Above 20 years old",
                        "condition": "patient.approximate_age >= 20"
                    },
                    "total": {
                        "title": "Total",
                        "condition": "patient.approximate_age > 0"
                    }
                }
            }
        } // end of report_contraceptive
    }
}

exports.reports = function() {
    return {
        "report_anc": {

            "collection": "reports",
            "class": "schema",
            "_id": "reports/schema/anc",
            "$schema": "http://json-schema.org/draft-04/schema#",
            "title": "Report ANC",
            "type": "object",
            "properties": {
                "number_of_expected_pregnant_women": {
                    "line_number": "1",
                    "sw": "Idadi ya Wajawazito Waliotegemewa",
                    "en": "Number of expected pregnant women",
                    "condition": "subforms.FIXME"
                },
                "first_visit": {
                    "line_number": "2",
                    "sw": "Hudhurio la kwanza",
                    "en": "First visit"
                },
                "gestational_age_below_12_weeks": {
                    "line_number": "2a",
                    "sw": "Umri wa mimba chini ya wiki 12 (<12weeks)",
                    "en": "Gestational age below 12 weeks(<12weeks)",
                    "condition": "subforms.anc_first_visit.gestational_age < '12'"
                },
                "gestational_at_week_12_or_more": {
                    "line_number": "2b",
                    "sw": "Umri wa mimba wiki 12 au zaidi (12+ weeks)",
                    "en": "Gestational at week 12 or more (12+weeks)",
                    "condition": "subforms.anc_first_visit.gestational_age >= '12'"
                },
                "total_attendance_of_first_visits(2a+2b)": {
                    "line_number": "2c",
                    "sw": "Jumla ya hudhurio la Kwanza (2a+2b)",
                    "en": "Total attendance of first visits(2a+2b)",
                    "condition": "subforms.anc_first_visit.gestational_age < '12' && subforms.anc_first_visit.gestational_age >= '12'"
                },
                "clients_for_return_visits": {
                    "line_number": "2d",
                    "sw": "Wateja wa marudio",
                    "en": "clients for return visits",
                    "condition": "subforms.anc_followup"
                },
                "fourth_visits_for_all_pregnant_women": {
                    "line_number": "2e",
                    "sw": "Hudhurio la nne wajawazito wote",
                    "en": "Fourth visits for all pregnant women",
                    "condition": "subforms.anc_followup == 4"
                },
                "total_attendance": {
                    "line_number": "2f",
                    "sw": "Jumla ya Mahudhurio yote (2c+2d)",
                    "en": "total attendance(2c+2d)",
                    "condition": "subforms.anc_first_visit && subforms.anc_followup"
                },
                "number_of_pregnant_women_tested_first_visit": {
                    "line_number": "2g",
                    "sw": "Idadi ya wajawazito waliopima damu hudhurio la kwanza",
                    "en": "Number of pregnant women who tested during the first visit at the clinic",
                    "condition": "subforms.anc_first_visit.pregnancy_test == 'yes'"
                },
                "pregnant_women_who_received_vaccination_of_tt2": {
                    "line_number": "3",
                    "sw": "Wajawazito waliopata Chanjo ya TT2+:",
                    "en": "Pregnant women who received vaccination of TT2+",
                    "condition": "subforms.anc_first_visit.tt2plus_vaccine == 'yes'"
                },
                "risk_factors": {
                    "line_number": "4",
                    "sw": "Vidokezo vya Hatari:",
                    "en": "Risk factors"
                },
                "conceived_more_than_four_times": {
                    "line_number": "4a",
                    "sw": "Mimba zaidi ya 4:",
                    "en": "conceived more than four times",
                    "condition": "subforms.anc_first_visit.number_pregnancy > '4'"
                },
                "age_less_than_20_years": {
                    "line_number": "4b",
                    "sw": "Umri chini ya miaka 20:",
                    "en": "age less than 20 years",
                    "condition": "patient.patient_age < '20'"
                },
                "age_over_35_years": {
                    "line_number": "4c",
                    "sw": "Umri zaidi ya miaka 35:",
                    "en": "age over 35 years",
                    "condition": "patient.patient_age > '35'"
                },
                "severe_anemia_first_attendance": {
                    "line_number": "4d",
                    "sw": "Upungufu mkubwa wa damu <8.5g/dl - Anaemia hudhurio Ia kwanza:",
                    "en": "severe anemia <8.5g/dl - Anaemia first attendance",
                    "condition": "subforms.anc_first_visit.anemia == 'less_8_5'"
                },
                "blood_pressure_high": {
                    "line_number": "4e",
                    "sw": "Shinikizo Ia damu (BP => 140/90mm/hg):",
                    "en": "blood pressure (BP => 140/90mm/hg):",
                    "condition": "((subforms.anc_first_visit.bp_systolic || subforms.anc_followup.bp_systolic) >= 140) && ((subforms.anc_first_visit.bp_diastolic || subforms.anc_followup.bp_diastolic) >= 90)"
                },
                "heart_disease": {
                    "line_number": "4f",
                    "sw": "Ugonjwa wa moyo:",
                    "en": "Heart disease",
                    "condition": "._contains(subforms.anc_first_visit.pregnancy_diseases,'Heart Disease')"
                },
                "diabetes": {
                    "line_number": "4g",
                    "sw": "Kisukari:",
                    "en": "Diabetes",
                    "condition": "_.contains(subforms.anc_first_visit.pregnancy_diseases,'Diabetes')"
                },
                "tuberculosis": {
                    "line_number": "4h",
                    "sw": "Kifua kikuu:",
                    "en": "Tuberculosis",
                    "condition": "_.contains(subforms.anc_first_visit.pregnancy_diseases.'Tuberculosis')"
                },
                "those_who_tested_for_syphillus": {
                    "line_number": "4i",
                    "sw": "Waliopima Kaswendwe:",
                    "en": "Those who tested for Syphillus",
                    "condition": "subforms.anc_first_visit.syphillus_test == 'yes' && subforms.anc_followup.syphillus_test == 'yes'"
                },
                "those_who_were_infected_with_syphilis": {
                    "line_number": "4j",
                    "sw": "Waliogundulika na maambukizi ya Kaswende:",
                    "en": "Those who were infected with Syphillus",
                    "condition": "subforms.anc_first_visit.syphillus_status == 'yes' && subforms.anc_followup.syphillus_status == 'yes'"
                },
                "those_who_got_syphillis_treatment": {
                    "line_number": "4k",
                    "sw": "Waliopata matibabu ya Kaswende:",
                    "en": "Those who got Syphillis treatment",
                    "condition": "subforms.anc_first_visit.syphillus_treatment == 'yes'|| subforms.anc_followup.syphillus_treatment == 'yes'"
                },
                "partners_husbands_who_tested_for_syphillis": {
                    "line_number": "4l",
                    "sw": "Wenza/Waume waliopima Kaswende:",
                    "en": "Patners/husbands who tested for Syphillis",
                    "condition": "subforms.anc_first_visit.partner_syphillus_test == 'yes' || subforms.anc_followup.partner_syphillus_test == 'yes'"
                },
                "patners_husbands_who_were_infected_with_syphilis": {
                    "line_number": "4m",
                    "sw": "Wenza/Waume Waliogundulika na maambukizi ya Kaswende:",
                    "en": "Partners/husbands who were infected with Syphilis",
                    "condition": "subforms.anc_first_visit.partner_syphillus_status == 'yes' || subforms.anc_followup.partner_syphillus_status == 'yes'"
                },
                "patners_husbands_who_got_treatment_for_syphilis": {
                    "line_number": "4n",
                    "sw": "Wenza/waume waliopata matibabu ya Kaswende:",
                    "en": "Patners/husbands who got treatment for Syphilis",
                    "condition": "subforms.anc_first_visit.partner_syphillus_treatment == 'yes' || subforms.anc_followup.partner_syphillus_treatment == 'yes'"
                },
                "pregnant_women_who_were_infected_with_stds": {
                    "line_number": "4o",
                    "sw": "Waliopatikana na magoniwa ya mambukizo ya ngono:",
                    "en": "Pregnant women who were infected with STD's",
                    "condition": "subforms.anc_first_visit.std_status == 'yes' || subforms.anc_followup.std_status == 'yes'"
                },
                "patners_husbands_who_were_infected_with_stds": {
                    "line_number": "4p",
                    "sw": "Wenzi/waume Waliopatikana na magonjwa ya mambukizo ya ngono:",
                    "en": "Patners/husbands who were infected with STD's",
                    "condition": "subforms.anc_first_visit.partner_std == 'yes' || subforms.anc_followup.partner_std == 'yes'"
                },
                "pregnant_women_who_got_appropriate_treatment_for_stds": {
                    "line_number": "4q",
                    "sw": "Waliopata tiba sahihi ya magonjwa ya ngono:",
                    "en": "Pregnant women who got appropriate treatment for STD's",
                    "condition": "subforms.anc_first_visit.std_treatment == 'yes'|| subforms.anc_followup.std_treatment == 'yes'"
                },
                "patners_who_got_approprite_treatment_for_stds": {
                    "line_number": "4r",
                    "sw": "Wenzi/waume waliooata tiba sahihi ya magoniwa ya ngono:",
                    "en": "Patners who got appropriate treatment for STD's",
                    "condition": "subforms.anc_first_visit.partner_std_treatment == 'yes'|| subforms.anc_followup.partner_std_treatment== 'yes'"
                },
                "pmtct": {
                    "line_number": "5",
                    "sw": "PMTCT:",
                    "en": "PMTCT"
                },
                "pw_who_were_already_infected_by_hiv_before_starting_clinic": {
                    "line_number": "5a",
                    "sw": "Tayari wana maambukizi ya VVU kabla ya kuanza kliniki:",
                    "en": "PW who were already infected by HIV before starting Clinic",
                    "condition": "subforms.hiv_pregnancy_clinic.hiv_status_prior_firstvisit == 'yes' || subforms.anc_followup.hiv_status_prior_firstvisit == 'yes'|| subforms.anc_first_visit.hiv_status_prior_firstvisit== 'yes'"
                },
                "pw_who_were_counselled_before_testing_for_hiv": {
                    "line_number": "5b",
                    "sw": "Wajawazito wote waliopata ushauri nasaha kabla ya kupima VVU kliniki:",
                    "en": "PW who were counselled before testing for HIV",
                    "condition": "subforms.hiv_pregnancy_clinic.counseled_hiv_prior_test == 'yes' || subforms.anc_first_visit.counseled_hiv_prior_test == 'yes' || subforms.anc_followup.counseled_hiv_prior_test == 'yes'"
                },
                "pw_who_tested_for_hiv_for_the_first_time_at_the_clinic": {
                    "line_number": "5c",
                    "sw": "Wajawazito Waliopima VVU kipimo cha kwanza kliniki:",
                    "en": "PW who tested for HIV for the first time at the clinic",
                    "condition": "subforms.hiv_pregnancy_clinic.tested_hiv_firstvisit == 'yes' || subforms.anc_followup.tested_hiv_firstvisit == 'yes' || subforms.anc_first_visit.tested_hiv_firstvisit == 'yes'"
                },
                "pw_who_tested_positive_by_the_first_test": {
                    "line_number": "5d",
                    "sw": "Wajawazito Waliokutwa na VVU (positive) kipimo cha kwanza:",
                    "en": "PW who tested positive by the first test",
                    "condition": "subforms.hiv_pregnancy_clinic.first_hiv_status == 'yes' || subforms.anc_first_visit.first_hiv_status == 'yes' || subforms.anc_followup.first_hiv_status == 'yes'"
                },
                "pw_below_25_years_who_tested_for_hiv_for_the_first_time_at_the_clinic": {
                    "line_number": "5e",
                    "sw": "Wajawazito waliopimwa VVU Kipimo cha kwanza chini ya Umri wa miaka 25",
                    "en": " PW below 25 years who tested for HIV for the first time at the clinic",
                    "condition": "patient.approximate_age < 25 && (hiv_pregnancy_clinic.tested_hiv_firstvisit == 'yes' || subforms.anc_first_visit.tested_hiv_firstvisit_"
                },
                "pw_below_25_years_who_tested_positive_by_the_first_test": {
                    "line_number": "5f",
                    "sw": "Wajawazito Waliokutwa na VVU (positive) kipimo cha kwanza walio chini ya umri wa miaka 25:",
                    "en": "PW below 25 years who tested positive by the first test",
                    "condition": "patient.approximate_age < 25 && (hiv_pregnancy_clinic.first_hiv_status == 'yes' || subforms.anc_followup.first_hiv_status == 'yes')"
                },
                "pw_who_were_counselled_after_testing_hiv": {
                    "line_number": "5g",
                    "sw": "Wajawazito Waliopata Ushauri baada ya kupima:",
                    "en": "PW who were counselled after testing HIV",
                    "condition": "subforms.hiv_pregnancy_clinic.counseled_hiv_prior_test == 'yes' || subforms.anc_first_visit.counseled_hiv_prior_test == 'yes' || subforms.anc_followup.counseled_hiv_prior_test  == 'yes'"
                },
                "pw_who_tested_together_with_their_couple_together_at_the_clinic": {
                    "line_number": "5h",
                    "sw": "Wajawazito waliopimwa VVU na wenza wao (Couple) kwa pamoja katika kliniki ya wajawazito:",
                    "en": "PW who tested together with their couple together at the clinic",
                    "condition": "subforms.hiv_pregnancy_clinic.partner_hiv == 'yes' || subforms.anc_followup.partner_hiv == 'yes' || subforms.anc_first_visit.partner_hiv == 'yes'"
                },
                "pw_who_tested_hiv_by_the_second_test": {
                    "line_number": "5i",
                    "sw": "Wajawazito waliopima VVU kipimo cha pili:",
                    "en": "PW who tested HIV by the second test",
                    "condition": "subforms.hiv_pregnancy_clinic.second_hiv_test == 'yes' || subforms.anc_first_visit.second_hiv_test == 'yes' || subforms.anc_followup.second_hiv_test == 'yes'"
                },
                "pw_who_tested_positive_by_the_second_test": {
                    "line_number": "5j",
                    "sw": "Wajawazito waliokutwa na maambukizi ya VVU kipimo cha pili:",
                    "en": "PW who tested positive by the second test",
                    "condition": "subforms.hiv_pregnancy_clinic.second_hiv_test == 'yes' || subforms.anc_first_visit.second_hiv_test == 'yes' || subforms.anc_followup.second_hiv_test == 'yes'"
                },
                "partners_husbands_who_tested_for_hiv_at_the_clinic": {
                    "line_number": "5k",
                    "sw": "Wenza waliopima VVU Kliniki ya wajawazito:",
                    "en": "Patners/husbands who tested for HIV at the clinic",
                    "condition": "subforms.hiv_pregnancy_clinic.partner_hiv == 'yes' || subforms.anc_first_visit.partner_hiv == 'yes' || subforms.anc_followup.partner_hiv == 'yes'"
                },
                "partners_husbands_who_tested_positive_at_the_clinic": {
                    "line_number": "5l",
                    "sw": "Wenza waliogundulika kuwa na maambukizi ya VVU katika kliniki va wajawazito:",
                    "en": "Patners/husbands who tested positive at the clinic",
                    "condition": "subforms.hiv_pregnancy_clinic.partner_positive == 'yes' || subforms.anc_first_visit.partner_positive == 'yes' || subforms.anc_followup.partner_positive == 'yes'"
                },
                "discordant_couples": {
                    "line_number": "5m",
                    "sw": "Wajawazito na wenza waliopata majibu tofauti (discordant) baada ya kupima VVU kliniki",
                    "en": "Couples who have different HIV results after testing at the clinic(discordant couple)",
                    "condition": "subforms.hiv_pregnancy_clinic.discordant_couple == 'yes' || subforms.anc_first_visit.discordant_couple == 'yes' || subforms.anc_followup.discordant_couple == 'yes'"
                },
                "pw_who_received_pmtct_combination_drugs": {
                    "line_number": "5n",
                    "sw": "Wajawazito waliopewa dawa za Mchanganyiko za PMTCT:",
                    "en": "PW who received PMTCT combination drugs:",
                    "condition": "subforms.hiv_pregnancy_clinic.combo_drugs == 'yes' || subforms.anc_first_visit.combo_drugs == 'yes' || subforms.anc_followup.combo_drugs == 'yes'"
                },
                "pw_whi_are_using_art_drugs": {
                    "line_number": "5o",
                    "sw": "Wajawazito wanaotumia dawa za ART:",
                    "en": "PW whi are using ART drugs",
                    "condition": "subforms.hiv_pregnancy_clinic.art_drugs == 'yes' || subforms.anc_first_visit.art_drugs == 'yes' || subforms.anc_followup.art_drugs == 'yes'"
                },
                "pw_who_were_given_ctx": {
                    "line_number": "5p",
                    "sw": "Wajawazito Waliopewa CTX:",
                    "en": "PW who were given CTX (Cotrimocxazole)",
                    "condition": "subforms.hiv_pregnancy_clinic.ctx_given == 'yes' || subforms.anc_first_visit.ctx_given == 'yes' || subforms.anc_followup.ctx_given == 'yes'"
                },
                "pw_who_were_counselled_on_feeding_the_baby": {
                    "line_number": "5q",
                    "sw": "Waliopata ushauri iuu ya ulishaji wa mtoto:",
                    "en": "PW who were counselled on feeding the baby",
                    "condition": "subforms.hiv_pregnancy_clinic.counsel_feeding == 'yes' || subforms.anc_first_visit.counsel_feeding == 'yes' || subforms.anc_followup.counsel_feeding == 'yes'"
                },
                "malaria": {
                    "line_number": "6",
                    "sw": "Malaria:",
                    "en": "Malaria"
                },
                "pw_given_a_voucher_for_hati_punguzo": {
                    "line_number": "6a",
                    "sw": "Waliopewa vocha ya hati punguzo:",
                    "en": "PW given a voucher for Hati Punguzo (voucher for free mosquito net)",
                    "condition": "subforms.anc_first_visit.bednet_voucher == 'yes' || subforms.anc_followup.bednet_voucher == 'yes'"
                },
                "pw_tested_for_malaria": {
                    "line_number": "6b",
                    "sw": "Waliopima Malaria:",
                    "en": "PW tested for malaria",
                    "condition": "subforms.anc_first_visit.malaria_test == 'yes' || subforms.anc_followup.malaria_test == 'yes'"
                },
                "pw_tested_positive_for_malaria": {
                    "line_number": "6c",
                    "sw": "Waliopima Malaria positive:",
                    "en": "PW tested positive for Malaria",
                    "condition": "subforms.anc_first_visit.malaria_poss == 'yes' || subforms.anc_followup.malaria_poss == 'yes'"
                },
                "pw_given_ipt1_preventive_treatment": {
                    "line_number": "6d",
                    "sw": "Waliopewa IPT1:",
                    "en": "PW given IPT1 (IPT--Intermittent Preventive Treatment)",
                    "condition": "subforms.anc_first_visit.ipt1 == 'yes' || subforms.anc_followup.ipt1 == 'yes'"
                },
                "pw_given_ipt2": {
                    "line_number": "6e",
                    "sw": "Waliopewa IPT2:",
                    "en": "PW given IPT2",
                    "condition": "subforms.anc_first_visit.ipt2 == 'yes' || subforms.anc_followup.ipt2 == 'yes'"
                },
                "other_services": {
                    "line_number": "7",
                    "sw": "Huduma Nyingine:",
                    "en": "Other services"
                },
                "pw_given_enough_iron_folic_tablets": {
                    "line_number": "7",
                    "sw": "Waliopewa Iron/Folic vidonge vya kutosha:",
                    "en": "PW given enough Iron/Folic tablets",
                    "condition": "subforms.anc_first_visit.iron_tablets == 'yes' || subforms.anc_followup.iron_tablets == 'yes'"
                },
                "pw_given_antihelminths": {
                    "line_number": "8",
                    "sw": "Waliopewa Dawa za minyoo (Mebendazole / Albendazole):",
                    "en": "PW given antihelminths (Mebendazole/Albendazole)",
                    "condition": "subforms.anc_first_visit.alben_tablets == 'yes' || subforms.anc_followup.alben_tablets == 'yes'"
                },
                "pw_who_were_given_refferals": {
                    "line_number": "9",
                    "sw": "Waliopewa Rufaa wakati wa uiauzito:",
                    "en": "PW who were given refferals",
                    "condition": "subforms.anc_first_visit.referral == 'yes' || subforms.anc_followup.referral == 'yes'"
                },
                "pw_reffered_to_ctc": {
                    "line_number": "10",
                    "sw": "Waliopcwa Rufaa kwenda CTC:",
                    "en": "PW reffered to CTC (CTC-care and treatment center)",
                    "condition": "subforms.hiv_pregnancy_clinic.referred_ctc == 'yes' || subforms.anc_first_visit.referred_ctc == 'yes' || subforms.anc_followup.referred_ctc == 'yes'"
                },
                "definitions": {
                    "columns": {
                        "below20": {
                            "title": "Below 20 years old",
                            "condition": "patient.approximate_age < 20"
                        },
                        "above20": {
                            "title": "Above 20 years old",
                            "condition": "patient.approximate_age >= 20"
                        },
                        "total": {
                            "title": "Total",
                            "condition": "true"
                        }
                    }
                }
            }
        }, // end of report_anc
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
                    "condition": "subforms.reproductive_counseling.contraception_current == 'Depo Provera'"
                },
                "contraceptive_pills": {
                    "line_number": "2",
                    "sw": "Vidonge",
                    "en": "Contraceptive pills",
                },
                "the_number_of_pills_clients_at_the_clinic": {
                    "line_number": "2a",
                    "sw": "Idadi ya wateja wa Vidonge Kituoni",
                    "en": "The number of pills clients at the clinic",
                    "condition": "subforms.reproductive_counseling.contraception_current == 'Pills' && !(reproductive_counseling.contraception_distribution == 'CBD')"
                },
                "number_of_pills_clients_through_cbd": {
                    "line_number": "2b",
                    "sw": "Idadi ya wateja wa vidonge wa CBD",
                    "en": "Number of pills clients through CBD(Community Based Distribution)",
                    "field": "subforms.reproductive_counseling.contraception_current == 'Pills' && reproductive_counseling.contraception_distribution == 'CBD'"
                },
                "the_number_of_clients_who_were_given_pills_at_the_clinic_and_through_cbd": {
                    "line_number": "2c",
                    "sw": "Jumla walochukua Vidonge Kituoni na CBD (2a+2b)",
                    "en": "The number of clients who were given pills at the clinic and through CBD(2a+2b)",
                    "condition": "subforms.reproductive_counseling.contraception_current == 'Pills'"
                },
                "condoms": {
                    "line_number": "3",
                    "sw": "Kondom",
                    "en": "Condoms",
                    "heading": true
                },
                "the_number_of_male_clients_who_were_given_condoms_at_the_clinic": {
                    "line_number": "3a",
                    "sw": "Idadi ya wateja waliochukua kondom Kituoni Me",
                    "en": "The number of Male clients who were given condoms at the clinic",
                    "value": {
                        "field": "/visit/reproductive_counseling/male/condoms"
                    }
                },
                "the_number_of_female_clients_who_were_given_condoms_at_the_clinic": {
                    "line_number": "3b",
                    "sw": "Idadi ya wateja waliochukua kondom Kituoni Ke",
                    "en": "The number of Female clients who were given condoms at the clinic",
                    "value": {
                        "field": "/visit/reproductive_counseling/female/condoms"
                    }
                },
                "number_of__male_clients_who_were_given_condoms_by_cbd": {
                    "line_number": "3c",
                    "sw": "Idadi ya wateja waliochukua kondom CBD Me",
                    "en": "Number of male clients who were given condoms by CBD",
                    "value": {
                        "field": "/visit/reproductive_counseling/male/condoms_cbd"
                    }
                },
                "number_of_female_clients_who_were_given_condoms_by_cbd": {
                    "line_number": "3d",
                    "sw": "Idadi ya wateja waliochukua kondom CBD Ke",
                    "en": "Number of female clients who were given condoms by CBD",
                    "value": {
                        "field": "/visit/reproductive_counseling/female/condoms_cbd"
                    }
                },
                "total_customers_who_given_condoms_at_the_clinic_and_cbd": {
                    "line_number": "3e",
                    "sw": "Jumla ya Wateja waliochukua kondomu (kituoni na CBD) (3a+3b+3c+3d)",
                    "en": "Total Customers who given condoms at the clinic and CBD (3a+3b+3c+3d)",
                    "value": {
                        "field": "/visit/reproductive_counseling/condoms/total"
                    }
                },
                "total_customers_who_took_short-term_course": {
                    "line_number": "3f",
                    "sw": "Jumla ya Wateja waliochukua njia za muda mfupi (1+2c+3c)",
                    "en": "Total Customers who took short-term course (1+2c+3c)",
                    "value": {
                        "field": "/visit/reproductive_counseling/???"
                    }
                },
                "methods_of_long-term_and_permanent_family_planning": {
                    "line_number": "4",
                    "sw": "Njia za muda Mrefu na za kudumu za Uzazi wa Mpango",
                    "en": "Methods of long-term and permanent family planning",
                    "heading": true
                },
                "sterilization": {
                    "line_number": "4",
                    "sw": "Kufunga Uzazi",
                    "en": "Sterilization",
                    "heading": true
                },
                "women_sterilization_ml_la_at_the_clinic": {
                    "line_number": "4a",
                    "sw": "Kufunga Uzazi mama (ML/LA) - kituoni",
                    "en": "Women sterilization (ML / LA) - at the clinic",
                    "value": {
                        "field": "/visit/reproductive_counseling/female/sterilization"
                    }
                },
                "women_sterilization_ml_la_outreach": {
                    "line_number": "4b",
                    "sw": "Kufunga Uzazi mama (ML/LA) - outreach",
                    "en": "Women sterilization (ML / LA) - outreach",
                    "value": {
                        "field": "/visit/reproductive_counseling/female/sterilization/outreach"
                    }
                },
                "men_sterilization_nsv_at_the_clinic": {
                    "line_number": "4c",
                    "sw": "Kufunga uzazi baba (NSV) - kituoni",
                    "en": "Men sterilization (NSV) - at the clinic",
                    "value": {
                        "field": "/visit/reproductive_counseling/male/sterilization/clinic"
                    }
                },
                "men_sterilization_nsv_outreach": {
                    "line_number": "4d",
                    "sw": "Kufung uzazi baba (NSV) - outreach",
                    "en": "Men sterilization (NSV) - outreach",
                    "value": {
                        "field": "/visit/reproductive_counseling/male/sterilization/outreach"
                    }
                },
                "implants": {
                    "line_number": "5",
                    "sw": "Vipandikizi",
                    "en": "Implants",
                    "heading": true
                },
                "those_who_put_implants_at_the_clinic": {
                    "line_number": "5a",
                    "sw": "Kuweka vipandikizi - kituoni",
                    "en": "Those who put implants - at the clinic",
                    "value": {
                        "field": "/visit/reproductive_counseling/implants/clinic"
                    }
                },
                "those_who_put_implants_outreach": {
                    "line_number": "5b",
                    "sw": "Kuweka vipandikizi - outreach",
                    "en": "Those who put implants - outreach",
                    "value": {
                        "field": "/visit/reproductive_counseling/implants/outreach"
                    }
                },
                "removing_implants": {
                    "line_number": "5c",
                    "sw": "Kuondoa vipandikizi",
                    "en": "Removing implants",
                    "value": {
                        "field": "/visit/reproductive_counseling/implants/removal"
                    }
                },
                "intrauterine_methods_iucd": {
                    "line_number": "6",
                    "sw": "Kitanzi (IUCD)",
                    "en": "Intrauterine methods(IUCD)",
                    "value": {
                        "field": "/visit/reproductive_counseling/contraception_current/IUD"
                    }
                },
                "inserting_iud_clinic": {
                    "line_number": "6a",
                    "sw": "Kuweka Kitanzi - kituoni",
                    "en": "Inserting IUD (at the clinic)",
                    "value": {
                        "field": "/visit/reproductive_counseling/iud/insert/clinic"
                    }
                },
                "inserting_iud_outreach": {
                    "line_number": "6b",
                    "sw": "Kuweka Kitanzi - outreach",
                    "en": "Inserting IUD (outreach)",
                    "value": {
                        "field": "/visit/reproductive_counseling/iud/insert/outreach"
                    }
                },
                "removing_iud_clinic": {
                    "line_number": "6c",
                    "sw": "Kuondoa Kitanzi - kituoni",
                    "en": "Removing IUD (at the clinic)",
                    "value": {
                        "field": "/visit/reproductive_counseling/iud/removal/clinic"
                    }
                },
                "removing_iud_outreach": {
                    "line_number": "6d",
                    "sw": "Kuondoa Kitanzi - outreach",
                    "en": "Removing IUD (outreach)",
                    "value": {
                        "field": "/visit/reproductive_counseling/"
                    }
                },
                "total_number_of_client_who_used_permanent_contraceptive_methods": {
                    "line_number": "6e",
                    "sw": "Jumla ya Wateja waliochukua njia za muda mrefu na za Kudumu za Uzazi wa Mpango (4a+4b+4c+4d+5a+5b+6a+6b)",
                    "en": "Total number of client who used permanent contraceptive methods(4a+4b+4c+4d+5a+5b+6a+6b)"
                },
                "other_methods": {
                    "line_number": "7",
                    "sw": "Njia Nyinginezo",
                    "en": "Other methods"
                },
                "natural_ways": {
                    "line_number": "7a",
                    "sw": "Njia za maumbile (mfano LAM, BOM, joto, kalenda)",
                    "en": "Natural ways(eg. LAM,BOM,body temperature and calendar"
                },
                "other_methods": {
                    "line_number": "7b",
                    "sw": "Njia nyingine",
                    "en": "Other methods"
                },
                "total_number_of_clients_who_used_other_methods": {
                    "line_number": "7c",
                    "sw": "Jumla ya Njia Nyinginezo (7a+7b)",
                    "en": "Total number of clients who used other methods(7a+7b)"
                },
                "total_number_of_types_of_contraceptives": {
                    "line_number": "8",
                    "sw": "Jumla ya Aina zote Uzazi wa Mpango",
                    "en": "Total number of types of contraceptives"
                },
                "total_number_of_clients_who_used_all_types_of_contraceptives": {
                    "line_number": "8a",
                    "sw": "Jumla ya Wateja waliochukua njia zote za Uzazi Mpango (3f+6e+7c)",
                    "en": "Total number of clients who used all types of contraceptives(3f+6e+7c)"
                },
                "total_number_of_cycles_distributed": {
                    "line_number": "9",
                    "sw": "Jumla ya Mizunguko ya Vidonge Iliyotolewa",
                    "en": "Total number of cycles distributed"
                },
                "cycles_distributed_at_the_clinic": {
                    "line_number": "9a",
                    "sw": "Idadi ya mizunguko iliyotolewa (Cycles Distributed) - Kituoni",
                    "en": "Cycles distributed at the Clinic"
                },
                "cycles_distributed_by_cbd": {
                    "line_number": "9b",
                    "sw": "Idadi ya mizunguko iliyotolewa (Cycles Distributed) - CBD",
                    "en": "Cycles distributed by CBD"
                },
                "total_number_of_cycles_distributed": {
                    "line_number": "9c",
                    "sw": "Idadi ya mizunguko iliyotolewa (Cycles Distributed) (Kituoni na CBD) (9a+9b)",
                    "en": "Total number of cycles distributed(at the clinic+CBD) (9a+9b"
                },
                "condoms_given_out_to_clients": {
                    "line_number": "10",
                    "sw": "Kondomu zilizotolewa",
                    "en": "Condoms given out to clients"
                },
                "number_of_condoms_given_to_male_clients_at_the_clinic": {
                    "line_number": "10a",
                    "sw": "Idadi ya kondomu zilizogawiwa Kituoni Me",
                    "en": "Number of condoms given to male clients at the clinic"
                },
                "number_of_condoms_given_to_female_clients_at_the_clinic": {
                    "line_number": "10b",
                    "sw": "Idadi ya kondomu zilizogawiwa Kituoni Ke",
                    "en": "Number of condoms given to female clients at the clinic"
                },
                "number_of_condoms_given_to_male_clients_by_cbd": {
                    "line_number": "10c",
                    "sw": "Idadi ya kondomu zilizogawiwa CBD Me",
                    "en": "Number of condoms given to male clients by CBD"
                },
                "number_of_condoms_given_to_female_clients_by_cbd": {
                    "line_number": "10d",
                    "sw": "Idadi ya kondomu zilizogawiwa CBD Ke",
                    "en": "Number of condoms given to female clients by CBD"
                },
                "total_number_of_condoms_given_to_clients": {
                    "line_number": "10e",
                    "sw": "Idadi ya kondomu zilizogawiwa kituoni na CBD (10a+10b+10c+10d)",
                    "en": "Total number of condoms given to clients from the clinic and by CBD(10a+10b+10c+10d)",
                },
                "service_after_miscarriage_cpac_after_giving_birth": {
                    "line_number": "11",
                    "sw": "Huduma baada ya mimba kuharibika (cPAC) Baada ya kujifungua",
                    "en": "Service after miscarriage (CPAC) After giving birth",
                },
                "those_who_got_treatment_after_miscarriages": {
                    "line_number": "11a",
                    "sw": "Waliopata huduma baada ya mimba kubaribika",
                    "en": "Those who got treatment after miscarriages",
                },
                "those_who_used_contraception_after_miscarriage": {
                    "line_number": "11b",
                    "sw": "Waliopata uzazi wa mpango baada ya mimba kubaribika",
                    "en": "Those who used contraception after miscarriage",
                },
                "those_who_used_contraceptive_methods_42_days_after_giving_birth": {
                    "line_number": "11c",
                    "sw": "Waliopata njia ya uazazi wa mpango siku 42 baada ya kujifungua",
                    "en": "Those who used contraceptive methods 42 days after giving birth",
                },
                "clients_who_screened_for_cancer": {
                    "line_number": "12",
                    "sw": "Wateja waliochunguzwa saratani",
                    "en": "clients who screened for cancer",
                },
                "those_screened_for_breast_diseases": {
                    "line_number": "12a",
                    "sw": "waliochunguzwa tit",
                    "en": "Those Screened for breast diseases",
                },
                "detected_to_have_breast_cancer_symptoms": {
                    "line_number": "12b",
                    "sw": "Waliogundulika na matatizo ya matiti (mfano: kutoka damu kwenye chuchu au uvimbe wa matiti)",
                    "en": "Detected to have breast cancer symptoms (eg, bleeding or swelling of the breast nipples)",
                },
                "screened_for_cervical_diseases": {
                    "line_number": "12c",
                    "sw": "Waliochunguzwa Shingo ya mfuko wa uzazi",
                    "en": "Screened for cervical diseases",
                },
                "detected_to_have_cervical_diseases": {
                    "line_number": "12d",
                    "sw": "Waliogundulika na matatizo ya shingo ya mfuko wa uzazi (mfano: mchubuko au kidonda)",
                    "en": "Detected to have cervical diseases (eg, bruise or cervical ulcer)",
                },
                "detected_to_have_cervical_cancer_symptoms": {
                    "line_number": "12e",
                    "sw": "Waliodhamwa wana saratani ya shingo ya mfuko wa uzazi",
                    "en": "Detected to have cervical cancer symptoms",
                },
                "those_who_got_cryotherapy_service": {
                    "line_number": "12f",
                    "sw": "Waliopewa huduma ya Cryotherapy",
                    "en": "Those who got Cryotherapy service",
                },
                "pitc": {
                    "line_number": "13",
                    "sw": "PITC",
                    "en": "PITC",
                },
                "those_who_already_have_an_hiv_infection": {
                    "line_number": "13a",
                    "sw": "Tayari wana uambukizo wa VVU",
                    "en": "Those who already have an HIV infection",
                },
                "those_who_got_hiv_counseling": {
                    "line_number": "13b",
                    "sw": "Waliopata ushauri nasha juu ya VVU",
                    "en": "Those who got HIV counseling",
                },
                "clients_who_tested_for_hiv": {
                    "line_number": "13c",
                    "sw": "Wateja waliopima VVU",
                    "en": "Clients who tested for HIV",
                },
                "clients_who_received_post-test_counseling": {
                    "line_number": "13d",
                    "sw": "Wateja waliopata ushauri nasaha baada ya kupima",
                    "en": "Clients who received post-test counseling",
                },
                "customers_who_tested_positive": {
                    "line_number": "13e",
                    "sw": "Wateja waliogundulika Positive (+)",
                    "en": "Customers who tested positive (+)",
                },
                "partners_who_tested_for_hiv": {
                    "line_number": "13f",
                    "sw": "Wenza waliopima VVU",
                    "en": "Partners who tested for HIV",
                },
                "partners_who_tested_positive": {
                    "line_number": "13g",
                    "sw": "Wenza Waliogundulika Positive (+)",
                    "en": "Partners Who tested Positive (+)",
                },
                "discordant_couple": {
                    "line_number": "13h",
                    "sw": "Wateja ambao matokeo ya vipimo vya VVU yanatofautiana",
                    "en": "Clients who tested HIV and got different results(discordant couple)",
                },
                "clients_who_were_reffered_to_ctc": {
                    "line_number": "13i",
                    "sw": "Wateja waliopata rufaa kwenda CTC",
                    "en": "Clients who were reffered to CTC",
                },
                "NEED_TRANSLATION": {
                    "line_number": "13j",
                    "sw": "Wataja waliopata rufaa kwenda CTC",
                    "en": "NEED TRANSLATION"
                },
            },
            "definitions": {
                "columns": {
                    "below20": {
                        "title": "Below 20 years old",
                        "condition": "patient.approximate_age < 20"
                    },
                    "above20": {
                        "title": "Above 20 years old",
                        "condition": "patient.approximate_age >= 20"
                    },
                    "total": {
                        "title": "Total",
                        "condition": "patient.approximate_age > 0"
                    }
                }
            }
        } // end of report_contraceptive
    }
}