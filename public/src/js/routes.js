import React from 'react';
import { Route, Redirect, NotFoundRoute } from 'react-router';
import App from './components/app';
import Buckets from './components/buckets';

export default (
	<Route handler={App}>
		<NotFoundRoute handler={Buckets.list} />

		<Redirect
			from="/"
			to="/buckets" />
		<Route
			name="buckets:list"
			path="/buckets"
			handler={Buckets.list} >
		</Route>
		<Route
		  name="buckets:create"
		  path="/buckets/create"
		  handler={Buckets.creation} >
		</Route>
	</Route>
);