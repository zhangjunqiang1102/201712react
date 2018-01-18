import React from  'react';
import {connect} from 'react-redux';
import actions from '../store/action/index'
import TodoItem from './TodoItem'

 class TodoList extends  React.Component{
    filterData(){
     let todos=[];
     if(this.props.type==='all'){
         todos=this.props.todos
     }else if(this.props.type==='finish'){
         todos=this.props.todos.filter(item=>item.isSelected)
     }else {
         todos=this.props.todos.filter(item=>!item.isSelected)
     }
     return todos
    }
    render(){
        return <div>
            <ul className='list-group'>
                {this.filterData().map((item,index)=>(
                    <TodoItem key={index}
                    item={item}            changeSelected={(id)=>{

                    }}
                 deleteTodo={(id)=>{
                 this.props.deleteTodo(id)
                 }}
                    />
                ))}
            </ul>
        </div>
    }
}
export  default connect(state=>({...state}),actions)(TodoList)