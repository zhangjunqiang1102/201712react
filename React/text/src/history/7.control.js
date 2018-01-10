import React, {Component} from 'react'
import ReactDom, {render} from 'react-dom';

class Sum extends Component {
    constructor() {
        super();
        this.state = {a: 1, b: 1}
    }

    handleChange(key, e) {
        this.setState({
            [key]: parseInt(e.target.value)
        })
    }
    render() {
        return (
            <div>
                <input type="text" value={this.state.a} onChange={e => {
                    this.handleChange('a', e)
                }}/>
                <input type="text" value={this.state.b} onChange={e => {
                    this.handleChange('b', e)
                }}/>
                {this.state.a + this.state.b}
            </div>
        )
    }
}
ReactDom.render(<Sum/>, window.root);
