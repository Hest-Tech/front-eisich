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
import { loadUser } from './actions/authentication';
import { returnMessages } from './actions/resMessages';
import clientStorage from './utils/clientStorage';
import ErrorBoundary from './components/ErrorBoundary'


// console.log(store.dispatch(loginUser({email:'demo@email.com',password:'password'},'Successfully logged in')));
// store.dispatch(sortByAmount(user));

const store = configureStore();
// console.log(store.dispatch(returnMessages('Logged', 'in','successfully')));
const jsx = (
    <Provider store={store}>
        <ErrorBoundary><AppRouter /></ErrorBoundary>
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
        renderApp();
        console.log(user)
        let userId = user.uid;
        return fire.database()
            .ref('/users/' + userId)
            .once('value')
            .then(snapshot => {
                let userData = snapshot.val();
                let storeUser = new clientStorage();
                let user = JSON.stringify(userData);
                storeUser.setCookie('user', user, 1);
                console.log(userData)
                history.push('/customer/account');
            });
        // store.dispatch(loadUser());
        // User is signed in.
    } else {
        renderApp();
        history.push('/');
    }
});

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
