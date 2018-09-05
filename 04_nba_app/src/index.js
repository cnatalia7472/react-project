import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route,  Link } from 'react-router-dom';

//  COMPONENT
import Home from "./components/home";

const App = () => {
    return (
        <BrowserRouter>
            <div>
                <div className="anim_index">
                    <Link to="/">Home</Link>
                    <hr/>
                </div>
                <Route path="/" component={ Home }/>
            </div>
        </BrowserRouter>
    )
}

ReactDOM.render(
    <App/>, 
    document.querySelector('#root')
);
