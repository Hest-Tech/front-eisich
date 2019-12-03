/**
 * This file contains the Trending component
 */

import React from 'react';

// import arrowLeft from '../../assets/images/arrow-left.svg';
// import arrowRight from '../../assets/images/arrow-right.svg';
import shoe from '../../assets/images/shoe.png';
import shirt from '../../assets/images/shirt.png';
import iphone from '../../assets/images/iphone.png';
import sofa from '../../assets/images/sofa.png';
import dress from '../../assets/images/dress.png';
import menFashion from '../../assets/images/men-fashion.jpg';
import headphones from '../../assets/images/headphones.jpg';
import camera from '../../assets/images/camera.jpg';


const Trending = () => (
    <div className="app-trending">
        <div className="app-trending__container">
            <h4 className="display-5">See what's Trending</h4>
            <div className="trending">
                <div className="trending__container">
                    {/* <img src={arrowLeft} alt="arrow left" className="arrow arrow-left" />
                    <img src={arrowRight} alt="arrow right" className="arrow arrow-right" /> */}
                    <div className="trending-img-slider__container">
                        <div className="trending-img">
                            <div className="img-overlay">
                                <img src={shirt} alt="shoes" className="trending-img-item" />
                            </div>
                            <div className="promo-info">
                                <span>NEW</span>
                            </div>
                            <div className="trending-img-content">
                                <p>Long sleeve Shirt</p>
                                <b>KSH2,500</b>
                                <div className="text-warning">
                                    <i className="fa fa-star"></i><i className="fa fa-star"></i><i className="fa fa-star"></i><i className="fa fa-star"></i><i className="fa fa-star"></i>
                                </div>
                            </div>
                        </div>
                        <div className="trending-img">
                            <div className="img-overlay">
                                <img src={shoe} alt="shoes" className="trending-img-item" />
                            </div>
                            <div className="promo-info">
                                <span>NEW</span>
                            </div>
                            <div className="trending-img-content">
                                <p>Official leather Shoes</p>
                                <b>KSH10,000</b>
                                <div className="text-warning">
                                    <i className="fa fa-star"></i><i className="fa fa-star"></i><i className="fa fa-star"></i><i className="fa fa-star"></i><i className="fa fa-star"></i>
                                </div>
                            </div>
                        </div>
                        <div className="trending-img">
                            <div className="img-overlay">
                                <img src={iphone} alt="shoes" className="trending-img-item" />
                            </div>
                            <div className="promo-info">
                                <span>20% OFF</span>
                            </div>
                            <div className="trending-img-content">
                                <p>Refurbished Iphone 6s</p>
                                <b>KSH33,000</b>
                                <div className="text-warning">
                                    <i className="fa fa-star"></i><i className="fa fa-star"></i><i className="fa fa-star"></i><i className="fa fa-star"></i><i className="fa fa-star"></i>
                                </div>
                            </div>
                        </div>
                        <div className="trending-img">
                            <div className="img-overlay">
                                <img src={sofa} alt="shoes" className="trending-img-item" />
                            </div>
                            <div className="promo-info">
                                <span>NEW</span>
                            </div>
                            <div className="trending-img-content">
                                <p>Leather Sofa set</p>
                                <b>KSH20,000</b>
                                <div className="text-warning">
                                    <i className="fa fa-star"></i><i className="fa fa-star"></i><i className="fa fa-star"></i><i className="fa fa-star"></i><i className="fa fa-star"></i>
                                </div>
                            </div>
                        </div>
                        <div className="trending-img">
                            <div className="img-overlay">
                                <img src={dress} alt="shoes" className="trending-img-item" />
                            </div>
                            <div className="promo-info">
                                <span>20% OFF</span>
                            </div>
                            <div className="trending-img-content">
                                <p>Black dress</p>
                                <b>KSH2,500</b>
                                <div className="text-warning">
                                    <i className="fa fa-star"></i><i className="fa fa-star"></i><i className="fa fa-star"></i><i className="fa fa-star"></i><i className="fa fa-star"></i>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className="app-menu-ads">
            <div className="menu-ads-img-slider__container">
                <div className="menu-ads-img">
                    <div className="menu-img-overlay menu-img-1">
                        <img src={headphones} alt="shoes" className="menu-ads-img-item" />
                        <div className="menu-img-overlay-div"></div>
                    </div>
                    <div className="menu-ads-img-content">
                        <p>Super Base Headphones</p>
                        <b>ON SALE UPTO 30% OFF</b><br />
                        <button className="btn btn-warning buy-action-btn">Buy Now</button>
                    </div>
                </div>
                <div className="menu-ads-img">
                    <div className="menu-img-overlay menu-img-2">
                        <img src={menFashion} alt="shoes" className="menu-ads-img-item" />
                        <div className="menu-img-overlay-div"></div>
                    </div>
                    <div className="menu-ads-img-content">
                        <p>Men Fashion</p>
                        <b>ON SALE UPTO 20% OFF</b><br />
                        <button className="btn btn-warning buy-action-btn">Buy Now</button>
                    </div>
                </div>
                <div className="menu-ads-img">
                    <div className="menu-img-overlay menu-img-3">
                        <img src={camera} alt="shoes" className="menu-ads-img-item" />
                        <div className="menu-img-overlay-div"></div>
                    </div>
                    <div className="menu-ads-img-content">
                        <p>Digital Camera</p>
                        <b>ON SALE UPTO 40% OFF</b><br />
                        <button className="btn btn-warning buy-action-btn">Buy Now</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
);

export default Trending;