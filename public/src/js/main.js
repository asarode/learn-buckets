import Router from 'react-router';
import routes from './routes'
import React from 'react';

Router.run(routes, function(Root) {
	React.render(<Root />, document.getElementById('root'));
});