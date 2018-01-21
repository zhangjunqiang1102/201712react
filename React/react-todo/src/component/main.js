import React from 'react';
import '../css/main.css';
import {connect} from "react-redux";
import action from '../store/action'

class Main extends React.Component {
    render() {

        let {taskList, flag, del, select} = this.props;

        if (flag !== 0) {
            taskList = taskList.filter(item => {
                if (flag === 1) {
                    return item.complete
                }
                return !item.complete
            });
        }

        return <main className="panel-body">
            <ul className="list-group">
                {taskList.map((item, index) => {
                 return   <li className="list-group-item" key={index}>
                        <input type="checkbox" name="todo"
                               checked={item.complete}
                               onChange={event => {
                                   select(item.id)
                               }
                               }/>
                        <span className={item.complete ? 'complete' : ''}>
                            {item.title}</span>

                        <a href="javascript:;" className="btn-danger"
                           onChange={() => {
                               del(item.id)
                           }}
                        >删</a>
                    </li>
                })}
            </ul>
        </main>;
    }
}

export default connect(state => ({...state.todo}), action.todo)(Main);
