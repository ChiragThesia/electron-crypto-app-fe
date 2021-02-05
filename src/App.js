import './App.css';
import React from 'react';
import QRGenerator from './components/QrGenerator.jsx';
import RSSFeed from './components/RSSFeedGenerator.jsx';

const twitterAccount = '@BBCAfrica';
function App() {
	return (
		<div className="App">
			<QRGenerator />
			<RSSFeed accountName={twitterAccount} />;
		</div>
	);
}

export default App;
