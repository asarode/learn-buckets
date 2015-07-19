import React from 'react';
import BucketList from './bucketList/comp-bucketList';
import dummyData from './bucketList/dummyData';

class App extends React.Component {
	constructor(props) {
		super(props);
		this.state = {};
	}

	render() {
		return (
			<div>
				<h1>Learn Buckets</h1>
				<BucketList 
					bucketData={this.Data} />
			</div>
		);
	}

	get Data() {
		let data = JSON.parse(JSON.stringify(dummyData)).data;
		return data;
	}
}

App.PropTypes = {
	className: React.PropTypes.object
}

App.defaultProps = {
	className: {}
}

module.exports = App;