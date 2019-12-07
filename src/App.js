import React from 'react';
import Fire from './config/firebase';
import Header from './components/home/Header';
import Trending from './components/home/Trending';
import Services from './components/home/Services';

function App() {
	return (
		<div className="App">
			<Header />
			<Trending />
			<Services />
		</div>
	);
}

export default App;
