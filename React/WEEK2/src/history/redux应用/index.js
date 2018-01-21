import React,{Component} from 'react'
import ReactDom,{render} from 'react-dom';
import App from './containers/App'
import Home from './containers/Home'
import Profile from './containers/Profile'
import User from './containers/User'
import 'bootstrap/dist/css/bootstrap.css';
import Detail from "./containers/Detail";
import Protected from './Protected';
import {HashRouter as Router ,Redirect,Route,Switch} from 'react-router-dom';

ReactDom.render(<Router>
    <App>
    <Switch>
        <Route pash ='/' exact={true} component={Home}/>
        <Route pash ='/user' component={User}/>
        <Route pash ='/profile' component={Profile}/>
        <Route pash ='/detail/:id' component={Detail}/>
        <Redirect to='/'/>
    </Switch>
    </App>
    </Router>
    , window.root);