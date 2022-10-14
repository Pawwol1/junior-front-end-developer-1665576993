import React from 'react';
import blue_diamond from '../../assets/blue_diamond.svg';
import MessageList from '../MessageList/MessageList';
import './BusinessContextTab.scss';

function BusinessContextTab() {
 

  return (
    <div className="businessContextTab">
      <div className="businessContextTab__title">
        <h2>
          <img src={blue_diamond} alt="" />
          business context
        </h2>
      </div>
      <div className="businessContextTab__separator" />
      <div className="businessContextTab__messageBox">
        <MessageList/>
        <div className="businessContextTab__messageBox-msg"></div>
      </div>
    </div>
  );
}

export default BusinessContextTab;
