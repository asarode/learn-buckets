import Dispatcher from '../dispatchers/dispatcher';
import Constants from '../constants/constants';
import alt from '../alt';
import BucketActions from '../actions/actions-buckets';

class BucketStore {
	constructor() {
		this.state = {
			buckets: []
		}
		this.bindListeners({
			handleFetch: BucketActions.fetch
		});
	}

	handleFetch(data) {
		this.setState({
			buckets: data
		});
	}
}

export default alt.createStore(BucketStore, 'BucketStore');