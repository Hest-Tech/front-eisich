import React from 'react';
import { NavLink } from 'react-router-dom';


export default class MenuBar extends React.Component {
    constructor(props) {
        super(props);
        this.handleMouseHover = this.handleMouseHover.bind(this);

        this.state = {
            isHovering: false
        }
    }

    handleMouseHover() {
        this.setState(this.toggleHoverState);
        this.props.toggleDisplay();
    }

    toggleHoverState(state) {
        return {
            isHovering: !state.isHovering,
        };
    }

    render() {
        return (
            <div className="menu-bar-container container-fluid menu-container menu-bar-wrapper">

                <nav className="container-fluid__container">
                    <NavLink
                        className="menu-link"
                        to="/products"
                        style={{ textDecoration: 'none' }}
                    >
                        <div
                            className="menu-bar-div"
                            onMouseEnter={this.handleMouseHover}
                            onMouseLeave={this.handleMouseHover}
                        >
                            <i className="fa fa-bar-chart mr-2"></i>
                            Phones & Tablets
                        </div>
                    </NavLink>
                    <NavLink
                        className="menu-link"
                        to="/products"
                        style={{ textDecoration: 'none' }}
                    >
                        <div
                            className="menu-bar-div"
                            onMouseEnter={this.handleMouseHover}
                            onMouseLeave={this.handleMouseHover}
                        >
                            <i className="fa fa-pie-chart mr-2"></i>
                            Computing
                        </div>
                    </NavLink>
                    <NavLink
                        className="menu-link"
                        to="/products"
                        style={{ textDecoration: 'none' }}
                    >
                        <div
                            className="menu-bar-div"
                            onMouseEnter={this.handleMouseHover}
                            onMouseLeave={this.handleMouseHover}
                        >
                            <i className="fa fa-line-chart mr-2"></i>
                            Furniture
                        </div>
                    </NavLink>
                    <NavLink
                        className="menu-link"
                        to="/products"
                        style={{ textDecoration: 'none' }}
                    >
                        <div
                            className="menu-bar-div"
                            onMouseEnter={this.handleMouseHover}
                            onMouseLeave={this.handleMouseHover}
                        >
                            <i className="fa fa-area-chart mr-2"></i>
                            Jewelery
                        </div>
                    </NavLink>
                    <NavLink
                        className="menu-link"
                        to="/products"
                        style={{ textDecoration: 'none' }}
                    >
                        <div
                            className="menu-bar-div"
                            onMouseEnter={this.handleMouseHover}
                            onMouseLeave={this.handleMouseHover}
                        >
                            <i className="fa fa-area-chart mr-2"></i>
                            Home & Living
                        </div>
                    </NavLink>
                    <NavLink
                        className="menu-link"
                        to="/products"
                        style={{ textDecoration: 'none' }}
                    >
                        <div
                            className="menu-bar-div"
                            onMouseEnter={this.handleMouseHover}
                            onMouseLeave={this.handleMouseHover}
                        >
                            <i className="fa fa-bar-chart mr-2"></i>
                            Industrial Supply
                        </div>
                    </NavLink>
                    <NavLink
                        className="menu-link"
                        to="/products"
                        style={{ textDecoration: 'none' }}
                    >
                        <div
                            className="menu-bar-div"
                            onMouseEnter={this.handleMouseHover}
                            onMouseLeave={this.handleMouseHover}
                        >
                            <i className="fa fa-pie-chart mr-2"></i>
                            Kitchen Appliances
                        </div>
                    </NavLink>
                    <NavLink
                        className="menu-link"
                        to="/products"
                        style={{ textDecoration: 'none' }}
                    >
                        <div
                            className="menu-bar-div"
                            onMouseEnter={this.handleMouseHover}
                            onMouseLeave={this.handleMouseHover}
                        >
                            <i className="fa fa-line-chart mr-2"></i>
                            Fashion
                        </div>
                    </NavLink>
                    <NavLink
                        className="menu-link"
                        to="/products"
                        style={{ textDecoration: 'none' }}
                    >
                        <div
                            className="menu-bar-div"
                            onMouseEnter={this.handleMouseHover}
                            onMouseLeave={this.handleMouseHover}
                        >
                            <i className="fa fa-area-chart mr-2"></i>
                            Baby Products
                        </div>
                    </NavLink>
                    <NavLink
                        className="menu-link"
                        to="/products"
                        style={{ textDecoration: 'none' }}
                    >
                        <div
                            className="menu-bar-div"
                            onMouseEnter={this.handleMouseHover}
                            onMouseLeave={this.handleMouseHover}
                        >
                            <i className="fa fa-area-chart mr-2"></i>
                            Sports
                        </div>
                    </NavLink>
                </nav>
            </div>
        );
    }
}