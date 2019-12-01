import React from 'react';

import menSuit from '../../assets/images/men-suit.jpg'
import menCasual from '../../assets/images/men-casual.jpg'
import levi from '../../assets/images/levi.png'
import h$m from '../../assets/images/h$m.png'

export default class MenuBar extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="container men-fashion">
                <h4 className="display-5">Men's Fashion</h4>
                <div className="men-fashion__container">
                    <nav className="container-fluid__container men-fashion-menu">
                        <div className="menu-bar-div">
                            <i className="fa fa-bar-chart mr-2"></i>
                            T-shirts & Polos
                        </div>
                        <div className="menu-bar-div">
                            <i className="fa fa-pie-chart mr-2"></i>
                            Jeans
                        </div>
                        <div className="menu-bar-div">
                            <i className="fa fa-line-chart mr-2"></i>
                            Suits & Blazers
                        </div>
                        <div className="menu-bar-div">
                            <i className="fa fa-area-chart mr-2"></i>
                            Trousers
                        </div>
                        <div className="menu-bar-div">
                            <i className="fa fa-area-chart mr-2"></i>
                            Jackets
                        </div>
                        <div className="menu-bar-div">
                            <i className="fa fa-bar-chart mr-2"></i>
                            Sweatshirts
                        </div>
                        <div className="menu-bar-div">
                            <i className="fa fa-pie-chart mr-2"></i>
                            Shoes
                        </div>
                        <div className="menu-bar-div">
                            <i className="fa fa-line-chart mr-2"></i>
                            Muslim wear
                        </div>
                        <div className="menu-bar-div">
                            <i className="fa fa-area-chart mr-2"></i>
                            view all
                        </div>
                    </nav>
                    <div className="fashion-img">
                        <div className="fashion-img__item">
                            <img src={menSuit} alt="men suit image" className="fashion-pic" />
                            <div className="img-fashion-content fashion-1">
                                <p>Formal men's wear starting from</p>
                                <b>KSH5,000</b><br />
                                <button className="btn btn-info">SHOP NOW</button>
                            </div>
                        </div>
                        <div className="fashion-img__item">
                            <div className="fashion-img__brand">
                                <img src={h$m} alt="h$m brand" className="fashion-brand" />
                                <div className="img-fashion-content-item">
                                    <p>Up to 30% off</p>
                                    <button className="btn btn-success">Shop Now</button>
                                </div>
                            </div>
                            <div className="fashion-img__brand">
                                <div className="img-fashion-content-item">
                                    <p>Up to 30% off</p>
                                    <button className="btn btn-success">Shop Now</button>
                                </div>
                                <img src={levi} alt="levi brand" className="fashion-brand" />
                            </div>
                        </div>
                        <div className="fashion-img__item">
                            <img src={menCasual} alt="men casual image" className="fashion-pic" />
                            <div className="img-fashion-content fashion-2">
                                <p>20% - 30% off Men's Casual wear</p><br />
                                <button className="btn btn-info">SHOP NOW</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}