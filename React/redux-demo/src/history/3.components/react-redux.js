import React from 'react'
import PropTypes from 'prop-types';

class Provider extends React.Component {
    static childContextTypes = {//此时设置上下文中store的类型
        store: PropTypes.object
    };

    getChildContext() {//获取儿子的上下文将属性中的store 放在context上
        return {store: this.props.store}
    }

    render() {
        return this.props.children
    }

}

let connect = (mapStateToProps, mapDispatchToProps) => (Component) => {
    return class Proxy extends React.Component {
        constructor(props, context) {
            super();//默认情况下，先调用mapDispatchToProps返回结果0
            this.state = mapStateToProps(context.store.getState());

        }
        componentDidMount() {
            this.context.store.subscribe(() => {
                this.setState(mapStateToProps(this.context.store.getState()))
            })
        }

        static contextTypes = {
            store: PropTypes.object
        };

        render() {
            return <Component
                {...mapStateToProps(this.context.store.getState())}
                {...mapDispatchToProps(this.context.store.dispatch)}
            />
        }
    }
};

export {Provider, connect}