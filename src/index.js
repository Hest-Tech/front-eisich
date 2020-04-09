import React from 'react';
import { render } from 'react-dom';
import axios from 'axios';

import App from './App';
import * as serviceWorker from './serviceWorker';
import fire from './firebase/firebase';
import { history } from './routes/AppRouter';
import {
    loadUser,
    unloadUser
} from './actions/authentication';
import { loadProductCategories } from './actions/products';
import clientStorage from './utils/clientStorage';
import configureStore from './store/configureStore';
// import * as admin from 'firebase-admin';


const store = configureStore();
const storeUser = new clientStorage();
let hasRendered = false;

console.log(fire.database().ref().push().key)

const renderApp = () => {
    if (!hasRendered) {
        render(<App />, document.getElementById('root'));
        hasRendered = true;
    }
    store.dispatch(loadProductCategories())
    // var ref = fire.database().ref("users");
}

render(<div className="spinner-border text-warning"></div>, document.getElementById('root'));

fire.auth().onAuthStateChanged(user => {
    if (user) {
        renderApp();
        let userId = user.uid;

        store.dispatch(loadUser());
        // console.log(user);
        return fire.database()
            .ref('/users/' + userId)
            .once('value')
            .then(snapshot => {
                let userData = snapshot.val();
                let user = JSON.stringify({
                    ...userData,
                    // ref,
                    uid: userId
                });
                storeUser.setCookie('user', user, 1);
            });
    } else {
        console.log('logged out');
        renderApp();
        store.dispatch(unloadUser());
        // history.push('/');
        storeUser.eraseCookie('user');
    }
});

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();