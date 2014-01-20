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
    {from: '/visit', to: '_show/visit'},
    {from: '/config.js', to: '_show/config'},
    {from: '/help', to: '_show/help'},
    {from: '*', to: '_show/not_found'}
]