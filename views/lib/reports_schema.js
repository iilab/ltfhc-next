exports.reports = function () {
    return {
        "report_anc_1": {
            "title": "3.1. Antenatal Clinic",
            "en": "3.1. Antenatal Clinic",
            "fr": "3.1. Consultation Prénatale (CPN)",
            "type": "object",
            "manual": "true",
            "properties": {
                "antenatal_clinic_visit_1": {
                    "line_number": "1",
                    "fr": "Visites CPN 1",
                    "en": "Antenatal Clinic visit 1",
                    "condition": "false"
                },
                "pregnant_women_less_than_20_yrs": {
                    "line_number": "2",
                    "fr": "Femmes enceintes < 20 Ans",
                    "en": "Pregnant women less than 20 yrs",
                    "condition": "false"
                },
                "antenatal_clinic_visit_2": {
                    "line_number": "3",
                    "fr": "Visites CPN 2",
                    "en": "Antenatal Clinic visit 2",
                    "condition": "false"
                },
                "antenatal_clinic_visit_3": {
                    "line_number": "4",
                    "fr": "Visites CPN 3",
                    "en": "Antenatal Clinic visit 3",
                    "condition": "false"
                },
                "antenatal_clinic_vist_4": {
                    "line_number": "5",
                    "fr": "Visites CPN 4",
                    "en": "Antenatal Clinic vist 4",
                    "condition": "false"
                },
                "pregnant_women_who_realised_the_antenatal_cininc_1st_term": {
                    "line_number": "6",
                    "fr": "Femmes enceinte ayant réalisé la CPN1 au 1er trimestre",
                    "en": "Pregnant women who realised the Antenatal cininc 1st term",
                    "condition": "false"
                },
                "pregnant_women_with_anc4_during_their_last_pregnancy": {
                    "line_number": "7",
                    "fr": "Femmes enceinte avec CPN 4 pendant leur dernière grossesse",
                    "en": "Pregnant women with ANC4 during their last pregnancy",
                    "condition": "false"
                },
                "pregnant_women_with_anc4_with_one_at_8th_or_9th_month": {
                    "line_number": "8",
                    "fr": "Femmes enceinte avec CPN 4 dont une au 8ème-9ème mois",
                    "en": "Pregnant women with ANC4  with one at 8th or 9th month",
                    "condition": "false"
                },
                "tested_pregnant_women_at_risk": {
                    "line_number": "9",
                    "fr": "Femmes enceinte à risque détectées",
                    "en": "Tested Pregnant women at risk",
                    "condition": "false"
                },
                "refered_pregant_women_at_risk_to_the_general_hospital": {
                    "line_number": "10",
                    "fr": "Femmes enceinte à risque référée vers l'HGR",
                    "en": "Refered Pregant women at risk to the general hospital",
                    "condition": "false"
                },
                "pregnant_women_under_20_yrs_refered": {
                    "line_number": "11",
                    "fr": "Femmes enceintes < 20 Ans référées",
                    "en": "Pregnant women under 20 yrs refered",
                    "condition": "false"
                },
                "iron_plus_folic_acid_1st_dose_received": {
                    "line_number": "12",
                    "fr": "Fer + Acide Folique 1ère dose reçue",
                    "en": "Iron + folic acid 1st dose received",
                    "condition": "false"
                },
                "iron_plus_folic_acid_2nd_dose_received": {
                    "line_number": "13",
                    "fr": "Fer + Acide Folique 2ème dose reçues",
                    "en": "Iron + folic acid 2nd dose received",
                    "condition": "false"
                },
                "iron_plus_folic_acid_3rd_dose_received": {
                    "line_number": "14",
                    "fr": "Fer + Acide Folique 3ème dose reçue",
                    "en": "Iron + folic acid 3rd dose received",
                    "condition": "false"
                },
                "sulfadox_plus_pyrimet_1st_dose_received": {
                    "line_number": "15",
                    "fr": "Sulfadox. + Pyrimét 1ère dose reçue",
                    "en": "Sulfadox + Pyrimet 1st dose received",
                    "condition": "false"
                },
                "sulfadox_plus_pyrimet_2nd_dose_received": {
                    "line_number": "16",
                    "fr": "Sulfadox. + Pyrimét 2ème dose reçues",
                    "en": "Sulfadox + Pyrimet 2nd dose received",
                    "condition": "false"
                },
                "sulfadox_plus_pyrimet_3rd_dose_received": {
                    "line_number": "17",
                    "fr": "Sulfadox. + Pyrimét 3ème dose reçue",
                    "en": "Sulfadox + Pyrimet 3rd dose received",
                    "condition": "false"
                },
                "completed_vaccinated_before_pregnancy": {
                    "line_number": "18",
                    "fr": "Complètement vaccinées avant grossesse",
                    "en": "Completed vaccinated before pregnancy",
                    "condition": "false"
                },
                "who_required_the_mild": {
                    "line_number": "19",
                    "fr": "Ayant acquis une MILD",
                    "en": "Who required the MILD",
                    "condition": "false"
                },
                "who_received_mebendazole_since_the_2nd_term": {
                    "line_number": "20",
                    "fr": "Ayant reçu le Mébendazole à partir du 2ème trimestre",
                    "en": "Who received Mebendazole since the 2nd term",
                    "condition": "false"
                }
            },
            "definitions": {
                "columns": {
                    "total": {
                        "fr": "Total",
                        "en": "Total",
                        "title": "Total",
                        "condition": "false"
                    }
                }
            },
            "parent": "report_anc"
        },
        "report_anc_2": {
            "title": "3.1. Antenatal Clinic Indicators",
            "en": "3.1. Antenatal Clinic",
            "fr": "3.1. Consultation Prénatale (CPN)",
            "manual": "true",
            "type": "object",
            "properties": {
                "target_population": {
                    "line_number": "21",
                    "line": "singlecell",
                    "fr": "Population cible = fe du mois",
                    "en": "target population= monthly woman",
                    "condition": "false"
                },
                "anc_sessions": {
                    "line_number": "22",
                    "line": "singlecell",
                    "fr": "Séances de CPN",
                    "en": "ANC sessions",
                    "condition": "false"
                },
                "used_rate_anc": {
                    "line_number": "23",
                    "line": "singlecell",
                    "fr": "Taux d’utilisation CPN = CPN 1 AS (Nlles inscrites)x 100/ Pop femmes enceintes du mois",
                    "en": "Used rate ANC= ANC 1 AS (new registered)X100/pop monthly pregnant women",
                    "condition": "false"
                },
                "pregnacies_at_high_risk_detected": {
                    "line_number": "24",
                    "line": "singlecell",
                    "fr": "Proportion de grossesses à haut risque détectées = Tot Grossesses à haut risque détectées x 100 / Total Nlles Inscrites",
                    "en": "Pregnacies at high risk detected = total pregnancies at high risk detected X100/tota new registered",
                    "condition": "false"
                },
                "pregnancies_at_high_risk_avarage_refered": {
                    "line_number": "25",
                    "line": "singlecell",
                    "fr": "Proportion de grossesses à haut risque référées = Tot Grossesses à haut risque référées x 100 / Total femmes à hauts risques détectées inscrites",
                    "en": "Pregnancies at high risk avarage refered= total pregnanciesat high risk refered X100/total women at high risk detected registered",
                    "condition": "false"
                },
                "average_of_women_who_received_at_least_the_sp2": {
                    "line_number": "26",
                    "line": "singlecell",
                    "fr": "Proportion de fe ayant reçu au moins la SP 2 = Nombre de femmes enceintes ayant reçu au moins 2 Quantité de SPX100 / Fe ayant effectué la première visite prénatale",
                    "en": "Average of women who received at least the SP2= number of pregnant women Who received at least 2 quantities of SPX100/woman who was visited for the 1st time at ANC",
                    "condition": "false"
                },
                "average_of_pregnant_women_who_received_one_mild_at_anc": {
                    "line_number": "27",
                    "line": "singlecell",
                    "fr": "Proportion des femmes enceintes ayant reçues une MILD à la CPN = femmes enceintes ayant acquis MILD X 100/ Total CPN1",
                    "en": "Average of pregnant women who received one MILD at ANC= Pregnant woman who required a MILD X100/total ANC 1",
                    "condition": "false"
                }
            },
            "definitions": {
                "columns": {
                    "total": {
                        "fr": "Total",
                        "en": "Total",
                        "title": "Total",
                        "condition": "false"
                    }
                }
            },
            "parent": "report_anc"
        },
        "report_childvaccination_1": {
            "title": "4.1 Child's vaccination",
            "fr": "4.1 Vaccination des enfants",
            "type": "object",
            "manual": "true",
            "properties": {
                "prepared_sessions": {
                    "line_number": "1",
                    "fr": "Séances prévues",
                    "en": "Prepared sessions",
                    "condition": "true"
                },
                "realised_sessions": {
                    "line_number": "2",
                    "fr": "Séances réalisées",
                    "en": "Realised sessions",
                    "condition": "true"
                },
                "children_non_attended_to_but_reached_out_by_the_community_health_workers": {
                    "line_number": "3",
                    "fr": "Enfants non atteints récupérés par les RECO",
                    "en": "Children non attended to but reached out by the Community Health Workers",
                    "condition": "true"
                },
                "target_population": {
                    "line_number": "4",
                    "line": "singlecell",
                    "fr": "Population cible = Enfants de 0 à 11 mois du mois (pop du mois x 0,039)",
                    "en": "target population = child from 0-11 months of the month (Monthly Pop X 0.39)",
                    "condition": "true"
                }
            },
            "definitions": {
                "columns": {
                    "number": {
                        "fr": "Nombre",
                        "en": "Number",
                        "title": "Number",
                        "condition": "true"
                    }
                }
            },
            "parent": "report_childvaccination"
        },
        "report_childvaccination_2": {
            "title": "4.1 Child's vaccination (cont)",
            "fr": "4.1 Vaccination des enfants",
            "type": "object",
            "manual": "true",
            "properties": {
                "bcg": {
                    "line_number": "16",
                    "line": "singlecell",
                    "fr": "BCG = BCG AS x 100 / Population de 0-11 mois du mois",
                    "en": "BCG = BCG As X 100/Pop from 01 to 11 months of the month",
                    "condition": "true"
                },
                "opv_0": {
                    "line_number": "2",
                    "fr": "VPO 0",
                    "en": "OPV 0",
                    "condition": "true"
                },
                "opv_1": {
                    "line_number": "3",
                    "fr": "VPO 1",
                    "en": "OPV 1",
                    "condition": "true"
                },
                "opv_2": {
                    "line_number": "4",
                    "fr": "VPO 2",
                    "en": "OPV 2",
                    "condition": "true"
                },
                "opv_3": {
                    "line_number": "17",
                    "line": "singlecell",
                    "fr": "VPO 3 = VPO3 AS x 100 / Population des nourrissons survivants au cours du mois",
                    "en": "OVP 3= OVP3 Asx100/Pop of survivors infants during the month",
                    "condition": "true"
                },
                "dtc_hepb_hib1": {
                    "line_number": "6",
                    "fr": "DTC-HepB Hib1",
                    "en": "DTC-HepB Hib1",
                    "condition": "true"
                },
                "dtc_hepb_hib2": {
                    "line_number": "7",
                    "fr": "DTC-HepB Hib2",
                    "en": "DTC-HepB Hib2",
                    "condition": "true"
                },
                "dtc_hepb_hib3": {
                    "line_number": "18",
                    "line": "singlecell",
                    "fr": "DTC-HepB Hib3 = DTC-HepB Hib3 0-11 mois AS x 100 / Nourrissons survivants du mois",
                    "en": "DTC-HepB Hib3 = DTC-HepB Hib3 0-11 months Asx100/survivor infants of the month",
                    "condition": "true"
                },
                "pvc_13_1": {
                    "line_number": "9",
                    "fr": "PCV-13 (1)",
                    "en": "PVC-13 (1)",
                    "condition": "true"
                },
                "pvc_13_2": {
                    "line_number": "10",
                    "fr": "PCV-13 (2)",
                    "en": "PVC-13 (2)",
                    "condition": "true"
                },
                "pvc_13_3": {
                    "line_number": "11",
                    "fr": "PCV-13 (3)",
                    "en": "PVC-13 (3)",
                    "condition": "true"
                },
                "vaa": {
                    "line_number": "21",
                    "line": "singlecell",
                    "fr": "VAA = VAA AS x 100 / Population des nourrissons survivants",
                    "en": "VAA = VAA ASx100/Pop survivor infants",
                    "condition": "true"
                },
                "var": {
                    "line_number": "13",
                    "fr": "VAR",
                    "en": "VAR",
                    "condition": "true"
                },
                "ecv": {
                    "line_number": "22",
                    "line": "singlecell",
                    "fr": "ECV = ECV AS x 100 / Population des nourrissons survivants",
                    "en": "ECV = ECV AS x100/Pop survovors infants",
                    "condition": "true"
                },
                "total_number_of_non_atteded_children_by_vaccination": {
                    "line_number": "15",
                    "line": "singlecell",
                    "fr": "Total enfants non atteints par la vaccination",
                    "en": "Total number of non atteded children by vaccination",
                    "condition": "true"
                },
                "vaar": {
                    "line_number": "19",
                    "line": "singlecell",
                    "fr": "VAR = VAR AS x 100 / Pop des nourrissons survivants du mois",
                    "en": "VAAR = VAAR ASx100/pop of survivors infants of the month",
                    "condition": "true"
                },
                "pcv13_3rd_dose": {
                    "line_number": "20",
                    "line": "singlecell",
                    "fr": "PCV-13 3eme dose = PCV-13 0-11 mois AS x 100 / Population des nourrissons survivants",
                    "en": "PCV13 3rd dose= PCV- 13 0 -11 months ASx100/Pop of survivors infants",
                    "condition": "true"
                },
                "drop_out_rate_dtc1_dtc3": {
                    "line_number": "23",
                    "line": "singlecell",
                    "fr": "Tx d’abandon DTC1 – DTC3 = (DTC-HepB Hib1 - DTC-HepB Hib3 ) x 100 / DTC-HepB Hib1",
                    "en": "Drop out rate DTC1-DTC3=(DTC-HepB Hib1 - DTC-HepB Hib3)x100/DTC-HepB Hib1",
                    "condition": "true"
                },
                "vat2_plus": {
                    "line_number": "24",
                    "line": "singlecell",
                    "fr": "VAT2+ = (VAT2-5 B + VAT1-5 A) x 100 / Femmes enceintes attendues (4% Pop tot)",
                    "en": "VAT2+=(VAT2-5B + VAT1-5A)x100/PW attended (4% of the total population)",
                    "condition": "true"
                }
            },
            "definitions": {
                "columns": {
                    "0_11_months_male_fixe_as": {
                        "fr": "AS",
                        "en": "AS",
                        "title": "AS",
                        "condition": "true"
                    },
                    "0_11_months_male_fixe_has": {
                        "fr": "HAS",
                        "en": "HAS",
                        "title": "HAS",
                        "condition": "true"
                    },
                    "0_11_months_male_fixe_hz": {
                        "fr": "HZ",
                        "en": "HZ",
                        "title": "HZ",
                        "condition": "true"
                    },
                    "0_11_months_male_mobile_as": {
                        "fr": "AS",
                        "en": "AS",
                        "title": "AS",
                        "condition": "true"
                    },
                    "0_11_months_male_mobile_has": {
                        "fr": "HAS",
                        "en": "HAS",
                        "title": "HAS",
                        "condition": "true"
                    },
                    "0_11_months_male_mobile_hz": {
                        "fr": "HZ",
                        "en": "HZ",
                        "title": "HZ",
                        "condition": "true"
                    },
                    "0_11_months_male_advanced_as": {
                        "fr": "AS",
                        "en": "AS",
                        "title": "AS",
                        "condition": "true"
                    },
                    "0_11_months_male_advanced_has": {
                        "fr": "HAS",
                        "en": "HAS",
                        "title": "HAS",
                        "condition": "true"
                    },
                    "0_11_months_male_advanced_hz": {
                        "fr": "HZ",
                        "en": "HZ",
                        "title": "HZ",
                        "condition": "true"
                    },
                    "0_11_months_male_total": {
                        "fr": "Total",
                        "en": "Total",
                        "title": "Total",
                        "condition": "true"
                    },
                    "0_11_months_female_fixe_as": {
                        "fr": "AS",
                        "en": "AS",
                        "title": "AS",
                        "condition": "true"
                    },
                    "0_11_months_female_fixe_has": {
                        "fr": "HAS",
                        "en": "HAS",
                        "title": "HAS",
                        "condition": "true"
                    },
                    "0_11_months_female_fixe_hz": {
                        "fr": "HZ",
                        "en": "HZ",
                        "title": "HZ",
                        "condition": "true"
                    },
                    "0_11_months_female_mobile_as": {
                        "fr": "AS",
                        "en": "AS",
                        "title": "AS",
                        "condition": "true"
                    },
                    "0_11_months_female_mobile_has": {
                        "fr": "HAS",
                        "en": "HAS",
                        "title": "HAS",
                        "condition": "true"
                    },
                    "0_11_months_female_mobile_hz": {
                        "fr": "HZ",
                        "en": "HZ",
                        "title": "HZ",
                        "condition": "true"
                    },
                    "0_11_months_female_advanced_as": {
                        "fr": "AS",
                        "en": "AS",
                        "title": "AS",
                        "condition": "true"
                    },
                    "0_11_months_female_advanced_has": {
                        "fr": "HAS",
                        "en": "HAS",
                        "title": "HAS",
                        "condition": "true"
                    },
                    "0_11_months_female_advanced_hz": {
                        "fr": "HZ",
                        "en": "HZ",
                        "title": "HZ",
                        "condition": "true"
                    },
                    "0_11_months_female_total": {
                        "fr": "Total",
                        "en": "Total",
                        "title": "Total",
                        "condition": "true"
                    },
                    "0_11_months_total": {
                        "fr": "Total",
                        "en": "Total",
                        "title": "Total",
                        "condition": "true"
                    },
                    "12_59_months_male_fixe_as": {
                        "fr": "AS",
                        "en": "AS",
                        "title": "AS",
                        "condition": "true"
                    },
                    "12_59_months_male_fixe_has": {
                        "fr": "HAS",
                        "en": "HAS",
                        "title": "HAS",
                        "condition": "true"
                    },
                    "12_59_months_male_fixe_hz": {
                        "fr": "HZ",
                        "en": "HZ",
                        "title": "HZ",
                        "condition": "true"
                    },
                    "12_59_months_male_mobile_as": {
                        "fr": "AS",
                        "en": "AS",
                        "title": "AS",
                        "condition": "true"
                    },
                    "12_59_months_male_mobile_has": {
                        "fr": "HAS",
                        "en": "HAS",
                        "title": "HAS",
                        "condition": "true"
                    },
                    "12_59_months_male_mobile_hz": {
                        "fr": "HZ",
                        "en": "HZ",
                        "title": "HZ",
                        "condition": "true"
                    },
                    "12_59_months_male_advanced_as": {
                        "fr": "AS",
                        "en": "AS",
                        "title": "AS",
                        "condition": "true"
                    },
                    "12_59_months_male_advanced_has": {
                        "fr": "HAS",
                        "en": "HAS",
                        "title": "HAS",
                        "condition": "true"
                    },
                    "12_59_months_male_advanced_hz": {
                        "fr": "HZ",
                        "en": "HZ",
                        "title": "HZ",
                        "condition": "true"
                    },
                    "12_59_months_male_total": {
                        "fr": "Total",
                        "en": "Total",
                        "title": "Total",
                        "condition": "true"
                    },
                    "12_59_months_female_fixe_as": {
                        "fr": "AS",
                        "en": "AS",
                        "title": "AS",
                        "condition": "true"
                    },
                    "12_59_months_female_fixe_has": {
                        "fr": "HAS",
                        "en": "HAS",
                        "title": "HAS",
                        "condition": "true"
                    },
                    "12_59_months_female_fixe_hz": {
                        "fr": "HZ",
                        "en": "HZ",
                        "title": "HZ",
                        "condition": "true"
                    },
                    "12_59_months_female_mobile_as": {
                        "fr": "AS",
                        "en": "AS",
                        "title": "AS",
                        "condition": "true"
                    },
                    "12_59_months_female_mobile_has": {
                        "fr": "HAS",
                        "en": "HAS",
                        "title": "HAS",
                        "condition": "true"
                    },
                    "12_59_months_female_mobile_hz": {
                        "fr": "HZ",
                        "en": "HZ",
                        "title": "HZ",
                        "condition": "true"
                    },
                    "12_59_months_female_advanced_as": {
                        "fr": "AS",
                        "en": "AS",
                        "title": "AS",
                        "condition": "true"
                    },
                    "12_59_months_female_advanced_has": {
                        "fr": "HAS",
                        "en": "HAS",
                        "title": "HAS",
                        "condition": "true"
                    },
                    "12_59_months_female_advanced_hz": {
                        "fr": "HZ",
                        "en": "HZ",
                        "title": "HZ",
                        "condition": "true"
                    },
                    "12_59_months_female_total": {
                        "fr": "Total",
                        "en": "Total",
                        "title": "Total",
                        "condition": "true"
                    },
                    "12_59_total": {
                        "fr": "Total",
                        "en": "Total",
                        "title": "Total",
                        "condition": "true"
                    },
                    "total": {
                        "fr": "Total",
                        "en": "Total",
                        "title": "Total",
                        "condition": "true"
                    }
                }
            },
            "parent": "report_childvaccination"
        },
        "report_community_1": {
            "title": "6.1 Reference of Community care site activities",
            "fr": "6.1 Référence du Site de Soin Communautaire au CS",
            "type": "object",
            "manual": "true",
            "properties": {
                "active_care_sites": {
                    "line_number": "1",
                    "fr": "Sites de soins fonctionnels",
                    "en": "Active care sites",
                    "condition": "true"
                },
                "care_sites_wich_have_reported": {
                    "line_number": "2",
                    "fr": "Sites de soins ayant rapporté",
                    "en": "Care sites wich have reported",
                    "condition": "true"
                },
                "care_sites_wich_have_reported_on_the_dead_line": {
                    "line_number": "3",
                    "fr": "SSC ayant rapporté dans le délai",
                    "en": "Care sites wich have reported on the dead line",
                    "condition": "true"
                }
            },
            "definitions": {
                "columns": {
                    "number": {
                        "fr": "Nombre",
                        "en": "Number",
                        "title": "Number",
                        "condition": "true"
                    }
                }
            },
            "parent": "report_community"
        },
        "report_community_2": {
            "title": "6.2 Treatment and Notification",
            "fr": "6.2 Notification et traitement",
            "type": "object",
            "manual": "true",
            "properties": {
                "new_children_cases_receivedat_the_site": {
                    "line_number": "1",
                    "fr": "Nouveaux cas enfants reçus au site",
                    "en": "New children cases receivedat the site",
                    "condition": "true"
                },
                "nbr_of_old_cases_received_at_the_site": {
                    "line_number": "2",
                    "fr": "Nombre d’anciens cas reçus au site",
                    "en": "Nbr of old cases received at the site",
                    "condition": "true"
                },
                "nbr_of_referals_to_hc": {
                    "line_number": "3",
                    "fr": "Nombre de référés vers CS",
                    "en": "Nbr of referals to HC",
                    "condition": "true"
                },
                "nbr_of_contre_refered": {
                    "line_number": "4",
                    "fr": "Nombre de contre-référés",
                    "en": "Nbr of contre - refered",
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
                        "fr": "Total",
                        "en": "Total",
                        "title": "Total",
                        "condition": "true"
                    }
                }
            },
            "parent": "report_community"
        },
        "report_community_3": {
            "title": "6.2 Treatment and Notification (cont)",
            "fr": "6.2. Notification et traitement (suite)",
            "type": "object",
            "manual": "true",
            "properties": {
                "cases_of_fever_in_malaria_zone_at_risk": {
                    "line_number": "1",
                    "fr": "Cas de fièvre dans une zone a risque du paludisme",
                    "en": "Cases of fever in malaria zone at risk",
                    "condition": "true"
                },
                "realized_tdrs": {
                    "line_number": "2",
                    "fr": "TDRs réalisés",
                    "en": "Realized TDRs",
                    "condition": "true"
                },
                "including_positive": {
                    "line_number": "3",
                    "fr": "Dont positif",
                    "en": "Including positive",
                    "condition": "true"
                },
                "including_treated": {
                    "line_number": "4",
                    "fr": "Dont traité",
                    "en": "Including treated",
                    "condition": "true"
                },
                "pneumonia": {
                    "line_number": "5",
                    "fr": "Pneumonie",
                    "en": "Pneumonia",
                    "condition": "true"
                },
                "including_treaed_under_national_policy": {
                    "line_number": "6",
                    "fr": "Dont traité avec la politique national",
                    "en": "Including treaed under national policy",
                    "condition": "true"
                },
                "cough_and_cold": {
                    "line_number": "7",
                    "fr": "Toux ou Rhume",
                    "en": "Cough and cold",
                    "condition": "true"
                },
                "diarrhea": {
                    "line_number": "8",
                    "fr": "Diarrhée",
                    "en": "Diarrhea",
                    "condition": "true"
                },
                "including_treated_under_national_policy": {
                    "line_number": "9",
                    "fr": "Dont traité avec la politique national",
                    "en": "Including treated under national policy",
                    "condition": "true"
                },
                "malnutrition": {
                    "line_number": "10",
                    "fr": "Malnutrition",
                    "en": "Malnutrition",
                    "condition": "true"
                },
                "including_pb_under_the_red_line": {
                    "line_number": "11",
                    "fr": "Dont PB sur la bande rouge",
                    "en": "Including PB under the red line",
                    "condition": "true"
                },
                "danger_signs_alert_referal_cases": {
                    "line_number": "12",
                    "fr": "Signe de danger/alerte & cas à orienter",
                    "en": "Danger signs/alert& referal cases",
                    "condition": "true"
                }
            },
            "definitions": {
                "columns": {
                    "number": {
                        "fr": "Nombre",
                        "en": "Number",
                        "title": "Number",
                        "condition": "true"
                    }
                }
            },
            "parent": "report_community"
        },
        "report_community_4": {
            "title": "6.3  Consumption of medicines",
            "fr": "6.3. Consommation des médicaments",
            "type": "object",
            "manual": "true",
            "properties": {
                "amoxyciline_250mg_or_syrup_125mg": {
                    "line_number": "1",
                    "fr": "Amoxycilline caps 250 mg ou sirop 125 mg",
                    "en": "Amoxyciline  250mg or Syrup 125mg",
                    "condition": "true"
                },
                "artesunate_amodiaquine_2_11_months": {
                    "line_number": "2",
                    "fr": "Artésunate-Amodiaquine (2-11 mois)",
                    "en": "Artesunate-Amodiaquine 2-11 months",
                    "condition": "true"
                },
                "artesunate_amodiaquine_12_59_months": {
                    "line_number": "3",
                    "fr": "Artésunate-Amodiaquine (12 -59 mois)",
                    "en": "Artesunate-Amodiaquine 12-59 months",
                    "condition": "true"
                },
                "paracetamol_500mg": {
                    "line_number": "4",
                    "fr": "Paracétamol 500mg",
                    "en": "Paracetamol 500mg",
                    "condition": "true"
                },
                "ors": {
                    "line_number": "5",
                    "fr": "SRO",
                    "en": "ORS",
                    "condition": "true"
                },
                "tdr": {
                    "line_number": "6",
                    "fr": "TDR",
                    "en": "TDR",
                    "condition": "true"
                },
                "zinc_20mg": {
                    "line_number": "7",
                    "fr": "Zinc 20 mg",
                    "en": "Zinc 20mg",
                    "condition": "true"
                }
            },
            "definitions": {
                "columns": {
                    "qty_at_beginning": {
                        "fr": "Quantité au début",
                        "en": "Qty at beginning",
                        "title": "Qty at beginning",
                        "condition": "true"
                    },
                    "entries": {
                        "fr": "Entrées",
                        "en": "Entries",
                        "title": "Entries",
                        "condition": "true"
                    },
                    "consumed_qty": {
                        "fr": "Quantité consommée",
                        "en": "Consumed QTY",
                        "title": "Consumed QTY",
                        "condition": "true"
                    },
                    "qty_at_the_end_of_month": {
                        "fr": "Quantité à la fin du mois",
                        "en": "QTY at the end of month",
                        "title": "QTY at the end of month",
                        "condition": "true"
                    }
                }
            },
            "parent": "report_community"
        },
        "report_diagnosis": {
            "title": "2.8: Diagnosis and end of cases put in observation",
            "type": "object",
            "manual": "true",
            "properties": {
                "accident_celebro_vascular": {
                    "line_number": "1",
                    "fr": "Accident vasculo-céérebral (AVC)",
                    "en": "Accident Celebro - vascular",
                    "condition": "false"
                },
                "work_accident": {
                    "line_number": "2",
                    "fr": "Accidents de travail",
                    "en": "Work accident",
                    "condition": "false"
                },
                "amibiasis": {
                    "line_number": "3",
                    "fr": "Amibiase",
                    "en": "Amibiasis",
                    "condition": "false"
                },
                "anemia": {
                    "line_number": "4",
                    "fr": "Anémie",
                    "en": "Anemia",
                    "condition": "false"
                },
                "burns": {
                    "line_number": "5",
                    "fr": "?",
                    "en": "Burns",
                    "condition": "false"
                },
                "ceivix_cancer": {
                    "line_number": "6",
                    "fr": "?",
                    "en": "Ceivix cancer",
                    "condition": "false"
                },
                "prostate_cancer": {
                    "line_number": "7",
                    "fr": "?",
                    "en": "Prostate cancer",
                    "condition": "false"
                },
                "breast_cancer": {
                    "line_number": "8",
                    "fr": "?",
                    "en": "Breast cancer",
                    "condition": "false"
                },
                "dental_carris": {
                    "line_number": "9",
                    "fr": "?",
                    "en": "Dental carris",
                    "condition": "false"
                },
                "cataracte": {
                    "line_number": "10",
                    "fr": "?",
                    "en": "Cataracte",
                    "condition": "false"
                },
                "cholera": {
                    "line_number": "11",
                    "fr": "Choléra",
                    "en": "Cholera",
                    "condition": "false"
                },
                "conjoctivitis": {
                    "line_number": "12",
                    "fr": "?",
                    "en": "Conjoctivitis",
                    "condition": "false"
                },
                "whooping_cough_of_non_vaccinated_patients": {
                    "line_number": "13",
                    "fr": "Coqueluche patient non vacciné",
                    "en": "Whooping cough of non vaccinated patients",
                    "condition": "false"
                },
                "whooping_cough_of_vaccinated_patients": {
                    "line_number": "14",
                    "fr": "Coqueluche patient vacciné",
                    "en": "Whooping cough of  vaccinated patients",
                    "condition": "false"
                },
                "depression": {
                    "line_number": "15",
                    "fr": "?",
                    "en": "Depression",
                    "condition": "false"
                },
                "diabetitis": {
                    "line_number": "16",
                    "fr": "Diabète",
                    "en": "Diabetitis",
                    "condition": "false"
                },
                "bloody_diarrhea": {
                    "line_number": "17",
                    "fr": "Diarrhée sanglante",
                    "en": "Bloody diarrhea",
                    "condition": "false"
                },
                "simple_diarrhea": {
                    "line_number": "18",
                    "fr": "Diarrhée simple",
                    "en": "Simple diarrhea",
                    "condition": "false"
                },
                "drepanocytosis": {
                    "line_number": "19",
                    "fr": "Drépanocytose",
                    "en": "Drepanocytosis",
                    "condition": "false"
                },
                "epilepsy_convulsion_crisis": {
                    "line_number": "20",
                    "fr": "Epilepsie",
                    "en": "Epilepsy/ convulsion crisis",
                    "condition": "false"
                },
                "viral_heomrrhage_fever": {
                    "line_number": "21",
                    "fr": "Fièvre hémorragique",
                    "en": "Viral Heomrrhage Fever",
                    "condition": "false"
                },
                "yellow_fever": {
                    "line_number": "22",
                    "fr": "?",
                    "en": "Yellow Fever",
                    "condition": "false"
                },
                "typhoid_fever": {
                    "line_number": "23",
                    "fr": "?",
                    "en": "Typhoid Fever",
                    "condition": "false"
                },
                "glaucome": {
                    "line_number": "24",
                    "fr": "?",
                    "en": "Glaucome",
                    "condition": "false"
                },
                "goiter": {
                    "line_number": "25",
                    "fr": "?",
                    "en": "Goiter",
                    "condition": "false"
                },
                "bird_flu": {
                    "line_number": "26",
                    "fr": "?",
                    "en": "Bird flu",
                    "condition": "false"
                },
                "hepatitis": {
                    "line_number": "27",
                    "fr": "?",
                    "en": "Hepatitis",
                    "condition": "false"
                },
                "hernia": {
                    "line_number": "28",
                    "fr": "?",
                    "en": "Hernia",
                    "condition": "false"
                },
                "high_blood_pressure": {
                    "line_number": "29",
                    "fr": "?",
                    "en": "High Blood Pressure",
                    "condition": "false"
                },
                "related_work_accident_incapacities": {
                    "line_number": "30",
                    "fr": "?",
                    "en": "Related work accident incapacities",
                    "condition": "false"
                },
                "skin_related_infections": {
                    "line_number": "31",
                    "fr": "?",
                    "en": "Skin related Infections",
                    "condition": "false"
                },
                "urinary_related_infections": {
                    "line_number": "32",
                    "fr": "?",
                    "en": "Urinary related infections",
                    "condition": "false"
                },
                "indigenious_product_related_to_intoxication": {
                    "line_number": "33",
                    "fr": "?",
                    "en": "Indigenious product related to intoxication",
                    "condition": "false"
                },
                "pneumonia": {
                    "line_number": "34",
                    "fr": "?",
                    "en": "Pneumonia",
                    "condition": "false"
                },
                "high_respiratory_infection_syndrom_grippal_cold": {
                    "line_number": "35",
                    "fr": "?",
                    "en": "High Respiratory Infection (syndrom grippal/cold)",
                    "condition": "false"
                },
                "stis_genital_syndrome_flow": {
                    "line_number": "36",
                    "fr": "?",
                    "en": "STIs/ genital  syndrome flow",
                    "condition": "false"
                },
                "stis_pelvic_inflammatory_syndrome": {
                    "line_number": "37",
                    "fr": "?",
                    "en": "STIs/ Pelvic Inflammatory syndrome",
                    "condition": "false"
                },
                "stis_genital_ulceration_syndrome": {
                    "line_number": "38",
                    "fr": "?",
                    "en": "STIs/ Genital  Ulceration Syndrome",
                    "condition": "false"
                },
                "konzo": {
                    "line_number": "39",
                    "fr": "Konzo",
                    "en": "Konzo",
                    "condition": "false"
                },
                "leprosy": {
                    "line_number": "40",
                    "fr": "Lèpre",
                    "en": "Leprosy",
                    "condition": "false"
                },
                "moderated_high_malnutrition": {
                    "line_number": "41",
                    "fr": "Malnutrition protéino-énergétique",
                    "en": "Moderated high malnutrition",
                    "condition": "false"
                },
                "mania": {
                    "line_number": "42",
                    "fr": "?",
                    "en": "Mania",
                    "condition": "false"
                },
                "menengitis": {
                    "line_number": "43",
                    "fr": "Méningite",
                    "en": "Menengitis",
                    "condition": "false"
                },
                "monkey_pox": {
                    "line_number": "44",
                    "fr": "Monkey Pox",
                    "en": "Monkey pox",
                    "condition": "false"
                },
                "venonimous_animals_bites": {
                    "line_number": "45",
                    "fr": "?",
                    "en": "Venonimous Animals bites",
                    "condition": "false"
                },
                "noma": {
                    "line_number": "46",
                    "fr": "Noma",
                    "en": "Noma",
                    "condition": "false"
                },
                "intestinal_occlusion": {
                    "line_number": "47",
                    "fr": "?",
                    "en": "Intestinal occlusion",
                    "condition": "false"
                },
                "onchocercosis_and_other_filariosis": {
                    "line_number": "48",
                    "fr": "Onchocercose et autres filarioses",
                    "en": "Onchocercosis and other Filariosis",
                    "condition": "false"
                },
                "pest": {
                    "line_number": "49",
                    "fr": "Peste",
                    "en": "Pest",
                    "condition": "false"
                },
                "pfa_paralysie_flasque_aigue": {
                    "line_number": "50",
                    "fr": "PFA",
                    "en": "PFA (Paralysie Flasque Aigue)",
                    "condition": "false"
                },
                "psychose_aigue_bouffee_delirante": {
                    "line_number": "51",
                    "fr": "?",
                    "en": "Psychose-aigue: bouffee delirante",
                    "condition": "false"
                },
                "psychose_puerperal": {
                    "line_number": "52",
                    "fr": "?",
                    "en": "Psychose-Puerperal",
                    "condition": "false"
                },
                "rage": {
                    "line_number": "53",
                    "fr": "?",
                    "en": "Rage",
                    "condition": "false"
                },
                "measles_non_vaccinated_patient": {
                    "line_number": "54",
                    "fr": "Rougeole patient non vacciné",
                    "en": "Measles ( non vaccinated  patient)",
                    "condition": "false"
                },
                "measles_vaccinated_patient": {
                    "line_number": "55",
                    "fr": "Rougeole patient vacciné",
                    "en": "Measles ( vaccinated patient)",
                    "condition": "false"
                },
                "schistosomiasis": {
                    "line_number": "56",
                    "fr": "Schistosomiase",
                    "en": "Schistosomiasis",
                    "condition": "false"
                },
                "appendiculary_syndrome": {
                    "line_number": "57",
                    "fr": "?",
                    "en": "Appendiculary syndrome",
                    "condition": "false"
                },
                "post_trauma_stress_syndrome": {
                    "line_number": "58",
                    "fr": "?",
                    "en": "Post-trauma stress syndrome",
                    "condition": "false"
                },
                "gastric_syndrome": {
                    "line_number": "59",
                    "fr": "Gastrites",
                    "en": "Gastric syndrome",
                    "condition": "false"
                },
                "tetanus": {
                    "line_number": "60",
                    "fr": "Tétanos",
                    "en": "Tetanus",
                    "condition": "false"
                },
                "neonatal_tetanus": {
                    "line_number": "61",
                    "fr": "Tétanos néonatal",
                    "en": "Neonatal Tetanus",
                    "condition": "false"
                },
                "toxicomania_and_others": {
                    "line_number": "62",
                    "fr": "?",
                    "en": "Toxicomania and others",
                    "condition": "false"
                },
                "trauma": {
                    "line_number": "63",
                    "fr": "?",
                    "en": "Trauma",
                    "condition": "false"
                },
                "generalised_anxious_trouble": {
                    "line_number": "64",
                    "fr": "?",
                    "en": "Generalised anxious trouble",
                    "condition": "false"
                },
                "trypanosomiasis": {
                    "line_number": "65",
                    "fr": "Trypanosomiase",
                    "en": "Trypanosomiasis",
                    "condition": "false"
                },
                "tuberculosis": {
                    "line_number": "66",
                    "fr": "Tuberculose TPM+",
                    "en": "Tuberculosis",
                    "condition": "false"
                },
                "typhus": {
                    "line_number": "67",
                    "fr": "Typhus",
                    "en": "Typhus",
                    "condition": "false"
                },
                "buruli_ulcers": {
                    "line_number": "68",
                    "fr": "Ulcère de Buruli",
                    "en": "Buruli Ulcers",
                    "condition": "false"
                },
                "hiv_aids": {
                    "line_number": "69",
                    "fr": "VIH/SIDA",
                    "en": "HIV/AIDS",
                    "condition": "false"
                },
                "xerophtalmia": {
                    "line_number": "70",
                    "fr": "Xérophtalmie",
                    "en": "Xerophtalmia",
                    "condition": "false"
                },
                "others": {
                    "line_number": "71",
                    "fr": "Autres",
                    "en": "Others",
                    "condition": "false"
                }
            },
            "definitions": {
                "columns": {
                    "0_11_months_cases": {
                        "fr": "Cas",
                        "en": "Cases",
                        "title": "Cases",
                        "condition": "patient.current_age_month < 11"
                    },
                    "0_11_months_deaths": {
                        "fr": "DcD",
                        "en": "Deaths",
                        "title": "Deaths",
                        "condition": "patient.current_age_month < 11 && ( subforms.disease_diagnosis && subforms.disease_diagnosis.disease_mortality === 'yes')"
                    },
                    "12_59_months_cases": {
                        "fr": "Cas",
                        "en": "Cases",
                        "title": "Cases",
                        "condition": "patient.current_age_month >= 12 && patient.current_age_month < 59"
                    },
                    "12_59_months_deaths": {
                        "fr": "DcD",
                        "en": "Deaths",
                        "title": "Deaths",
                        "condition": "patient.current_age_month >= 12 && patient.current_age_month < 59 && ( subforms.disease_diagnosis && subforms.disease_diagnosis.disease_mortality === 'yes')"
                    },
                    "5_14_yrs_cases": {
                        "fr": "Cas",
                        "en": "Cases",
                        "title": "Cases",
                        "condition": "patient.current_age_month >= 60 && patient.current_age_years < 14"
                    },
                    "5_14_yrs_deaths": {
                        "fr": "DcD",
                        "en": "Deaths",
                        "title": "Deaths",
                        "condition": "patient.current_age_month >= 60 && patient.current_age_years < 14 && ( subforms.disease_diagnosis && subforms.disease_diagnosis.disease_mortality === 'yes')"
                    },
                    "15_yrs_plus_cases": {
                        "fr": "Cas",
                        "en": "Cases",
                        "title": "Cases",
                        "condition": "patient.current_age_years >=15"
                    },
                    "15_yrs_plus_deaths": {
                        "fr": "DcD",
                        "en": "Deaths",
                        "title": "Deaths",
                        "condition": "patient.current_age_years >=15 && ( subforms.disease_diagnosis && subforms.disease_diagnosis.disease_mortality === 'yes')"
                    },
                    "total_cases": {
                        "fr": "Cas",
                        "en": "Cases",
                        "title": "Cases",
                        "condition": "true"
                    },
                    "total_deaths": {
                        "fr": "DcD",
                        "en": "Deaths",
                        "title": "Deaths",
                        "condition": "( subforms.disease_diagnosis && subforms.disease_diagnosis.disease_mortality === 'yes')"
                    }
                }
            },
            "overrides": {
                "thead_prefix": "<tr><th></th><th></th><th></th><th colspan=\"2\">0-11 mois</th><th colspan=\"2\">12-59 mois</th><th colspan=\"2\">5-14 ans</th><th colspan=\"2\">15 ans +</th><th colspan=\"2\">Total</th></tr>"
            }
        },
        "report_epidemiological": {
            "title": "Weekly Notification Form - Epidemiological Diseases",
            "type": "object",
            "manual": "true",
            "properties": {
                "structure_of_care": {
                    "line_number": "1",
                    "line": "singlecell",
                    "fr": "Etablissement  de  soins",
                    "en": "Structure of care",
                    "condition": "true"
                },
                "health_area_population": {
                    "line_number": "2",
                    "line": "singlecell",
                    "fr": "Population  de l'aire  de  sante",
                    "en": "Health area population",
                    "condition": "true"
                },
                "week_no": {
                    "line_number": "3",
                    "line": "singlecell",
                    "fr": "SEMAINE N°",
                    "en": "Week N°",
                    "condition": "true"
                },
                "from": {
                    "line_number": "4",
                    "line": "singlecell",
                    "fr": "du",
                    "en": "From",
                    "condition": "true"
                },
                "to": {
                    "line_number": "5",
                    "line": "singlecell",
                    "fr": "au",
                    "en": "To",
                    "condition": "true"
                },
                "cholera": {
                    "line_number": "6",
                    "fr": "CHOLERA",
                    "en": "CHOLERA",
                    "condition": "true"
                },
                "disenterie_bascillaire": {
                    "line_number": "7",
                    "fr": "DISENTERIE BASCILLAIRE",
                    "en": "DISENTERIE BASCILLAIRE",
                    "condition": "true"
                },
                "viral_heamoragic_fever": {
                    "line_number": "8",
                    "fr": "FIEVRES  HEMORRAGIQUES  VIRALES",
                    "en": "VIRAL HEAMORAGIC FEVER",
                    "condition": "true"
                },
                "yellow_fever": {
                    "line_number": "9",
                    "fr": "FIEVRE JAUNE",
                    "en": "YELLOW FEVER",
                    "condition": "true"
                },
                "cerebro_spiral_miningititis": {
                    "line_number": "10",
                    "fr": "MENINGITE  CELEBRO-SPIRALE",
                    "en": "CEREBRO-SPIRAL MININGITITIS",
                    "condition": "true"
                },
                "monkey_pox": {
                    "line_number": "11",
                    "fr": "MONKEY POX",
                    "en": "MONKEY POX",
                    "condition": "true"
                },
                "malaria": {
                    "line_number": "12",
                    "fr": "PALUDISME",
                    "en": "MALARIA",
                    "condition": "true"
                },
                "pest": {
                    "line_number": "13",
                    "fr": "PESTE",
                    "en": "PEST",
                    "condition": "true"
                },
                "paralysie_flasque_aigue": {
                    "line_number": "14",
                    "fr": "PARALYSIE FLASQUE AIGUE",
                    "en": "PARALYSIE FLASQUE AIGUE",
                    "condition": "true"
                },
                "meascles": {
                    "line_number": "15",
                    "fr": "ROUGHOLE",
                    "en": "MEASCLES",
                    "condition": "true"
                },
                "typhus": {
                    "line_number": "16",
                    "fr": "TYPHUS",
                    "en": "TYPHUS",
                    "condition": "true"
                },
                "neonatal_tetanus": {
                    "line_number": "17",
                    "fr": "TETANOS  NEONATAL",
                    "en": "NEONATAL TETANUS",
                    "condition": "true"
                },
                "wooping_cogh": {
                    "line_number": "18",
                    "fr": "COOUELUCHE",
                    "en": "WOOPING COGH",
                    "condition": "true"
                },
                "typhoid_fever_for_each_case_precise_any_perforation_suspicion": {
                    "line_number": "19",
                    "fr": "FIEVRE TYPHOIDE  (pour  tout  cas  preciser si perforation  est susPectee)",
                    "en": "TYPHOID FEVER(for each case, precise any perforation suspicion)",
                    "condition": "true"
                },
                "grippe_saisoniere_season_flu": {
                    "line_number": "20",
                    "fr": "GRIPPE  SAISONNIERE",
                    "en": "Grippe saisoniere(season flu)",
                    "condition": "true"
                },
                "high_respiratory_infection": {
                    "line_number": "21",
                    "fr": "INFECTION  RESPIRATOIRE  AIGUT",
                    "en": "High Respiratory Infection",
                    "condition": "true"
                },
                "conjonctivities": {
                    "line_number": "22",
                    "fr": "CONJOCTIVITES",
                    "en": "Conjonctivities",
                    "condition": "true"
                },
                "blood_transfusion": {
                    "line_number": "23",
                    "fr": "TRANSFUSION  SANGUINE",
                    "en": "Blood transfusion",
                    "condition": "true"
                },
                "road_accident": {
                    "line_number": "24",
                    "fr": "ACCIDENT  DE TRAFIC  ROUTIER",
                    "en": "Road Accident",
                    "condition": "true"
                },
                "observation": {
                    "line_number": "25",
                    "line": "singlecell",
                    "fr": "Observation",
                    "en": "Observation",
                    "condition": "true"
                },
                "date": {
                    "line_number": "26",
                    "line": "singlecell",
                    "fr": "Date",
                    "en": "Date:",
                    "condition": "true"
                },
                "place": {
                    "line_number": "27",
                    "line": "singlecell",
                    "fr": "Fait a",
                    "en": "Place:",
                    "condition": "true"
                }
            },
            "definitions": {
                "columns": {
                    "diseases": {
                        "fr": "MALADIES",
                        "en": "DISEASES",
                        "title": "DISEASES",
                        "condition": "true"
                    },
                    "cases_less_years": {
                        "fr": "CAS <5 ans",
                        "en": "CASES <5 years",
                        "title": "CASES <5 years",
                        "condition": "true"
                    },
                    "cases_greater_years": {
                        "fr": "CAS >5 ans",
                        "en": "CASES >5years",
                        "title": "CASES >5years",
                        "condition": "true"
                    },
                    "cases_total": {
                        "fr": "CAS Total",
                        "en": "CASES Total",
                        "title": "CASES Total",
                        "condition": "true"
                    },
                    "deaths_less_years": {
                        "fr": "DECES <5 ans",
                        "en": "DEATHS <5years",
                        "title": "DEATHS <5years",
                        "condition": "true"
                    },
                    "deaths_greater_years": {
                        "fr": "DECES >5 ans",
                        "en": "DEATHS >5years",
                        "title": "DEATHS >5years",
                        "condition": "true"
                    },
                    "death_total": {
                        "fr": "DECES Total",
                        "en": "DEATHS Total",
                        "title": "DEATHS Total",
                        "condition": "true"
                    }
                }
            }
        },
        "report_family": {
            "title": "3.3  Partners and Family members of the PW",
            "fr": "3.2 Partenaires et membres de la famille de la femme enceinte",
            "type": "object",
            "manual": "true",
            "properties": {
                "0_14_yrs": {
                    "line_number": "1",
                    "fr": "0-14 ans",
                    "en": "0-14 yrs",
                    "condition": "true"
                },
                "15_19_yrs": {
                    "line_number": "2",
                    "fr": "15–19 ans",
                    "en": "15 - 19 yrs",
                    "condition": "true"
                },
                "20_24_yrs": {
                    "line_number": "3",
                    "fr": "20–24 ans",
                    "en": "20 - 24 yrs",
                    "condition": "true"
                },
                "25_plus": {
                    "line_number": "4",
                    "fr": "25 ans et plus",
                    "en": "25 +",
                    "condition": "true"
                },
                "general_total": {
                    "line_number": "5",
                    "fr": "Total général",
                    "en": "General total",
                    "condition": "true"
                }
            },
            "definitions": {
                "columns": {
                    "male_partners_of_the_pw_hiv_positive_counseled": {
                        "fr": "Conseillés",
                        "en": "Counseled",
                        "title": "Counseled",
                        "condition": "true"
                    },
                    "male_partners_of_the_pw_hiv_positive_tested": {
                        "fr": "Testés",
                        "en": "Tested",
                        "title": "Tested",
                        "condition": "true"
                    },
                    "male_partners_of_the_pw_hiv_positive_positif": {
                        "fr": "Positifs",
                        "en": "Positif",
                        "title": "Positif",
                        "condition": "true"
                    },
                    "male_partners_of_the_pw_hiv_positive_informed_about_their_results": {
                        "fr": "Informées de leur résultat",
                        "en": "Informed about their results",
                        "title": "Informed about their results",
                        "condition": "true"
                    },
                    "family_partners_of_the_pw_hiv_positive_counseled": {
                        "fr": "Conseillés",
                        "en": "Counseled",
                        "title": "Counseled",
                        "condition": "true"
                    },
                    "family_partners_of_the_pw_hiv_positive_tested": {
                        "fr": "Testés",
                        "en": "Tested",
                        "title": "Tested",
                        "condition": "true"
                    },
                    "family_partners_of_the_pw_hiv_positive_positif": {
                        "fr": "Positifs",
                        "en": "Positif",
                        "title": "Positif",
                        "condition": "true"
                    },
                    "family_partners_of_the_pw_hiv_positive_informed_about_their_results": {
                        "fr": "Informées de leur résultat",
                        "en": "Informed about their results",
                        "title": "Informed about their results",
                        "condition": "true"
                    }
                }
            }
        },
        "report_familyplanning_1": {
            "title": "3.7.1 The use of Family Planning services",
            "fr": "3.7.1 Utilisation des Services de Planification familiale (PF)",
            "type": "object",
            "manual": "true",
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
            "title": "3.7.2 The use of FP methods",
            "fr": "3.7.2 Utilisation des Methodes de Planification familiale (PF)",
            "type": "object",
            "manual": "true",
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
                    "line_number": "14",
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
        "report_isthiv_1": {
            "title": "2.3.1 STIs",
            "en": "2.3.1 STIs",
            "fr": "2.3.1 IST",
            "type": "object",
            "properties": {
                "new_stis_cases": {
                    "line_number": "1",
                    "fr": "Nouveaux cas IST",
                    "en": "New STIs cases",
                    "condition": "(subforms.anc_first_visit && subforms.anc_first_visit.std_status === 'yes') || ( subforms.disease_diagnosis && ((subforms.disease_diagnosis.diagnosis === 'sti_genital_discharge_syndrome') || (subforms.disease_diagnosis.diagnosis === 'sti_genital_ulcer_diseases') || (subforms.disease_diagnosis.diagnosis === 'sti_pelvic_inflammatory_diseases') || (subforms.disease_diagnosis.diagnosis === 'sexually_transmitted_infections_other'))) || ((subforms.sexual_violence_record && subforms.sexual_violence_record.hiv_status === 'positive') || (subforms.hiv_diagnosis && subforms.hiv_diagnosis.hiv_status === 'positive') || (subforms.reproductive_counseling && subforms.reproductive_counseling.hiv_positive_test === 'yes') || (subforms.hiv_counseling_mother && subforms.hiv_counseling_mother.hiv_status === 'positive') || (subforms.anc_first_visit && subforms.anc_first_visit.first_hiv_status === 'positive') || (subforms.anc_first_visit && subforms.anc_first_visit.second_hiv_test === 'yes') || (subforms.anc_followup && subforms.anc_followup.first_hiv_status === 'positive' && !subforms.anc_followup.second_hiv_test) || (subforms.anc_followup && subforms.anc_followup.second_hiv_test === 'yes'))"
                },
                "contact_among_new_stis_cases": {
                    "line_number": "2",
                    "fr": "Contacts parmi les Nouveaux Cas IST",
                    "en": "Contact among new STIs cases",
                    "condition": "false"
                },
                "cases_of_stis_councilled_and_hiv_tested": {
                    "line_number": "3",
                    "fr": "Cas IST conseillés et testés au VIH",
                    "en": "Cases of STIs councilled and HIV tested",
                    "condition": "(subforms.anc_first_visit && subforms.anc_first_visit.std_status === 'yes') || subforms.disease_diagnosis && ((subforms.disease_diagnosis.diagnosis === 'sti_genital_discharge_syndrome') || (subforms.disease_diagnosis.diagnosis === 'sti_genital_ulcer_diseases') || (subforms.disease_diagnosis.diagnosis === 'sti_pelvic_inflammatory_diseases') || (subforms.disease_diagnosis.diagnosis === 'sexually_transmitted_infections_other')) && ((subforms.reproductive_counseling && subforms.reproductive_counseling.hiv_tested === 'yes') || (subforms.hiv_counseling_mother && subforms.hiv_counseling_mother.hiv_test === 'yes') || (subforms.anc_first_visit && subforms.anc_first_visit.tested_hiv_firstvisit === 'yes') || (subforms.anc_first_visit && subforms.anc_first_visit.tested_hiv_firstvisit === 'yes') || (subforms.anc_followup && subforms.anc_followup.tested_hiv_firstvisit === 'yes'))"
                },
                "stis_cases_treated_under_syndromic_approach": {
                    "line_number": "4",
                    "fr": "Cas IST traités selon l’approche syndromique",
                    "en": "STIs cases treated under syndromic approach",
                    "condition": "false"
                }
            },
            "definitions": {
                "columns": {
                    "number": {
                        "fr": "Nombre",
                        "en": "Number",
                        "title": "Number",
                        "condition": "true"
                    }
                }
            },
            "parent": "report_isthiv",
            "overrides": {
                "predefined": [
                    {
                        "row": "contact_among_new_stis_cases",
                        "col": "number",
                        "value": ""
                    },
                    {
                        "row": "stis_cases_treated_under_syndromic_approach",
                        "col": "number",
                        "value": ""
                    },
                    {
                        "row": "number_of_new_cases_io",
                        "col": "total",
                        "value": ""
                    }
                ]
            }
        },
        "report_isthiv_2": {
            "title": "2.3.2 Voluntary Counseling and Testing VCT",
            "en": "2.3.2 Voluntary Counseling and Testing VCT",
            "fr": "2.3.2 Conseils et dépistage volontaire (CDV)",
            "type": "object",
            "properties": {
                "0_14_yrs": {
                    "line_number": "1",
                    "fr": "0 – 14 ans",
                    "en": "0-14 yrs",
                    "condition": "patient.current_age_years <= 14"
                },
                "15_19_yrs": {
                    "line_number": "2",
                    "fr": "15–19 ans",
                    "en": "15-19 yrs",
                    "condition": "(patient.current_age_years > 14 && patient.current_age_years <= 19)"
                },
                "20_24_yrs": {
                    "line_number": "3",
                    "fr": "20–24 ans",
                    "en": "20-24 yrs",
                    "condition": "(patient.current_age_years > 20 && patient.current_age_years <= 24)"
                },
                "25_yrs_and_above": {
                    "line_number": "4",
                    "fr": "25 ans et plus",
                    "en": "25 yrs and above",
                    "condition": "(patient.current_age_years > 25) || !(patient.current_age_years)"
                }
            },
            "definitions": {
                "columns": {
                    "masculine_tested": {
                        "fr": "Testés",
                        "en": "Tested",
                        "title": "Tested",
                        "condition": "(patient.gender === 'male' && ((subforms.reproductive_counseling && subforms.reproductive_counseling.hiv_tested === 'yes') || (subforms.sexual_violence_record && subforms.sexual_violence_record.hiv_tested === 'yes') || (subforms.hiv_diagnosis && subforms.hiv_diagnosis.hiv_tested === 'yes')))"
                    },
                    "masculine_positive": {
                        "fr": "Positifs",
                        "en": "Positive",
                        "title": "Positive",
                        "condition": "(patient.gender === 'male' && ((subforms.reproductive_counseling && subforms.reproductive_counseling.hiv_positive_test === 'yes') || (subforms.sexual_violence_record && subforms.sexual_violence_record.hiv_status === 'positive') || (subforms.hiv_diagnosis && subforms.hiv_diagnosis.hiv_status === 'positive')))"
                    },
                    "masculine_negative": {
                        "fr": "Négatifs",
                        "en": "Negative",
                        "title": "Negative",
                        "condition": "(patient.gender === 'male' && ((subforms.reproductive_counseling && subforms.reproductive_counseling.hiv_positive_test === 'no') || (subforms.sexual_violence_record && subforms.sexual_violence_record.hiv_status === 'negative') || (subforms.hiv_diagnosis && subforms.hiv_diagnosis.hiv_status === 'negative')))"
                    },
                    "feminine_tested": {
                        "fr": "Testés",
                        "en": "Tested",
                        "title": "Tested",
                        "condition": "(patient.gender === 'female' && ((subforms.reproductive_counseling && subforms.reproductive_counseling.hiv_tested === 'yes') || (subforms.sexual_violence_record && subforms.sexual_violence_record.hiv_tested === 'yes') || (subforms.hiv_diagnosis && subforms.hiv_diagnosis.hiv_tested === 'yes') || (subforms.hiv_counseling_mother && subforms.hiv_counseling_mother.hiv_test === 'yes') || (subforms.anc_first_visit && subforms.anc_first_visit.tested_hiv_firstvisit) || (subforms.anc_followup && subforms.anc_followup.tested_hiv_firstvisit)))"
                    },
                    "feminine_positive": {
                        "fr": "Positifs",
                        "en": "Positive",
                        "title": "Positive",
                        "condition": "(patient.gender === 'female' && ((subforms.reproductive_counseling && subforms.reproductive_counseling.hiv_positive_test === 'yes') || (subforms.sexual_violence_record && subforms.sexual_violence_record.hiv_status === 'positive') || (subforms.hiv_diagnosis && subforms.hiv_diagnosis.hiv_status === 'positive') || (subforms.hiv_counseling_mother && subforms.hiv_counseling_mother.hiv_status === 'positive') || (subforms.anc_first_visit && subforms.anc_first_visit.first_hiv_status === 'positive' && !subforms.anc_first_visit.second_hiv_test) || (subforms.anc_first_visit && subforms.anc_first_visit.second_hiv_test === 'yes') || (subforms.anc_followup && subforms.anc_followup.first_hiv_status === 'positive' && !subforms.anc_followup.second_hiv_test) || (subforms.anc_followup && subforms.anc_followup.second_hiv_test === 'yes')))"
                    },
                    "feminine_negative": {
                        "fr": "Négatifs",
                        "en": "Negative",
                        "title": "Negative",
                        "condition": "(patient.gender === 'female' && ((subforms.reproductive_counseling && subforms.reproductive_counseling.hiv_positive_test === 'no') || (subforms.sexual_violence_record && subforms.sexual_violence_record.hiv_status === 'negative') || (subforms.hiv_diagnosis && subforms.hiv_diagnosis.hiv_status === 'negative') || (subforms.hiv_counseling_mother && subforms.hiv_counseling_mother.hiv_status === 'negative') || (subforms.anc_first_visit && subforms.anc_first_visit.first_hiv_status === 'negative' && !subforms.anc_first_visit.second_hiv_test) || (subforms.anc_first_visit && subforms.anc_first_visit.second_hiv_test === 'no') || (subforms.anc_followup && subforms.anc_followup.first_hiv_status === 'negative' && !subforms.anc_followup.second_hiv_test) || (subforms.anc_followup && subforms.anc_followup.second_hiv_test === 'no')))"
                    },
                    "total_tested": {
                        "fr": "Testés",
                        "en": "Tested",
                        "title": "Tested",
                        "condition": "(subforms.sexual_violence_record && subforms.sexual_violence_record.hiv_tested === 'yes') || (subforms.hiv_diagnosis && subforms.hiv_diagnosis.hiv_tested === 'yes') || (subforms.reproductive_counseling && subforms.reproductive_counseling.hiv_tested === 'yes') || (subforms.hiv_counseling_mother && subforms.hiv_counseling_mother.hiv_test === 'yes') || (subforms.anc_first_visit && subforms.anc_first_visit.tested_hiv_firstvisit === 'yes') || (subforms.anc_first_visit && subforms.anc_first_visit.tested_hiv_firstvisit === 'yes') || (subforms.anc_followup && subforms.anc_followup.tested_hiv_firstvisit === 'yes')"
                    },
                    "total_positive": {
                        "fr": "Positifs",
                        "en": "Positive",
                        "title": "Positive",
                        "condition": "(subforms.sexual_violence_record && subforms.sexual_violence_record.hiv_status === 'positive') || (subforms.hiv_diagnosis && subforms.hiv_diagnosis.hiv_status === 'positive') || (subforms.reproductive_counseling && subforms.reproductive_counseling.hiv_positive_test === 'yes') || (subforms.hiv_counseling_mother && subforms.hiv_counseling_mother.hiv_status === 'positive') || (subforms.anc_first_visit && subforms.anc_first_visit.first_hiv_status === 'positive') || (subforms.anc_first_visit && subforms.anc_first_visit.second_hiv_test === 'yes') || (subforms.anc_followup && subforms.anc_followup.first_hiv_status === 'positive' && !subforms.anc_followup.second_hiv_test) || (subforms.anc_followup && subforms.anc_followup.second_hiv_test === 'yes')"
                    },
                    "total_negative": {
                        "fr": "Négatifs",
                        "en": "Negative",
                        "title": "Negative",
                        "condition": "(subforms.sexual_violence_record && subforms.sexual_violence_record.hiv_status === 'negative') || (subforms.hiv_diagnosis && subforms.hiv_diagnosis.hiv_status === 'negative') || (subforms.reproductive_counseling && subforms.reproductive_counseling.hiv_positive_test === 'no') || (subforms.hiv_counseling_mother && subforms.hiv_counseling_mother.hiv_status === 'negative') || (subforms.anc_first_visit && subforms.anc_first_visit.first_hiv_status === 'negative') || (subforms.anc_first_visit && subforms.anc_first_visit.second_hiv_test === 'no') || (subforms.anc_followup && subforms.anc_followup.first_hiv_status === 'negative') || (subforms.anc_followup && subforms.anc_followup.first_hiv_status === 'positive' && subforms.anc_followup.second_hiv_test === 'no')"
                    }
                }
            },
            "parent": "report_isthiv",
            "overrides": {
                "thead_prefix": "<tr><th></th><th></th><th></th><th colspan=\"3\">Masculin</th><th colspan=\"3\">Féminin</th><th colspan=\"3\">Total</th></tr>"
            }
        },
        "report_isthiv_3": {
            "title": "2.3.3 Care, Treatment and support",
            "en": "2.3.3 Care, Treatment and support",
            "fr": "2.3.3 Soins, traitement et soutien",
            "type": "object",
            "properties": {
                "number_of_new_cases_io": {
                    "line_number": "1",
                    "fr": "Nombre Nouveaux Cas IO",
                    "en": "Number of new cases IO",
                    "condition": "false"
                },
                "including_tbc_new_cases": {
                    "line_number": "2",
                    "fr": "Dont Nouveaux Cas TBC",
                    "en": "Including TBC new cases",
                    "condition": "false"
                },
                "number_of_plwhiv_under_profilaxis_ctx": {
                    "line_number": "3",
                    "fr": "Nombre de PVV sous prophylaxie CTX",
                    "en": "Number of PLWHIV under profilaxis CTX",
                    "condition": "false"
                },
                "number_of_plwhiv_tested_tb_under_profilaxis_ctx": {
                    "line_number": "4",
                    "fr": "Nombre de PVV VIH dépistée TB sous prophylaxie CTX",
                    "en": "Number of PLWHIV tested TB under profilaxis CTX",
                    "condition": "false"
                },
                "number_of_patients_who_beneficiated_with_pec_pss": {
                    "line_number": "5",
                    "fr": "Nombre de patients ayant bénéficié de la PEC PSS",
                    "en": "Number of patients who beneficiated with PEC PSS",
                    "condition": "false"
                },
                "number_of_malnurished_plwhiv_who_beneficiated_nutritional_pec": {
                    "line_number": "6",
                    "fr": "Nombre de PVV Malnutris ayant bénéficié de la PEC Nutritionnelle",
                    "en": "Number of malnurished PLWHIV who beneficiated nutritional PEC",
                    "condition": "false"
                },
                "number_of_plwhiv_who_are_under_home_based_care": {
                    "line_number": "7",
                    "fr": "Nombre de PVV bénéficiant du suivi dans le cadre des visites à domicile",
                    "en": "Number of PLWHIV who are under Home Based Care",
                    "condition": "false"
                },
                "number_of_plwhiv_who_beneficiated_the_follow_up_on_the_biological_cd4": {
                    "line_number": "8",
                    "fr": "Nombre des PVVIH ayant bénéficié du suivi biologique par le CD4",
                    "en": "Number of PLWHIV who beneficiated the follow up on the biological CD4",
                    "condition": "false"
                },
                "number_of_children_born_from_hiv_mothers_who_have_benefciated_the_dbs_pcr_dna": {
                    "line_number": "9",
                    "fr": "Nombre d’enfant nés de mères VIH+ ayant bénéficié du DBS/PCR DNA",
                    "en": "Number of children born from HIV+ mothers who have benefciated the DBS/PCR DNA",
                    "condition": "false"
                },
                "number_of_exposed_people_who_beneficated_the_pep_kit": {
                    "line_number": "10",
                    "fr": "Nbre des personnes exposées ayant bénéficié du Kit PEP",
                    "en": "Number of exposed people who beneficated the PEP kit",
                    "condition": "subforms.sexual_violence_record && subforms.sexual_violence_record.received_pep_kit === 'yes'"
                },
                "number_of_patients_under_arv_treatment": {
                    "line_number": "11",
                    "fr": "Nombre de patients sous TARV",
                    "en": "Number of patients under ARV treatment",
                    "condition": "subforms.hiv_counseling_mother && subforms.hiv_counseling_mother.arv_therapy==='yes'"
                },
                "number_of_plwhiv_who_disappeared": {
                    "line_number": "12",
                    "fr": "Nombre de PVV perdues de vue",
                    "en": "Number of PLWHIV who disappeared",
                    "condition": "false"
                },
                "number_of_plwhiv_on_a_queue": {
                    "line_number": "13",
                    "fr": "Nombre de PVV file d’attente",
                    "en": "Number of PLWHIV on a queue",
                    "condition": "false"
                }
            },
            "definitions": {
                "columns": {
                    "old_cases": {
                        "fr": "Anciens Cas",
                        "en": "Oldcases",
                        "title": "Oldcases",
                        "condition": "followup === 'yes'"
                    },
                    "new_cases": {
                        "fr": "Nouveaux Cas",
                        "en": "New cases",
                        "title": "New cases",
                        "condition": "followup === 'no'"
                    },
                    "total": {
                        "fr": "TOTAL",
                        "en": "TOTAL",
                        "title": "TOTAL",
                        "condition": "true"
                    }
                }
            },
            "parent": "report_isthiv",
            "overrides": {
                "predefined": [
                    {
                        "row": "number_of_new_cases_io",
                        "col": "old_cases",
                        "value": ""
                    },
                    {
                        "row": "number_of_new_cases_io",
                        "col": "new_cases",
                        "value": ""
                    },
                    {
                        "row": "number_of_new_cases_io",
                        "col": "total",
                        "value": ""
                    },
                    {
                        "row": "including_tbc_new_cases",
                        "col": "old_cases",
                        "value": ""
                    },
                    {
                        "row": "including_tbc_new_cases",
                        "col": "new_cases",
                        "value": ""
                    },
                    {
                        "row": "including_tbc_new_cases",
                        "col": "total",
                        "value": ""
                    },
                    {
                        "row": "number_of_plwhiv_under_profilaxis_ctx",
                        "col": "old_cases",
                        "value": ""
                    },
                    {
                        "row": "number_of_plwhiv_under_profilaxis_ctx",
                        "col": "new_cases",
                        "value": ""
                    },
                    {
                        "row": "number_of_plwhiv_under_profilaxis_ctx",
                        "col": "total",
                        "value": ""
                    },
                    {
                        "row": "number_of_plwhiv_tested_tb_under_profilaxis_ctx",
                        "col": "old_cases",
                        "value": ""
                    },
                    {
                        "row": "number_of_plwhiv_tested_tb_under_profilaxis_ctx",
                        "col": "new_cases",
                        "value": ""
                    },
                    {
                        "row": "number_of_plwhiv_tested_tb_under_profilaxis_ctx",
                        "col": "total",
                        "value": ""
                    },
                    {
                        "row": "number_of_patients_who_beneficiated_with_pec_pss",
                        "col": "new_cases",
                        "value": ""
                    },
                    {
                        "row": "number_of_patients_who_beneficiated_with_pec_pss",
                        "col": "total",
                        "value": ""
                    },
                    {
                        "row": "number_of_malnurished_plwhiv_who_beneficiated_nutritional_pec",
                        "col": "old_cases",
                        "value": ""
                    },
                    {
                        "row": "number_of_malnurished_plwhiv_who_beneficiated_nutritional_pec",
                        "col": "new_cases",
                        "value": ""
                    },
                    {
                        "row": "number_of_malnurished_plwhiv_who_beneficiated_nutritional_pec",
                        "col": "total",
                        "value": ""
                    },
                    {
                        "row": "number_of_plwhiv_who_are_under_home_based_care",
                        "col": "old_cases",
                        "value": ""
                    },
                    {
                        "row": "number_of_plwhiv_who_are_under_home_based_care",
                        "col": "new_cases",
                        "value": ""
                    },
                    {
                        "row": "number_of_plwhiv_who_are_under_home_based_care",
                        "col": "total",
                        "value": ""
                    },
                    {
                        "row": "number_of_plwhiv_who_beneficiated_the_follow_up_on_the_biological_cd4",
                        "col": "old_cases",
                        "value": ""
                    },
                    {
                        "row": "number_of_plwhiv_who_beneficiated_the_follow_up_on_the_biological_cd4",
                        "col": "new_cases",
                        "value": ""
                    },
                    {
                        "row": "number_of_plwhiv_who_beneficiated_the_follow_up_on_the_biological_cd4",
                        "col": "total",
                        "value": ""
                    },
                    {
                        "row": "number_of_children_born_from_hiv_mothers_who_have_benefciated_the_dbs_pcr_dna",
                        "col": "old_cases",
                        "value": ""
                    },
                    {
                        "row": "number_of_children_born_from_hiv_mothers_who_have_benefciated_the_dbs_pcr_dna",
                        "col": "new_cases",
                        "value": ""
                    },
                    {
                        "row": "number_of_children_born_from_hiv_mothers_who_have_benefciated_the_dbs_pcr_dna",
                        "col": "total",
                        "value": ""
                    },
                    {
                        "row": "number_of_plwhiv_who_disappeared",
                        "col": "old_cases",
                        "value": ""
                    },
                    {
                        "row": "number_of_plwhiv_who_disappeared",
                        "col": "new_cases",
                        "value": ""
                    },
                    {
                        "row": "number_of_plwhiv_who_disappeared",
                        "col": "total",
                        "value": ""
                    },
                    {
                        "row": "number_of_plwhiv_on_a_queue",
                        "col": "old_cases",
                        "value": ""
                    },
                    {
                        "row": "number_of_plwhiv_on_a_queue",
                        "col": "new_cases",
                        "value": ""
                    },
                    {
                        "row": "number_of_plwhiv_on_a_queue",
                        "col": "total",
                        "value": ""
                    }
                ],
                "disabled": [
                    {
                        "row": "number_of_patients_who_beneficiated_with_pec_pss",
                        "col": "old_cases",
                        "value": ""
                    }
                ]
            }
        },
        "report_isthiv_4": {
            "title": "2.3.4 Patient under ARV treatment",
            "en": "2.3.4 Patient under ARV treatment",
            "fr": "2.3.4 traitement antirétroviral",
            "type": "object",
            "properties": {
                "care_azt_3tc_nvp": {
                    "line_number": "1",
                    "fr": "Soins AZT+3TC+NVP",
                    "en": "Care AZT+3TC+NVP",
                    "condition": "(subforms.ctc_record && subforms.ctc_record.arv_treatment === 'azt_3tc_nvp')"
                },
                "care_azt_3tc_efv": {
                    "line_number": "2",
                    "fr": "Soins AZT+3TC+EFV",
                    "en": "Care AZT+3TC+EFV",
                    "condition": "(subforms.ctc_record && subforms.ctc_record.arv_treatment === 'azt_3tc_efv')"
                },
                "care_tbf_3tc_nvp": {
                    "line_number": "3",
                    "fr": "Soins TDF+3TC+NVP",
                    "en": "Care TBF+3TC+NVP",
                    "condition": "(subforms.ctc_record && subforms.ctc_record.arv_treatment === 'tbf_3tc_nvp')"
                },
                "care_tbf_3tc_efv": {
                    "line_number": "4",
                    "fr": "Soins TDF+3TC+EFV",
                    "en": "Care TBF+3TC+EFV",
                    "condition": "(subforms.ctc_record && subforms.ctc_record.arv_treatment === 'tbf_3tc_efv')"
                },
                "care_azt_3_tc_mvp_syrup_children": {
                    "line_number": "5",
                    "fr": "Soins AZT+3TC+MVP Sirop (pédiatrique)",
                    "en": "Care AZT+3TC+MVP syrup (children ward)",
                    "condition": "(subforms.ctc_record && subforms.ctc_record.arv_treatment === 'azt_3_tc_mvp_syrup_children')"
                },
                "care_abc_ddl_lpv_r": {
                    "line_number": "6",
                    "fr": "Soins ABC+ddI+LPV/r",
                    "en": "Care ABC+ddl+LPV/r",
                    "condition": "(subforms.ctc_record && subforms.ctc_record.arv_treatment === 'abc_ddl_lpv_r')"
                },
                "care_abc_3tc_efv": {
                    "line_number": "7",
                    "fr": "Soins ABC+3TC+EFV",
                    "en": "Care ABC+3TC+EFV",
                    "condition": "(subforms.ctc_record && subforms.ctc_record.arv_treatment === 'abc_3tc_efv')"
                }
            },
            "definitions": {
                "columns": {
                    "under_14_yrs_male": {
                        "fr": "Masculin",
                        "en": "Male",
                        "title": "Male",
                        "condition": "(patient.gender === 'male' && patient.current_age_years <= 14)"
                    },
                    "under_14_yrs_female": {
                        "fr": "Féminin",
                        "en": "Female",
                        "title": "Female",
                        "condition": "(patient.gender === 'female' && patient.current_age_years <= 14)"
                    },
                    "under_14_yrs_incl_pregn": {
                        "fr": "Dont Enceinte",
                        "en": "Incl. Pregn",
                        "title": "Incl. Pregn",
                        "condition": "(patient.gender === 'female' && patient.current_age_years <= 14 && ((subforms.hiv_counseling_mother || subforms.anc_first_visit || subforms.anc_followup || subforms.hiv_pregnancy_clinic) || (subforms.immunization && subforms.immunization.pregnant === 'yes') || (subforms.reproductive_counseling && subforms.reproductive_counseling.pregnant === 'yes')))"
                    },
                    "under_14_yrs_total": {
                        "fr": "Total",
                        "en": "Total",
                        "title": "Total",
                        "condition": "patient.current_age_years <= 14"
                    },
                    "14_yrs_and_above_male": {
                        "fr": "Masculin",
                        "en": "Male",
                        "title": "Male",
                        "condition": "(patient.gender === 'male' && patient.current_age_years > 14)"
                    },
                    "14_yrs_and_above_female": {
                        "fr": "Féminin",
                        "en": "Female",
                        "title": "Female",
                        "condition": "(patient.gender === 'female' && patient.current_age_years > 14)"
                    },
                    "14_yrs_and_above_incl_pregn": {
                        "fr": "Dont Enceinte",
                        "en": "Incl. Pregn",
                        "title": "Incl. Pregn",
                        "condition": "(patient.gender === 'female' && patient.current_age_years > 14 && ((subforms.hiv_counseling_mother || subforms.anc_first_visit || subforms.anc_followup || subforms.hiv_pregnancy_clinic) || (subforms.immunization && subforms.immunization.pregnant === 'yes') || (subforms.reproductive_counseling && subforms.reproductive_counseling.pregnant === 'yes')))"
                    },
                    "14_yrs_and_above_total": {
                        "fr": "Total",
                        "en": "Total",
                        "title": "Total",
                        "condition": "patient.current_age_years > 14"
                    },
                    "total": {
                        "fr": "Total",
                        "en": "Total",
                        "title": "Total",
                        "condition": "true"
                    }
                }
            },
            "parent": "report_isthiv",
            "overrides": {
                "thead_prefix": "<tr><th></th><th></th><th></th><th colspan=\"4\">&lt; 14 ans</th><th colspan=\"4\">&gt; 14 ans et plus</th><th></th></tr>"
            }
        },
        "report_isthiv_5": {
            "title": "2.3.5 Continuation of AVR treatment",
            "en": "2.3.5 Continuation of AVR treatment",
            "fr": "2.3.5. Rétention sous TARV",
            "type": "object",
            "properties": {
                "number_of_adults_infants_alive_under_arv_treatment_since": {
                    "line_number": "1",
                    "fr": "Nb adultes/enfants en vie et sous TARV depuis",
                    "en": "Number of adults/infants alive under ARV treatment since",
                    "condition": "true"
                }
            },
            "definitions": {
                "columns": {
                    "male_12_months": {
                        "fr": "12 mois",
                        "en": "12 months",
                        "title": "12 months",
                        "condition": "patient.gender === 'male' && (subforms.ctc_record && subforms.ctc_record.arv_treatment_duration === '12')"
                    },
                    "male_24_months": {
                        "fr": "24 mois",
                        "en": "24 months",
                        "title": "24 months",
                        "condition": "patient.gender === 'male' && (subforms.ctc_record && subforms.ctc_record.arv_treatment_duration === '24')"
                    },
                    "male_36_months": {
                        "fr": "36 mois",
                        "en": "36 months",
                        "title": "36 months",
                        "condition": "patient.gender === 'male' && (subforms.ctc_record && subforms.ctc_record.arv_treatment_duration === '36')"
                    },
                    "male_60_months": {
                        "fr": "60 mois",
                        "en": "60 months",
                        "title": "60 months",
                        "condition": "patient.gender === 'male' && (subforms.ctc_record && subforms.ctc_record.arv_treatment_duration === '60')"
                    },
                    "female_12_months": {
                        "fr": "12 mois",
                        "en": "12 months",
                        "title": "12 months",
                        "condition": "patient.gender === 'female' && (subforms.ctc_record && subforms.ctc_record.arv_treatment_duration === '12')"
                    },
                    "female_24_months": {
                        "fr": "24 mois",
                        "en": "24 months",
                        "title": "24 months",
                        "condition": "patient.gender === 'female' && (subforms.ctc_record && subforms.ctc_record.arv_treatment_duration === '24')"
                    },
                    "female_36_months": {
                        "fr": "36 mois",
                        "en": "36 months",
                        "title": "36 months",
                        "condition": "patient.gender === 'female' && (subforms.ctc_record && subforms.ctc_record.arv_treatment_duration === '36')"
                    },
                    "female_60_months": {
                        "fr": "60 mois",
                        "en": "60 months",
                        "title": "60 months",
                        "condition": "patient.gender === 'female' && (subforms.ctc_record && subforms.ctc_record.arv_treatment_duration === '60')"
                    }
                }
            },
            "parent": "report_isthiv",
            "overrides": {
                "thead_prefix": "<tr><th></th><th></th><th></th><th colspan=\"4\">Masculin</th><th colspan=\"4\">Feminin</th></tr>"
            }
        },
        "report_labcare_1": {
            "title": "2.5 Laboratory",
            "en": "2.5 Laboratory",
            "fr": "2.5 Laboratoire",
            "type": "object",
            "manual": "true",
            "properties": {
                "clistinix": {
                    "line_number": "1",
                    "fr": "Chimie urines",
                    "en": "Clinistix",
                    "condition": "false"
                },
                "clistinix_albu": {
                    "line_number": "1a",
                    "fr": "...Dosage albumine",
                    "en": "...Dosage albumine",
                    "condition": "false"
                },
                "clistinix_sugar": {
                    "line_number": "1b",
                    "fr": "...Sucre",
                    "en": "...Sugar",
                    "condition": "false"
                },
                "culot_urinaire": {
                    "line_number": "2",
                    "fr": "Culot urinaire",
                    "en": "Culot urinaire",
                    "condition": "false"
                },
                "culot_schisto": {
                    "line_number": "2a",
                    "fr": "...Schisto-haem",
                    "en": "...Schisto-haem",
                    "condition": "false"
                },
                "culot_tricho": {
                    "line_number": "2b",
                    "fr": "...Trichomonas",
                    "en": "...Trichomonas",
                    "condition": "false"
                },
                "culot_other": {
                    "line_number": "2c",
                    "fr": "...Autres",
                    "en": "...Others",
                    "condition": "false"
                },
                "smears": {
                    "line_number": "3",
                    "fr": "Gouttes épaisses",
                    "en": "Blood smears",
                    "condition": "false"
                },
                "smears_micro": {
                    "line_number": "3a",
                    "fr": "...Micro filaire",
                    "en": "...Micro filaria",
                    "condition": "false"
                },
                "smears_plasmo": {
                    "line_number": "3b",
                    "fr": "...Plasmodium",
                    "en": "...Plasmodium",
                    "condition": "false"
                },
                "smears_trypa": {
                    "line_number": "3c",
                    "fr": "...Trypanosomes",
                    "en": "...Trypanosomiasis",
                    "condition": "false"
                },
                "smears_other": {
                    "line_number": "3d",
                    "fr": "...Autres",
                    "en": "...Others",
                    "condition": "false"
                },
                "fresh_blood_smears": {
                    "line_number": "4",
                    "fr": "Goutte fraiche",
                    "en": "Fresh Blood smears",
                    "condition": "false"
                },
                "aspirate_from_nodules": {
                    "line_number": "5",
                    "fr": "Ponction ganglionnaires",
                    "en": "Aspirate from Nodules",
                    "condition": "false"
                },
                "aspirate_trypa": {
                    "line_number": "5a",
                    "fr": "...Trypanosomes",
                    "en": "...Trypanosomiasis",
                    "condition": "false"
                },
                "aspirate_other": {
                    "line_number": "5b",
                    "fr": "...Autres",
                    "en": "...Others",
                    "condition": "false"
                },
                "tested_couple_drepanocytosis": {
                    "line_number": "6",
                    "fr": "Couples dépistés: drépanocytose",
                    "en": "Tested couple: drepanocytosis",
                    "condition": "false"
                },
                "stool": {
                    "line_number": "7",
                    "fr": "Selles",
                    "en": "Stool",
                    "condition": "false"
                },
                "stool_amoebia": {
                    "line_number": "7a",
                    "fr": "...Amibe",
                    "en": "...Amoebia",
                    "condition": "false"
                },
                "stool_ankylostoma": {
                    "line_number": "7b",
                    "fr": "...Ankylostome",
                    "en": "...Ankylostoma",
                    "condition": "false"
                },
                "stool_schisto_mansoni": {
                    "line_number": "7c",
                    "fr": "...Schisto-mansoni",
                    "en": "...Schisto-mansoni",
                    "condition": "false"
                },
                "stool_trichomonas": {
                    "line_number": "7d",
                    "fr": "...Trichomonas",
                    "en": "...Trichomonas",
                    "condition": "false"
                },
                "stool_ascaris": {
                    "line_number": "7e",
                    "fr": "...Ascaris",
                    "en": "...Ascaris",
                    "condition": "false"
                },
                "stool_oxyures": {
                    "line_number": "7f",
                    "fr": "...Oxyures",
                    "en": "...Oxyures",
                    "condition": "false"
                },
                "stool_others": {
                    "line_number": "7g",
                    "fr": "...Autres",
                    "en": "...Others",
                    "condition": "false"
                },
                "hemoglobine": {
                    "line_number": "8",
                    "fr": "Hémoglobine",
                    "en": "Hemoglobine",
                    "condition": "false"
                },
                "hemoglobine_less_than_8": {
                    "line_number": "8a",
                    "fr": "...<8gr%",
                    "en": "...<8gr%",
                    "condition": "false"
                },
                "ziehl": {
                    "line_number": "9",
                    "fr": "Crachat Ziehl / BK Dépistage",
                    "en": "Sputum for AFB",
                    "condition": "false"
                },
                "ziehl_bk_test_c2_c3": {
                    "line_number": "9a",
                    "fr": "...Ziehl / BK Contrôle C2/C3",
                    "en": "...Ziehl/BK test C2/C3",
                    "condition": "false"
                },
                "ziehl_bk_control_c5": {
                    "line_number": "9b",
                    "fr": "...Ziehl / BK Contrôle C5",
                    "en": "...Ziehl/BK Control C5",
                    "condition": "false"
                },
                "ziehl_bk_control_c6_c7": {
                    "line_number": "9c",
                    "fr": "...Ziehl / BK Contrôle C6/C7",
                    "en": "...Ziehl/BK control C6/C7",
                    "condition": "false"
                },
                "hiv": {
                    "line_number": "10",
                    "fr": "VIH",
                    "en": "HIV",
                    "condition": "false"
                },
                "hiv_rapid_test": {
                    "line_number": "11",
                    "fr": "...Test rapide (Det., Unigld, Db chk)",
                    "en": "...Rapid test (Det, Unigld, Db chk)",
                    "condition": "false"
                },
                "hiv_slow_test": {
                    "line_number": "12",
                    "fr": "...Test lent (PCR,DNA,DBS)",
                    "en": "...Slow test (PCR,DNA,DBS)",
                    "condition": "false"
                },
                "hiv_other_test": {
                    "line_number": "13",
                    "fr": "...Autres test drépanocytose",
                    "en": "...Other tests drepanocytosis",
                    "condition": "false"
                }
            },
            "definitions": {
                "columns": {
                    "total": {
                        "fr": "Total",
                        "en": "Total",
                        "title": "Total",
                        "condition": "false"
                    },
                    "positive": {
                        "fr": "Positif",
                        "en": "Positive",
                        "title": "Positive",
                        "condition": "false"
                    }
                }
            },
            "parent": "report_labcare",
            "overrides": {
                "predefined": [
                    {
                        "row": "clistinix",
                        "col": "total",
                        "value": ""
                    },
                    {
                        "row": "clistinix_albu",
                        "col": "positive",
                        "value": ""
                    },
                    {
                        "row": "clistinix_sugar",
                        "col": "positive",
                        "value": ""
                    },
                    {
                        "row": "culot_urinaire",
                        "col": "total",
                        "value": ""
                    },
                    {
                        "row": "culot_schisto",
                        "col": "positive",
                        "value": ""
                    },
                    {
                        "row": "culot_tricho",
                        "col": "positive",
                        "value": ""
                    },
                    {
                        "row": "culot_other",
                        "col": "positive",
                        "value": ""
                    },
                    {
                        "row": "smears",
                        "col": "total",
                        "value": ""
                    },
                    {
                        "row": "smears_micro",
                        "col": "positive",
                        "value": ""
                    },
                    {
                        "row": "smears_plasmo",
                        "col": "positive",
                        "value": ""
                    },
                    {
                        "row": "smears_trypa",
                        "col": "positive",
                        "value": ""
                    },
                    {
                        "row": "smears_other",
                        "col": "positive",
                        "value": ""
                    },
                    {
                        "row": "fresh_blood_smears",
                        "col": "total",
                        "value": ""
                    },
                    {
                        "row": "fresh_blood_smears",
                        "col": "positive",
                        "value": ""
                    },
                    {
                        "row": "aspirate_from_nodules",
                        "col": "total",
                        "value": ""
                    },
                    {
                        "row": "aspirate_from_nodules",
                        "col": "positive",
                        "value": ""
                    },
                    {
                        "row": "aspirate_trypa",
                        "col": "total",
                        "value": ""
                    },
                    {
                        "row": "aspirate_trypa",
                        "col": "positive",
                        "value": ""
                    },
                    {
                        "row": "aspirate_other",
                        "col": "total",
                        "value": ""
                    },
                    {
                        "row": "aspirate_other",
                        "col": "positive",
                        "value": ""
                    },
                    {
                        "row": "tested_couple_drepanocytosis",
                        "col": "total",
                        "value": ""
                    },
                    {
                        "row": "tested_couple_drepanocytosis",
                        "col": "positive",
                        "value": ""
                    },
                    {
                        "row": "stool",
                        "col": "total",
                        "value": ""
                    },
                    {
                        "row": "stool",
                        "col": "positive",
                        "value": ""
                    },
                    {
                        "row": "stool_amoebia",
                        "col": "total",
                        "value": ""
                    },
                    {
                        "row": "stool_amoebia",
                        "col": "positive",
                        "value": ""
                    },
                    {
                        "row": "stool_ankylostoma",
                        "col": "total",
                        "value": ""
                    },
                    {
                        "row": "stool_ankylostoma",
                        "col": "positive",
                        "value": ""
                    },
                    {
                        "row": "stool_schisto_mansoni",
                        "col": "total",
                        "value": ""
                    },
                    {
                        "row": "stool_schisto_mansoni",
                        "col": "positive",
                        "value": ""
                    },
                    {
                        "row": "stool_trichomonas",
                        "col": "total",
                        "value": ""
                    },
                    {
                        "row": "stool_trichomonas",
                        "col": "positive",
                        "value": ""
                    },
                    {
                        "row": "stool_ascaris",
                        "col": "total",
                        "value": ""
                    },
                    {
                        "row": "stool_ascaris",
                        "col": "positive",
                        "value": ""
                    },
                    {
                        "row": "stool_oxyures",
                        "col": "total",
                        "value": ""
                    },
                    {
                        "row": "stool_oxyures",
                        "col": "positive",
                        "value": ""
                    },
                    {
                        "row": "stool_others",
                        "col": "total",
                        "value": ""
                    },
                    {
                        "row": "stool_others",
                        "col": "positive",
                        "value": ""
                    },
                    {
                        "row": "hemoglobine",
                        "col": "total",
                        "value": ""
                    },
                    {
                        "row": "hemoglobine",
                        "col": "positive",
                        "value": ""
                    },
                    {
                        "row": "hemoglobine_less_than_8",
                        "col": "total",
                        "value": ""
                    },
                    {
                        "row": "hemoglobine_less_than_8",
                        "col": "positive",
                        "value": ""
                    },
                    {
                        "row": "ziehl",
                        "col": "total",
                        "value": ""
                    },
                    {
                        "row": "ziehl",
                        "col": "positive",
                        "value": ""
                    },
                    {
                        "row": "ziehl_bk_test_c2_c3",
                        "col": "total",
                        "value": ""
                    },
                    {
                        "row": "ziehl_bk_test_c2_c3",
                        "col": "positive",
                        "value": ""
                    },
                    {
                        "row": "ziehl_bk_control_c5",
                        "col": "total",
                        "value": ""
                    },
                    {
                        "row": "ziehl_bk_control_c5",
                        "col": "positive",
                        "value": ""
                    },
                    {
                        "row": "ziehl_bk_control_c6_c7",
                        "col": "total",
                        "value": ""
                    },
                    {
                        "row": "ziehl_bk_control_c6_c7",
                        "col": "positive",
                        "value": ""
                    },
                    {
                        "row": "hiv",
                        "col": "total",
                        "value": ""
                    },
                    {
                        "row": "hiv",
                        "col": "positive",
                        "value": ""
                    },
                    {
                        "row": "hiv_rapid_test",
                        "col": "total",
                        "value": ""
                    },
                    {
                        "row": "hiv_rapid_test",
                        "col": "positive",
                        "value": ""
                    },
                    {
                        "row": "hiv_slow_test",
                        "col": "total",
                        "value": ""
                    },
                    {
                        "row": "hiv_slow_test",
                        "col": "positive",
                        "value": ""
                    },
                    {
                        "row": "hiv_other_test",
                        "col": "total",
                        "value": ""
                    },
                    {
                        "row": "hiv_other_test",
                        "col": "positive",
                        "value": ""
                    }
                ],
                "disabled": [
                    {
                        "row": "clistinix",
                        "col": "positive"
                    },
                    {
                        "row": "clistinix_albu",
                        "col": "total"
                    },
                    {
                        "row": "clistinix_sugar",
                        "col": "total"
                    },
                    {
                        "row": "culot_urinaire",
                        "col": "positive"
                    },
                    {
                        "row": "culot_schisto",
                        "col": "total"
                    },
                    {
                        "row": "culot_tricho",
                        "col": "total"
                    },
                    {
                        "row": "culot_other",
                        "col": "total"
                    },
                    {
                        "row": "smears",
                        "col": "positive"
                    },
                    {
                        "row": "smears_micro",
                        "col": "total"
                    },
                    {
                        "row": "smears_plasmo",
                        "col": "total"
                    },
                    {
                        "row": "smears_trypa",
                        "col": "total"
                    },
                    {
                        "row": "smears_other",
                        "col": "total"
                    }
                ]
            }
        },
        "report_labcare_2": {
            "title": "2.6. Care",
            "type": "object",
            "manual": "true",
            "properties": {
                "persons_who_received_counseling_and_treatment_in_order_to_prevent_heart_crisis_or_the_avc": {
                    "line_number": "1",
                    "fr": "Personnes ayant reçu le conseil et le traitement afin de prévenir les crises cardiaques ou les AVC",
                    "en": "Persons who received counseling and treatment in order to prevent heart crisis or the AVC",
                    "condition": "false"
                },
                "hbp_found_and_put_on_treatment": {
                    "line_number": "2",
                    "fr": "Cas d'hypertension diagnostiqués et mis sous traitement",
                    "en": "HBP found and put on treatment",
                    "condition": "false"
                },
                "under_5_children_with_pneumonia_who_received_appropriate_anti_biotic": {
                    "line_number": "3",
                    "fr": "Enfants de moins de 5 ans présentant la pneumonie et ayant reçu un antibiotique approprié",
                    "en": "Under 5 children with pneumonia who received appropriate anti-biotic",
                    "condition": "false"
                },
                "sick_children_who_were_correctly_treated_against_diarrhea_with_ors_and_sulfate_of_zinc": {
                    "line_number": "4",
                    "fr": "Enfants malades qui ont été correctement soignés contre la diarrhée avec SRO et sulfate de zinc",
                    "en": "Sick children who were correctly treated against diarrhea with ORS and sulfate of zinc",
                    "condition": "false"
                },
                "new_diabetitis_put_under_treatment": {
                    "line_number": "5",
                    "fr": "Nouveaux patients diabétiques mis sous traitement",
                    "en": "New diabetitis put under treatment.",
                    "condition": "false"
                }
            },
            "definitions": {
                "columns": {
                    "number": {
                        "fr": "Nombre",
                        "en": "Number",
                        "title": "Number",
                        "condition": "false"
                    }
                }
            },
            "parent": "report_labcare",
            "overrides": {
                "predefined": [
                    {
                        "row": "persons_who_received_counseling_and_treatment_in_order_to_prevent_heart_crisis_or_the_avc",
                        "col": "number",
                        "value": ""
                    },
                    {
                        "row": "hbp_found_and_put_on_treatment",
                        "col": "number",
                        "value": ""
                    },
                    {
                        "row": "under_5_children_with_pneumonia_who_received_appropriate_anti_biotic",
                        "col": "number",
                        "value": ""
                    },
                    {
                        "row": "sick_children_who_were_correctly_treated_against_diarrhea_with_ors_and_sulfate_of_zinc",
                        "col": "number",
                        "value": ""
                    },
                    {
                        "row": "new_diabetitis_put_under_treatment",
                        "col": "number",
                        "value": ""
                    }
                ]
            }
        },
        "report_malaria": {
            "title": "Monthly Canvas - 2.7. Malaria",
            "type": "object",
            "manual": "true",
            "properties": {
                "suspect_cases": {
                    "line_number": "1",
                    "fr": "Cas suspect",
                    "en": "Suspect cases",
                    "condition": "false"
                },
                "tdr_realised": {
                    "line_number": "2",
                    "fr": "TDR réalisés",
                    "en": "TDR realised",
                    "condition": "false"
                },
                "including_positif": {
                    "line_number": "2a",
                    "fr": "...Dont positif",
                    "en": "...Including positive",
                    "condition": "false"
                },
                "blood_smears_realised": {
                    "line_number": "3",
                    "fr": "Goutte épaisse réalisée",
                    "en": "Blood smears realised",
                    "condition": "false"
                },
                "blood_smears_including": {
                    "line_number": "3a",
                    "fr": "...Dont positif",
                    "en": "...Including positive",
                    "condition": "false"
                },
                "including_frottis_mince_realised": {
                    "line_number": "4",
                    "fr": "Frottis mince réalisés",
                    "en": "Including frottis mince realised",
                    "condition": "false"
                },
                "confirmed_simple_malaria": {
                    "line_number": "5",
                    "fr": "Paludisme simple confirmé",
                    "en": "Confirmed simple malaria",
                    "condition": "false"
                },
                "including_treated": {
                    "line_number": "5a",
                    "fr": "...Dont traité",
                    "en": "...Including treated",
                    "condition": "false"
                },
                "confirmed_severe_malaria": {
                    "line_number": "6",
                    "fr": "Paludisme grave confirmé",
                    "en": "Confirmed severe malaria",
                    "condition": "false"
                },
                "confirmed_severe_including_refered": {
                    "line_number": "6a",
                    "fr": "...Dont référé",
                    "en": "...Including refered",
                    "condition": "false"
                },
                "confirmed_severe_including_deads": {
                    "line_number": "6b",
                    "fr": "...Dont décédé",
                    "en": "...Including deads",
                    "condition": "false"
                },
                "unconfirmed_simple_malaria": {
                    "line_number": "7",
                    "fr": "Paludisme simple non confirmé",
                    "en": "Unconfirmed simple malaria",
                    "condition": "false"
                },
                "unconfirmed_simple_dead": {
                    "line_number": "7a",
                    "fr": "...Dont traité",
                    "en": "...Including deads",
                    "condition": "false"
                },
                "unconfirmed_severe_malaria": {
                    "line_number": "8",
                    "fr": "Paludisme grave non confirmé",
                    "en": "Unconfirmed severe malaria",
                    "condition": "false"
                },
                "unconfirmed_severe_including_refered": {
                    "line_number": "8a",
                    "fr": "...Dont référé",
                    "en": "...Including refered",
                    "condition": "false"
                },
                "unconfirmed_severe_including_deads": {
                    "line_number": "8b",
                    "fr": "...Dont décédé",
                    "en": "...Including deads",
                    "condition": "false"
                }
            },
            "definitions": {
                "columns": {
                    "0_11months": {
                        "fr": "0-11 mois",
                        "en": "0-11 months",
                        "title": "0-11 months",
                        "condition": "patient.current_age_month < 11"
                    },
                    "12_59months": {
                        "fr": "12-59 mois",
                        "en": "12-59 months",
                        "title": "12-59 months",
                        "condition": "patient.current_age_month >= 12 && patient.current_age_month < 59"
                    },
                    "5_14yrs": {
                        "fr": "5-14 ans",
                        "en": "5-14yrs",
                        "title": "5-14yrs",
                        "condition": "patient.current_age_month >= 60 && patient.current_age_years < 14"
                    },
                    "15yrs": {
                        "fr": "15 ans +",
                        "en": "15yrs +",
                        "title": "15yrs",
                        "condition": "patient.current_age_years >=15"
                    },
                    "total": {
                        "fr": "Total",
                        "en": "Total",
                        "title": "Total",
                        "condition": "true"
                    },
                    "pw": {
                        "fr": "Dont femme enceinte",
                        "en": "Incl. P.W",
                        "title": "Incl. P.W",
                        "condition": "((subforms.hiv_counseling_mother || subforms.anc_first_visit || subforms.anc_followup || subforms.hiv_pregnancy_clinic) || (subforms.immunization && subforms.immunization.pregnant === 'yes') || (subforms.reproductive_counseling && subforms.reproductive_counseling.pregnant === 'yes')))"
                    }
                }
            }
        },
        "report_malariacomplement": {
            "title": "Form 1 : Monthly Report complementing the SNIS",
            "fr": "Formulaire 1 : Rapport mensuel complémentaire au SNIS",
            "type": "object",
            "manual": "true",
            "properties": {
                "0_5years": {
                    "line_number": "1",
                    "fr": "Total NC toutes causes confondues en consultation exteme 0-5ans",
                    "en": "?",
                    "condition": "true"
                },
                "less_5years": {
                    "line_number": "2",
                    "fr": "Total NC toutes causes confondues en consultation exteme >5ans",
                    "en": "?",
                    "condition": "true"
                },
                "pregnant_w": {
                    "line_number": "3",
                    "fr": "Total NC toutes causes confondues en consultation exteme Femmes enceintes",
                    "en": "?",
                    "condition": "true"
                },
                "all_new_simple_malaria_cases_in_opd_0_5years": {
                    "line_number": "4",
                    "fr": "Total nouveaux  cas  consultation  exteme  pour paludisme  simple 0-5ans",
                    "en": "All new simple malaria cases in OPD 0_5years",
                    "condition": "true"
                },
                "all_new_simple_malaria_cases_in_opd_greater_5years": {
                    "line_number": "5",
                    "fr": "Total nouveaux  cas  consultation  exteme  pour paludisme  simple >5ans",
                    "en": "All new simple malaria cases in OPD >5years",
                    "condition": "true"
                },
                "all_new_simple_malaria_cases_in_opd_pregnant_w": {
                    "line_number": "6",
                    "fr": "Total nouveaux  cas  consultation  exteme  pour paludisme  simple Femmes enceintes",
                    "en": "All new simple malaria cases in OPD Pregnant W",
                    "condition": "true"
                },
                "all_pw_who_attended_antenatal_care_for_the_first_time": {
                    "line_number": "7",
                    "fr": "Femmes  enceintes regues  en CPN  (lire  consultation)",
                    "en": "All PW who attended antenatal care for the first time",
                    "condition": "true"
                },
                "all_pw_who_received_sp1": {
                    "line_number": "8",
                    "fr": "Femmes  enceintes ayant  regu  la  SP  1",
                    "en": "All PW who received SP1",
                    "condition": "true"
                },
                "all_pw_who_received_sp2": {
                    "line_number": "9",
                    "fr": "Femmes  enceintes  ayant  regu  la  SP  2",
                    "en": "All PW who received SP2",
                    "condition": "true"
                },
                "mild_received": {
                    "line_number": "10",
                    "fr": "MILD  regues",
                    "en": "MILD received",
                    "condition": "true"
                },
                "mild_distributed_during_antenatal_care": {
                    "line_number": "11",
                    "fr": "MILD distribu6es d travers la CPN",
                    "en": "MILD distributed during Antenatal care",
                    "condition": "true"
                },
                "mild_distributed_during_cps": {
                    "line_number": "12",
                    "fr": "MILD  distribu6es  d travers  CPS",
                    "en": "MILD distributed during CPS",
                    "condition": "true"
                },
                "asaq_received_2_11_months": {
                    "line_number": "13",
                    "fr": "ASAQ reçu 2-11mois",
                    "en": "ASAQ Received 2- 11 Months",
                    "condition": "true"
                },
                "asaq_received_1_5_years": {
                    "line_number": "14",
                    "fr": "ASAQ reçu 1-5ans",
                    "en": "ASAQ Received 1-5 Years",
                    "condition": "true"
                },
                "asaq_received_6_13_years": {
                    "line_number": "15",
                    "fr": "ASAQ reçu 6-13ans",
                    "en": "ASAQ Received 6- 13 Years",
                    "condition": "true"
                },
                "asaq_received_14_years_plus": {
                    "line_number": "16",
                    "fr": "ASAQ reçu 14 ans et plus",
                    "en": "ASAQ Received 14 Years +",
                    "condition": "true"
                },
                "asaq_administrated_2_11_months": {
                    "line_number": "17",
                    "fr": "ASAQ administré 2-11mois",
                    "en": "ASAQ administrated 2- 11 Months",
                    "condition": "true"
                },
                "asaq_administrated_1_5_years": {
                    "line_number": "18",
                    "fr": "ASAQ administré 1-5ans",
                    "en": "ASAQ administrated 1-5 Years",
                    "condition": "true"
                },
                "asaq_administrated_6_13_years": {
                    "line_number": "19",
                    "fr": "ASAQ administré 6-13ans",
                    "en": "ASAQ administrated 6- 13 Years",
                    "condition": "true"
                },
                "asaq_administrated_14_years_plus": {
                    "line_number": "20",
                    "fr": "ASAQ administré 14 ans et plus",
                    "en": "ASAQ administrated 14 Years +",
                    "condition": "true"
                },
                "gouttes_épaisses_realized": {
                    "line_number": "21",
                    "fr": "Gouttes épaisses Realisees",
                    "en": "Gouttesépaisses Realized",
                    "condition": "true"
                },
                "gouttes_épaisses_positive": {
                    "line_number": "22",
                    "fr": "Gouttes épaisses Positives",
                    "en": "Gouttesépaisses Positive",
                    "condition": "true"
                },
                "tdr_received": {
                    "line_number": "23",
                    "fr": "TDR reçus",
                    "en": "TDR Received",
                    "condition": "true"
                },
                "tdr_realized": {
                    "line_number": "24",
                    "fr": "TDR Realises",
                    "en": "TDR Realized",
                    "condition": "true"
                },
                "tdr_positive": {
                    "line_number": "25",
                    "fr": "TDR Positifis",
                    "en": "TDR Positive",
                    "condition": "true"
                },
                "number_of_health_centers_with_no_stock_for_more_than_3_days_sp": {
                    "line_number": "26",
                    "fr": "Nombre de centres de santé avec aucun stock de plus de 3 jours SP",
                    "en": "Number of Health centers with no stock for more than 3 days SP",
                    "condition": "true"
                },
                "number_of_health_centers_with_no_stock_for_more_than_3_days_asaq_2_11_months": {
                    "line_number": "27",
                    "fr": "Nombre de centres de santé avec aucun stock de plus de 3 jours ASAO 2  - 11 mois",
                    "en": "Number of Health centers with no stock for more than 3 days ASAQ 2-11 Months",
                    "condition": "true"
                },
                "number_of_health_centers_with_no_stock_for_more_than_3_days_asaq_1_5_years": {
                    "line_number": "28",
                    "fr": "Nombre de centres de santé avec aucun stock de plus de 3 jours ASAO 1-5  ans",
                    "en": "Number of Health centers with no stock for more than 3 days ASAO 1-5  Years",
                    "condition": "true"
                },
                "number_of_health_centers_with_no_stock_for_more_than_3_days_asaq_6_13_years": {
                    "line_number": "29",
                    "fr": "Nombre de centres de santé avec aucun stock de plus de 3 jours ASAO 5-13  ans",
                    "en": "Number of Health centers with no stock for more than 3 days ASAQ 6- 13 Years",
                    "condition": "true"
                },
                "number_of_health_centers_with_no_stock_for_more_than_3_days_asaq_14_years_plus": {
                    "line_number": "30",
                    "fr": "Nombre de centres de santé avec aucun stock de plus de 3 jours ASAQ l4ans  et +",
                    "en": "Number of Health centers with no stock for more than 3 days ASAQ 14 Years +",
                    "condition": "true"
                },
                "number_of_health_centers_with_no_stock_for_more_than_3_days_quinine_tablets": {
                    "line_number": "31",
                    "fr": "Nombre de centres de santé avec aucun stock de plus de 3 jours Quinine  comprime",
                    "en": "Number of Health centers with no stock for more than 3 days Quinine tablets",
                    "condition": "true"
                },
                "number_of_health_centers_with_no_stock_for_more_than_3_days_quinine_injectable": {
                    "line_number": "32",
                    "fr": "Nombre de centres de santé avec aucun stock de plus de 3 jours Quinine lnjectable",
                    "en": "Number of Health centers with no stock for more than 3 days Quinine injectable",
                    "condition": "true"
                },
                "number_of_health_centers_with_no_stock_for_more_than_3_days_mild": {
                    "line_number": "33",
                    "fr": "Nombre de centres de santé avec aucun stock de plus de 3 jours MILD",
                    "en": "Number of Health centers with no stock for more than 3 days MILD",
                    "condition": "true"
                },
                "sensitization_activities_on_the_enhancement_of_the_fight_against_malaria": {
                    "line_number": "34",
                    "fr": "Seances  de sensibilisation sur  la  promotion de  la  lutte  antipaludique",
                    "en": "Sensitization activities on the enhancement of the fight against Malaria",
                    "condition": "true"
                },
                "month": {
                    "line_number": "35",
                    "line": "singlecell",
                    "fr": "Mois",
                    "en": "Month",
                    "condition": "true"
                },
                "province": {
                    "line_number": "36",
                    "line": "singlecell",
                    "fr": "Province",
                    "en": "Province",
                    "condition": "true"
                },
                "health_zone": {
                    "line_number": "37",
                    "line": "singlecell",
                    "fr": "Zone  de  Sante",
                    "en": "Health zone",
                    "condition": "true"
                },
                "total_pop_in_h_area": {
                    "line_number": "38",
                    "line": "singlecell",
                    "fr": "Population totale  de I'AS",
                    "en": "Total pop in H.Area",
                    "condition": "true"
                },
                "term": {
                    "line_number": "39",
                    "line": "singlecell",
                    "fr": "Trimastre",
                    "en": "Term",
                    "condition": "true"
                },
                "district_health": {
                    "line_number": "40",
                    "line": "singlecell",
                    "fr": "District sanitaire",
                    "en": "District Health",
                    "condition": "true"
                },
                "health_area": {
                    "line_number": "41",
                    "line": "singlecell",
                    "fr": "Aire  de Sante",
                    "en": "Health Area",
                    "condition": "true"
                },
                "children_less_5": {
                    "line_number": "42",
                    "line": "singlecell",
                    "fr": "Enfants  de  moins  de  5 ans",
                    "en": "Children <5",
                    "condition": "true"
                },
                "year": {
                    "line_number": "43",
                    "line": "singlecell",
                    "fr": "annee",
                    "en": "Year",
                    "condition": "true"
                },
                "territory_commune": {
                    "line_number": "44",
                    "line": "singlecell",
                    "fr": "territoire/commune",
                    "en": "Territory/ commune",
                    "condition": "true"
                },
                "health_center": {
                    "line_number": "45",
                    "line": "singlecell",
                    "fr": "Sentre de sante",
                    "en": "Health center",
                    "condition": "true"
                },
                "pregnant_women": {
                    "line_number": "46",
                    "line": "singlecell",
                    "fr": "Femmes enceintes",
                    "en": "Pregnant women",
                    "condition": "true"
                }
            },
            "definitions": {
                "columns": {
                    "data": {
                        "fr": "DONNEES",
                        "en": "Data",
                        "title": "Data",
                        "condition": "true"
                    },
                    "number": {
                        "fr": "Nombre",
                        "en": "Number",
                        "title": "Number",
                        "condition": "true"
                    }
                }
            }
        },
        "report_monitoringvaccination_1": {
            "title": "MONITORING OF PREVENTABLE DESEASES THROUGH VACCINATION",
            "type": "object",
            "manual": "true",
            "properties": {
                "pfa": {
                    "line_number": "1",
                    "fr": "PFA",
                    "en": "PFA",
                    "condition": "true"
                },
                "measles": {
                    "line_number": "2",
                    "fr": "Rougheole",
                    "en": "Measles",
                    "condition": "true"
                },
                "tnn": {
                    "line_number": "3",
                    "fr": "TNN***",
                    "en": "TNN**",
                    "condition": "true"
                },
                "diphteria": {
                    "line_number": "4",
                    "fr": "Diphteria",
                    "en": "Diphteria",
                    "condition": "true"
                },
                "wooping_cough": {
                    "line_number": "5",
                    "fr": "Coqueluch",
                    "en": "Wooping cough",
                    "condition": "true"
                },
                "fever": {
                    "line_number": "6",
                    "fr": "fièvre",
                    "en": "Fever",
                    "condition": "true"
                },
                "miningetitis": {
                    "line_number": "7",
                    "fr": "Miningetitis",
                    "en": "Miningetitis",
                    "condition": "true"
                },
                "pneumonia": {
                    "line_number": "8",
                    "fr": "Pneumoni",
                    "en": "Pneumonia",
                    "condition": "true"
                },
                "hepatitis": {
                    "line_number": "9",
                    "fr": "Hépatites*",
                    "en": "Hepatitis*",
                    "condition": "true"
                },
                "name_of_the_main_nurse": {
                    "line_number": "10",
                    "line": "singlecell",
                    "fr": "Nom de infirmière Titulaire",
                    "en": "Name of the Main Nurse",
                    "condition": "true"
                },
                "signature": {
                    "line_number": "11",
                    "line": "singlecell",
                    "fr": "Signature",
                    "en": "Signature",
                    "condition": "true"
                },
                "submiting_date_to_bcz": {
                    "line_number": "12",
                    "line": "singlecell",
                    "fr": "Date de transmission au BCZS",
                    "en": "Submiting date to BCZ",
                    "condition": "true"
                }
            },
            "definitions": {
                "columns": {
                    "desease": {
                        "fr": "Maladie",
                        "en": "Desease",
                        "title": "Desease",
                        "condition": "true"
                    },
                    "0_11_months_case": {
                        "fr": "0-11 mois Cas",
                        "en": "0-11 months Case",
                        "title": "0-11 months Case",
                        "condition": "true"
                    },
                    "0_11_months_deaths": {
                        "fr": "0-11 mois Décès",
                        "en": "0-11 months Deaths",
                        "title": "0-11 months Deaths",
                        "condition": "true"
                    },
                    "12_59_months_case": {
                        "fr": "12-59 mois Cas",
                        "en": "12- 59 months Case",
                        "title": "12-59 months Case",
                        "condition": "true"
                    },
                    "12_59_months_deaths": {
                        "fr": "12-59 mois Décès",
                        "en": "12- 59 months Deaths",
                        "title": "12-59 months Deaths",
                        "condition": "true"
                    },
                    "5_15_years_case": {
                        "fr": "5-15 ans Cas",
                        "en": "5- 15 years Case",
                        "title": "5-15 years Case",
                        "condition": "true"
                    },
                    "5_15_years_deaths": {
                        "fr": "5-15 ans Décès",
                        "en": "5- 15 years Deaths",
                        "title": "5-15 years Deaths",
                        "condition": "true"
                    },
                    "greter_15_years_case": {
                        "fr": ">15 ans Cas",
                        "en": ">15 years Case",
                        "title": ">15 years Case",
                        "condition": "true"
                    },
                    "greter_15_years_deaths": {
                        "fr": ">15 ans Décès",
                        "en": ">15 years Deaths",
                        "title": ">15 years Deaths",
                        "condition": "true"
                    },
                    "total_case": {
                        "fr": "Total Cas",
                        "en": "Total Case",
                        "title": "Total Case",
                        "condition": "true"
                    },
                    "total_deaths": {
                        "fr": "Total Décès",
                        "en": "Total Deaths",
                        "title": "Total Deaths",
                        "condition": "true"
                    },
                    "nb_ch_wo_vacc": {
                        "fr": "Statut Vaccinal Enf. 0 -11 mois Nbre/Enf/Fe/vacc",
                        "en": "Vaccinal status Childr. 0 -11months Nb/ch/wo/vacc",
                        "title": "Vaccinal status Childr. 0 -11months Nb/ch/wo/vacc",
                        "condition": "true"
                    },
                    "nb_ch_wo_non_vacc": {
                        "fr": "Statut Vaccinal Enf. 0 -11 mois Nbre/Enf/Fe/Non vacc",
                        "en": "Vaccinal status Childr. 0 -11months Nb/Ch/Wo/non vacc",
                        "title": "Vaccinal status Childr. 0 -11months Nb/Ch/Wo/non vacc",
                        "condition": "true"
                    },
                    "nb_ch_wo_unknown_status": {
                        "fr": "Statut Vaccinal Enf. 0 -11 mois Nbre/Enf/Fe/Statut Inconnu",
                        "en": "Vaccinal status Childr. 0 -11months Nb/Ch/Wo/unknown status",
                        "title": "Vaccinal status Childr. 0 -11months Nb/Ch/Wo/unknown status",
                        "condition": "true"
                    }
                }
            },
            "parent": "report_monitoringvaccination"
        },
        "report_monitoringvaccination_2": {
            "title": "MONITORING OF PREVENTABLE DESEASES THROUGH VACCINATION(table1)",
            "type": "object",
            "manual": "true",
            "properties": {
                "bcg": {
                    "line_number": "1",
                    "fr": "BCG",
                    "en": "BCG",
                    "condition": "true"
                },
                "vpo": {
                    "line_number": "2",
                    "fr": "VPO",
                    "en": "VPO",
                    "condition": "true"
                },
                "dtc_hep_hib": {
                    "line_number": "3",
                    "fr": "DTC-Hep-Hib",
                    "en": "DTC-Hep-Hib",
                    "condition": "true"
                },
                "pheumo": {
                    "line_number": "4",
                    "fr": "Pneumo",
                    "en": "Pneumo",
                    "condition": "true"
                },
                "var": {
                    "line_number": "5",
                    "fr": "VAR",
                    "en": "VAR",
                    "condition": "true"
                },
                "vaa": {
                    "line_number": "6",
                    "fr": "VAA",
                    "en": "VAA",
                    "condition": "true"
                },
                "vat": {
                    "line_number": "7",
                    "fr": "VAT",
                    "en": "VAT",
                    "condition": "true"
                }
            },
            "definitions": {
                "columns": {
                    "vaccinnes": {
                        "fr": "Vaccines",
                        "en": "Vaccinnes",
                        "title": "Vaccinnes",
                        "condition": "true"
                    },
                    "number_of_days": {
                        "fr": "Nbre de Jours",
                        "en": "Number of days",
                        "title": "Number of days",
                        "condition": "true"
                    }
                }
            },
            "parent": "report_monitoringvaccination"
        },
        "report_monitoringvaccination_3": {
            "title": "MONITORING OF PREVENTABLE DESEASES THROUGH VACCINATION ( Vaccination Sessions )",
            "type": "object",
            "manual": "true",
            "properties": {
                "stable": {
                    "line_number": "1",
                    "fr": "Fixe",
                    "en": "STABLE",
                    "condition": "true"
                },
                "advanced": {
                    "line_number": "2",
                    "fr": "Avancee",
                    "en": "ADVANCED",
                    "condition": "true"
                },
                "mobile": {
                    "line_number": "3",
                    "fr": "MOBILE",
                    "en": "MOBILE",
                    "condition": "true"
                },
                "date_of_last_monitoring_meeting": {
                    "line_number": "4",
                    "line": "singlecell",
                    "fr": "Date de la derniere reunion de monitorage",
                    "en": "Date of last monitoring meeting",
                    "condition": "true"
                },
                "date_of_the_last_bcz_supervision": {
                    "line_number": "5",
                    "line": "singlecell",
                    "fr": "Date de la derniere supervision du BCZS",
                    "en": "Date of the last BCZ supervision",
                    "condition": "true"
                }
            },
            "definitions": {
                "columns": {
                    "straegy": {
                        "fr": "Strategie",
                        "en": "Straegy",
                        "title": "Straegy",
                        "condition": "true"
                    },
                    "planned": {
                        "fr": "Prevues",
                        "en": "Planned",
                        "title": "Planned",
                        "condition": "true"
                    },
                    "realized": {
                        "fr": "Realisees",
                        "en": "Realized",
                        "title": "Realized",
                        "condition": "true"
                    }
                }
            },
            "parent": "report_monitoringvaccination"
        },
        "report_mutual": {
            "title": "9. Health's Mutual",
            "fr": "9. Mutuelles de Sante",
            "type": "object",
            "manual": "true",
            "properties": {
                "news_mutual_cases": {
                    "line_number": "1",
                    "fr": "Nouveaux cas mutualis tes",
                    "en": "News mutual cases",
                    "condition": "true"
                },
                "including_new_mutual_patients": {
                    "line_number": "2",
                    "fr": "Dont nouveaux patients mutual is tes",
                    "en": "Including new mutual patients",
                    "condition": "true"
                },
                "old_mutual_cases": {
                    "line_number": "3",
                    "fr": "Anciens cas mutualis tes",
                    "en": "Old mutual cases",
                    "condition": "true"
                },
                "including_contre_refered_mutuals": {
                    "line_number": "4",
                    "fr": "Dont contre-référés mutual is tes",
                    "en": "Including contre- refered mutuals",
                    "condition": "true"
                },
                "mutual_eutocic_deliveries": {
                    "line_number": "5",
                    "fr": "Accouchements eutociques mutuali s tes",
                    "en": "Mutual eutocic deliveries",
                    "condition": "true"
                },
                "mutual_dystocic_deliveries": {
                    "line_number": "6",
                    "fr": "Accouchements dys toci ques mutual is tes",
                    "en": "Mutual Dystocic deliveries",
                    "condition": "true"
                },
                "use_of_services_rate_of_mutual_member_of_the_hc": {
                    "line_number": "7",
                    "line": "singlecell",
                    "fr": "Taux d'utilisation des services par les adhérents de la mutuelle de santé = Nb d’adhérents de mutuelles ayant consulté au CS X 100 / Total des adhérents",
                    "en": "Use of services rate of mutual member of the HC= Nbr of members who were consulted at the HC X100/Total members",
                    "condition": "true"
                },
                "penetration_rate": {
                    "line_number": "8",
                    "line": "singlecell",
                    "fr": "Total Consultations SVS (a+b)",
                    "en": "Penetration rate=nbr of persons who joined an health mutual (Nbr of new mutualistcases + old mutualist cases)X 100/population",
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
                        "fr": "Total",
                        "en": "Total",
                        "title": "Total",
                        "condition": "true"
                    }
                }
            }
        },
        "report_nci": {
            "title": "Monthly Canvas - 2.4. New cases Identification",
            "type": "object",
            "manual": "true",
            "properties": {
                "accident_celebro_vascular": {
                    "line_number": "1",
                    "fr": "Accident vasculo-cérebral (AVC)",
                    "en": "Accident Celebro - vascular",
                    "condition": "true"
                },
                "work_accident": {
                    "line_number": "2",
                    "fr": "Accidents de travail",
                    "en": "Work accident",
                    "condition": "true"
                },
                "amibiasis": {
                    "line_number": "3",
                    "fr": "Amibiase",
                    "en": "Amibiasis",
                    "condition": "true"
                },
                "anemia": {
                    "line_number": "4",
                    "fr": "Anémie",
                    "en": "Anemia",
                    "condition": "true"
                },
                "burns": {
                    "line_number": "5",
                    "fr": "Brûlures",
                    "en": "Burns",
                    "condition": "true"
                },
                "ceivix_cancer": {
                    "line_number": "6",
                    "fr": "Cancer du col utérin",
                    "en": "Ceivix cancer",
                    "condition": "true"
                },
                "prostate_cancer": {
                    "line_number": "7",
                    "fr": "Cancer du prostate",
                    "en": "Prostate cancer",
                    "condition": "true"
                },
                "breast_cancer": {
                    "line_number": "8",
                    "fr": "Cancer du sein",
                    "en": "Breast cancer",
                    "condition": "true"
                },
                "dental_carris": {
                    "line_number": "9",
                    "fr": "Carie dentaire",
                    "en": "Dental carris",
                    "condition": "true"
                },
                "cataracte": {
                    "line_number": "10",
                    "fr": "Cataracte",
                    "en": "Cataracte",
                    "condition": "true"
                },
                "cholera": {
                    "line_number": "11",
                    "fr": "Choléra",
                    "en": "Cholera",
                    "condition": "true"
                },
                "conjoctivitis": {
                    "line_number": "12",
                    "fr": "Conjonctivite",
                    "en": "Conjoctivitis",
                    "condition": "true"
                },
                "whooping_cough_of_non_vaccinated": {
                    "line_number": "13",
                    "fr": "Coqueluche patient non vacciné",
                    "en": "Whooping cough of non vaccinated patients",
                    "condition": "true"
                },
                "whooping_cough_of_vaccinated": {
                    "line_number": "14",
                    "fr": "Coqueluche patient vacciné",
                    "en": "Whooping cough of  vaccinated patients",
                    "condition": "true"
                },
                "depression": {
                    "line_number": "15",
                    "fr": "Dépression",
                    "en": "Depression",
                    "condition": "true"
                },
                "diabetitis": {
                    "line_number": "16",
                    "fr": "Diabète",
                    "en": "Diabetitis",
                    "condition": "true"
                },
                "bloody_diarrhea": {
                    "line_number": "17",
                    "fr": "Diarrhée sanglante",
                    "en": "Bloody diarrhea",
                    "condition": "true"
                },
                "simple_diarrhea": {
                    "line_number": "18",
                    "fr": "Diarrhée simple",
                    "en": "Simple diarrhea",
                    "condition": "true"
                },
                "drepanocytosis": {
                    "line_number": "19",
                    "fr": "Drépanocytose",
                    "en": "Drepanocytosis",
                    "condition": "true"
                },
                "epilepsy_convulsion_crisis": {
                    "line_number": "20",
                    "fr": "Epilepsie/crises convulsives",
                    "en": "Epilepsy/ convulsion crisis",
                    "condition": "true"
                },
                "viral_heomrrhage_fever": {
                    "line_number": "21",
                    "fr": "Fièvre hémorragique",
                    "en": "Viral Heomrrhage Fever",
                    "condition": "true"
                },
                "yellow_fever": {
                    "line_number": "22",
                    "fr": "Fièvre jaune",
                    "en": "Yellow Fever",
                    "condition": "true"
                },
                "typhoid_fever": {
                    "line_number": "23",
                    "fr": "Fièvre typhoïde",
                    "en": "Typhoid Fever",
                    "condition": "true"
                },
                "glaucome": {
                    "line_number": "24",
                    "fr": "Glaucome",
                    "en": "Glaucome",
                    "condition": "true"
                },
                "goiter": {
                    "line_number": "25",
                    "fr": "Goitre",
                    "en": "Goiter",
                    "condition": "true"
                },
                "bird_flu": {
                    "line_number": "26",
                    "fr": "Grippe aviaire",
                    "en": "Bird flu",
                    "condition": "true"
                },
                "hepatitis": {
                    "line_number": "27",
                    "fr": "Hépatites",
                    "en": "Hepatitis",
                    "condition": "true"
                },
                "hernia": {
                    "line_number": "28",
                    "fr": "Hernie",
                    "en": "Hernia",
                    "condition": "true"
                },
                "high_blood_pressure": {
                    "line_number": "29",
                    "fr": "Hypertension artérielle",
                    "en": "High Blood Pressure",
                    "condition": "true"
                },
                "related_work_accident_incapacities": {
                    "line_number": "30",
                    "fr": "Incapacités liées aux accidents de travail",
                    "en": "Related work accident incapacities",
                    "condition": "true"
                },
                "skin_related_infections": {
                    "line_number": "31",
                    "fr": "Infection dermatologique",
                    "en": "Skin related Infections",
                    "condition": "true"
                },
                "urinary_related_infections": {
                    "line_number": "32",
                    "fr": "Infection urinaire",
                    "en": "Urinary related infections",
                    "condition": "true"
                },
                "indigenious_product": {
                    "line_number": "33",
                    "fr": "Intoxications aux produits indigènes",
                    "en": "Indigenious product related to intoxication",
                    "condition": "true"
                },
                "pneumonia": {
                    "line_number": "34",
                    "fr": "IRA inférieure (pneumonie)",
                    "en": "Pneumonia",
                    "condition": "true"
                },
                "high_respiratory_infection": {
                    "line_number": "35",
                    "fr": "IRA sup (syndrome grippal / rhume)",
                    "en": "High Respiratory Infection (syndrom grippal/cold)",
                    "condition": "true"
                },
                "stis_genital_syndrome_flow": {
                    "line_number": "36",
                    "fr": "IST / Syndrome d’écoulement génital",
                    "en": "STIs/ genital  syndrome flow",
                    "condition": "true"
                },
                "stis_pelvic_inflammatory_syndrome": {
                    "line_number": "37",
                    "fr": "IST / Syndrome d’inflammation pelvienne",
                    "en": "STIs/ Pelvic Inflammatory syndrome",
                    "condition": "true"
                },
                "stis_genital_ulceration_syndrome": {
                    "line_number": "38",
                    "fr": "IST / Syndrome d’ulcération génitale",
                    "en": "STIs/ Genital  Ulceration Syndrome",
                    "condition": "true"
                },
                "konzo": {
                    "line_number": "39",
                    "fr": "Konzo",
                    "en": "Konzo",
                    "condition": "true"
                },
                "leprosy": {
                    "line_number": "40",
                    "fr": "Lèpre",
                    "en": "Leprosy",
                    "condition": "true"
                },
                "moderated_high_malnutrition": {
                    "line_number": "41",
                    "fr": "Malnutrition aigue modéré",
                    "en": "Moderated high malnutrition",
                    "condition": "true"
                },
                "mania": {
                    "line_number": "42",
                    "fr": "Manie",
                    "en": "Mania",
                    "condition": "true"
                },
                "menengitis": {
                    "line_number": "43",
                    "fr": "Méningite",
                    "en": "Menengitis",
                    "condition": "true"
                },
                "monkey_pox": {
                    "line_number": "44",
                    "fr": "Monkey pox",
                    "en": "Monkey pox",
                    "condition": "true"
                },
                "venonimous_animals_bites": {
                    "line_number": "45",
                    "fr": "Morsure par des animaux vénimeux",
                    "en": "Venonimous Animals bites",
                    "condition": "true"
                },
                "noma": {
                    "line_number": "46",
                    "fr": "Noma",
                    "en": "Noma",
                    "condition": "true"
                },
                "intestinal_occlusion": {
                    "line_number": "47",
                    "fr": "Occlusion intestinale",
                    "en": "Intestinal occlusion",
                    "condition": "true"
                },
                "onchocercosis_and_other_filariosis": {
                    "line_number": "48",
                    "fr": "Onchocercose et autres filarioses",
                    "en": "Onchocercosis and other Filariosis",
                    "condition": "true"
                },
                "pest": {
                    "line_number": "49",
                    "fr": "Peste",
                    "en": "Pest",
                    "condition": "true"
                },
                "pfa": {
                    "line_number": "50",
                    "fr": "PFA",
                    "en": "PFA (Paralysie Flasque Aigue)",
                    "condition": "true"
                },
                "psychose_aigue": {
                    "line_number": "51",
                    "fr": "Psychose aigue : bouffée délirante",
                    "en": "Psychose-aigue: bouffee delirante",
                    "condition": "true"
                },
                "psychose_puerperal": {
                    "line_number": "52",
                    "fr": "Psychose puerpérale",
                    "en": "Psychose-Puerperal",
                    "condition": "true"
                },
                "rage": {
                    "line_number": "53",
                    "fr": "Rage",
                    "en": "Rage",
                    "condition": "true"
                },
                "measles_non_vaccinated": {
                    "line_number": "54",
                    "fr": "Rougeole patient non vacciné",
                    "en": "Measles ( non vaccinated  patient)",
                    "condition": "true"
                },
                "measles_vaccinated": {
                    "line_number": "55",
                    "fr": "Rougeole patient vacciné",
                    "en": "Measles ( vaccinated patient)",
                    "condition": "true"
                },
                "schistosomiasis": {
                    "line_number": "56",
                    "fr": "Schistosomiase",
                    "en": "Schistosomiasis",
                    "condition": "true"
                },
                "appendiculary_syndrome": {
                    "line_number": "57",
                    "fr": "Syndrome appendiculaire",
                    "en": "Appendiculary syndrome",
                    "condition": "true"
                },
                "posttrauma_stress_syndrome": {
                    "line_number": "58",
                    "fr": "Syndrome de stress post-traumatique",
                    "en": "Post-trauma stress syndrome",
                    "condition": "true"
                },
                "gastric_syndrome": {
                    "line_number": "59",
                    "fr": "Syndrome gastritique",
                    "en": "Gastric syndrome",
                    "condition": "true"
                },
                "tetanus": {
                    "line_number": "60",
                    "fr": "Tétanos",
                    "en": "Tetanus",
                    "condition": "true"
                },
                "neonatal_tetanus": {
                    "line_number": "61",
                    "fr": "Tétanos néonatal",
                    "en": "Neonatal Tetanus",
                    "condition": "true"
                },
                "toxicomania_and_others": {
                    "line_number": "62",
                    "fr": "Toxicomanie et autres",
                    "en": "Toxicomania and others",
                    "condition": "true"
                },
                "trauma": {
                    "line_number": "63",
                    "fr": "Traumatisme",
                    "en": "Trauma",
                    "condition": "true"
                },
                "generalised_anxious_trouble": {
                    "line_number": "64",
                    "fr": "Trouble anxieux généralisé",
                    "en": "Generalised anxious trouble",
                    "condition": "true"
                },
                "trypanosomiasis": {
                    "line_number": "65",
                    "fr": "Trypanosomiase",
                    "en": "Trypanosomiasis",
                    "condition": "true"
                },
                "tuberculosis": {
                    "line_number": "66",
                    "fr": "Tuberculose",
                    "en": "Tuberculosis",
                    "condition": "true"
                },
                "typhus": {
                    "line_number": "67",
                    "fr": "Typhus",
                    "en": "Typhus",
                    "condition": "true"
                },
                "buruli_ulcers": {
                    "line_number": "68",
                    "fr": "Ulcère de buruli",
                    "en": "Buruli Ulcers",
                    "condition": "true"
                },
                "hiv_aids": {
                    "line_number": "69",
                    "fr": "VIH/SIDA",
                    "en": "HIV/AIDS",
                    "condition": "true"
                },
                "xerophtalmia": {
                    "line_number": "70",
                    "fr": "Xérophtalmie",
                    "en": "Xerophtalmia",
                    "condition": "true"
                },
                "others": {
                    "line_number": "71",
                    "fr": "Autres",
                    "en": "Others",
                    "condition": "true"
                }
            },
            "definitions": {
                "columns": {
                    "0_11months": {
                        "fr": "0-11 mois",
                        "en": "0-11 months",
                        "title": "0-11 months",
                        "condition": "true"
                    },
                    "12_59months": {
                        "fr": "12-59 mois",
                        "en": "12-59 months",
                        "title": "12-59 months",
                        "condition": "true"
                    },
                    "5_14yrs": {
                        "fr": "5-14 ans",
                        "en": "5-14yrs",
                        "title": "5-14 yrs",
                        "condition": "true"
                    },
                    "15yrs": {
                        "fr": "15 ans +",
                        "en": "15yrs +",
                        "title": "15yrs +",
                        "condition": "true"
                    },
                    "total": {
                        "fr": "Total",
                        "en": "Total",
                        "title": "Total",
                        "condition": "true"
                    }
                }
            }
        },
        "report_ordervaccine": {
            "title": "Order of vaccines, diluants and infection material form",
            "type": "object",
            "manual": "true",
            "properties": {
                "vaccination_pev_title": {
                    "line_number": "1",
                    "line": "singlecell",
                    "fr": "REPUBLIQUE DEMOCRATIQUE DU CONGO MINISTERE DE LA SANTE PROGRAMME ELARGI DE VACCINATION PEV",
                    "en": "REPUBLIQUE DEMOCRATIQUE DU CONGO MINISTERE DE LA SANTE PROGRAMME ELARGI DE VACCINATION PEV",
                    "condition": "true"
                },
                "store": {
                    "line_number": "2",
                    "line": "singlecell",
                    "fr": "DEPOT",
                    "en": "STORE",
                    "condition": "true"
                },
                "sub_store": {
                    "line_number": "3",
                    "line": "singlecell",
                    "fr": "ANTFNNE",
                    "en": "SUB STORE",
                    "condition": "true"
                },
                "health_zone_storage_site": {
                    "line_number": "4",
                    "line": "singlecell",
                    "fr": "ZONE DE SANTE/SITE DE STOCKAGE ",
                    "en": "HEALTH ZONE/STORAGE SITE",
                    "condition": "true"
                },
                "bcg": {
                    "line_number": "5",
                    "fr": "BCG",
                    "en": "BCG",
                    "condition": "true"
                },
                "bcg_diluant": {
                    "line_number": "6",
                    "fr": "Diluant BCG ",
                    "en": "BCG Diluant",
                    "condition": "true"
                },
                "dtc": {
                    "line_number": "7",
                    "fr": "DTC",
                    "en": "DTC",
                    "condition": "true"
                },
                "ovp": {
                    "line_number": "8",
                    "fr": "VP0",
                    "en": "OVP",
                    "condition": "true"
                },
                "var": {
                    "line_number": "9",
                    "fr": "VAR",
                    "en": "VAR",
                    "condition": "true"
                },
                "var_diluant": {
                    "line_number": "10",
                    "fr": "Diluant VAR",
                    "en": "VAR Diluant",
                    "condition": "true"
                },
                "vat": {
                    "line_number": "11",
                    "fr": "VAT",
                    "en": "VAT",
                    "condition": "true"
                },
                "vaa": {
                    "line_number": "12",
                    "fr": "VAA",
                    "en": "VAA",
                    "condition": "true"
                },
                "vaa_diluant": {
                    "line_number": "13",
                    "fr": "Diluant VAA",
                    "en": "VAA Diluant",
                    "condition": "true"
                },
                "syringes_005ml": {
                    "line_number": "14",
                    "fr": "Seringues 0.05 ml",
                    "en": "Syringes 0.05ml",
                    "condition": "true"
                },
                "syringes_05ml": {
                    "line_number": "15",
                    "fr": "Seringues 0.5 mi",
                    "en": "Syringes 0.5ml",
                    "condition": "true"
                },
                "syringes_10ml_5ml_2ml": {
                    "line_number": "16",
                    "fr": "Seringues 10 ml / 5m1 / 2m1",
                    "en": "Syringes 10ml/5ml/2ml",
                    "condition": "true"
                },
                "receptacles": {
                    "line_number": "17",
                    "fr": "Receptacles",
                    "en": "Receptacles",
                    "condition": "true"
                },
                "paraffin": {
                    "line_number": "18",
                    "fr": "Petrole",
                    "en": "Paraffin",
                    "condition": "true"
                }
            },
            "definitions": {
                "columns": {
                    "antigen": {
                        "fr": "ANTIGEN",
                        "en": "ANTIGEN",
                        "title": "ANTIGEN",
                        "condition": "true"
                    },
                    "period_needs": {
                        "fr": "BESOINS PERIODES (doses /unite I litres) A",
                        "en": "PERIOD NEEDS (doses, Unity, liters) A",
                        "title": "PERIOD NEEDS (doses, Unity, liters) A",
                        "condition": "true"
                    },
                    "stock_min_b": {
                        "fr": "STOCK Mini B",
                        "en": "STOCK Min B",
                        "title": "STOCK Min B",
                        "condition": "true"
                    },
                    "stock_min_c": {
                        "fr": "STOCK Maxi C",
                        "en": "STOCK Max C",
                        "title": "STOCK Max C",
                        "condition": "true"
                    },
                    "available_in_stock_d": {
                        "fr": "QUANTITE (doses/unites/litres) Disponible en stock D",
                        "en": "QUANTITY (doses/unities/liters) Available in stock D",
                        "title": "QUANTITY (doses/unities/liters) Available in stock D",
                        "condition": "true"
                    },
                    "available_in_stock_e": {
                        "fr": "QUANTITE (doses/unites/litres) commandee E",
                        "en": "QUANTITY (doses/unities/liters) Available in stock E",
                        "title": "QUANTITY (doses/unities/liters) Available in stock E",
                        "condition": "true"
                    },
                    "observation_f": {
                        "fr": "OBSERVATIONS F",
                        "en": "Observation F",
                        "title": "Observation F",
                        "condition": "true"
                    }
                }
            }
        },
        "report_pmtct": {
            "title": "3.2 PMTCT",
            "fr": "Prévention transmission mère enfant (PTME)",
            "type": "object",
            "manual": "true",
            "properties": {
                "who_know_their_hiv_status_before_anc_1": {
                    "line_number": "1",
                    "fr": "Qui connaissent leur statut sérologique VIH avant l a CPN1",
                    "en": "Who know their HIV status before ANC 1",
                    "condition": "true"
                },
                "who_were_counseled_for_hiv_test": {
                    "line_number": "2",
                    "fr": "Qui ont été conseillée pour un test VIH",
                    "en": "Who were counseled for HIV test",
                    "condition": "true"
                },
                "who_were_hiv_tested": {
                    "line_number": "3",
                    "fr": "Qui ont été testées pour le VIH",
                    "en": "Who were HIV tested",
                    "condition": "true"
                },
                "who_were_informed_about_their_result": {
                    "line_number": "4",
                    "fr": "Qui ont été informées du résultat",
                    "en": "who were informed about their result",
                    "condition": "true"
                },
                "who_had_hiv_test": {
                    "line_number": "5",
                    "fr": "Qui ont eu un test positif au VIH",
                    "en": "Who had HIV+ test",
                    "condition": "true"
                },
                "who_had_hiv_test_and_were_informed_about_their_results": {
                    "line_number": "6",
                    "fr": "Qui ont eu un test positif au VIH et ont été informées du résultat",
                    "en": "Who had HIV+ test and were informed about their results",
                    "condition": "true"
                },
                "who_are_hiv_and_beneficiated_a_prophylaxie_at_arv_azt_3tc_nvp)": {
                    "line_number": "7",
                    "fr": "Qui sont VIH+ ayant bénéficié de la prophylaxie aux ARV (AZT /AZT+3TC+NVP)",
                    "en": "Who are HIV+ and beneficiated a prophylaxie at ARV (AZT+3TC+NVP)",
                    "condition": "true"
                },
                "who_are_hiv_and_beneficiated_a_prophylaxie_and_cotrimoxazole": {
                    "line_number": "8",
                    "fr": "Qui sont VIH+ ayant bénéficié de la prophylaxie au cotrimoxazole",
                    "en": "Who are HIV+ and beneficiated a prophylaxie and cotrimoxazole",
                    "condition": "true"
                },
                "who_are_hiv_and_refered_to_a_pec_center": {
                    "line_number": "9",
                    "fr": "Qui sont VIH+ qui sont référées vers une structure de PEC",
                    "en": "Who are HIV+ and refered to a PEC center",
                    "condition": "true"
                },
                "tested_and_informed_about_their_results_during_labour_delivery_and_post_portum_72": {
                    "line_number": "10",
                    "fr": "Testées et informées de leur résultat lors du trava il, accouchement et post partum (72 h)",
                    "en": "Tested and informed about their results during labour, delivery and post-portum (72)",
                    "condition": "true"
                },
                "pregnant_women_put_under_arvt": {
                    "line_number": "11",
                    "fr": "Femmes enceintes ont été mis sous TARV",
                    "en": "Pregnant women put under ARVT",
                    "condition": "true"
                },
                "who_were_pregnants_after_being_raped": {
                    "line_number": "12",
                    "fr": "Qui ont eu la grossesse à l’issue d’un Viol",
                    "en": "Who were pregnants after being raped",
                    "condition": "true"
                },
                "hiv_mother_who_opted_the_breast_feeding_up_to_6_months": {
                    "line_number": "13",
                    "fr": "Mères VIH+ ayant opté pour l’allaitement exclusif jusqu’à 6 mois",
                    "en": "HIV+ mother who opted the breast feeding up to 6 months",
                    "condition": "true"
                },
                "who_were_tested_for_ghonorrhea": {
                    "line_number": "14",
                    "fr": "Qui ont été dépistés pour la syphilis à la CPN",
                    "en": "Who were tested for Ghonorrhea",
                    "condition": "true"
                },
                "who_were_positive_for_ghonorrhea": {
                    "line_number": "15",
                    "fr": "Qui ont été dépistés positives à la syphilis",
                    "en": "Who were tested positive for Ghonorrhea",
                    "condition": "true"
                },
                "hiv_mother_put_under_double_protection_pf_preservatif": {
                    "line_number": "16",
                    "fr": "Dont mères VIH+ mises sous double protection (PF+ préservatif)",
                    "en": "HIV+ mother put under double protection (PF+ preservatif)",
                    "condition": "true"
                },
                "delivered_hiv": {
                    "line_number": "17",
                    "fr": "Accouchées VIH +",
                    "en": "Delivered HIV +",
                    "condition": "true"
                },
                "including_those_have_received_the_nevirapine_azt_lav": {
                    "line_number": "18",
                    "fr": "Dont ayant reçu de la névirapine + AZT+LAV",
                    "en": "Including those have received the Nevirapine + AZT + LAV",
                    "condition": "true"
                },
                "children_born_from_hiv_mothers_who_were_put_under_nevirapine_at_birth": {
                    "line_number": "19",
                    "fr": "Enfants nés de mère VIH+",
                    "en": "Children born from HIV+ mothers who were put under nevirapine at birth.",
                    "condition": "true"
                },
                "who_were_put_under_cotrimoxazole_during_6_weeks_after_birth": {
                    "line_number": "20",
                    "fr": "Dont mis sous cotrimoxazole pendant 6 semaines après la naissance",
                    "en": "Who were put under cotrimoxazole during 6 weeks after birth",
                    "condition": "true"
                },
                "who_were_put_under_nevirapine_during_the_12_months_after_birth": {
                    "line_number": "21",
                    "fr": "Dont mis sous NVP pendant 12 mois après la naissance",
                    "en": "Who were put under Nevirapine during the 12 months after birth",
                    "condition": "true"
                },
                "exposed_children_who_were_tested_hiv_at_pcr_1_after_6_weeks_after_birth": {
                    "line_number": "22",
                    "fr": "Enfants exposés reçus et testés au PCR1 à 6 semaines après la naissance",
                    "en": "Exposed children who were tested HIV+ at PCR 1 after 6 weeks after birth",
                    "condition": "true"
                },
                "exposed_children_who_were_tested_at_pcr_2_at_10_weeks_after_birth": {
                    "line_number": "23",
                    "fr": "Enfants exposés reçus et testés au PCR2 à 10 semaines après la naissance",
                    "en": "Exposed children who were tested at PCR 2 at 10 weeks after birth",
                    "condition": "true"
                },
                "exposed_children_who_were_tested_hiv_at_pcr2_at_10_weeks_after_birth": {
                    "line_number": "24",
                    "fr": "Enfants exposés testés positifs au PCR2 à 10 semai nes après la naissance",
                    "en": "Exposed children who were tested HIV+at PCR2 at 10 weeks after birth",
                    "condition": "true"
                },
                "exposed_children_tested_at_pcr1_who_receiveda_hiv_test_at_12_months": {
                    "line_number": "25",
                    "fr": "Enfants exposés testés au PCR1 ayant bénéficié d'untest séro. à 12 mois",
                    "en": "Exposed children tested at PCR1 who receiveda HIV test at 12 months",
                    "condition": "true"
                }
            },
            "definitions": {
                "columns": {
                    "number": {
                        "fr": "Nombre",
                        "en": "Number",
                        "title": "Number",
                        "condition": "true"
                    }
                }
            }
        },
        "report_postnatal_1": {
            "title": "3.6 Post natal consultations",
            "fr": "3.6 Consultations post-natales (CPoN)",
            "type": "object",
            "manual": "true",
            "properties": {
                "ponc_6th_day_after_delivery": {
                    "line_number": "1",
                    "fr": "CPoN1 (6e jr après accouchement)",
                    "en": "PoNC N ° 1 (6th day after delivery)",
                    "condition": "true"
                },
                "registered_deliveries_at_the_ponc_42nd_day": {
                    "line_number": "2",
                    "fr": "Accouchées enregistrées à la CPON3 (42ème jour)",
                    "en": "Registered deliveries at the PoNC N°3 42nd day",
                    "condition": "true"
                },
                "delivered_who_received_the_folate_iron": {
                    "line_number": "3",
                    "fr": "Accouchées ayant reçu du Fer Folate",
                    "en": "Delivered who received the folate iron",
                    "condition": "true"
                },
                "delivered_who_received_the_vitamine_a": {
                    "line_number": "4",
                    "fr": "Accouchées ayant reçu de la vitamine A",
                    "en": "Delivered who received the Vitamine A",
                    "condition": "true"
                },
                "number_of_sessions": {
                    "line_number": "5",
                    "line": "singlecell",
                    "fr": "Nombre de séances",
                    "en": "Number of sessions",
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
            "parent": "report_postnatal"
        },
        "report_postnatal_2": {
            "title": "3.6 Post-natal consultations (table 2)",
            "fr": "3.6 Consultations post-natales (table 2)",
            "type": "object",
            "manual": "true",
            "properties": {
                "women_who_presented_complications_after_delivery": {
                    "line_number": "1",
                    "fr": "Femmes ayant présenté des complications après l’accouchement",
                    "en": "Women who presented complications after delivery",
                    "condition": "true"
                }
            },
            "definitions": {
                "columns": {
                    "number": {
                        "fr": "Nombre",
                        "en": "Number",
                        "title": "Number",
                        "condition": "true"
                    }
                }
            },
            "parent": "report_postnatal"
        },
        "report_pregnant_1": {
            "title": "3.4 Pregnant women vaccination",
            "fr": "3.4. Vaccination des femmes enceintes",
            "type": "object",
            "manual": "true",
            "properties": {
                "vat_1": {
                    "line_number": "1",
                    "fr": "VAT 1",
                    "en": "VAT 1",
                    "condition": "true"
                },
                "vat_2": {
                    "line_number": "2",
                    "fr": "VAT 2",
                    "en": "VAT 2",
                    "condition": "true"
                },
                "vat_3": {
                    "line_number": "3",
                    "fr": "VAT 3",
                    "en": "VAT 3",
                    "condition": "true"
                },
                "vat_4": {
                    "line_number": "4",
                    "fr": "VAT 4",
                    "en": "VAT 4",
                    "condition": "true"
                },
                "vat_5": {
                    "line_number": "5",
                    "fr": "VAT 5",
                    "en": "VAT 5",
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
            "parent": "report_pregnant"
        },
        "report_pregnant_2": {
            "title": "3.5.1 Deliveries at the Health center",
            "fr": "3.5.1 Accouchements au Centre de Santé",
            "type": "object",
            "manual": "true",
            "properties": {
                "eutocic_deliveries": {
                    "line_number": "1",
                    "fr": "Accouchements eutociques",
                    "en": "Eutocic deliveries",
                    "condition": "true"
                },
                "dystocic_deliveries": {
                    "line_number": "2",
                    "fr": "Accouchements dystociques",
                    "en": "Dystocic deliveries",
                    "condition": "true"
                },
                "including_20_yrs": {
                    "line_number": "3",
                    "fr": "Dont âgés de < 20 an",
                    "en": "Including < 20 yrs",
                    "condition": "true"
                },
                "including_watched_out": {
                    "line_number": "4",
                    "fr": "Dont surveillés",
                    "en": "Including watched out",
                    "condition": "true"
                },
                "mother_who_beneficiated_gatpa": {
                    "line_number": "5",
                    "fr": "Mère ayant bénéficié de la GATPA",
                    "en": "Mother who beneficiated GATPA",
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
            "parent": "report_pregnant"
        },
        "report_pregnant_3": {
            "title": "3.5.2 Deliveries in the community",
            "fr": "3.5.2 Accouchements dans la communauté",
            "type": "object",
            "manual": "true",
            "properties": {
                "eutocic_deliveries": {
                    "line_number": "1",
                    "fr": "Accouchements par accoucheuse traditionnelle",
                    "en": "Deliveries assisted by TBA",
                    "condition": "true"
                },
                "dystocic_deliveries": {
                    "line_number": "2",
                    "fr": "Dont Accouchements par accoucheuses traditionnellesrecyclées",
                    "en": "Including deliverie by trained TBAs",
                    "condition": "true"
                },
                "including_20_yrs": {
                    "line_number": "3",
                    "fr": "Dont référés au CS",
                    "en": "Including the refered to Health center",
                    "condition": "true"
                },
                "including_watched_out": {
                    "line_number": "4",
                    "fr": "Total accouchement dans la communauté",
                    "en": "Total deliveries in the community",
                    "condition": "true"
                },
                "rate_of_deliveries_assited_by_qualified_personnel": {
                    "line_number": "5",
                    "line": "singlecell",
                    "fr": "Taux d'accouchements assistés par du personnel qualifié = Nb total d’Accouchements en présence d'un personnelqualifié/formé X 100 / Total accouchements attendus",
                    "en": "rate of deliveries assited by qualified personnel=tottal of deliveries in presence of one qualified personnel/trainedX100/total number of deliveries attended",
                    "condition": "true"
                }
            },
            "definitions": {
                "columns": {
                    "number": {
                        "fr": "Nombre",
                        "en": "Number",
                        "title": "Number",
                        "condition": "true"
                    }
                }
            },
            "parent": "report_pregnant"
        },
        "report_pregnant_4": {
            "title": "3.5.3 Births and deaths",
            "fr": "3.5.3. Naissances et décès",
            "type": "object",
            "manual": "true",
            "properties": {
                "alive_births": {
                    "line_number": "1",
                    "fr": "Naissances vivantes",
                    "en": "Alive births",
                    "condition": "true"
                },
                "births_at_the_health_center": {
                    "line_number": "2",
                    "fr": "Naissances CS",
                    "en": "Births at the health center",
                    "condition": "true"
                },
                "mature_nbb": {
                    "line_number": "3",
                    "fr": "Nouveaux-nés à terme",
                    "en": "Mature NBB",
                    "condition": "true"
                },
                "mature_nbb_2500g": {
                    "line_number": "4",
                    "fr": "Nouveaux-nés à terme < 2 500 g",
                    "en": "Mature NBB < 2500g",
                    "condition": "true"
                },
                "fresh_stillborn_babies": {
                    "line_number": "5",
                    "fr": "Morts nés frais",
                    "en": "Fresh stillborn babies",
                    "condition": "true"
                },
                "mort-né_maceres": {
                    "line_number": "6",
                    "fr": "Mort-nés macéré",
                    "en": "Mort-né maceres",
                    "condition": "true"
                },
                "new_born": {
                    "line_number": "7",
                    "fr": "Nouveau-nés avec malformation congénitale visible",
                    "en": "New born",
                    "condition": "true"
                },
                "pre-_mature_nbb": {
                    "line_number": "8",
                    "fr": "Nouveaux-nés Prématurés",
                    "en": "Pre- mature NBB",
                    "condition": "true"
                },
                "pre-_mature_nbb_born_with_weak_weight_treated_with_kangaroo_method": {
                    "line_number": "9",
                    "fr": "Nouveaux nés prématurés et de faibles poids de naissance soignés selon la méthode du Kangourou",
                    "en": "Pre- mature NBB born with weak weight treated with Kangaroo Method",
                    "condition": "true"
                },
                "nbb_who_have_received_an_efficient_care": {
                    "line_number": "10",
                    "fr": "Nouveaux-nés ayant bénéficiés des soins essentiels",
                    "en": "NBB who have received an efficient care",
                    "condition": "true"
                },
                "nbb_who_have_received_the_antibiotic": {
                    "line_number": "11",
                    "fr": "Nouveaux-nés ayant reçus d’antibiotiques",
                    "en": "NBB who have received the antibiotic",
                    "condition": "true"
                },
                "nbb_put_on_breast_feeding_an_hour_after_delivery": {
                    "line_number": "12",
                    "fr": "Nouveaux-nés mis au sein dans l’heure qui suit l’accouchement",
                    "en": "NBB put on breast feeding an hour after delivery",
                    "condition": "true"
                },
                "assisted_deliveries_rate": {
                    "line_number": "13",
                    "line": "singlecell",
                    "fr": "Taux d’accouchements assistés = Accouchement par personnel soignant qualifié (a) X 100 / Femmes de l’AS attendues",
                    "en": "Assisted deliveries rate = deliveries by a qualified personnel (a)X100/women attended in the health area",
                    "condition": "true"
                }
            },
            "definitions": {
                "columns": {
                    "number": {
                        "fr": "Nombre",
                        "en": "Number",
                        "title": "Number",
                        "condition": "true"
                    }
                }
            },
            "parent": "report_pregnant"
        },
        "report_pregnant_5": {
            "title": "3.5.3 Births and deaths (cont)",
            "fr": "3.5.3 Naissances et décès (cont)",
            "type": "object",
            "manual": "true",
            "properties": {
                "refered_mother_and_child": {
                    "line_number": "1",
                    "fr": "Références mère et bébé",
                    "en": "Refered mother and child",
                    "condition": "true"
                },
                "nbb_deaths_7days": {
                    "line_number": "2",
                    "fr": "Décès nouveau-nés ≤ 7 jours",
                    "en": "NBB deaths < 7days",
                    "condition": "true"
                },
                "nbb_deaths_28days": {
                    "line_number": "3",
                    "fr": "Décès nouveau-nés ≤ 28 jours",
                    "en": "NBB deaths < 28days",
                    "condition": "true"
                },
                "assisted_births": {
                    "line_number": "4",
                    "fr": "Naissances assistées",
                    "en": "Assisted births",
                    "condition": "true"
                },
                "including_stillborn_babies": {
                    "line_number": "4",
                    "fr": "Dont mort-nés",
                    "en": "Including stillborn babies",
                    "condition": "true"
                }
            },
            "definitions": {
                "columns": {
                    "number": {
                        "fr": "Nombre",
                        "en": "Number",
                        "title": "Number",
                        "condition": "true"
                    }
                }
            },
            "parent": "report_pregnant"
        },
        "report_pregnant_6": {
            "title": "3.5.4 Follow up",
            "fr": "3.5.4 Suivi",
            "type": "object",
            "manual": "true",
            "properties": {
                "maternal_deaths_at_the_health_center": {
                    "line_number": "1",
                    "fr": "Décès maternels au CS",
                    "en": "Maternal deaths at the Health center",
                    "condition": "true"
                },
                "including_audited_maternal_deaths": {
                    "line_number": "2",
                    "fr": "Dont décès maternels audités",
                    "en": "Including audited maternal deaths",
                    "condition": "true"
                },
                "maternal_deaths_in_the_community": {
                    "line_number": "3",
                    "fr": "Décès maternels dans la communauté",
                    "en": "maternal deaths in the community",
                    "condition": "true"
                },
                "including_audited_maternal_deaths_in_the_community": {
                    "line_number": "4",
                    "fr": "Dont décès maternels dans la communauté audités",
                    "en": "Including audited maternal deaths in the community",
                    "condition": "true"
                },
                "perinatal_mortality_rate": {
                    "line_number": "5",
                    "line": "singlecell",
                    "fr": "Taux d’accouchements assistés = Accouchement par personnel soignant qualifié (a) X 100 / Femmes de l’AS attendues",
                    "en": "Perinatal mortality rate=stillborn babies + the number of of deaths within 0-7 days of life X100/total births at the health center",
                    "condition": "true"
                },
                "neonatal_mortality_rate": {
                    "line_number": "6",
                    "line": "singlecell",
                    "fr": "Taux d’accouchements assistés = Accouchement par personnel soignant qualifié (a) X 100 / Femmes de l’AS attendues",
                    "en": "Neonatal mortality rate=total number of children who died between birth and 28 daysX 100/total births registered at the health center",
                    "condition": "true"
                }
            },
            "definitions": {
                "columns": {
                    "number": {
                        "fr": "Nombre",
                        "en": "Number",
                        "title": "Number",
                        "condition": "true"
                    }
                }
            },
            "parent": "report_pregnant"
        },
        "report_preschool_1": {
            "title": "4.2 Pre-scolary consultation",
            "fr": "4.2 Consultation préscolaire (CPS)",
            "type": "object",
            "manual": "true",
            "properties": {
                "psc_10_11_months": {
                    "line_number": "1",
                    "fr": "CPS 1 (0-11mois )",
                    "en": "PSC 1(0-11 months)",
                    "condition": "true"
                },
                "psc_2_12_59_months": {
                    "line_number": "2",
                    "fr": "CPS 2+(12-59mois )",
                    "en": "PSC 2(12-59 months)",
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
            "parent": "report_preschool"
        },
        "report_preschool_2": {
            "title": "4.2 Pre-scolary consultation (cont)",
            "fr": "4.2 Consultation préscolaire (CPS) (cont)",
            "type": "object",
            "manual": "true",
            "properties": {
                "organised_psc_sessions": {
                    "line_number": "1",
                    "fr": "Séances CPS organisées",
                    "en": "Organised PSC sessions",
                    "condition": "true"
                },
                "children_0_11_months_who_have_acquired_a_mild": {
                    "line_number": "2",
                    "fr": "Enfants 0-11 mois ayant acquis une MILD",
                    "en": "Children 0-11 months who have acquired a MILD",
                    "condition": "true"
                },
                "children_6_59_months_with_nutritional_oedem": {
                    "line_number": "3",
                    "fr": "Enfants de 6 à 59 mois avec œdèmes nutritionnels",
                    "en": "Children 6-59 months with nutritional oedem",
                    "condition": "true"
                },
                "children_on_supplementary_in_vitamine_a_at_6_months": {
                    "line_number": "4",
                    "fr": "Enfants s upplémentés en vitamine A à 6 Mois",
                    "en": "Children on supplementary in vitamine A at 6 months",
                    "condition": "true"
                },
                "children_from_6_11_months_1st_dose_suppl_in_vita": {
                    "line_number": "5",
                    "fr": "Enfants 6-11 mois (1 ère dos e) s upplémentés en vitamine",
                    "en": "Children from 6-11 months (1st dose)suppl in VitA",
                    "condition": "true"
                },
                "children_12_59_months_supplimented_in_vit_a": {
                    "line_number": "6",
                    "fr": "Enfants 12 à 59 mois s upplémentés en vitamine A",
                    "en": "Children  12-59 months supplimented in Vit A",
                    "condition": "true"
                },
                "children_6_59months_with_pb_less_than_125mm": {
                    "line_number": "7",
                    "fr": "Enfants 6 à 59 mois avec PB < 125 mm",
                    "en": "Children 6-59months with PB<125mm",
                    "condition": "true"
                },
                "children_12_59_were_given_mebendazole": {
                    "line_number": "8",
                    "fr": "Enfants 12-59 mois dépara sités au Mebendazole",
                    "en": "Children 12-59 were given Mebendazole",
                    "condition": "true"
                },
                "mothers_of_0_23_children_who_were_counseled_on_children_nutrition": {
                    "line_number": "9",
                    "fr": "Mères enfants 0-23 mois cons eillés s ur l’aliment. des enfants",
                    "en": "Mothers of 0-23 children who were counseled on children nutrition",
                    "condition": "true"
                },
                "mothers_who_exclusively_breast_feeded_up_6_months": {
                    "line_number": "10",
                    "fr": "Mères ayant pratiquél’allaitement exclus if jus qu’à 6 mois",
                    "en": "Mothers who exclusively breast feeded up 6 months",
                    "condition": "true"
                },
                "0_59_months_children_weighted": {
                    "line_number": "11",
                    "fr": "Enfants 0-59 mois pes és",
                    "en": "0-59 months children weighted",
                    "condition": "true"
                },
                "mothers_care_takers_of_children_0f_0_24_months_who_were_counseled_in_anje": {
                    "line_number": "12",
                    "fr": "Mères /gardiennes d’enfants de 0 à 24 m. aya nt reçu un couns eling en ANJE",
                    "en": "Mothers/care takers of children 0f 0-24 months who were counseled in ANJE",
                    "condition": "true"
                },
                "mothers_who_correctly_observed_a_good_nutrition_from_6_months": {
                    "line_number": "13",
                    "fr": "Mères ayant pratiqué correct. l’aliment. des compléments à partir de 6 mois",
                    "en": "Mothers who correctly observed a good nutrition from 6 months",
                    "condition": "true"
                },
                "children_under_5_who_went_off_this_month": {
                    "line_number": "14",
                    "fr": "Enfants > 5 ans s ortis ce mois",
                    "en": "Children under 5 who went off this month",
                    "condition": "true"
                },
                "including_completely_vaccinated": {
                    "line_number": "15",
                    "fr": "Dont complètement vaccinés",
                    "en": "Including completely vaccinated",
                    "condition": "true"
                },
                "including_those_seen_once_year": {
                    "line_number": "16",
                    "fr": "Dont vus au moins 1 fois par an",
                    "en": "Including those seen once/year",
                    "condition": "true"
                },
                "used_rate_of_psc": {
                    "line_number": "17",
                    "line": "singlecell",
                    "fr": "Taux d’utilisation CPS = NC CPS 0-11 mois AS / Pop 0-11 mois x 100",
                    "en": "Used rate of PSC= NCPSC 0-11 months AS /Population 0-11x100",
                    "condition": "true"
                }
            },
            "definitions": {
                "columns": {
                    "number": {
                        "fr": "Nombre",
                        "en": "Number",
                        "title": "Number",
                        "condition": "true"
                    }
                }
            },
            "parent": "report_preschool"
        },
        "report_preschool_3": {
            "title": "4.3 Growth follow up at the Pre-scolary consultation",
            "fr": "4.3 Suivi de la croissance à la CPS",
            "type": "object",
            "manual": "true",
            "properties": {
                "nbr_of_children_on_middle_line_growth_chart": {
                    "line_number": "1",
                    "fr": "Nb d’enfants sous la courbe centrale de la fiche de croissance",
                    "en": "Nbr of children on middle line growth chart",
                    "condition": "true"
                },
                "nbr_of_light_malunutrition_cases": {
                    "line_number": "2",
                    "fr": "Nb cas malnutrition légère",
                    "en": "Nbr of light malunutrition cases",
                    "condition": "true"
                },
                "nbr_of_high_balanced_malnutriation_cases": {
                    "line_number": "3",
                    "fr": "Nb cas malnutrition aiguë modérée ",
                    "en": "Nbr of high balanced malnutriation cases",
                    "condition": "true"
                },
                "nbr_of_high_severe_malnutrition_cases": {
                    "line_number": "4",
                    "fr": "Nb cas malnutrition aiguë sévère",
                    "en": "Nbr of High severe malnutrition cases",
                    "condition": "true"
                },
                "nbr_of_high_balanced_malnutriation_refered_cases": {
                    "line_number": "5",
                    "fr": "Nb cas malnutrition aiguë sévère référés",
                    "en": "Nbr of high balanced malnutriation refered cases",
                    "condition": "true"
                },
                "nbr_of_children_showing_psychologic_trauma": {
                    "line_number": "6",
                    "fr": "Nb enfants présentant un retard psychomoteur",
                    "en": "Nbr of children showing psychologic trauma",
                    "condition": "true"
                },
                "avarage_of_refered_high_severe_malunutrition_children": {
                    "line_number": "7",
                    "line": "singlecell",
                    "fr": "Proportion enfants Malnutrition sévère référés = Nb enfants au stade 3 référés / Nb enfants au stade 3 x 100",
                    "en": "Avarage of refered high severe malunutrition children =Nbr of children at stage 3 refered/nbr of children at stage 3x100",
                    "condition": "true"
                },
                "average_of_children_with_insufficiency": {
                    "line_number": "8",
                    "line": "singlecell",
                    "fr": "Proportion d’enfants avec insuffisance pondérale=  Nb d’enfants sous la courbe centrale de la fiche de croissance X 100/Nb d’enfants de 0-59 mois attendus à la CPS",
                    "en": "Average of children with insufficiency = Nbr of children under the growth line of the chart x 100/Nbr of children from 0-59 months who attended at the PSC",
                    "condition": "true"
                },
                "average_of_children_from_0_11_months_who_received_a_mild": {
                    "line_number": "9",
                    "line": "singlecell",
                    "fr": "Proportion des enfants de 0-11 mois ayant reçu une MIILD = Nombre d'enfants de 0-11 mois ayant reçu une MILD lors des visites préscolaires X 100 / Total enfants reçus à la 1ėre visite préscolaire",
                    "en": "Average of children from 0-11 months who received a MILD =Nbr of children from 0-11 months who received a MILD during PSC visit x100/total children seen at the 1st PSC visit",
                    "condition": "true"
                }
            },
            "definitions": {
                "columns": {
                    "among_the_new_cases_at_psc": {
                        "fr": "Parmi les NC CPS",
                        "en": "Among the new cases at PSC",
                        "title": "Among the new cases at PSC",
                        "condition": "true"
                    },
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
            "parent": "report_preschool"
        },
        "report_preschool_4": {
            "title": "4.3 Growth follow up at the Pre-scolary consultation (cont)",
            "fr": "4.3 Suivi de la croissance à la CPS (cont)",
            "type": "object",
            "manual": "true",
            "properties": {
                "attendance_at_the_beginning_of_the_month_a": {
                    "line_number": "1",
                    "fr": "Effectif au début du mois (a)",
                    "en": "Attendance at the beginning of the month (a)",
                    "condition": "true"
                },
                "new_kwashiorkor_admission_b": {
                    "line_number": "2",
                    "fr": "Nouvelles admissions Kwashiorkor (b)",
                    "en": "New Kwashiorkor Admission (b)",
                    "condition": "true"
                },
                "new_admission_p_t_3_et_c": {
                    "line_number": "3",
                    "fr": "Nouvelles admissions P/T < < -3 ET (c )",
                    "en": "New Admission P/T<<- 3 ET ( C)",
                    "condition": "true"
                },
                "new_admission_pbt_less_than_115mm_d": {
                    "line_number": "4",
                    "fr": "Nouvelles admissions PB ≤115mm (d)",
                    "en": "New Admission PBT< 115mm (d)",
                    "condition": "true"
                },
                "unti_referal": {
                    "line_number": "5",
                    "fr": "Référence d’une UNTI",
                    "en": "UNTI referal",
                    "condition": "true"
                },
                "untia_referal": {
                    "line_number": "6",
                    "fr": "Référence d’une UNTA",
                    "en": "UNTIA referal",
                    "condition": "true"
                },
                "readmisson_after_drop_out": {
                    "line_number": "7",
                    "fr": "Réadmission après abandon",
                    "en": "Readmisson after drop out",
                    "condition": "true"
                },
                "total_new_admissions_a_plus_b_plus_c_plus_d": {
                    "line_number": "8",
                    "fr": "Total Nouvelles admissions (a+b+c+d)",
                    "en": "Total New admissions (a+b+c+d)",
                    "condition": "true"
                },
                "recovered_rate": {
                    "line_number": "9",
                    "line": "singlecell",
                    "fr": "Taux de guérison=Total enf. guéri x100/Total sorties",
                    "en": "recovered rate= total number of children recovered X 100/total of discharged",
                    "condition": "true"
                },
                "deaths_rate": {
                    "line_number": "10",
                    "line": "singlecell",
                    "fr": "Taux de décès=Total enf. décédés x100/Total sortis",
                    "en": "Deaths rate=total number of died children X 100/total discharged",
                    "condition": "true"
                },
                "dropped_out_rate": {
                    "line_number": "11",
                    "line": "singlecell",
                    "fr": "Taux d’abandon=Total abandons x 100/Total sorties",
                    "en": "Dropped out rate=total of dropped out X 100/total discharged",
                    "condition": "true"
                }
            },
            "definitions": {
                "columns": {
                    "number_of_cases": {
                        "fr": "Nombre de cas",
                        "en": "Number of cases",
                        "title": "Number of cases",
                        "condition": "true"
                    },
                    "high_balanced_malnutrition_uns": {
                        "fr": "Malnutrition aigue modérée (UNS)",
                        "en": "High Balanced Malnutrition UNS",
                        "title": "High Balanced Malnutrition UNS",
                        "condition": "true"
                    },
                    "high_severe_malnutrition_unta": {
                        "fr": "Malnutrition aigue sévère (UNTA)",
                        "en": "High Severe Malnutrition UNTA",
                        "title": "High Severe Malnutrition UNTA",
                        "condition": "true"
                    }
                }
            },
            "parent": "report_preschool"
        },
        "report_preschool_5": {
            "title": "4.3 Growth follow up at the Pre-scolary consultation (cont2)",
            "fr": "4.3 Suivi de la croissance à la CPS (cont2)",
            "type": "object",
            "manual": "true",
            "properties": {
                "recovered_a": {
                    "line_number": "1",
                    "fr": "Guéris (a)",
                    "en": "Recovered (a)",
                    "condition": "true"
                },
                "non_respondants": {
                    "line_number": "2",
                    "fr": "Non répondants",
                    "en": "Non respondants",
                    "condition": "true"
                },
                "died_b": {
                    "line_number": "3",
                    "fr": "Décédés (b)",
                    "en": "Died (b)",
                    "condition": "true"
                },
                "dropped_out": {
                    "line_number": "4",
                    "fr": "Abandons",
                    "en": "Dropped out",
                    "condition": "true"
                },
                "refered_c": {
                    "line_number": "5",
                    "fr": "Référés (c )",
                    "en": "Refered ( c)",
                    "condition": "true"
                },
                "sum_of_staying_discharged": {
                    "line_number": "6",
                    "fr": "Somme de séjour des sortants",
                    "en": "Sum of staying discharged",
                    "condition": "true"
                },
                "total_discharged_a_plus_b_plus_c": {
                    "line_number": "7",
                    "fr": "Total Sorties (a+b+c)",
                    "en": "Total discharged (a+b+c)",
                    "condition": "true"
                },
                "non_repsondant_rate": {
                    "line_number": "8",
                    "line": "singlecell",
                    "fr": "Taux de non réponse=Total non répondant x100/Total sorties",
                    "en": "Non repsondant rate= total of non respondants X 100/total discharged",
                    "condition": "true"
                },
                "average_staying_time": {
                    "line_number": "9",
                    "line": "singlecell",
                    "fr": "Durée moyenne de séjour=somme de séjour de",
                    "en": "Average staying time = Staying sum of",
                    "condition": "true"
                }
            },
            "definitions": {
                "columns": {
                    "discharged": {
                        "fr": "Sorties",
                        "en": "Discharged",
                        "title": "Discharged",
                        "condition": "true"
                    },
                    "high_balanced_malnutrition_uns": {
                        "fr": "Malnutrition aigue modérée (UNS)",
                        "en": "High Balanced Malnutrition UNS",
                        "title": "High Balanced Malnutrition UNS",
                        "condition": "true"
                    },
                    "high_severe_malnutrition_unta": {
                        "fr": "Malnutrition aigue sévère (UNTA)",
                        "en": "High Severe Malnutrition UNTA",
                        "title": "High Severe Malnutrition UNTA",
                        "condition": "true"
                    }
                }
            },
            "parent": "report_preschool"
        },
        "report_promo_1": {
            "title": "5.1 Community participation",
            "fr": "5.1 Participation communautaire",
            "type": "object",
            "manual": "true",
            "properties": {
                "prepared_meetings": {
                    "line_number": "1",
                    "fr": "Réunions prévues",
                    "en": "Prepared meetings",
                    "condition": "true"
                },
                "meeting_held_with_minutes": {
                    "line_number": "2",
                    "fr": "Réunions tenues avec compte rendus",
                    "en": "Meeting held with minutes",
                    "condition": "true"
                },
                "nbr_of_monitoring_meeting_held": {
                    "line_number": "3",
                    "fr": "Nb réunions de monitoring tenues",
                    "en": "Nbr of monitoring meeting held",
                    "condition": "true"
                },
                "prepared_community_activities": {
                    "line_number": "4",
                    "fr": "Activités communautaires prévues",
                    "en": "Prepared community activities",
                    "condition": "true"
                },
                "realised_community_activities": {
                    "line_number": "5",
                    "fr": "Activités communautaires réalisées",
                    "en": "Realised community activities",
                    "condition": "true"
                },
                "nbr_of_meetings_of_analysis_of_data": {
                    "line_number": "6",
                    "fr": "Nb de réunion d’analyse des données",
                    "en": "Nbr of meetings of analysis of data",
                    "condition": "true"
                },
                "nbr_of_decisions_taken_in_the_previous_meeting": {
                    "line_number": "7",
                    "fr": "Nb de décisions prises le mois antérieur",
                    "en": "Nbr of decisions taken in the previous meeting",
                    "condition": "true"
                },
                "nbr_executed_decisions_of_last_month": {
                    "line_number": "8",
                    "fr": "Nb de décisions du mois antérieur exécutées",
                    "en": "Nbr Executed decisions of last month",
                    "condition": "true"
                },
                "nbr_of_decisions_taken_this_month": {
                    "line_number": "9",
                    "fr": "Nb de décisions prises au cours du mois",
                    "en": "Nbr of decisions taken this month",
                    "condition": "true"
                },
                "average_of_held_meeting_by_codesa": {
                    "line_number": "14",
                    "line": "singlecell",
                    "fr": "Proportion des réunions CODESA tenues = Nombre des réunions prevues x 100 / nombre des réunions programmées",
                    "en": "Averageof held meeting by CODESA=Nbr of provided meetings X100/Nbr of meetings programed",
                    "condition": "true"
                },
                "average_of_community_activities_realized": {
                    "line_number": "14",
                    "line": "singlecell",
                    "fr": "Proportion des activités communaut. Réalisées = Nombre des activités prevues x 100 / le nombres des activtés realisées",
                    "en": "Average of community activities realized X 100/Nbr of realized activities",
                    "condition": "true"
                },
                "average_of_codesa_executed_decisions": {
                    "line_number": "14",
                    "line": "singlecell",
                    "fr": "Proportion des décisions CODESA exécutées = Nombre des décisions exécutées x 100 / le nombres des décisions prises",
                    "en": "Average of CODESA executed decisions =Nbr of executed decision X 100/Nbr of decision made",
                    "condition": "true"
                }
            },
            "definitions": {
                "columns": {
                    "codesa": {
                        "fr": "CODESA",
                        "en": "CODESA",
                        "title": "CODESA",
                        "condition": "true"
                    },
                    "cac": {
                        "fr": "CAC",
                        "en": "CAC",
                        "title": "CAC",
                        "condition": "true"
                    },
                    "others": {
                        "fr": "Autres",
                        "en": "OTHERS",
                        "title": "OTHERS",
                        "condition": "true"
                    }
                }
            },
            "parent": "report_promo"
        },
        "report_promo_2": {
            "title": "5.2 Follow of Relais Communautaire",
            "fr": "5.2 Suivi des Relais",
            "type": "object",
            "manual": "true",
            "properties": {
                "nbr_of_children_on_middle_line_growth_chart": {
                    "line_number": "1",
                    "fr": "Relais communautaires ",
                    "en": "Relaiscommunautaire",
                    "condition": "true"
                },
                "nbr_of_light_malunutrition_cases": {
                    "line_number": "2",
                    "fr": "Relais communautaires Actifs",
                    "en": "Active relais communautaire",
                    "condition": "true"
                },
                "nbr_of_high_balanced_malnutriation_cases": {
                    "line_number": "3",
                    "fr": "MILD distribuées par les RECO",
                    "en": "MILD distributed by the relais communautaire",
                    "condition": "true"
                }
            },
            "definitions": {
                "columns": {
                    "ladies": {
                        "fr": "Femme",
                        "en": "Ladies",
                        "title": "Ladies",
                        "condition": "true"
                    },
                    "men": {
                        "fr": "Homme",
                        "en": "Men",
                        "title": "Men",
                        "condition": "true"
                    },
                    "totals": {
                        "fr": "Total",
                        "en": "Total",
                        "title": "Total",
                        "condition": "true"
                    }
                }
            },
            "parent": "report_promo"
        },
        "report_promo_3": {
            "title": "5.3 Communication for behavioral change CCC",
            "fr": "5.3 Communication pour Changement de Comportement (CCC)",
            "type": "object",
            "manual": "true",
            "properties": {
                "nbr_of_sessions_planned": {
                    "line_number": "1",
                    "fr": "Nb séances prévues",
                    "en": "Nbr of sessions planned",
                    "condition": "true"
                },
                "nbr_of_realised_sessions": {
                    "line_number": "2",
                    "fr": "Nb séances réalisées",
                    "en": "Nbr of realised sessions",
                    "condition": "true"
                },
                "nbr_of_male_participants_ccc": {
                    "line_number": "3",
                    "fr": "Nb de participants Hommes CCC",
                    "en": "Nbr of male participants CCC",
                    "condition": "true"
                },
                "nbr_of_female_participants_ccc": {
                    "line_number": "4",
                    "fr": "Nb de participants Femmes CCC",
                    "en": "Nbr of female participants ccc",
                    "condition": "true"
                }
            },
            "definitions": {
                "columns": {
                    "ladies": {
                        "fr": "Femme",
                        "en": "Ladies",
                        "title": "Ladies",
                        "condition": "true"
                    },
                    "men": {
                        "fr": "Homme",
                        "en": "Men",
                        "title": "Men",
                        "condition": "true"
                    },
                    "totals": {
                        "fr": "Total",
                        "en": "Total",
                        "title": "Total",
                        "condition": "true"
                    }
                }
            },
            "parent": "report_promo"
        },
        "report_promo_4": {
            "title": "5.4 Hygiene & Disposals management (health center)",
            "fr": "5.4 Hygiene & Gestion des dechets (CS)",
            "type": "object",
            "manual": "true",
            "properties": {
                "incinarator": {
                    "line_number": "1",
                    "fr": "Incinérateur",
                    "en": "Incinarator",
                    "condition": "true"
                },
                "hygienic_latrines": {
                    "line_number": "2",
                    "fr": "Latrines hygiénique",
                    "en": "Hygienic latrines",
                    "condition": "true"
                },
                "dust_bins": {
                    "line_number": "3",
                    "fr": "Poubelles",
                    "en": "Dust bins",
                    "condition": "true"
                },
                "placenta_hall": {
                    "line_number": "4",
                    "fr": "Fosse à placenta",
                    "en": "Placenta hall",
                    "condition": "true"
                },
                "rabbish_pit": {
                    "line_number": "5",
                    "fr": "Trou à ordures",
                    "en": "Rabbish pit",
                    "condition": "true"
                },
                "flowing_water_and_tapes": {
                    "line_number": "6",
                    "fr": "Eau courante (avec robinet)",
                    "en": "Flowing water and tapes",
                    "condition": "true"
                },
                "existing_water_point": {
                    "line_number": "7",
                    "fr": "Points d’eau existant",
                    "en": "Existing water point",
                    "condition": "true"
                }
            },
            "definitions": {
                "columns": {
                    "functional_tools": {
                        "fr": "Ouvrages Fonctionnels",
                        "en": "Functional tools",
                        "title": "Functional tools",
                        "condition": "true"
                    },
                    "days_off": {
                        "fr": "Jours Non Fonctionne",
                        "en": "Days off",
                        "title": "Days off",
                        "condition": "true"
                    }
                }
            },
            "parent": "report_promo"
        },
        "report_promo_5": {
            "title": "5.5 Relais communautaire Identification (RECO)",
            "fr": "5.5 Identification des relais communautaire (RECO)",
            "type": "object",
            "manual": "true",
            "properties": {
                "nbr_of_needed": {
                    "line_number": "1",
                    "fr": "Nombre de RECO prévus",
                    "en": "Nbr of needed",
                    "condition": "true"
                },
                "nbr_of_existing_reco": {
                    "line_number": "2",
                    "fr": "Nombre des RECO existants",
                    "en": "Nbr of existing RECO",
                    "condition": "true"
                },
                "nbr_of_actif_reco": {
                    "line_number": "3",
                    "fr": "Nombre des RECO opérationnels",
                    "en": "Nbr of actif RECO",
                    "condition": "true"
                },
                "average_of_active_reco": {
                    "line_number": "4",
                    "line": "singlecell",
                    "fr": "Proportion des RECO opérationnels = Nombre des RECO opérationnels X 100 / Nombre tot. des RECO",
                    "en": "Average of active RECO= Nbrof active RECO X 100/Nbr of RECO",
                    "condition": "true"
                },
                "coverage_of_reco_in_the_health_area": {
                    "line_number": "5",
                    "line": "singlecell",
                    "fr": "Couverture en RECO dans l’AS = Nombre des RECO existantsX100/Nombre des RECO prévus",
                    "en": "Coverageof RECO in the health area= Nbr of existing RECO X100/Nbr of RECO Provided",
                    "condition": "true"
                }
            },
            "definitions": {
                "columns": {
                    "ladies": {
                        "fr": "Femme",
                        "en": "Ladies",
                        "title": "Ladies",
                        "condition": "true"
                    },
                    "men": {
                        "fr": "Homme",
                        "en": "Men",
                        "title": "Men",
                        "condition": "true"
                    },
                    "totals": {
                        "fr": "Total",
                        "en": "Total",
                        "title": "Total",
                        "condition": "true"
                    }
                }
            },
            "parent": "report_promo"
        },
        "report_promo_6": {
            "title": "5.6 Water coverage",
            "fr": "5.6 Desserte et Couverture en Eau",
            "type": "object",
            "manual": "true",
            "properties": {
                "improved_existing_water_points": {
                    "line_number": "1",
                    "fr": "Points d’eau amenagés existant",
                    "en": "Improved existing water points",
                    "condition": "true"
                },
                "improved_existing_water_points_with_tested_water": {
                    "line_number": "2",
                    "fr": "Points d’eau amenagés don’t la qualite d'eau a ete teste au mois",
                    "en": "Improved existing water points with tested water",
                    "condition": "true"
                },
                "water_management_programed": {
                    "line_number": "3",
                    "fr": "Aménagement programmés",
                    "en": "Water management programed",
                    "condition": "true"
                },
                "water_management_realised_this_month": {
                    "line_number": "4",
                    "fr": "Aménagement réalisés durant le mois",
                    "en": "Water management realised this month",
                    "condition": "true"
                },
                "population_served_by_new_water_point": {
                    "line_number": "5",
                    "fr": "Pop. desservie par les nv points d’eau",
                    "en": "Population served by new water point",
                    "condition": "true"
                },
                "house_hold_living_in_the_health_area": {
                    "line_number": "6",
                    "fr": "Ménages vivant dans l'Aire de Sante",
                    "en": "House hold living in the health area",
                    "condition": "true"
                },
                "house_hold_with_hygienic_latrines": {
                    "line_number": "7",
                    "fr": "Ménages avec latrines hygiéniques",
                    "en": "House hold with hygienic latrines",
                    "condition": "true"
                },
                "house_hold_who_use_the_treated_water": {
                    "line_number": "8",
                    "fr": "Ménages qui recourent au traitement d’eau de boisson avant l'utilisation",
                    "en": "House hold who use the treated water",
                    "condition": "true"
                }
            },
            "definitions": {
                "columns": {
                    "functional_tools": {
                        "fr": "Ouvrages Fonctionnels",
                        "en": "Functional tools",
                        "title": "Functional tools",
                        "condition": "true"
                    },
                    "number": {
                        "fr": "Nombre",
                        "en": "Number",
                        "title": "Number",
                        "condition": "true"
                    }
                }
            },
            "parent": "report_promo"
        },
        "report_promo_7": {
            "title": "5.8 Other Community Information",
            "fr": "5.8 Autres informations sur la communauté",
            "type": "object",
            "manual": "true",
            "properties": {
                "deaths_in_the_community": {
                    "line_number": "1",
                    "fr": "Décès dans la communauté",
                    "en": "Deaths in the community",
                    "condition": "true"
                },
                "births_in_the_community": {
                    "line_number": "2",
                    "fr": "Naissances dans la communauté",
                    "en": "Births in the community",
                    "condition": "true"
                },
                "deaths_of_children_aged_0_59_months": {
                    "line_number": "3",
                    "fr": "Décès d’enfants de 0 à 59 mois",
                    "en": "deaths of children aged 0-59 months",
                    "condition": "true"
                }
            },
            "definitions": {
                "columns": {
                    "number": {
                        "fr": "Nombre",
                        "en": "Number",
                        "title": "Number",
                        "condition": "true"
                    }
                }
            },
            "parent": "report_promo"
        },
        "report_reprohealth_1": {
            "title": "1. Antenatal Care re-centered",
            "fr": "1. CPN recentrée",
            "type": "object",
            "manual": "true",
            "properties": {
                "targeted_population": {
                    "line_number": "1",
                    "fr": "Pop. Cible",
                    "en": "Targeted Population",
                    "condition": "true"
                },
                "total_new_cases": {
                    "line_number": "2",
                    "fr": "Total  Nouveaux  Cas",
                    "en": "Total  new cases",
                    "condition": "true"
                },
                "new_registered_12_19_years": {
                    "line_number": "3",
                    "fr": "Nouvelles  inscrites  12 -  19  ans",
                    "en": "New registered 12-19 years",
                    "condition": "true"
                },
                "nber_of_pw_who_received_fer_folate": {
                    "line_number": "4",
                    "fr": "Nbre de  femmes  enceintes  ayant regu  le  Fer  folate",
                    "en": "Nber of PW who received Fer Folate",
                    "condition": "true"
                },
                "nber_of_pw_who_received_sp": {
                    "line_number": "5",
                    "fr": "Nombre  de femmes  enceintes ayant  regu  la  SP",
                    "en": "Nber of PW who received SP",
                    "condition": "true"
                },
                "nber_of_pw_who_received_vermifuge": {
                    "line_number": "6",
                    "fr": "Nombre  de  Femmes  enceintes ayant  regu  le  Vermifuge",
                    "en": "Nber of PW who received Vermifuge",
                    "condition": "true"
                },
                "nber_of_pw_sleeping_under_tmn": {
                    "line_number": "7",
                    "fr": "Nombre  de  Femmes  enceintes dormant  sous  Mll",
                    "en": "Nber of PW sleeping under TMN",
                    "condition": "true"
                },
                "nber_of_pw_who_received_vat2_fcv": {
                    "line_number": "8",
                    "fr": "Nombre  de femmes  enceintes ayant  regu VAT2+ et FCV (Femmes compldtement vaccinées)",
                    "en": "Nber of PW who received VAT2+ FCV",
                    "condition": "true"
                },
                "nber_of_pw_who_completed_the_4_visits": {
                    "line_number": "9",
                    "fr": "Nombre  de  femmes  enceintes ayant  accompli  les  4  visites",
                    "en": "Nber of PW who completed the 4 visits",
                    "condition": "true"
                },
                "nber_of_pw_who_have_delivery_plan": {
                    "line_number": "10",
                    "fr": "Nombre  de  femmes  enceintes ayant  un plan  d'accouchement",
                    "en": "Nber of PW who have delivery plan",
                    "condition": "true"
                },
                "nber_of_pw_referred": {
                    "line_number": "11",
                    "fr": "Nombre  de  femmes  enceintes referees",
                    "en": "Nber of PW referred",
                    "condition": "true"
                },
                "province": {
                    "line_number": "12",
                    "line": "singlecell",
                    "fr": "Province",
                    "en": "Province",
                    "condition": "true"
                },
                "district": {
                    "line_number": "13",
                    "line": "singlecell",
                    "fr": "District",
                    "en": "District",
                    "condition": "true"
                },
                "health_zone": {
                    "line_number": "14",
                    "line": "singlecell",
                    "fr": "Zone  de  Sante",
                    "en": "Health Zone",
                    "condition": "true"
                },
                "health_center_maternity": {
                    "line_number": "15",
                    "line": "singlecell",
                    "fr": "CS/Maternite",
                    "en": "Health Center/Maternity",
                    "condition": "true"
                },
                "responsible": {
                    "line_number": "16",
                    "line": "singlecell",
                    "fr": "Responsable",
                    "en": "Responsible",
                    "condition": "true"
                },
                "covered_population": {
                    "line_number": "17",
                    "line": "singlecell",
                    "fr": "Population  couverte  par la  structure",
                    "en": "Covered population",
                    "condition": "true"
                },
                "month": {
                    "line_number": "18",
                    "line": "singlecell",
                    "fr": "Mois de",
                    "en": "Month",
                    "condition": "true"
                },
                "year": {
                    "line_number": "19",
                    "line": "singlecell",
                    "fr": "Annee",
                    "en": "Year",
                    "condition": "true"
                },
                "health_area": {
                    "line_number": "20",
                    "line": "singlecell",
                    "fr": "Aire  de  sante",
                    "en": "Health Area",
                    "condition": "true"
                }
            },
            "definitions": {
                "columns": {
                    "number": {
                        "fr": "Nombre",
                        "en": "Number",
                        "title": "Number",
                        "condition": "true"
                    }
                }
            },
            "parent": "report_reprohealth"
        },
        "report_reprohealth_10": {
            "title": "9. Family planning",
            "fr": "9. Planification familiale",
            "type": "object",
            "manual": "true",
            "properties": {
                "target_population": {
                    "line_number": "1",
                    "fr": "Pop. cible",
                    "en": "Target Population",
                    "condition": "true"
                },
                "depo_inj": {
                    "line_number": "2",
                    "fr": "Injection Depo",
                    "en": "DEPO Inj",
                    "condition": "true"
                },
                "nc_2a": {
                    "line_number": "2a",
                    "fr": "Nouveaux cas",
                    "en": "New cases",
                    "condition": "true"
                },
                "ac_2b": {
                    "line_number": "2b",
                    "fr": "Ancien cas",
                    "en": "AC",
                    "condition": "true"
                },
                "qty_2c": {
                    "line_number": "2c",
                    "fr": "Qty",
                    "en": "Qty",
                    "condition": "true"
                },
                "apc_2d": {
                    "line_number": "2d",
                    "fr": "Année de Protection Couple",
                    "en": "APC",
                    "condition": "true"
                },
                "pills": {
                    "line_number": "3",
                    "fr": "Pilule",
                    "en": "Pills",
                    "condition": "true"
                },
                "nc_3a": {
                    "line_number": "3a",
                    "fr": "Nouveaux cas",
                    "en": "New cases",
                    "condition": "true"
                },
                "ac_3b": {
                    "line_number": "3b",
                    "fr": "Ancien cas",
                    "en": "AC",
                    "condition": "true"
                },
                "qty_3c": {
                    "line_number": "3c",
                    "fr": "Qte",
                    "en": "Qty",
                    "condition": "true"
                },
                "apc_3d": {
                    "line_number": "3d",
                    "fr": "Année de Protection Couple",
                    "en": "APC",
                    "condition": "true"
                },
                "iud_sterilet": {
                    "line_number": "4",
                    "fr": "DIU/STERILET",
                    "en": "IUD/STERILET",
                    "condition": "true"
                },
                "nc_4a": {
                    "line_number": "4a",
                    "fr": "Nouveaux cas",
                    "en": "New cases",
                    "condition": "true"
                },
                "ac_4b": {
                    "line_number": "4b",
                    "fr": "Ancien cas",
                    "en": "AC",
                    "condition": "true"
                },
                "qty_4c": {
                    "line_number": "4c",
                    "fr": "QTE",
                    "en": "QTY",
                    "condition": "true"
                },
                "apc_4d": {
                    "line_number": "4d",
                    "fr": "Année de Protection Couple",
                    "en": "A.P.C",
                    "condition": "true"
                },
                "implant": {
                    "line_number": "5",
                    "fr": "IMPLANT",
                    "en": "IMPLANT",
                    "condition": "true"
                },
                "nc_5a": {
                    "line_number": "5a",
                    "fr": "Nouveaux cas",
                    "en": "New cases",
                    "condition": "true"
                },
                "ac_5b": {
                    "line_number": "5b",
                    "fr": "Ancien cas",
                    "en": "AC",
                    "condition": "true"
                },
                "qty_5c": {
                    "line_number": "5c",
                    "fr": "QTE",
                    "en": "QTY",
                    "condition": "true"
                },
                "apc_5d": {
                    "line_number": "5d",
                    "fr": "Année de Protection Couple",
                    "en": "A.P.C",
                    "condition": "true"
                },
                "mao_confirmed": {
                    "line_number": "6",
                    "fr": "MAO Confirmee",
                    "en": "MAO Confirmed",
                    "condition": "true"
                },
                "nc_6a": {
                    "line_number": "6a",
                    "fr": "Nouveaux cas",
                    "en": "New cases",
                    "condition": "true"
                },
                "ac_6b": {
                    "line_number": "6b",
                    "fr": "Ancien cas",
                    "en": "AC",
                    "condition": "true"
                },
                "qty_6c": {
                    "line_number": "6c",
                    "fr": "QTE",
                    "en": "QTY",
                    "condition": "true"
                },
                "apc_6d": {
                    "line_number": "6d",
                    "fr": "Année de Protection Couple",
                    "en": "A.P.C",
                    "condition": "true"
                },
                "mjf": {
                    "line_number": "7",
                    "fr": "MJF",
                    "en": "MJF",
                    "condition": "true"
                },
                "nc_7a": {
                    "line_number": "7a",
                    "fr": "Nouveaux cas",
                    "en": "New cases",
                    "condition": "true"
                },
                "ac_7b": {
                    "line_number": "7b",
                    "fr": "Ancien cas",
                    "en": "A.C",
                    "condition": "true"
                },
                "qty_7c": {
                    "line_number": "7c",
                    "fr": "QTE",
                    "en": "QTY",
                    "condition": "true"
                },
                "apc_7d": {
                    "line_number": "7d",
                    "fr": "Année de Protection Couple",
                    "en": "A.P.C",
                    "condition": "true"
                },
                "preservatifs": {
                    "line_number": "8",
                    "fr": "PRESERVATIFS",
                    "en": "PRESERVATIFS",
                    "condition": "true"
                },
                "nc_8a": {
                    "line_number": "8a",
                    "fr": "Nouveaux cas",
                    "en": "New cases",
                    "condition": "true"
                },
                "ac_8b": {
                    "line_number": "8b",
                    "fr": "Ancien cas",
                    "en": "A.C",
                    "condition": "true"
                },
                "qty_8c": {
                    "line_number": "8c",
                    "fr": "QTE",
                    "en": "QTY",
                    "condition": "true"
                },
                "apc_8d": {
                    "line_number": "8d",
                    "fr": "Année de Protection Couple",
                    "en": "A.P.C",
                    "condition": "true"
                },
                "spermicides": {
                    "line_number": "9",
                    "fr": "SPERMICIDES BOMB",
                    "en": "SPERMICIDES Bomb",
                    "condition": "true"
                },
                "nc_9a": {
                    "line_number": "9a",
                    "fr": "Nouveaux cas",
                    "en": "New cases",
                    "condition": "true"
                },
                "ac_9b": {
                    "line_number": "9b",
                    "fr": "Ancien cas",
                    "en": "A.C",
                    "condition": "true"
                },
                "qty_9c": {
                    "line_number": "9c",
                    "fr": "QTE",
                    "en": "QTY",
                    "condition": "true"
                },
                "apc_9d": {
                    "line_number": "9d",
                    "fr": "Année de Protection Couple",
                    "en": "A.P.C",
                    "condition": "true"
                }
            },
            "definitions": {
                "columns": {
                    "number": {
                        "fr": "Nombre",
                        "en": "Number",
                        "title": "Number",
                        "condition": "true"
                    }
                }
            },
            "parent": "report_reprohealth"
        },
        "report_reprohealth_11": {
            "title": "10. Controle de stock des médicaments",
            "type": "object",
            "properties": {},
            "definitions": {
                "columns": {}
            },
            "parent": "report_reprohealth"
        },
        "report_reprohealth_12": {
            "title": "11. a Use of revenues generated from the drugs sale",
            "fr": "11.a. Utilisation des recettes générées par la vente des médicaments",
            "type": "object",
            "manual": "true",
            "properties": {
                "total_revenues": {
                    "line_number": "1",
                    "fr": "Total recettes",
                    "en": "Total revenues",
                    "condition": "true"
                },
                "proportion_of_the_structure": {
                    "line_number": "2",
                    "fr": "Proportion de la structure",
                    "en": "Proportion of the structure",
                    "condition": "true"
                },
                "staff_expenses": {
                    "line_number": "3",
                    "fr": "Personnel dépenses",
                    "en": "Staff expenses",
                    "condition": "true"
                },
                "purchasing_drugs": {
                    "line_number": "4",
                    "fr": "Achat de médicaments/gels",
                    "en": "Purchasing drugs",
                    "condition": "true"
                },
                "consumables_expenses_fungible": {
                    "line_number": "5",
                    "fr": "Ingrédients frais (fongible)",
                    "en": "Consumables expenses (fungible)",
                    "condition": "true"
                },
                "long_term_material_expenses": {
                    "line_number": "6",
                    "fr": "Frais de matériel",
                    "en": "Long term material Expenses",
                    "condition": "true"
                },
                "maintenance": {
                    "line_number": "7",
                    "fr": "Maintenance",
                    "en": "Maintenance",
                    "condition": "true"
                },
                "others_to_be_specified": {
                    "line_number": "8",
                    "fr": "Autres (à préciser)",
                    "en": "Others (to be specified)",
                    "condition": "true"
                }
            },
            "definitions": {
                "columns": {
                    "number": {
                        "fr": "Nombre",
                        "en": "Number",
                        "title": "Number",
                        "condition": "true"
                    }
                }
            },
            "parent": "report_reprohealth"
        },
        "report_reprohealth_13": {
            "title": "11.b Use of revenues generated by ultrasound scan",
            "fr": "11.b. Utilisation des recettes générées par échographe",
            "type": "object",
            "manual": "true",
            "properties": {
                "total_revenues": {
                    "line_number": "1",
                    "fr": "Total recettes",
                    "en": "Total revenues",
                    "condition": "true"
                },
                "proportion_of_the_structure": {
                    "line_number": "2",
                    "fr": "Proportion de la structure",
                    "en": "Proportion of the structure",
                    "condition": "true"
                },
                "staff_expenses": {
                    "line_number": "3",
                    "fr": "du personnel dépenses",
                    "en": "Staff expenses",
                    "condition": "true"
                },
                "purchasing_drugs_gels": {
                    "line_number": "4",
                    "fr": "achat de médicaments/gels",
                    "en": "Purchasing drugs/gels",
                    "condition": "true"
                },
                "consumables_expenses_fungible": {
                    "line_number": "5",
                    "fr": "Ingrédients frais (fongible)",
                    "en": "Consumables expenses (fungible)",
                    "condition": "true"
                },
                "long_term_material_expenses": {
                    "line_number": "6",
                    "fr": "frais de matériel",
                    "en": "Long term material Expenses",
                    "condition": "true"
                },
                "maintenance": {
                    "line_number": "7",
                    "fr": "Maintenance",
                    "en": "Maintenance",
                    "condition": "true"
                },
                "others_to_be_specified": {
                    "line_number": "8",
                    "fr": "Autres (à préciser)",
                    "en": "Others (to be specified)",
                    "condition": "true"
                }
            },
            "definitions": {
                "columns": {
                    "number": {
                        "fr": "Nombre",
                        "en": "Number",
                        "title": "Number",
                        "condition": "true"
                    }
                }
            },
            "parent": "report_reprohealth"
        },
        "report_reprohealth_2": {
            "title": "2. Assisted delivery",
            "fr": "2. Accouchement assisté",
            "type": "object",
            "manual": "true",
            "properties": {
                "targeted_population": {
                    "line_number": "1",
                    "fr": "Pop Cible",
                    "en": "Targeted population",
                    "condition": "true"
                },
                "nber_of_eutectic_deliveries_1": {
                    "line_number": "2",
                    "fr": "Nombre  d'Accouchements Eutociques  (1)",
                    "en": "Nber of Eutectic deliveries (1)",
                    "condition": "true"
                },
                "nber_of_dystocia_deliveries_2": {
                    "line_number": "3",
                    "fr": "Nombre Acc Dystociques  (2)",
                    "en": "Nber of Dystocia Deliveries (2)",
                    "condition": "true"
                },
                "nberof_home_deliveries_assisted_by_tbas_3": {
                    "line_number": "4",
                    "fr": "Nombre  d'Acc.  d domicile  par Accoucheuses  recyclees  (3)",
                    "en": "Nber of Home Deliveries assisted by TBAs (3)",
                    "condition": "true"
                },
                "total_of_assisted_deliveries_1_2_3": {
                    "line_number": "5",
                    "fr": "Total  accouc.  Assist6  [(1  )+(2)+(3)]",
                    "en": "Total of assisted deliveries[(1)+(2)+(3)]",
                    "condition": "true"
                },
                "nber_of_a_live_births": {
                    "line_number": "6",
                    "fr": "Nombre  de  naissances  vivantes",
                    "en": "Nber of a live Births",
                    "condition": "true"
                },
                "nber_of_still_born_babies_births": {
                    "line_number": "7",
                    "fr": "Nombre  d'enfants  morts  nes",
                    "en": "Nber of still born babies Births",
                    "condition": "true"
                },
                "nber_of_nbb_who_received_vit_a": {
                    "line_number": "8",
                    "fr": "Nombre d'accouch6es ayant  regu la  Vit A",
                    "en": "Nber of NBB who received Vit A",
                    "condition": "true"
                },
                "nber_of_nbb_delivered_on_time_2500g": {
                    "line_number": "9",
                    "fr": "Nombre  de  nouveaux  -  n6s  d terme <25009",
                    "en": "Nber of Nbb delivered on time <2500g",
                    "condition": "true"
                },
                "nber_of_premature": {
                    "line_number": "10",
                    "fr": "Nombre  de  Prematures",
                    "en": "Nber of Premature",
                    "condition": "true"
                },
                "nber_of_nbb_deaths_or_7_days": {
                    "line_number": "11",
                    "fr": "Nombre  de  deces  Nouveaux-nes=ou<Tjours",
                    "en": "Nber of NBB deaths = or <7 days",
                    "condition": "true"
                },
                "nber_of_maternal_deaths": {
                    "line_number": "11",
                    "fr": "Nombre  decds  maternels",
                    "en": "Nber of maternal deaths",
                    "condition": "true"
                },
                "nber_of_mother_and_child_transfers": {
                    "line_number": "12",
                    "fr": "Nombre  de  transferts meres et bebes",
                    "en": "Nber of Mother and Child transfers",
                    "condition": "true"
                }
            },
            "definitions": {
                "columns": {
                    "number": {
                        "fr": "Nombre",
                        "en": "Number",
                        "title": "Number",
                        "condition": "true"
                    }
                }
            },
            "parent": "report_reprohealth"
        },
        "report_reprohealth_3": {
            "title": "3. Mother to child prevention treatment (PMTCT)",
            "fr": "3. Prévention de la transmission mère enfant (PrME)",
            "type": "object",
            "manual": "true",
            "properties": {
                "nber_of_pw_hiv_tested": {
                    "line_number": "1",
                    "fr": "Nbre des femmes  enceintes test6es  au  VIH",
                    "en": "Nber of PW HIV tested",
                    "condition": "true"
                },
                "nber_of_pw_tested_positive_at_antenatal_clinic": {
                    "line_number": "2",
                    "fr": "Nombre  des femmes  enceintes test6es  VIH+  a  la  CPN",
                    "en": "Nber of PW tested positive at antenatal clinic",
                    "condition": "true"
                },
                "nber_of_pw_tested_positive_and_were_informed_about_their_results": {
                    "line_number": "3",
                    "fr": "Nombre  des femmes  enceintes testees  VIH+  informees  de  leurs resultats",
                    "en": "Nber of PW tested positive and were informed about their results",
                    "condition": "true"
                },
                "nber_of_nbb_of_hvi_mothers": {
                    "line_number": "4",
                    "fr": "Nombre des nouveau-nes des meres seropositives",
                    "en": "Nber of NBB of HVI+ mothers",
                    "condition": "true"
                },
                "nber_of_hiv_pw_who_took_nevirapine_during_labour": {
                    "line_number": "5",
                    "fr": "Nombre des femmes enceintes seropositives ayant pris la niverapine pendant le travails",
                    "en": "Nber of HIV+ PW who took nevirapine during labour",
                    "condition": "true"
                }
            },
            "definitions": {
                "columns": {
                    "number": {
                        "fr": "Nombre",
                        "en": "Number",
                        "title": "Number",
                        "condition": "true"
                    }
                }
            },
            "parent": "report_reprohealth"
        },
        "report_reprohealth_4": {
            "title": "4. Gyneco-Obstetrical Emergency Care",
            "fr": "4. Soins gyneco/obstetricaux d'urgence (SGONU)",
            "type": "object",
            "manual": "true",
            "properties": {
                "nber_of_hta_cases_and_pregnancies": {
                    "line_number": "1",
                    "fr": "Nbre de  cas d HTA  & orossesse",
                    "en": "Nber of HTA cases and pregnancies",
                    "condition": "true"
                },
                "nber_of_geu_cases": {
                    "line_number": "2",
                    "fr": "Nbre de  cas de  GEU",
                    "en": "Nber of GEU cases",
                    "condition": "true"
                },
                "nber_of_miscarriage_complications": {
                    "line_number": "3",
                    "fr": "Nbre  de complications  d'avortement",
                    "en": "Nber of miscarriage complications",
                    "condition": "true"
                },
                "nber_of_hemorrhage_cases_during_pregnancy": {
                    "line_number": "4",
                    "fr": "Nbre de cas d'hemorragie pendant la grossessse",
                    "en": "Nber of hemorrhage cases during pregnancy",
                    "condition": "true"
                },
                "nber_of_placenta_previa_cases": {
                    "line_number": "5",
                    "fr": "Nbre de  cas de  placenta  praevia",
                    "en": "Nber of placenta Previa cases",
                    "condition": "true"
                },
                "nber_of_uterus_blast_cases": {
                    "line_number": "6",
                    "fr": "Nbre de  cas de  rupture  uterine",
                    "en": "Nber of uterus blast cases",
                    "condition": "true"
                },
                "nber_of_pre_eclampsia_eclampsia_cases": {
                    "line_number": "7",
                    "fr": "Nbre  de cas de  pre-eclampsie/eclampsie",
                    "en": "Nber of pre-eclampsia/eclampsia cases",
                    "condition": "true"
                },
                "nber_of_vaginal_hemorrhage_cases_after_delivery": {
                    "line_number": "8",
                    "fr": "Nbre  de cas de  saignement  vaginal  aprds accouchement",
                    "en": "Nber of vaginal hemorrhage cases after delivery",
                    "condition": "true"
                },
                "nber_of_severe_anemia_cases": {
                    "line_number": "9",
                    "fr": "Nbre de cas  d'anemie  sevdre",
                    "en": "Nber of severe anemia cases",
                    "condition": "true"
                },
                "nber_of_infection_cases": {
                    "line_number": "10",
                    "fr": "Nbre de  cas d'infection",
                    "en": "Nber of Infection cases",
                    "condition": "true"
                },
                "nber_of_hypotonic_cases_of_nbb": {
                    "line_number": "11",
                    "fr": "Nbre  de cas d'hypotonie  du  nouveau-ne",
                    "en": "Nber of Hypotonic cases of NBB",
                    "condition": "true"
                },
                "nber_of_neonatal_infections_cases": {
                    "line_number": "12",
                    "fr": "Nbre de  cas d'infection  neonatale",
                    "en": "Nber of Neonatal infections cases",
                    "condition": "true"
                },
                "nber_of_respiratory_stress_cases_of_the_nbb": {
                    "line_number": "13",
                    "fr": "Nbre de  cas de  detresse  respiratoire  du nouveau-ne",
                    "en": "Nber of Respiratory stress cases of the NBB",
                    "condition": "true"
                },
                "nber_of_nbb_convulsion_cases": {
                    "line_number": "14",
                    "fr": "Nbre  de cas de  convulsion  du  nouveau-ne",
                    "en": "Nber of NBB convulsion cases",
                    "condition": "true"
                },
                "nber_of_neonatal_malaria_cases": {
                    "line_number": "15",
                    "fr": "Nbre de cas de paludisme neonatal",
                    "en": "Nber of Neonatal Malaria cases",
                    "condition": "true"
                }
            },
            "definitions": {
                "columns": {
                    "number": {
                        "fr": "Nombre",
                        "en": "Number",
                        "title": "Number",
                        "condition": "true"
                    }
                }
            },
            "parent": "report_reprohealth"
        },
        "report_reprohealth_5": {
            "title": "5. CPON",
            "fr": "5. CPON",
            "type": "object",
            "manual": "true",
            "properties": {
                "targeted_population": {
                    "line_number": "1",
                    "fr": "Pop. Cible",
                    "en": "Targeted Population",
                    "condition": "true"
                },
                "nber_of_women_who_were_followed_within_6weeks_45days_after_delivery": {
                    "line_number": "2",
                    "fr": "Nbre de femmes suivies dans les 6 semaines (45 jour) aprds accouchement",
                    "en": "Nber of Women who were followed within 6weeks (45days)after delivery",
                    "condition": "true"
                },
                "nber_of_women_who_presented_complications_after_delivery": {
                    "line_number": "3",
                    "fr": "Nbre de  femmes  ayant  pr6sentd  une complication  aprds  accouchement",
                    "en": "Nber of Women who presented complications after delivery",
                    "condition": "true"
                },
                "nber_of_women_who_received_vitamin_a_at_cpon": {
                    "line_number": "4",
                    "fr": "Nbre de  femmes  ayant  regu  la  Vitamine  A d la  CPoN",
                    "en": "Nber of Women who received Vitamin A at CPON",
                    "condition": "true"
                }
            },
            "definitions": {
                "columns": {
                    "number": {
                        "fr": "Nombre",
                        "en": "Number",
                        "title": "Number",
                        "condition": "true"
                    }
                }
            },
            "parent": "report_reprohealth"
        },
        "report_reprohealth_6": {
            "title": "6. STIs",
            "fr": "6. IST",
            "type": "object",
            "properties": {},
            "definitions": {
                "columns": {}
            },
            "parent": "report_reprohealth"
        },
        "report_reprohealth_7": {
            "title": "7. Violences Sexuelles",
            "type": "object",
            "manual": "true",
            "properties": {
                "nber_of_identified_sexual_violence_cases": {
                    "line_number": "1",
                    "fr": "Nbre de  cas de  violences  sexuelles identifies",
                    "en": "Nber of identified Sexual Violence cases",
                    "condition": "true"
                },
                "nbr_of_sexual_violence_oriented_cases": {
                    "line_number": "2",
                    "fr": "Nbre de cas de violences sexuelles orients",
                    "en": "Nbr of sexual violence oriented cases",
                    "condition": "true"
                },
                "nbr_of_supported_sexual_violence_cases": {
                    "line_number": "3",
                    "fr": "Nbre de cas de violences sexuelles pris en charge",
                    "en": "Nbr of supported sexual violence cases",
                    "condition": "true"
                }
            },
            "definitions": {
                "columns": {
                    "number": {
                        "fr": "Nombre",
                        "en": "Number",
                        "title": "Number",
                        "condition": "true"
                    }
                }
            },
            "parent": "report_reprohealth"
        },
        "report_reprohealth_8": {
            "title": "8. Infection control in the workplace",
            "fr": "8. Prévention des infections en milieu de soins",
            "type": "object",
            "manual": "true",
            "properties": {
                "nbr_of_post_operatory_infection_cases": {
                    "line_number": "1",
                    "fr": "Nombre de cas d'infection post operatoire",
                    "en": "Nbr of post operatory infection cases",
                    "condition": "true"
                },
                "nbr_of_infections_due_to_lack_of_aspsie": {
                    "line_number": "2",
                    "fr": "Nbre de  cas d'infection  due au  manque d'aspsie",
                    "en": "Nbr of infections due to lack of aspsie",
                    "condition": "true"
                },
                "nbr_of_means_of_waste_evacuation": {
                    "line_number": "3",
                    "fr": "Nbre de  moyens  d'evacuation  des matidres  usees",
                    "en": "Nbr of means of waste evacuation",
                    "condition": "true"
                },
                "nbr_of_energy_power_source_and_type": {
                    "line_number": "4",
                    "fr": "Nbre de  sources  d'energie  et genre",
                    "en": "Nbr of energy power source and type",
                    "condition": "true"
                },
                "nbr_of_hours_of_rupture_of_water_supply_in_the_hc_maternity_ward": {
                    "line_number": "5",
                    "fr": "Nbre d'heures  de  rupture  de  fournitures d'eau  dans  le  CS/maternite",
                    "en": "Nbr of hours of rupture of water supply in the HC/maternity ward",
                    "condition": "true"
                },
                "nbr_of_days_rupture_in_stock_of_disinfectant_means_of_sterilization": {
                    "line_number": "6",
                    "fr": "Nbre de jour de rupture de stock en desinfectant, moyens de sterilisation",
                    "en": "Nbr of days rupture in stock of disinfectant, means of sterilization",
                    "condition": "true"
                }
            },
            "definitions": {
                "columns": {
                    "number": {
                        "fr": "Nombre",
                        "en": "Number",
                        "title": "Number",
                        "condition": "true"
                    }
                }
            },
            "parent": "report_reprohealth"
        },
        "report_reprohealth_9": {
            "title": "9. CCC",
            "fr": "9. CCC",
            "type": "object",
            "manual": "true",
            "properties": {
                "nbr_of_post_operatory_infection_cases": {
                    "line_number": "1",
                    "fr": "Cible (categories)",
                    "en": "Target ( categories)",
                    "condition": "true"
                },
                "nbr_of_infections_due_to_lack_of_aspsie": {
                    "line_number": "2",
                    "fr": "nbre participants attandus",
                    "en": "Nbr of expected participants",
                    "condition": "true"
                },
                "nbr_of_means_of_waste_evacuation": {
                    "line_number": "3",
                    "fr": "Nbr de reçu les participants",
                    "en": "Nbr of received participants",
                    "condition": "true"
                },
                "nbr_of_energy_power_source_and_type": {
                    "line_number": "4",
                    "fr": "Nbr de sessions prévues",
                    "en": "Nbr of planned sessions",
                    "condition": "true"
                },
                "nbr_of_hours_of_rupture_of_water_supply_in_the_hc_maternity_ward": {
                    "line_number": "5",
                    "fr": "Nbr de sessions réalisées",
                    "en": "Nbr of realized sessions",
                    "condition": "true"
                },
                "themes": {
                    "line_number": "6",
                    "fr": "THEMES",
                    "en": "THEMES",
                    "condition": "true"
                },
                "themes_1": {
                    "line_number": "6a",
                    "fr": "1.",
                    "en": "1.",
                    "condition": "true"
                },
                "themes_2": {
                    "line_number": "6b",
                    "fr": "2.",
                    "en": "2.",
                    "condition": "true"
                },
                "themes_3": {
                    "line_number": "6c",
                    "fr": "3.",
                    "en": "3.",
                    "condition": "true"
                }
            },
            "definitions": {
                "columns": {
                    "number": {
                        "fr": "Nombre",
                        "en": "Number",
                        "title": "Number",
                        "condition": "true"
                    }
                }
            },
            "parent": "report_reprohealth"
        },
        "report_resources_1": {
            "title": "8.1 Material management",
            "fr": "8.1 Gestion du matériel",
            "type": "object",
            "manual": "true",
            "properties": {
                "refrigerator": {
                    "line_number": "1",
                    "fr": "Frigos",
                    "en": "Refrigerator",
                    "condition": "true"
                },
                "boite_isotheme": {
                    "line_number": "2",
                    "fr": "Boîte isotherme",
                    "en": "Boite isotheme",
                    "condition": "true"
                },
                "balance_salter": {
                    "line_number": "3",
                    "fr": "Balance Salter",
                    "en": "balance salter",
                    "condition": "true"
                },
                "balance_pese_adulte": {
                    "line_number": "4",
                    "fr": "Balance pèse adulte",
                    "en": "Balance pese adulte",
                    "condition": "true"
                },
                "balance_pese_bébé": {
                    "line_number": "5",
                    "fr": "Balance pèse bébé",
                    "en": "Balance baby weighs",
                    "condition": "true"
                },
                "thermometre": {
                    "line_number": "6",
                    "fr": "Thermomètre",
                    "en": "Thermometre",
                    "condition": "true"
                },
                "stetoscope": {
                    "line_number": "7",
                    "fr": "Stéthoscope",
                    "en": "Stetoscope",
                    "condition": "true"
                },
                "potentiometre": {
                    "line_number": "8",
                    "fr": "Tensiomètre",
                    "en": "Potentiometre",
                    "condition": "true"
                },
                "microscope": {
                    "line_number": "9",
                    "fr": "Microscope",
                    "en": "Microscope",
                    "condition": "true"
                },
                "sterilisateur": {
                    "line_number": "10",
                    "fr": "Stérilisateur",
                    "en": "Sterilisateur",
                    "condition": "true"
                },
                "electricite": {
                    "line_number": "11",
                    "fr": "Eléctricité",
                    "en": "Electricité",
                    "condition": "true"
                },
                "systeme_solaire": {
                    "line_number": "12",
                    "fr": "Systeme Solaire",
                    "en": "Systeme solaire",
                    "condition": "true"
                },
                "velos": {
                    "line_number": "13",
                    "fr": "Vélos",
                    "en": "Velos",
                    "condition": "true"
                },
                "motos": {
                    "line_number": "14",
                    "fr": "Motos",
                    "en": "Motos",
                    "condition": "true"
                }
            },
            "definitions": {
                "columns": {
                    "days_off": {
                        "fr": "Nb jours non fonctionnel",
                        "en": "Days off",
                        "title": "Days off",
                        "condition": "true"
                    }
                }
            },
            "parent": "report_resources"
        },
        "report_resources_10": {
            "title": "8.3.7 Epargne/ Reserve",
            "fr": "8.3.7. Epargne/réserve",
            "type": "object",
            "manual": "true",
            "properties": {
                "epargne_reserve": {
                    "line_number": "1",
                    "fr": "Epargne/réserve",
                    "en": "Epargne/Reserve",
                    "condition": "true"
                }
            },
            "definitions": {
                "columns": {
                    "medicine": {
                        "fr": "Médicaments",
                        "en": "Medicine",
                        "title": "Medicine",
                        "condition": "true"
                    },
                    "income": {
                        "fr": "Recettes",
                        "en": "Income",
                        "title": "Income",
                        "condition": "true"
                    },
                    "others": {
                        "fr": "Autres",
                        "en": "Others",
                        "title": "Others",
                        "condition": "true"
                    },
                    "totals": {
                        "fr": "Total",
                        "en": "Total",
                        "title": "Total",
                        "condition": "true"
                    }
                }
            },
            "parent": "report_resources"
        },
        "report_resources_11": {
            "title": "8.4.1 Consumption of medicines Vaccins sentinelles and others",
            "fr": "8.4.1 Consommation des médicaments, vaccins sentinelles et autres",
            "type": "object",
            "manual": "true",
            "properties": {
                "aspirin_tabs_500mg": {
                    "line_number": "1",
                    "fr": "Aspirine Co 500mg",
                    "en": "Aspirin tabs 500mg",
                    "condition": "true"
                },
                "paracetamol_500mg": {
                    "line_number": "2",
                    "fr": "Paracétamol 500 mg",
                    "en": "Paracetamol 500mg",
                    "condition": "true"
                },
                "artemether_inj_40mg": {
                    "line_number": "3",
                    "fr": "Artémether inj 40 mg",
                    "en": "Artemether Inj 40mg",
                    "condition": "true"
                },
                "artemether_inj_80mg": {
                    "line_number": "4",
                    "fr": "Artémether inj 80 mg",
                    "en": "Artemether Inj 80mg",
                    "condition": "true"
                },
                "artesunate_amodiaquine_12_59_m": {
                    "line_number": "5",
                    "fr": "Artésunate-Amodiaquine (12 -59 m) ",
                    "en": "Artésunate-Amodiaquine (12 -59 m)",
                    "condition": "true"
                },
                "artesunate_amodiaquine_2_11_m": {
                    "line_number": "6",
                    "fr": "Artésunate-Amodiaquine (2-11 m)",
                    "en": "Artesunate - Amodiaquine (2 - 11 m)",
                    "condition": "true"
                },
                "artesunate_amodiaquine_6_13_y": {
                    "line_number": "7",
                    "fr": "Artésunate-Amodiaquine (6-13 a)",
                    "en": "Artesunate - Amodiaquine (6-13 y)",
                    "condition": "true"
                },
                "artesunate_amodiaquine_14_y_plus": {
                    "line_number": "8",
                    "fr": "Artésunate-Amodiaquine, (14a+)",
                    "en": "Artesunate - Amodiaquine (14 y +)",
                    "condition": "true"
                },
                "lumefantrine_artemether": {
                    "line_number": "9",
                    "fr": "Luméfantrine + Artéméther",
                    "en": "Lumefantrine + Artemether",
                    "condition": "true"
                },
                "quinine_inj_600mg": {
                    "line_number": "10",
                    "fr": "Quinine amp 600 mg",
                    "en": "Quinine Inj 600mg",
                    "condition": "true"
                },
                "quinine_tabs_500mg": {
                    "line_number": "11",
                    "fr": "Quinine co 500 mg",
                    "en": "Quinine tabs 500mg",
                    "condition": "true"
                },
                "tdr": {
                    "line_number": "12",
                    "fr": "TDR",
                    "en": "TDR",
                    "condition": "true"
                },
                "sp_500_25_mg_tabs": {
                    "line_number": "13",
                    "fr": "SP 500/25 mg, co",
                    "en": "SP/500/25 mg tabs",
                    "condition": "true"
                },
                "mild": {
                    "line_number": "14",
                    "fr": "MILD",
                    "en": "MILD",
                    "condition": "true"
                },
                "diazepan_500mg_inj": {
                    "line_number": "15",
                    "fr": "Diazepam 5 mg amp",
                    "en": "Diazepan 500mg Inj",
                    "condition": "true"
                },
                "ors": {
                    "line_number": "16",
                    "fr": "SRO",
                    "en": "ORS",
                    "condition": "true"
                },
                "zinc_20mg": {
                    "line_number": "17",
                    "fr": "Zinc 20 mg",
                    "en": "Zinc 20mg",
                    "condition": "true"
                },
                "amoxyciline_caps_250mg": {
                    "line_number": "18",
                    "fr": "Amoxycilline caps 250 mg",
                    "en": "Amoxyciline Caps 250mg",
                    "condition": "true"
                },
                "amoxyciline_caps_500mg": {
                    "line_number": "19",
                    "fr": "Amoxycilline caps 500 mg",
                    "en": "Amoxyciline Caps 500mg",
                    "condition": "true"
                },
                "cotrimoxazole_480mg": {
                    "line_number": "20",
                    "fr": "Cotrimoxazole 480 mg",
                    "en": "Cotrimoxazole 480mg",
                    "condition": "true"
                },
                "ceftriaxone_1g_inj": {
                    "line_number": "21",
                    "fr": "Ceftriaxone 1 gr inj",
                    "en": "Ceftriaxone 1g Inj",
                    "condition": "true"
                },
                "gentamicyine": {
                    "line_number": "22",
                    "fr": "Gentamycine",
                    "en": "Gentamicyine",
                    "condition": "true"
                },
                "mebendazole_100mg": {
                    "line_number": "23",
                    "fr": "Mebendazole 100 mg",
                    "en": "Mebendazole 100mg",
                    "condition": "true"
                },
                "metronidazole_250_mg_tabs": {
                    "line_number": "24",
                    "fr": "Métronidazole 250 mg co",
                    "en": "Metronidazole 250 mg tabs",
                    "condition": "true"
                },
                "female_preservatives": {
                    "line_number": "25",
                    "fr": "Preservatif feminine",
                    "en": "Female preservatives",
                    "condition": "true"
                }
            },
            "definitions": {
                "columns": {
                    "initial_stock_beginning_of_the_month": {
                        "fr": "Stock initiale (début mois )",
                        "en": "Initial Stock (beginning of the month)",
                        "title": "Initial Stock (beginning of the month)",
                        "condition": "true"
                    },
                    "entries": {
                        "fr": "Entrées",
                        "en": "Entries",
                        "title": "Entries",
                        "condition": "true"
                    },
                    "exit_out_of_consumption": {
                        "fr": "Sorties hors consommation",
                        "en": "Exit (out of consumption)",
                        "title": "Exit (out of consumption)",
                        "condition": "true"
                    },
                    "qty_consummed": {
                        "fr": "Qtés consommées",
                        "en": "Qty consummed",
                        "title": "Qty consummed",
                        "condition": "true"
                    },
                    "available_stock": {
                        "fr": "Stock disponible (inventaire physique)",
                        "en": "Available Stock",
                        "title": "Available Stock",
                        "condition": "true"
                    },
                    "inventaire_phsyique": {
                        "fr": "?",
                        "en": "Inventaire Phsyique",
                        "title": "Inventaire Phsyique",
                        "condition": "true"
                    },
                    "number_of_days_out_of_stock": {
                        "fr": "Nb jours rupture de stock",
                        "en": "Number of days out of stock",
                        "title": "Number of days out of stock",
                        "condition": "true"
                    },
                    "qty_of_stock_near_the_expired_date": {
                        "fr": "Qté voie péremption",
                        "en": "Qty of stock near the expired date",
                        "title": "Qty of stock near the expired date",
                        "condition": "true"
                    }
                }
            },
            "parent": "report_resources"
        },
        "report_resources_12": {
            "title": "8.4.1 Consumption of medicines Vaccins sentinelles and others (cont)",
            "fr": "8.4.1 Consommation des médicaments, vaccins sentinelles et autres (suite)",
            "type": "object",
            "manual": "true",
            "properties": {
                "male_preservatives": {
                    "line_number": "1",
                    "fr": "Preservatif masculin",
                    "en": "Male preservatives",
                    "condition": "true"
                },
                "depo_provera": {
                    "line_number": "2",
                    "fr": "Depo-Provera",
                    "en": "Depo-provera",
                    "condition": "true"
                },
                "iud": {
                    "line_number": "3",
                    "fr": "DIU",
                    "en": "IUD",
                    "condition": "true"
                },
                "microgynon": {
                    "line_number": "4",
                    "fr": "Microgynon",
                    "en": "Microgynon",
                    "condition": "true"
                },
                "implants": {
                    "line_number": "5",
                    "fr": "Implants",
                    "en": "Implants",
                    "condition": "true"
                },
                "pills_tabs": {
                    "line_number": "6",
                    "fr": "Plaquettes des Pilules",
                    "en": "Pills tabs",
                    "condition": "true"
                },
                "determine": {
                    "line_number": "7",
                    "fr": "Determine",
                    "en": "Determine",
                    "condition": "true"
                },
                "double_check": {
                    "line_number": "8",
                    "fr": "Double check",
                    "en": "Double check",
                    "condition": "true"
                },
                "pepkit": {
                    "line_number": "9",
                    "fr": "Kit PEP",
                    "en": "PEPkit",
                    "condition": "true"
                },
                "nevirapine_sp": {
                    "line_number": "10",
                    "fr": "Névirapine Sp",
                    "en": "Nevirapine SP",
                    "condition": "true"
                },
                "oxytocine_10ui": {
                    "line_number": "11",
                    "fr": "Oxytocine 10 UI",
                    "en": "Oxytocine 10UI",
                    "condition": "true"
                },
                "methylergometrine_inj_1ml": {
                    "line_number": "12",
                    "fr": "Methylergométrine amp 1 ml",
                    "en": "Methylergometrine Inj 1ml",
                    "condition": "true"
                },
                "misoprostol": {
                    "line_number": "13",
                    "fr": "Misoprostol",
                    "en": "Misoprostol",
                    "condition": "true"
                },
                "magnesium_sulphate": {
                    "line_number": "14",
                    "fr": "Sulphate de magnésium",
                    "en": "Magnesium sulphate",
                    "condition": "true"
                },
                "salbutamol_tab_4mg": {
                    "line_number": "15",
                    "fr": "Salbutamol 4 mg, co",
                    "en": "Salbutamol tab 4mg",
                    "condition": "true"
                },
                "na_dcc_tabs": {
                    "line_number": "16",
                    "fr": "Na DCC co",
                    "en": "Na DCC tabs",
                    "condition": "true"
                },
                "rh": {
                    "line_number": "17",
                    "fr": "RH",
                    "en": "RH",
                    "condition": "true"
                },
                "rhz": {
                    "line_number": "18",
                    "fr": "RHZ",
                    "en": "RHZ",
                    "condition": "true"
                },
                "rhze": {
                    "line_number": "19",
                    "fr": "RHZE",
                    "en": "RHZE",
                    "condition": "true"
                },
                "gas_compressor": {
                    "line_number": "20",
                    "fr": "Compresses de gaze",
                    "en": "Gas compressor",
                    "condition": "true"
                },
                "dakin_na_dcc_tabs": {
                    "line_number": "21",
                    "fr": "Dakin (Na DCC co)",
                    "en": "Dakin (Na DCC tabs)",
                    "condition": "true"
                },
                "niddles_21g": {
                    "line_number": "22",
                    "fr": "Aiguilles 21 G",
                    "en": "Niddles 21g",
                    "condition": "true"
                },
                "syringues_5ml": {
                    "line_number": "23",
                    "fr": "Seringue 5 ml",
                    "en": "Syringues 5ml",
                    "condition": "true"
                },
                "water_ppi_5ml_v": {
                    "line_number": "24",
                    "fr": "Eau ppi 5 ml fl",
                    "en": "Water ppi 5ml (v)",
                    "condition": "true"
                },
                "lidocaine_2_percentage_v": {
                    "line_number": "25",
                    "fr": "Lidocaïne 2%, fl",
                    "en": "Lidocaine 2% (v)",
                    "condition": "true"
                },
                "curative_consultation_form": {
                    "line_number": "26",
                    "fr": "Fiche Consultation curative",
                    "en": "Curative consultation form",
                    "condition": "true"
                },
                "anc_form": {
                    "line_number": "27",
                    "fr": "Fiche CPN",
                    "en": "ANC form",
                    "condition": "true"
                },
                "psc_form": {
                    "line_number": "28",
                    "fr": "Fiche CPS",
                    "en": "PSC form",
                    "condition": "true"
                }
            },
            "definitions": {
                "columns": {
                    "initial_stock_beginning_of_the_month": {
                        "fr": "Stock initiale (début mois )",
                        "en": "Initial Stock (beginning of the month)",
                        "title": "Initial Stock (beginning of the month)",
                        "condition": "true"
                    },
                    "entries": {
                        "fr": "Entrées",
                        "en": "Entries",
                        "title": "Entries",
                        "condition": "true"
                    },
                    "exit_out_of_consumption": {
                        "fr": "Sorties hors consommation",
                        "en": "Exit (out of consumption)",
                        "title": "Exit (out of consumption)",
                        "condition": "true"
                    },
                    "qty_consummed": {
                        "fr": "Qtés consommées",
                        "en": "Qty consummed",
                        "title": "Exit (out of consumption)",
                        "condition": "true"
                    },
                    "available_stock": {
                        "fr": "Stock disponible (inventaire physique)",
                        "en": "Available Stock",
                        "title": "Available Stock",
                        "condition": "true"
                    },
                    "inventaire_phsyique": {
                        "fr": "?",
                        "en": "Inventaire Phsyique",
                        "title": "Inventaire Phsyique",
                        "condition": "true"
                    },
                    "number_of_days_out_of_stock": {
                        "fr": "Nb jours rupture de stock",
                        "en": "Number of days out of stock",
                        "title": "Number of days out of stock",
                        "condition": "true"
                    },
                    "qty_of_stock_near_the_expired_date": {
                        "fr": "Qté voie péremption",
                        "en": "Qty of stock near the expired date",
                        "title": "Qty of stock near the expired date",
                        "condition": "true"
                    }
                }
            },
            "parent": "report_resources"
        },
        "report_resources_13": {
            "title": "8.4.2 general situation of items in the stock",
            "fr": "8.4.2 Situation Generale des items en stock",
            "type": "object",
            "manual": "true",
            "properties": {
                "items_in_the_stock": {
                    "line_number": "1",
                    "fr": "Items en stock",
                    "en": "Items in the stock",
                    "condition": "true"
                },
                "items_in_extra_stock": {
                    "line_number": "2",
                    "fr": "Items en sur stock",
                    "en": "Items in extra stock",
                    "condition": "true"
                },
                "including_items_on_the_expiry_date": {
                    "line_number": "3",
                    "fr": "Item dont une partie du stock est en voie de péremption",
                    "en": "Including items on the expiry date",
                    "condition": "true"
                },
                "items_with_risk_of_expiration": {
                    "line_number": "4",
                    "fr": "Item avec risque de perte par péremption",
                    "en": "Items with risk of expiration",
                    "condition": "true"
                }
            },
            "definitions": {
                "columns": {
                    "number": {
                        "fr": "Nombre",
                        "en": "Number",
                        "title": "Number",
                        "condition": "true"
                    }
                }
            },
            "parent": "report_resources"
        },
        "report_resources_14": {
            "title": "8.4.3 Value of consummed medicines at the buying cost",
            "fr": "8.4.3 Valeur des médicaments consommés au coût d’achat",
            "type": "object",
            "manual": "true",
            "properties": {
                "administrated_medicines_to_patients": {
                    "line_number": "1",
                    "fr": "Médicament admininistrés aux malades",
                    "en": "Administrated medicines to patients",
                    "condition": "true"
                },
                "administrated_medicines_to_personnel": {
                    "line_number": "2",
                    "fr": "Médicament admininistrés au personnel",
                    "en": "Administrated medicines to personnel",
                    "condition": "true"
                },
                "administrated_medicines_to_indigents": {
                    "line_number": "3",
                    "fr": "Médicament admininistrés aux indigents",
                    "en": "Administrated medicines to indigents",
                    "condition": "true"
                },
                "expired_medicines_broken": {
                    "line_number": "4",
                    "fr": "Médicaments périmés, avariés, cassés",
                    "en": "Expired medicines, broken",
                    "condition": "true"
                }
            },
            "definitions": {
                "columns": {
                    "mobile": {
                        "fr": "Ambulatoire",
                        "en": "Mobile",
                        "title": "Mobile",
                        "condition": "true"
                    },
                    "obserbation": {
                        "fr": "Observation",
                        "en": "Observation",
                        "title": "Observation",
                        "condition": "true"
                    },
                    "psc": {
                        "fr": "CPS",
                        "en": "PSC",
                        "title": "PSC",
                        "condition": "true"
                    },
                    "small_surgery": {
                        "fr": "Petite Chirurgie",
                        "en": "Small surgery",
                        "title": "Small surgery",
                        "condition": "true"
                    },
                    "anc_fp_and_ponc": {
                        "fr": "CPN, PF et CPON",
                        "en": "ANC, FP & PONC",
                        "title": "ANC, FP & PONC",
                        "condition": "true"
                    },
                    "meternity": {
                        "fr": "Maternité",
                        "en": "Maternity",
                        "title": "Maternity",
                        "condition": "true"
                    },
                    "total": {
                        "fr": "Total",
                        "en": "Total",
                        "title": "TOTAL",
                        "condition": "true"
                    }
                }
            },
            "parent": "report_resources"
        },
        "report_resources_15": {
            "title": "8.4.4 Pharmacy value",
            "fr": "8.4.4. Valeur de la pharmacie",
            "type": "object",
            "manual": "true",
            "properties": {
                "physics_stocks_value_of_medicines_plus": {
                    "line_number": "1",
                    "fr": "Valeur du stock physique de médicaments (+)",
                    "en": "Physics stocks value of medicines (+)",
                    "condition": "true"
                },
                "pharmacy_account_plus": {
                    "line_number": "2",
                    "fr": "Montant du compte pharmacie (+)",
                    "en": "Pharmacy account (+)",
                    "condition": "true"
                },
                "request_amount_in_process_already_paid_plus": {
                    "line_number": "3",
                    "fr": "Montant des commandes en cours (déjà payées) (+)",
                    "en": "Request amount in process, ( already paid) (+)",
                    "condition": "true"
                },
                "amount_recovered_creances_plus": {
                    "line_number": "4",
                    "fr": "Montant à recouvrer (créances) (+)",
                    "en": "Amount recovered (creances) (+)",
                    "condition": "true"
                },
                "amount_to_be_paid_to_3rd_part_debts": {
                    "line_number": "5",
                    "fr": "Montant à payer au tiers (dettes) (-)",
                    "en": "Amount to be paid to 3rd part (debts)",
                    "condition": "true"
                },
                "stock_value_form": {
                    "line_number": "6",
                    "fr": "Valeur du stock sur fiche",
                    "en": "Stock value form",
                    "condition": "true"
                },
                "real_value_of_the_pharmacy": {
                    "line_number": "7",
                    "fr": "Valeur réelle de la pharmacie",
                    "en": "Real value of the Pharmacy",
                    "condition": "true"
                },
                "loss_of_the_pharmacy": {
                    "line_number": "8",
                    "fr": "Perte de la pharmacie",
                    "en": "Loss of the pharmacy",
                    "condition": "true"
                }
            },
            "definitions": {
                "columns": {
                    "amount": {
                        "fr": "Montant",
                        "en": "Amount",
                        "title": "Amount",
                        "condition": "true"
                    }
                }
            },
            "parent": "report_resources"
        },
        "report_resources_16": {
            "title": "8.4.4 Pharmacy value (cont)",
            "fr": "8.4.4. Valeur de la pharmacie (suite)",
            "type": "object",
            "manual": "true",
            "properties": {
                "items_out_of_use": {
                    "line_number": "1",
                    "fr": "Articles hors usage",
                    "en": "items out of use",
                    "condition": "true"
                },
                "requested_items_at_the_bcz": {
                    "line_number": "2",
                    "fr": "Articles commandés au BCZS",
                    "en": "Requested items at the BCZ",
                    "condition": "true"
                },
                "items_completely_served_by_bcz": {
                    "line_number": "3",
                    "fr": "Articles complètement servis par BCZS",
                    "en": "Items completely served by BCZ",
                    "condition": "true"
                }
            },
            "definitions": {
                "columns": {
                    "amount": {
                        "fr": "Montant",
                        "en": "Amount",
                        "title": "Amount",
                        "condition": "true"
                    }
                }
            },
            "parent": "report_resources"
        },
        "report_resources_17": {
            "title": "8.5 Vaccins and other intrants Management",
            "fr": "8.5 Gestion des vaccins et autres intrants",
            "type": "object",
            "manual": "true",
            "properties": {
                "bcg": {
                    "line_number": "1",
                    "fr": "BCG",
                    "en": "BCG",
                    "condition": "true"
                },
                "diluant_bcg": {
                    "line_number": "2",
                    "fr": "Diluant BCG",
                    "en": "Diluant BCG",
                    "condition": "true"
                },
                "ovp": {
                    "line_number": "3",
                    "fr": "VPO",
                    "en": "OVP",
                    "condition": "true"
                },
                "dtc_htpb_hib": {
                    "line_number": "4",
                    "fr": "DTC hepB Hib",
                    "en": "DTC hepB Hib",
                    "condition": "true"
                },
                "var": {
                    "line_number": "5",
                    "fr": "VAR",
                    "en": "VAR",
                    "condition": "true"
                },
                "diluant_var": {
                    "line_number": "6",
                    "fr": "Diluant VAR",
                    "en": "Diluant VAR",
                    "condition": "true"
                },
                "vat": {
                    "line_number": "7",
                    "fr": "VAT",
                    "en": "VAT",
                    "condition": "true"
                },
                "vaa": {
                    "line_number": "8",
                    "fr": "VAA",
                    "en": "VAA",
                    "condition": "true"
                },
                "diluant_vaa": {
                    "line_number": "9",
                    "fr": "Diluant VAA",
                    "en": "Diluant VAA",
                    "condition": "true"
                },
                "syringues_sab_bcg": {
                    "line_number": "10",
                    "fr": "Seringue SAB BCG",
                    "en": "Syringues SAB BCG",
                    "condition": "true"
                },
                "syringues_sab": {
                    "line_number": "11",
                    "fr": "Seringue SAB",
                    "en": "Syringues SAB",
                    "condition": "true"
                },
                "diluation_syringues": {
                    "line_number": "12",
                    "fr": "Seringue de dilution",
                    "en": "Diluation syringues",
                    "condition": "true"
                },
                "pvc_13": {
                    "line_number": "13",
                    "fr": "PCV13",
                    "en": "PVC 13",
                    "condition": "true"
                },
                "receptacle": {
                    "line_number": "14",
                    "fr": "Réceptacle",
                    "en": "Receptacle",
                    "condition": "true"
                }
            },
            "definitions": {
                "columns": {
                    "qty_of_the_beginning_of_month": {
                        "fr": "Quantité au début du mois",
                        "en": "Qty of the Beginning of Month",
                        "title": "Qty of the Beginning of Month",
                        "condition": "true"
                    },
                    "entries": {
                        "fr": "Entrées",
                        "en": "Entries",
                        "title": "Entries",
                        "condition": "true"
                    },
                    "consummed_qty": {
                        "fr": "Quantité consommée",
                        "en": "Consummed Qty",
                        "title": "Consummed Qty",
                        "condition": "true"
                    },
                    "qty_at_month_end": {
                        "fr": "Quantité à la fin du moi",
                        "en": "Qty at month end",
                        "title": "Qty at month end",
                        "condition": "true"
                    },
                    "exit_out_of_consumption": {
                        "fr": "Sorties hors consommation",
                        "en": "Exit out of consumption",
                        "title": "Exit out of consumption",
                        "condition": "true"
                    },
                    "nbr_of_days_out_stock": {
                        "fr": "Nb jours rupture de stock",
                        "en": "Nbr of days out stock",
                        "title": "Nbr of days out stock",
                        "condition": "true"
                    },
                    "loss_rate_in_vaccins": {
                        "fr": "Taux de perte en vaccins BCG",
                        "en": "Loss rate in vaccins",
                        "title": "Loss rate in vaccins",
                        "condition": "true"
                    }
                }
            },
            "parent": "report_resources"
        },
        "report_resources_18": {
            "title": "8.5 Vaccins and other intrants Management (cont)",
            "fr": "8.5. Gestion des vaccins et autres intrants (suite)",
            "type": "object",
            "manual": "true",
            "properties": {
                "nbr_of_liters_in_stock_at_the_beginning_of_the_month": {
                    "line_number": "1",
                    "fr": "Nb litres en stock début de mois",
                    "en": "Nbr of liters in stock at the beginning of the month",
                    "condition": "true"
                },
                "nbr_of_entry_liters": {
                    "line_number": "2",
                    "fr": "Nb litres entrées",
                    "en": "Nbr of entry liters",
                    "condition": "true"
                },
                "nbr_of_liters_in_stock_at_the_end_of_the_month": {
                    "line_number": "3",
                    "fr": "Nb litres en stock fin du mois",
                    "en": "Nbr of liters in stock at the end of  the month",
                    "condition": "true"
                },
                "nbr_of_days_out_of_stock": {
                    "line_number": "4",
                    "fr": "Nb jrs rupture de stock",
                    "en": "Nbr of days out of stock",
                    "condition": "true"
                },
                "availability_in_vaccins_rate": {
                    "line_number": "5",
                    "line": "singlecell",
                    "fr": "Taux de disponibilité en vaccins = Nb de vaccin disponible pendant un mois X 100 /Total Besoins requis en vaccin pour un mois",
                    "en": "Availability in vaccins rate = nbr of vaccins available during a  month X 100/total needs required in vaccins for a month",
                    "condition": "true"
                }
            },
            "definitions": {
                "columns": {
                    "paraffin": {
                        "fr": "Pétrole",
                        "en": "Paraffin",
                        "title": "Paraffin",
                        "condition": "true"
                    }
                }
            },
            "parent": "report_resources"
        },
        "report_resources_2": {
            "title": "8.2 Personnel Management",
            "fr": "8.2 Gestion du personnel",
            "type": "object",
            "manual": "true",
            "properties": {
                "doctors_for_consultation": {
                    "line_number": "1",
                    "fr": "Médecins (pour consultation)",
                    "en": "Doctors (for consultation)",
                    "condition": "true"
                },
                "nurse_l2": {
                    "line_number": "2",
                    "fr": "Infirmier L2",
                    "en": "Nurse L2",
                    "condition": "true"
                },
                "nurse_a1": {
                    "line_number": "3",
                    "fr": "Infirmier A1",
                    "en": "Nurse A1",
                    "condition": "true"
                },
                "nurse_a2": {
                    "line_number": "4",
                    "fr": "Infirmier A2",
                    "en": "Nurse A2",
                    "condition": "true"
                },
                "mid_wives": {
                    "line_number": "5",
                    "fr": "Accoucheur(se)/Sage-femme",
                    "en": "Mid wives",
                    "condition": "true"
                },
                "nutritionists_a2_a1_l2": {
                    "line_number": "6",
                    "fr": "Nutritionnistes A2 /A1/ L2",
                    "en": "Nutritionists /A2/A1/L2",
                    "condition": "true"
                },
                "lab_technician_a2_a1_l2": {
                    "line_number": "7",
                    "fr": "Techniciens de laboratoire A2 A1 L2",
                    "en": "Lab technician A2 A1 L2",
                    "condition": "true"
                },
                "other_personnel": {
                    "line_number": "8",
                    "fr": "Autre personne",
                    "en": "Other personnel",
                    "condition": "true"
                }
            },
            "definitions": {
                "columns": {
                    "nbr_of_personnel": {
                        "fr": "Nb d'agents",
                        "en": "Nbr of personnel",
                        "title": "Nbr of personnel",
                        "condition": "true"
                    },
                    "nb_of_working_days_provided": {
                        "fr": "Nb jrs de travail prévu",
                        "en": "# of working days provided",
                        "title": "# of working days provided",
                        "condition": "true"
                    },
                    "nb_of_justified_absent_days": {
                        "fr": "Nb jrs d’absence justifié",
                        "en": "# of justified absent days",
                        "title": "# of justified absent days",
                        "condition": "true"
                    },
                    "nb_of_non_justified_absent_days": {
                        "fr": "Nb jrs d’absence non justifié",
                        "en": "# of non justified absent days",
                        "title": "# of non justified absent days",
                        "condition": "true"
                    }
                }
            },
            "parent": "report_resources"
        },
        "report_resources_3": {
            "title": "8.3.1 Monthly Income",
            "fr": "8.3.1 Entrées du mois",
            "type": "object",
            "manual": "true",
            "properties": {
                "sold_of_the_month_previous": {
                    "line_number": "1",
                    "fr": "Solde mois précédent",
                    "en": "Sold of the month Previous",
                    "condition": "true"
                },
                "medicines": {
                    "line_number": "2",
                    "fr": "Médicaments",
                    "en": "Medicines",
                    "condition": "true"
                },
                "laboratory": {
                    "line_number": "3",
                    "fr": "Laboratoire",
                    "en": "Laboratory",
                    "condition": "true"
                },
                "curative_consultation": {
                    "line_number": "4",
                    "fr": "Cons. Curative",
                    "en": "Curative consultation",
                    "condition": "true"
                },
                "anc": {
                    "line_number": "5",
                    "fr": "CPN",
                    "en": "ANC",
                    "condition": "true"
                },
                "psc": {
                    "line_number": "6",
                    "fr": "CPS",
                    "en": "PSC",
                    "condition": "true"
                },
                "deliveries": {
                    "line_number": "7",
                    "fr": "Accouchement",
                    "en": "Deliveries",
                    "condition": "true"
                },
                "small_surgery": {
                    "line_number": "8",
                    "fr": "Petite chirurgie",
                    "en": "Small surgery",
                    "condition": "true"
                },
                "observation": {
                    "line_number": "9",
                    "fr": "Observation",
                    "en": "Observation",
                    "condition": "true"
                },
                "print": {
                    "line_number": "10",
                    "fr": "Imprimés",
                    "en": "Print",
                    "condition": "true"
                },
                "sub_total_local_contribution_a": {
                    "line_number": "11",
                    "fr": "Sous-Total Contributions Locales (a)",
                    "en": "Sub total local contribution (a)",
                    "condition": "true"
                },
                "subvention_and_state_subsides": {
                    "line_number": "12",
                    "fr": "Subvention et subsides Etat",
                    "en": "Subvention and state subsides",
                    "condition": "true"
                },
                "subvention_and_partener_subsides": {
                    "line_number": "13",
                    "fr": "Subvention et subsides Partenaires",
                    "en": "Subvention and partener subsides",
                    "condition": "true"
                },
                "subvention_and_other_subsides": {
                    "line_number": "14",
                    "fr": "Subventions et subsides autres",
                    "en": "Subvention and other subsides",
                    "condition": "true"
                },
                "sub_total_of_external_support_b": {
                    "line_number": "15",
                    "fr": "Sous-Total Appuis Extérieurs(b)",
                    "en": "Sub total of External support (b)",
                    "condition": "true"
                },
                "reimboursement_patients_loan": {
                    "line_number": "16",
                    "fr": "Remb. Crédits patients",
                    "en": "Reimboursement patient's loan",
                    "condition": "true"
                },
                "credit": {
                    "line_number": "17",
                    "fr": "Emprunts",
                    "en": "Credit",
                    "condition": "true"
                },
                "installements": {
                    "line_number": "18",
                    "fr": "Retour Prêts/ avances",
                    "en": "Installements",
                    "condition": "true"
                },
                "sub_total_of_other_business_recoveries_c": {
                    "line_number": "19",
                    "fr": "Sous-Total Recouvrements divers (c )",
                    "en": "Sub total of other business recoveries(c)",
                    "condition": "true"
                },
                "total_a_b_c": {
                    "line_number": "20",
                    "fr": "TOTAL (a+b+c)",
                    "en": "TOTAL (a+b+c)",
                    "condition": "true"
                }
            },
            "definitions": {
                "columns": {
                    "amount": {
                        "fr": "Montant",
                        "en": "Amount",
                        "title": "Amount",
                        "condition": "true"
                    }
                }
            },
            "parent": "report_resources"
        },
        "report_resources_4": {
            "title": "8.3.2 Monthly expenses",
            "fr": "8.3.2 Sorties du mois",
            "type": "object",
            "manual": "true",
            "properties": {
                "salaries_incentives": {
                    "line_number": "1",
                    "fr": "Salaires / Primes",
                    "en": "Salaries/incentives",
                    "condition": "true"
                },
                "personnel_transportation": {
                    "line_number": "2",
                    "fr": "Transports personnel",
                    "en": "Personnel transportation",
                    "condition": "true"
                },
                "other_personnel_expenses": {
                    "line_number": "3",
                    "fr": "Autres dépenses personnel",
                    "en": "Other personnel expenses",
                    "condition": "true"
                },
                "medicines": {
                    "line_number": "4",
                    "fr": "Médicaments",
                    "en": "Medicines",
                    "condition": "true"
                },
                "furniture_and_small_material": {
                    "line_number": "5",
                    "fr": "Fourniture et petit matériel",
                    "en": "Furniture and small material",
                    "condition": "true"
                },
                "outside_services": {
                    "line_number": "6",
                    "fr": "Services extérieurs",
                    "en": "Outside services",
                    "condition": "true"
                },
                "contribution_to_bcz": {
                    "line_number": "7",
                    "fr": "Contribution au BCZ",
                    "en": "Contribution to BCZ",
                    "condition": "true"
                },
                "other_contributions": {
                    "line_number": "8",
                    "fr": "Contribution autres",
                    "en": "Other contributions",
                    "condition": "true"
                },
                "codesa": {
                    "line_number": "9",
                    "fr": "CODESA",
                    "en": "CODESA",
                    "condition": "true"
                },
                "investiment": {
                    "line_number": "10",
                    "fr": "Investissement",
                    "en": "Investiment",
                    "condition": "true"
                },
                "other_expenses": {
                    "line_number": "11",
                    "fr": "Autres dépenses",
                    "en": "Other expenses",
                    "condition": "true"
                },
                "total_fixe_charges": {
                    "line_number": "12",
                    "fr": "Total Charges Fixes (a)",
                    "en": "Total fixe charges",
                    "condition": "true"
                },
                "credit_reimboursement": {
                    "line_number": "13",
                    "fr": "Remboursement dettes",
                    "en": "Credit reimboursement",
                    "condition": "true"
                },
                "loan_reimboursement": {
                    "line_number": "14",
                    "fr": "Remboursement emprunts",
                    "en": "Loan reimboursement",
                    "condition": "true"
                },
                "installement": {
                    "line_number": "15",
                    "fr": "Prêt / avances",
                    "en": "Installement",
                    "condition": "true"
                },
                "total_ponctual_charges": {
                    "line_number": "16",
                    "fr": "Total Charges Ponctuelles",
                    "en": "Total ponctual charges",
                    "condition": "true"
                }
            },
            "definitions": {
                "columns": {
                    "amount": {
                        "fr": "Montant",
                        "en": "Amount",
                        "title": "Amount",
                        "condition": "true"
                    }
                }
            },
            "parent": "report_resources"
        },
        "report_resources_5": {
            "title": "8.3.3 Loans",
            "fr": "8.3.3 Crédits",
            "type": "object",
            "manual": "true",
            "properties": {
                "amount_due_by_a_patient": {
                    "line_number": "1",
                    "fr": "Montant dû par patients",
                    "en": "Amount due by a patient",
                    "condition": "true"
                },
                "amount_due_by_a_personnel_and_indigents": {
                    "line_number": "2",
                    "fr": "Montant dû par personnel et Indigents",
                    "en": "Amount due by a personnel and indigents",
                    "condition": "true"
                },
                "total_due_credits": {
                    "line_number": "3",
                    "fr": "Total dettes dues",
                    "en": "Total due credits",
                    "condition": "true"
                }
            },
            "definitions": {
                "columns": {
                    "previous_monthly_cummulation": {
                        "fr": "Cumul mois précédant",
                        "en": "Previous monthly Cummulation",
                        "title": "Previous monthly Cummulation",
                        "condition": "true"
                    },
                    "monthly_credit_e2": {
                        "fr": "Crédits du mois (E2)",
                        "en": "Monthly Credit (E2)",
                        "title": "Monthly Credit (E2)",
                        "condition": "true"
                    },
                    "reimboursed_credit_e3": {
                        "fr": "Crédits remboursées (E3)",
                        "en": "Reimboursed Credit (E3)",
                        "title": "Reimboursed Credit (E3)",
                        "condition": "true"
                    },
                    "dropped_out_credits": {
                        "fr": "Crédits abandonnées",
                        "en": "Dropped out Credits",
                        "title": "Dropped out Credits",
                        "condition": "true"
                    },
                    "end_of_the_year_cummulation": {
                        "fr": "Cumul fin de mois",
                        "en": "End of the year Cummulation",
                        "title": "End of the year Cummulation",
                        "condition": "true"
                    }
                }
            },
            "parent": "report_resources"
        },
        "report_resources_6": {
            "title": "8.3.4 Debts",
            "fr": "8.3.4 Dettes",
            "type": "object",
            "manual": "true",
            "properties": {
                "amount": {
                    "line_number": "1",
                    "fr": "Montant",
                    "en": "Amount",
                    "condition": "true"
                }
            },
            "definitions": {
                "columns": {
                    "previous_monthly_cummulation": {
                        "fr": "Cumul mois précédant",
                        "en": "Previous monthly Cummulation",
                        "title": "Previous monthly Cummulation",
                        "condition": "true"
                    },
                    "monthly_credit_e2": {
                        "fr": "Crédits du mois (S2)",
                        "en": "Monthly Credit (S2)",
                        "title": "Monthly Credit (S2)",
                        "condition": "true"
                    },
                    "reimboursed_credit_e3": {
                        "fr": "Crédits remboursées (S3)",
                        "en": "Reimboursed Credit (S3)",
                        "title": "Reimboursed Credit (S3)",
                        "condition": "true"
                    },
                    "dropped_out_credits": {
                        "fr": "Crédits abandonnées",
                        "en": "Dropped out Credits",
                        "title": "Dropped out Credits",
                        "condition": "true"
                    },
                    "end_of_the_year_cummulation": {
                        "fr": "Cumul fin de mois",
                        "en": "End of the year Cummulation",
                        "title": "End of the year Cummulation",
                        "condition": "true"
                    }
                }
            },
            "parent": "report_resources"
        },
        "report_resources_7": {
            "title": "8.3.5 Account Management",
            "fr": "8.3.5 Gestion des comptes",
            "type": "object",
            "manual": "true",
            "properties": {
                "previous_month_sold": {
                    "line_number": "1",
                    "fr": "Solde mois précédent",
                    "en": "Previous month sold",
                    "condition": "true"
                },
                "entry_cash_e1": {
                    "line_number": "2",
                    "fr": "Entrée cash (E1)",
                    "en": "Entry cash (E1)",
                    "condition": "true"
                },
                "exit_cash_s1": {
                    "line_number": "3",
                    "fr": "Sortie cash (S1)",
                    "en": "Exit cash (S1)",
                    "condition": "true"
                },
                "stock_to_provision": {
                    "line_number": "4",
                    "fr": "Caisse vers provision",
                    "en": "Stock to provision",
                    "condition": "true"
                },
                "provision_stock": {
                    "line_number": "5",
                    "fr": "Provision vers caisse",
                    "en": "Provision stock",
                    "condition": "true"
                },
                "monthly_end": {
                    "line_number": "6",
                    "fr": "Solde fin de mois",
                    "en": "Monthly end",
                    "condition": "true"
                },
                "total_accounts": {
                    "line_number": "7",
                    "fr": "Total des comptes",
                    "en": "Total accounts",
                    "condition": "true"
                }
            },
            "definitions": {
                "columns": {
                    "stock": {
                        "fr": "Caisse",
                        "en": "Stock",
                        "title": "Stock",
                        "condition": "true"
                    },
                    "provision": {
                        "fr": "Provision",
                        "en": "Provision",
                        "title": "Provision",
                        "condition": "true"
                    }
                }
            },
            "parent": "report_resources"
        },
        "report_resources_8": {
            "title": "8.3.5 Account Management (table 2)",
            "fr": "8.3.5 Gestion des comptes (table 2)",
            "type": "object",
            "manual": "true",
            "properties": {
                "exchange_rate": {
                    "line_number": "1",
                    "fr": "Taux de change",
                    "en": "Exchange rate",
                    "condition": "true"
                }
            },
            "definitions": {
                "columns": {
                    "amount_cdf": {
                        "fr": "Montant CDF",
                        "en": "Amount CDF",
                        "title": "Amount CDF",
                        "condition": "true"
                    }
                }
            },
            "parent": "report_resources"
        },
        "report_resources_9": {
            "title": "8.3.6 Subventions and subsides received values",
            "fr": "8.3.6 Valorisation des subventions et subsides recues",
            "type": "object",
            "manual": "true",
            "properties": {
                "personal_salaries": {
                    "line_number": "1",
                    "fr": "Salaire personnel",
                    "en": "Personal Salaries",
                    "condition": "true"
                },
                "personal_incentives": {
                    "line_number": "2",
                    "fr": "Primes personnel",
                    "en": "Personal  incentives",
                    "condition": "true"
                },
                "personnel_de_la_structure_d_appui": {
                    "line_number": "3",
                    "fr": "Personnel de la structure d’appui",
                    "en": "Personnel de la structure d'appui",
                    "condition": "true"
                },
                "infrastructure_construcution": {
                    "line_number": "4",
                    "fr": "Infrastructure - Construction",
                    "en": "Infrastructure - Construcution",
                    "condition": "true"
                },
                "infrastructure_rehabiliation": {
                    "line_number": "5",
                    "fr": "Infrastructure - Réhabilitation",
                    "en": "Infrastructure - Rehabiliation",
                    "condition": "true"
                },
                "subvention_material_vehicule": {
                    "line_number": "6",
                    "fr": "Subvention Matériel - Vehicule",
                    "en": "Subvention material-vehicule",
                    "condition": "true"
                },
                "material_medical_equipments": {
                    "line_number": "7",
                    "fr": "Matériel - Equipement médicaux",
                    "en": "Material - medical equipments",
                    "condition": "true"
                },
                "material_other_equipments": {
                    "line_number": "8",
                    "fr": "Matériel - Autre équipement",
                    "en": "Material - other equipments",
                    "condition": "true"
                },
                "material_medicines": {
                    "line_number": "9",
                    "fr": "Matériel - Médicaments",
                    "en": "Material - Medicines",
                    "condition": "true"
                },
                "training_activities": {
                    "line_number": "10",
                    "fr": "Activités des Formations",
                    "en": "Training activities",
                    "condition": "true"
                },
                "other_activities": {
                    "line_number": "11",
                    "fr": "Autres Activites",
                    "en": "Other activities",
                    "condition": "true"
                },
                "routine_care_activities": {
                    "line_number": "12",
                    "fr": "Activités de soins - Routine",
                    "en": "Routine care activities",
                    "condition": "true"
                },
                "emergency_care_activities": {
                    "line_number": "13",
                    "fr": "Activités de soins - Urgence",
                    "en": "Emergency care activities",
                    "condition": "true"
                }
            },
            "definitions": {
                "columns": {
                    "state": {
                        "fr": "Etat",
                        "en": "State",
                        "title": "State",
                        "condition": "true"
                    },
                    "parteners": {
                        "fr": "Partenaire",
                        "en": "Parterners",
                        "title": "Parterners",
                        "condition": "true"
                    },
                    "others": {
                        "fr": "Autre",
                        "en": "others",
                        "title": "Others",
                        "condition": "true"
                    },
                    "total": {
                        "fr": "Total",
                        "en": "Total",
                        "title": "Total",
                        "condition": "true"
                    }
                }
            },
            "parent": "report_resources"
        },
        "report_screening_1": {
            "title": "2.1 Screening",
            "en": "2.1 Screening",
            "fr": "2.1 Consultations",
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
                        "title": "AS",
                        "condition": "patient.current_age_years < 5 && area_zone === 'ha'"
                    },
                    "under_5_years_has": {
                        "fr": "HAS",
                        "en": "HAS",
                        "title": "HAS",
                        "condition": "patient.current_age_years < 5 && area_zone === 'oa'"
                    },
                    "under_5_years_hz": {
                        "fr": "HZ",
                        "en": "HZ",
                        "title": "HZ",
                        "condition": "patient.current_age_years < 5 && area_zone === 'oz'"
                    },
                    "above_5_years_as": {
                        "fr": "AS",
                        "en": "AS",
                        "title": "AS",
                        "condition": "patient.current_age_years > 5 && area_zone === 'ha'"
                    },
                    "above_5_years_has": {
                        "fr": "HAS",
                        "en": "HAS",
                        "title": "HAS",
                        "condition": "patient.current_age_years > 5 && area_zone === 'oa'"
                    },
                    "above_5_years_hz": {
                        "fr": "HZ",
                        "en": "HZ",
                        "title": "HZ",
                        "condition": "patient.current_age_years > 5 && area_zone === 'oz'"
                    },
                    "total": {
                        "fr": "Total",
                        "en": "Total",
                        "title": "Total",
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
            "title": "",
            "type": "object",
            "properties": {
                "including_new_patients": {
                    "line_number": "1",
                    "fr": "Dont nouveaux patients",
                    "en": "Including New Patients",
                    "condition": "(patient.current_created_months == 0)"
                },
                "including_night_health_attendants": {
                    "line_number": "2",
                    "fr": "Dont adhérents de mut. de santé",
                    "en": "including night health attendants",
                    "condition": "(date_created.split('T')[1].split(':')[0] < 9) || (date_created.split('T')[1].split(':')[0] > 17)"
                },
                "old_cases": {
                    "line_number": "3",
                    "fr": "Anciens cas",
                    "en": "Old cases",
                    "condition": "(follow_up !== undefined)"
                },
                "including_oldcases_contr_refered": {
                    "line_number": "4",
                    "fr": "Dont anciens cas contre-référés",
                    "en": "Including old cases counter-referred",
                    "condition": "(counter_referred !== undefined)"
                }
            },
            "definitions": {
                "columns": {
                    "as": {
                        "fr": "AS",
                        "en": "AS",
                        "title": "AS",
                        "condition": "area_zone === 'ha'"
                    },
                    "has": {
                        "fr": "HAS",
                        "en": "HAS",
                        "title": "HAS",
                        "condition": "area_zone === 'oa'"
                    },
                    "hz": {
                        "fr": "HZ",
                        "en": "HZ",
                        "title": "HZ",
                        "condition": "area_zone === 'oz'"
                    },
                    "total": {
                        "fr": "Total",
                        "en": "Total",
                        "title": "Total",
                        "condition": "true"
                    }
                }
            },
            "parent": "report_screening"
        },
        "report_screening_3": {
            "title": "",
            "type": "object",
            "properties": {
                "refered_to_the_general_hospital": {
                    "line_number": "1",
                    "fr": "Référés vers HGR",
                    "en": "Refered to the General Hospital",
                    "condition": "subforms.* && subforms.*.referred_to_location === 'general_hospital'"
                },
                "refered_by_community_health_workers": {
                    "line_number": "2",
                    "fr": "Référés par les RECO",
                    "en": "Refered by Community Health Workers",
                    "condition": "subforms.* && subforms.*.referred_to_location === 'community_health_workers'"
                },
                "new_feminin_cases": {
                    "line_number": "3",
                    "fr": "Nouveaux cas féminins",
                    "en": "New feminin cases",
                    "condition": "patient.gender === 'female'"
                },
                "including_pw": {
                    "line_number": "4",
                    "fr": "Dont Femmes enceintes",
                    "en": "Including PW",
                    "condition": "(subforms.hiv_counseling_mother || subforms.anc_first_visit || subforms.anc_followup || subforms.hiv_pregnancy_clinic) || (subforms.immunization && subforms.immunization.pregnant === 'yes') || (subforms.reproductive_counseling && subforms.reproductive_counseling.pregnant === 'yes')"
                },
                "indigents": {
                    "line_number": "5",
                    "fr": "Indigents",
                    "en": "Indigents",
                    "condition": "indigent === 'yes'"
                },
                "follow_ups_in_observation": {
                    "line_number": "6",
                    "fr": "Suivi en observation",
                    "en": "Follow ups in observation",
                    "condition": "subforms.* && subforms.*.follow_up_recommended === 'yes'"
                },
                "children_under_5_deaths": {
                    "line_number": "7",
                    "fr": "Décés enfants <5 ans",
                    "en": "Children under 5 deaths",
                    "condition": "((patient.current_age_years < 5) && ( subforms.disease_diagnosis && subforms.disease_diagnosis.disease_mortality === 'yes')) || (subforms.postnatal && subforms.postnatal.child_diagnoses === 'neonatal_death')"
                }
            },
            "definitions": {
                "columns": {
                    "number": {
                        "fr": "Nombre",
                        "en": "Number",
                        "title": "Number",
                        "condition": "true"
                    }
                }
            },
            "parent": "report_screening"
        },
        "report_screening_4": {
            "title": "",
            "type": "object",
            "properties": {
                "targeted_population": {
                    "line_number": "1",
                    "fr": "Population cible = population du mois",
                    "en": "Targeted population = Monthly population",
                    "condition": "false"
                },
                "total_consultation": {
                    "line_number": "2",
                    "fr": "Total Consultations (c+d)",
                    "en": "Total consultation (c+d)",
                    "condition": "false"
                },
                "curatif_used_rate": {
                    "line_number": "3",
                    "fr": "Taux d’utilisation du curatif = Total Nouveaux Cas AS (a+b) x 100 / pop du mois",
                    "en": "Curatif used rate = total new case AS(a+b)X100/monthly population",
                    "condition": "false"
                }
            },
            "definitions": {
                "columns": {
                    "number": {
                        "fr": "Nombre",
                        "en": "Number",
                        "title": "Number",
                        "condition": "true"
                    }
                }
            },
            "parent": "report_screening",
            "overrides": {
                "predefined": [
                    {
                        "row": "targeted_population",
                        "col": "number",
                        "value": ""
                    },
                    {
                        "row": "total_consultation",
                        "col": "number",
                        "value": ""
                    },
                    {
                        "row": "curatif_used_rate",
                        "col": "number",
                        "value": ""
                    }
                ]
            }
        },
        "report_summary": {
            "title": "10. Summary  of the use of serivces",
            "fr": "10.Synthese de l'Utilisation des Services",
            "type": "object",
            "manual": "true",
            "properties": {
                "news_curative_cases_all_new_curative_cases": {
                    "line_number": "1",
                    "fr": "Nouveaux cas curatif (Tous les NC curatifs)",
                    "en": "News curative cases (all new curative cases)",
                    "condition": "true"
                },
                "new_pmtct_cases_anc_cpon_fp": {
                    "line_number": "2",
                    "fr": "Nouveaux cas prévention mère (CPN,CPON,PF)",
                    "en": "New PMTCT cases (ANC, CPON FP)",
                    "condition": "true"
                },
                "new_child_prevention_cases_psc1": {
                    "line_number": "3",
                    "fr": "Nouveaux cas prévention enfant (CPS1",
                    "en": "New Child prevention cases (PSC1)",
                    "condition": "true"
                },
                "total_new_cases": {
                    "line_number": "4",
                    "fr": "Total des Nouveaux Cas",
                    "en": "Total new cases",
                    "condition": "true"
                },
                "use_of_service_rate_at_the_hc_total": {
                    "line_number": "5",
                    "line": "singlecell",
                    "fr": "Taux d’utilisation des services au CS= Total Nouveaux Cas reçus au CS X100/Population",
                    "en": "Use of service rate at the HC Total of new cases received at the HC X100/population",
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
                        "fr": "Total",
                        "en": "Total",
                        "title": "Total",
                        "condition": "true"
                    }
                }
            }
        },
        "report_supervision_1": {
            "title": "7.1 Realised supervisions by the health center and the RECO in the community",
            "fr": "7.1. Supervisions réalisées par le Centre de Santé et RECOs dans la communauté",
            "type": "object",
            "manual": "true",
            "properties": {
                "nbr_of_visits_from_the_health_center_team_to_reco": {
                    "line_number": "1",
                    "fr": "Nb Visites de l’équipe du CS auprès de relais communautaires",
                    "en": "Nbr of visits from the health center team to RECO",
                    "condition": "true"
                },
                "nbr_of_visits_of_reco_to_the_community_including_family_planning": {
                    "line_number": "2",
                    "fr": "Nb Visites des RECO vers la communauté dont Counsel ing PF",
                    "en": "Nbr of visits of RECO to the community including Family Planning",
                    "condition": "true"
                },
                "nbr_of_visits_of_reco_to_the_community_for_other_problems": {
                    "line_number": "3",
                    "fr": "Nb Visites des RECO vers la communauté dont pour autres problèmes de santé",
                    "en": "Nbr of visits of RECO to the community for  other problems",
                    "condition": "true"
                },
                "nbr_of_visits_of_reco_to_the_community_for_family_planning_material_distribution": {
                    "line_number": "4",
                    "fr": "Nb Visites des RECO vers la communauté dont distribution des intrants PF",
                    "en": "Nbr of visits of RECO to the community for family planning material distribution",
                    "condition": "true"
                },
                "nbr_of_visits_of_reco_to_the_community_for_other_intrants_distribution": {
                    "line_number": "5",
                    "fr": "Nb Visites des RECO vers la communauté dont distribution autres intrants",
                    "en": "Nbr of visits of RECo to the community for other intrants distribution",
                    "condition": "true"
                }
            },
            "definitions": {
                "columns": {
                    "program": {
                        "fr": "Program",
                        "en": "Program",
                        "title": "Program",
                        "condition": "true"
                    },
                    "realised": {
                        "fr": "Réalisées",
                        "en": "Realised",
                        "title": "Realised",
                        "condition": "true"
                    }
                }
            },
            "parent": "report_supervision"
        },
        "report_supervision_2": {
            "title": "7.2 Supervisions realies by the main nurses and/or the ECZS to other structures",
            "fr": "7.2. Supervisions réalisées par l’IT et/ou l’ECZS vers les autres structures",
            "type": "object",
            "manual": "true",
            "properties": {
                "visited_strucutres": {
                    "line_number": "1",
                    "fr": "Structures visitées",
                    "en": "Visited strucutres",
                    "condition": "true"
                },
                "programed_supervision_visits": {
                    "line_number": "2",
                    "fr": "Visites de supervisions programmées",
                    "en": "Programed supervision visits",
                    "condition": "true"
                },
                "realised_supervision_visits": {
                    "line_number": "3",
                    "fr": "Visites de supervisions réalisées",
                    "en": "Realised supervision visits",
                    "condition": "true"
                },
                "visits_of_supervision_received": {
                    "line_number": "4",
                    "fr": "Visites de supervisions reçues",
                    "en": "Visits of supervision received",
                    "condition": "true"
                },
                "recipients_who_beneficiated_with_one_supervision": {
                    "line_number": "5",
                    "fr": "Prestataires ayant bénéficié d'une supervision",
                    "en": "Recipients who beneficiated with one supervision",
                    "condition": "true"
                },
                "written_retro_information_received": {
                    "line_number": "6",
                    "fr": "Rétro-informations écrites reçues",
                    "en": "Written retro-information received",
                    "condition": "true"
                },
                "accoplished_visits_rate_from_the_hc_to_the_reco": {
                    "line_number": "7",
                    "line": "singlecell",
                    "fr": "Taux de réalisation des visites du CS vers le RC = Nb de visites réalisées X 100 / Nb de visites programmées par le CS",
                    "en": "Accoplished visits rate from the HC to the RECO = Nbr of visits realized X 100/nbr of programed visits to the HC",
                    "condition": "true"
                },
                "accomplished_visits_rate_from_the_reco_to_the_community": {
                    "line_number": "8",
                    "line": "singlecell",
                    "fr": "Taux de réalisation des visites des RC dans la communauté = Nb de visites réalisées X 100/ Nb de visites programmées par le RC",
                    "en": "Accomplished visits rate from the RECO to the community =Nbr of visits realized X100/Nbr of visits programed the RECO",
                    "condition": "true"
                }
            },
            "definitions": {
                "columns": {
                    "main_nurse": {
                        "fr": "IT",
                        "en": "Main Nurse",
                        "": "Main Nurse",
                        "condition": "true"
                    },
                    "ecz": {
                        "fr": "ECZ",
                        "en": "ECZ",
                        "title": "ECZ",
                        "condition": "true"
                    },
                    "combined_team": {
                        "fr": "Equipe Conjointe",
                        "en": "Combined team",
                        "title": "Combined",
                        "condition": "true"
                    },
                    "others": {
                        "fr": "Autres",
                        "en": "Others",
                        "title": "Others",
                        "condition": "true"
                    },
                    "total": {
                        "fr": "Total",
                        "en": "Total",
                        "title": "Total",
                        "condition": "true"
                    }
                }
            },
            "parent": "report_supervision"
        },
        "report_svv": {
            "title": "Monthly Canvas - 2.2 Consultation of sexual violence survivors",
            "en": "Monthly Canvas - 2.2 Consultation of sexual violence survivors",
            "fr": "Consultations survivants des violences sexuelles",
            "type": "object",
            "properties": {
                "new_cases_and_svs": {
                    "line_number": "1",
                    "fr": "Nouveaux cas SVS",
                    "en": "New cases and SVS",
                    "condition": "(subforms.disease_diagnosis && subforms.disease_diagnosis.sexual_violence === 'yes') || (subforms.reproductive_counseling && subforms.reproductive_counseling.sexual_violence === 'yes') || (subforms.bodily_injury && subforms.bodily_injury.sexual_violence === 'yes') || (subforms.ctc_record && subforms.ctc_record.sexual_violence === 'yes') || (subforms.sexual_violence_record) && (!(follow_up === 'yes' && subforms.sexual_violence_record))"
                },
                "including_those_seen_within_72 hours": {
                    "line_number": "1a",
                    "fr": "Dont vu dans 72 heures",
                    "en": "Including those seen within 72 hours",
                    "condition": "(subforms.sexual_violence_record && subforms.sexual_violence_record.current_incident_days <= 3)"
                },
                "including_feminines": {
                    "line_number": "1b",
                    "fr": "Dont féminins",
                    "en": "Including feminines",
                    "condition": "patient.gender === 'female' && (subforms.disease_diagnosis && subforms.disease_diagnosis.sexual_violence === 'yes') || (subforms.reproductive_counseling && subforms.reproductive_counseling.sexual_violence === 'yes') || (subforms.bodily_injury && subforms.bodily_injury.sexual_violence === 'yes') || (subforms.ctc_record && subforms.ctc_record.sexual_violence === 'yes') || (subforms.sexual_violence_record) && (!(follow_up === 'yes' && subforms.sexual_violence_record))"
                },
                "old_cases_svs": {
                    "line_number": "2",
                    "fr": "Anciens cas SVS",
                    "en": "Old cases SVS",
                    "condition": "(follow_up === 'yes' && subforms.sexual_violence_record)"
                },
                "including_those_contre_refered": {
                    "line_number": "2a",
                    "fr": "Dont contre-référés",
                    "en": "Including those contre-refered",
                    "condition": "counter_referred && subforms.sexual_violence_record"
                },
                "svs_refered_to_psycho_social": {
                    "line_number": "3",
                    "fr": "SVS Référés psycho-social",
                    "en": "SVS refered to psycho-social",
                    "condition": "subforms.sexual_violence_record && subforms.sexual_violence_record.referred_to_location === 'psycho_social'"
                },
                "svs_refered_to_justice": {
                    "line_number": "4",
                    "fr": "SVS Référés juridique",
                    "en": "SVS refered to justice",
                    "condition": "subforms.sexual_violence_record && subforms.sexual_violence_record.referred_to_location === 'judicial'"
                },
                "svs_refered_to_socio_economic_reintegration": {
                    "line_number": "5",
                    "fr": "SVS Référés à la réinsertion socio-économique",
                    "en": "SVS refered to socio economic reintegration",
                    "condition": "subforms.sexual_violence_record && subforms.sexual_violence_record.referred_to_location === 'socio_economic'"
                },
                "svs_refered_to_the_general_hospital": {
                    "line_number": "6",
                    "fr": "SVS Référés vers HGR",
                    "en": "SVS refered to the General Hospital",
                    "condition": "subforms.sexual_violence_record && subforms.sexual_violence_record.referred_to_location === 'general_hospital'"
                },
                "svs_who_have_received_medical_pec": {
                    "line_number": "7",
                    "fr": "SVS ayant recu une PEC médicale (Méd ou Inf)",
                    "en": "SVS who have received medical PEC",
                    "condition": "(subforms.disease_diagnosis && subforms.disease_diagnosis.sexual_violence === 'yes' && subforms.disease_diagnosis.admission === 'yes') || (subforms.reproductive_counseling && subforms.reproductive_counseling.sexual_violence === 'yes' && subforms.reproductive_counseling.admission === 'yes') || (subforms.bodily_injury && subforms.bodily_injury.sexual_violence === 'yes' && subforms.bodily_injury.admission === 'yes') || (subforms.ctc_record && subforms.ctc_record.sexual_violence === 'yes' && subforms.ctc_record.admission === 'yes')"
                },
                "svs_who_have_received_pep_kit_within_72_hours": {
                    "line_number": "8",
                    "fr": "SVS ayant recu le kit PEP – 72 h",
                    "en": "SVS who have received PEP kit within 72 hours",
                    "condition": "subforms.sexual_violence_record && subforms.sexual_violence_record.received_pep_kit_72h === 'yes'"
                },
                "svs_who_have_received_pep_kit_after_72_hours": {
                    "line_number": "9",
                    "fr": "SVS ayant recu le kit PEP après 72h",
                    "en": "SVS who have received PEP kit after 72 hours",
                    "condition": "subforms.sexual_violence_record && subforms.sexual_violence_record.received_pep_kit === 'yes' && subforms.sexual_violence_record.received_pep_kit_72h === 'no'"
                },
                "svs_who_have_received_emergency_contraceptive": {
                    "line_number": "10",
                    "fr": "SVS ayant recu la Contraception d'Urgence",
                    "en": "SVS who have received emergency contraceptive",
                    "condition": "subforms.sexual_violence_record && subforms.sexual_violence_record.received_emergency_contraception === 'yes'"
                },
                "svs_hiv_tested": {
                    "line_number": "11",
                    "fr": "SVS testés pour le VIH",
                    "en": "SVS HIV tested",
                    "condition": "subforms.sexual_violence_record && subforms.sexual_violence_record.hiv_tested === 'yes'"
                },
                "svs_hiv_plus_tested": {
                    "line_number": "12",
                    "fr": "SVS testés VIH+",
                    "en": "SVS HIV + tested",
                    "condition": "subforms.sexual_violence_record && subforms.sexual_violence_record.hiv_positive_test === 'yes'"
                },
                "urogenital_fistula_post_violence_dignostic": {
                    "line_number": "13",
                    "fr": "Fistules urogénitales post viol diagnostic",
                    "en": "Urogenital fistula post rape dignostic",
                    "condition": "subforms.sexual_violence_record && subforms.sexual_violence_record.urogenital_fistula_post_rape === 'yes'"
                },
                "refered_urogenital_fistula_post_violence_dignostic": {
                    "line_number": "14",
                    "fr": "Fistules urogénitales post viol diagnost. et référées",
                    "en": "Refered Urogenital fistula post violence dignostic",
                    "condition": "(subforms.sexual_violence_record && subforms.sexual_violence_record.urogenital_fistula_post_rape === 'yes') && (subforms.sexual_violence_record.referred_to_location === 'general_hospital')"
                },
                "total_consultation": {
                    "line_number": "15",
                    "line": "singlecell",
                    "fr": "Total Consultations SVS (a+b)",
                    "en": "Total consultation SVS (a+b)",
                    "condition": "((subforms.disease_diagnosis && subforms.disease_diagnosis.sexual_violence === 'yes') || (subforms.reproductive_counseling && subforms.reproductive_counseling.sexual_violence === 'yes') || (subforms.bodily_injury && subforms.bodily_injury.sexual_violence === 'yes') || (subforms.ctc_record && subforms.ctc_record.sexual_violence === 'yes') || (subforms.sexual_violence_record)) || (follow_up === 'yes' && subforms.sexual_violence_record)"
                },
                "rate_new_cases_72h": {
                    "line_number": "16",
                    "line": "singlecell",
                    "fr": "% de SVS vu dans – 72h = Total Nouveaux Cas vus dans – 72h x 100 /Tot Nouveaux Cas SVS",
                    "en": "Rate of SVS seen within 72 hrs  = Total New cases seen X 100/total SVS NC",
                    "condition": "false"
                }
            },
            "definitions": {
                "columns": {
                    "total": {
                        "fr": "Nombre",
                        "en": "Number",
                        "title": "Number",
                        "condition": "true"
                    }
                }
            },
            "overrides": {
                "predefined": [
                    {
                        "row": "rate_new_cases_72h",
                        "col": "number",
                        "value": ""
                    }
                ]
            }
        },
        "report_vaccination": {
            "title": "Form 1: Vaccination Report",
            "type": "object",
            "manual": "true",
            "properties": {
                "fix": {
                    "line_number": "1",
                    "fr": "Fixe",
                    "en": "Fix",
                    "condition": "true"
                },
                "advanced": {
                    "line_number": "2",
                    "fr": "Advancee",
                    "en": "Advanced",
                    "condition": "true"
                },
                "mobile": {
                    "line_number": "3",
                    "fr": "Mobile",
                    "en": "Mobile",
                    "condition": "true"
                },
                "total": {
                    "line_number": "4",
                    "fr": "Total",
                    "en": "Total",
                    "condition": "true"
                },
                "determine_the_number_of_children": {
                    "line_number": "5",
                    "line": "singlecell",
                    "fr": "1. Precisez le nombre d'enfantslfernmes enceintea recuperes par les RC: BCG:/……………../;  DTC-HepB-Hib3:/………../OVP3:/…………/; PNEUMO3:/………./;VAR:/………./;VAA:/……;/…….VAT2+/………….",
                    "en": "1. Determine the  number of children/PW recovered by CHW: BCG:/……………../;  DTC-HepB-Hib3:/………../OVP3:/…………/; PNEUMO3:/………./;VAR:/………./;VAA:/……;/…….VAT2+/………….",
                    "condition": "true"
                },
                "fetch_the_information_on_all": {
                    "line_number": "6",
                    "line": "singlecell",
                    "fr": "2. Puisez rinformation sur toutes les fiches de pointage des postes de vaccination se trouvant dans faire de sante",
                    "en": "2. Fetch the information on all the scorecards of vaccination post  located in the area of ​​health.",
                    "condition": "true"
                }
            },
            "definitions": {
                "columns": {
                    "vat_to_pregnant_women_1_dose": {
                        "fr": "VAT AUx Femmes ENCEINTES 1 dose",
                        "en": "VAT TO Pregnant women 1st dose",
                        "title": "VAT TO Pregnant women 1st dose",
                        "condition": "true"
                    },
                    "vat_to_pregnant_women_2_dose": {
                        "fr": "VAT AUx Femmes ENCEINTES 2 dose",
                        "en": "VAT TO Pregnant women 2nd dose",
                        "title": "VAT TO Pregnant women 2nd dose",
                        "condition": "true"
                    },
                    "vat_to_pregnant_women_3_dose": {
                        "fr": "VAT AUx Femmes ENCEINTES 3 dose",
                        "en": "VAT TO Pregnant women 3rd dose",
                        "title": "VAT TO Pregnant women 3rd dose",
                        "condition": "true"
                    },
                    "vat_to_pregnant_women_4_dose": {
                        "fr": "VAT AUx Femmes ENCEINTES 4 dose",
                        "en": "VAT TO Pregnant women 4th dose",
                        "title": "VAT TO Pregnant women 4th dose",
                        "condition": "true"
                    },
                    "vat_to_pregnant_women_5_dose": {
                        "fr": "VAT AUx Femmes ENCEINTES 5 dose",
                        "en": "VAT TO Pregnant women 5th dose",
                        "title": "VAT TO Pregnant women 5th dose",
                        "condition": "true"
                    },
                    "bcg_0_11_months": {
                        "fr": "BCG 0-11 Mois",
                        "en": "BCG 0-11 Mths",
                        "title": "BCG 0-11 Mths",
                        "condition": "true"
                    },
                    "bcg_12_23_months": {
                        "fr": "BCG 12-23 Mois",
                        "en": "BCG 12-23 Mths",
                        "title": "BCG 12-23 Mths",
                        "condition": "true"
                    },
                    "ovp_0_11_months_1_dose": {
                        "fr": "VPO 0-11 mois 1 dose",
                        "en": "OVP 0-11 Months 1st dose",
                        "title": "OVP 0-11 Months 1st dose",
                        "condition": "true"
                    },
                    "ovp_0_11_months_2_dose": {
                        "fr": "VPO 0-11 mois 2 dose",
                        "en": "OVP 0-11 Months 2nd dose",
                        "title": "OVP 0-11 Months 2nd dose",
                        "condition": "true"
                    },
                    "ovp_0_11_months_3_dose": {
                        "fr": "VPO 0-11 mois 3 dose",
                        "en": "OVP 0-11 Months 3rd dose",
                        "title": "OVP 0-11 Months 3rd dose",
                        "condition": "true"
                    },
                    "ovp_12_23_months_1_dose": {
                        "fr": "VPO 12-23 mois 1 dose",
                        "en": "OVP 12-23 Months 1st dose",
                        "title": "OVP 12-23 Months 1st dose",
                        "condition": "true"
                    },
                    "ovp_12_23_months_2_dose": {
                        "fr": "VPO 12-23 mois 2 dose",
                        "en": "OVP 12-23 Months 2nd dose",
                        "title": "OVP 12-23 Months 2nd dose",
                        "condition": "true"
                    },
                    "ovp_12_23_months_3_dose": {
                        "fr": "VPO 12-23 mois 3 dose",
                        "en": "OVP 12-23 Months 3rd dose",
                        "title": "OVP 12-23 Months 3rd dose",
                        "condition": "true"
                    },
                    "dtc_hepb_hib_1_dose": {
                        "fr": "DTC-HepB-Hib 1 dose",
                        "en": "DTC-HepB-Hib 1st dose",
                        "title": "DTC-HepB-Hib 1st dose",
                        "condition": "true"
                    },
                    "dtc_hepb_hib_2_dose": {
                        "fr": "DTC-HepB-Hib 2 dose",
                        "en": "DTC-HepB-Hib 2nd dose",
                        "title": "DTC-HepB-Hib 2nd dose",
                        "condition": "true"
                    },
                    "dtc_hepb_hib_3_dose": {
                        "fr": "DTC-HepB-Hib 3 dose",
                        "en": "DTC-HepB-Hib 3rd dose",
                        "title": "DTC-HepB-Hib 3rd dose",
                        "condition": "true"
                    },
                    "dtc_hepb_hib_12_23_mois_1_dose": {
                        "fr": "DTC-HepB-Hib 12-23 mois 1 dose",
                        "en": "DTC-HepB-Hib 12-23 Months 1st dose",
                        "title": "DTC-HepB-Hib 12-23 Months 1st dose",
                        "condition": "true"
                    },
                    "dtc_hepb_hib_12_23_mois_2_dose": {
                        "fr": "DTC-HepB-Hib 12-23 mois 2 dose",
                        "en": "DTC-HepB-Hib 12-23 Months 2nd dose",
                        "title": "DTC-HepB-Hib 12-23 Months 2nd dose",
                        "condition": "true"
                    },
                    "dtc_hepb_hib_12_23_mois_3_dose": {
                        "fr": "DTC-HepB-Hib 12-23 mois 3 dose",
                        "en": "DTC-HepB-Hib 12-23 Months 3rd dose",
                        "title": "DTC-HepB-Hib 12-23 Months 3rd dose",
                        "condition": "true"
                    },
                    "pneumo_0_11_months_1_dose": {
                        "fr": "PNEUMO 0-11 mois 1 dose",
                        "en": "PNEUMO 0-11 Months 1st dose",
                        "title": "PNEUMO 0-11 Months 1st dose",
                        "condition": "true"
                    },
                    "pneumo_0_11_months_2_dose": {
                        "fr": "PNEUMO 0-11 mois 2 dose",
                        "en": "PNEUMO 0-11 Months 2nd dose",
                        "title": "PNEUMO 0-11 Months 2nd dose",
                        "condition": "true"
                    },
                    "pneumo_0_11_months_3_dose": {
                        "fr": "PNEUMO 0-11 mois 3 dose",
                        "en": "PNEUMO 0-11 Months 3rd dose",
                        "title": "PNEUMO 0-11 Months 3rd dose",
                        "condition": "true"
                    },
                    "pneumo_12_23_months_1_dose": {
                        "fr": "PNEUMO 12-23 mois 1 dose",
                        "en": "PNEUMO 12-23 Months 1st dose",
                        "title": "PNEUMO 12-23 Months 1st dose",
                        "condition": "true"
                    },
                    "pneumo_12_23_months_2_dose": {
                        "fr": "PNEUMO 12-23 mois 2 dose",
                        "en": "PNEUMO 12-23 Months 2nd dose",
                        "title": "PNEUMO 12-23 Months 2nd dose",
                        "condition": "true"
                    },
                    "pneumo_12_23_months_3_dose": {
                        "fr": "PNEUMO 12-23 mois 3 dose",
                        "en": "PNEUMO 12-23 Months 3rd dose",
                        "title": "PNEUMO 12-23 Months 3rd dose",
                        "condition": "true"
                    },
                    "var_09_11_months": {
                        "fr": "VAR 12-23 mois",
                        "en": "VAR 12-23 Months",
                        "title": "VAR 12-23 Months",
                        "condition": "true"
                    },
                    "vaa_09_11_month": {
                        "fr": "VAA 09-11 mois",
                        "en": "VAA 09-11 Months",
                        "title": "VAA 09-11 Months",
                        "condition": "true"
                    },
                    "vaa_12_23_months": {
                        "fr": "VAA 12-23 mois",
                        "en": "VAA 12-23 Months",
                        "title": "VAA 12-23 Months",
                        "condition": "true"
                    }
                }
            }
        },
        "report_vaccinationintrants": {
            "title": "Form 1: Vaccines/Intrants management",
            "type": "object",
            "manual": "true",
            "properties": {
                "bcg": {
                    "line_number": "1",
                    "fr": "BCG",
                    "en": "BCG",
                    "condition": "true"
                },
                "bcg_diluant": {
                    "line_number": "2",
                    "fr": "Diluant BCG ",
                    "en": "BCG Diluant",
                    "condition": "true"
                },
                "dtc_hepb_hib": {
                    "line_number": "3",
                    "fr": "DTC-HepB-Hib",
                    "en": "DTC-HepB-Hib",
                    "condition": "true"
                },
                "pneumo": {
                    "line_number": "4",
                    "fr": "PNEUMO",
                    "en": "PNEUMO",
                    "condition": "true"
                },
                "vpo": {
                    "line_number": "5",
                    "fr": "VPO",
                    "en": "VPO",
                    "condition": "true"
                },
                "var": {
                    "line_number": "6",
                    "fr": "VAR",
                    "en": "VAR",
                    "condition": "true"
                },
                "var_diluant": {
                    "line_number": "7",
                    "fr": "Diluant VAR",
                    "en": "VAR Diluant",
                    "condition": "true"
                },
                "vaa": {
                    "line_number": "8",
                    "fr": "VAA",
                    "en": "VAA",
                    "condition": "true"
                },
                "vaa_diluant": {
                    "line_number": "9",
                    "fr": "Diluant VAA",
                    "en": "VAA Diluant",
                    "condition": "true"
                },
                "vat": {
                    "line_number": "10",
                    "fr": "VAT",
                    "en": "VAT",
                    "condition": "true"
                },
                "sab_bcg": {
                    "line_number": "11",
                    "fr": "SAB BCG",
                    "en": "SAB BCG",
                    "condition": "true"
                },
                "sab": {
                    "line_number": "12",
                    "fr": "SAB",
                    "en": "SAB",
                    "condition": "true"
                },
                "dilution_2ml": {
                    "line_number": "13",
                    "fr": "Dilution 2m1",
                    "en": "Dilution2ml",
                    "condition": "true"
                },
                "dilution_5ml": {
                    "line_number": "14",
                    "fr": "Dilution 5m1",
                    "en": "Dilution5ml",
                    "condition": "true"
                },
                "receptacles": {
                    "line_number": "15",
                    "fr": "Receptacles",
                    "en": "Receptacles",
                    "condition": "true"
                },
                "paraffin": {
                    "line_number": "16",
                    "fr": "Petrole",
                    "en": "Paraffin",
                    "condition": "true"
                },
                "doses_administered": {
                    "line_number": "17",
                    "line": "singlecell",
                    "fr": "1. Doses administrees = Nombre totald'enfants de moins d'un an vaccines",
                    "en": "1.Doses administered= Total number of children below one year who are vaccinated",
                    "condition": "true"
                },
                "used_doses": {
                    "line_number": "18",
                    "line": "singlecell",
                    "fr": "2, Doses utilisees = (doses au debut du mois + doses revues au cours du mois) - doses a la fin du mois",
                    "en": "2. Used doses: (doses at the bigining of the month+ doses received during the month) - doses at the end of the month",
                    "condition": "true"
                },
                "lost_doses": {
                    "line_number": "19",
                    "line": "singlecell",
                    "fr": "3, Doses perdues = (doses utilisees + flacons entames + doses utilisees des enfants de plus d'un an + doses flacons vires + doses flacons perimes + doses flacons casses) - doses administrees aux enfants de moins d'un an",
                    "en": "3. Lost doses = (used doses+ started vials+ doses used for children above one year+ collected expired vials pus  doses broken vials) minus doses administered to children bellow one year",
                    "condition": "true"
                },
                "doses_at_the_bigining_and_the_end_of_the_month": {
                    "line_number": "20",
                    "line": "singlecell",
                    "fr": "4,Doses au debut du mois et Doses a la fin du mois: ces colonnes ne sont remplies que par les centres de sante ayant un refrigerateur",
                    "en": "4.Doses at the bigining and the end of the month: these colms are only filled by the health centre which have",
                    "condition": "true"
                }
            },
            "definitions": {
                "columns": {
                    "vaccines_intrants": {
                        "fr": "VACCINES/INTRANTS",
                        "en": "VACCINES/INTRANTS",
                        "title": "VACCINES/INTRANTS",
                        "condition": "true"
                    },
                    "dose_quantity_bigining_of_the_month": {
                        "fr": "* Doses/Cite au debut du mois *",
                        "en": "Dose/quantity bigining of the month",
                        "title": "Dose/quantity bigining of the month",
                        "condition": "true"
                    },
                    "doses_quantity_received_during_the_month": {
                        "fr": "Doses/ate revues au cours du mois",
                        "en": "Doses/quantity received during the month",
                        "title": "Doses/quantity received during the month",
                        "condition": "true"
                    },
                    "doses_quantity_administered": {
                        "fr": "Doses/Qte Administrees",
                        "en": "Doses/quantity Administered",
                        "title": "Doses/quantity Administered",
                        "condition": "true"
                    },
                    "doses_quantity_used": {
                        "fr": "Doses/ate Utilisees2",
                        "en": "Doses/quantity used",
                        "title": "Doses/quantity used",
                        "condition": "true"
                    },
                    "dose_quantity_lost": {
                        "fr": "Doses/ate Perdues2",
                        "en": "Dose/quantity lost",
                        "title": "Dose/quantity lost",
                        "condition": "true"
                    }
                }
            }
        }
    };
};
