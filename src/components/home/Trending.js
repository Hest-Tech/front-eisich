/**
 * This file contains the Trending component
 */


import React from 'react';

import arrowLeft from '../../assets/images/arrow-left.svg';
import arrowRight from '../../assets/images/arrow-right.svg';
import shoes from '../../assets/images/shoes.jpg';

const Trending = () => (
    <div className="app-trending">
        <div className="app-trending__container">
            <h4 className="display-4">Trending</h4>
            <div className="trending">
                <div className="trending__container">
                    <img src={arrowLeft} alt="arrow left" className="arrow arrow-left" />
                    <img src={arrowRight} alt="arrow right" className="arrow arrow-right" />
                    <div className="trending-img-slider__container">
                        <div className="trending-img">
                            <div className="img-overlay">
                                <img src={shoes} alt="shoes" className="trending-img-item" />
                            </div>
                            <div className="promo-info">
                                <span>NEW</span>
                            </div>
                            <div className="trending-img-content">
                                <b>Short sleeve Abaya</b>
                                <p>KSH2500</p>
                                <div className="text-warning">
                                    <i className="fa fa-star"></i><i className="fa fa-star"></i><i className="fa fa-star"></i><i className="fa fa-star"></i><i className="fa fa-star"></i>
                                </div>
                            </div>
                        </div>
                        <div className="trending-img">
                            <div className="img-overlay">
                                <img src={shoes} alt="shoes" className="trending-img-item" />
                            </div>
                            <div className="promo-info">
                                <span>20% OFF</span>
                            </div>
                            <div className="trending-img-content">
                                <b>Short sleeve Abaya</b>
                                <p>KSH2500</p>
                                <div className="text-warning">
                                    <i className="fa fa-star"></i><i className="fa fa-star"></i><i className="fa fa-star"></i><i className="fa fa-star"></i><i className="fa fa-star"></i>
                                </div>
                            </div>
                        </div>
                        <div className="trending-img">
                            <div className="img-overlay">
                                <img src={shoes} alt="shoes" className="trending-img-item" />
                            </div>
                            <div className="promo-info">
                                <span>NEW</span>
                            </div>
                            <div className="trending-img-content">
                                <b>Short sleeve Abaya</b>
                                <p>KSH2500</p>
                                <div className="text-warning">
                                    <i className="fa fa-star"></i><i className="fa fa-star"></i><i className="fa fa-star"></i><i className="fa fa-star"></i><i className="fa fa-star"></i>
                                </div>
                            </div>
                        </div>
                        <div className="trending-img">
                            <div className="img-overlay">
                                <img src={shoes} alt="shoes" className="trending-img-item" />
                            </div>
                            <div className="promo-info">
                                <span>20% OFF</span>
                            </div>
                            <div className="trending-img-content">
                                <b>Short sleeve Abaya</b>
                                <p>KSH2500</p>
                                <div className="text-warning">
                                    <i className="fa fa-star"></i><i className="fa fa-star"></i><i className="fa fa-star"></i><i className="fa fa-star"></i><i className="fa fa-star"></i>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
);

export default Trending;