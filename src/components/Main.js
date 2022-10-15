import React from 'react';
import Sidebar from './Sidebar/Sidebar';
import BusinessContextTab from './BusinessContextTab/BusinessContextTab';

function Main() {
  return (
    <div className="App">
      <Sidebar />
      <BusinessContextTab />
    </div>
  );
}

export default Main;
