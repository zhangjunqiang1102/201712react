import React from 'react'

export default class SliderList extends React.Component {
    render() {
        let style = {
            width: this.props.items.length * 400 + 'px',
            left: this.props.index * -400 + 'px',
            transition: `left ${this.props.speed}s linear`
        };
        return (
            <ul style={style}>
                {this.props.items.map((item, index) => (
                    <li key={index}><img src={item.src}/></li>
                ))}
            </ul>
        )
    }
}