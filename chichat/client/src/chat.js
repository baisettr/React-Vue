import React, { Component } from 'react';
/* import openSocket from 'socket.io-client';
const socket = openSocket('http://localhost:5000'); */

import { recieveMessage, sendMessage, userTyping, listenTyping } from './api';

class Chat extends Component {
    constructor(props) {
        super(props);

        recieveMessage((err, message) => this.setState({
            typing: '',
            messages: [...this.state.messages, message]
        }));

        listenTyping((err, user) => this.setState({
            typing: user
        }));

        this.state = { typing: '', userFlag: false, user: "Anonymous", message: "", messages: [] };

    }

    onSaveUser(e) {
        e.preventDefault();
        this.setState({ userFlag: true });
    }


    renderUser = () => <div className="row">
        <form onSubmit={this.onSaveUser.bind(this)} className="col s4">
            <div className="input-field">
                {/* <label>Email</label> */}
                <input placeholder="Enter Username" value={this.state.user} onChange={(e) => { this.setState({ user: e.target.value }) }} />
            </div>
            <button className="btn">Save User</button>
        </form>
    </div>

    onSendMessage(e) {
        e.preventDefault();
        const message = { user: this.state.user, message: this.state.message };
        sendMessage(message);
        //socket.emit('newMessage', message);
        //this.setState({ messages: [...this.state.messages, message] });
    }

    render() {

        return (
            <div className="container">

                {this.state.userFlag ? <h6>Current User: <b>{this.state.user}</b></h6> : <this.renderUser />}

                <div className="message-box">
                    {this.state.messages.map((e, i) => { return (<p key={i}>{e.user}: {e.message}</p>) })}
                    {this.state.typing ? <span>{this.state.typing} is typing...</span> : ''}
                </div>
                <div className="row">
                    <form onSubmit={this.onSendMessage.bind(this)} className="col s4">
                        <div className="input-field">
                            {/* <label>Email</label> */}
                            <input placeholder="Enter Message" value={this.state.message} onChange={(e) => { this.setState({ message: e.target.value }); userTyping(this.state.user); }} />
                        </div>
                        <button className="btn">Send Message</button>
                    </form>
                </div>

            </div>
        )
    }
}

export default Chat;


