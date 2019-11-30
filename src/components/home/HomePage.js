import React from 'react';

import Header from './Header';
import Trending from './Trending';
import Services from './Services';
import MenuAds from './MenuAds';


function HomePage() {
	return (
		<div className="App jumbotron">
			<Header />
			<Trending />
			<MenuAds />
			<Services />
		</div>
	);
}

export default HomePage;
