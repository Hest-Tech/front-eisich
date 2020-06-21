import React from 'react';
import { connect } from 'react-redux';

import selectProducts from '../selectors/products';
import FilterProductItem from './FilterProductItem';

class FilterProducts extends React.Component {
	constructor(props) {
		super(props);
	}

	componentDidUpdate() {
		// console.log('filters: ', this.props.filters.clickSearch)
	}

	render() {
		return (
		    <div className="filtered-results">
			    {
					!!this.props.products.length && this.props.products.map(
						product => (
							<FilterProductItem 
					            key={product.id} {...product}
				            />
						)
					)
			    }
			</div>
		);
	}
}

const mapStateToProps = (state) => ({
    products: selectProducts(state.products.products, state.filters),
    filters: state.filters
});


export default connect(mapStateToProps)(FilterProducts);