/*
import React from  'react'
import store from '../store'
export default class Todo extends  React.Component{
    constructor(){
        super();
        this.state={todos:store.getState().todo}
    }
    componentDidMount(){
        store.subscribe(()=>{
          this.setState({todos:store.getState().todo})
        })
    }
    render(){
        return <div>
            <input type="text" onKeyDown={(e)=>{
                store.dispatch({type:'ADDTODO',content:e.target.value});
            }}/>
            {this.state.todos.map((item,index)=>{
                return <li key={index}>{item}</li>
            })}
        </div>
    }
}*/

import React from 'react'
import actions from '../store/action/todo'
import {connect} from 'react-redux'
class Todo extends React.Component {
    /* constructor() {
         super();
         this.state = {todos: store.getState().todo}
     }

     componentDidMount() {
         store.subscribe(() => {
             this.setState({todos: store.getState().todo})
         })
     }
 */
    render() {
        return <div>
            <input type="text" onKeyDown={(e) => {
                if (e.keyCode === 13) {
                    this.props.addTodo(e.target.value);
                    e.target.value=''
                }
            }}/>
            {this.props.datas.map((item, index) => (<li key={index}>{item}</li>))}
        </div>
    }
}
export default connect(state=>({datas:state.todo}),actions)(Todo)