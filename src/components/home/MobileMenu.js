import React from 'react';

import kitchenCategory from '../../assets/images/kitchen-category.png';
import dressCategory from '../../assets/images/dress-category.png';
import shirtCategory from '../../assets/images/shirt-category.png';
import jewelleryCategory from '../../assets/images/jewellery-category.png';
import smartphoneCategory from '../../assets/images/smartphone-category.png';
import houseCategory from '../../assets/images/house-category.png';
import sportsCategory from '../../assets/images/sports-category.png';
import furnitureCategory from '../../assets/images/furniture-category.png';
import computerCategory from '../../assets/images/computer-category.png';
import category from '../../assets/images/category.png';

const MobileMenu = () => {
    return (
        <div className="flex-mobile mobile-menu">
            <div className="mobile-menu__background">
                <div className="menu-category">
                    <img src={category} alt="all category" className="category-img" />
                    <div className="category-details">
                        <p className="text-muted">Search all categories</p>
                    </div>
                </div>
                <div className="menu-category">
                    <img src={dressCategory} alt="women fashion category" className="category-img" />
                    <div className="category-details">
                        <p className="text-muted">Women & fashion</p>
                    </div>
                </div>
                <div className="menu-category">
                    <img src={shirtCategory} alt="Men fashion category" className="category-img" />
                    <div className="category-details">
                        <p className="text-muted">Men & fashion</p>
                    </div>
                </div>
                <div className="menu-category">
                    <img src={smartphoneCategory} alt="Phones and accessories category" className="category-img" />
                    <div className="category-details">
                        <p className="text-muted">Phones & accessories</p>
                    </div>
                </div>
                <div className="menu-category">
                    <img src={computerCategory} alt="Computers category" className="category-img" />
                    <div className="category-details">
                        <p className="text-muted">Computers & Gaming</p>
                    </div>
                </div>
                <div style={{padding:'.5rem', width:'100%'}}></div>
                <div className="menu-category">
                    <img src={houseCategory} alt="Home category" className="category-img" />
                    <div className="category-details">
                        <p className="text-muted">Home & lifestyle</p>
                    </div>
                </div>
                <div className="menu-category">
                    <img src={sportsCategory} alt="Sports category" className="category-img" />
                    <div className="category-details">
                        <p className="text-muted">Sports & fitness</p>
                    </div>
                </div>
                <div className="menu-category">
                    <img src={jewelleryCategory} alt="Jewellery category" className="category-img" />
                    <div className="category-details">
                        <p className="text-muted">Jewellery & beauty</p>
                    </div>
                </div>
                <div className="menu-category">
                    <img src={furnitureCategory} alt="Furniture category" className="category-img" />
                    <div className="category-details">
                        <p className="text-muted">Furniture & style</p>
                    </div>
                </div>
                <div className="menu-category">
                    <img src={kitchenCategory} alt="Kitchen category" className="category-img" />
                    <div className="category-details">
                        <p className="text-muted">Kitchen & supplies</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default MobileMenu;