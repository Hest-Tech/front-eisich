import React from 'react';

export default class MenuBar extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="container-fluid menu-container">
                <nav className="container-fluid__container">
                    <div className="menu-bar-div">
                        <i className="fa fa-bar-chart mr-2"></i>
                        Action here
                    </div>
                    <div className="menu-bar-div">
                        <i className="fa fa-pie-chart mr-2"></i>
                        Another action
                    </div>
                    <div className="menu-bar-div">
                        <i className="fa fa-line-chart mr-2"></i>
                        Active link
                    </div>
                    <div className="menu-bar-div">
                        <i className="fa fa-area-chart mr-2"></i>
                        Action here
                    </div>
                    <div className="menu-bar-div">
                        <i className="fa fa-area-chart mr-2"></i>
                        Disabled link
                    </div>
                    <div className="menu-bar-div">
                        <i className="fa fa-bar-chart mr-2"></i>
                        Action here
                    </div>
                    <div className="menu-bar-div">
                        <i className="fa fa-pie-chart mr-2"></i>
                        Another action
                    </div>
                    <div className="menu-bar-div">
                        <i className="fa fa-line-chart mr-2"></i>
                        Active link
                    </div>
                    <div className="menu-bar-div">
                        <i className="fa fa-area-chart mr-2"></i>
                        Action here
                    </div>
                    <div className="menu-bar-div">
                        <i className="fa fa-area-chart mr-2"></i>
                        Disabled link
                    </div>
                </nav>
            </div>
        );
    }
}