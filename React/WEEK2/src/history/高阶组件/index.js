import React,{Component} from 'react'
import ReactDom,{render} from 'react-dom';
import Password from './components/Password'
import Username from './components/Username'
ReactDom.render(<div>
    <Password/>
    <Username/>
</div>, window.root);
