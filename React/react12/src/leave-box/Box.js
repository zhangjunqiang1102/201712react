import React,{Component} from 'react'
import MessageList from "./MessageList";
import MessageFrom from "./MessageFrom";

export default class  Box extends React.PureComponent{
    constructor(){
        super();
        this.state={message:[{id:1,content:'zzz',auth:'xxx',createAt:Date.now()}]}
    }
    deleteMessage=(id)=>{
        let messages=this.state.messages.filter(item=>item.id!=id);
        this.setState({
            messages:messages
        });
        localStorage.setItem('messages',JSON.stringify(messages))
    };
    addMessage=(message)=>{
        let messageItem={...message,id:Math.random(),createAt:Date.now()};
        let messages=[...this.state.message,messageItem];
        this.setState({
            messages
        });
        localStorage.setItem('messages',JSON.stringify(messages));
    };
    componentWillMount(){
      let messages=JSON.parse(localStorage.getItem('message'))||[];
      this.setState({messages});
    }
    render(){
        return(
            <div className='content'>
                <div className='row'>
                    <div className='col-md-6 col-md-offset-3'>
                        <div className='panel-heading'>
                            <h1 className='text-center h3'>liuyan</h1>
                        </div>
                        <div className='panel-body'>
                            <MessageList messages={this.state.messages} delete={this.deleteMessage}/>
                        </div>
                        <div className='panel-footer'>
                            <MessageFrom add={this.addMessage}/>
                        </div>
                    </div>
                </div>
            </div>
        )
    }

}

ReactDom.render(<Box/>, window.root);
