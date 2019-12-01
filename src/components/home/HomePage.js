import React from 'react';

import Header from './Header';
import Trending from './Trending';
import MenFashion from './MenFashion';
import WomenFashion from './WomenFashion';


function HomePage() {
	return (
		<div className="App jumbotron">
			<Header />
			<Trending />
			<MenFashion />
			<WomenFashion />
		</div>
	);
}

export default HomePage;
