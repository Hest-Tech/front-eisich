import React from 'react';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';

import {
    loadProductCategories,
    loadProductSubCategories
} from '../../actions/products';


class MenuBar extends React.Component {
    constructor(props) {
        super(props);
        this.handleMouseHover = this.handleMouseHover.bind(this);

        this.state = {
            isHovering: false
        }
    }

    handleMouseHover(name) {
        console.log('name: ', name);
        this.setState(this.toggleHoverState);
        this.props.loadProductSubCategories(name);
    }

    toggleHoverState(state) {
        return {
            isHovering: !state.isHovering,
        };
    }

    componentDidMount() {
        // this.props.loadProductCategories();
    }

    componentDidUpdate() {

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
                                        style={{ textDecoration: 'none' }}
                                        key={i}
                                    >
                                        <div
                                            className="menu-bar-div"
                                            onMouseEnter={() => this.handleMouseHover(category.name)}
                                            // onMouseLeave={this.handleMouseHover}
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
    loadProductCategory: () => dispatch(loadProductCategory()),
    loadProductSubCategories: (name) => dispatch(loadProductSubCategories(name))
})

export default connect(mapStateToProps, mapDispatchToProps)(MenuBar);