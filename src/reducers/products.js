/**
 * Products Reducer
 */


const productsReducerDefaultState = {
    items: [],
    loading: false
};

export default (state = productsReducerDefaultState, action) => {
    switch (action.type) {
        default:
            return state;
    }
}