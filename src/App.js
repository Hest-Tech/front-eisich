import React from 'react';

import './App.scss';
import '../public/favicon.ico';
import Header from './components/Header';
import NavBar from './components/NavBar';
// import FeaturedCategories from './components/FeaturedCategories';
// import TopSelling from './components/TopSelling';
// import Trending from './components/Trending';
// import NewArrivals from './components/NewArrivals';
// import Footer from './components/Footer';

function App() {
	return (
		<div className="App">
			<NavBar />
			<Header />
			{/* <FeaturedCategories />
			<TopSelling />
			<Trending />
			<NewArrivals />
			<Footer /> */}
		</div>
	);
}

export default App;
