
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
      "en" : "English",
      "sw" : "Swahili"
    },
   "muvuku_webapp_url": "/muvuku-webapp/_design/muvuku-webapp/_rewrite/?_embed_mode=2",
   "reported_date_format": "MMM hh:mm",
   "forms_only_mode": false,
   "public_access": false,
   "gateway_number": "+13125551212",
   "kujua-reporting": [
       {
           "code": "VPD",
           "reporting_freq": "weekly"
       }
   ],
   "schedule_morning_hours": 0,
   "schedule_evening_hours": 23,
   "synthetic_date": "",
   "contact_display_short": "clinic.name",
   "translations": [
       {
           "key": "New Patient",
           "en": "New Patient",
           "sw": "Mgonjwa mpya"
       },
       {
           "key": "Forms",
           "en": "Forms",
           "sw": "Fomu"
       },
       {
           "key": "Patients",
           "en": "Patients",
           "sw": "?Patients"
       },
       {
           "key": "Visits",
           "en": "Visit",
           "sw": "?Visit"
       },
       {
           "key": "Reports",
           "en": "Reports",
           "sw": "Repoti"
       },
       {
           "key": "Search",
           "en": "Search",
           "sw": "Tafuta"
       },
       {
           "key": "New Patient",
           "en": "New Patient",
           "sw": "Mgonjwa mpya"
       },
       {
           "key": "Contact",
           "en": "Contact",
           "fr": "Contact",
           "es": "Contacto",
           
           "sw": "kuwasiliana na"
       },
       {
           "key": "From",
           "en": "From",
           "fr": "De",
           "es": "De",
           
           "sw": "kutoka"
       },
       {
           "key": "Clinics",
           "en": "Community Health Workers",
           "fr": "Agents de santé",
           "es": "Agento de salud",
           
           "sw": ""
       },
       {
           "key": "Village Name",
           "en": "Town",
           "fr": "Ville",
           "es": "Ciudia",
           
           "sw": "Jina kijiji"
       },
       {
           "key": "Clinic Contact Name",
           "en": "Name",
           "fr": "Nom",
           "es": "Nombre",
           
           "sw": "Kliniki ya Mawasiliano Jina"
       },
       {
           "key": "Clinic Contact Phone",
           "en": "Phone number",
           "fr": "Téléphone",
           "es": "Teléfono",
           
           "sw": "Namba ya Simu"
       },
       {
           "key": "RC Code",
           "en": "Code",
           "fr": "Code",
           "es": "Código",
           
           "sw": "RC Kanuni"
       },
       {
           "key": "Health Centers",
           "en": "Health Centers",
           "fr": "Centres de santé",
           "es": "Centros de Salud",
           
           "sw": "Kituo cha Afya cha"
       },
       {
           "key": "Health Center",
           "en": "Health Center",
           "fr": "Centre de santé",
           "es": "Centro de Salud",
           
           "sw": "Kituo cha Afya cha"
       },
       {
           "key": "Health Center Name",
           "en": "Health Center Name",
           "fr": "Nom du centre de santé",
           "es": "Nombre del centro de salud",
           
           "sw": "Kituo cha Afya cha Jina"
       },
       {
           "key": "Health Center Contact Name",
           "en": "Contact Name",
           "fr": "Nom du contact",
           "es": "Nombre del contacto",
           
           "sw": "Kituo cha Afya cha Mawasiliano Jina"
       },
       {
           "key": "Health Center Contact Phone",
           "en": "Phone number",
           "fr": "Téléphone",
           "es": "Teléfono",
           
           "sw": "Namba ya Simu"
       },
       {
           "key": "District",
           "en": "District",
           "fr": "District",
           "es": "Distrito",
           
           "sw": "Wilaya ya"
       },
       {
           "key": "District Name",
           "en": "District Name",
           "fr": "Nom du district",
           "es": "Nombre del distrito",
           
           "sw": "Wilaya ya Jina"
       },
       {
           "key": "District Contact Name",
           "en": "Contact Name",
           "fr": "Nom du contact",
           "es": "Nombre del contacto",
           
           "sw": "Wilaya ya Mawasiliano Jina"
       },
       {
           "key": "District Contact Phone",
           "en": "Phone number",
           "fr": "Téléphone",
           "es": "Teléfono",
           
           "sw": "Namba ya Simu"
       },
       {
           "key": "Phone",
           "en": "Phone",
           "fr": "Téléphone",
           "es": "Teléfono",
           
           "sw": "Simu"
       },
       {
           "key": "sys.recipient_not_found",
           "en": "Could not find message recipient.",
           "fr": "Le recipient du message n'a pas été trouvé.",
           "es": "No se encontro destinatario para el mensaje.",
           
           "sw": ""
       },
       {
           "key": "sys.missing_fields",
           "en": "Missing or invalid fields: {{fields}}.",
           "fr": "Champs invalides ou manquants: {{fields}}.",
           "es": "Campo invalido o faltante: {{fields}}.",
           
           "sw": ""
       },
       {
           "key": "missing_fields",
           "en": "Missing or invalid fields: {{fields}}.",
           "fr": "Champs invalides ou manquants: {{fields}}.",
           "es": "Campo invalido o faltante: {{fields}}.",
           
           "sw": ""
       },
       {
           "key": "extra_fields",
           "en": "Extra fields.",
           "fr": "Champs additionels.",
           "es": "Campos extra.",
           
           "sw": ""
       },
       {
           "key": "sys.form_not_found",
           "en": "Form '{{form}}' not found.",
           "fr": "Formulaire '{{form}}' non trouvé",
           "es": "Forma no encontrada.",
           
           "sw": ""
       },
       {
           "key": "form_not_found",
           "en": "The form sent '{{form}}' was not recognized. Please complete it again and resend. If this problem persists contact your supervisor.",
           "fr": "Le formulaire envoyé '{{form}}' n'est pas reconnu, SVP corriger et renvoyer. Si ce problème persiste contactez votre superviseur.",
           "es": "No se reconocio el reporte enviado '{{form}}'. Por favor intente de nuevo. Si el problema persiste, informe al director.",
           
           "sw": ""
       },
       {
           "key": "form_invalid",
           "en": "The form sent '{{form}}' was not properly completed. Please complete it and resend. If this problem persists contact your supervisor.",
           "fr": "Le formulaire envoyé '{{form}}' n'est pas complet, SVP corriger et renvoyer. Si ce problème persiste contactez votre superviseur.",
           "es": "No se completo el reporte '{{form}}'. Por favor completelo y vuelvalo a enviar. Si el problema persiste, informe al director.",
           
           "sw": ""
       },
       {
           "key": "form_invalid_custom",
           "en": "The form sent '{{form}}' was not properly completed. Please complete it and resend. If this problem persists contact your supervisor.",
           "fr": "Le formulaire envoyé '{{form}}' n'est pas complet, SVP corriger et renvoyer. Si ce problème persiste contactez votre superviseur.",
           "es": "No se completo el reporte '{{form}}'. Por favor completelo y vuelvalo a enviar. Si el problema persiste, informe al director.",
           
           "sw": ""
       },
       {
           "key": "sys.facility_not_found",
           "en": "Facility not found.",
           "fr": "Établissement non trouvé.",
           "es": "No se encontro a la unidad de salud.",
           
           "sw": ""
       },
       {
           "key": "sys.empty",
           "en": "Message appears empty.",
           "fr": "Le message recu est vide.",
           "es": "El mensaje esta en blanco.",
           
           "sw": ""
       },
       {
           "key": "empty",
           "en": "It looks like you sent an empty message, please try to resend. If you continue to have this problem please contact your supervisor.",
           "fr": "Nous avons des troubles avec votre message, SVP renvoyer. Si vous continuez à avoir des problèmes contactez votre superviseur.",
           "es": "El mensaje esta en blanco, por favor reenvielo. Si encuentra un problema, informe al director.",
           
           "sw": ""
       },
       {
           "key": "form_received",
           "en": "Your form submission was received, thank you.",
           "fr": "Merci, votre formulaire a été bien reçu.",
           "es": "Recibimos su reporte, muchas gracias.",
           
           "sw": ""
       },
       {
           "key": "sms_received",
           "en": "SMS message received; it will be reviewed shortly. If you were trying to submit a text form, please enter a correct form code and try again.",
           "fr": "Merci, votre message a été bien reçu.",
           "es": "Recibimos tu mensaje, lo procesaremos pronto. Si querias mandar un reporte, intentalo nuevamente en el formato adecuado.",
           
           "sw": ""
       },
       {
           "key": "reporting_unit_not_found",
           "en": "Reporting Unit ID is incorrect. Please correct and submit a complete report again.",
           "fr": "Établissement non trouvé, svp corriger et renvoyer",
           "es": "No encontramos a su centro de salud. Por favor corrijalo y reenvie el reporte.",
           
           "sw": ""
       },
       {
           "key": "reported_date",
           "en": "Reported Date",
           "fr": "Date envoyé",
           "es": "Fecha de envío",
           
           "sw": ""
       },
       {
           "key": "related_entities.clinic.name",
           "en": "Clinic Name",
           "fr": "Villages",
           "es": "",
           
           "sw": ""
       },
       {
           "key": "related_entities.clinic.contact.name",
           "en": "Clinic Contact Name",
           "fr": "Personne-ressource Clinique",
           "es": "",
           
           "sw": ""
       },
       {
           "key": "related_entities.clinic.parent.name",
           "en": "Health Center Name",
           "fr": "Nom du centre de santé",
           "es": "",
           
           "sw": ""
       },
       {
           "key": "related_entities.clinic.parent.contact.name",
           "en": "Health Center Contact Name",
           "fr": "Nom de la santé Contact Center",
           "es": "",
           
           "sw": ""
       },
       {
           "key": "related_entities.clinic.parent.parent.name",
           "en": "District Hospital Name",
           "fr": "Nom de l'hôpital de district",
           "es": "",
           
           "sw": ""
       },
       {
           "key": "related_entities.health_center.name",
           "en": "Health Center Name",
           "fr": "Nom du centre de santé",
           "es": "",
           
           "sw": ""
       },
       {
           "key": "related_entities.health_center.contact.name",
           "en": "Health Center Contact Name",
           "fr": "Nom de la santé Contact Center",
           "es": "",
           
           "sw": ""
       },
       {
           "key": "related_entities.health_center.parent.name",
           "en": "District Hospital Name",
           "fr": "Nom de l'hôpital de district",
           "es": "",
           
           "sw": ""
       },
       {
           "key": "from",
           "en": "Reported From",
           "fr": "Envoyé par",
           "es": "De",
           
           "sw": ""
       },
       {
           "key": "sent_timestamp",
           "en": "Sent Timestamp",
           "fr": "Date",
           "es": "Fecha",
           
           "sw": ""
       },
       {
           "key": "_id",
           "en": "Record UUID",
           "fr": "Record UUID",
           "es": "Record UUID",
           
           "sw": "Record UUID"
       },
       {
           "key": "daysoverdue",
           "en": "Days since patient visit",
           "fr": "Jours depuis visite du patient",
           "es": "",
           
           "sw": ""
       },
       {
           "key": "Patient ID",
           "en": "Patient ID",
           "fr": "Patient ID",
           "es": "Patient ID",
           
           "sw": "Patient ID"
       },
       {
           "key": "responses",
           "en": "Responses",
           "fr": "Responses",
           "es": "Responses",
           
           "sw": "Responses"
       },
       {
           "key": "sms_message.message",
           "en": "Incoming Message",
           "fr": "Incoming Message",
           "es": "Incoming Message",
           
           "sw": "Incoming Message"
       },
       {
           "key": "tasks",
           "en": "Outgoing Messages",
           "fr": "Outgoing Messages",
           "es": "Outgoing Messages",
           
           "sw": "Outgoing Messages"
       },
       {
           "key": "scheduled_tasks",
           "en": "Scheduled Tasks",
           "fr": "Scheduled Tasks",
           "es": "Scheduled Tasks",
           
           "sw": "Scheduled Tasks"
       }
   ]
};
