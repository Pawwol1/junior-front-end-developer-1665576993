import React from 'react';
import './User.scss';

function User({ author }) {
  return (
    <div className="user">
      <div className="user__photo">
        <img src={author.img} alt="user photo" />{' '}
      </div>
      <p className="user__name">{author.name}</p>
    </div>
  );
}

export default User;
