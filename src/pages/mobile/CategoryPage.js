import React, { Fragment } from 'react';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';

import NavBar from '../../components/NavBar';
import '../../assets/images/iphone.png';
import Scroll from '../../components/Scroll';

import {
    fetchProducts,
    loadProductSubCategories,
    fetchCategory
} from '../../actions/products';


class CategoryPage extends React.Component {
    constructor(props) {
        super(props);
        this.toggleAccordion = this.toggleAccordion.bind(this);
        this.fetchCategory = this.fetchCategory.bind(this);

        this.state = {
        	isOpen: false
        }
    }

    toggleAccordion(e) {
        const add = 'fas fa-plus heading-2';
        const minus = 'fas fa-minus heading-2';
        const className = e.target.className;
        const sku = e.target.dataset.sku;
        const name = e.target.dataset.name;
        const title = e.target.dataset.title;
    	const subCategory = e.target.parentElement.parentElement.nextSibling.firstElementChild;

        if(className === minus) {
	    	subCategory.style.display = 'none';
        	e.target.className = add;
        } else {
        	const categories = this.props.products.subCategories;
	
			e.target.className = minus;
    		subCategory.style.display = 'block';
	    	// console.log('subCategories: ',this.props.products.subCategories)
	    	// console.log('subCategory: ',subCategory)
	        // this.props.fetchProducts(sku, name, title);
        }
    }

    fetchCategory(e) {
        const sku = e.target.dataset.sku;
        const name = e.target.dataset.name;
        const title = e.target.dataset.title;
        // console.log(name);

        this.props.fetchProducts(sku, name, title);
    }

    componentDidMount() {
    	console.log(this.props.products.subCategories)
    }

    render() {
        return (
            <Fragment>
				<NavBar />
				<div className="category-page">
					{
						!!this.props.products.mainCategories.length && this.props.products.mainCategories.map((category, i) => {
							return (
								<div
									className="category-collection"
									key={i}
								>
									<div className="category-item">
										<NavLink
											to={`products${category.path}`}
											className="category-details"
										>
											<img src="iphone.png" alt={category.name} className="category-image" />
											<b
	                                            data-sku={category.sku}
	                                            data-name="MAIN_CATEGORY"
	                                            data-title={category.name}
	                                            onClick={this.fetchCategory}
	                                            className="main-category-name"
											>{category.name}</b>
										</NavLink>
										<span className="accordion-span">
											<i
												className="fas fa-plus heading-2"
	                                            data-sku={category.sku}
	                                            data-name="MAIN_CATEGORY"
	                                            data-title={category.name}
												onClick={(e) => {
													this.props.loadProductSubCategories(category.name);
													this.toggleAccordion(e);
												}}
											></i>
										</span>
									</div>
									<div className="sub-category">
										<div
											className="sub-category-collection"
										>
											{
												this.props.products.subCategories.map((category_, i) => {
													return (
														<div
															className="sub-category-inner"
															key={i}
														>
															<div className="sub-category__wrapped">
																<NavLink
																	to={`products${category.path}`}
																	className="sub-category-item"
		                                                            data-name="SUB_CATEGORY"
		                                                            data-sku={category_.sku}
		                                                            data-title={category_.name}
		                                                            onClick={this.fetchCategory}
																>{category_.name}</NavLink>
																<span className="accordion-span">
																	<i
																		className="fas fa-plus heading-2"
																		onClick={this.toggleAccordion}></i>
																</span>
															</div>
															<div className="inner-category-collection">
																<div className="inner-category-details">
																	{
																		category_.innerCategory.map((innerCategory, _i) => {
																			return (
																				<NavLink
																					to={`products${innerCategory.path}`}
																					className="inner-category-item"
																					key={_i}
		                                                                            data-name="INNER_CATEGORY"
		                                                                            data-sku={innerCategory.sku}
		                                                                            data-title={innerCategory.name}
		                                                                            onClick={this.fetchCategory}
																				>{innerCategory.name}<br /><br /></NavLink>
																			)
																		})
																	}
																</div>
															</div>
														</div>
													)
												})
											}
										</div>
									</div>
								</div>
							)
						})
					}
					<Scroll />
				</div>
			</Fragment>
        );
    }
}

const mapStateToProps = (state) => ({
    products: state.products
});

const mapDispatchToProps = (dispatch) => ({
    fetchProducts: (sku, name, title) => dispatch(fetchProducts(sku, name, title)),
    loadProductSubCategories: (name) => dispatch(loadProductSubCategories(name))
});

export default connect(mapStateToProps, mapDispatchToProps)(CategoryPage);


														