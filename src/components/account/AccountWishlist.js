import React from 'react';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';

import NavBar from '../NavBar';
import AccountMenu from './AccountMenu';
import dress from '../../assets/images/dress.png';
import iphone from '../../assets/images/iphone.png';


class AcccountWishlist extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="account-wishlist-container account-background">
                <div className="nav-bar-wrapper">
                    <NavBar />
                </div>
                <div className="account-container">
                    <div className="account-menu-sec acc-sec">
                        <AccountMenu />
                    </div>
                    <span></span>
                    <div className="accout-detail-sec acc-sec">
                        <div className="account-det-background">
                            <h1 className="account-overview-title">Account wishlist <span>(2)</span></h1>
                            <div className="wislist-background">
                                <div className="wishlist-Item">
                                    <div className="wishlist-img-background">
                                        <img className="wishlist-img" src={iphone} alt="Iphone" />
                                    </div>
                                    <div className="wishlist-item-detail">
                                        <p className="wishlist-text">S7 - 8GB - 1GB RAM (8MP+5 MP) Camera - Dual Sim - Black</p>
                                        <p>KSH 20,000</p>
                                    </div>
                                    <div className="wishlist-item-price">
                                        <NavLink
                                            to="/checkout"
                                            className="wishlist-btn"
                                        >
                                            BUY NOW
                                        </NavLink>
                                        <button className="btn wishlist-remove"><i className="fas fa-trash-alt"></i>REMOVE</button>
                                    </div>
                                </div>
                                <div className="wishlist-Item">
                                    <div className="wishlist-img-background">
                                        <img className="wishlist-img" src={dress} alt="Dress" />
                                    </div>
                                    <div className="wishlist-item-detail">
                                        <p className="wishlist-text">Summer Dress Boho Style Floral Print Chiffon <small className="promo-value">25% off</small></p>
                                        <p>KSH 2,000<br /><strike><small className="text-muted">KSH 2,500</small></strike></p>
                                    </div>
                                    <div className="wishlist-item-price">
                                        <NavLink
                                            to="/checkout"
                                            className="wishlist-btn"
                                        >
                                            BUY NOW
                                        </NavLink>
                                        <button className="btn wishlist-remove"><i className="fas fa-trash-alt"></i>REMOVE</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => ({
    authentication: state.authentication,
    resMessages: state.resMessages
});

export default connect(mapStateToProps)(AcccountWishlist);