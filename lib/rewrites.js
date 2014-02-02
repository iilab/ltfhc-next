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
		{from: '/patient', to: '_update/patient_new', method: 'POST'},
		{from: '/patient', to: '_show/patient_new'},

		{from: '/patient/:id', to: '_update/patient/:id', method: 'POST'},
		{from: '/patient/:id', to: '_show/patient/:id'},

    {from: '/patients', to: '_show/patients'},
    
		// visits
		{from: '/visit', to: '_show/visit'},
    {from: '/visits', to: '_show/visits'},

		// reports    
		{from: '/report', to: '_show/report'},
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
    {from: '*', to: '_show/not_found'}
]