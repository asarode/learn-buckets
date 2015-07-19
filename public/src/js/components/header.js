import React from 'react';
import { RouteHandler, Navigation } from 'react-router';

class Header extends React.Component {
	constructor(props) {
		super(props)
		this.state = {};
	}

	render() {
		return (
			<div>
				<div className="col-xs-8">
					<h1>Learn Buckets</h1>
				</div>
			</div>
		)
	}
}

Header.contextTypes = {
  router: React.PropTypes.func.isRequired
}