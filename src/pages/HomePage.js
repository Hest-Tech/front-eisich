import React, { useState } from 'react';
import { connect } from 'react-redux';

import Header from '../components/home/Header';
import Trending from '../components/home/Trending';
import MenFashion from '../components/home/MenFashion';
import WomenFashion from '../components/home/WomenFashion';
import NavBar from '../components/NavBar';
import MobileMenu from '../components/home/MobileMenu';
import ErrorBoundary from '../components/ErrorBoundary';
import Scroll from '../components/Scroll';
import { fetchAllProducts } from '../actions/products';


class HomePage extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            intervalId: 0,
            delayInMs: 16.66,
            scrollStepInPx: 50
        };
    }

    componentDidMount() {
        // this.props.fetchAllProducts()
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
					<Scroll />
				</div>
			</div>
        );
    }
}

const mapStateToProps = (state) => ({
    resMessages: state.resMessages
});

const mapDispatchToProps = (dispatch) => ({
    fetchAllProducts: () => dispatch(fetchAllProducts())
});

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);