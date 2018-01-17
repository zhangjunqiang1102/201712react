import React from 'react'

export default class SliderList extends React.Component {
    render() {
        let style = {
            width: (this.props.items.length+1) * 400 + 'px',
            left: this.props.index * -400 + 'px',
            transition: `left ${this.props.speed}s linear`
        };
        return (
            <ul style={style} ref='ul'>
                {this.props.items.map((item, index) => (
                    <li key={index}><img src={item.src}/></li>
                ))}
                <li><img src={this.props.items[0].src}/></li>
            </ul>
        )
    }
}