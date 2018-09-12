import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';

import Routes from './routes';

import { firebase } from './firebase';

const App = (props) => {
    return (
        <BrowserRouter>
            <Routes {...props}/>
        </BrowserRouter>
    );
}

firebase.auth().onAuthStateChanged((user) => {
    ReactDOM.render(<App auth={user}/>, document.getElementById('root'));
    if (user) {
        console.log('log in')
    } else {
        console.log('log out')
    }
})