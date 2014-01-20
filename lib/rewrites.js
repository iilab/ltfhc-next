module.exports = [
    {from: '/favicon.ico', to: 'static/favicon.ico'},
    {from: '/bootstrap/*', to: 'bootstrap/*'},
    {from: '/static/*', to: 'static/*'},
    {from: '/select2/*', to: 'select2/*'},
    {from: '/files/*', to: 'files/*'},    
	{from: '/projects', to: '_list/projects/docs_by_type', query: {
	        include_docs: 'true',
	        key: '"forms"'
	}},
    {from: '/app_settings/:doc', to: '_show/app_settings' },
    {from: '/', to: '_show/data_records'},
    {from: '', to: '_show/data_records'},
    {from: '/home', to: '_show/home'},
    {from: '/users', to: '_show/users'},
    {from: '/visit', to: '_show/visit'},
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