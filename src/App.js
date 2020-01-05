import React from 'react';
import ReactDOM from 'react-dom';
import 'normalize.css/normalize.css'; // reset css
import * as serviceWorker from './serviceWorker';
import { Provider } from 'react-redux';
import fire from './firebase/firebase';

import './App.scss';
import AppRouter, { history } from './routes/AppRouter';
import configureStore from './store/configureStore';
import { setTextFilter } from './actions/filters';
import { loadUser, unloadUser } from './actions/authentication';
import { returnMessages } from './actions/resMessages';
import clientStorage from './utils/clientStorage';
import ErrorBoundary from './components/ErrorBoundary'


// console.log(store.dispatch(loginUser({email:'demo@email.com',password:'password'},'Successfully logged in')));
// store.dispatch(sortByAmount(user));

export const store = configureStore();
const storeUser = new clientStorage();

// console.log(store.dispatch(returnMessages('Logged', 'in','successfully')));
const jsx = (
    <Provider store={store}>
        <ErrorBoundary>
            <AppRouter />
        </ErrorBoundary>
    </Provider>
);
let hasRendered = false;
const renderApp = () => {
    if (!hasRendered) {
        ReactDOM.render(jsx, document.getElementById('root'));
        hasRendered = true;
    }
}

ReactDOM.render(<div className="spinner-border text-warning"></div>, document.getElementById('root'));

fire.auth().onAuthStateChanged(user => {
    if (user) {
        console.log('logged in')
        renderApp();
        let userId = user.uid;

        console.log(store.dispatch(loadUser()))
        return fire.database()
            .ref('/users/' + userId)
            .once('value')
            .then(snapshot => {
                let userData = snapshot.val();
                let user = JSON.stringify({
                    ...userData,
                    uid: userId
                });
                storeUser.setCookie('user', user, 1);
            });
    } else {
        console.log('logged out');
        renderApp();
        store.dispatch(unloadUser());
        history.push('/');
        storeUser.eraseCookie('user');
    }
});


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();