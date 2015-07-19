import Constants from '../constants/constants';
import Dispatcher from '../dispatchers/dispatcher';
import request from 'superagent';


let Actions = {
	addBucket: function(item) {
		// add item to mongo
		let url = 'http://localhost:3000/buckets'
		console.log(item);
		request
			.post(url)
			.accept('application/json')
			.send(item)
			.end((err, res) => {
				if (err) console.log(err);
				this.fetchBuckets();
			});
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