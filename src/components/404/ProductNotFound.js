/**
 * This file contains Not found Page component
 */

import React from 'react';
import { NavLink } from 'react-router-dom';


const ProductNotFoundPage = () => (
    <React.Fragment>
    	<div className="not-found-page-container">
	    	<h1>Product Not Found!</h1>
	    	<NavLink to="/">
	    		<button className="btn btn-success">Take me home</button>
    		</NavLink>
		</div>
    </React.Fragment>
);

export default ProductNotFoundPage;