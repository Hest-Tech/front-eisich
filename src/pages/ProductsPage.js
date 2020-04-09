/**
 * This file contains Products Page component
 */

import React, { Fragment } from 'react';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';

import dress from '../assets/images/women-dress-removebg.png';
import NavBar from '../components/NavBar';
import ProductNotFound from './ProductNotFound';
import { fetchProduct, fetchProducts } from '../actions/products';
import { history } from '../routes/AppRouter';
import Scroll from '../components/Scroll';


const ProductsPage = (props) => {
    const itemLength = props.products.breadCrumbs.length;

    return (
        <div className="App">
            <NavBar />
            {!!props.products.productsList.length ? <div
                className="products-container"
            >
                <nav className="nav-breadcrumb">
                    <span className="nav-breadcrumb__span">
                        <NavLink className="breadcrumb-text" to="/">Home</NavLink>
                        <i className="fas fa-angle-right mx-2" aria-hidden="true"></i>
                        {
                            itemLength && props.products.breadCrumbs.map(
                                (item, i) => {
                                    return i === itemLength - 1 ? (
                                        <p
                                            className="text-muted"
                                            key={i}
                                            data-sku={item.sku}
                                        >
                                            {item.name}
                                        </p>
                                    ) : (
                                        <React.Fragment
                                            key={i}
                                        >
                                            <a
                                                className="breadcrumb-text"
                                                href={`http://localhost:8080/products${item.path}`}
                                                // href='#'
                                                // data-sku={item.sku}
                                                style={{color:'#E9BD4C'}}
                                                onClick={() => {
                                                    console.log('clicked')
                                                    props.fetchProducts(item.sku, item.name, item.title)
                                                }}
                                            >
                                                {item.name}
                                            </a>
                                            {
                                                i !== props.products.breadCrumbs.length - 1 && <i
                                                    className="fas fa-angle-right mx-2"
                                                    aria-hidden="true"></i>
                                            }
                                        </React.Fragment>
                                    )
                                }
                            )
                        }
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
                                <h3 className="display-6 products-title-h3">{props.products.productsTitle}</h3>
                                <small className="text-muted">{props.products.productsList.length} product{props.products.productsList.length > 1 && 's'} found</small>
                            </div>
                            <div className="products-filter">
                                <nav className="title-sec-paginator">
                                    <small>
                                        <ul className="text-sm">
                                            <li className="page-item disabled">
                                                <a className="page-link" href="#" tabIndex="-1">1</a>
                                            </li>
                                            <li className="page-item"><a className="page-link" href="#">2</a></li>
                                            <li className="page-item"><a className="page-link" href="#">3</a></li>
                                        </ul>
                                    </small>
                                </nav>
                                <form className="multi-range-field-option">
                                    <input type="text" className="form-control" defaultValue="0" />
                                    <input
                                        id="multi"
                                        className="multi-range"
                                        type="range"
                                        min="0"
                                        max="250000"
                                        step="1500"
                                    />
                                    <input type="text" className="form-control" defaultValue="KSH12,500" />
                                </form>
                                <label className="sort-by-filter">Sort by:
                                    <select
                                        defaultValue="All items"
                                        className="select-dropdown text-muted small"
                                    >
                                        <option className="text-muted small">All items</option>
                                        <option className="text-muted small" defaultValue="size">Size</option>
                                        <option className="text-muted small" defaultValue="price">Price</option>
                                        <option className="text-muted small" defaultValue="age">Age</option>
                                    </select>
                                </label>
                                <p className="product-filter-btn">Filters</p>
                            </div>
                        </div>
                        {console.log(props.products.productsList)}
                        <div className="product-items">

                            {
                                props.products.productsList.map((product, i) => {
                                    return (
                                        <NavLink
                                            className="product"
                                            to={`/product${product.path}`}
                                            key={i}
                                            onClick={() => props.fetchProduct(product.pid)}
                                            style={{ textDecoration: 'none' }}
                                        >
                                            <div className="product__container">
                                                <div className="product-img-wrapper">
                                                    <img src={`${product.imgLink}.jpg`} alt="dress" className="product-img" />
                                                </div>
                                                <span className="span"></span>
                                                <div className="product-details">
                                                    <p className="small product-category">Fashion</p>
                                                    <p className="product-details__p">{product.description}</p>
                                                    <span className="product-price-details">
                                                        <div className="product-details-price font-italic">
                                                            <div className="new-prices">
                                                                <p className="font-weight-bold">KSH{product.newPrice}</p>
                                                                <strike className="text-muted small">KSH{product.oldPrice}</strike>
                                                            </div>
                                                            <span className="price-off small font-weight-bold text-warning">{((product.saving/product.oldPrice)*100).toFixed(1)}%<br /> OFF</span>
                                                        </div>
                                                        <div className="text-warning">
                                                            <i className="fa fa-star"></i><i className="fa fa-star"></i><i className="fa fa-star"></i><i className="fa fa-star"></i><i className="fa fa-star"></i>
                                                        </div>
                                                    </span>
                                                </div>
                                            </div>
                                        </NavLink>                                        
                                    );
                                })
                            }
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
            </div> : <ProductNotFound />}
            <Scroll />
        </div>
    );
}
const mapStateToProps = (state) => ({
    products: state.products
});

const mapDispatchToProps = (dispatch) => ({
    fetchProduct: (pid) => dispatch(fetchProduct(pid)),
    fetchProducts: (sku, name, title) => dispatch(fetchProducts(sku, name, title))
    // loadUser: () => dispatch(loadUser()),
    // signOutUser: () => dispatch(signOutUser())
});

export default connect(mapStateToProps, mapDispatchToProps)(ProductsPage);