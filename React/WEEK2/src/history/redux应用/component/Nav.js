import React from 'react'
import {Link, withRouter} from 'react-router-dom';

//withRouter 是一个高阶组件
class Nav extends React.Component {
    render() {
        return (
            <nav className="navbar navbar-default">
                <div className="container-fluid">
                    <div className="navbar-header">
                        <a className="navbar-brand" href="#">
                            你好耍
                        </a>
                    </div>
                    <ul className="nav navbar-nav">
                        <li><Link to={'/'}>首页</Link></li>
                        <li><Link to={{pathname: '/profile'}}>个人中心</Link></li>
                        <li><Link to={'/user'}>用户</Link></li>
                    </ul>
                    <button className='btn btn-danger btn-xs navbar-btn' onClick={() => {
                        this.props.history.push('./')
                    }}>回到首页
                    </button>
                </div>
            </nav>
        )
    }
}

//withRouter 会把当前组件 包装成一个Route组件  这样就会有props,location,match
export default withRouter(Nav)