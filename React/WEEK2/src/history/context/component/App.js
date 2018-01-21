import React from  'react'
import Header from './Header'
import PropTypes from 'prop-types';


export default class App extends  React.Component{
    static childContextTypes ={
        col:PropTypes.string
    };
    getChildContext(){
        return{col:this.state.color}
    }
    constructor(){
        super();
        this.state={color:'lightgreen'}
}
    render(){
        return <div>
            <Header/>
        </div>
    }
}