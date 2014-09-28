/*
 * Default app_settings values. This file will get merged with the actual
 * `app_settings` property on the design doc.
 *
 * If you add a new value to kanso.json settings_schema then you should update
 * this file also.  If you forget to update this then new defauls won't show up
 * in settings until it gets saved in the dashboard. This can be an issue if
 * you have a new feature that expects a setting default value.
 */

module.exports = {
    "locales": {
        "en": "English",
        "fr": "Français",
        "sw": "Swahili"
    },
    "muvuku_webapp_url": "/muvuku-webapp/_design/muvuku-webapp/_rewrite/?_embed_mode=2",
    "reported_date_format": "MMM hh:mm",
    "forms_only_mode": false,
    "public_access": false,
    "gateway_number": "+13125551212",
    "kujua-reporting": [{
        "code": "VPD",
        "reporting_freq": "weekly"
    }],
    "schedule_morning_hours": 0,
    "schedule_evening_hours": 23,
    "synthetic_date": "",
    "contact_display_short": "clinic.name",
    "translations": [

        // Begin LTFHC Reports
        {
            "en": "",
            "sw": "",
            "key": "report_leprosy.total_notifications"
        }, {
            "en": "",
            "sw": "",
            "key": "report_leprosy.total_c"
        }, {
            "en": "",
            "sw": "",
            "key": "report_leprosy.defaulter"
        }, {
            "en": "",
            "sw": "",
            "key": "report_leprosy.disability_grade_1"
        }, {
            "en": "",
            "sw": "",
            "key": "report_leprosy.disability_grade_0"
        }, {
            "en": "",
            "sw": "",
            "key": "report_leprosy.return_after_default"
        }, {
            "en": "",
            "sw": "",
            "key": "report_leprosy.relapse_after_MDT"
        }, {
            "en": "",
            "sw": "",
            "key": "report_leprosy.newly_registered"
        }, {
            "en": "",
            "sw": "",
            "key": "report_leprosy.disability_grade_2"
        }, {
            "en": "",
            "sw": "",
            "key": "report_leprosy.corticosteroids"
        }, {
            "en": "",
            "sw": "",
            "key": "report_leprosy.totals"
        }, {
            "en": "",
            "sw": "",
            "key": "report_leprosy.1pb"
        }, {
            "en": "",
            "sw": "",
            "key": "report_leprosy.disability_grade_total"
        }, {
            "en": "",
            "sw": "",
            "key": "report_leprosy.died"
        }, {
            "en": "",
            "sw": "",
            "key": "report_leprosy.treatment_completed"
        }, {
            "en": "",
            "sw": "",
            "key": "report_leprosy.1mb"
        }, {
            "en": "",
            "sw": "",
            "key": "report_leprosy.transferred_out"
        }, {
            "en": "",
            "sw": "",
            "key": "report_leprosy.relapse_after_dds"
        }, {
            "en": "",
            "sw": "",
            "key": "report_leprosy.registered_at_end_of_quarter"
        }, {
            "en": "Methods of long-term and permanent family planning",
            "sw": "Njia za muda Mrefu na za kudumu za Uzazi wa Mpango",
            "key": "report_contraceptive.methods_of_long-term_and_permanent_family_planning"
        }, {
            "en": "Inserting IUD (at the clinic)",
            "sw": "Kuweka Kitanzi - kituoni",
            "key": "report_contraceptive.inserting_iud_clinic"
        }, {
            "en": "Screened for cervical diseases",
            "sw": "Waliochunguzwa Shingo ya mfuko wa uzazi",
            "key": "report_contraceptive.screened_for_cervical_diseases"
        }, {
            "en": "Service after miscarriage (CPAC) After giving birth",
            "sw": "Huduma baada ya mimba kuharibika (cPAC) Baada ya kujifungua",
            "key": "report_contraceptive.service_after_miscarriage_cpac_after_giving_birth"
        }, {
            "en": "Women sterilization (ML / LA) - outreach",
            "sw": "Kufunga Uzazi mama (ML/LA) - outreach",
            "key": "report_contraceptive.women_sterilization_ml_la_outreach"
        }, {
            "en": "Clients who tested for HIV",
            "sw": "Wateja waliopima VVU",
            "key": "report_contraceptive.clients_who_tested_for_hiv"
        }, {
            "en": "Implants",
            "sw": "Vipandikizi",
            "key": "report_contraceptive.implants"
        }, {
            "en": "Total number of client who used permanent contraceptive methods(4a+4b+4c+4d+5a+5b+6a+6b)",
            "sw": "Jumla ya Wateja waliochukua njia za muda mrefu na za Kudumu za Uzazi wa Mpango (4a+4b+4c+4d+5a+5b+6a+6b)",
            "key": "report_contraceptive.total_number_of_client_who_used_permanent_contraceptive_methods"
        }, {
            "en": "Inserting IUD (outreach)",
            "sw": "Kuweka Kitanzi - outreach",
            "key": "report_contraceptive.inserting_iud_outreach"
        }, {
            "en": "Contraceptive pills",
            "sw": "Vidonge",
            "key": "report_contraceptive.contraceptive_pills"
        }, {
            "en": "Partners Who tested Positive (+)",
            "sw": "Wenza Waliogundulika Positive (+)",
            "key": "report_contraceptive.partners_who_tested_positive"
        }, {
            "en": "Total number of condoms given to clients from the clinic and by CBD(10a+10b+10c+10d)",
            "sw": "Idadi ya kondomu zilizogawiwa kituoni na CBD (10a+10b+10c+10d)",
            "key": "report_contraceptive.total_number_of_condoms_given_to_clients"
        }, {
            "en": "Patients who were referred to CTC",
            "sw": "Wataja waliopata rufaa kwenda CTC",
            "key": "report_contraceptive.NEED_TRANSLATION"
        }, {
            "en": "Total number of clients who used all types of contraceptives(3f+6e+7c)",
            "sw": "Jumla ya Wateja waliochukua njia zote za Uzazi Mpango (3f+6e+7c)",
            "key": "report_contraceptive.total_number_of_clients_who_used_all_types_of_contraceptives"
        }, {
            "en": "Natural ways(eg. LAM,BOM,body temperature and calendar",
            "sw": "Njia za maumbile (mfano LAM, BOM, joto, kalenda)",
            "key": "report_contraceptive.natural_ways"
        }, {
            "en": "Total Customers who took short-term course (1+2c+3c)",
            "sw": "Jumla ya Wateja waliochukua njia za muda mfupi (1+2c+3c)",
            "key": "report_contraceptive.total_customers_who_took_short-term_course"
        }, {
            "en": "Those who used contraceptive methods 42 days after giving birth",
            "sw": "Waliopata njia ya uazazi wa mpango siku 42 baada ya kujifungua",
            "key": "report_contraceptive.those_who_used_contraceptive_methods_42_days_after_giving_birth"
        }, {
            "en": "Partners who tested for HIV",
            "sw": "Wenza waliopima VVU",
            "key": "report_contraceptive.partners_who_tested_for_hiv"
        }, {
            "en": "Those who put implants - outreach",
            "sw": "Kuweka vipandikizi - outreach",
            "key": "report_contraceptive.those_who_put_implants_outreach"
        }, {
            "en": "Removing implants",
            "sw": "Kuondoa vipandikizi",
            "key": "report_contraceptive.removing_implants"
        }, {
            "en": "Removing IUD (outreach)",
            "sw": "Kuondoa Kitanzi - outreach",
            "key": "report_contraceptive.removing_iud_outreach"
        }, {
            "en": "Condoms given out to clients",
            "sw": "Kondomu zilizotolewa",
            "key": "report_contraceptive.condoms_given_out_to_clients"
        }, {
            "en": "Clients who received post-test counseling",
            "sw": "Wateja waliopata ushauri nasaha baada ya kupima",
            "key": "report_contraceptive.clients_who_received_post-test_counseling"
        }, {
            "en": "Those who got HIV counseling",
            "sw": "Waliopata ushauri nasha juu ya VVU",
            "key": "report_contraceptive.those_who_got_hiv_counseling"
        }, {
            "en": "Women sterilization (ML / LA) - at the clinic",
            "sw": "Kufunga Uzazi mama (ML/LA) - kituoni",
            "key": "report_contraceptive.women_sterilization_ml_la_at_the_clinic"
        }, {
            "en": "Number of condoms given to male clients by CBD",
            "sw": "Idadi ya kondomu zilizogawiwa CBD Me",
            "key": "report_contraceptive.number_of_condoms_given_to_male_clients_by_cbd"
        }, {
            "en": "Number of condoms given to female clients at the clinic",
            "sw": "Idadi ya kondomu zilizogawiwa Kituoni Ke",
            "key": "report_contraceptive.number_of_condoms_given_to_female_clients_at_the_clinic"
        }, {
            "en": "Cycles distributed at the Clinic",
            "sw": "Idadi ya mizunguko iliyotolewa (Cycles Distributed) - Kituoni",
            "key": "report_contraceptive.cycles_distributed_at_the_clinic"
        }, {
            "en": "Removing IUD (at the clinic)",
            "sw": "Kuondoa Kitanzi - kituoni",
            "key": "report_contraceptive.removing_iud_clinic"
        }, {
            "en": "The number of clients who were given pills at the clinic and through CBD(2a+2b)",
            "sw": "Jumla walochukua Vidonge Kituoni na CBD (2a+2b)",
            "key": "report_contraceptive.the_number_of_clients_who_were_given_pills_at_the_clinic_and_through_cbd"
        }, {
            "en": "Number of customers who use contraceptive injection",
            "sw": "Idaji ya Wateja wa Sindano",
            "key": "report_contraceptive.number_of_customers_who_use_contraceptive_injection"
        }, {
            "en": "Number of female clients who were given condoms by CBD",
            "sw": "Idadi ya wateja waliochukua kondom CBD Ke",
            "key": "report_contraceptive.number_of_female_clients_who_were_given_condoms_by_cbd"
        }, {
            "en": "Men sterilization (NSV) - outreach",
            "sw": "Kufung uzazi baba (NSV) - outreach",
            "key": "report_contraceptive.men_sterilization_nsv_outreach"
        }, {
            "en": "Sterilization",
            "sw": "Kufunga Uzazi",
            "key": "report_contraceptive.sterilization"
        }, {
            "en": "Number of male clients who were given condoms by CBD",
            "sw": "Idadi ya wateja waliochukua kondom CBD Me",
            "key": "report_contraceptive.number_of__male_clients_who_were_given_condoms_by_cbd"
        }, {
            "en": "Clients who tested HIV and got different results(discordant couple)",
            "sw": "Wateja ambao matokeo ya vipimo vya VVU yanatofautiana",
            "key": "report_contraceptive.discordant_couple"
        }, {
            "en": "Clients who were reffered to CTC",
            "sw": "Wateja waliopata rufaa kwenda CTC",
            "key": "report_contraceptive.clients_who_were_reffered_to_ctc"
        }, {
            "en": "Those who already have an HIV infection",
            "sw": "Tayari wana uambukizo wa VVU",
            "key": "report_contraceptive.those_who_already_have_an_hiv_infection"
        }, {
            "en": "Other methods",
            "sw": "Njia nyingine",
            "key": "report_contraceptive.other_methods"
        }, {
            "en": "clients who screened for cancer",
            "sw": "Wateja waliochunguzwa saratani",
            "key": "report_contraceptive.clients_who_screened_for_cancer"
        }, {
            "en": "Customers who tested positive (+)",
            "sw": "Wateja waliogundulika Positive (+)",
            "key": "report_contraceptive.customers_who_tested_positive"
        }, {
            "en": "Those who used contraception after miscarriage",
            "sw": "Waliopata uzazi wa mpango baada ya mimba kubaribika",
            "key": "report_contraceptive.those_who_used_contraception_after_miscarriage"
        }, {
            "en": "Those Screened for breast diseases",
            "sw": "waliochunguzwa tit",
            "key": "report_contraceptive.those_screened_for_breast_diseases"
        }, {
            "en": "Total number of types of contraceptives",
            "sw": "Jumla ya Aina zote Uzazi wa Mpango",
            "key": "report_contraceptive.total_number_of_types_of_contraceptives"
        }, {
            "en": "Those who put implants - at the clinic",
            "sw": "Kuweka vipandikizi - kituoni",
            "key": "report_contraceptive.those_who_put_implants_at_the_clinic"
        }, {
            "en": "Cycles distributed by CBD",
            "sw": "Idadi ya mizunguko iliyotolewa (Cycles Distributed) - CBD",
            "key": "report_contraceptive.cycles_distributed_by_cbd"
        }, {
            "en": "Intrauterine methods(IUCD)",
            "sw": "Kitanzi (IUCD)",
            "key": "report_contraceptive.intrauterine_methods_iucd"
        }, {
            "en": "Injectable methods",
            "sw": "Sindano",
            "key": "report_contraceptive.injectable_methods"
        }, {
            "en": "Men sterilization (NSV) - at the clinic",
            "sw": "Kufunga uzazi baba (NSV) - kituoni",
            "key": "report_contraceptive.men_sterilization_nsv_at_the_clinic"
        }, {
            "en": "Detected to have breast cancer symptoms (eg, bleeding or swelling of the breast nipples)",
            "sw": "Waliogundulika na matatizo ya matiti (mfano: kutoka damu kwenye chuchu au uvimbe wa matiti)",
            "key": "report_contraceptive.detected_to_have_breast_cancer_symptoms"
        }, {
            "en": "Detected to have cervical diseases (eg, bruise or cervical ulcer)",
            "sw": "Waliogundulika na matatizo ya shingo ya mfuko wa uzazi (mfano: mchubuko au kidonda)",
            "key": "report_contraceptive.detected_to_have_cervical_diseases"
        }, {
            "en": "Condoms",
            "sw": "Kondom",
            "key": "report_contraceptive.condoms"
        }, {
            "en": "Those who got treatment after miscarriages",
            "sw": "Waliopata huduma baada ya mimba kubaribika",
            "key": "report_contraceptive.those_who_got_treatment_after_miscarriages"
        }, {
            "en": "Number of pills clients through CBD(Community Based Distribution)",
            "sw": "Idadi ya wateja wa vidonge wa CBD",
            "key": "report_contraceptive.number_of_pills_clients_through_cbd"
        }, {
            "en": "The number of female clients who were given condoms at the clinic",
            "sw": "Idadi ya wateja waliochukua kondom Kituoni Ke",
            "key": "report_contraceptive.the_number_of_female_clients_who_were_given_condoms_at_the_clinic"
        }, {
            "en": "Total Customers who given condoms at the clinic and CBD (3a+3b+3c+3d)",
            "sw": "Jumla ya Wateja waliochukua kondomu (kituoni na CBD) (3a+3b+3c+3d)",
            "key": "report_contraceptive.total_customers_who_given_condoms_at_the_clinic_and_cbd"
        }, {
            "en": "Total number of clients who used other methods(7a+7b)",
            "sw": "Jumla ya Njia Nyinginezo (7a+7b)",
            "key": "report_contraceptive.total_number_of_clients_who_used_other_methods"
        }, {
            "en": "Those who got Cryotherapy service",
            "sw": "Waliopewa huduma ya Cryotherapy",
            "key": "report_contraceptive.those_who_got_cryotherapy_service"
        }, {
            "en": "The number of male clients who were given condoms at the clinic",
            "sw": "Idadi ya wateja waliochukua kondom Kituoni Me",
            "key": "report_contraceptive.the_number_of_male_clients_who_were_given_condoms_at_the_clinic"
        }, {
            "en": "Number of condoms given to female clients by CBD",
            "sw": "Idadi ya kondomu zilizogawiwa cbd Ke",
            "key": "report_contraceptive.number_of_condoms_given_to_female_clients_by_cbd"
        }, {
            "en": "PITC",
            "sw": "PITC",
            "key": "report_contraceptive.pitc"
        }, {
            "en": "The number of pills clients at the clinic",
            "sw": "Idadi ya wateja wa Vidonge Kituoni",
            "key": "report_contraceptive.the_number_of_pills_clients_at_the_clinic"
        }, {
            "en": "Detected to have cervical cancer symptoms",
            "sw": "Waliodhamwa wana saratani ya shingo ya mfuko wa uzazi",
            "key": "report_contraceptive.detected_to_have_cervical_cancer_symptoms"
        }, {
            "en": "Number of condoms given to male clients at the clinic",
            "sw": "Idadi ya kondomu zilizogawiwa Kituoni Me",
            "key": "report_contraceptive.number_of_condoms_given_to_male_clients_at_the_clinic"
        }, {
            "en": "Total number of cycles distributed(at the clinic+CBD) (9a+9b)",
            "sw": "Idadi ya mizunguko iliyotolewa (Cycles Distributed) (Kituoni na CBD) (9a+9b)",
            "key": "report_contraceptive.total_number_of_cycles_distributed"
        }, {
            "en": "PW given IPT2",
            "sw": "Waliopewa IPT2:",
            "key": "report_anc.pw_given_ipt2"
        }, {
            "en": " PW below 25 years who tested for HIV for the first time at the clinic",
            "sw": "Wajawazito waliopimwa VVU Kipimo cha kwanza chini ya Umri wa miaka 25",
            "key": "report_anc.pw_below_25_years_who_tested_for_hiv_for_the_first_time_at_the_clinic"
        }, {
            "en": "severe anemia <8.5g/dl - Anaemia first attendance",
            "sw": "Upungufu mkubwa wa damu <8.5g/dl - Anaemia hudhurio Ia kwanza:",
            "key": "report_anc.severe_anemia_first_attendance"
        }, {
            "en": "Pregnant women who got appropriate treatment for STD's",
            "sw": "Waliopata tiba sahihi ya magonjwa ya ngono:",
            "key": "report_anc.pregnant_women_who_got_appropriate_treatment_for_stds"
        }, {
            "en": "Patners/husbands who got treatment for Syphilis",
            "sw": "Wenza/waume waliopata matibabu ya Kaswende:",
            "key": "report_anc.patners_husbands_who_got_treatment_for_syphilis"
        }, {
            "en": "Those who tested for Syphillus",
            "sw": "Waliopima Kaswendwe:",
            "key": "report_anc.those_who_tested_for_syphillus"
        }, {
            "en": "PW given a voucher for Hati Punguzo (voucher for free mosquito net)",
            "sw": "Waliopewa vocha ya hati punguzo:",
            "key": "report_anc.pw_given_a_voucher_for_hati_punguzo"
        }, {
            "en": "PMTCT",
            "sw": "PMTCT:",
            "key": "report_anc.pmtct"
        }, {
            "en": "Pregnant women who received vaccination of TT2+",
            "sw": "Wajawazito waliopata Chanjo ya TT2+:",
            "key": "report_anc.pregnant_women_who_received_vaccination_of_tt2"
        }, {
            "en": "PW who were given refferals",
            "sw": "Waliopewa Rufaa wakati wa uiauzito:",
            "key": "report_anc.pw_who_were_given_refferals"
        }, {
            "en": "Patners/husbands who tested positive at the clinic",
            "sw": "Wenza waliogundulika kuwa na maambukizi ya VVU katika kliniki va wajawazito:",
            "key": "report_anc.partners_husbands_who_tested_positive_at_the_clinic"
        }, {
            "en": "PW who tested positive by the first test",
            "sw": "Wajawazito Waliokutwa na VVU (positive) kipimo cha kwanza:",
            "key": "report_anc.pw_who_tested_positive_by_the_first_test"
        }, {
            "en": "Patners/husbands who tested for HIV at the clinic",
            "sw": "Wenza waliopima VVU Kliniki ya wajawazito:",
            "key": "report_anc.partners_husbands_who_tested_for_hiv_at_the_clinic"
        }, {
            "en": "Couples who have different HIV results after testing at the clinic(discordant couple)",
            "sw": "Wajawazito na wenza waliopata majibu tofauti (discordant) baada ya kupima VVU kliniki",
            "key": "report_anc.discordant_couples"
        }, {
            "en": "age less than 20 years",
            "sw": "Umri chini ya miaka 20:",
            "key": "report_anc.age_less_than_20_years"
        }, {
            "en": "PW given antihelminths (Mebendazole/Albendazole)",
            "sw": "Waliopewa Dawa za minyoo (Mebendazole / Albendazole):",
            "key": "report_anc.pw_given_antihelminths"
        }, {
            "en": "Patners who got appropriate treatment for STD's",
            "sw": "Wenzi/waume waliooata tiba sahihi ya magoniwa ya ngono:",
            "key": "report_anc.patners_who_got_approprite_treatment_for_stds"
        }, {
            "en": "First visit",
            "sw": "Hudhurio la kwanza",
            "key": "report_anc.first_visit"
        }, {
            "en": "PW who were given CTX (Cotrimocxazole)",
            "sw": "Wajawazito Waliopewa CTX:",
            "key": "report_anc.pw_who_were_given_ctx"
        }, {
            "en": "PW given IPT1 (IPT--Intermittent Preventive Treatment)",
            "sw": "Waliopewa IPT1:",
            "key": "report_anc.pw_given_ipt1_preventive_treatment"
        }, {
            "en": "PW whi are using ART drugs",
            "sw": "Wajawazito wanaotumia dawa za ART:",
            "key": "report_anc.pw_whi_are_using_art_drugs"
        }, {
            "en": "Patners/husbands who were infected with STD's",
            "sw": "Wenzi/waume Waliopatikana na magonjwa ya mambukizo ya ngono:",
            "key": "report_anc.patners_husbands_who_were_infected_with_stds"
        }, {
            "en": "Fourth visits for all pregnant women",
            "sw": "Hudhurio la nne wajawazito wote",
            "key": "report_anc.fourth_visits_for_all_pregnant_women"
        }, {
            "en": "PW who tested HIV by the second test",
            "sw": "Wajawazito waliopima VVU kipimo cha pili:",
            "key": "report_anc.pw_who_tested_hiv_by_the_second_test"
        }, {
            "en": "clients for return visits",
            "sw": "Wateja wa marudio",
            "key": "report_anc.clients_for_return_visits"
        }, {
            "en": "Risk factors",
            "sw": "Vidokezo vya Hatari:",
            "key": "report_anc.risk_factors"
        }, {
            "en": "Patners/husbands who tested for Syphillis",
            "sw": "Wenza/Waume waliopima Kaswende:",
            "key": "report_anc.partners_husbands_who_tested_for_syphillis"
        }, {
            "en": "PW who tested for HIV for the first time at the clinic",
            "sw": "Wajawazito Waliopima VVU kipimo cha kwanza kliniki:",
            "key": "report_anc.pw_who_tested_for_hiv_for_the_first_time_at_the_clinic"
        }, {
            "en": "PW who were counselled before testing for HIV",
            "sw": "Wajawazito wote waliopata ushauri nasaha kabla ya kupima VVU kliniki:",
            "key": "report_anc.pw_who_were_counselled_before_testing_for_hiv"
        }, {
            "en": "Malaria",
            "sw": "Malaria:",
            "key": "report_anc.malaria"
        }, {
            "en": "Gestational age below 12 weeks(<12weeks)",
            "sw": "Umri wa mimba chini ya wiki 12 (<12weeks)",
            "key": "report_anc.current_gestationalage_weeks_below_12_weeks"
        }, {
            "en": "PW tested for malaria",
            "sw": "Waliopima Malaria:",
            "key": "report_anc.pw_tested_for_malaria"
        }, {
            "en": "PW who were counselled after testing HIV",
            "sw": "Wajawazito Waliopata Ushauri baada ya kupima:",
            "key": "report_anc.pw_who_were_counselled_after_testing_hiv"
        }, {
            "en": "PW who were already infected by HIV before starting Clinic",
            "sw": "Tayari wana maambukizi ya VVU kabla ya kuanza kliniki:",
            "key": "report_anc.pw_who_were_already_infected_by_hiv_before_starting_clinic"
        }, {
            "en": "Number of expected pregnant women",
            "sw": "Idadi ya Wajawazito Waliotegemewa",
            "key": "report_anc.number_of_expected_pregnant_women"
        }, {
            "en": "total attendance(2c+2d)",
            "sw": "Jumla ya Mahudhurio yote (2c+2d)",
            "key": "report_anc.total_attendance"
        }, {
            "en": "Gestational at week 12 or more (12+weeks)",
            "sw": "Umri wa mimba wiki 12 au zaidi (12+ weeks)",
            "key": "report_anc.gestational_at_week_12_or_more"
        }, {
            "en": "PW who were counselled on feeding the baby",
            "sw": "Waliopata ushauri iuu ya ulishaji wa mtoto:",
            "key": "report_anc.pw_who_were_counselled_on_feeding_the_baby"
        }, {
            "en": "Number of pregnant women who tested during the first visit at the clinic",
            "sw": "Idadi ya wajawazito waliopima damu hudhurio la kwanza",
            "key": "report_anc.number_of_pregnant_women_tested_first_visit"
        }, {
            "en": "Those who got Syphillis treatment",
            "sw": "Waliopata matibabu ya Kaswende:",
            "key": "report_anc.those_who_got_syphillis_treatment"
        }, {
            "en": "Tuberculosis",
            "sw": "Kifua kikuu:",
            "key": "report_anc.tuberculosis"
        }, {
            "en": "PW given enough Iron/Folic tablets",
            "sw": "Waliopewa Iron/Folic vidonge vya kutosha:",
            "key": "report_anc.pw_given_enough_iron_folic_tablets"
        }, {
            "en": "Diabetes",
            "sw": "Kisukari:",
            "key": "report_anc.diabetes"
        }, {
            "en": "PW who received PMTCT combination drugs:",
            "sw": "Wajawazito waliopewa dawa za Mchanganyiko za PMTCT:",
            "key": "report_anc.pw_who_received_pmtct_combination_drugs"
        }, {
            "en": "Those who were infected with Syphillus",
            "sw": "Waliogundulika na maambukizi ya Kaswende:",
            "key": "report_anc.those_who_were_infected_with_syphilis"
        }, {
            "en": "blood pressure (BP => 140/90mm/hg):",
            "sw": "Shinikizo Ia damu (BP => 140/90mm/hg):",
            "key": "report_anc.blood_pressure_high"
        }, {
            "en": "Partners/husbands who were infected with Syphilis",
            "sw": "Wenza/Waume Waliogundulika na maambukizi ya Kaswende:",
            "key": "report_anc.patners_husbands_who_were_infected_with_syphilis"
        }, {
            "en": "PW below 25 years who tested positive by the first test",
            "sw": "Wajawazito Waliokutwa na VVU (positive) kipimo cha kwanza walio chini ya umri wa miaka 25:",
            "key": "report_anc.pw_below_25_years_who_tested_positive_by_the_first_test"
        }, {
            "en": "Other services",
            "sw": "Huduma Nyingine:",
            "key": "report_anc.other_services"
        }, {
            "en": "PW tested positive for Malaria",
            "sw": "Waliopima Malaria positive:",
            "key": "report_anc.pw_tested_positive_for_malaria"
        }, {
            "en": "conceived more than four times",
            "sw": "Mimba zaidi ya 4:",
            "key": "report_anc.conceived_more_than_four_times"
        }, {
            "en": "PW who tested together with their couple together at the clinic",
            "sw": "Wajawazito waliopimwa VVU na wenza wao (Couple) kwa pamoja katika kliniki ya wajawazito:",
            "key": "report_anc.pw_who_tested_together_with_their_couple_together_at_the_clinic"
        }, {
            "en": "Pregnant women who were infected with STD's",
            "sw": "Waliopatikana na magoniwa ya mambukizo ya ngono:",
            "key": "report_anc.pregnant_women_who_were_infected_with_stds"
        }, {
            "en": "PW who tested positive by the second test",
            "sw": "Wajawazito waliokutwa na maambukizi ya VVU kipimo cha pili:",
            "key": "report_anc.pw_who_tested_positive_by_the_second_test"
        }, {
            "en": "Total attendance of first visits(2a+2b)",
            "sw": "Jumla ya hudhurio la Kwanza (2a+2b)",
            "key": "report_anc.total_attendance_of_first_visits(2a+2b)"
        }, {
            "en": "age over 35 years",
            "sw": "Umri zaidi ya miaka 35:",
            "key": "report_anc.age_over_35_years"
        }, {
            "en": "Heart disease",
            "sw": "Ugonjwa wa moyo:",
            "key": "report_anc.heart_disease"
        }, {
            "en": "PW reffered to CTC (CTC-care and treatment center)",
            "sw": "Waliopcwa Rufaa kwenda CTC:",
            "key": "report_anc.pw_reffered_to_ctc"
        }, {
            "en": "Soil transmitted helminths",
            "sw": "Soil transmitted helminths",
            "key": "report_ipd.soil_transmitted_helminths"
        }, {
            "en": "Fractures",
            "sw": "Fractures",
            "key": "report_ipd.fractures"
        }, {
            "en": "Acute glumerulonephritis",
            "sw": "Acute glumerulonephritis",
            "key": "report_ipd.acute_glumerulonephritis"
        }, {
            "en": "maleria Severe/Complicated Clinical no test",
            "sw": "Malaria Severe/Complicated Clinical no test",
            "key": "report_ipd.malaria_severe_complicated_clinical_no_test"
        }, {
            "en": "Broncial Asthma Severe",
            "sw": "Broncial Asthma Severe",
            "key": "report_ipd.broncial_asthma_severe"
        }, {
            "en": "STI Pelvic Inflammatory diseases PID",
            "sw": "STI Pelvic Inflammatory diseases PID",
            "key": "report_ipd.sti_pelvic_inflammatory_diseases"
        }, {
            "en": "Psychoses",
            "sw": "Psychoses",
            "key": "report_ipd.psychoses"
        }, {
            "en": "Anaemia Severe",
            "sw": "Anaemia Severe",
            "key": "report_ipd.anaemia_severe"
        }, {
            "en": "Poisoning",
            "sw": "Poisoning",
            "key": "report_ipd.poisoning"
        }, {
            "en": "Diarrhea Chronic >or= 14days",
            "sw": "Diarrhea Chronic >or= 14days",
            "key": "report_ipd.diarrhea_chronic"
        }, {
            "en": "Peptic ulcers",
            "sw": "Peptic ulcers",
            "key": "report_ipd.peptic_ulcers"
        }, {
            "en": "Eye Diseases non-infectious",
            "sw": "Eye Diseases non-infectious",
            "key": "report_ipd.eye_diseases_non-infectious"
        }, {
            "en": "Eye Infections Other",
            "sw": "Eye Infections Other",
            "key": "report_ipd.eye_infections_other"
        }, {
            "en": "Anaemia Mild/Moderate",
            "sw": "Anaemia Mild/Moderate",
            "key": "report_ipd.anaemia_mild_moderate"
        }, {
            "en": "maleria Severe/Complicated Blood Side Positive",
            "sw": "Malaria Severe/Complicated Blood Side Positive",
            "key": "report_ipd.malaria_severe_complicated_blood_side_positive"
        }, {
            "en": "Those who are admitted into the ward",
            "sw": "Waliolazwa Wodini",
            "key": "report_ipd.those_who_are_admitted_in_the_ward"
        }, {
            "en": "Epilepsy",
            "sw": "Epilepsy",
            "key": "report_ipd.epilepsy"
        }, {
            "en": "Dysentery",
            "sw": "Dysentery",
            "key": "report_ipd.dysentery"
        }, {
            "en": "Cardiac Failure",
            "sw": "Cardiac Failure",
            "key": "report_ipd.cardiac_failure"
        }, {
            "en": "Urinary Tract Infections UTI",
            "sw": "Urinary Tract Infections UTI",
            "key": "report_ipd.urinary_tract_infections"
        }, {
            "en": "Pneumonia",
            "sw": "Pneumonia",
            "key": "report_ipd.pneumonia"
        }, {
            "en": "Lympatic filairiasis",
            "sw": "Lympatic filairiasis",
            "key": "report_ipd.lympatic_filairiasis"
        }, {
            "en": "Nephrotic Syndrome",
            "sw": "Nephrotic Syndrome",
            "key": "report_ipd.nephrotic_syndrome"
        }, {
            "en": "Rheumatic Fever",
            "sw": "Rheumatic Fever",
            "key": "report_ipd.rheumatic_fever"
        }, {
            "en": "Thyroid Diseases",
            "sw": "Thyroid Diseases",
            "key": "report_ipd.thyroid_diseases"
        }, {
            "en": "Cerebral Palsy",
            "sw": "Cerebral Palsy",
            "key": "report_ipd.cerebral_palsy"
        }, {
            "en": "Skin diseases non-infectious",
            "sw": "Skin diseases non-infectious",
            "key": "report_ipd.skin_diseases_non_infectious"
        }, {
            "en": "Hepatitis",
            "sw": "Hepatitis",
            "key": "report_ipd.hepatitis"
        }, {
            "en": "Anthrax",
            "sw": "Anthrax",
            "key": "report_ipd.anthrax"
        }, {
            "en": "Neoplasm",
            "sw": "Neoplasm",
            "key": "report_ipd.neoplasm"
        }, {
            "en": "Skin Infections",
            "sw": "Skin Infections",
            "key": "report_ipd.skin_infections"
        }, {
            "en": "Hypertension severe",
            "sw": "Hypertension severe",
            "key": "report_ipd.hypertension_severe"
        }, {
            "en": "Moderate Malnutrition",
            "sw": "Moderate Malnutrition",
            "key": "report_ipd.moderate_malnutrition"
        }, {
            "en": "Rheumatoid and Joint diseases",
            "sw": "Rheumatoid and Joint diseases",
            "key": "report_ipd.rheumatoid_and_joint_disease"
        }, {
            "en": "Measles",
            "sw": "Measles",
            "key": "report_ipd.measles"
        }, {
            "en": "Gynaecological diseases Other",
            "sw": "Gynaecological diseases Other",
            "key": "report_ipd.gynaecological_diseases"
        }, {
            "en": "STI Genital Discharge Syndrome GDS",
            "sw": "STI Genital Discharge Syndrome GDS",
            "key": "report_ipd.sti_genital_discharge_syndrome_gds"
        }, {
            "en": "Animal Bites Suspected Rabies",
            "sw": "Animal Bites Suspected Rabies",
            "key": "report_ipd.animal_bites_suspected_rabies"
        }, {
            "en": "Kwashiorkor",
            "sw": "Kwashiorkor",
            "key": "report_ipd.kwashiorkor"
        }, {
            "en": "Ear Diseases non-infectious",
            "sw": "Ear Diseases non-infectious",
            "key": "report_ipd.ear_diseases_non_infectious"
        }, {
            "en": "Cardiovascular Disorders Other",
            "sw": "Cardiovascular Disorders Other",
            "key": "report_ipd.cardiovascular_disorders_other"
        }, {
            "en": "Leprosy",
            "sw": "Leprosy",
            "key": "report_ipd.leprosy"
        }, {
            "en": "Low birth weight and Prematurity complications",
            "sw": "Low birth weight and Prematurity complications",
            "key": "report_ipd.low_birth_weight_and_prematurity_complications"
        }, {
            "en": "Congenital Disorders",
            "sw": "Congenital Disorders",
            "key": "report_ipd.congenital_disorders"
        }, {
            "en": "Acute Flacid Paralysis",
            "sw": "Acute Flacid Paralysis",
            "key": "report_ipd.acute_flacid_paralysis"
        }, {
            "en": "Neuroses",
            "sw": "Neuroses",
            "key": "report_ipd.neuroses"
        }, {
            "en": "Meningitis",
            "sw": "Meningitis",
            "key": "report_ipd.meningitis"
        }, {
            "en": "HIV infection Symptomatic",
            "sw": "HIV infection Symptomatic",
            "key": "report_ipd.hiv_infection_symptomatic"
        }, {
            "en": "Typhoid",
            "sw": "Typhoid",
            "key": "report_ipd.typhoid"
        }, {
            "en": "Cholera",
            "sw": "Cholera",
            "key": "report_ipd.cholera"
        }, {
            "en": "Sexually Transmitted Infection Other",
            "sw": "Sexually Transmitted Infection Other",
            "key": "report_ipd.sexually_transmitted_infection_other"
        }, {
            "en": "Respiratory System disorders Other",
            "sw": "Respiratory System disorders Other",
            "key": "report_ipd.respiratory_system_disorders_other"
        }, {
            "en": "Relapsing Fever Louse borne Typhus",
            "sw": "Relapsing Fever Louse borne Typhus",
            "key": "report_ipd.relapsing_fever_louse_borne_typhus"
        }, {
            "en": "Nutritional Disorders Other",
            "sw": "Nutritional Disorders Other",
            "key": "report_ipd.nutritional_disoders_other"
        }, {
            "en": "Liver diseases non-infectious",
            "sw": "Liver diseases non-infectious",
            "key": "report_ipd.liver_diseases_non_infectious"
        }, {
            "en": "Plague",
            "sw": "Plague",
            "key": "report_ipd.plague"
        }, {
            "en": "Tuberculosis",
            "sw": "Tuberculosis",
            "key": "report_ipd.tuberculosis"
        }, {
            "en": "Pneumonia Severe",
            "sw": "Pneumonia Severe",
            "key": "report_ipd.pneumonia_severe"
        }, {
            "en": "Burns",
            "sw": "Burns",
            "key": "report_ipd.burns"
        }, {
            "en": "STI Genital Ulcer Diseases GUD",
            "sw": "STI Genital Ulcer Diseases GUD",
            "key": "report_ipd.sti_genital_ulcer_diseases_gud"
        }, {
            "en": "Marasmus",
            "sw": "Marasmus",
            "key": "report_ipd.marasmus"
        }, {
            "en": "Schistosomiasis",
            "sw": "Schistosomiasis",
            "key": "report_ipd.schistosomiasis"
        }, {
            "en": "Marasmic_kwashiorkor",
            "sw": "Marasmic_kwashiorkor",
            "key": "report_ipd.marasmic_kwashiorkor"
        }, {
            "en": "Ear Infection Chronic",
            "sw": "Ear Infection Chronic",
            "key": "report_ipd.ear_infection_chronic"
        }, {
            "en": "Animal Bites no suspected Rabies",
            "sw": "Animal Bites no suspected Rabies",
            "key": "report_ipd.animal_bites_no_suspected_rabies"
        }, {
            "en": "Road Traffic Accidents",
            "sw": "Road Traffic Accidents",
            "key": "report_ipd.road_traffic_accidents"
        }, {
            "en": "Sickle cell Disease",
            "sw": "Sickle cell Disease",
            "key": "report_ipd.sickle_cell_disease"
        }, {
            "en": "Diagnoses Other",
            "sw": "Diagnoses Other",
            "key": "report_ipd.diagnoses_other"
        }, {
            "en": "Birth asphyxia",
            "sw": "Birth asphyxia",
            "key": "report_ipd.birth_asphyxia"
        }, {
            "en": "Gastrointestinal diseases Other non-infectious",
            "sw": "Gastrointestinal diseases Other non-infectious",
            "key": "report_ipd.gastrointestinal_disease_other_non_infectious"
        }, {
            "en": "Eye Infections Viral Keratoconjunctivitis",
            "sw": "Eye Infections Viral Keratoconjunctivitis",
            "key": "report_ipd.eye_infections_viral_keratoconjunctivitis"
        }, {
            "en": "Upper Respiratory Infections Pharyngitis/Tonsillitis/Rhinitis",
            "sw": "Upper Respiratory Infections Pharyngitis/Tonsillitis/Rhinitis",
            "key": "report_ipd.upper_respiratory_infections_pharyngitis_tonsillitis_rhinitis"
        }, {
            "en": "Diarrhea Acute <14days",
            "sw": "Diarrhea Acute <14days",
            "key": "report_ipd.diarrhea_acute"
        }, {
            "en": "Neonatal Septicaemia Local infections",
            "sw": "Neonatal Septicaemia Local infections",
            "key": "report_ipd.neonatal_septicaemia_local_infections"
        }, {
            "en": "Tetanus. Neonatal",
            "sw": "Tetanus. Neonatal",
            "key": "report_ipd.tetanus_neonatal"
        }, {
            "en": "Infant of Diabetic Mother",
            "sw": "Infant of Diabetic Mother",
            "key": "report_ipd.infant_of_diabetic_mother"
        }, {
            "en": "Ear infection Acute",
            "sw": "Ear infection Acute",
            "key": "report_ipd.ear_infection_acute"
        }, {
            "en": "Osteomyelitis",
            "sw": "Osteomyelitis",
            "key": "report_ipd.osteomyelitis"
        }, {
            "en": "maleria Severe/Complicated mRDT Positive",
            "sw": "Malaria Severe/Complicated mRDT Positive",
            "key": "report_ipd.malaria_severe_complicated_mrdt_positive"
        }, {
            "en": "Diabetes Mellitus",
            "sw": "Diabetes Mellitus",
            "key": "report_ipd.diabetes_mellitus"
        }, {
            "en": "Mothers with HIV",
            "sw": "Mama wenye VVU",
            "key": "report_childgrowth.mothers_with_hiv"
        }, {
            "en": "growth attendance of 36 month old baby",
            "sw": "Mahudhurio ya ukuaji wa mtoto umri wa miezi 36",
            "key": "report_childgrowth.growth_attendance_of_36_month_old_baby"
        }, {
            "en": "BCG at the age of 1+ (Within service area )",
            "sw": "BCG Umri mwaka 1+ (Ndani ya eneo Ia huduma)",
            "key": "report_childgrowth.bcg_age_<1_year_+_(within_service_area)"
        }, {
            "en": "the ratio of height by age",
            "sw": "Uwaino wa urefu kwa umri",
            "key": "report_childgrowth.the_ratio_of_height_by_age"
        }, {
            "en": "Children with the possibility of HIV infection",
            "sw": "Watoto wenye uwezekano wa uambukizo wa VVU",
            "key": "report_childgrowth.children_with_the_possibility_of_hiv_infection"
        }, {
            "en": "BCG Age <1 year + (out of service area)",
            "sw": "BCG Umri mwaka <1 (Nje ya eneo la huduma)",
            "key": "report_childgrowth.bcg_age_<1_year_+_(out_of_service_area)"
        }, {
            "en": "Mothers without HIV",
            "sw": "Mama wasio na VVU",
            "key": "report_childgrowth.mothers_without_hiv"
        }, {
            "en": "PENTA at the age <1 (within service area)",
            "sw": "PENTA Umri mwaka <1 (Ndani ya eneo Ia huduma)",
            "key": "report_childgrowth.penta_at_the_age_<1_(within_service_area)"
        }, {
            "en": "Polio at the age <1 (out of service area)",
            "sw": "Polio Umri mwaka <1 (Nje ya eneo la huduma)",
            "key": "report_childgrowth.polio_at_the_age_<1_(out_of_service_area)"
        }, {
            "en": "additional Vitamin A",
            "sw": "Nyongeza ya Vitamini A",
            "key": "report_childgrowth.additional_vitamin_a"
        }, {
            "en": "Children tested for HIV by PCR 6 weeks after stopping breastfeeding or 18 months",
            "sw": "Watoto waliopimwa VVU kwa PCR wiki 6 baada ya kuacha kunyonya maziwa ya mama au miezi 18 ya umri",
            "key": "report_childgrowth.children_tested_for_HIV_by_PCR_6_weeks_after_stopping_breastfeeding_or_18_months"
        }, {
            "en": "Mothers condition",
            "sw": "Hali ya Mama",
            "key": "report_childgrowth.mothers_condition"
        }, {
            "en": "Children of 18 months",
            "sw": "Watoto umri wa miezi 18",
            "key": "report_childgrowth.children_of_18_months"
        }, {
            "en": "Children who received a bed net voucher",
            "sw": "Watoto watiopatiwa hati punguzo ya chandarua",
            "key": "report_childgrowth.children_who_received_a_bed_net_voucher"
        }, {
            "en": "Growth attendance of 18 month old baby",
            "sw": "Mahudhurio ya ukuaji wa mtoto umri wa miezi 18",
            "key": "report_childgrowth.growth_attendance_of_18_month_old_baby"
        }, {
            "en": "Those not vaccinated",
            "sw": "Wasiokuwa na Kinga",
            "key": "report_childgrowth.those_not_vaccinated"
        }, {
            "en": "Children given Mebendazole/Albendazole",
            "sw": "Waliopewa Mebendazole/Albendazole",
            "key": "report_childgrowth.children_given_mebendazole/albendazole"
        }, {
            "en": "Mothers with unknown HIV status",
            "sw": "Mama wasiojulikana hali yao ya VVU",
            "key": "report_childgrowth.mothers_with_unknown_hiv_status"
        }, {
            "en": "Children of 24-59 months",
            "sw": "Watoto umri wa miezi 24-59",
            "key": "report_childgrowth.children_of_24-59_months"
        }, {
            "en": "Children who were started on cotrimoxazole between 1 month to 2 months",
            "sw": "Watoto walioanzishiwa Cotrimoxazole kati ya mwezi 1 hadi miezi 2 ya umri",
            "key": "report_childgrowth.children_who_were_started_on_cotrimoxazole_between_1_month_to_2_months"
        }, {
            "en": "breastfeeding infants born to mothers who are HIV negative",
            "sw": "Ulishaji wa Watoto Wachanga waliozaliwa na mama wasio na VVU",
            "key": "report_childgrowth.breastfeeding_infants_born_to_mothers_who_are_hiv_negative"
        }, {
            "en": "growth attendance of 12 months old baby",
            "sw": "Mahudhurio ya ukuaji wa mtoto umri wa miezi 12",
            "key": "report_childgrowth.growth_attendance_of_12_months_old_baby"
        }, {
            "en": "Children of 30 months",
            "sw": "Watoto umri wa miezi 30",
            "key": "report_childgrowth.children_of_30_months"
        }, {
            "en": "Those Vaccinated",
            "sw": "Waliokingwa",
            "key": "report_childgrowth.those_vaccinated"
        }, {
            "en": "BCGat the Age of 1 + (out of service area)",
            "sw": "BCG Umri mwaka 1+ (Nje ya eneo la huduma)",
            "key": "report_childgrowth.bcgat_the_age_of_1_+_(out_of_service_area)"
        }, {
            "en": "PENTA at the age 1+ (within service area)",
            "sw": "PENTA Umri mwaka 1+ (Ndani ya eneo Ia huduma)",
            "key": "report_childgrowth.penta_at_the_age_1+_(within_service_area)"
        }, {
            "en": "Children tested HIV PCR 6 weeks after stopping breastfeeding or 18 months of age",
            "sw": "Watoto waliopimwa VVU kwa PCR wiki 6 baada ya kuacha kunyonya maziwa ya mama au miezi 18 ya umri",
            "key": "report_childgrowth.children_tested_hiv_pcr_6_weeks_after_stopping_breastfeeding_or_18_months_of_age"
        }, {
            "en": "Children who were moved from clinic care and treatment of HIV-positive (CTC)",
            "sw": "Watoto waliohamishiwa Klinlki ya huduma na matibabu kwa wenye VVU (CTC)",
            "key": "report_childgrowth.children_who_were_moved_from_clinic_care_and_treatment_of_hiv-positive_(ctc)"
        }, {
            "en": "Number of children who received cotrimoxazole I ARV /given bed net vouchers and ones tested for HIV",
            "sw": "Idadi ya Watoto waliopewa Cotrimoxazole I ARV / waliopewa hati punguzo nil waliopimwa VVU",
            "key": "report_childgrowth.number_of_children_who_received_cotrimoxazole_i_arv_/given_bed_net__vouchers_and_ones_tested_for_hiv"
        }, {
            "en": "Status of Tetanus vaccination of the mother during delivery",
            "sw": "Hali ya Chango ya Pepo punda kwa mama wakati wa kujifungua",
            "key": "report_childgrowth.status_of_tetanus_vaccination_of_the_mother_during_delivery"
        }, {
            "en": "Children of 24 months",
            "sw": "Watoto umri wa miezi 24",
            "key": "report_childgrowth.children_of_24_months"
        }, {
            "en": "Infants receiving other types of milk (RF)",
            "sw": "Watoto wachanga wanaopewa maziwa mbadala (RF)",
            "key": "report_childgrowth.infants_receiving_other_types_of_milk_(rf)"
        }, {
            "en": "BCG at the age of 1+ (Within service area )",
            "sw": "BCG Umri mwaka 1+ (Ndani ya eneo Ia huduma)",
            "key": "report_childgrowth.bcg_at_the_age_of_1+_(within_service_area_)"
        }, {
            "en": "feeding infants born to HIV infected mothers",
            "sw": "Ulishaji wa Watoto Wachanga waliozaliwa na mama wenye VVU",
            "key": "report_childgrowth.feeding_infants_born_to_hiv_infected_mothers"
        }, {
            "en": "Infants feeding on other types of milk",
            "sw": "Watoto wachanga wanaoyweshwa maziwa mbadala (RF)",
            "key": "report_childgrowth.infants_feeding_on_other_types_of_milk"
        }, {
            "en": "ratio of weight by age",
            "sw": "Uwaino wa uzito kwa umri",
            "key": "report_childgrowth.ratio_of_weight_by_age"
        }, {
            "en": "not known",
            "sw": "Haijulikani",
            "key": "report_childgrowth.not_known"
        }, {
            "en": "Infants breastfeeding mothers milk only (EBF)",
            "sw": "Watoto wachanga wanaonyonya maziwa ya mama pekee (EBF)",
            "key": "report_childgrowth.infants_breastfeeding_mothers_milk_only_(ebf)"
        }, {
            "en": "Total attendance",
            "sw": "Jumla ya Mahudhurio",
            "key": "report_childgrowth.total_attendance"
        }, {
            "en": "Polio at the age of 1 + (out of service area)",
            "sw": "Polio Umri mwaka 1+ (Nje ya eneo la huduma)",
            "key": "report_childgrowth.polio_at_the_age_of_1_+_(out_of_service_area)"
        }, {
            "en": "growth attendance of 48 month old baby",
            "sw": "Mahudhurio ya ukuaji wa mtoto umri wa miezi 48",
            "key": "report_childgrowth.growth_attendance_of_48_month_old_baby"
        }, {
            "en": "growth attendance of 24 month old baby",
            "sw": "Mahudhurio ya ukuaji wa mtoto umri wa miezi 24",
            "key": "report_childgrowth.growth_attendance_of_24_month_old_baby"
        }, {
            "en": "measles at the age <1 (within service area)",
            "sw": "Surua Umri mwaka <1 (Ndani ya eneo Ia huduma)",
            "key": "report_childgrowth.measles_at_the_age_<1_(within_service_area)"
        }, {
            "en": "Growth attendance of 6 months old baby",
            "sw": "Mahudhurio ya ukuaji wa mtoto umri wa miezi 6",
            "key": "report_childgrowth.growth_attendance_of_6_months_old_baby"
        }, {
            "en": "Children of 12 months",
            "sw": "Watoto umri wa miezi 12",
            "key": "report_childgrowth.children_of_12_months"
        }, {
            "en": "measles at the age 1+ (within service area)",
            "sw": "Surua Umri mwaka 1+ (Ndani ya eneo Ia huduma)",
            "key": "report_childgrowth.measles_at_the_age_1+_(within_service_area)"
        }, {
            "en": "Type of vaccine by age",
            "sw": "Aina ya Chanjo Kwa Umri",
            "key": "report_childgrowth.type_of_vaccine_by_age"
        }, {
            "en": "Polio at the age <1 (within area service)",
            "sw": "Polio Umri mwaka <1 (Ndani ya eneo Ia huduma)",
            "key": "report_childgrowth.polio_at_the_age_<1_(within_area_service)"
        }, {
            "en": "Children who breastfeed their mothers milk only",
            "sw": "Watoto wachanga wanaonyonya maziwa ya mama pekee (EBF)",
            "key": "report_childgrowth.children_who_breastfeed_their_mothers_milk_only"
        }, {
            "en": "the ratio of weight by height",
            "sw": "Uwaino wa uzito kwa urefu",
            "key": "report_childgrowth.the_ratio_of_weight_by_height"
        }, {
            "en": "Children of 12-17 months",
            "sw": "Watoto umri wa miezi 12-17",
            "key": "report_childgrowth.children_of_12-17_months"
        }, {
            "en": "measles at the age <1 (out of service area)",
            "sw": "Surua Umri mwaka <1 (Nje ya eneo la huduma)",
            "key": "report_childgrowth.measles_at_the_age_<1_(out_of_service_area)"
        }, {
            "en": "the ratio of weight by age",
            "sw": "Uwaino wa uzito kwa umri",
            "key": "report_childgrowth.the_ratio_of_weight_by_age"
        }, {
            "en": "Children of 6-11 months",
            "sw": "Watoto umri wa miezi 6-11",
            "key": "report_childgrowth.children_of_6-11_months"
        }, {
            "en": "Polio at the age 1+ (within service area)",
            "sw": "Polio Umri mwaka 1+ (Ndani ya eneo Ia huduma)",
            "key": "report_childgrowth.polio_at_the_age_1+_(within_service_area)"
        }, {
            "en": "Children who were tested for HIV by PCR within two months from birth",
            "sw": "Watoto waliopimwa VVU kwa PCR ndani ya miezi miwili tangu kuzaliwa",
            "key": "report_childgrowth.children_who_were_tested_for_HIV_by_PCR_within_two_months_from_birth"
        }, {
            "en": "Attendance growth of 6 months old baby",
            "sw": "Mahudhurio ya ukuaji wa mtoto umri wa miezi 6",
            "key": "report_childgrowth.attendance_growth_of_6_months_old_baby"
        }, {
            "en": "growth attendance of 59 month old baby",
            "sw": "Mahudhurio ya ukuaji wa mtoto umri wa miezi 59",
            "key": "report_childgrowth.growth_attendance_of_59_month_old_baby"
        }, {
            "en": "Children of 18-23 months",
            "sw": "Watoto umri wa miezi 18-23",
            "key": "report_childgrowth.children_of_18-23_months"
        }, {
            "en": "Number of patients treated DTC DTC-Diarrhea and treatment centre",
            "sw": "Idadi ya wagonjwa waliotibiwa DTC DTC-Idara ya magonjwa ya kuhara",
            "key": "report_dtc.number_of_patients_treated_dtc_dtc-diarrhea_and_treatment_centre"
        }, {
            "en": "Number of admitted patients",
            "sw": "Idadi ya wagonjwa waliolazwa",
            "key": "report_dtc.number_of_admitted_patients"
        }, {
            "en": "The number of patients who died of DTC_Diarrhoea treatment Centre",
            "sw": "Idadi ya wagonjwa waliofia DTC",
            "key": "report_dtc.the_number_of_patients_who_died_of_dtc_diarrhoea_treatment_centre"
        }, {
            "en": "Number of patients with blood in stool",
            "sw": "Idadi ya wagonjwa walio na damu katika kinyesi",
            "key": "report_dtc.number_of_patients_with_blood_in_stool"
        }, {
            "en": "Number of DTC patients treated with little shortage of water and sodium cloride",
            "sw": "Idadi ya wagonjwa waliotibiwa DTC walio na upungufu kiasi wa maji na chumvichumvi mwilini",
            "key": "report_dtc.number_of_dtc_patients_treated_with_little_shortage_of_water_and_sodium_cloride"
        }, {
            "en": "The number of patients who received a packet of ORS",
            "sw": "Idadi ya wagonjwa waliopatiwa paketi za ORS",
            "key": "report_dtc.the_number_of_patients_who_received_a_packet_of_ors"
        }, {
            "en": "The number of patients who received zinc",
            "sw": "Idadi ya wagonjwa waliopewa zinki",
            "key": "report_dtc.the_number_of_patients_who_received_zinc"
        }, {
            "en": "The number of refereed patients",
            "sw": "Idadi ya wagonjwa waliopewa rufaa",
            "key": "report_dtc.the_number_of_refereed_patients"
        }, {
            "en": "Number of DTC patients treated with acute shortage of water and Sodium cloride in the body",
            "sw": "Idadi ya wagonjwa waliotibiwa DTC walio na upungufu mkubwa wa maji na churnvichumvi mwilini",
            "key": "report_dtc.number_of_dtc_patients_treated_with_acute_shortage_of_water_and_sodium_cloride_in_the_body"
        }, {
            "en": "Those helped to deliver by traditional birth attendants (TBA)",
            "sw": "Waliozalishwa na wakunga wa jadi (TBA)",
            "key": "report_motherchildward.those_helped_to_deliver_by_traditional_birth_attendants_tba"
        }, {
            "en": "HIV + stage III or IV",
            "sw": "HIV+ stage III or IV",
            "key": "report_motherchildward.hiv_stage_iii_or_iv"
        }, {
            "en": "Total impaired prenatal (4a +4 b +4 c +4 d +4 e +4 f +4 h +4 i +4 j +4 k)",
            "sw": "Jumla wenye matatizo kabla ya kujifungua (4a+4b+4c+4d+4e+4f+4h+4i+4j+4k)",
            "key": "report_motherchildward.total_impaired_prenatal"
        }, {
            "en": "Fresh dead births 10E ( MSB )",
            "sw": "Waliozaliwa wafu Fresh (MSB)",
            "key": "report_motherchildward.fresh_dead_births_10e_msb"
        }, {
            "en": "given (IV) antibiotics",
            "sw": "Amepewa (IV) Antibiotiki",
            "key": "report_motherchildward.given_iv_antibiotics"
        }, {
            "en": "Other Services",
            "sw": "Huduma nyinginezo",
            "key": "report_motherchildward.12_other_services"
        }, {
            "en": "Those given ARV prophylaxis (tail) when discharged",
            "sw": "Waliopewa ARV Prophylaxis (tail) wakati wa kuruhusiwa",
            "key": "report_motherchildward.those_given_arv_prophylaxis_tail_when_discharged"
        }, {
            "en": "Tear (Third Degree Tear)",
            "sw": "Tear (Third Degree Tear)",
            "key": "report_motherchildward.tear_third_degree_tear"
        }, {
            "en": "Twin births",
            "sw": "Watoto Waliozaliwa mapacha",
            "key": "report_motherchildward.10_twin_births"
        }, {
            "en": "Those tested positive during and after childbirth",
            "sw": "Waliogundulika Positive wakati na baada ya kujifungua",
            "key": "report_motherchildward.those_tested_positive_during_and_after_childbirth"
        }, {
            "en": "Mothers who chose to feeding milk substitute (RF)",
            "sw": "Waliochagua ulishaji wa maziwa mbadala (RF)",
            "key": "report_motherchildward.mothers_who_chose_to_feed_milk_substitute_rf"
        }, {
            "en": "Ruptured Uterus",
            "sw": "Ruptured Uterus",
            "key": "report_motherchildward.ruptured_uterus"
        }, {
            "en": "Those who got blood transfusion",
            "sw": "Ameongezewa Damu",
            "key": "report_motherchildward.those_who_got_blood_transfusion"
        }, {
            "en": "Those who started using ART treatment during pregnancy (ANC)",
            "sw": "Walioanza matibabu ya ART wakati wa ujauzito (ANC)",
            "key": "report_motherchildward.those_who_started_using_art_treatment_during_pregnancy_anc"
        }, {
            "en": "eclampsia",
            "sw": "Eclampsia",
            "key": "report_motherchildward.eclampsia"
        }, {
            "en": "Number of Children who were assisted to breathe - bag and mask",
            "sw": "Idadi ya Watoto Waliosaidiwa Kupumua - bag and mask",
            "key": "report_motherchildward.11c_number_of_children_who_were_assisted_to_breathe_bag_and_mask"
        }, {
            "en": "Caesarian Section (CS) delivery",
            "sw": "Waliojifungua kwa Caesarian Section (CS)",
            "key": "report_motherchildward.caesarian_section_cs_delivery"
        }, {
            "en": "PMTCT",
            "sw": "PMTCT",
            "key": "report_motherchildward.pmtct"
        }, {
            "en": "Infection/sepsis",
            "sw": "Uambukizo / Sepsis",
            "key": "report_motherchildward.infection_or_sepsis"
        }, {
            "en": "ectopic Pregnancy",
            "sw": "Ectopic Pregnancy",
            "key": "report_motherchildward.eptopic_pregnancy"
        }, {
            "en": "Total complications after childbirth (6a +6 b +6 +6 c d e +6 +6 +6 G+ f 6h)",
            "sw": "Jumla ya matatizo baada ya kujifungua (6a+6b+6c+6d+6e+6f+6g+6h)",
            "key": "report_motherchildward.total_complications_after_childbirth"
        }, {
            "en": "high BP",
            "sw": "High BP",
            "key": "report_motherchildward.high_bp"
        }, {
            "en": "macerated dead births ( MSB )",
            "sw": "Waliozaliwa wafu Macerated (MSB)",
            "key": "report_motherchildward.10d_macerated_dead_births_msb"
        }, {
            "en": "Total babies born(alive and dead)(9a + 9 + 9 d e)",
            "sw": "Jumla ya watoto waliozaliwa(hai na wafu)(9a + 9d + 9e)",
            "key": "report_motherchildward.10h_total_babies_born_alive_and_dead"
        }, {
            "en": "Total children born alive",
            "sw": "Jumla ya watoto waliozaliwa hai",
            "key": "report_motherchildward.9a_total_children_born_alive"
        }, {
            "en": "Obstructed Labour",
            "sw": "Obstructed Labour",
            "key": "report_motherchildward.obstructed_labour"
        }, {
            "en": "Prenatal problems",
            "sw": "Matatizo kabla ya kujifungua",
            "key": "report_motherchildward.prenatal_problems"
        }, {
            "en": "Pre-mature rupture of membrane (PROM)",
            "sw": "Pre-mature Rupture of Membrane (PROM)",
            "key": "report_motherchildward.pre_mature_rupture_of_membrane_prom"
        }, {
            "en": "Those who delivered on while on their way to the clinic (BBA)",
            "sw": "Waliojifungua kabla ya kufika kituoni (BBA)",
            "key": "report_motherchildward.those_who_delivered_on_while_on_their_way_to_the_clinic"
        }, {
            "en": "Births to mothers with HIV",
            "sw": "Waliozaliwa na mama wenye VVU",
            "key": "report_motherchildward.9f_births_to_mothers_with_hiv"
        }, {
            "en": "9b live births Weight < 2.5kg",
            "sw": "Waliozaliwa hai Uzito <2.5kg",
            "key": "report_motherchildward.9b_live_births_weight_low"
        }, {
            "en": "Those given referral to clinical care and treatment center (CTC)",
            "sw": "Waliopata rufaa kwenda kliniki ya huduma na matibabu ya wenye VVU (CTC)",
            "key": "report_motherchildward.those_given_referral_to_clinical_care_and_treatment_center_ctc"
        }, {
            "en": "Number of Children assisted to beathe - stimulation",
            "sw": "Idadi ya Watoto Waliosaidiwa Kupumua - stimulation",
            "key": "report_motherchildward.11a_number_of_children_assisted_to_breathe_stimulation"
        }, {
            "en": "malaria",
            "sw": "Malaria",
            "key": "report_motherchildward.malaria"
        }, {
            "en": "Total giving birth (2a +2 b +2 c +2 d)",
            "sw": "Jumla waliojifungua (2a+2b+2c+2d)",
            "key": "report_motherchildward.total_giving_birth"
        }, {
            "en": "Macerated dead births ( MSB )",
            "sw": "Waliozaliwa wafu Macerated (MSB)",
            "key": "report_motherchildward.9d_macerated_dead_births_msb"
        }, {
            "en": "Total HIV-positive mothers who are younger than 20 years",
            "sw": "Jumla ya akina mama walio na VVU wenye umri chini ya miaka 20",
            "key": "report_motherchildward.total_hiv_positive_mothers_who_are_younger_than_20_years"
        }, {
            "en": "Those who were expected to deliver",
            "sw": "Waliotarajiwa kujifungua",
            "key": "report_motherchildward.those_who_were_expected_to_deliver"
        }, {
            "en": "The number of pregnant women who underwent AMTSL",
            "sw": "Idadi ya wajawazito walio fanyiwa AMTSL",
            "key": "report_motherchildward.the_number_of_pregnant_women_who_underwent_amtsl"
        }, {
            "en": "Mothers who chose to breastfeed only (EBF)",
            "sw": "Waliochagua kunyonyesha maziwa ya mama pekee (EBF)",
            "key": "report_motherchildward.mothers_who_chose_to_breastfeed_only_ebf"
        }, {
            "en": "children who were assisted to breath",
            "sw": "Watoto waliosaidiwa kupumua",
            "key": "report_motherchildward.11_children_who_were_assisted_to_breath"
        }, {
            "en": "Total number of clients who tested for HIV during and after childbirth",
            "sw": "Jumla waliopimwa VVU wakati na baada ya kujifungua",
            "key": "report_motherchildward.total_number_of_clients_who_tested_for_hiv_during_and_after_childbirth"
        }, {
            "en": "Those assessed 24 hours after birth",
            "sw": "Waliofanyiwa tathmini masaa 24 baada ya kuzaliwa",
            "key": "report_motherchildward.13_those_assessed_24_hours_after_birth"
        }, {
            "en": "PPH",
            "sw": "PPH",
            "key": "report_motherchildward.pph"
        }, {
            "en": "breech Delivery",
            "sw": "Breech Delivery",
            "key": "report_motherchildward.breech_delivery"
        }, {
            "en": "APH",
            "sw": "APH",
            "key": "report_motherchildward.aph"
        }, {
            "en": "Clinic reports on different methods of methods of delivery",
            "sw": "Taarifa ya njia za kujifungua kutoka vituo vya kutolea huduma za afya",
            "key": "report_motherchildward.clinic_reports_on_different_methods_of_methods_of_delivery"
        }, {
            "en": "Complications during and after childbirth",
            "sw": "Matatizo wakati na baada ya kujifungua",
            "key": "report_motherchildward.complications_during_and_after_childbirth"
        }, {
            "en": "Total (3a +3 b +3 c +3 d +3 e)",
            "sw": "Jumla (3a+3b+3c+3d+3e)",
            "key": "report_motherchildward.total"
        }, {
            "en": "EmOC",
            "sw": "EmOC",
            "key": "report_motherchildward.emoc"
        }, {
            "en": "Those who delivered at the clinic",
            "sw": "Waliojifungulia katika kituo cha kutolea huduma za afya",
            "key": "report_motherchildward.those_who_delivered_at_the_clinic"
        }, {
            "en": "Given (IV) Anticonvulsants",
            "sw": "Amepewa (IV) Anticonvulsants",
            "key": "report_motherchildward.given_iv_anticonvulsants"
        }, {
            "en": "Anaemia",
            "sw": "Anaemia",
            "key": "report_motherchildward.anaemia"
        }, {
            "en": "Total who tested HIV ANC",
            "sw": "Jumla waliopimwa VVU ANC",
            "key": "report_motherchildward.total_who_tested_hiv_anc"
        }, {
            "en": "Delivery through other ways",
            "sw": "Waliojifungua kwa njia nyingizezo",
            "key": "report_motherchildward.delivery_through_other_ways"
        }, {
            "en": "given (IV) Uterotonic",
            "sw": "Amepewa (IV) Uterotonic",
            "key": "report_motherchildward.given_iv_uterontonic"
        }, {
            "en": "Children single birth",
            "sw": "Watoto Waliozaliwa mmoja",
            "key": "report_motherchildward.9_children_single_birth"
        }, {
            "en": "Total Clients with HIV (8b +8 f)",
            "sw": "Jumla Walio na VVU (8b+8f)",
            "key": "report_motherchildward.total_clients_with_hiv"
        }, {
            "en": "Placenta has been dismissed by hand",
            "sw": "Ameondolewa kondo la nyuma kwa mkono",
            "key": "report_motherchildward.placenta_has_been_dismissed_by_hand"
        }, {
            "en": "Home delivery (H)",
            "sw": "Waliojifungua nyumbani (H)",
            "key": "report_motherchildward.home_delivery"
        }, {
            "en": "live births Weight < 2.5kg",
            "sw": "Waliozaliwa hai Uzito <2.5kg",
            "key": "report_motherchildward.10b_live_births_weight_low"
        }, {
            "en": "Percentage of all who delivered at the Clinic (2a / 1) x 100",
            "sw": "Asilimia ya waliojifungulia katika vituo vya kutolea huduma za afya (2a/1) x 100",
            "key": "report_motherchildward.percentage_of_all_who_delivered_at_the_clinic"
        }, {
            "en": "Waliokeketwa (FGM)",
            "sw": "Waliokeketwa (FGM)",
            "key": "report_motherchildward.waliokeketwa_fgm"
        }, {
            "en": "Those who started ART treatment during labor and delivery",
            "sw": "Walioanza matibabu ya ART wakati wa uchungu na kujifungua",
            "key": "report_motherchildward.those_who_started_art_treatment_during_labor_and_delivery"
        }, {
            "en": "Children given ARVs",
            "sw": "Waliopewa dawa za ARV",
            "key": "report_motherchildward.10g_children_given_arvs"
        }, {
            "en": "Total babies born (Alive and dead) ( 9a +9 +9 d e )",
            "sw": "Jumla ya watoto waliozaliwa (hai na wafu) (9a+9d+9e)",
            "key": "report_motherchildward.9h_total_babies_born_alive_and_dead"
        }, {
            "en": "Total children born alive",
            "sw": "Jumla ya watoto waliozaliwa hai",
            "key": "report_motherchildward.10a_total_children_born_alive"
        }, {
            "en": "births to mothers with HIV",
            "sw": "Waliozaliwa na mama wenye VVU",
            "key": "report_motherchildward.10f_births_to_mothers_with_hiv"
        }, {
            "en": "Mother and child given referral",
            "sw": "Mama na Mtoto waliopewa rufaa",
            "key": "report_motherchildward.14_mother_and_child_given_referral"
        }, {
            "en": "Children given ARV drugs",
            "sw": "Waliopewa dawa za ARV",
            "key": "report_motherchildward.9g_children_given_arv_drugs"
        }, {
            "en": "Retained Placenta",
            "sw": "Retained Placenta",
            "key": "report_motherchildward.retained_placenta"
        }, {
            "en": "Those who started using ARV's during labor and delivery",
            "sw": "Walioanzishiwa dawa za ARV wakati wa uchungu na kujifungua",
            "key": "report_motherchildward.those_who_started_using_arvs_during_labor_and_delivery"
        }, {
            "en": "Those who were helped to deliver by skilled providers",
            "sw": "Waliozalishwa na watoa huduma wanye ujuzi",
            "key": "report_motherchildward.those_who_were_helped_to_deliver_by_skilled_providers"
        }, {
            "en": "Live births Weight = > 2.5kg",
            "sw": "Waliozaliwa hai Uzito =>2.5kg",
            "key": "report_motherchildward.9c_live_births_weight_high"
        }, {
            "en": "other",
            "sw": "Mengineyo",
            "key": "report_motherchildward.other"
        }, {
            "en": "Children with Apgar Score less than 7 at 5 minutes",
            "sw": "Watoto wenye APGAR Score chini ya 7 katika dakika 5",
            "key": "report_motherchildward.children_with_apgar_score_less_than_7_at_5_minutes "
        }, {
            "en": "Those who were found positive at ANC",
            "sw": "Waliogundulika Positive kutoka ANC",
            "key": "report_motherchildward.those_who_were_found_positive_at_anc"
        }, {
            "en": "Vacuum (VM) delivery",
            "sw": "Waliojifungua kwa Vacuum (VM)",
            "key": "report_motherchildward.vacuum_vm_delivery"
        }, {
            "en": "live births Weight = > 2.5kg",
            "sw": "Waliozaliwa hai Uzito =>2.5kg",
            "key": "report_motherchildward.10c_live_births_weight_high"
        }, {
            "en": "Children Apgar Score less than 7 at 5 minutes",
            "sw": "Watoto wenye APGAR Score chini ya 7 katika dakika 5",
            "key": "report_motherchildward.children_9i_apgar_score_less_than_7_at_5_minutes"
        }, {
            "en": "Report for mothers who delivered",
            "sw": "Taarifa ya Waliojifungua",
            "key": "report_motherchildward.reprot_for_mothers_who_delivered"
        }, {
            "en": "Fresh dead births (MSB)",
            "sw": "Waliozaliwa wafu Fresh (MSB)",
            "key": "report_motherchildward.fresh_dead_births_9e_msb"
        }, {
            "en": "Number of children assisted to breathe - suction",
            "sw": "Idadi ya Watoto Waliosaidiwa Kupumua - suction",
            "key": "report_motherchildward.11b_number_of_children_assisted_to_breath_suction"
        }, {
            "en": "Those who started using ARV during pregnancy at ANC",
            "sw": "Walioanzishiwa dawa za ARV wakati wa ajauzito (ANC)",
            "key": "report_motherchildward.those_who_started_using_arv_during_pregnancy_at_anc"
        }, {
            "en": "Abortion / Abortion Complications",
            "sw": "Abortion / Abortion Complications",
            "key": "report_motherchildward.abortion_or_abortion_complications"
        }, {
            "en": "Those who did MVA",
            "sw": "Amefanyiwa MVA",
            "key": "report_motherchildward.those_who_did_mva"
        }, {
            "en": "normal delivery (KW)",
            "sw": "Waliojifungua Kawaida (KW)",
            "key": "report_motherchildward.normal_delivery_kw"
        }, {
            "en": "The number of children who were breastfed hour after birth",
            "sw": "idadi ya Watoto walionyonyeshwa saa moja baada ya kuzaliwa",
            "key": "report_motherchildward.12_the_number_of_children_who_were_breastfed_hour_after_birth"
        }, {
            "en": "Schistosomiasis",
            "sw": "",
            "key": "report_opd.24"
        }, {
            "en": "STI Genital Discharge Syndrome (GDS)",
            "sw": "",
            "key": "report_opd.25"
        }, {
            "en": "STI Genital Ulcer Diseases (GUD)",
            "sw": "",
            "key": "report_opd.26"
        }, {
            "en": "STI Pelvic Inflammatory Diseases (PID)",
            "sw": "",
            "key": "report_opd.27"
        }, {
            "en": "Keratoconjuctivitis",
            "sw": "",
            "key": "report_opd.20"
        }, {
            "en": "Diarrhea, Acute (< 14 days)",
            "sw": "",
            "key": "report_opd.21"
        }, {
            "en": "Diarrhea, Chronic (.> 14 days)",
            "sw": "",
            "key": "report_opd.22"
        }, {
            "en": "Malaria",
            "sw": "",
            "key": "report_opd.23"
        }, {
            "en": "Sexually Transmitted Infections, Other",
            "sw": "",
            "key": "report_opd.28"
        }, {
            "en": "Tuberculosis",
            "sw": "",
            "key": "report_opd.29"
        }, {
            "en": "Acute Flacid Paralysis",
            "sw": "",
            "key": "report_opd.4"
        }, {
            "en": "Meningitis",
            "sw": "",
            "key": "report_opd.8"
        }, {
            "en": "Marasmic Kwashiokor",
            "sw": "",
            "key": "report_opd.59"
        }, {
            "en": "Marasmus",
            "sw": "",
            "key": "report_opd.58"
        }, {
            "en": "Urinary Tract Infections (UTI)",
            "sw": "",
            "key": "report_opd.55"
        }, {
            "en": "Upper Respiratory Infections (Pharyngitis, Tonsillitis, Rhinitis)",
            "sw": "",
            "key": "report_opd.54"
        }, {
            "en": "Kwashiokor",
            "sw": "",
            "key": "report_opd.57"
        }, {
            "en": "Gynaecological diseases, Other",
            "sw": "",
            "key": "report_opd.56"
        }, {
            "en": "Pneumonia, non-Severe",
            "sw": "",
            "key": "report_opd.51"
        }, {
            "en": "Acute Respiratory Infection (ARI)",
            "sw": "",
            "key": "report_opd.50"
        }, {
            "en": "Pneumonia, Severe",
            "sw": "",
            "key": "report_opd.53"
        }, {
            "en": "Cerebral palsy",
            "sw": "",
            "key": "report_opd.52"
        }, {
            "en": "Thyroid Diseases",
            "sw": "",
            "key": "report_opd.88"
        }, {
            "en": "Neoplasms",
            "sw": "",
            "key": "report_opd.89"
        }, {
            "en": "Cardiovascular Diseases, Other",
            "sw": "",
            "key": "report_opd.82"
        }, {
            "en": "Bronchial Asthma",
            "sw": "",
            "key": "report_opd.83"
        }, {
            "en": "Hypertension",
            "sw": "",
            "key": "report_opd.80"
        }, {
            "en": "Rheumatic Fever",
            "sw": "",
            "key": "report_opd.81"
        }, {
            "en": "Diabetes Mellitus",
            "sw": "",
            "key": "report_opd.86"
        }, {
            "en": "Rheumatoid and Joint Diseases",
            "sw": "",
            "key": "report_opd.87"
        }, {
            "en": "Peptic Ulcers",
            "sw": "",
            "key": "report_opd.84"
        }, {
            "en": "GIT Diseases, Other non-infectious",
            "sw": "",
            "key": "report_opd.85"
        }, {
            "en": "Repeated attendance",
            "sw": "Mahudhurio ya Marudio",
            "key": "report_opd.3"
        }, {
            "en": "Measles",
            "sw": "",
            "key": "report_opd.7"
        }, {
            "en": "Diagnoses for OPD",
            "sw": "Diagnoses za OPD",
            "key": "report_opd.3a"
        }, {
            "en": "Eye Infection",
            "sw": "",
            "key": "report_opd.39"
        }, {
            "en": "Ear Infection, Chronic",
            "sw": "",
            "key": "report_opd.38"
        }, {
            "en": "Anaemia, Severe",
            "sw": "",
            "key": "report_opd.33"
        }, {
            "en": "Anaemia, Mild / Moderate ",
            "sw": "",
            "key": "report_opd.32"
        }, {
            "en": "Intestinal Worms",
            "sw": "",
            "key": "report_opd.31"
        }, {
            "en": "Leprosy",
            "sw": "",
            "key": "report_opd.30"
        }, {
            "en": "Ear Infection, Acute",
            "sw": "",
            "key": "report_opd.37"
        }, {
            "en": "HIV Infection, Symptomatic",
            "sw": "",
            "key": "report_opd.36"
        }, {
            "en": "HIV Positive",
            "sw": "",
            "key": "report_opd.35"
        }, {
            "en": "Sickle cell Disease ",
            "sw": "",
            "key": "report_opd.34"
        }, {
            "en": "Moderate Malnutrition",
            "sw": "",
            "key": "report_opd.60"
        }, {
            "en": "Vitamin A Deficiency",
            "sw": "",
            "key": "report_opd.61"
        }, {
            "en": "Other Nutritional Disorders",
            "sw": "",
            "key": "report_opd.62"
        }, {
            "en": "Caries",
            "sw": "",
            "key": "report_opd.63"
        }, {
            "en": "Periodontal Diseases",
            "sw": "",
            "key": "report_opd.64"
        }, {
            "en": "Dental Emergency Care",
            "sw": "",
            "key": "report_opd.65"
        }, {
            "en": "Dental Conditions, Other",
            "sw": "",
            "key": "report_opd.66"
        }, {
            "en": "Fractures / Dislocations",
            "sw": "",
            "key": "report_opd.67"
        }, {
            "en": "Burn",
            "sw": "",
            "key": "report_opd.68"
        }, {
            "en": "Poisoning",
            "sw": "",
            "key": "report_opd.69"
        }, {
            "en": "Patient who visited for the first time this year\n",
            "sw": "Wagonjwa waliohudhuria kwa mara ya kwanza mwaka huu (*)",
            "key": "report_opd.2"
        }, {
            "en": "Dysentery",
            "sw": "",
            "key": "report_opd.6"
        }, {
            "en": "Diagnoses, Other",
            "sw": "",
            "key": "report_opd.91"
        }, {
            "en": "Ill Defined Symptoms (no Diagnosis)",
            "sw": "",
            "key": "report_opd.90"
        }, {
            "en": "Waliopewa Rufaa",
            "sw": "",
            "key": "report_opd.92"
        }, {
            "en": "Relapsing Fever (Louse borne typhus)",
            "sw": "",
            "key": "report_opd.11"
        }, {
            "en": "Plague",
            "sw": "",
            "key": "report_opd.10"
        }, {
            "en": "Influenza",
            "sw": "",
            "key": "report_opd.13"
        }, {
            "en": "Yellow Fever",
            "sw": "",
            "key": "report_opd.12"
        }, {
            "en": "Rabies/Suspected rabies bites",
            "sw": "",
            "key": "report_opd.15"
        }, {
            "en": "Typhoid",
            "sw": "",
            "key": "report_opd.14"
        }, {
            "en": "Onchocerciasis",
            "sw": "",
            "key": "report_opd.17"
        }, {
            "en": "Trachoma",
            "sw": "",
            "key": "report_opd.16"
        }, {
            "en": "Viral haemorrhagic fevers",
            "sw": "",
            "key": "report_opd.19"
        }, {
            "en": "Trypanosomiasis",
            "sw": "",
            "key": "report_opd.18"
        }, {
            "en": "Low birth weight and Prematurity complications",
            "sw": "",
            "key": "report_opd.48"
        }, {
            "en": "Birth asphyxia",
            "sw": "",
            "key": "report_opd.49"
        }, {
            "en": "Osteomyelitis",
            "sw": "",
            "key": "report_opd.46"
        }, {
            "en": "Neonatal sepsis",
            "sw": "",
            "key": "report_opd.47"
        }, {
            "en": "Skin Diseases, non-infectious",
            "sw": "",
            "key": "report_opd.44"
        }, {
            "en": "Fungal Infection, non-skin",
            "sw": "",
            "key": "report_opd.45"
        }, {
            "en": "Skin Infection, non-Fungal",
            "sw": "",
            "key": "report_opd.42"
        }, {
            "en": "Skin Infection, Fungal",
            "sw": "",
            "key": "report_opd.43"
        }, {
            "en": "Cataract",
            "sw": "",
            "key": "report_opd.40"
        }, {
            "en": "Eye Diseases, Other non-infectious",
            "sw": "",
            "key": "report_opd.41"
        }, {
            "en": "OPD attendance",
            "sw": "Mahudhurio ya OPD",
            "key": "report_opd.1"
        }, {
            "en": "Cholera",
            "sw": "",
            "key": "report_opd.5"
        }, {
            "en": "Neonatal Tetanus",
            "sw": "",
            "key": "report_opd.9"
        }, {
            "en": "In Pregnancy",
            "sw": "",
            "key": "report_opd.23d"
        }, {
            "en": "Blood Slide positive",
            "sw": "",
            "key": "report_opd.23a"
        }, {
            "en": "mRDT postivie",
            "sw": "",
            "key": "report_opd.23b"
        }, {
            "en": "Clinical (no Test)",
            "sw": "",
            "key": "report_opd.23c"
        }, {
            "en": "Psychoses",
            "sw": "",
            "key": "report_opd.77"
        }, {
            "en": "Epilepsy",
            "sw": "",
            "key": "report_opd.76"
        }, {
            "en": "Surgical conditions, other",
            "sw": "",
            "key": "report_opd.75"
        }, {
            "en": "Emergencies, Other",
            "sw": "",
            "key": "report_opd.74"
        }, {
            "en": "Snake and Insect Bites",
            "sw": "",
            "key": "report_opd.73"
        }, {
            "en": "Abortion",
            "sw": "",
            "key": "report_opd.72"
        }, {
            "en": "Pregnancy complications",
            "sw": "",
            "key": "report_opd.71"
        }, {
            "en": "Road Traffic Accidents",
            "sw": "",
            "key": "report_opd.70"
        }, {
            "en": "Mental conditions, Other",
            "sw": "",
            "key": "report_opd.79"
        }, {
            "en": "Neurosis",
            "sw": "",
            "key": "report_opd.78"
        }, {
            "en": "Those received methods of Family Planning after miscarriage",
            "sw": "Waliopata njia za Uzazi wa mpango baada ya mimba kuharibika",
            "key": "report_postnatal.those_received_methods_of_family_planning_after_miscarriage"
        }, {
            "en": "Those who received counseling",
            "sw": "Waliopata ushauri nasaha",
            "key": "report_postnatal.ones_who_received_counseling"
        }, {
            "en": "That came as positive during postnatal",
            "sw": "Waliokuja postnata wakiwa positive",
            "key": "report_postnatal.that_came_as_positive_during_postnatal"
        }, {
            "en": "Those who finished  all visits (24 hours , days 2-7 , day 28, day 42 )",
            "sw": "Waliomaliza mahudhurio yote (saa 24, siku 2-7, siku 28, siku 42)",
            "key": "report_postnatal.those_who_finished_all_visits"
        }, {
            "en": "Those who received methods of family planning",
            "sw": "Waliopata njia za Uzazi wa Mpango",
            "key": "report_postnatal.those_received_methods_of_family_planning"
        }, {
            "en": "Attendees Within 24 hours",
            "sw": "Waliohudhuria Ndani ya saa 24",
            "key": "report_postnatal.attendees_within_24_hours"
        }, {
            "en": "Those with gaping or infected perineum",
            "sw": "Wenye msamba ulioambukizwa/Ulioachia",
            "key": "report_postnatal.those_with_gaping_or_infected_perineum"
        }, {
            "en": "PTMCT",
            "sw": "PTMCT",
            "key": "report_postnatal.ptmct"
        }, {
            "en": "Those with mental disorder",
            "sw": "Waliopata matatizo ya akili",
            "key": "report_postnatal.those_with_mental_disorder"
        }, {
            "en": "Deaths of infants born at home ( perinatal ) , neonatal",
            "sw": "Vifo vya watoto wachanga waliozaliwa nyumbani (perinatal); neonatal",
            "key": "report_postnatal.deaths_of_infants_born_at_home_prenatal_and_neonatal"
        }, {
            "en": "Children with skin infection",
            "sw": "Watoto wenye uambukizo kwenye ngozi",
            "key": "report_postnatal.children_with_skin_infection"
        }, {
            "en": "Attendees between 2-7 days",
            "sw": "Waliohudhuria kati ya siku ya 2-7",
            "key": "report_postnatal.attendess_between_2_and_7_days"
        }, {
            "en": "Children with umbilical cord infection",
            "sw": "Watoto wenye uambukizo kwenye kitovu",
            "key": "report_postnatal.children_with_umbilical_cord_infection"
        }, {
            "en": "Those who used methods of contraception within 40 days after delivery",
            "sw": "Waliopata njia za uzazi wa mpango kwenye arobaini ya uzazi",
            "key": "report_postnatal.those_who_used_methods_of_contraception_within_40_days_after_delivery"
        }, {
            "en": "Number of children who received OPV 0",
            "sw": "Idadi ya watoto waliopewa OPV 0",
            "key": "report_postnatal.number_of_children_who_received_opv_0"
        }, {
            "en": "Those who received family planning methods after miscarriage",
            "sw": "Waliopata njia za Uzazi wa mpango baada ya mimba kuharibika",
            "key": "report_postnatal.those_received_family_planning_methods_after_miscarriage"
        }, {
            "en": "Infants who are breastfed exclusively breastfed ( EBF )",
            "sw": "Watoto wachanga wanaonyonya maziwa ya mama pekee (EBF)",
            "key": "report_postnatal.infants_who_are_breastfed_exclusively_breastfed_ebf"
        }, {
            "en": "Number of babies born at home were started on kangaroo care ( KMC )",
            "sw": "Idadi ya watoto waliozaliwa nyumbani walioanzishiwa huduma ya kangaroo (KMC)",
            "key": "report_postnatal.number_of_babies_born_at_home_were_started_on_kangaroo_care_kmc"
        }, {
            "en": "Those who delivered outside the Health Centre(BBA, TBA, Home etc)",
            "sw": "Waliojifungulia Nje ya kituo cha kutoa huduma za Afya (BBA,TBA, Nyumbani etc)",
            "key": "report_postnatal.those_who_delivered_outside_the_health_centre_bba_tba_home_etc"
        }, {
            "en": "Infants who drink milk substitute (RF)",
            "sw": "Watoto wachanga wanaonyweshwa maziwa mbadala (RF)",
            "key": "report_postnatal.infants_who_drik_milk_substitute_rf"
        }, {
            "en": "Number of children who received BCG",
            "sw": "Idadi ya watoto waliopewa BCG",
            "key": "report_postnatal.number_of_children_who_received_bcg"
        }, {
            "en": "Children with severe infections ( septicemia )",
            "sw": "Watoto wenye uambukizo mkali (septicaemia)",
            "key": "report_postnatal.children_with_severe_infections_septicaemia"
        }, {
            "en": "Attendees between 2-7 days",
            "sw": "Waliohudhuria kati ya siku ya 2-7",
            "key": "report_postnatal.attendees_between_2_and_7_days"
        }, {
            "en": "INFECTIONS OF THE CHILD",
            "sw": "UAMBUKIZO WA MTOTO",
            "key": "report_postnatal.infections_of_the_child"
        }, {
            "en": "Number of children at home under the born 2.5kg",
            "sw": "Idadi ya watoto walozaliwa nyumbani chini ya 2.5kg",
            "key": "report_postnatal.number_of_children_at_home_under_the_born_low_weight"
        }, {
            "en": "Those who finished all visits (24 hours, days 2-7, day 28, day 42)",
            "sw": "Waliomaliza mahudhurio yote (saa 24, siku 2-7, siku 28, siku 42)",
            "key": "report_postnatal.those_who_finished_all_visits_24_hours_days_2_and_7_day_28_day_42"
        }, {
            "en": "Those given Vit.A",
            "sw": "Waliopata Vit.A",
            "key": "report_postnatal.those_given_vita"
        }, {
            "en": "Attendees total within 7 days (la + lb )",
            "sw": "Jumla Waliohudhuria ndani ya siku 7 (la+lb)",
            "key": "report_postnatal.attendees_total_within_7_days"
        }, {
            "en": "Those with fistula",
            "sw": "Wenyc fistula",
            "key": "report_postnatal.those_with_fistula"
        }, {
            "en": "The number of children born with a weight of < 2.5 kg were given KMC",
            "sw": "Idadi ya watoto waliozaliwa na uzito wa < 2.5kg wakapatiwa KMC",
            "key": "report_postnatal.the_number_of_children_born_with_a_low_weight_were_given_kmc"
        }, {
            "en": "Those tested for HIV during postnatal (within 42 days from delivery)",
            "sw": "Waliopima VVU wakati wa postnatal (ndani ya siku 42 tangu kujifungua)",
            "key": "report_postnatal.those_tested_for_hiv_during_postnatal_within_42_days_from_delivery"
        }, {
            "en": "Infants who drink breast milk and other food access (MF)",
            "sw": "Watoto wachanga wanaonyweshwa maziwa ya mama na kupatiwa chakula kingine (MF)",
            "key": "report_postnatal.infants_who_drink_breast_milk_and_other_food_access_mf"
        }, {
            "en": "CHILD",
            "sw": "MTOTO",
            "key": "report_postnatal.child"
        }, {
            "en": "INFANT FEEDING",
            "sw": "ULISHAJI WA MTOTO",
            "key": "report_postnatal.infant_feeding"
        }, {
            "en": "People with HIV who chose to use milk substitute ( RF )",
            "sw": "Wenye VVU waliochagua kunywesha maziwa mbadala (RF)",
            "key": "report_postnatal.people_with_hiv_who_chose_to_use_milk_substitute_rf"
        }, {
            "en": "Those who were found HIV positive during postnatal (within 42 days from delivery)",
            "sw": "Waliogundulika wana VVU wakati wa postnatal (ndani ya siku 42 tangu kujifungua)",
            "key": "report_postnatal.those_who_were_found_hiv_positive_during_postnatal_within_42_days_from_delivery"
        }, {
            "en": "CHILD SERVICES",
            "sw": "HUDUMA KWA MTOTO",
            "key": "report_postnatal.child_services"
        }, {
            "en": "family planning",
            "sw": "Uzazi wa Mpango",
            "key": "report_postnatal.family_planning"
        }, {
            "en": "People with HIV who chose to breastfeed exclusively breastfed ( EBF )",
            "sw": "Wenye VVU waliochagua kunyonyesha maziwa ya mama pekee (EBF)",
            "key": "report_postnatal.people_with_hiv_who_chose_to_breastfeed_exclusively_breastfed_ebf"
        }, {
            "en": "number of those who delivered at home",
            "sw": "Idadi ya waliojifungulia nyumbani",
            "key": "report_postnatal.number_of_those_who_delivered_at_home"
        }, {
            "en": "Those with severe anemia (Hb <8.5 g / dl)",
            "sw": "Wenye upungufu mkubwa wa damu (Hb < 8.5 g/dl)",
            "key": "report_postnatal.those_with_severe_anema"
        }, {
            "en": "Total attendees within 7 days",
            "sw": "Jumla Waliohudhuria ndani ya siku 7 (la+lb)",
            "key": "report_postnatal.total_attendees_within_7_days"
        }, {
            "en": "With severe anemia ( Hb < 10 g / dl or very white hands )",
            "sw": "Wenye upungufu mkubwa wa damu (Hb < 10 g/dl au viganja vyeupe sana)",
            "key": "report_postnatal.with_severe_anemia"
        },
        // End LTFHC Reports TZ
        // Start LTFHC Reports DRC
        {
            "en": "Current",
            "sw": "Current",
            "fr": "En cours",
            "key": "Current"
        }, {
            "en": "WEEKLY NOTIFICATION",
            "sw": "WEEKLY NOTIFICATION",
            "fr": "RAPPORTS HEBDOMADAIRES",
            "key": "WEEKLY NOTIFICATION"
        }, {
            "en": "Weekly Notification Form - Epidemiological Diseases",
            "sw": "Weekly Notification Form - Epidemiological Diseases",
            "fr": "Fiche de notification hebdomadaire des maladies à potentiel épidemique sous surveillance en R.D.C.",
            "key": "Weekly Notification Form - Epidemiological Diseases"
        }, {
            "en": "MONTHLY MALARIA REPORT",
            "sw": "MONTHLY MALARIA REPORT",
            "fr": "RAPPORT MENSUEL SUR LE PALUDISME",
            "key": "MONTHLY MALARIA REPORT"
        }, {
            "en": "Form 1 : Monthly Report complementing the SNIS",
            "sw": "Form 1 : Monthly Report complementing the SNIS",
            "fr": "Formulaire 1 : Rapport mensuel complémentaire au SNIS",
            "key": "Form 1 : Monthly Report complementing the SNIS"
        }, {
            "en": "MONTHLY DATA ON REPRODUCTIVE HEALTH",
            "sw": "MONTHLY DATA ON REPRODUCTIVE HEALTH",
            "fr": "RAPPORT MENSUEL SUR LA SANTÉ DE LA REPRODUCTION",
            "key": "MONTHLY DATA ON REPRODUCTIVE HEALTH"
        }, {
            "en": "Monthly data on reproductive health at a health center/maternity",
            "sw": "Monthly data on reproductive health at a health center/maternity",
            "fr": "Relevé des données mensuelles de santé sur la reproduction au niveau de CS/Maternité",
            "key": "Monthly data on reproductive health at a health center/maternity"
        }, {
            "en": "MONTHLY VACCINATION REPORT",
            "sw": "MONTHLY VACCINATION REPORT",
            "fr": "RAPPORT MENSUEL SUR LA VACCINATION",
            "key": "MONTHLY VACCINATION REPORT"
        }, {
            "en": "Form 1: Vaccination Report",
            "sw": "Form 1: Vaccination Report",
            "fr": "Formulaire 1: Rapport de vaccinations effectuées",
            "key": "Form 1: Vaccination Report"
        }, {
            "en": "Form 1: Vaccines/Intrants management",
            "sw": "Form 1: Vaccines/Intrants management",
            "fr": "Formulaire 1: Gestion des vaccins/intrants",
            "key": "Form 1: Vaccines/Intrants management"
        }, {
            "en": "Form 1: Monitoring of preventable deseases through vaccination",
            "sw": "Form 1: Monitoring of preventable deseases through vaccination",
            "fr": "Formulaire 1: Surveillance des maladies évitables par la vaccination",
            "key": "Form 1: Monitoring of preventable deseases through vaccination"
        }, {
            "en": "Order of vaccines, diluants and infection material form",
            "sw": "Order of vaccines, diluants and infection material form",
            "fr": "Bon de commande de vaccins, diluants et matériels d'injection",
            "key": "Order of vaccines, diluants and infection material form"
        }, {
            "en": "MONTHLY CANVAS - 2. CURATIVE ACTIVITIES",
            "sw": "MONTHLY CANVAS - 2. CURATIVE ACTIVITIES",
            "fr": "CANEVAS MENSUEL - 2. ACTIVITES CURATIVES",
            "key": "MONTHLY CANVAS - 2. CURATIVE ACTIVITIES"
        }, {
            "en": "2.1 Screening",
            "sw": "2.1 Screening",
            "fr": "2.1 Dépistage",
            "key": "2.1 SCREENING"
        }, {
            "en": "2.2 Consultation of sexual violence survivors",
            "sw": "2.2 Consultation of sexual violence survivors",
            "fr": "2.2 Consultation des survivants de violence sexuelle",
            "key": "2.2 Consultation of sexual violence survivors"
        }, {
            "en": "2.3 ISTs/HIV consultation",
            "sw": "2.3 ISTs/HIV consultation",
            "fr": "",
            "key": "2.3 ISTs/HIV consultation"
        }, {
            "en": "2.4 New cases identification",
            "sw": "2.4 New cases identification",
            "fr": "",
            "key": "2.4 New cases identification"
        }, {
            "en": "2.5 Laboratory / 2.6 Care",
            "sw": "2.5 Laboratory / 2.6 Care",
            "fr": "",
            "key": "2.5 Laboratory / 2.6 Care"
        }, {
            "en": "2.7. Malaria",
            "sw": "2.7. Malaria",
            "fr": "",
            "key": "2.7. Malaria"
        }, {
            "en": "2.8 Diagnosis and end of cases put in observation",
            "sw": "2.8 Diagnosis and end of cases put in observation",
            "fr": "",
            "key": "2.8 Diagnosis and end of cases put in observation"
        }, {
            "en": "MONTHLY CANVAS - 3. MATERNAL HEALTH",
            "sw": "MONTHLY CANVAS - 3. MATERNAL HEALTH",
            "fr": "",
            "key": "MONTHLY CANVAS - 3. MATERNAL HEALTH"
        }, {
            "en": "3.1 Antenatal clinic",
            "sw": "3.1 Antenatal clinic",
            "fr": "",
            "key": "3.1 Antenatal clinic"
        }, {
            "en": "3.2 PMTCT",
            "sw": "3.2 PMTCT",
            "fr": "",
            "key": "3.2 PMTCT"
        }, {
            "en": "3.3 Partners and family members of the PW",
            "sw": "3.3 Partners and family members of the PW",
            "fr": "",
            "key": "3.3 Partners and family members of the PW"
        }, {
            "en": "3.4 Pregnant women vaccination / 3.5 Pregnancy maturity",
            "sw": "3.4 Pregnant women vaccination / 3.5 Pregnancy maturity",
            "fr": "",
            "key": "3.4 Pregnant women vaccination / 3.5 Pregnancy maturity"
        }, {
            "en": "MONTHLY CANVAS - 4. CHILD'S HEALTH",
            "sw": "MONTHLY CANVAS - 4. CHILD'S HEALTH",
            "fr": "",
            "key": "MONTHLY CANVAS - 4. CHILD'S HEALTH"
        }, {
            "en": "4.1 Child's vaccination",
            "sw": "4.1 Child's vaccination",
            "fr": "",
            "key": "4.1 Child's vaccination"
        }, {
            "en": "4.2 Pre-scholary consultation / 4.3 Growth follow up at the pre-scholary consultation",
            "sw": "4.2 Pre-scholary consultation / 4.3 Growth follow up at the pre-scholary consultation",
            "fr": "",
            "key": "4.2 Pre-scholary consultation / 4.3 Growth follow up at the pre-scholary consultation"
        }, {
            "en": "MONTHLY CANVAS - 5. PROMOTIONAL ACTIVITIES",
            "sw": "MONTHLY CANVAS - 5. PROMOTIONAL ACTIVITIES",
            "fr": "",
            "key": "MONTHLY CANVAS - 5. PROMOTIONAL ACTIVITIES"
        }, {
            "en": "5. Promotional activities (health center)",
            "sw": "5. Promotional activities (health center)",
            "fr": "",
            "key": "5. Promotional activities (health center)"
        }, {
            "en": "MONTHLY CANVAS - 6. COMMUNITY CARE SITE ACTIVITIES",
            "sw": "MONTHLY CANVAS - 6. COMMUNITY CARE SITE ACTIVITIES",
            "fr": "",
            "key": "MONTHLY CANVAS - 6. COMMUNITY CARE SITE ACTIVITIES"
        }, {
            "en": "6. Community care site activities",
            "sw": "6. Community care site activities",
            "fr": "",
            "key": "6. Community care site activities"
        }, {
            "en": "MONTHLY CANVAS - 7. SUPERVISION",
            "sw": "MONTHLY CANVAS - 7. SUPERVISION",
            "fr": "",
            "key": "MONTHLY CANVAS - 7. SUPERVISION"
        }, {
            "en": "7. Supervisions",
            "sw": "7. Supervisions",
            "fr": "",
            "key": "7. Supervisions"
        }, {
            "en": "MONTHLY CANVAS - 8. RESOURCES MANAGEMENT",
            "sw": "MONTHLY CANVAS - 8. RESOURCES MANAGEMENT",
            "fr": "",
            "key": "MONTHLY CANVAS - 8. RESOURCES MANAGEMENT"
        }, {
            "en": "8. Resources management",
            "sw": "8. Resources management",
            "fr": "",
            "key": "8. Resources management"
        }, {
            "en": "MONTHLY CANVAS - 9. HEALTH'S MUTUAL",
            "sw": "MONTHLY CANVAS - 9. HEALTH'S MUTUAL",
            "fr": "",
            "key": "MONTHLY CANVAS - 9. HEALTH'S MUTUAL"
        }, {
            "en": "9. Health's mutual",
            "sw": "9. Health's mutual",
            "fr": "",
            "key": "9. Health's mutual"
        }, {
            "en": "MONTHLY CANVAS - 10. SUMMARY OF THE USE OF SERVICES",
            "sw": "MONTHLY CANVAS - 10. SUMMARY OF THE USE OF SERVICES",
            "fr": "",
            "key": "MONTHLY CANVAS - 10. SUMMARY OF THE USE OF SERVICES"
        }, {
            "en": "10. Summary  of the use of services",
            "sw": "10. Summary  of the use of services",
            "fr": "",
            "key": "10. Summary  of the use of services"
        },
        // End LTFHC Reports DRC
        {
            "key": "Home",
            "en": "Home",
            "fr": "Accueil",
            "sw": "Home"
        }, {
            "key": "New Patient",
            "en": "New Patient",
            "fr": "Nouveau Patient",
            "sw": "Mgonjwa mpya"
        }, {
            "key": "Forms",
            "en": "Forms",
            "fr": "Formulaire",
            "sw": "Fomu"
        }, {
            "key": "patients per page",
            "en": "patients per page",
            "fr": "patients par page",
            "sw": "patients per page"
        }, {
            "key": "visits per page",
            "en": "visits per page",
            "fr": "visites par page",
            "sw": "visits per page"
        }, {
            "key": "reports per page",
            "en": "reports per page",
            "fr": "rapports par page",
            "sw": "reports per page"
        }, {
            "key": "emptytable",
            "en": "No data available in table",
            "fr": "Aucune donnée à afficher",
            "sw": "No data available in table"
        }, {
            "key": "Showing",
            "en": "Showing",
            "fr": "Affiche",
            "sw": "Showing"
        }, {
            "key": "showing.to",
            "en": "to",
            "fr": "à",
            "sw": "to"
        }, {
            "key": "showing.of",
            "en": "of",
            "fr": "de",
            "sw": "of"
        }, {
            "key": "showing.entry",
            "en": "entry",
            "fr": "entrée",
            "sw": "entry"
        }, {
            "key": "showing.entries",
            "en": "entries",
            "fr": "entrées",
            "sw": "entries"
        }, {
            "key": "First Name",
            "en": "First Name",
            "fr": "Prénom",
            "sw": "First Name"
        }, {
            "key": "Last Name",
            "en": "Last Name",
            "fr": "Nom",
            "sw": "Last Name"
        }, {
            "key": "Clinic Id",
            "en": "Clinic Id",
            "fr": "Id Clinique",
            "sw": "Clinic Id"
        }, {
            "key": "Government Id",
            "en": "Government Id",
            "fr": "Id Gouvernement",
            "sw": "Government Id"
        }, {
            "key": "Hiv Id",
            "en": "Hiv Id",
            "fr": "Id Hiv",
            "sw": "Hiv Id"
        }, {
            "key": "Approx Age",
            "en": "Approx Age",
            "fr": "Age Approx",
            "sw": "Approx Age"
        }, {
            "key": "Edit",
            "en": "Edit",
            "fr": "Modifier",
            "sw": "Edit"
        }, {
            "key": "Report Updated",
            "en": "Report Updated",
            "fr": "Date de Modification",
            "sw": "Report Updated"
        }, {
            "key": "Report Type",
            "en": "Report Type",
            "fr": "Type de Rapport",
            "sw": "Report Type"
        }, {
            "key": "Report Period",
            "en": "Report Period",
            "fr": "Période du Rapport",
            "sw": "Report Period"
        }, {
            "key": "Report Status",
            "en": "Report Status",
            "fr": "Statut du Rapport",
            "sw": "Report Status"
        }, {
            "key": "Unapproved",
            "en": "Unapproved",
            "fr": "Non approuvé",
            "sw": "Unapproved"
        }, {
            "key": "Approved",
            "en": "Approved",
            "fr": "Approuvé",
            "sw": "Approved"
        }, {
            "key": "Previous",
            "en": "Previous",
            "fr": "Précedent",
            "sw": "Previous"
        }, {
            "key": "Next",
            "en": "Next",
            "fr": "Suivant",
            "sw": "Next"
        }, {
            "key": "Patients",
            "en": "Patients",
            "fr": "Patients",
            "sw": "Wateja"
        }, {
            "key": "Visits",
            "en": "Visits",
            "fr": "Visites",
            "sw": "Tembelea"
        }, {
            "key": "Reports",
            "en": "Reports",
            "fr": "Rapports",
            "sw": "Repoti"
        }, {
            "key": "Search",
            "en": "Search",
            "fr": "Recherche",
            "sw": "Tafuta"
        }, {
            "key": "report_anc.number_of_expected_pregnant_women",
            "sw": "Idadi ya Wajawazito Waliotegemewa",
            "en": "Number of expected pregnant women"
        }, {
            "key": "Contact",
            "en": "Contact",
            "fr": "Contact",
            "es": "Contacto",
            "sw": "Mwenzi"
        }, {
            "key": "From",
            "en": "From",
            "sw": "Kutoka",
            "fr": "De",
            "es": "De"
        }, {
            "key": "Clinics",
            "en": "Community Health Workers",
            "sw": "Wafanyakazi Afya ya Jamii",
            "fr": "Agents de santé",
            "es": "Agento de salud"
        }, {
            "key": "Village Name",
            "en": "Town",
            "fr": "Ville",
            "es": "Ciudia",
            "sw": "Jina kijiji"
        }, {
            "key": "Clinic Contact Name",
            "en": "Name",
            "fr": "Nom",
            "es": "Nombre",
            "sw": "Jina"
        }, {
            "key": "Clinic Contact Phone",
            "en": "Phone number",
            "fr": "Téléphone",
            "es": "Teléfono",

            "sw": "Namba ya Simu"
        }, {
            "key": "RC Code",
            "en": "Code",
            "fr": "Code",
            "es": "Código",

            "sw": "RC Kanuni"
        }, {
            "key": "Health Centers",
            "en": "Health Centers",
            "fr": "Centres de santé",
            "es": "Centros de Salud",

            "sw": "Kituo cha Afya cha"
        }, {
            "key": "Health Center",
            "en": "Health Center",
            "fr": "Centre de santé",
            "es": "Centro de Salud",

            "sw": "Kituo cha Afya cha"
        }, {
            "key": "Health Center Name",
            "en": "Health Center Name",
            "fr": "Nom du centre de santé",
            "es": "Nombre del centro de salud",

            "sw": "Kituo cha Afya cha Jina"
        }, {
            "key": "Health Center Contact Name",
            "en": "Contact Name",
            "fr": "Nom du contact",
            "es": "Nombre del contacto",

            "sw": "Kituo cha Afya cha Mawasiliano Jina"
        }, {
            "key": "Health Center Contact Phone",
            "en": "Phone number",
            "fr": "Téléphone",
            "es": "Teléfono",

            "sw": "Namba ya Simu"
        }, {
            "key": "District",
            "en": "District",
            "fr": "District",
            "es": "Distrito",

            "sw": "Wilaya ya"
        }, {
            "key": "District Name",
            "en": "District Name",
            "fr": "Nom du district",
            "es": "Nombre del distrito",

            "sw": "Wilaya ya Jina"
        }, {
            "key": "District Contact Name",
            "en": "Contact Name",
            "fr": "Nom du contact",
            "es": "Nombre del contacto",

            "sw": "Wilaya ya Mawasiliano Jina"
        }, {
            "key": "District Contact Phone",
            "en": "Phone number",
            "fr": "Téléphone",
            "es": "Teléfono",

            "sw": "Namba ya Simu"
        }, {
            "key": "Phone",
            "en": "Phone",
            "fr": "Téléphone",
            "es": "Teléfono",

            "sw": "Simu"
        }, {
            "key": "sys.recipient_not_found",
            "en": "Could not find message recipient.",
            "fr": "Le recipient du message n'a pas été trouvé.",
            "es": "No se encontro destinatario para el mensaje.",

            "sw": ""
        }, {
            "key": "sys.missing_fields",
            "en": "Missing or invalid fields: {{fields}}.",
            "fr": "Champs invalides ou manquants: {{fields}}.",
            "es": "Campo invalido o faltante: {{fields}}.",

            "sw": ""
        }, {
            "key": "missing_fields",
            "en": "Missing or invalid fields: {{fields}}.",
            "fr": "Champs invalides ou manquants: {{fields}}.",
            "es": "Campo invalido o faltante: {{fields}}.",

            "sw": ""
        }, {
            "key": "extra_fields",
            "en": "Extra fields.",
            "fr": "Champs additionels.",
            "es": "Campos extra.",

            "sw": ""
        }, {
            "key": "sys.form_not_found",
            "en": "Form '{{form}}' not found.",
            "fr": "Formulaire '{{form}}' non trouvé",
            "es": "Forma no encontrada.",

            "sw": ""
        }, {
            "key": "form_not_found",
            "en": "The form sent '{{form}}' was not recognized. Please complete it again and resend. If this problem persists contact your supervisor.",
            "fr": "Le formulaire envoyé '{{form}}' n'est pas reconnu, SVP corriger et renvoyer. Si ce problème persiste contactez votre superviseur.",
            "es": "No se reconocio el reporte enviado '{{form}}'. Por favor intente de nuevo. Si el problema persiste, informe al director.",

            "sw": ""
        }, {
            "key": "form_invalid",
            "en": "The form sent '{{form}}' was not properly completed. Please complete it and resend. If this problem persists contact your supervisor.",
            "fr": "Le formulaire envoyé '{{form}}' n'est pas complet, SVP corriger et renvoyer. Si ce problème persiste contactez votre superviseur.",
            "es": "No se completo el reporte '{{form}}'. Por favor completelo y vuelvalo a enviar. Si el problema persiste, informe al director.",

            "sw": ""
        }, {
            "key": "form_invalid_custom",
            "en": "The form sent '{{form}}' was not properly completed. Please complete it and resend. If this problem persists contact your supervisor.",
            "fr": "Le formulaire envoyé '{{form}}' n'est pas complet, SVP corriger et renvoyer. Si ce problème persiste contactez votre superviseur.",
            "es": "No se completo el reporte '{{form}}'. Por favor completelo y vuelvalo a enviar. Si el problema persiste, informe al director.",

            "sw": ""
        }, {
            "key": "sys.facility_not_found",
            "en": "Facility not found.",
            "fr": "Établissement non trouvé.",
            "es": "No se encontro a la unidad de salud.",

            "sw": ""
        }, {
            "key": "sys.empty",
            "en": "Message appears empty.",
            "fr": "Le message recu est vide.",
            "es": "El mensaje esta en blanco.",

            "sw": ""
        }, {
            "key": "empty",
            "en": "It looks like you sent an empty message, please try to resend. If you continue to have this problem please contact your supervisor.",
            "fr": "Nous avons des troubles avec votre message, SVP renvoyer. Si vous continuez à avoir des problèmes contactez votre superviseur.",
            "es": "El mensaje esta en blanco, por favor reenvielo. Si encuentra un problema, informe al director.",

            "sw": ""
        }, {
            "key": "form_received",
            "en": "Your form submission was received, thank you.",
            "fr": "Merci, votre formulaire a été bien reçu.",
            "es": "Recibimos su reporte, muchas gracias.",

            "sw": ""
        }, {
            "key": "sms_received",
            "en": "SMS message received; it will be reviewed shortly. If you were trying to submit a text form, please enter a correct form code and try again.",
            "fr": "Merci, votre message a été bien reçu.",
            "es": "Recibimos tu mensaje, lo procesaremos pronto. Si querias mandar un reporte, intentalo nuevamente en el formato adecuado.",

            "sw": ""
        }, {
            "key": "reporting_unit_not_found",
            "en": "Reporting Unit ID is incorrect. Please correct and submit a complete report again.",
            "fr": "Établissement non trouvé, svp corriger et renvoyer",
            "es": "No encontramos a su centro de salud. Por favor corrijalo y reenvie el reporte.",

            "sw": ""
        }, {
            "key": "reported_date",
            "en": "Reported Date",
            "fr": "Date envoyé",
            "es": "Fecha de envío",

            "sw": ""
        }, {
            "key": "related_entities.clinic.name",
            "en": "Clinic Name",
            "fr": "Villages",
            "es": "",

            "sw": ""
        }, {
            "key": "related_entities.clinic.contact.name",
            "en": "Clinic Contact Name",
            "fr": "Personne-ressource Clinique",
            "es": "",

            "sw": ""
        }, {
            "key": "related_entities.clinic.parent.name",
            "en": "Health Center Name",
            "fr": "Nom du centre de santé",
            "es": "",

            "sw": ""
        }, {
            "key": "related_entities.clinic.parent.contact.name",
            "en": "Health Center Contact Name",
            "fr": "Nom de la santé Contact Center",
            "es": "",

            "sw": ""
        }, {
            "key": "related_entities.clinic.parent.parent.name",
            "en": "District Hospital Name",
            "fr": "Nom de l'hôpital de district",
            "es": "",

            "sw": ""
        }, {
            "key": "related_entities.health_center.name",
            "en": "Health Center Name",
            "fr": "Nom du centre de santé",
            "es": "",

            "sw": ""
        }, {
            "key": "related_entities.health_center.contact.name",
            "en": "Health Center Contact Name",
            "fr": "Nom de la santé Contact Center",
            "es": "",

            "sw": ""
        }, {
            "key": "related_entities.health_center.parent.name",
            "en": "District Hospital Name",
            "fr": "Nom de l'hôpital de district",
            "es": "",

            "sw": ""
        }, {
            "key": "from",
            "en": "Reported From",
            "fr": "Envoyé par",
            "es": "De",

            "sw": ""
        }, {
            "key": "sent_timestamp",
            "en": "Sent Timestamp",
            "fr": "Date",
            "es": "Fecha",

            "sw": ""
        }, {
            "key": "_id",
            "en": "Record UUID",
            "fr": "Record UUID",
            "es": "Record UUID",

            "sw": "Record UUID"
        }, {
            "key": "daysoverdue",
            "en": "Days since patient visit",
            "fr": "Jours depuis visite du patient",
            "es": "",

            "sw": ""
        }, {
            "key": "Patient ID",
            "en": "Patient ID",
            "fr": "Patient ID",
            "es": "Patient ID",

            "sw": "Patient ID"
        }, {
            "key": "responses",
            "en": "Responses",
            "fr": "Responses",
            "es": "Responses",

            "sw": "Responses"
        }, {
            "key": "sms_message.message",
            "en": "Incoming Message",
            "fr": "Incoming Message",
            "es": "Incoming Message",

            "sw": "Incoming Message"
        }, {
            "key": "tasks",
            "en": "Outgoing Messages",
            "fr": "Outgoing Messages",
            "es": "Outgoing Messages",

            "sw": "Outgoing Messages"
        }, {
            "key": "scheduled_tasks",
            "en": "Scheduled Tasks",
            "fr": "Scheduled Tasks",
            "es": "Scheduled Tasks",

            "sw": "Scheduled Tasks"
        }
    ]
};