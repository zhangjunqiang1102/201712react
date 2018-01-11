import React from 'react'
import MessageFrom from "./MessageFrom";
import MessageList from "./MessageList";

export default class MessageBox extends React.PureComponent {
    constructor() {
        super();
        this.state = {messages: [{id: 1, content: '今天你吃饭了吗', auth: 'zjq', createAt: Date.now()}]}
    }

    deleteMessage = (id) => {
        let messages = this.state.messages.filter(item => item.id != id);
        this.setState({
            messages: messages
        })
    };
    addMessage = (message) => {//message 是儿子传递的
        let messageItem = {...message, id: Math.random(), createAt: Date.now()};
        // this.state.messages.push(messageItem)
        let messages = [...this.state.messages, messageItem];
        this.setState({
            messages
        });

    };

    render() {
        return (
            <div className='container'>
                <div className='row'>
                    <div className='col-md-6 col-md-offset-3'>
                        <div className='panel panel-danger'>
                            <div className='panel-heading'>
                                <h1 className='text-center h3'>留言板</h1>
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
            </div>
        )
    }
}
