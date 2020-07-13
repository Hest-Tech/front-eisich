/**
 * This file contains a filter function for the products
 */

 

// Get visible products

export default (products, { text, sortBy, min, max }) => {
    console.log('products: ',products);
    const filteredItems = !!products.productsList.length ? products.productsList.filter(
        (product) => {
            const maxPrice = product.newPrice <= max;
            const minPrice = product.newPrice >= min;
            const range = maxPrice && minPrice;
            const textFilter = product.description.toLowerCase().includes(text.toLowerCase());

            return textFilter && range
        }
    ).sort((a, b) => {
        if (sortBy === 'price') {
            return a.price > b.price ? 1 : -1;
        }
    }) : products.products;

    console.log('filteredItems: ',filteredItems)
    return {
    	...products,
    	productsList: filteredItems
    }
};