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
			<div className="alert alert-success home-page-alert" role="alert">
				This is a success alert with <a href="#" className="alert-link">an example link</a>. Give it a click if you like.
			</div>
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
