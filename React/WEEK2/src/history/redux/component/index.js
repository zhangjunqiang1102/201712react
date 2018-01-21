import React,{Component} from 'react'
import ReactDom,{render} from 'react-dom';

import Counter from './Counter'
import {Provider} from './react-readux';
import store from './store';



ReactDom.render(<Provider store={store}>
    <Counter/>
</Provider>,window.root);
