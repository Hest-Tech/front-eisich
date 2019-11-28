import React from 'react';

import Header from './Header';
import Trending from './Trending';
import Services from './Services';


function HomePage() {
	return (
		<div className="App">
			<Header />
			<Trending />
			<Services />
		</div>
	);
}

export default HomePage;
