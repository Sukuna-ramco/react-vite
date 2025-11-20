import React, { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route, Navigate, useNavigate } from 'react-router-dom';
import Login from './pages/Login';
import Profile from './pages/Profile/Profile';
import MainLayout from './pages/layouts/MainLayout';
import Dashboard from './pages/Dashboard/Dashboard';

const AppRoutes: React.FC<{ isLoggedIn: boolean; setIsLoggedIn: (v: boolean) => void }> = ({ isLoggedIn, setIsLoggedIn }) => {
  const navigate = useNavigate();

  const handleLogin = () => {
    localStorage.setItem('authToken', '1');
    setIsLoggedIn(true);
    navigate('/', { replace: true }); 
  };

  const handleLogout = () => {
    localStorage.removeItem('authToken');
    setIsLoggedIn(false);
  };

  return (
    <Routes>
      <Route path="/login" element={<Login onLogin={handleLogin} />} />
      <Route
        path="/"
        element={isLoggedIn ? <MainLayout onLogout={handleLogout} /> : <Navigate to="/login" replace />}
      >
        <Route index element={<Dashboard />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/logout" element={<Navigate to="/login" replace />} />
      </Route>
      <Route path="*" element={<Navigate to={isLoggedIn ? '/' : '/login'} replace />} />
    </Routes>
  );
};

const App: React.FC = () => {
  // Start with false to always show login on first load
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);

  return (
    <BrowserRouter>
      <AppRoutes isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />
    </BrowserRouter>
  );
};

export default App;