import React from 'react';
import './Tabs.css';

const Tabs = ({ onChange, activeTab }) => {
  return (
    <div className="tabs">
      <div 
        className={`tab ${activeTab === 'all' ? 'active' : ''}`} 
        onClick={() => onChange('all')}
      >
        All
      </div>
      <div 
        className={`tab ${activeTab === 'about' ? 'active' : ''}`} 
        onClick={() => onChange('about')}
      >
        About
      </div>
      <div 
        className={`tab ${activeTab === 'work' ? 'active' : ''}`} 
        onClick={() => onChange('work')}
      >
        Work
      </div>
    </div>
  );
};

export default Tabs;
