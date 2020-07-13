/** 
 * Filter Reducer
 */

const range = [0, 250000];
const filterReducerDefaultState = {
    text: '',
    min: range[0],
    max: range[1],
    range,
    searching: false,
    clickResult: false,
    sortBy: 'All items', // All items, price, size
};

export default (state = filterReducerDefaultState, action) => {
    switch (action.type) {
        case 'SET_TEXT_FILTER':
            return {
                ...state,
                text: action.text
            }
        case 'BLUR_RESULTS':
            return {
                ...state,
                // text: '',
                searching: false
            }
        case 'FOCUS_RESULTS':
            return {
                ...state,
                searching: true
            }
        case 'CLICK_RESULT':
            return {
                ...state,
                clickResult: true
            }
        case 'HIDE_RESULT':
            return {
                ...state,
                text: ''
            }
        case 'SORT_BY_PRICE':
            return {
                ...state,
                sortBy: 'price'
            }
        case 'HANDLE_RANGE':
            return {
                ...state,
                range: action.payload
            }
        case 'SET_RANGE_FILTER':
            return {
                ...state,
                min: action.min,
                max: action.max
            }
        default:
            return state;
    }
};