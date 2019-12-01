import React from 'react';

export default class MenuBar extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="container-fluid menu-container menu-bar-wrapper">
                <nav className="container-fluid__container">
                    <div className="menu-bar-div">
                        <i className="fa fa-bar-chart mr-2"></i>
                        Phones & Tablets
                    </div>
                    <div className="menu-bar-div">
                        <i className="fa fa-pie-chart mr-2"></i>
                        Computing
                    </div>
                    <div className="menu-bar-div">
                        <i className="fa fa-line-chart mr-2"></i>
                        Furniture
                    </div>
                    <div className="menu-bar-div">
                        <i className="fa fa-area-chart mr-2"></i>
                        Jewelery
                    </div>
                    <div className="menu-bar-div">
                        <i className="fa fa-area-chart mr-2"></i>
                        Home & Living
                    </div>
                    <div className="menu-bar-div">
                        <i className="fa fa-bar-chart mr-2"></i>
                        Industrial Supply
                    </div>
                    <div className="menu-bar-div">
                        <i className="fa fa-pie-chart mr-2"></i>
                        Kitchen Appliances
                    </div>
                    <div className="menu-bar-div">
                        <i className="fa fa-line-chart mr-2"></i>
                        Fashion
                    </div>
                    <div className="menu-bar-div">
                        <i className="fa fa-area-chart mr-2"></i>
                        Baby Products
                    </div>
                    <div className="menu-bar-div">
                        <i className="fa fa-area-chart mr-2"></i>
                        Sports
                    </div>
                </nav>
            </div>
        );
    }
}