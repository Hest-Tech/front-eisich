import React from 'react';

import Header from './Header';
import Trending from './Trending';
import MenFashion from './MenFashion';
import WomenFashion from './WomenFashion';
import NavBar from '../NavBar';


function HomePage() {
	return (
		<div className="App">
			<NavBar />
			<div className="App jumbotron">
				<Header />
				<Trending />
				<MenFashion />
				<WomenFashion />
			</div>
		</div>
	);
}

export default HomePage;
