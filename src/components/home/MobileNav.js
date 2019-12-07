import React from 'react';


const MobileNav = () => {
    return (
        <div className="mobile-nav-bar flex-mobile">
            <div className="mobile-nav-bar__background">
                <div className="mobile-icon-background mobile-home active-icon">
                    <i className="mobile-icon fas fa-home"></i>
                    <p className="icon-det">Home</p>
                </div>
                <div className="mobile-icon-background mobile-category">
                    <i className="mobile-icon fas fa-bars"></i>
                    <p className="icon-det">Category</p>
                </div>
                <div className="mobile-icon-background mobile-cart">
                    <i className="mobile-icon fas fa-cart-arrow-down"></i>
                    <p className="icon-det">Cart</p>
                </div>
                <div className="mobile-icon-background mobile-account">
                    <i className="mobile-icon fas fa-user"></i>
                    <p className="icon-det">Account</p>
                </div>
            </div>
        </div>
    );
}

export default MobileNav;