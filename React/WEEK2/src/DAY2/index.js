import React,{Component} from 'react'
import ReactDom,{render} from 'react-dom';
import App from './components/App';
import 'bootstrap/dist/css/bootstrap.css';
import {Provider} from 'react-redux';
import store from './store';

ReactDom.render(<Provider store={store}>
    <App/>
</Provider>,
    window.root);
