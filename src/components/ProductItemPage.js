/**
 * This file contains the Product Item Page component
 */


import React from 'react';

import hijab from '../assets/images/hijab.jpg';

export default class ProductItemPage extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        console.log(this.props);
        return (
            <div className="product-item-container">
                <div className="product-item-customizations">
                    <div className="product-item-photo">
                        <img src={hijab} alt="hijab" className="photo-item" />
                        <span>
                            <button>cart</button>
                            <i>wishlist</i>
                        </span>
                    </div>
                    <div className="product-item-customizations__sec">
                        <div className="product-item-color-pallete">
                            <div className="product-color-container color-container">
                                <b className="filter-name">COLORS</b>
                                <div className="product-color-pallete color-pallete">
                                    <span className="product-color-item color-item pink" style={{ background: 'pink' }}></span>
                                    <span className="product-color-item color-item purple" style={{ background: 'purple' }}></span>
                                    <span className="product-color-item color-item red" style={{ background: 'red' }}></span>
                                    <span className="product-color-item color-item orange" style={{ background: 'orange' }}></span>
                                    <span className="product-color-item color-item blue" style={{ background: 'blue' }}></span>
                                    <span className="product-color-item color-item green" style={{ background: 'green' }}></span>
                                    <span className="product-color-item color-item grey" style={{ background: 'grey' }}></span>
                                    <span className="product-color-item color-item black" style={{ background: 'black' }}></span>
                                </div>
                            </div>
                        </div>
                        <div className="product-item-sizes"></div>
                    </div>
                </div>
                <div className="product-item-details">
                    <h4 className="display-3">Product Details</h4>
                    <p>lorem lorem lorem lorem lorem</p>
                </div>
            </div>
        );
    }
}