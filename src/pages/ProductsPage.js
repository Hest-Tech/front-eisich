/**
 * This file contains Products Page component
 */

import React, { Fragment } from 'react';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';

import dress from '../assets/images/women-dress-removebg.png';
import NavBar from '../components/NavBar';
import RangeSlider from '../components/RangeSlider';
import ProductNotFound from './ProductNotFound';
import {
    fetchProduct,
    fetchProducts,
    setCurrency,
    loadRelatedCategories
} from '../actions/products';
import {
    handleRange,
    sortByPrice
} from '../actions/filters';
import { history } from '../routes/AppRouter';
import Scroll from '../components/Scroll';
import selectProducts from '../selectors/products';
import ErrorBoundary from '../components/ErrorBoundary';


class ProductsPage extends React.Component {

    constructor(props) {
        super(props);

        this.onRangeMinValueChange = this.onRangeMinValueChange.bind(this);
        this.onRangeMaxValueChange = this.onRangeMaxValueChange.bind(this);

    }

    componentDidMount() {
        this.props.loadRelatedCategories();
    }

    filters(val) {
        console.log('currentCategory: ', this.props.products.currentCategory)
        if (!!this.props.products.currentCategory) {
            const filterList = this.props.products.currentCategory.filters
            const filter = !!filterList ? filterList : [];

            return filter.includes(val);
        }

        return false;
    }

    sort() {
        let sort = [];

        if (!!this.props.products.currentCategory) {
            const sortList = this.props.products.currentCategory.sort;
            sort = !!sortList ? sortList : [];
        }

        return sort;
    }

    fetchCategoryProducts(category) {
        const selectCategory = localStorage.getItem('selectCategory');
        const parsedCategory = !!selectCategory ? JSON.parse(selectCategory) : {};
        let name;
        console.log('category: ', category);

        switch (parsedCategory.name) {
            case 'MAIN_CATEGORY':
                name = 'SUB_CATEGORY'
                break;
            case 'SUB_CATEGORY':
                name = 'INNER_CATEGORY'
                break;
            case 'INNER_CATEGORY':
                name = 'INNER_CATEGORY'
                break;
        }
        console.log('name: ', name);

        this.props.fetchProducts(category.sku, name, category.title)
        history.push(`/products${category.path}`)
    }

    sortItems(e) {
        const sortVal = e.target.value.toLowerCase();

        switch (sortVal) {
            case 'price':
                this.props.sortByPrice()
                break;
        }
    }

    onRangeMinValueChange(e) {
        const value = parseInt(e.target.value);
        const currentRange = this.props.filters.range;

        this.props.handleRange([value, currentRange[1]]);
    }

    onRangeMaxValueChange(e) {
        const value = parseInt(e.target.value);
        const currentRange = this.props.filters.range;

        this.props.handleRange([currentRange[0], value]);
    }

