/**
 * This file contains Products Page component
 */

import React from 'react';
import { NavLink } from 'react-router-dom';

import '../../public/images/hijab.jpg';
import '../../public/images/add-wishlist.svg';

const ProductsPage = () => (
    <div className="products-container">
        <div className="products-container__refine">
            <div className="products-refine">
                <div className="check-selection">
                    <b className="selection-title">YOUR SELECTION</b>
                    <form className="check-selection__form">
                        <span>
                            <input type="checkbox" className="selection-checkbox" />
                            <label>Women</label>
                        </span>
                        <span>
                            <input type="checkbox" className="selection-checkbox" />
                            <label>Teens</label>
                        </span>
                        <span>
                            <input type="checkbox" className="selection-checkbox" />
                            <label>Kids</label>
                        </span>
                    </form>
                </div>
                <div className="brand-container">
                    <b className="filter-name">BRAND</b>
                    <div className="brand-name">TURKISH <small>(3)</small></div>
                    <div className="brand-name">UAE <small>(6)</small></div>
                    <div className="brand-name">PAKISTANI <small>(6)</small></div>
                    <div className="brand-name">SAUDI <small>(34)</small></div>
                    <div className="brand-name">INDONESIAN <small>(33)</small></div>
                </div>
                <div className="color-container">
                    <b className="filter-name">COLORS</b>
                    <div className="color-pallete">
                        <span className="color-item pink" style={{ background: 'pink' }}></span>
                        <span className="color-item purple" style={{ background: 'purple' }}></span>
                        <span className="color-item red" style={{ background: 'red' }}></span>
                        <span className="color-item orange" style={{ background: 'orange' }}></span>
                        <span className="color-item blue" style={{ background: 'blue' }}></span>
                        <span className="color-item green" style={{ background: 'green' }}></span>
                        <span className="color-item grey" style={{ background: 'grey' }}></span>
                        <span className="color-item black" style={{ background: 'black' }}></span>
                    </div>
                </div>
            </div>
        </div>
        <div className="products-container__products">
            <div className="products-filter">
                <select name="pets" id="pet-select">
                    <option value="size">All items</option>
                    <option value="size">Size</option>
                    <option value="price">Price</option>
                    <option value="age">Age</option>
                </select>
                <span>page: <b className="current-page">1</b> of <b className="total-pages">120</b></span>
            </div>
            <div className="product-items">
                <NavLink className="product" to="/product" style={{ textDecoration: 'none' }} >
                    <img src="hijab.jpg" className="product-img" />
                    <span className="add-wishlist">
                        <img src="add-wishlist.svg" />
                    </span>
                    <div className="product-details">
                        <b>Long sleeve Abaya</b>
                        <p>20% OFF</p>
                        <span>
                            <b>KSH2,000</b>
                            <div className="text-warning">
                                <i className="fa fa-star"></i><i className="fa fa-star"></i><i className="fa fa-star"></i><i className="fa fa-star"></i><i className="fa fa-star"></i>
                            </div>
                        </span>
                    </div>
                </NavLink>
                <NavLink className="product" to="/product" style={{ textDecoration: 'none' }} >
                    <img src="hijab.jpg" className="product-img" />
                    <span className="add-wishlist">
                        <img src="add-wishlist.svg" />
                    </span>
                    <div className="product-details">
                        <b>Long sleeve Abaya</b>
                        <p>20% OFF</p>
                        <span>
                            <b>KSH2,000</b>
                            <div className="text-warning">
                                <i className="fa fa-star"></i><i className="fa fa-star"></i><i className="fa fa-star"></i><i className="fa fa-star"></i><i className="fa fa-star"></i>
                            </div>
                        </span>
                    </div>
                </NavLink>
                <NavLink className="product" to="/product" style={{ textDecoration: 'none' }} >
                    <img src="hijab.jpg" className="product-img" />
                    <span className="add-wishlist">
                        <img src="add-wishlist.svg" />
                    </span>
                    <div className="product-details">
                        <b>Long sleeve Abaya</b>
                        <p>20% OFF</p>
                        <span>
                            <b>KSH2,000</b>
                            <div className="text-warning">
                                <i className="fa fa-star"></i><i className="fa fa-star"></i><i className="fa fa-star"></i><i className="fa fa-star"></i><i className="fa fa-star"></i>
                            </div>
                        </span>
                    </div>
                </NavLink>
                <NavLink className="product" to="/product" style={{ textDecoration: 'none' }} >
                    <img src="hijab.jpg" className="product-img" />
                    <span className="add-wishlist">
                        <img src="add-wishlist.svg" />
                    </span>
                    <div className="product-details">
                        <b>Long sleeve Abaya</b>
                        <p>20% OFF</p>
                        <span>
                            <b>KSH2,000</b>
                            <div className="text-warning">
                                <i className="fa fa-star"></i><i className="fa fa-star"></i><i className="fa fa-star"></i><i className="fa fa-star"></i><i className="fa fa-star"></i>
                            </div>
                        </span>
                    </div>
                </NavLink>
                <NavLink className="product" to="/product" style={{ textDecoration: 'none' }} >
                    <img src="hijab.jpg" className="product-img" />
                    <span className="add-wishlist">
                        <img src="add-wishlist.svg" />
                    </span>
                    <div className="product-details">
                        <b>Long sleeve Abaya</b>
                        <p>20% OFF</p>
                        <span>
                            <b>KSH2,000</b>
                            <div className="text-warning">
                                <i className="fa fa-star"></i><i className="fa fa-star"></i><i className="fa fa-star"></i><i className="fa fa-star"></i><i className="fa fa-star"></i>
                            </div>
                        </span>
                    </div>
                </NavLink>
                <NavLink className="product" to="/product" style={{ textDecoration: 'none' }} >
                    <img src="hijab.jpg" className="product-img" />
                    <span className="add-wishlist">
                        <img src="add-wishlist.svg" />
                    </span>
                    <div className="product-details">
                        <b>Long sleeve Abaya</b>
                        <p>20% OFF</p>
                        <span>
                            <b>KSH2,000</b>
                            <div className="text-warning">
                                <i className="fa fa-star"></i><i className="fa fa-star"></i><i className="fa fa-star"></i><i className="fa fa-star"></i><i className="fa fa-star"></i>
                            </div>
                        </span>
                    </div>
                </NavLink>
                <NavLink className="product" to="/product" style={{ textDecoration: 'none' }} >
                    <img src="hijab.jpg" className="product-img" />
                    <span className="add-wishlist">
                        <img src="add-wishlist.svg" />
                    </span>
                    <div className="product-details">
                        <b>Long sleeve Abaya</b>
                        <p>20% OFF</p>
                        <span>
                            <b>KSH2,000</b>
                            <div className="text-warning">
                                <i className="fa fa-star"></i><i className="fa fa-star"></i><i className="fa fa-star"></i><i className="fa fa-star"></i><i className="fa fa-star"></i>
                            </div>
                        </span>
                    </div>
                </NavLink>
                <NavLink className="product" to="/product" style={{ textDecoration: 'none' }} >
                    <img src="hijab.jpg" className="product-img" />
                    <span className="add-wishlist">
                        <img src="add-wishlist.svg" />
                    </span>
                    <div className="product-details">
                        <b>Long sleeve Abaya</b>
                        <p>20% OFF</p>
                        <span>
                            <b>KSH2,000</b>
                            <div className="text-warning">
                                <i className="fa fa-star"></i><i className="fa fa-star"></i><i className="fa fa-star"></i><i className="fa fa-star"></i><i className="fa fa-star"></i>
                            </div>
                        </span>
                    </div>
                </NavLink>
                <NavLink className="product" to="/product" style={{ textDecoration: 'none' }} >
                    <img src="hijab.jpg" className="product-img" />
                    <span className="add-wishlist">
                        <img src="add-wishlist.svg" />
                    </span>
                    <div className="product-details">
                        <b>Long sleeve Abaya</b>
                        <p>20% OFF</p>
                        <span>
                            <b>KSH2,000</b>
                            <div className="text-warning">
                                <i className="fa fa-star"></i><i className="fa fa-star"></i><i className="fa fa-star"></i><i className="fa fa-star"></i><i className="fa fa-star"></i>
                            </div>
                        </span>
                    </div>
                </NavLink>
            </div>
            <nav aria-label="Page navigation example" className="pagination">
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
);

export default ProductsPage;