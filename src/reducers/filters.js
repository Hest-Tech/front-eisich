/** 
 * Filter Reducer
*/

const filterReducerDefaultState = {
    text: '',
    sortBy: 'All items', // All items, price, size
};

export default (state = filterReducerDefaultState, action) => {
    switch (action.type) {
        default:
            return state;
    }
};