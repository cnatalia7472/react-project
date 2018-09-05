import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route,  Link } from 'react-router-dom';

//  COMPONENT
import TransitionComp from "./components/Transition";
import Fade from "./components/CSStransition";
import Slide from "./components/tgroup";
import User from "./components/user";

const App = () => {
    return (
        <BrowserRouter>
            <div>
                <div className="anim_index">
                    <Link to="/transition">Transition</Link>
                    <Link to="/csstransition">CSStransition</Link>
                    <Link to="/tgroup">Transitions group</Link>
                    <Link to="/user">PT User</Link>
                    <hr/>
                </div>
                <Route path="/transition" component={ TransitionComp }/>
                <Route path="/csstransition" component={ Fade }/>
                <Route path="/tgroup" component={ Slide }/>
                <Route path="/user" component={ User }/>
            </div>
        </BrowserRouter>
    )
}

ReactDOM.render(
    <App/>, 
    document.querySelector('#root')
);