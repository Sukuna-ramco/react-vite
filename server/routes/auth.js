// backend/routes/auth.js
import express from 'express';
import { getPool } from '../db.js';

const router = express.Router();

router.post('/login', async (req, res) => {
  try {
    const { email, password } = req.body;

    // Validate input
    if (!email || !password) {
      return res.status(400).json({ 
        success: false, 
        message: 'Email and password required' });
    }

    const pool = getPool();
    if (!pool) {
      return res.status(500).json({ success: false, message: 'Database unavailable' });
    }

    const request = pool.request();
    request.input('email', email);
    request.input('password', password);

    const result = await request.query('SELECT * FROM user_login_details WHERE email = @email AND password = @password');

    if (result.recordset.length > 0) {
      res.json({ success: true, user: result.recordset[0] });
    } else {
      res.status(401).json({ success: false, message: 'Invalid credentials' });
    }
  } catch (err) {
    console.error('Login error:', err);
    res.status(500).json({ success: false, message: 'Server error' });
  }
});

export default router;
