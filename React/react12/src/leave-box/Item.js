import React from  'react'

export default class Item extends  React.Component{
    render(){
      let {auth,id,create,content}=this.props;
      return (
          <li className='list-group-item'>xxx:{auth} yyy:{content}
          <button className='btn btn-danger pull-right btn-xs' onClick={()=>{
              this.props.del(id);
          }}>
              &time;
          </button>
              <span className='pull-right'>sj:{new Date(createAt).toLocaleString()}</span>
          </li>
      )
    }
}