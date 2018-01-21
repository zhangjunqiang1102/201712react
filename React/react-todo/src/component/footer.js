import React from 'react';
import {connect} from "react-redux";
import action from '../store/action'
 class Footer extends React.Component {
   handleActive=n=>{
       return n===this.props.flag?'active':'';
   };

    render() {
        let {filter,flag}=this.props;
        return <footer className="panel-footer">
            <nav className="nav nav-pills">
                <li role="presentation" className={this.handleActive(0)}>
                    <a href="javascript:;" onClick={()=>{
                        filter(0)
                    }}>全部</a>
                </li>
                <li role="presentation" className={this.handleActive(1)}>
                    <a href="javascript:;" onClick={()=>{
                        filter(1)
                    }}>已完成</a>
                </li>
                <li role="presentation" className={this.handleActive(2)}>
                    <a href="javascript:;" onClick={()=>{
                        filter(2)
                    }}>未完成</a>
                </li>
            </nav>
        </footer>;
    }
}
export default connect(state=>({...state.todo}),action.todo)(Footer)
