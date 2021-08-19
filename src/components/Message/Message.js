import React from 'react';

function Message(props) {

    return (
        <div className="message">
            <div className={props.isOwn ? "message__body" : "message__body message__body_type_request"}>
                <p className="message__text">{props.text}</p>
            </div>
        </div>
    );
  }
  
  export default Message;