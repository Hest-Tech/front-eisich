import React from 'react';
import ReactDOM from 'react-dom';
import 'normalize.css/normalize.css'; // reset css
import * as serviceWorker from './serviceWorker';
import { Provider } from 'react-redux';
import fire from './firebase/firebase';

import './App.scss';
import AppRouter from './routes/AppRouter';
import configureStore from './store/configureStore';
import { setTextFilter } from './actions/filters';
import { loadUser } from './actions/authentication';
import { returnMessages } from './actions/resMessages';
import clientStorage from './utils/clientStorage';
import ErrorBoundary from './components/ErrorBoundary'


const store = configureStore();
let token = null;

fire.auth().onAuthStateChanged(user => {
    if (user) {

        user.getIdToken(/* forceRefresh */ true)
            .then(idToken => {
                token = idToken;
                console.log('=> Token: ', token);
            })
            .catch(error => console.log('=> error: ', error));

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
            });
        // store.dispatch(loadUser());
        // User is signed in.
    }
});

// console.log(store.dispatch(loginUser({email:'demo@email.com',password:'password'},'Successfully logged in')));
// store.dispatch(sortByAmount(user));
// store.dispatch(returnMessages('Logged in successfully'));

const jsx = (
    <Provider store={store}>
        <ErrorBoundary><AppRouter /></ErrorBoundary>
    </Provider>
);


ReactDOM.render(jsx, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
