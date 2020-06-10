import React from 'react';
import { connect } from 'react-redux';

import selectProducts from '../selectors/products';
import FilterProductItem from './FilterProductItem';

const FilterProducts = (props) => (
    <div className="filtered-results">
	    {
			!!props.products.length && props.products.map(
				product => (
					<FilterProductItem 
			            key={product.id} {...product}
		            />
				)
			)
	    }
	</div>
);

const mapStateToProps = (state) => ({
    products: selectProducts(state.products.products, state.filters)
});

export default connect(mapStateToProps)(FilterProducts);