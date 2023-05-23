import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import RegistroPacientes from '../pages/RegistroPacientes'

const Tabs = () => {
  const [activeTab, setActiveTab] = useState(0);

  const handleTabClick = (tabIndex) => {
    setActiveTab(tabIndex);
  };

  return (
    <div>
      <ul className="nav nav-tabs">
        <li className="nav-item">
          <a
            className={`nav-link ${activeTab === 0 ? 'active' : ''}`}
            onClick={() => handleTabClick(0)}
          >
            Tab 1
          </a>
        </li>
        <li className="nav-item">
          <a
            className={`nav-link ${activeTab === 1 ? 'active' : ''}`}
            onClick={() => handleTabClick(1)}
          >
            Tab 2
          </a>
        </li>
        <li className="nav-item">
          <a
            className={`nav-link ${activeTab === 2 ? 'active' : ''}`}
            onClick={() => handleTabClick(2)}
          >
            Tab 3
          </a>
        </li>
        <li className="nav-item">
          <a
            className={`nav-link ${activeTab === 3 ? 'active' : ''}`}
            onClick={() => handleTabClick(3)}
          >
            Tab 4
          </a>
        </li>
        <li className="nav-item">
          <a
            className={`nav-link ${activeTab === 4 ? 'active' : ''}`}
            onClick={() => handleTabClick(4)}
          >
            Tab 5
          </a>
        </li>
        <li className="nav-item">
          <a
            className={`nav-link ${activeTab === 5 ? 'active' : ''}`}
            onClick={() => handleTabClick(5)}
          >
            Tab 6
          </a>
        </li>
      </ul>
      <div className="tab-content">
        <div className={`tab-pane ${activeTab === 0 ? 'active' : ''}`}>
        <RegistroPacientes/>
        </div>
        <div className={`tab-pane ${activeTab === 1 ? 'active' : ''}`}>
          Content for Tab 2
        </div>
        <div className={`tab-pane ${activeTab === 2 ? 'active' : ''}`}>
          Content for Tab 3
        </div>
        <div className={`tab-pane ${activeTab === 3 ? 'active' : ''}`}>
          Content for Tab 4
        </div>
        <div className={`tab-pane ${activeTab === 4 ? 'active' : ''}`}>
          Content for Tab 5
        </div>
        <div className={`tab-pane ${activeTab === 5 ? 'active' : ''}`}>
          Content for Tab 6
        </div>
      </div>
    </div>
  );
};

export default Tabs;

