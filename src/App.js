import React from 'react';
import logo from './logo.svg';
import './App.css';
import Dashboard from './components/dashboard/dashboard'
import Header from './components/header/header'
import Timeline from './components/timeline/timeline'
import Logistics from './components/logistics/logistics'


function App() {
  return (
    <div className="root">
      <div className="header">
        <div className="text-center bg-light">
          <Header />
        </div>
      </div>
      <div className="body-content">
        <div className="dashboard">
          <Dashboard />
        </div>

        <div className="logs">
          <div className="timeline">
            <Timeline />
          </div>
          <div className="tabular-data">
            <div className="inner-tabular">
              <Logistics />
            </div>
          </div>
        </div>
      </div>

    </div>
  );
}

export default App;
