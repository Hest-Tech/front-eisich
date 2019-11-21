import React from 'react';

import './App.scss';
// import '../public/favicon.ico';
import Header from './components/Header';
import Trending from './components/Trending';
import Services from './components/Services';


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
