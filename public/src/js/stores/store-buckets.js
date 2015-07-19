import Dispatcher from '../dispatchers/dispatcher';
import Constants from '../constants/constants';
let assign = require('react/lib/Object.assign');
import events from 'events';
let EventEmitter = events.EventEmitter;

let CHANGE_EVENT = 'change';

let _buckets = [];

function _fetchBuckets(data) {
	_buckets = data;
}

let Store = assign(EventEmitter.prototype, {
	emitChange: function() {
		this.emit(CHANGE_EVENT);
	},

	addChangeListener: function(cb) {
		this.on(CHANGE_EVENT, cb);
	},

	removeChangeListener: function(cb) {
		this.removeListener(CHANGE_EVENT, cb);
	},

	getBucketList: function() {
		return _buckets;
	},

	dispatcherIndex: Dispatcher.register((payload) => {
		let action = payload.action;

		switch (action.actionType) {
			case Constants.FETCH_BUCKETS:
				_fetchBuckets(payload.action.data)
		}

		Store.emitChange()

		return true;
	})

});

module.exports = Store;