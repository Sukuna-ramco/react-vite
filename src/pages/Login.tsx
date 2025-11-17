import React, { useState } from 'react';
import Button from '../components/Button/Button';
import TextBox from '../components/Textbox/TextBox';
// import Carousel from '../components/Carousel/Carousel';
import Slider from '../components/Slider/Slider';
import './Login.css';

const Login: React.FC<{ onLogin: () => void }> = ({ onLogin }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState({ email: '', password: '' });

  const validateForm = () => {
    const newErrors = { email: '', password: '' };
    if (!email) newErrors.email = 'Email is required';
    if (!password) newErrors.password = 'Password is required';
    setErrors(newErrors);
    return !newErrors.email && !newErrors.password;
  };

  const handleLogin = async (e?: React.FormEvent | React.MouseEvent) => {
    e?.preventDefault();
    if (!validateForm()) return;
    try {
      const response = await fetch('http://localhost:5000/api/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password }),
      });

      const data = await response.json();

      if (data.success) {
        onLogin();
      } else {
        // Accept either structured {email, password} or a string fallback
        if (data.message && typeof data.message === 'object') {
          setErrors({ email: data.message.email || '', password: data.message.password || '' });
        } else {
          setErrors({ email: '', password: data.message || 'Invalid credentials' });
        }
      }
    } catch (err) {
      console.error(err);
      setErrors({ email: '', password: 'Server error' });
    }
  };

  return (
    <div className="login-page">
      <div className="login-wrapper">
        <div className="login-left">
          {/* <Carousel /> */}
          <Slider
            slides={[
              '/images/slide1.jpg',
              '/images/slide2.jpg',
              '/images/slide3.jpg'
            ]}
          />
        </div>

        <div className="login-right">
          <div className="login-box">
            <h2 className="login-title">LOGIN</h2>

            <form onSubmit={(e) => handleLogin(e)}>
              <TextBox
                label="Email"
                value={email}
                onChange={setEmail}
                type="email"
                placeholder="Enter your email"
                required
                error={errors.email}
              />

              <TextBox
                label="Password"
                value={password}
                onChange={setPassword}
                type="password"
                placeholder="Enter your password"
                required
                error={errors.password}
              />

              <Button
                label="Login"
                onClick={(e: React.MouseEvent<HTMLButtonElement>) => handleLogin(e)}
                type="contained"
                variant="primary"
                className="btn--full"
              />
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;