import React from 'react';
import { list as BucketList } from './buckets';
import { RouteHandler } from 'react-router';

class App extends React.Component {
	constructor(props) {
		super(props);
		this.state = {};
	}

	render() {
		return (
			<div className="row">
				<h1 className="lb-header">Learn Buckets</h1>
				<RouteHandler />
			</div>
		);
	}
}

App.PropTypes = {
	className: React.PropTypes.object
}

App.defaultProps = {
	className: {}
}

module.exports = App;