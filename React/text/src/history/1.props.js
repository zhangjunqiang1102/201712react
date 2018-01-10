
import React from 'react'
import ReactDom from 'react-dom';
import PropTypes from 'prop-types';


class School extends  Component {
    static PropTypes={
        age:PropTypes.string
    };
    static defaultProps={
        age:'11'
    };
    constructor (props){
        super(props);
    }
    render(){
        return(
        <div>
            {JSON.stringify(this.props)}
        </div>
        )
    }

}
// School.propTypes={age:}

ReactDom.render(<School/>, document.getElementById('root'));
