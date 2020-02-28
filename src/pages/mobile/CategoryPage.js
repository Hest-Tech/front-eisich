import React, { Fragment } from 'react';
import { connect } from 'react-redux';

import NavBar from '../../components/NavBar';
import '../../assets/images/iphone.png';
import Scroll from '../../components/Scroll';


const CategoryPage = ({ products }) => {
	return (
		<Fragment>
			<NavBar />
			<div className="category-page">
				{
					!!products.mainCategories.length && products.mainCategories.map((category, i) => {
						return (
							<div
								className="category-item"
								key={i}
							>
								<img src="iphone.png" alt={category.name} className="category-image" />
								<b>{category.name}</b>
							</div>
						)
					})
				}
				<Scroll />
			</div>
		</Fragment>
	);
}

const mapStateToProps = (state) => ({
    products: state.products
});

const mapDispatchToProps = (dispatch) => ({
    // openAuthPopUp: () => dispatch(openAuthPopUp()),
    // loadUser: () => dispatch(loadUser()),
    // signOutUser: () => dispatch(signOutUser())
});

export default connect(mapStateToProps, mapDispatchToProps)(CategoryPage);