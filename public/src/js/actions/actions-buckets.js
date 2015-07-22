import Constants from '../constants/constants';
import Dispatcher from '../dispatchers/dispatcher';
import request from 'superagent';
import alt from '../alt';

let base = 'http://localhost:3000'

class BucketActions {
	create(item) {
		let url = base + '/buckets';
		request.post(url)
			.accept('application/json')
			.send(item)
			.end((err, res) => {
				if (err) console.log(err);
				this.actions.fetchBuckets();
			});
	}

	fetch() {
		let url = base + '/buckets';
		request.get(url)
			.end((err, res) => {
				if (err) console.log(err);
				this.dispatch(res.body);
			});
	}
}

export default alt.createActions(BucketActions);