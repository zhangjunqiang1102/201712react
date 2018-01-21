import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

import {Provider} from 'react-redux'
import store from './store'


import Header from './component/header';
import Main from './component/main';
import Footer from './component/footer';

ReactDOM.render(<Provider store={store}>

        <div className="panel panel-default"
             style={{width: '500px', margin: '0 auto'}}>
            <Header/>
            <Main/>
            <Footer/>
        </div>
</Provider>,window.root);