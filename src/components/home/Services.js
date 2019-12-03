/**
 * This file contains the Services component
 */

import React from 'react';

import textile from '../../assets/images/textile.svg';
import goodQuality from '../../assets/images/good-quality.svg';
import size from '../../assets/images/size.svg';

const Services = () => {
    return (
        <div className="app-services">
            <div className="app-services__container">
                <h4 className="display-5">Services</h4>
                <div className="services">
                    <div className="services__container">
                        <div className="services-img-div good-quality">
                            <img src={goodQuality} alt="good quality" className="services-img-item" />
                            <p className="services-img-content">Quality is what every customer needs, it is also what we offer</p>
                        </div>
                        <div className="services-img-div textile">
                            <img src={textile} alt="textile" className="services-img-item" />
                            <p className="services-img-content">Right material texture cool for yout body and right texture</p>
                        </div>
                        <div className="services-img-div size">
                            <img src={size} alt="size" className="services-img-item" />
                            <p className="services-img-content">Sizes can be a pain sometimes, learn from our size table as you choose your Abaya</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Services;