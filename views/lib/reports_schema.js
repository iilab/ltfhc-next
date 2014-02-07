// in the map, for each document
//   for each report line
//     for each bucket
//        

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
                    "condition": "subforms.anc_first_visit.number_pregnancy > 4"
                },
                "age_less_than_20_years": {
                    "line_number": "4b",
                    "sw": "Umri chini ya miaka 20:",
                    "en": "age less than 20 years",
                    "condition": "patient.patient_age < 20"
                },
                "age_over_35_years": {
                    "line_number": "4c",
                    "sw": "Umri zaidi ya miaka 35:",
                    "en": "age over 35 years",
                    "condition": "patient.patient_age > 35"
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
                    "condition": "subforms.anc_first_visit.pregnancy_diseases =='Heart Disease'"
                },
                "diabetes": {
                    "line_number": "4g",
                    "sw": "Kisukari:",
                    "en": "Diabetes",
                    "condition": "subforms.anc_first_visit.pregnancy_diseases == 'Diabetes'"
                },
                "tuberculosis": {
                    "line_number": "4h",
                    "sw": "Kifua kikuu:",
                    "en": "Tuberculosis",
                    "condition": "subforms.anc_first_visit.pregnancy_diseases == 'Tuberculosis'"
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
                }
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
    }; // end of report_anc
};