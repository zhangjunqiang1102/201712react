import React from 'react'
import {connect} from 'react-redux'
import actions from '../store/action/index'

class TodoHeader extends React.Component {
    getUnFinishCount() {
        return this.props.todos.filter(item => !item.isSelected).length
    }
    render() {
        return <div>
            <h3>你需要完成{this.getUnFinishCount()}个数</h3>
            <input type="text" className='form-control' onKeyUp={(e) => {
                if (e.keyCode === 13) {
                    this.props.addTodo({id: Math.random(), title: e.target.value, isSelected: false})
                }
            }}/>
        </div>
    }
}

export default connect(state => ({...state}), actions)(TodoHeader)