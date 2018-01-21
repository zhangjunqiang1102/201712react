import React from 'react';
import {connect} from 'react-redux'
import action from '../store/action';


class Header extends React.Component {
    handleUnComplete = () => this.props.taskList.filter(item => item.complete === false).length;

    render() {
        let {talkList,add} = this.props;
        return <header className="panel-heading">
            <h3 className="panel-title">任务列表 [ 当前未完成的任务数 {this.handleUnComplete()} ]</h3>
            <br/>
            <input type="text" className="form-control"
                   placeholder="please enter the tasks to be completed" onKeyUp={event => {
                let code = event.keyCode,
                    target = event.target,
                    val = target.value.trim();
                if (code !== 13) return;

                if (val.length === 0) return;
                       add(val);
                       target.value='';
            }}/>
        </header>;
    }
}

export default connect(state => ({...state.todo}), action.todo)(Header)