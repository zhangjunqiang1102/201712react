/*
import React from 'react';
import store from '../store/index';
// 组件更新 属性的更新 更新状态 ,将redux中的数据转化成自己的状态
export default class Counter extends React.Component {
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
        return <div>
            <button onClick={()=>{
                store.dispatch({type:'ADD',count:1})
            }}>+</button>
            <span>{this.state.n}</span>
            <button onClick={()=>{
                store.dispatch({type:'MINUS',count:1})
            }}>-</button>
        </div>
    }
}*/
import React from 'react'
import * as actions from '../store/action/counter'
import {connect} from 'react-redux'

//利用react-redux 需要导出一个连接
class Counter extends React.Component {
    /*  constructor(){
          super();
          this.state={n:store.getState().counter.num}
      }
      componentDidMount(){
          store.subscribe(()=>{
              this.setState({n:store.getState().counter.num})
          })
      }*/
    render() {
        return <div>
            <button onClick={() => {
                this.props.add(1)
                // store.dispatch(actions.add(10))
            }}>+
            </button>
            {/*{this.state.n}*/}
            <p>{this.props.num}</p>
            <button onClick={() => {
                this.props.minus(2)
                // store.dispatch(actions.minus(10))
            }}>-
            </button>
        </div>
    }
}

//connect 执行的时候有两个函数，mapStateToProps
//1.将redux中的状态映射
//2.
let mapStateToProps = (state) => {
    return {n1: state.counter.num}

};
let mapDispatchToProps = (dispatch) => {
    return {
        add: (count) => {
            dispatch(actions.add(count))
        },
        minus: (count) => {
            dispatch(actions.minus(count))
        }
    }
};
//这个方法是redux中的
let bindActionCreators = (actions) => {
    return (dispatch) => {
        let obj = {};
        for (let key in actions) {
            obj[key] = (...args) => {
            dispatch(actions[key](...args))
            }
        }
        return obj
    }
};
export default connect(state => ({...state.counter}),actions)(Counter);