import React,{Component} from 'react';
import ReactDom,{render} from 'react-dom';

class Input extends Component{
    constructor(){
        super();
        this.state={val:''}
    }
    handleChange=(e)=>{
        let val=e.target.value;
        this.setState({val})
    };
    render(){
        return(
            <div>
                <input type="text" value={this.state.val} onChange={this.handleChange}/>
                {this.state.val}
            </div>
        )
    }
}


ReactDom.render(<Input/>, window.root);
