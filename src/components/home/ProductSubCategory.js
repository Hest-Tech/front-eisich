import React from 'react';
import { connect } from 'react-redux';

import {
    loadProductCategory,
    loadProductSubCategories
} from '../../actions/products';

class ProductSubCategory extends React.Component {

    componentDidMount() {
        let searchCategory = this.props.products.searchCategory;
        console.log(searchCategory)

        this.props.loadProductCategory(this.props.name);
    }

    render() {
        return (
            <nav
                className="extended-menu-bar"
                onMouseEnter={() => this.props.loadProductSubCategories()}
                onMouseLeave={() => this.props.loadProductSubCategories()}
            >
                <div className="extended-menu-bar__container">
                    {
                        this.props.products.productCategories.map((category, i) => {
                            let subCategory = JSON.parse(category.sub_category);
                            let key = i+1;
                            let name = `table-column tc-${key}`;

                            <div
                                className={name}
                                key={key}
                            >
                                <div className="table-row tr-1">
                                    <b className="th">{category.title}</b><hr />
                                    {
                                        subCategory.map((innerCategory, _i) => {
                                            <ul
                                                className="table-row-list"
                                                key={_i}
                                            >
                                                <li>{innerCategory}</li>
                                            </ul>
                                       })
                                    }
                                </div>
                            </div>
                        })
                    }
                </div>
            </nav>
            );
    }
}

const mapStateToProps = (state) => ({
    products: state.products
})

const mapDispatchToProps = (dispatch) => ({
    loadProductCategory: () => dispatch(loadProductCategory())
    loadProductSubCategories: () => dispatch(loadProductSubCategories())
})

export default connect(mapStateToProps, mapDispatchToProps)(ProductSubCategory);