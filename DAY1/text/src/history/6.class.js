import React, {Component} from 'react';
import {render} from 'react-dom';

let school1 = {name: '章', age: '18'};
let school2 = {name: '章', age: '20'};
class Build extends Component{
    render(){//这个组件在调用时默认会调用render 方法
        let {name,age}=this.props;
        // return <p>{this.props.name} {this.props.age}</p>// 和下面的一样
        return<p>{name} {age}</p>
    }
}
/*
function Build(props) {
    return <p>{props.name} {props.age}</p>
}
*/
render(<div>
        <Build name={school1.name} age={school1.age}/>
        <Build {...school2}/>
    </div>
, window.root);