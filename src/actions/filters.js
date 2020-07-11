// SET_TEXT_FILTER
export const setTextFilter = (text = '') => ({
    type: 'SET_TEXT_FILTER',
    text
});

// SORT_BY_DATE
export const sortByPrice = () => ({
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

export const handleRange = (range) => ({
	type: 'HANDLE_RANGE',
	payload: range
});

export const setRangeFilter = (min, max) => ({
	type: 'SET_RANGE_FILTER',
	min,
	max
})