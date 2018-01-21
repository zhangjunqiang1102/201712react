import React from 'react'

export default class Add extends React.Component {
    handleChange = () => {
        let userList = JSON.parse(localStorage.getItem('users')) || [];
        userList.push({id: Math.random(), username: this.x.value});
        localStorage.setItem('users', JSON.stringify(userList));
        //所有通过路由渲染的组件属性上会多出三个属性 history match location
        this.props.history.push('./user/list')

    };


    render() {
        return <div>
            <input type="text" className='form-control' ref={(x) => this.x = x}/>
            <button onClick={this.handleChange}>添加用户</button>
        </div>
    }
}