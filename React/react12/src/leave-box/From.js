import React from  'react'

export default class From extends  React.Component{
    handleSubmit=(e)=>{
        e.preventDefault();
        let message={auth:this.auth.value,content:this.content.value};
        this.props.add(message)
    };

    render(){
        return(
            <form className='form' onSubmit={this.handleSubmit}>
                <div className='form-group'>
                    <label htmlFor="auth"className='control-label'>liuyanr</label>
                    <input type="text" id='auth' className='form-control' ref={x=>this.auth=x} required={true}/>
                </div>
                <div className='form-group'>
                    <label htmlFor="content" className='control-label'>nr</label>
                    <textarea name="" id="" cols="30" rows="10" className='form-control' ref={X=>this.content=x} required={true}></textarea>
                </div>
                <div className='form-group'>
                    <button className='btn btn-info'>liuyan</button>
                </div>
            </form>
        )
    }
}