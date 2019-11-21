/**
 * This file contains NewArrivals component 
 * for the New Arrivals section of the page
 */

import React from 'react';

import '../images/textile.svg';
import '../images/good-quality.svg';
import '../images/size.svg';

const Services = () => {
    return (
        <div className="app-services">
            <div className="app-services__container">
                <h4 className="display-4">Services</h4>
                <div className="services">
                    <div className="services__container">
                        <div className="services-img-div good-quality">
                            <img className="services-img-item" src="good-quality.svg" />
                            <p className="services-img-content">Quality is what every customer needs, it is also what we offer</p>
                        </div>
                        <div className="services-img-div textile">
                            <img className="services-img-item" src="textile.svg" />
                            <p className="services-img-content">Right material texture cool for yout body and right texture</p>
                        </div>
                        <div className="services-img-div size">
                            <img className="services-img-item" src="size.svg" />
                            <p className="services-img-content">Sizes can be a pain sometimes, learn from our size table as you choose your Abaya</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Services;