/**
 * This file contains the Header component
 */

import React from 'react';

import bags from '../../assets/images/bags.jpg';
import electronics from '../../assets/images/electronics.jpg';
import shoes from '../../assets/images/shoes.jpg';
import MenuBar from './MenuBar';
import SideBar from './SideBar';

const Header = () => (
    <header className="container d-flex App-header">
        <MenuBar />
        <div
            id="carouselExampleIndicators"
            className="carousel slide col-sm-8"
            data-ride="carousel"
            style={{height: '38rem'}}
        >

            <ol className="carousel-indicators">
                <li style={{marginRight:'.5rem'}} data-target="#carouselExampleIndicators" data-slide-to="0" className="active"></li>
                <li style={{marginRight:'.5rem'}} data-target="#carouselExampleIndicators" data-slide-to="1"></li>
                <li style={{marginRight:'.5rem'}} data-target="#carouselExampleIndicators" data-slide-to="2"></li>
            </ol>
            <div className="carousel-inner" style={{height: '38rem'}}>
                <div className="carousel-item active">
                    <img className="d-block w-100" src={electronics} alt="First slide" />
                </div>
                <div className="carousel-item">
                    <img className="d-block w-100" src={shoes} alt="Second slide" />
                </div>
                <div className="carousel-item">
                    <img className="d-block w-100" src={bags} alt="Third slide" />
                </div>
            </div>
            <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="sr-only">Previous</span>
            </a>
            <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="sr-only">Next</span>
            </a>
        </div>
        <SideBar />
    </header>
);

export default Header;