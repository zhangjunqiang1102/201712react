import React from 'react'
import SliderList from "./List";
import SliderArrows from "./Arrow";
import SliderDots from "./Dots";

export default class slide extends React.Component {
    constructor() {
        super();
        this.state = {index: 0}
    }

    go = (step) => {
        let index = this.state.index + step;
        if (index > this.props.items.length) {
            this.$ul.style.transitionDuration = '';
            this.$ul.style.left = 0;
            setTimeout(() => {
                this.$ul.style.transitionDuration = this.props.speed + 's';
                index = 1;
                this.setState({index})
            }, 30);
            return
        }
        if (index < 0) {
            this.$ul.style.transitionDuration = '';
            this.$ul.style.transitionDuration = this.props.items.length - 400 + 'px';
            setTimeout(() => {
                this.$ul.style.transitionDuration = this.props.speed + 's';
                index = this.props.items.length - 1;
                setState({index})
            }, 30)
        }
        this.setState({index})

    };
    turn = () => {
        this.timer = setInterval(() => {
            this.go(1);
        }, this.props.delay * 1000)
    };

    componentDidMount() {
        if (this.props.autoplay) {
            this.turn();
        }
        this.$ul = this.refs.list.refs.ul;
    }

    render() {
        return (<div className='slider-container' onMouseEnter={() => {
                clearInterval(this.timer)
            }} onMouseLeave={()=>{
                this.turn();
            }}>
                <List ref='list' index={this.state.index} item={this.props.items} speed={this.state.speed}/>
                {this.props.arrows?<Arrows go={this.go}/>:null}
                {this.props.dots?<Dots go={this.go} items={this.props.items} index={this.state.index}/>:null}
            </div>
        )
    }
}