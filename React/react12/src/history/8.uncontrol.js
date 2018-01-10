import React, {Component} from 'react'
import ReactDom, {render} from 'react-dom';
//输入框value 不能设置默认值
class Sum extends Component {
    constructor() {
        super();
        this.state = {result:''}
    }
    //
    handleChange=()=>{
    let result=parseInt(this.refs.a.value +this.b.value);
        this.setState({result})
};

    render() {
        return (
            <div onChange={this.handleChange}>
                <input type="number" ref='a'/>
                {/*x代表的是真实dom，把元素挂载在当前实例上*/}
                <input type="number" ref={x=>this.b=x}/>
                {this.state.result}
            </div>
        )
    }
}
ReactDom.render(<Sum/>, window.root);
