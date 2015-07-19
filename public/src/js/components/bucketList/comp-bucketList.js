import React from 'react';
import BucketCard from './comp-bucketCard';
import BucketStore from '../../stores/store-buckets';
import BucketActions from '../../actions/actions-buckets';
import dummyData from './dummyData';

class BucketList extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			buckets: []
		};
	}

	componentWillMount() {
		BucketStore.addChangeListener(() => {
			this.setState({
				buckets: BucketStore.getBucketList()
			});
		});
	}

	componentDidMount() {
		BucketActions.fetchBuckets();
	}

	render() {
		return (
			<div>
				{this.BucketCards}
			</div>
		)
	}

	_onChange() {
		console.log(this);
		this.setState({
			buckets: this.BucketData
		});
	}

	get BucketCards() {
		let buckets = this.state.buckets;

		let cards = buckets.map((item, index) => {
			return (
				<BucketCard
					key={index}
					title={item.title}
					description={item.description}
					links={item.links}
					stargazers={item.stargazers} />
			);
		})

		return cards;
	}
}

BucketList.PropTypes = {
	className: React.PropTypes.object
}

BucketList.defaultProps = {
	className: {}
}

export default BucketList;