import React from 'react';
import { Route, Redirect } from 'react-router-dom';

const PrivateRoute = (props) => {
    return (
        props.isLogged ? 
            <Route {...props}/>
        :
            <Redirect to="/login"/>
    )
}

export default PrivateRoute;