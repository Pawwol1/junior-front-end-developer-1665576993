import React from 'react';
import User from '../User/User';
import './Message.scss';

function Message({ author, title, content, createdAt, daysDiff }) {
  const nbsp = '\u00A0';
  return (
    <div className="message">
      <h1 className="message__title">{title}</h1>
      <div className="message__info">
        <User author={author} />
        <p className="message__info-date">
          {nbsp} • {nbsp}
          {daysDiff} days ago, {createdAt.fullDate}
          {nbsp} •
        </p>
      </div>
      <p className="message__content">{content}</p>
    </div>
  );
}

export default Message;
