import React from 'react'
import local from './local'

class Username extends React.Component {
    render() {
        return <div>
            <input type="text" value={this.props.username} onChange={() => {
            }}/>
        </div>
    }
}

//告诉local 将username 取出来，以属性的方式传递给username
// mixin 混合  我们可以把
export default local('username')(Username)