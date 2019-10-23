/**
 * This file contains Trending component 
 * for the Trending products section of the page
 */
import React from 'react';

import '../../public/images/arrow-left.svg';
import '../../public/images/arrow-right.svg';

const Trending = () => (
    <div className="app-trending">
        <div className="app-trending__container">
            <h4 className="display-4">Trending</h4>
            <div className="trending">
                <div className="trending__container">
                    <img src="arrow-left.svg" className="arrow arrow-left"/>
                    <img src="arrow-right.svg"className="arrow arrow-right" />
                    <div className="trending-img-slider__container">
                        <div className="trending-img">
                            <div className="img-overlay">
                                <img src="shoes.jpg" className="trending-img-item" />
                            </div>
                            <div className="trending-img-content"></div>
                        </div>
                        <div className="trending-img">
                            <div className="img-overlay">
                                <img src="shoes.jpg" className="trending-img-item" />
                            </div>
                            <div className="trending-img-content"></div>
                        </div>
                        <div className="trending-img">
                            <div className="img-overlay">
                                <img src="shoes.jpg" className="trending-img-item" />
                            </div>
                            <div className="trending-img-content"></div>
                        </div>
                        <div className="trending-img">
                            <div className="img-overlay">
                                <img src="shoes.jpg" className="trending-img-item" />
                            </div>
                            <div className="trending-img-content"></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
);

export default Trending;