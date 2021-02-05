import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './RSSFeed.css';

function RSSFeed() {
	const [ tweetData, setTweetData ] = useState([
		{
			name: 'Chirag',
			content: 'BOOM',
			url: 'GOOGLE.COM'
		}
	]);

	useEffect(() => {
		axios
			.get('http://localhost:8080/rss/rssFeed')
			.then((res) => {
				console.log(res.data);
				const totalTweets = [ ...res.data[0], ...res.data[1] ];
				setTweetData(totalTweets);
			})
			.catch((error) => {
				console.log(error);
			});
	}, []);
	console.log('tweetData', tweetData);
	return (
		<div>
			{tweetData.map((tweet) => {
				return (
					<div className="twitter-tweet">
						<p className="Tweet-text">{tweet.content}</p>
					</div>
				);
			})}
		</div>
	);
}

export default RSSFeed;
