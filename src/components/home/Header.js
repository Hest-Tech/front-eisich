/**
 * This file contains the Header component
 */

import React from 'react';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';

import bags from '../../assets/images/bags.jpg';
import electronics from '../../assets/images/electronics.jpg';
import shoes from '../../assets/images/shoes.jpg';
import MenuBar from './MenuBar';
import SideBar from './SideBar';
import {
    loadProductCategories,
    loadProductSubCategories,
    displaySubCategories,
    hideSubCategories,
    fetchProducts
} from '../../actions/products';


class Header extends React.Component {
    constructor(props) {
        super(props);
        this.fetchSubCategory = this.fetchSubCategory.bind(this);
        this.fetchInnerCategory = this.fetchInnerCategory.bind(this);        
    }

    fetchSubCategory(e) {
        const name = e.target.dataset.name;
        const sku = e.target.dataset.sku;

        this.props.fetchProducts(sku, name);
        console.log()
    }

    fetchInnerCategory(e) {
        const name = e.target.dataset.name;
        const sku = e.target.dataset.sku;

        this.props.fetchProducts(sku, name);
    }

    render() {
        return (
            <header className="d-flex App-header">
                <div className="header-sec-container">
                    <MenuBar />
                    <div className="carousel-wrapper">
                        <div
                            id="slider"
                            className="carousel slide"
                            data-ride="carousel"
                        >
                            <ol className="carousel-indicators">
                                <li data-target="#slider" data-slide-to="0" className="active"></li>
                                <li data-target="#slider" data-slide-to="1"></li>
                                <li data-target="#slider" data-slide-to="2"></li>
                            </ol>
                            <div className="carousel-inner">
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
                            <a className="carousel-control-prev" href="#slider" role="button" data-slide="prev">
                                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                                <span className="sr-only">Previous</span>
                            </a>
                            <a className="carousel-control-next" href="#slider" role="button" data-slide="next">
                                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                                <span className="sr-only">Next</span>
                            </a>
                        </div>

                        {this.props.products.displaySubCategories && <nav
                            className="extended-menu-bar"
                            onMouseEnter={() => this.props.displaySubCategories()}
                            onMouseLeave={() => this.props.hideSubCategories()}
                        >
                            <div
                                className="extended-menu-bar__container"
                            >
                                {
                                    !!this.props.products.subCategories.length && this.props.products.subCategories.map(
                                        (category, i) => {
                                        // category = JSON.parse(category);
                                        // let subCategory = JSON.parse(category.sub_category);
                                            let key = i + 1;
                                            let name = `table-column category-column tc-${key}`;

                                            return (

                                                <div
                                                    className={name}
                                                    key={key}
                                                >
                                                    <div className="table-row category-column__inner tr-1">
                                                        <NavLink
                                                            to={`products${category.path}`}
                                                            data-name="SUB_CATEGORY"
                                                            data-sku={category.sku}
                                                            onClick={this.fetchSubCategory}
                                                            className='category-link category-title th'
                                                        >
                                                            {category.name}
                                                        </NavLink><hr />
                                                        <ul
                                                            className="table-row-list category-list-items"
                                                        >
                                                            {
                                                                category.innerCategory.map((innerCategory, _i) => (
                                                                    <li
                                                                        key={_i}
                                                                    >
                                                                        <NavLink
                                                                            to={`products${innerCategory.path}`}
                                                                            className='category-link'
                                                                            data-name="INNER_CATEGORY"
                                                                            data-sku={innerCategory.sku}
                                                                            onClick={this.fetchInnerCategory}
                                                                        >
                                                                            {innerCategory.name}
                                                                        </NavLink>
                                                                    </li>
                                                               ))
                                                            }
                                                        </ul>
                                                    </div>
                                                </div>
                                            )
                                        }
                                    )
                                }
                            </div>
                        </nav>}
                    </div>
                    <SideBar />
                </div>
            </header>
        );
    }
};


