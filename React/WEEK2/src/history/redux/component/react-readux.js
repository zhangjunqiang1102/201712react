import React from  'react'
import PropTypes from 'prop-types';

class Provider extends  React.Component{
    static childContextTypes={
        store:PropTypes.object
    };
    getChildContext(){
        return {store:this.props.store}
    }

    render(){
        return this.props.children
    }
}
let connect =(mapStateToProps,mapDispatchToProps)=>(Component)=>{
  return class Proxy extends React.Component{
      constructor(){
          super();
          this.state=mapStateToProps(this.context.store.getState());
      }
      componentDidMount(){
          this.context.store.subscribe(()=>{
              this.setState(mapStateToProps(this.context.store.getState()))
          })
      }
      static contextTypes={
          store:PropTypes.object
      };
      render(){
          return <Component
              {...mapStateToProps(this.context.store.getState())}
                            {...mapDispatchToProps(this.context.store.dispatch)}
          />
      }

  }
};
export {Provider,connect}