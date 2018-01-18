import React from 'react'
import Header from './Header'
import PropTypes from 'prop-types';
/*
* context 上下文 ，在当前组件下获取其他子组件的上下文
* 1.在父级上定义上下文先要标明上下文的类型，
* 2.在父级中获取所有后代的上下文
* */
export default class App extends React.Component {
    static childContextTypes = {
        col: PropTypes.string
    };

    getChildContext() {//这里返回的结果就是儿子的上下文
        return {col: this.state.color}
    }

    constructor() {
        super();
        this.state = {color: 'lightblue'}
    }

    render() {
        return <div>
            <Header/>
        </div>
    }
}