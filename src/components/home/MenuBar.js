import React from 'react';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';

import {
    loadProductCategories,
    loadProductSubCategories,
    hideSubCategories,
    displaySubCategories
} from '../../actions/products';


class MenuBar extends React.Component {
    constructor(props) {
        super(props);
        this.onMouseEnter = this.onMouseEnter.bind(this);
        this.onMouseLeave = this.onMouseLeave.bind(this);
    }

    onMouseEnter(name) {
        // this.setState(this.toggleHoverState);
        if (name === undefined) {
            this.props.hideSubCategories();
        } else {
            this.props.loadProductSubCategories(name)
        }
        // console.log('Enter: ', this.props.products.displaySubCategories);
    }

    onMouseLeave() {
        // console.log('Leave: ', this.props.products.displaySubCategories);
    }

    onNavMouseEnter() {
        !!this.props.products.subCategories.length ? this.props.displaySubCategories() : this.props.hideSubCategories();    
    }

    onNavMouseLeave() {
        this.props.hideSubCategories();
    }

    render() {
        return (
            <div className="menu-bar-container container-fluid menu-container menu-bar-wrapper">
                <nav className="container-fluid__container category-nav">
                    <div className="category-nav__wrapper">
                        <small className="text-muted categories">Categories</small>
                        <div className="category-items">
                            {
                                this.props.products.mainCategories.map((category, i) => (
                                    <NavLink
                                        className="menu-link"
                                        to='/'
                                        onMouseEnter={() => this.onNavMouseEnter()}
                                        onMouseLeave={() => this.onNavMouseLeave()}
                                        style={{ textDecoration: 'none',background:'green' }}
                                        key={i}
                                    >
                                        <div
                                            className="menu-bar-div"
                                            onMouseEnter={() => this.onMouseEnter(category.name)}
                                            onMouseLeave={() => this.onMouseLeave()}
                                            // data-sku={category.clothesSku ? category.clothesSku : null}
                                        >
                                            <i className="fa fa-area-chart mr-2"></i>
                                            {category.name}
                                        </div>
                                    </NavLink>
                                ))
                            }
                        </div>
                    </div>
                </nav>
            </div>
        );
    }
}

const mapStateToProps = (state) => ({
    products: state.products
})

const mapDispatchToProps = (dispatch) => ({
    loadProductCategories: () => dispatch(loadProductCategories()),
    displaySubCategories: () => dispatch(displaySubCategories()),
    hideSubCategories: () => dispatch(hideSubCategories()),
    loadProductSubCategories: (name) => dispatch(loadProductSubCategories(name))
})

export default connect(mapStateToProps, mapDispatchToProps)(MenuBar);