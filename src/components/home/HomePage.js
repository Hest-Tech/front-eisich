import React, { useState } from 'react';
import { connect } from 'react-redux';

import Header from './Header';
import Trending from './Trending';
import MenFashion from './MenFashion';
import WomenFashion from './WomenFashion';
import NavBar from '../NavBar';
import MobileMenu from './MobileMenu';
import MobileNav from './MobileNav';
import ErrorBoundary from '../ErrorBoundary';


class HomePage extends React.Component {

	constructor(props) {
		super(props);
	}

	render() {
		return (
			<div className="App">
				<ErrorBoundary>
					<NavBar />
				</ErrorBoundary>
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
}

const mapStateToProps = (state) => ({
    resMessages: state.resMessages
})

export default connect(mapStateToProps)(HomePage);