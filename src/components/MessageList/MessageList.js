import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import data from '../../data/data';
import Message from '../Message/Message';
import './MessageList.scss';

function MessageList() {
  const [openedMsg, setOpenedMsg] = useState(true);
  const [read, setRead] = useState([]);
  const [active, setActive] = useState('');
  const [elementID, setElementID] = useState(0);
  const { activeTaskID = '3' } = useParams();
  const date1 = new Date(
    data[activeTaskID].businessContext[elementID].created_at.date
  );
  const date2 = new Date();
  const nbsp = '\u00A0';

  useEffect(() => {
    setOpenedMsg(true);
    setActive('');
  }, [activeTaskID]);

  const getDifferenceInDays = (date1, date2) => {
    const diffInMs = Math.abs(date2 - date1);
    return diffInMs / (1000 * 60 * 60 * 24);
  };

  return (
    <div className="messageList">
      <ul className="messageList__list">
        {data[activeTaskID].businessContext.map((msg, id) => (
          <li
            key={id}
            className={
              (msg.status === 'active' && openedMsg ? 'msgActive' : '') ||
              (msg == active ? 'msgActive' : '') ||
              (msg.status === 'read' ? 'msgRead' : '') ||
              (read.includes(msg) && msg != active ? 'msgRead' : '') ||
              (msg.status === 'unread' && msg != active ? 'msgUnread' : '')
            }
            onClick={() => {
              setActive(msg);
              setRead((prev) => [...prev, msg]);
              setElementID(id);
              setOpenedMsg(false);
            }}
          >
            <div>
              {msg.status === 'unread' && !read.includes(msg) && (
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
        (msg.status === 'active' && openedMsg) || msg == active ? (
          <Message
            key={id}
            author={msg.author}
            title={msg.title}
            content={msg.content}
            createdAt={msg.created_at}
            daysDiff={parseInt(getDifferenceInDays(date1, date2))}
          />
        ) : null
      )}
    </div>
  );
}

export default MessageList;
