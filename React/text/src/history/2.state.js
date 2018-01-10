import React, {Component} from 'react'
import ReactDom from 'react-dom';

class Counter extends Component {
    constructor() {
        super();
        this.state = {count: 0}
    };

    handLClick = () => {
        this.setState({count: this.state.count + 1});
        // this.setState((prevState)=>({count:prevState.count+1}))
    };

    render() {
        return (
            <p>
                {this.state.count}
                <button onClick={this.handLClick}>+</button>
            </p>
        )
    }

}

ReactDom.render(<Click/>, document.getElementById('root'));
