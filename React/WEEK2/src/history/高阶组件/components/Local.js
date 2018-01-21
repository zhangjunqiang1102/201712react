import React from  'react'
let local=(key)=>(Component)=>{
    return  class High extends React.Component{
        constructor(){
            super();
            this.state={[key]:''}
        }
        componentWillMount(){
            let val=localStorage.getItem(key);
            this.setState({[key]:val})
        }
        render(){
            return<Component {...this.state}/>
        }
    }
};
export  default local
