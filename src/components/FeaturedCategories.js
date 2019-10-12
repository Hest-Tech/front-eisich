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
            <h4>Featured Categories</h4>
            <div className="featured-categories">
                <div className="category-icons">
                    <div className="icons-line">
                        <div className="icon-div">
                            <img src="kitchen.svg" height="70px" width="70px" />
                            <p>kitchen Appliances</p>
                        </div>
                        <div className="icon-div">
                            <img src="computer.svg" height="70px" width="70px" />
                            <p>Computers</p>
                        </div>
                        <div className="icon-div">
                            <img src="living-room.svg" height="70px" width="70px" />
                            <p>Home decor</p>
                        </div>
                        <div className="icon-div">
                            <img src="shirt.svg" height="70px" width="70px" />
                            <p>Men fashion</p>
                        </div>
                    </div>
                    <div className="icons-line">
                        <div className="icon-div">
                            <img src="smartphone.svg" height="70px" width="70px" />
                            <p>Smartphones</p>
                        </div>
                        <div className="icon-div">
                            <img src="smartwatch.svg" height="70px" width="70px" />
                            <p>Watches</p>
                        </div>
                        <div className="icon-div">
                            <img src="textile.svg" height="70px" width="70px" />
                            <p>Textile</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default FeaturedCategories;