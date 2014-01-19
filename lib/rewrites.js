module.exports = [
    {from: '/favicon.ico', to: 'static/favicon.ico'},
    {from: '/static/*', to: 'static/*'},
    {from: '/files/*', to: 'files/*'},    
	{from: '/projects', to: '_list/projects/docs_by_type', query: {
	        include_docs: 'true',
	        key: '"forms"'
	}},
    {from: '/', to: '_show/home'},
    {from: '/visit', to: '_show/visit'}
]