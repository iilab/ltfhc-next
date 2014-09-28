module.exports = [
    {from: '/favicon.ico', to: 'static/favicon.ico'},
		
    // libraries
    {from: '/bootstrap/*', to: 'bootstrap/*'},
    {from: '/font-awesome/*', to: 'font-awesome/*'},
    {from: '/static/*', to: 'static/*'},
    {from: '/alpacajs/*', to: 'alpacajs/*'},
    {from: '/jquery-ui/*', to: 'jquery-ui/*'},
    {from: '/prototype/*', to: 'prototype/*'},
    {from: '/select2/*', to: 'select2/*'},

    // schema
    {from: '/files/*', to: 'files/*'},    
    {from: '/schema/*', to: 'schema/*'},    
		
    {from: '/app_settings/:doc', to: '_show/app_settings' },

    // home page
    {from: '', to: '_show/patients'},
	{from: '/', to: '_show/patients'},

	// patients
	{from: '/patient', to: '_update/patient', method: 'POST'}, //submitting new patient
	{from: '/patient', to: '_show/patient'}, // showing empty patient form
	{from: '/patient/', to: '_show/patient'}, // alias to empty patient form

	{from: '/patient/:id', to: '_update/patient/:id', method: 'POST'}, // submitting existing patient
	{from: '/patient/:id', to: '_show/patient/:id'}, // showing existing patient

    {from: '/patients', to: '_show/patients'}, // showing patient table
    
    // visits - visit new is only for testing as visits should always be created from a patient form.
	{from: '/visit/:patient_id', to: '_update/visit', query: { patient_id: ':patient_id' }, method: 'POST'},
	{from: '/visit/:patient_id', to: '_show/visit', query: { patient_id: ':patient_id' }},

	{from: '/visit/:patient_id/:id', to: '_update/visit/:id', query: { patient_id: ':patient_id' }, method: 'POST'},
	{from: '/visit/:patient_id/:id', to: '_show/visit/:id', query: { patient_id: ':patient_id' }},
    {from: '/visits', to: '_show/visits'},

    // reports    
	{from: '/report', to: '_update/report', method: 'POST'},
    {from: '/report_calculated', to: '_update/report', method: 'POST'},
	{from: '/report/:id', to: '_update/report/:id', method: 'POST'},
	{from: '/report/:id', to: '_show/report/:id'}, // showing existing report
    {from: '/report_calculated', to: '_show/report_calculated'},
    {from: '/reports', to: '_show/reports'},
	
    // users
	{from: '/users', to: '_show/users'},
    
    {from: '/facilities', to: '_show/districts'},
    {from: '/facilities/clinics', to: '_show/clinics'},
    {from: '/facilities/health_centers', to: '_show/health_centers'},
    {from: '/facilities/districts', to: '_show/districts'},
    
		{from: '/reminders', to: '_show/reminders'},
		
    {
        from: '/facilities.json/:district',
        to: '_view/facilities_by_district',
        query: {
            startkey: [':district'],
            endkey: [':district', {}],
            include_docs: 'true'
        }
    },
    {
        from: '/facilities.json',
        to: '_view/facilities',
        query: {
            include_docs: 'true'
        }
    },
    {
        from: '/facilities_select2.json',
        to: '_list/facilities_select2/facilities',
        query: {
            include_docs: 'true'
        }
    },
    {from: '/config.js', to: '_show/config'},
    {from: '/help', to: '_show/help'},
    {from: '/*/_design/emr/_view/*', to: '_view/*'},
    {from: '/*/*', to: '../../*'},
    {from: '*', to: '_show/not_found'}
]