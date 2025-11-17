import React, { useState } from 'react';
import './Header.css';

interface HeaderProps {
  onLogout?: () => void;
}

const Header: React.FC<HeaderProps> = ({ onLogout }) => {
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
    console.log('Search:', e.target.value);
  };

  return (
    <div className="header">
      <div className="header-left">
        <h1 className="welcome-text">Welcome, Amiri</h1>
        <p className="welcome-date">Tue, 07 June 2022</p>
      </div>

      <div className="header-right">
        <div className="header-search">
          <input
            type="text"
            placeholder="Search..."
            value={searchQuery}
            onChange={handleSearch}
            className="search-input"
            aria-label="Search screens"
          />
          <svg className="search-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <circle cx="11" cy="11" r="8"></circle>
            <path d="m21 21-4.35-4.35"></path>
          </svg>
        </div>

        <button className="notification-btn" aria-label="Notifications">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"></path>
            <path d="M13.73 21a2 2 0 0 1-3.46 0"></path>
          </svg>
        </button>

        <div className="avatar">
          <img src="/images/avatar.jpg" alt="User avatar" className="avatar-img" />
          <span className="avatar-name">Amiri</span>
        </div>
      </div>
    </div>
  );
};

export default Header;
