/**
 * Store creation
 */

import thunk from 'redux-thunk';
import { createStore, compose, applyMiddleware } from 'redux';
import { composeWithDevTools } from "redux-devtools-extension";

import rootReducer from '../reducers/rootReducers';


// const initialState = {};

const middleWare = [thunk];

// const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()

export default () => {
    const store = createStore(
        rootReducer,
        compose(
            applyMiddleware(...middleWare),
            composeWithDevTools()
        )
    );
    return store;
};
