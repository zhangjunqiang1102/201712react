import React from 'react';
import store from '../store/index';
export default class Compute extends React.Component {
    constructor(){
        super();
        this.state = {n:store.getState().number}
    }
    componentDidMount(){
        this.un = store.subscribe(() => {
            this.setState({n:store.getState().number})
        })
    }
    componentWillUnmount(){ //组件销毁时 需要将其监听的函数移除掉
        this.un();
    }
    render(){
        return <div>{this.state.n%2?'奇数':'偶数'}</div>
    }
}