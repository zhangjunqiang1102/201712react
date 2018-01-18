import React from  'react'

export default class TodoItem extends  React.Component{
    render(){
        let {item}=this.props;
        return (<div>
                <li className='list-group-item'>
                    <input type="checkbox" checked={item.isSelected} onChange={()=>{
                        this.props.changeSelected(item.id)
                    }}/>
                    {item.id}
                    <button className='btn btn-xs pull-right' onChange={()=>{
                        this.props.deleteTodo(item.id)
                    }}>&time;</button>
                </li>
            </div>
        )
    }
}