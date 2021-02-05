import React, { useEffect, useState } from 'react';
import axios from 'axios';

function RSSFeed({ accountName }) {
	const [ tweetData, setTweetData ] = useState([
		{
			name: 'Chirag',
			content: 'BOOM',
			url: 'GOOGLE>COM',
			date: 'TODAY'
		}
	]);

	useEffect(() => {
		axios
			.get('http://localhost:8080/rss/rssFeed')
			.then((res) => {
				console.log(res.data);
				console.log('ac name', accountName);
				const totalTweets = [ ...res.data[0], ...res.data[1] ];
				const filteredTweets = totalTweets.filter((tweeterAccount) => {
					return (
						tweeterAccount.name === accountName ||
						tweeterAccount.content.includes(accountName)
					);
				});
				console.log('Filtered', filteredTweets);
				setTweetData(filteredTweets);
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
					<div>
						<p>{tweet.name}</p>
						<p>{tweet.content}</p>
						<p>{tweet.date}</p>
						<a href={tweet.link} />
					</div>
				);
			})}
		</div>
	);
}

export default RSSFeed;
