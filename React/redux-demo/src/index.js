/*
import React from 'react'
import ReactDOM from 'react-dom';
import Counter from "./components/Counter";


import Todo from "./components/Todo";
import store from './store'
import {Provider} from 'react-redux'

ReactDOM.render(<Provider store={store}>
    <div>
        <Counter/>
        <Todo/>
    </div>
</Provider>, window.root);
*/

import React,{Component} from 'react'
import ReactDOM,{render} from 'react-dom';
import App from "./components/App";
import 'bootstrap/dist/css/bootstrap.css'
import {Provider} from 'react-redux';
import store from './store'

ReactDOM.render(<Provider store={store}>
    <App/>
</Provider>,
    window.root);
