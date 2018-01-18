import React from 'react'
// HashRouter 和      是路由的容器 是组件  包含=在路由的外面
import {HashRouter as Router,Route} from 'react-router-dom'

function Home() {
    return <h1>首页</h1>
}

function Profile() {

    return <h1>个人中心</h1>
}

function User() {

    return <h1>用户</h1>
}

export default class App extends React.Component {
    render() {
        return  <Router>
            <div>
                <Route path='/p' exact={true}  component={Home}/>
               <Route path='/profile' component={Profile}/>
                <Route path='/User' component={User}/>
            </div>
        </Router>
    }
}