import Constants from '../constants/constants';
import Dispatcher from '../dispatchers/dispatcher';
import request from 'superagent';

let Actions = {
	addBucket: function(item) {
		// add item to mongo
		// --
		// send fetchBuckets request
		this.fetchBuckets();
	},
	fetchBuckets: function() {
		let url = 'http://localhost:3000/buckets';
		request
			.get(url)
			.end((err, res) => {
				Dispatcher.handleViewAction({
					actionType: Constants.FETCH_BUCKETS,
					data: res.body
				});
			});
	}
}

module.exports = Actions;