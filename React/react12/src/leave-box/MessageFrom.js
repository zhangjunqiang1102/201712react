import React from 'react'

export default class MessageFrom extends React.Component {
    handleSubmit=(e)=>{
        e.preventDefault();
       let message={auth:this.auth.value,content:this.content.value};
       this.props.add(message);
    };

    render() {
        return (
            <form className="form" onSubmit={this.handleSubmit}>
                <div className='form-group'>
                    <label htmlFor="auth" className='control-label'>留言人</label>
                    <input type="text" id='auth' className='form-control' ref={x=>this.auth=x} required={true}/>
                </div>
                <div className="form-group">
                    <label htmlFor="content" className="control-label">内容</label>
                    <textarea id="content" cols="30" rows="10" className="form-control" ref={x=>this.content=x} required={true}></textarea>
                </div>
                <div className="form-group">
                    <button className="btn btn-info">留言</button>
                </div>
            </form>
        )
    }
}