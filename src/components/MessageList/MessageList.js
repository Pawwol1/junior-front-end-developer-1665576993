import React from 'react';
import data from '../../data/data';
import './MessageList.scss';

function MessageList() {
    const date1 = new Date(data[3].businessContext[0].created_at);
    const date2 = new Date();
  
    function getDifferenceInDays(date1, date2) {
      const diffInMs = Math.abs(date2 - date1);
      return diffInMs / (1000 * 60 * 60 * 24);
    }
  
    let nbsp = '\u00A0';
    return (
        <ul className="messageList">
          {data[3].businessContext.map((msg, id) => (
            <li
              key={id}
              className={
                (msg.status === 'read' && 'msgRead') ||
                (msg.status === 'active' && 'msgActive') ||
                (msg.status === 'unread' && '')
              }
            >
              <div>
                {msg.status === 'unread' && (
                  <div className="newMsgLabel">
                    <p>new</p>
                  </div>
                )}
                <p>
                  {msg.author}
                  {nbsp + nbsp + nbsp}•{nbsp + nbsp + nbsp}
                  {parseInt(getDifferenceInDays(date1, date2))} days ago
                </p>
              </div>
              <h3>{msg.title}</h3>
              <p className="msgContent">{msg.content.substring(0, 95)}...</p>
            </li>
          ))}
        </ul>
    );
}

export default MessageList;