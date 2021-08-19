import React from 'react';
import Message from '../Message/Message';
import { messages } from '../../utils/constants';

function Chat() {

    return (
        <section className="chat">
            {messages.map(item => 
            <Message 
                isOwn = {item.isOwn}
                text = {item.text}
            />
            )}
        </section>
    );
  }
  
  export default Chat;