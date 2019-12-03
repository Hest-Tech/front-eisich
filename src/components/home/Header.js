/**
 * This file contains the Header component
 */

import React from 'react';

import bags from '../../assets/images/bags.jpg';
import electronics from '../../assets/images/electronics.jpg';
import shoes from '../../assets/images/shoes.jpg';
import MenuBar from './MenuBar';
import SideBar from './SideBar';


export default class Header extends React.Component {
    constructor(props) {
        super(props);
        this.toggleDisplay = this.toggleDisplay.bind(this);

        this.state = {
            display: false
        }
    }

    toggleDisplay() {
        this.setState(this.toggleDisplayState);
    }

    toggleDisplayState(state) {
        return {
            display: !state.display,
        };
    }

    render() {
        return (
            <header className="d-flex App-header">
                <div className="header-sec-container">
                    <MenuBar toggleDisplay={this.toggleDisplay} />
                    <div className="carousel-wrapper">
                        <div
                            id="slider"
                            className="carousel slide"
                            data-ride="carousel"
                        >
                            <ol className="carousel-indicators">
                                <li data-target="#slider" data-slide-to="0" className="active"></li>
                                <li data-target="#slider" data-slide-to="1"></li>
                                <li data-target="#slider" data-slide-to="2"></li>
                            </ol>
                            <div className="carousel-inner">
                                <div className="carousel-item active">
                                    <img className="d-block w-100" src={electronics} alt="First slide" />
                                </div>
                                <div className="carousel-item">
                                    <img className="d-block w-100" src={shoes} alt="Second slide" />
                                </div>
                                <div className="carousel-item">
                                    <img className="d-block w-100" src={bags} alt="Third slide" />
                                </div>
                            </div>
                            <a className="carousel-control-prev" href="#slider" role="button" data-slide="prev">
                                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                                <span className="sr-only">Previous</span>
                            </a>
                            <a className="carousel-control-next" href="#slider" role="button" data-slide="next">
                                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                                <span className="sr-only">Next</span>
                            </a>
                        </div>

                        {this.state.display && <nav
                            className="extended-menu-bar"
                            onMouseEnter={this.toggleDisplay}
                            onMouseLeave={this.toggleDisplay}
                        >
                            <div className="extended-menu-bar__container">
                                <div className="table-column tc-1">
                                    <div className="table-row tr-1">
                                        <b className="th">MOBILE PHONES</b><hr />
                                        <ul className="table-row-list">
                                            <li>Powerbanks</li>
                                            <li>Smart Watches</li>
                                            <li>Phone Covers & Cases</li>
                                            <li>Screen Protectors</li>
                                            <li>Chargers & Adaptors</li>
                                        </ul>
                                    </div>
                                    <div className="table-row tr-2">
                                        <b className="th">MOBILE PHONES</b><hr />
                                        <ul className="table-row-list">
                                            <li>Powerbanks</li>
                                            <li>Smart Watches</li>
                                            <li>Phone Covers & Cases</li>
                                            <li>Screen Protectors</li>
                                            <li>Chargers & Adaptors</li>
                                            <li>Selfie Sticks</li>
                                            <li>Phone Batteries</li>
                                            <li>Accessories Under 1,000</li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="table-column tc-2">
                                    <div className="table-row tr-1">
                                        <b className="th">MOBILE PHONES</b><hr />
                                        <ul className="table-row-list">
                                            <li>Powerbanks</li>
                                            <li>Smart Watches</li>
                                            <li>Phone Covers & Cases</li>
                                            <li>Screen Protectors</li>
                                            <li>Chargers & Adaptors</li>
                                        </ul>
                                    </div>
                                    <div className="table-row tr-2">
                                        <b className="th">MOBILE PHONES</b><hr />
                                        <ul className="table-row-list">
                                            <li>Powerbanks</li>
                                            <li>Smart Watches</li>
                                            <li>Screen Protectors</li>
                                            <li>Chargers & Adaptors</li>
                                            <li>Selfie Sticks</li>
                                            <li>Phone Batteries</li>
                                            <li>Accessories Under 1,000</li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="table-column tc-3">
                                    <div className="table-row tr-1">
                                        <b className="th">MOBILE PHONES</b><hr />
                                        <ul className="table-row-list">
                                            <li>Powerbanks</li>
                                            <li>Smart Watches</li>
                                            <li>Phone Covers & Cases</li>
                                            <li>Screen Protectors</li>
                                            <li>Accessories Under 1,000</li>
                                            <li>Accessories Under 1,000</li>
                                            <li>Chargers & Adaptors</li>
                                        </ul>
                                    </div>
                                    <div className="table-row tr-2">
                                        <b className="th">MOBILE PHONES</b><hr />
                                        <ul className="table-row-list">
                                            <li>Powerbanks</li>
                                            <li>Smart Watches</li>
                                            <li>Phone Covers & Cases</li>
                                            <li>Screen Protectors</li>
                                            <li>Chargers & Adaptors</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </nav>}
                    </div>
                    <SideBar />
                </div>
            </header>
        );
    }
};