const mapStateToProps = (state) => ({
    products: state.products
})

const mapDispatchToProps = (dispatch) => ({
    loadProductCategories: () => dispatch(loadProductCategories()),
    displaySubCategories: () => dispatch(displaySubCategories()),
    hideSubCategories: () => dispatch(hideSubCategories()),
    fetchProducts: (sku, name) => dispatch(fetchProducts(sku, name)),
    loadProductSubCategories: () => dispatch(loadProductSubCategories())
})

export default connect(mapStateToProps, mapDispatchToProps)(Header);

/*

    
                            <div className="extended-menu-bar__container">
                                <div className="table-column tc-1">
                                    <div className="table-row tr-1">
                                        <b className="th">MOBILE PHONES</b><hr />
                                        <ul className="table-row-list">
                                            <li>Powerbanks</li>
                                            <li>Smart Watches</li>
                                            <li>Phone Covers & Cases</li>
                                            <li>Screen Protectors</li>
                                            <li>Chargers & Adaptors</li>
                                        </ul>
                                    </div>
                                    <div className="table-row tr-2">
                                        <b className="th">MOBILE PHONES</b><hr />
                                        <ul className="table-row-list">
                                            <li>Powerbanks</li>
                                            <li>Smart Watches</li>
                                            <li>Phone Covers & Cases</li>
                                            <li>Screen Protectors</li>
                                            <li>Chargers & Adaptors</li>
                                            <li>Selfie Sticks</li>
                                            <li>Phone Batteries</li>
                                            <li>Accessories Under 1,000</li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="table-column tc-2">
                                    <div className="table-row tr-1">
                                        <b className="th">MOBILE PHONES</b><hr />
                                        <ul className="table-row-list">
                                            <li>Powerbanks</li>
                                            <li>Smart Watches</li>
                                            <li>Phone Covers & Cases</li>
                                            <li>Screen Protectors</li>
                                            <li>Chargers & Adaptors</li>
                                        </ul>
                                    </div>
                                    <div className="table-row tr-2">
                                        <b className="th">MOBILE PHONES</b><hr />
                                        <ul className="table-row-list">
                                            <li>Powerbanks</li>
                                            <li>Smart Watches</li>
                                            <li>Screen Protectors</li>
                                            <li>Chargers & Adaptors</li>
                                            <li>Selfie Sticks</li>
                                            <li>Phone Batteries</li>
                                            <li>Accessories Under 1,000</li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="table-column tc-3">
                                    <div className="table-row tr-1">
                                        <b className="th">MOBILE PHONES</b><hr />
                                        <ul className="table-row-list">
                                            <li>Powerbanks</li>
                                            <li>Smart Watches</li>
                                            <li>Phone Covers & Cases</li>
                                            <li>Screen Protectors</li>
                                            <li>Accessories Under 1,000</li>
                                            <li>Accessories Under 1,000</li>
                                            <li>Chargers & Adaptors</li>
                                        </ul>
                                    </div>
                                    <div className="table-row tr-2">
                                        <b className="th">MOBILE PHONES</b><hr />
                                        <ul className="table-row-list">
                                            <li>Powerbanks</li>
                                            <li>Smart Watches</li>
                                            <li>Phone Covers & Cases</li>
                                            <li>Screen Protectors</li>
                                            <li>Chargers & Adaptors</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
*/

/*

                                                    <div className="table-row tr-2">
                                                        <b className="th">{category.title}</b><hr />
                                                        <ul className="table-row-list">
                                                            <li>Powerbanks</li>
                                                            <li>Smart Watches</li>
                                                            <li>Phone Covers & Cases</li>
                                                            <li>Screen Protectors</li>
                                                            <li>Chargers & Adaptors</li>
                                                            <li>Selfie Sticks</li>
                                                            <li>Phone Batteries</li>
                                                            <li>Accessories Under 1,000</li>
                                                        </ul>
                                                    </div>
*/