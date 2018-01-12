import React, {Component} from 'react'
        import ReactDom from 'react-dom';

        class Dinner extends Component {
        render() {
        return <div>
        {React.Children.map(this.props.children, (item, index) => (
            <li>{item}</li>
        ))}
        </div>
    }
    }

        ReactDom.render(<Dinner>
        <div>zz</div>
        <div>zz</div>
        <div>zz</div>
        </Dinner>,window.root);
