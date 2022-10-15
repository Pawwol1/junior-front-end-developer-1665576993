import React from 'react';
import { useParams } from 'react-router-dom';
import data from '../../data/data';
import Message from '../Message/Message';
import './MessageList.scss';

function MessageList() {
  const { activeTaskID = 3 } = useParams();
  const date1 = new Date(data[activeTaskID].businessContext[0].created_at.date);
  const date2 = new Date();

  function getDifferenceInDays(date1, date2) {
    const diffInMs = Math.abs(date2 - date1);
    return diffInMs / (1000 * 60 * 60 * 24);
  }

  let nbsp = '\u00A0';
  return (
    <div className="messageList">
      <ul className="messageList__list">
        {data[activeTaskID].businessContext.map((msg, id) => (
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
                {msg.author.name}
                {nbsp + nbsp + nbsp}•{nbsp + nbsp + nbsp}
                {parseInt(getDifferenceInDays(date1, date2))} days ago
              </p>
            </div>
            <h3>{msg.title}</h3>
            <p className="msgContent">{msg.content.substring(0, 95)}...</p>
          </li>
        ))}
      </ul>
      {data[activeTaskID].businessContext.map((msg, id) =>
        msg.status === 'active' ? (
          <Message
            key={id}
            author={msg.author}
            title={msg.title}
            content={msg.content}
            createdAt={msg.created_at}
            daysDiff={parseInt(getDifferenceInDays(date1, date2))}
          />
        ) : undefined
      )}
    </div>
  );
}

export default MessageList;
