import React,{Component} from 'react'
import ReactDom,{render} from 'react-dom';

import Counter from './component/Counter'
import {Provider} from './component/react-readux';
import store from './component/store';



ReactDom.render(<Provider store={store}>
    <Counter/>
</Provider>,window.root);
