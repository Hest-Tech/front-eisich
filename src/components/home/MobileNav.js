import React from 'react';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';


const MobileNav = (props) => {
    return (
        <div className="mobile-nav-bar flex-mobile">
            <div className="mobile-nav-bar__background">
                <NavLink
                    to="/"
                    className="mobile-icon-background mobile-home"
                    // onClick={() => }
                    exact
                >
                    <i className="mobile-icon fas fa-home"></i>
                    <p className="icon-det">Home</p>
                </NavLink>
                <NavLink
                    to="/category"
                    className="mobile-icon-background mobile-category"
                    // onClick={() => }
                    exact
                >
                    <i className="mobile-icon fas fa-bars"></i>
                    <p className="icon-det">Category</p>
                </NavLink>
                <NavLink
                    to="/cart"
                    className="mobile-icon-background mobile-cart"
                    // onClick={() => }
                    exact
                >
                    <i className="mobile-icon fas fa-cart-arrow-down"></i>
                    <p className="icon-det">Cart</p>
                    <span className="badge bg-success mobile-cart-pill">
                        {props.authentication.isAuthenticated ? props.cart.length : 0}
                    </span>
                </NavLink>
                <NavLink
                    to="/profile"
                    className="mobile-icon-background mobile-account"
                    // onClick={() => }
                    exact
                >
                    <i className="mobile-icon fas fa-user"></i>
                    <p className="icon-det">Account</p>
                </NavLink>
            </div>
        </div>
    );
}

const mapStateToProps = (state) => ({
    authentication: state.authentication,
    cart: state.cart.cart
});

const mapDispatchToProps = (dispatch) => ({
    // openAuthPopUp: () => dispatch(openAuthPopUp()),
    // loadUser: () => dispatch(loadUser()),
    // signOutUser: () => dispatch(signOutUser())
});

export default connect(mapStateToProps, mapDispatchToProps)(MobileNav);