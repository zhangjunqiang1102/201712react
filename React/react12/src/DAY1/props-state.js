import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import PropType from  'prop-types';
/*

* 组件的数据来源有两个地方
* props 外界传递的  默认属性 属性效验
* state 状态是自己的 属性和状态变化都会影响视图更新
* */
class School extends React.Component{//类是的属性就叫静态属性
    static propTypes={//效应属性的
      age:PropType.number.isRequired
        // name:function (props) {
        //     throw  new Error('too length')
        // }
    };
    static defaultProps={
        name:'章',
        age:1
    };//默认属性
    constructor(props){//如果想在构造函数中拿到属性需要通过参数的方式   \
        //不能再组件中更改属性 ‘不能修改属性’
        super();
    }
    render(){
        return <h1>{this.props.name} {this.props.age}</h1>
    }
}
ReactDOM.render(<School name='章' age='11'/>,window.root);