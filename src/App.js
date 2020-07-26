import React from 'react';
import logo from './logo.svg';
import './App.css';
import TabMenu from './components/TabMenu';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      
        <div className="d-flex">
          <TabMenu items={{icon: 'image/home.svg', label: 'HOME'}}/>
          <TabMenu items={{icon: 'image/deals.svg', label: 'DEALS'}}/>
          <TabMenu items={{icon: 'image/upload.svg', label: 'UPLOAD'}}/>
          <TabMenu items={{icon: 'image/work.svg', label: 'WORK'}}/>
          <TabMenu items={{icon: 'image/settings.svg', label: 'SETTINGS'}}/>
        </div>
      </header>
    </div>
  );
}

export default App;