    render() {
        console.log('this.props: ', this.props.products)
        const itemLength = this.props.products.breadCrumbs.length;
        const subCategories = this.props.products.relatedCategory;
        const subCategoriesLength = this.props.products.productsList.length;
        console.log('subCategories: ', subCategories)

        return (
            <div className="App">
                <NavBar />

                <div
                    className="products-container"
                >
                    <nav className="nav-breadcrumb">
                        <span className="nav-breadcrumb__span">
                            <NavLink className="breadcrumb-text" to="/">Home</NavLink>
                            <i className="fas fa-angle-right mx-2" aria-hidden="true"></i>
                            {
                                itemLength && this.props.products.breadCrumbs.map(
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
                                                <div
                                                    className="breadcrumb-text"
                                                    style={{
                                                        color:'#E9BD4C',
                                                        cursor: 'pointer'
                                                    }}
                                                    onClick={() => {
                                                        console.log(history);
                                                        this.props.fetchProducts(item.sku, item.title, item.name);
                                                        history.push(`/products${item.path}`)
                                                    }}
                                                >
                                                    {item.name}
                                                </div>
                                                {
                                                    i !== this.props.products.breadCrumbs.length - 1 && <i
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
                                    <b className="category-title">{!!this.props.products.currentCategory && this.props.products.currentCategory.name}</b>
                                    <div className="product-category-sec">
                                        <div className="product-category-sec__wrapped">
                                            {
                                                !!subCategories && subCategories.map(subCategory => (
                                                    <span key={subCategory.name}>
                                                        <i className="fas fa-angle-right mx2" aria-hidden="true"></i>
                                                        <p
                                                            className="small"
                                                            onClick={() => this.fetchCategoryProducts(subCategory)}
                                                        >{subCategory.name}</p>
                                                    </span>
                                                ))
                                            }
                                        </div>
                                    </div>
                                </div>
                                {
                                    this.filters('brand') && <div className="brand-container">
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
                                }
                                {
                                    this.filters('color') && <div className="color-container">
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
                                }
                            </div>
                        </div>
                        <div className="products-container__products">
                            <div className="products-filter-options">
                                <div className="products-title">
                                    <h3 className="display-6 products-title-h3">{!!this.props.products.currentCategory && this.props.products.currentCategory.name}</h3>
                                    <small className="text-muted">{this.props.products.productsList.length} product{this.props.products.productsList.length > 1 && 's'} found</small>
                                </div>
                                <div className="products-filter">   
                                    {
                                        subCategoriesLength > 48 && <nav className="title-sec-paginator">
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
                                    }
                                    <form className="multi-range-field-option">
                                        <input
                                            type="number"
                                            className="form-control range-input"
                                            value={this.props.filters.min}
                                            onChange={this.onRangeMinValueChange}
                                            name="min"
                                            id="min"
                                            min={0}
                                            max={250000}
                                        />
                                            <span style={{
                                                margin: '0 2rem'
                                            }}><RangeSlider /></span>
                                        <input
                                            type="number"
                                            className="form-control range-input"
                                            value={this.props.filters.max}
                                            onChange={this.onRangeMaxValueChange}
                                            name="max"
                                            id="max"
                                            min={0}
                                            max={250000}
                                        />
                                    </form>
                                    <label className="sort-by-filter">Sort by:
                                        <select
                                            defaultValue="All items"
                                            className="select-dropdown text-muted small"
                                            onChange={(e) => this.sortItems(e)}
                                        >
                                            <option className="text-muted small">All items</option>
                                            <option className="text-muted small" defaultValue="price">Price</option>
                                            {
                                                this.sort().map(val => (
                                                    <React.Fragment key={val}>
                                                        <option>{val}</option>
                                                    </React.Fragment>
                                                ))
                                            }
                                        </select>
                                    </label>
                                    <p className="product-filter-btn">Filters</p>
                                </div>
                            </div>
                            {
                                !!this.props.products.productsList.length ? <div className="product-items">
                                {
                                    this.props.products.productsList.map((product, i) => {
                                        return (
                                            <NavLink
                                                className="product"
                                                to={`/product${product.path}`}
                                                key={i}
                                                onClick={() => this.props.fetchProduct(
                                                    product.pid,
                                                    this.props.products.breadCrumbs,
                                                    {
                                                        title: 'PRODUCT_ITEM',
                                                        sku: product.sku,
                                                        path: product.path,
                                                        name: product.description
                                                    }
                                                )}
                                                style={{ textDecoration: 'none' }}
                                            >
                                                <div className="product__container">
                                                    <div className="product-img-wrapper">
                                                        <img src={`https://imgur.com/${product.imgId}.jpg`} alt={product.description} className="product-img" />
                                                    </div>
                                                    <span className="span"></span>
                                                    <div className="product-details">
                                                        <p className="small product-category">{product.label}</p>
                                                        <p className="product-details__p">{product.description}</p>
                                                        <span className="product-price-details">
                                                            <div className="product-details-price font-italic">
                                                                <div className="new-prices">
                                                                    <p className="font-weight-bold">{setCurrency(product.newPrice)}</p>
                                                                    <strike className="text-muted small">{setCurrency(product.oldPrice)}</strike>
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
                                </div> : <div className="product-not-found">
                                    <ProductNotFound />
                                </div>
                            }
                            
                            {
                                subCategoriesLength > 48 && <nav aria-label="Page navigation example" className="pagination products-paginator">
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
                            }
                        </div>
                    </div>
                </div>
                <Scroll />
            </div>
        );
    }
}

const mapStateToProps = (state) => ({
    products: selectProducts(state.products, state.filters),
    filters: state.filters
});

const mapDispatchToProps = (dispatch) => ({
    fetchProduct: (pid, breadCrumbs, newCrumb) => dispatch(fetchProduct(pid, breadCrumbs, newCrumb)),
    fetchProducts: (sku, name, title) => dispatch(fetchProducts(sku, name, title)),
    loadRelatedCategories: () => dispatch(loadRelatedCategories()),
    handleRange: (range) => dispatch(handleRange(range)),
    sortByPrice: () => dispatch(sortByPrice())
});

export default connect(mapStateToProps, mapDispatchToProps)(ProductsPage);