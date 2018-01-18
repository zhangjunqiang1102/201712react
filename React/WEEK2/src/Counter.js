import React from  'react'
import {connect} from 'react-redux'
import actions from './store/action'
 class Counter extends  React.Component{
    render(){
        return <div>
            <button onClick={()=>{
                this.props.add(100);
            }}>+</button>
            {this.props.n}
            <button onClick={()=>{
                this.props.minus(100);
            }}>-</button>
        </div>
    }
}
export default connect(state=>({n:state.number}),actions)(Counter)