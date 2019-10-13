/**
 * This file contains FeaturedCategories component 
 * for the featured-categories section of the page
 */
import React from 'react';

import '../../public/images/kitchen.svg';
import '../../public/images/computer.svg';
import '../../public/images/living-room.svg';
import '../../public/images/shirt.svg';
import '../../public/images/smartphone.svg';
import '../../public/images/smartwatch.svg';
import '../../public/images/textile.svg';
// import '../../public/images/wishlist.svg';

const FeaturedCategories = () => {
    return (
        <div className="app-featured-categories">
            <h2 className="display-4">Featured Categories</h2>
            <div className="featured-categories">
                <div className="category-icons">
                    <div className="icons-line">
                        <div className="icon-div">
                            <img className="icon-div__img" src="kitchen.svg" />
                            <p>kitchen Appliances</p>
                        </div>
                        <div className="icon-div">
                            <img className="icon-div__img" src="living-room.svg" />
                            <p>Home decor</p>
                        </div>
                        <div className="icon-div">
                            <img className="icon-div__img" src="computer.svg" />
                            <p>Computers</p>
                        </div>
                        <div className="icon-div">
                            <img className="icon-div__img" src="shirt.svg" />
                            <p>Men fashion</p>
                        </div>
                    </div>
                    <div className="icons-line">
                        <div className="icon-div">
                            <img className="icon-div__img" src="smartphone.svg" />
                            <p>Smartphones</p>
                        </div>
                        <div className="icon-div">
                            <img className="icon-div__img" src="smartwatch.svg" />
                            <p>Watches</p>
                        </div>
                        <div className="icon-div">
                            <img className="icon-div__img" src="textile.svg" />
                            <p>Textile</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default FeaturedCategories;