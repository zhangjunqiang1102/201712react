import React, {Component} from 'react';
import ReactDOM from 'react-dom';
/*
* .state 变化可以更新视图
* 2.声明周期
* 3、流程   constructor   render  componentDidMount   setState render - onClick-> unmountComponentAtNode -> componentWillUnmount -> clearInterval
* */
class Clock extends Component {
    constructor() {
        super();
        this.state = {date: new Date().toLocaleString()}
    }
    componentDidMount() {
      this.timer=setInterval(() => {//箭头函数 否则this 指向的是window
            this.setState({date: new Date().toLocaleString()});
        }, 1000);
    }
    componentWillUnmount(){//组件将要卸载 当组件移除时会调用
        clearInterval(this.timer);//一般在这个方法中 清除定时器和绑定的事件
    }
    destroy=()=>{
     ReactDOM.unmountComponentAtNode(window.root);
    };
    render() {
        return <h1 onClick={this.destroy}>{this.state.date}</h1>
    }
}
ReactDOM.render(<Clock/>, window.root);