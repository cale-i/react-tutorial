import React from "react";
import { connect } from "react-redux";

import { fetchUser } from "../actions/userActions";
import { fetchTweets } from "../actions/tweetsActions";

@connect((store) => {
	return {
		user: store.userReducer.user,
		userFetched: store.userReducer.fetched,
		tweets: store.tweetsReducer.tweets,
		tweetsFetching: store.tweetsReducer.fetching,
	};
})
export default class Layout extends React.Component {
	componentDidMount() {
		this.props.dispatch(fetchUser());
	}
	fetchTweets() {
		this.props.dispatch(fetchTweets());
	}
	render() {
		console.log(this.props.user);
		console.log(this.props.userFetched);

		const { user, tweets, tweetsFetching } = this.props;
		if (tweetsFetching) {
			return <div>fetching...</div>;
		}
		if (!tweets.length) {
			return <button onClick={this.fetchTweets.bind(this)}>load tweets</button>;
		}

		const mappedTweets = tweets.map((tweet) => (
			<li key={tweet.id}>{tweet.text}</li>
		));

		return (
			<div>
				<h1>{this.props.user.name}</h1>
				<ul>{mappedTweets}</ul>
			</div>
		);
	}
}
