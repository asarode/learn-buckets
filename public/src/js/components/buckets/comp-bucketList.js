import React from 'react';
import BucketCard from './comp-bucketCard';
import BucketStore from '../../stores/store-buckets';
import BucketActions from '../../actions/actions-buckets';
import { Navigation  } from 'react-router';
import connectToStores from 'alt/utils/connectToStores';

class BucketList extends React.Component {
	constructor(props) {
		super(props);
	}

	static getStores() {
		return [BucketStore];
	}

	static getPropsFromStores() {
		return BucketStore.getState();
	}

	componentDidMount() {
		BucketActions.fetch();
	}

	render() {
		return (
				<div className="row">
					<div className="col-xs-12">
						<button onClick={() => this.context.router.transitionTo('/buckets/create')}>CREATE</button>
					</div>
					<div className="col-xs-12">
						{this.BucketCards}
					</div>
				</div>
		)
	}

	get BucketCards() {
		let buckets = this.props.buckets;

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

BucketList.contextTypes = {
  router: React.PropTypes.func.isRequired
}

export default connectToStores(BucketList);