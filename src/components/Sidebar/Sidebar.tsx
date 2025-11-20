import React from 'react';
import { NavLink } from 'react-router-dom';
import { Icon } from '../Icons/Icons';
import './Sidebar.css';

interface SidebarItem {
  id: string;
  icon: string;
  label: string;
  path: string;
}

const sidebarItems: SidebarItem[] = [
  { id: 'dashboard', icon: 'dashboard', label: 'Dashboard', path: '/' },
  { id: 'history', icon: 'history', label: 'History', path: '/history' },
  { id: 'settings', icon: 'settings', label: 'Settings', path: '/settings' },
  { id: 'profile', icon: 'profile', label: 'Profile', path: '/profile' }, 
  { id: 'logout', icon: 'logout', label: 'Logout', path: '/logout' }
];

const Sidebar: React.FC = () => {
  return (
    <aside className="sidebar">
      <div className="sidebar-content">
        <nav className="sidebar-nav" aria-label="Main navigation">
          {sidebarItems.map((item) => (
            <NavLink
              key={item.id}
              to={item.path}
              className={({ isActive }) => `sidebar-item ${isActive ? 'active' : ''}`}
              title={item.label}
              aria-label={item.label}
            >
              <span className="sidebar-icon">
                <Icon name={item.icon} size={28} />
              </span>
              <span className="sidebar-label">{item.label}</span>
            </NavLink>
          ))}
        </nav>
      </div>
    </aside>
  );
};

export default Sidebar;
