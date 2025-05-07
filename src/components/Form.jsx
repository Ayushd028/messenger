import React, { useState } from 'react'
import axios from 'axios';

const Form = () => {
    const [name, setName] = useState('');
    const [message, setMessage] = useState('');

    const handleNameChange = (e) => setName(e.target.value)
    const handleMessageChange = (e) => setMessage(e.target.value)

    const handleSubmit = async (e) => {
        e.preventDefault();

        const formName = name.trim();
        const formMessage = message.trim();

        if (formName === '' || formMessage === '')  {
            alert('Fill all the form fields!!!')
            return;
        }
        if (formName.length < 3) {
            alert('Name must be atleast 3 characters long')
            return;
        }
        if (formMessage.length < 10) {
            alert('message must be atleast 10 characters long')
            return;
        }

        const response = axios.post('https://messenger-816f1-default-rtdb.asia-southeast1.firebasedatabase.app/message.json', 
            {
                name: name,
                message: message
            }
        )

        setName('')
        setMessage('')
    }

  return (
    <div className="form-container">
        <form>
            <div className="form-header">
                Send message to Ayush Dwivedi
            </div>
            <div className="form-input">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" />
                </svg>
                <input type="text" placeholder='john doe' onChange={handleNameChange} value={name} />
            </div>
            <div className="form-input">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M8.625 9.75a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0H8.25m4.125 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0H12m4.125 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0h-.375m-13.5 3.01c0 1.6 1.123 2.994 2.707 3.227 1.087.16 2.185.283 3.293.369V21l4.184-4.183a1.14 1.14 0 0 1 .778-.332 48.294 48.294 0 0 0 5.83-.498c1.585-.233 2.708-1.626 2.708-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0 0 12 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018Z" />
                </svg>
                <input type="text" placeholder='send your message!' onChange={handleMessageChange} value={message} />
            </div>
            <div className="form-btn">
                <button onClick={handleSubmit}>Send</button>
            </div>
        </form>
    </div>
  )
}

export default Form
