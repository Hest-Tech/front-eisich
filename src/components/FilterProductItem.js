import React, { Fragment } from 'react';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';

import { fetchProduct } from '../actions/products';
import {
	clickResult,
	hideResult
} from '../actions/filters';
import { history } from '../routes/AppRouter';

const FilterProductItem = ({
	description,
	imgId,
	path,
	pid,
	fetchProduct,
	hideResult,
	clickResult
}) => (
	<Fragment>
		<div
            onMouseDown={(e) => {
            	e.preventDefault();
            	hideResult();
            	console.log('pid: ',pid)
            	// clickResult();
            	history.push(`/product${path}`)
            	fetchProduct(pid)
            }}
			className="search-results"
		>
			<span className="search-description">{ description }</span>
			<img className="search-imgLink" src={`https://imgur.com/${imgId}.jpg`} alt={ description } />
		</div>
	</Fragment>
);

const mapDispatchToProps = (dispatch) => ({
    hideResult: () => dispatch(hideResult()),
    fetchProduct: (pid) => dispatch(fetchProduct(pid)),
    clickResult: () => dispatch(clickResult())
});

export default connect(undefined, mapDispatchToProps)(FilterProductItem);