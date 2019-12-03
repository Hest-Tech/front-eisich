/**
 * This file contains Products Page component
 */

import React from 'react';
import { NavLink } from 'react-router-dom';

import dress from '../assets/images/women-dress-removebg.png';
import NavBar from './NavBar';


const ProductsPage = () => (
    <div className="App">
        <NavBar />

        <div className="products-container">
            <nav className="nav-breadcrumb">
                <span class="nav-breadcrumb__span">
                    <NavLink className="breadcrumb-text" to="/">Home</NavLink>
                    <i class="fas fa-angle-right mx-2" aria-hidden="true"></i>
                    <NavLink className="breadcrumb-text" to="/">Women's Fashion</NavLink>
                    <i class="fas fa-angle-right mx-2" aria-hidden="true"></i>
                    <p class="breadcrumb-item active">Products</p>
                </span>
            </nav>
            <div className="products-container__wrapped">
                <div className="products-container__refine">
                    <div className="products-refine">
                        <div className="product-category-selection">
                            <b className="category-title">Clothing</b>
                            <div className="product-category-sec">
                                <div className="product-category-sec__wrapped">
                                    <span>
                                        <i className="fas fa-angle-right mx2" aria-hidden="true"></i>
                                        <p className="small">Sleep & Lounge</p>
                                    </span>
                                    <span>
                                        <i className="fas fa-angle-right mx2" aria-hidden="true"></i>
                                        <p className="small">Tops & Tees</p>
                                    </span>
                                    <span>
                                        <i className="fas fa-angle-right mx2" aria-hidden="true"></i>
                                        <p className="small">Dresses</p>
                                    </span>
                                    <span>
                                        <i className="fas fa-angle-right mx2" aria-hidden="true"></i>
                                        <p className="small">Swimsuits & Cover Ups</p>
                                    </span>
                                    <span>
                                        <i className="fas fa-angle-right mx2" aria-hidden="true"></i>
                                        <p className="small">Active</p>
                                    </span>
                                    <span>
                                        <i className="fas fa-angle-right mx2" aria-hidden="true"></i>
                                        <p className="small">Coats, Jackets & Vests</p>
                                    </span>
                                    <span>
                                        <i className="fas fa-angle-right mx2" aria-hidden="true"></i>
                                        <p className="small">Jumpsuits & Overalls</p>
                                    </span>
                                    <span>
                                        <i className="fas fa-angle-right mx2" aria-hidden="true"></i>
                                        <p className="small">Skirts</p>
                                    </span>
                                    <span>
                                        <i className="fas fa-angle-right mx2" aria-hidden="true"></i>
                                        <p className="small">Pants</p>
                                    </span>
                                    <span>
                                        <i className="fas fa-angle-right mx2" aria-hidden="true"></i>
                                        <p className="small">Socks & Hosiery</p>
                                    </span>
                                    <span>
                                        <i className="fas fa-angle-right mx2" aria-hidden="true"></i>
                                        <p className="small">Suiting & Blazers</p>
                                    </span>
                                    <span>
                                        <i className="fas fa-angle-right mx2" aria-hidden="true"></i>
                                        <p className="small">Sweaters</p>
                                    </span>
                                    <span>
                                        <i className="fas fa-angle-right mx2" aria-hidden="true"></i>
                                        <p className="small">Leggings</p>
                                    </span>
                                    <span>
                                        <i className="fas fa-angle-right mx2" aria-hidden="true"></i>
                                        <p className="small">Jeans</p>
                                    </span>
                                    <span>
                                        <i className="fas fa-angle-right mx2" aria-hidden="true"></i>
                                        <p className="small">Shorts</p>
                                    </span>
                                </div>
                            </div>
                        </div>
                        <div className="brand-container">
                            <b className="category-title">Brand</b>
                            <div className="product-brand">
                                <div className="product-brand__wrapped">
                                    <label className="small product-brand-name">
                                        <input type="checkbox" />
                                        <p>Turkish</p>
                                    </label>
                                    <label className="small product-brand-name">
                                        <input type="checkbox" />
                                        <p>UAE</p>
                                    </label>
                                    <label className="small product-brand-name">
                                        <input type="checkbox" />
                                        <p>Pakistani</p>
                                    </label>
                                    <label className="small product-brand-name">
                                        <input type="checkbox" />
                                        <p>SaudiArabia</p>
                                    </label>
                                    <label className="small product-brand-name">
                                        <input type="checkbox" />
                                        <p>Indonesian</p>
                                    </label>
                                </div>
                            </div>
                        </div>
                        <div className="color-container">
                            <b className="category-title">Color</b>
                            <div className="product-color">
                                <div className="product-color__wrapped product-brand__wrapped">
                                    <label className="small product-brand-name">
                                        <span className="color-pallete-item red"></span>
                                        <input type="checkbox" />
                                        <p>Red</p>
                                    </label>
                                    <label className="small product-brand-name">
                                        <span className="color-pallete-item navy"></span>
                                        <input type="checkbox" />
                                        <p>Navy blue</p>
                                    </label>
                                    <label className="small product-brand-name">
                                        <span className="color-pallete-item orange"></span>
                                        <input type="checkbox" />
                                        <p>Orange</p>
                                    </label>
                                    <label className="small product-brand-name">
                                        <span className="color-pallete-item brown"></span>
                                        <input type="checkbox" />
                                        <p>Brown</p>
                                    </label>
                                    <label className="small product-brand-name">
                                        <span className="color-pallete-item burlywood"></span>
                                        <input type="checkbox" />
                                        <p>Baige</p>
                                    </label>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="products-container__products">
                    <div className="products-filter-options">
                        <div className="products-title">
                            <h3 className="display-6">WOMEN'S CLOTHING</h3>
                            <small class="text-muted">34 products found</small>
                        </div>
                        <div className="products-filter">
                            <nav className="title-sec-paginator">
                                <small>
                                    <ul class="text-sm">
                                        <li class="page-item disabled">
                                            <a class="page-link" href="#" tabindex="-1">1</a>
                                        </li>
                                        <li class="page-item"><a class="page-link" href="#">2</a></li>
                                        <li class="page-item"><a class="page-link" href="#">3</a></li>
                                    </ul>
                                </small>
                            </nav>
                            <form class="multi-range-field-option">
                                <input type="text" class="form-control" value="0" />
                                <input
                                    id="multi"
                                    class="multi-range"
                                    type="range"
                                    min="0"
                                    max="250000"
                                    step="1500"
                                />
                                <input type="text" class="form-control" value="KSH12,500" />
                            </form>
                            <label>Sort by:
                            <select class="select-dropdown text-muted small">
                                    <option className="text-muted small" selected>All items</option>
                                    <option className="text-muted small" value="size">Size</option>
                                    <option className="text-muted small" value="price">Price</option>
                                    <option className="text-muted small" value="age">Age</option>
                                </select>
                            </label>
                        </div>
                    </div>
                    <div className="product-items">
                        <NavLink className="product" to="/product" style={{ textDecoration: 'none' }} >
                            <div className="product__container">
                                <div className="product-img-wrapper">
                                    <img src={dress} alt="dress" className="product-img" />
                                </div>
                                <div className="product-details">
                                    <p className="small product-category">Fashion</p>
                                    <p className="product-details__p">Eleifend mi in nulla posuere sollicitudin aliquam ultrices..</p>
                                    <span className="product-price-details">
                                        <div className="product-details-price font-italic">
                                            <div className="new-prices">
                                                <p className="font-weight-bold">KSH2,000</p>
                                                <strike className="text-muted small">KSH2,500</strike>
                                            </div>
                                            <span className="price-off small font-weight-bold text-warning">20%<br /> OFF</span>
                                        </div>
                                        <div className="text-warning">
                                            <i className="fa fa-star"></i><i className="fa fa-star"></i><i className="fa fa-star"></i><i className="fa fa-star"></i><i className="fa fa-star"></i>
                                        </div>
                                    </span>
                                </div>
                            </div>
                        </NavLink>
                        <NavLink className="product" to="/product" style={{ textDecoration: 'none' }} >
                            <div className="product__container">
                                <div className="product-img-wrapper">
                                    <img src={dress} alt="dress" className="product-img" />
                                </div>
                                <div className="product-details">
                                    <p className="small product-category">Fashion</p>
                                    <p className="product-details__p">Eleifend mi in nulla posuere sollicitudin aliquam ultrices..</p>
                                    <span className="product-price-details">
                                        <div className="product-details-price font-italic">
                                            <div className="new-prices">
                                                <p className="font-weight-bold">KSH2,000</p>
                                                <strike className="text-muted small">KSH2,500</strike>
                                            </div>
                                            <span className="price-off small font-weight-bold text-warning">20%<br /> OFF</span>
                                        </div>
                                        <div className="text-warning">
                                            <i className="fa fa-star"></i><i className="fa fa-star"></i><i className="fa fa-star"></i><i className="fa fa-star"></i><i className="fa fa-star"></i>
                                        </div>
                                    </span>
                                </div>
                            </div>
                        </NavLink>
                        <NavLink className="product" to="/product" style={{ textDecoration: 'none' }} >
                            <div className="product__container">
                                <div className="product-img-wrapper">
                                    <img src={dress} alt="dress" className="product-img" />
                                </div>
                                <div className="product-details">
                                    <p className="small product-category">Fashion</p>
                                    <p className="product-details__p">Eleifend mi in nulla posuere sollicitudin aliquam ultrices..</p>
                                    <span className="product-price-details">
                                        <div className="product-details-price font-italic">
                                            <div className="new-prices">
                                                <p className="font-weight-bold">KSH2,000</p>
                                                <strike className="text-muted small">KSH2,500</strike>
                                            </div>
                                            <span className="price-off small font-weight-bold text-warning">20%<br /> OFF</span>
                                        </div>
                                        <div className="text-warning">
                                            <i className="fa fa-star"></i><i className="fa fa-star"></i><i className="fa fa-star"></i><i className="fa fa-star"></i><i className="fa fa-star"></i>
                                        </div>
                                    </span>
                                </div>
                            </div>
                        </NavLink>
                        <NavLink className="product" to="/product" style={{ textDecoration: 'none' }} >
                            <div className="product__container">
                                <div className="product-img-wrapper">
                                    <img src={dress} alt="dress" className="product-img" />
                                </div>
                                <div className="product-details">
                                    <p className="small product-category">Fashion</p>
                                    <p className="product-details__p">Eleifend mi in nulla posuere sollicitudin aliquam ultrices..</p>
                                    <span className="product-price-details">
                                        <div className="product-details-price font-italic">
                                            <div className="new-prices">
                                                <p className="font-weight-bold">KSH2,000</p>
                                                <strike className="text-muted small">KSH2,500</strike>
                                            </div>
                                            <span className="price-off small font-weight-bold text-warning">20%<br /> OFF</span>
                                        </div>
                                        <div className="text-warning">
                                            <i className="fa fa-star"></i><i className="fa fa-star"></i><i className="fa fa-star"></i><i className="fa fa-star"></i><i className="fa fa-star"></i>
                                        </div>
                                    </span>
                                </div>
                            </div>
                        </NavLink>
                        <NavLink className="product" to="/product" style={{ textDecoration: 'none' }} >
                            <div className="product__container">
                                <div className="product-img-wrapper">
                                    <img src={dress} alt="dress" className="product-img" />
                                </div>
                                <div className="product-details">
                                    <p className="small product-category">Fashion</p>
                                    <p className="product-details__p">Eleifend mi in nulla posuere sollicitudin aliquam ultrices..</p>
                                    <span className="product-price-details">
                                        <div className="product-details-price font-italic">
                                            <div className="new-prices">
                                                <p className="font-weight-bold">KSH2,000</p>
                                                <strike className="text-muted small">KSH2,500</strike>
                                            </div>
                                            <span className="price-off small font-weight-bold text-warning">20%<br /> OFF</span>
                                        </div>
                                        <div className="text-warning">
                                            <i className="fa fa-star"></i><i className="fa fa-star"></i><i className="fa fa-star"></i><i className="fa fa-star"></i><i className="fa fa-star"></i>
                                        </div>
                                    </span>
                                </div>
                            </div>
                        </NavLink>
                        <NavLink className="product" to="/product" style={{ textDecoration: 'none' }} >
                            <div className="product__container">
                                <div className="product-img-wrapper">
                                    <img src={dress} alt="dress" className="product-img" />
                                </div>
                                <div className="product-details">
                                    <p className="small product-category">Fashion</p>
                                    <p className="product-details__p">Eleifend mi in nulla posuere sollicitudin aliquam ultrices..</p>
                                    <span className="product-price-details">
                                        <div className="product-details-price font-italic">
                                            <div className="new-prices">
                                                <p className="font-weight-bold">KSH2,000</p>
                                                <strike className="text-muted small">KSH2,500</strike>
                                            </div>
                                            <span className="price-off small font-weight-bold text-warning">20%<br /> OFF</span>
                                        </div>
                                        <div className="text-warning">
                                            <i className="fa fa-star"></i><i className="fa fa-star"></i><i className="fa fa-star"></i><i className="fa fa-star"></i><i className="fa fa-star"></i>
                                        </div>
                                    </span>
                                </div>
                            </div>
                        </NavLink>
                        <NavLink className="product" to="/product" style={{ textDecoration: 'none' }} >
                            <div className="product__container">
                                <div className="product-img-wrapper">
                                    <img src={dress} alt="dress" className="product-img" />
                                </div>
                                <div className="product-details">
                                    <p className="small product-category">Fashion</p>
                                    <p className="product-details__p">Eleifend mi in nulla posuere sollicitudin aliquam ultrices..</p>
                                    <span className="product-price-details">
                                        <div className="product-details-price font-italic">
                                            <div className="new-prices">
                                                <p className="font-weight-bold">KSH2,000</p>
                                                <strike className="text-muted small">KSH2,500</strike>
                                            </div>
                                            <span className="price-off small font-weight-bold text-warning">20%<br /> OFF</span>
                                        </div>
                                        <div className="text-warning">
                                            <i className="fa fa-star"></i><i className="fa fa-star"></i><i className="fa fa-star"></i><i className="fa fa-star"></i><i className="fa fa-star"></i>
                                        </div>
                                    </span>
                                </div>
                            </div>
                        </NavLink>
                        <NavLink className="product" to="/product" style={{ textDecoration: 'none' }} >
                            <div className="product__container">
                                <div className="product-img-wrapper">
                                    <img src={dress} alt="dress" className="product-img" />
                                </div>
                                <div className="product-details">
                                    <p className="small product-category">Fashion</p>
                                    <p className="product-details__p">Eleifend mi in nulla posuere sollicitudin aliquam ultrices..</p>
                                    <span className="product-price-details">
                                        <div className="product-details-price font-italic">
                                            <div className="new-prices">
                                                <p className="font-weight-bold">KSH2,000</p>
                                                <strike className="text-muted small">KSH2,500</strike>
                                            </div>
                                            <span className="price-off small font-weight-bold text-warning">20%<br /> OFF</span>
                                        </div>
                                        <div className="text-warning">
                                            <i className="fa fa-star"></i><i className="fa fa-star"></i><i className="fa fa-star"></i><i className="fa fa-star"></i><i className="fa fa-star"></i>
                                        </div>
                                    </span>
                                </div>
                            </div>
                        </NavLink>
                    </div>
                    <nav aria-label="Page navigation example" className="pagination products-paginator">
                        <ul className="pagination justify-content-center">
                            <li className="page-item disabled">
                                <a className="page-link" href="#" tabIndex="-1">Previous</a>
                            </li>
                            <li className="page-item"><a className="page-link" href="#">1</a></li>
                            <li className="page-item"><a className="page-link" href="#">2</a></li>
                            <li className="page-item"><a className="page-link" href="#">3</a></li>
                            <li className="page-item">
                                <a className="page-link" href="#">Next</a>
                            </li>
                        </ul>
                    </nav>
                </div>
            </div>
        </div>
    </div>
);

export default ProductsPage;