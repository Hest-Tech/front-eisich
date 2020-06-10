/**
 * This file contains a filter function for the products
 */

 

// Get visible products

export default (products, { text, sortBy }) => {
    return !!products.length === true && products.filter(
        (product) => product.description.toLowerCase().includes(text.toLowerCase())
    ).sort((a, b) => {
        if (sortBy === 'date') {
            return a.createdAt < b.createdAt ? 1 : -1;
        } else if (sortBy === 'amount') {
            return a.amount < b.amount ? 1 : -1;
        }
    });
};