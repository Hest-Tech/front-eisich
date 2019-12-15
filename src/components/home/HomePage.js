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
			popMsg: this.props.resMessages && this.props.resMessages.msg
		}
	}

	handleShowMsg() {
		this.setState((prevState) => ({ popMsg: !prevState.popMsg }))
	}

	handleHideMsg() {
		// window.location.reload();
		this.setState((prevState) => ({ popMsg: !prevState.popMsg }))

		// setTimeout(() => {
		// 	this.props.dispatch(clearMessages())
		// }, 15000);
	}

	componentDidUpdate() {
		console.log(this.state)
	}

	render() {
		return (
			<div className="App">
				{/* {this.handleHideMsg()} */}
				{this.state.popMsg && <div className="alert alert-success home-page-alert" role="alert">
					{this.state.popMsg}
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