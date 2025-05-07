import axios from 'axios';
import React, { useEffect, useState } from 'react'

const MessageList = () => {
    const [messages, setMessages] = useState([]);

    useEffect(() => {
        axios.get('https://messenger-816f1-default-rtdb.asia-southeast1.firebasedatabase.app/message.json')
        .then(response => {
            console.log(response.data);
            let messageList = [];
            for (let messageId in response.data) {
                messageList.push(response.data[messageId])
            }
            messageList.reverse();
            let messageListDisplay = messageList.slice(0,5)
            setMessages(messageListDisplay);
        })
    }, [])

  return (
    <div className='message-container'>
        {messages.length > 0 && messages.map(message => {
            return (
                <div className='message-card'>
                    <div className="user-name">{message.name}</div>
                    <div className="user-message">{message.message}</div>
                </div>
            )
        })}
    </div>
  )
}

export default MessageList