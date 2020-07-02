/**
 * This file contains a filter function for the products
 */

 

// Get visible products

export default (products, { text, sortBy }) => {
	// console.log('products reducer: ',products);
    const filteredItems = !!products.productsList.length ? products.productsList.filter(
        (product) => product.description.toLowerCase().includes(text.toLowerCase())
    ).sort((a, b) => {
        if (sortBy === 'price') {
            return a.price > b.price ? 1 : -1;
        }
    }) : products.products;

    // console.log(filteredItems)
    return {
    	...products,
    	productsList: filteredItems
    }
};