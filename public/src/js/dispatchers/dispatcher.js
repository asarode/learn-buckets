import flux from 'flux';
let assign = require('react/lib/Object.assign');
let Dispatcher = flux.Dispatcher;


let AppDispatcher = assign(new Dispatcher(), {
	handleViewAction: function(action) {
		this.dispatch({
			source: 'VIEW_ACTION',
			action: action
		});
	}
});

module.exports = AppDispatcher;