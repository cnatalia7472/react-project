import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route,  NavLink, Switch} from 'react-router-dom';

//  COMPONENT
import Home from "./components/home";
import Posts from "./components/posts";
import Profile from "./components/profile";
import PostItem from "./components/post_item";
import Life from "./components/lifecycles";
import Conditional from "./components/conditional";
import User from "./components/user";

// myawesomeapp.com/posts
// myawesomeapp.com/profile/posts

const App = () => {
    return (
        <BrowserRouter>
            <div>
                <header>
                    <NavLink to="/">Home</NavLink><br/>
                    <NavLink 
                        to="/posts"
                        activeStyle={{color:'red'}}
                        activeClassName="selected"
                    >Posts</NavLink><br/>
                    <NavLink to={{
                        pathname: '/profile'
                    }}>Profile</NavLink><br/>
                    <NavLink to="/life">Life</NavLink><br/>
                    <NavLink to="/conditional">Conditional</NavLink><br/>
                    <NavLink to="/user">User</NavLink><br/>
                    <hr/>
                </header>
                <Switch>
                    <Route path="/posts/:id/:username" component={ PostItem }/>
                    <Route path="/profile" component={ Profile }/>
                    <Route path="/posts" component={ Posts }/>
                    <Route path="/" exact component={ Home }/>
                    <Route path="/life" component={ Life }/>
                    <Route path="/conditional" component={ Conditional }/>
                    <Route path="/user" component={ User }/>
                    <Route render={() => <h3>oop 404</h3>}/>
                </Switch>
            </div>
        </BrowserRouter>
    )
}

ReactDOM.render(
    <App/>, 
    document.querySelector('#root')
);