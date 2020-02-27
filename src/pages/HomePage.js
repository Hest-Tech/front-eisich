import React, { useState } from 'react';
import { connect } from 'react-redux';

import Header from '../components/home/Header';
import Trending from '../components/home/Trending';
import MenFashion from '../components/home/MenFashion';
import WomenFashion from '../components/home/WomenFashion';
import NavBar from '../components/NavBar';
import MobileMenu from '../components/home/MobileMenu';
import ErrorBoundary from '../components/ErrorBoundary';


class HomePage extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            intervalId: 0,
            delayInMs: 16.66,
            scrollStepInPx: 50
        };
    }

    scrollStep() {
        if (window.pageYOffset === 0) {
            clearInterval(this.state.intervalId);
        }
        window.scroll(0, window.pageYOffset - this.state.scrollStepInPx);
    }

    scrollToTop() {
        let intervalId = setInterval(this.scrollStep.bind(this), this.state.delayInMs);

        this.setState({ intervalId });
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
					<div
						className="mobile-scroll"
						onClick={() => this.scrollToTop()}
					>
						<i className="fas fa-chevron-up"></i><br/>
						<small>BACK TO TOP</small>
					</div>
				</div>
			</div>
        );
    }
}

const mapStateToProps = (state) => ({
    resMessages: state.resMessages
})

export default connect(mapStateToProps)(HomePage);