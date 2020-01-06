import React from 'react';
import 'normalize.css/normalize.css'; // reset css
import { Provider } from 'react-redux';

import './App.scss';
import AppRouter, { history } from './routes/AppRouter';
import ErrorBoundary from './components/ErrorBoundary'
import configureStore from './store/configureStore';


const store = configureStore();

class App extends React.Component {
    render() {
        return (
            <Provider store={store}>
                <ErrorBoundary>
                    <AppRouter />
                </ErrorBoundary>
            </Provider>
        );
    }
}

export default App;