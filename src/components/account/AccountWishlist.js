import React from 'react';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';

import NavBar from '../NavBar';
import AccountMenu from './AccountMenu';
import dress from '../../assets/images/dress.png';
import iphone from '../../assets/images/iphone.png';
import { removeFromWishlist, fetchWishlist } from '../../actions/wishlist';


class AccountWishlist extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.props.fetchWishlist();
        console.log('wishlist: ', this.props.wishlist)
    }

    render() {
        return (
            <div className="account-wishlist-container account-background">
                <div className="wrapper-acc-pg">
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
                                <h1 className="account-overview-title">Account wishlist <span>({this.props.wishlist.length})</span></h1>
                                <div className="wislist-background">
                                {
                                    this.props.wishlist.map((item, i) => (
                                        <div
                                            className="wishlist-Item"
                                            key={i}
                                        >
                                            <div className="wishlist-img-background">
                                                <img className="wishlist-img" src={`${item.imgLink}.jpg`} alt="Iphone" />
                                            </div>
                                            <div className="wishlist-item-detail">
                                                <p className="wishlist-text">{item.description}</p>
                                                <p>KSH {item.newPrice}</p>
                                            </div>
                                            <div className="wishlist-item-price">
                                                <NavLink
                                                    to="/checkout"
                                                    className="wishlist-btn"
                                                >
                                                    BUY NOW
                                                </NavLink>
                                                <button
                                                    className="btn wishlist-remove"
                                                    onClick={() => this.props.removeFromWishlist(item.pid)}
                                                ><i className="fas fa-trash-alt"></i>REMOVE</button>
                                            </div>
                                        </div>
                                    ))
                                }
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="mb-acc-pg">
                    <div className="nav-bar-wrapper">
                        <NavBar />
                    </div>
                    <div className="section-title">
                        <NavLink className="section-title-btn" to="/user/profile">
                            <span>
                                <i className="fas fa-arrow-left back-btn"></i>
                            </span>
                        </NavLink>
                        <span className="section-title-name"><h1 className="account-overview-title">Account wishlist <span>({this.props.wishlist.length})</span></h1></span>
                    </div>
                    <div className="mb-wish-bg wislist-background">
                        {
                            this.props.wishlist.map((item, i) => (
                                <div
                                    className="wishlist-Item"
                                    key={i}
                                >
                                    <div className="mb-wishlist-det-bg">
                                        <div className="wishlist-img-background">
                                            <img className="wishlist-img" src={iphone} alt="Iphone" />
                                        </div>
                                        <div className="wishlist-item-detail">
                                            <p className="wishlist-text">{item.description}<br /><b>KSH {item.newPrice}</b></p>
                                        </div>
                                    </div>
                                    <div className="wishlist-item-price">
                                        <NavLink
                                            to="/checkout"
                                            className="wishlist-btn"
                                        >
                                            BUY NOW
                                        </NavLink>
                                        <button
                                            className="btn wishlist-remove"
                                            onClick={() => this.props.removeFromWishlist(item.pid)}
                                        ><i className="fas fa-trash-alt"></i>REMOVE</button>
                                    </div>
                                </div>
                            ))
                        }
                    </div>
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => ({
    authentication: state.authentication,
    resMessages: state.resMessages,
    wishlist: state.wishlist.wishlist
});

const mapDispatchToProps = (dispatch) => ({
    removeFromWishlist: (pid) => dispatch(removeFromWishlist(pid)),
    fetchWishlist: () => dispatch(fetchWishlist())
});

export default connect(mapStateToProps, mapDispatchToProps)(AccountWishlist);