import React from  'react'

export default class List extends  React.Component{
    render(){
        return (
            <ul className='list-group'>
                {this.props.messages.map((item,index)=>(
                    <Item key={index}{...item} del={this.props.delete}/>
                    ))}
            </ul>
        )
    }
}