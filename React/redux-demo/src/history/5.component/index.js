import React from 'react'
import ReactDom from 'react-dom';
import App from './containers/App'
import Home from './containers/Home'
import Profile from './containers/Profile'
import User from './containers/User'
import {HashRouter as Router, Redirect, Route, Switch} from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.css';
import Detail from "./containers/Detail";
import Protected from './Protected';
/*
* Redirect 重定向
*  /*<Route component={Home} 如果匹配不到不会走到最后一个路径不会更改
*/

ReactDom.render(<Router>
    <App>
        {/*switch 只当路径匹配成功才会调用组件*/}
        <Switch>
            <Route path='/' exact={true} component={Home}/>
            <Protected path="/user" component={User}/>
            <Route path='/profile' component={Profile}/>
            {/*user必须有权限才能访问 如果 localStorage有login 登入了 没有不让访问去首页，官网文档上的写法是不支持异步的*/}
            {/*进入详情页需要传入一个id
             this.props.match.parmas ={id:1}
             必须有id，可以随机
             */}
            <Route path='/detail/:id' component={Detail}/>
            {/*<Route component={Home} 如果匹配不到不会走到最后一个路径不会更改，/>*/}
            <Redirect to='/'/>
        </Switch>
    </App>
</Router>, window.root);
