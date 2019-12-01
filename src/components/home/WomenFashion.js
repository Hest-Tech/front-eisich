import React from 'react';

import abaya from '../../assets/images/abaya.jpg'
import womenDress from '../../assets/images/women-dress.jpg'
import hugo from '../../assets/images/hugo.png'
import fendi from '../../assets/images/fendi.png'


export default class MenuBar extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="container women-fashion">
                <h4 className="display-5">Women's Fashion</h4>
                <div className="women-fashion__container">
                    <nav className="container-fluid__container women-fashion-menu">
                        <div className="menu-bar-div">
                            <i className="fa fa-bar-chart mr-2"></i>
                            Top wear
                        </div>
                        <div className="menu-bar-div">
                            <i className="fa fa-pie-chart mr-2"></i>
                            Bottom wear
                        </div>
                        <div className="menu-bar-div">
                            <i className="fa fa-line-chart mr-2"></i>
                            Dresses
                        </div>
                        <div className="menu-bar-div">
                            <i className="fa fa-area-chart mr-2"></i>
                            Sleep wear
                        </div>
                        <div className="menu-bar-div">
                            <i className="fa fa-area-chart mr-2"></i>
                            Sports wear
                        </div>
                        <div className="menu-bar-div">
                            <i className="fa fa-bar-chart mr-2"></i>
                            Sweatshirts
                        </div>
                        <div className="menu-bar-div">
                            <i className="fa fa-pie-chart mr-2"></i>
                            Jeans
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
                            <img src={abaya} alt="men suit image" className="fashion-pic" />
                            <div className="img-fashion-content fashion-1">
                                <p>All women muslim wear from</p>
                                <b>KSH5,000</b><br />
                                <button className="btn btn-info">SHOP NOW</button>
                            </div>
                        </div>
                        <div className="fashion-img__item">
                            <div className="fashion-img__brand">
                                <img src={fendi} alt="fendi brand" className="fashion-brand" />
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
                                <img src={hugo} alt="hugo brand" className="fashion-brand" />
                            </div>
                        </div>
                        <div className="fashion-img__item">
                            <img src={womenDress} alt="men casual image" className="fashion-pic" />
                            <div className="img-fashion-content fashion-2">
                                <p>20% - 30% off Women's Casual wear</p><br />
                                <button className="btn btn-info">SHOP NOW</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}