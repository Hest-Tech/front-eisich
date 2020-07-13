import React from 'react';
import { connect } from 'react-redux';

import selectProducts from '../selectors/products';
import FilterProductItem from './FilterProductItem';
import { fetchAllProducts } from '../actions/products';


const allProducts = () => {
    const storedProducts = localStorage.getItem('allProducts');

    if (!!storedProducts) {
        return JSON.parse(storedProducts)
    } else {
        this.props.fetchAllProducts();
        return allProducts();
    }
}

class FilterProducts extends React.Component {
	constructor(props) {
		super(props);
	}

	componentDidUpdate() {
		// console.log('filters: ', this.props.filters.clickSearch)
	}

	componentDidMount() {
		console.log('products: ', this.props.products)
	}

	render() {
		return (
		    <div className="filtered-results">
			    {
					this.props.products.productsList.map(
						product => (
							<FilterProductItem 
					            key={product.pid} {...product}
				            />
						)
					)
			    }
			</div>
		);
	}
}

const mapStateToProps = ({ products, filters }) => ({
    products: selectProducts(
	    {
	    	...products,
	    	productsList: allProducts()
	    },
	    filters
    )
});

const mapDispatchToProps = (dispatch) => ({
    fetchAllProducts: () => dispatch(fetchAllProducts())
});


export default connect(mapStateToProps, mapDispatchToProps)(FilterProducts);