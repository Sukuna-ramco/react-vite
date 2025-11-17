import React from 'react';
import { Outlet } from 'react-router-dom';
import Sidebar from '../components/Sidebar/Sidebar';
import Header from '../components/Header/Header';
import '../pages/Dashboard/Dashboard.css';

interface MainLayoutProps {
  onLogout?: () => void;
}

const MainLayout: React.FC<MainLayoutProps> = ({ onLogout }) => {
  return (
    <div className="dashboard-container">
      <Sidebar />
      <div className="dashboard-wrapper">
        <Header onLogout={onLogout} />
        <main className="dashboard-content">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default MainLayout;