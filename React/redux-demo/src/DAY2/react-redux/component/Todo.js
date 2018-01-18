import React from  'react'

export default class Todo extends  React.Component{
    render(){
        return <div>
            {store.getState().coounter.num}

        </div>
    }
}