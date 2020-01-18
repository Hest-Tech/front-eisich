import React from 'react';
import { render } from 'react-dom';

import App from './App';
import * as serviceWorker from './serviceWorker';
import fire from './firebase/firebase';
import { history } from './routes/AppRouter';
import { loadUser, unloadUser } from './actions/authentication';
import clientStorage from './utils/clientStorage';
import configureStore from './store/configureStore';


const store = configureStore();
const storeUser = new clientStorage();
let hasRendered = false;

const renderApp = () => {
    if (!hasRendered) {
        render(<App />, document.getElementById('root'));
        hasRendered = true;
    }
}

render(<div className="spinner-border text-warning"></div>, document.getElementById('root'));

fire.auth().onAuthStateChanged(user => {
    if (user) {
        console.log('logged in', user);
        console.log('logged in', user.providerData[0]);
        renderApp();
        let userId = user.uid;

        store.dispatch(loadUser());
        return fire.database()
            .ref('/users/' + userId)
            .once('value')
            .then(snapshot => {
                let userData = snapshot.val();
                console.log(userData);
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