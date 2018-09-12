import React from 'react';
import { Route,  Switch, Redirect } from 'react-router-dom';

import Header from './components/Header/header';
import Controlled from "./components/controlled";
import Uncontrolled from "./components/uncontrolled";
import User from "./components/user";
import Login from "./components/login";
import Dashboard from "./components/dashboard";
import PrivateRoute from "./privateroute";

// const PrivateRoute = (props) => {
//     return (
//         props.isLogged ? 
//             <Route {...props}/>
//         :
//             <Redirect to="/login"/>
//     )
// }

const Routes = (props) => {
    return (
        <div>
            <Header/>
            <Switch>
                <Route path="/controlled" exact component={ Controlled }/>
                <Route path="/uncontrolled" exact component={ Uncontrolled }/>
                <Route path="/user" exact component={ User }/>
                <Route path="/login" exact component={ Login }/>
                <PrivateRoute isLogged={props.auth} path="/dashboard" exact component={ Dashboard } />
                <Route render={() => <h3>oop 404</h3>}/>
            </Switch>
        </div>
    );
};

export default Routes;