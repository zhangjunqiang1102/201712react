import React from 'react'

export default class Detail extends React.Component {
    render() {
        let user = this.props.location.state;
        if (user == null) {//如果没有拿到id去取localStorage取值
            let id = this.props.match.params.id;
            let users = JSON.parse(localStorage.getItem('users')) || [];
            user = users.find(item => item.id == id) || {};
        }
        return <div>
            id:{user.id} xxx:{user.username}
        </div>
    }
}