import React from 'react';
import {render} from 'react-dom';

let school1 = {name: 'wx', age: '11'};
let school2 = {name: 'qq', age: '99'};

/*
* 1.复用 组合 可维护
* react
 1.复用2.组合3.可维护
1)react组件声明有两种方式 一种叫函数声明 类声明
 2)react怎么区分是组件还是jsx元素 组件名开头大写
 3)react组件可以和jsx混用
 可以通过属性给组件传递值 props
 函数声明没有this 没有状态
 类声明有this 有声明周期
* */

function Build(props) {
    return <p>{props.name} {props.age}</p>
}

/*
function Build(props) { // "函数"(组件)的参数是属性
    return <p>{props.school&&props.school.name} {props.school&&props.school.age}</p>
}
render(<div>
    <Build school={school1}/>
    <Build school={school2}/>
</div>,window.root);*/

render(<div>
        <Build name={school1.name} age={school1.age}/>
        <Build {...school2}/>
    </div>
    , window.root);