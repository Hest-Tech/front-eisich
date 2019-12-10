import React, { useState } from 'react';
import { connect } from 'react-redux';

import Header from './Header';
import Trending from './Trending';
import MenFashion from './MenFashion';
import WomenFashion from './WomenFashion';
import NavBar from '../NavBar';
import MobileMenu from './MobileMenu';
import MobileNav from './MobileNav';
import { clearMessages } from '../../actions/resMessages';


class HomePage extends React.Component {

	constructor(props) {
		super(props);
		this.handleHideMsg = this.handleHideMsg.bind(this);

		this.state = {
			popMsg: true
		}
	}

	handleHideMsg() {
		setTimeout(() => {
			this.props.dispatch(clearMessages())
		}, 10000);
	}

	render() {
		return (
			<div className="App">
				{this.handleHideMsg()}
				{this.props.resMessages.msg && <div className="alert alert-success home-page-alert" role="alert">
					{this.props.resMessages.msg}
				</div>}
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
}

const mapStateToProps = (state) => ({
    resMessages: state.resMessages
})

export default connect(mapStateToProps)(HomePage);