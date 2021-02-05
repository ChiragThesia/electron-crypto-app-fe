import './App.css';
import React from 'react';
import QRGenerator from './components/QrGenerator.jsx';
import RSSFeed from './components/RSSFeedGenerator.jsx';

function App() {
	return (
		<div className="App">
			<QRGenerator />
			<div className="RSS-Feed">
				<RSSFeed />
			</div>
		</div>
	);
}

export default App;
