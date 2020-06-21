/** 
 * Filter Reducer
 */

const filterReducerDefaultState = {
    text: '',
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
                clickResult: false
            }
        default:
            return state;
    }
};