import React, { Fragment } from 'react';

const FilterProductItem = ({ description }) => (
	<Fragment>
		<div className="search-results">
			<span className="search-description">{ description }</span>
		</div>
	</Fragment>
)

export default FilterProductItem;