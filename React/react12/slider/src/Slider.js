import React from 'react'
import SliderList from "./SliderList";
import SliderArrows from "./SliderArrows";

export default class Slider extends React.Component {
    constructor() {
        super();
        this.state = {index: 0}
    }

    go = (step) => {
        let index = this.state.index + step;
        if (index === this.props.items.length) {
            index = 0;
        }
        if (index < 0) {
            index = this.props.items.length - 1;
        }
        this.setState({
            index
        })
    };
    turn = () => {
        this.timer = setInterval(() => {
            this.go(1)
        }, this.props.delay * 1000)
    };

    componentDidMount() {
        if (this.props.autoplay) {
            this.turn();
        }
    }

    render() {

        return (
            <div className='slider-container' onMouseEnter={() => {
                clearInterval(this.timer)
            }} onMouseLeave={() => {
                this.turn()
            }}>
               <SliderList index={this.state.index} items={this.props.items} speed={this.state.speed}/>
                {this.props.arrows?<SliderArrows go={this.go}/>:null}
            </div>
        )
    }
}