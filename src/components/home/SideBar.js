import React from 'react';

export default class SideBar extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="menu-container">
                <div className="container-fluid side-menu-container">
                    <nav className="container-fluid__container">
                        <div className="menu-bar-div">
                            <i className="fa fa-bar-chart mr-2"></i>
                            Action here
                        </div>
                        <div className="menu-bar-div">
                            <i className="fa fa-pie-chart mr-2"></i>
                            Another action here
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
                </div><br />
                <div className="container-fluid menu-container">
                    <nav className="container-fluid__container">
                        <div className="menu-bar-div">
                            <i className="fa fa-bar-chart mr-2"></i>
                            Action here
                        </div>
                        <div className="menu-bar-div">
                            <i className="fa fa-pie-chart mr-2"></i>
                            Another action here
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
            </div>
        );
    }
}