import React from 'react';

import Header from './Header';
import Trending from './Trending';
import MenFashion from './MenFashion';
import WomenFashion from './WomenFashion';
import NavBar from '../NavBar';
import MobileMenu from './MobileMenu';
import MobileNav from './MobileNav';


function HomePage() {
	return (
		<div className="App">
			<NavBar />
			<div className="App jumbotron">
				<Header />
				<MobileMenu />
				<Trending />
				<MenFashion />
				<WomenFashion />
				<MobileNav />
			</div>
		</div>
	);
}

export default HomePage;
