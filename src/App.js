import React from 'react';
import Sidebar from './components/Sidebar/Sidebar';
import BusinessContextTab from './components/BusinessContextTab/BusinessContextTab';
import './App.scss';

function App() {
  return (
    <div className="App">
      <Sidebar />
      <BusinessContextTab />
    </div>
  );
}

export default App;
