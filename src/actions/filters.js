// SET_TEXT_FILTER
export const setTextFilter = (text = '') => ({
    type: 'SET_TEXT_FILTER',
    text
});

// SORT_BY_DATE
export const sortByAmount = () => ({
    type: 'SORT_BY_PRICE'
});

export const focusResults = () => ({
    type: 'FOCUS_RESULTS'
});

export const blurResults = () => ({
    type: 'BLUR_RESULTS'
});

export const clickResult = () => ({
	type: 'CLICK_RESULT'
})

export const hideResult = () => ({
	type: 'HIDE_RESULT'
})