/**
 * This file contains the menu-ads component
 */


import React from 'react';

import menFashion from '../../assets/images/men-fashion.jpg';
import headphones from '../../assets/images/headphones.jpg';
import camera from '../../assets/images/camera.jpg';

const MenuAds = () => (
    <div className="container app-menu-ads">
        <div className="menu-ads-img-slider__container">
            <div className="menu-ads-img">
                <div className="menu-img-overlay">
                    <img src={headphones} alt="shoes" className="menu-ads-img-item" />
                    <div className="menu-img-overlay-div"></div>
                </div>
                <div className="menu-ads-img-content">
                    <p>Super Base Headphones</p>
                    <b>ON SALE UPTO 30% OFF</b><br />
                    <button class="btn btn-warning">Buy Now</button>
                </div>
            </div>
            <div className="menu-ads-img">
                <div className="menu-img-overlay">
                    <img src={menFashion} alt="shoes" className="menu-ads-img-item" />
                    <div className="menu-img-overlay-div"></div>
                </div>
                <div className="menu-ads-img-content">
                    <p>Men Fashion</p>
                    <b>ON SALE UPTO 20% OFF</b><br />
                    <button class="btn btn-warning">Buy Now</button>
                </div>
            </div>
            <div className="menu-ads-img">
                <div className="menu-img-overlay">
                    <img src={camera} alt="shoes" className="menu-ads-img-item" />
                    <div className="menu-img-overlay-div"></div>
                </div>
                <div className="menu-ads-img-content">
                    <p>Digital Camera</p>
                    <b>ON SALE UPTO 40% OFF</b><br />
                    <button class="btn btn-warning">Buy Now</button>
                </div>
            </div>
        </div>
    </div>
);

export default MenuAds;