import React from 'react';
import ReactDOM from 'react-dom';
import {createStore} from "./redux";
const increment='increment';
const decrement='decrement';
function render(state={number:0},action) {
    switch (action.type){
        case increment:
            return{number:action.amount+state.number}
    }
    return state;// 切记返回默认状态
}
let store=createStore(render);
//目的是将redux的状态映射到组件上，更改组件的状态就可以导致视图的刷新
class Counter extends React.Component{
    constructor(){
        super();
        this.state={number:store.getState().number}
    }
    componentDidMount(){
      this.unsubscribe= store.subscribe(()=>{
           this.setState({
               number:store.getState().number
           })
        });
    }
    componentWillUnmount(){
        this.unsubscribe();//移除事件监听
    }

    render(){
        return(
            <div>
                <button onClick={()=>{
                    store.dispatch({type:increment,amount:3})
                }}>+</button>
                <p>{this.state.number}</p>
                <button>-</button>
            </div>
        )
    }
}
ReactDOM.render(<Counter/>, document.getElementById('root'));


