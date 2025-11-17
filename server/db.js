import sql from 'mssql';
import dotenv from 'dotenv';
dotenv.config();

const config = {
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  server: process.env.DB_SERVER,
  port: parseInt(process.env.DB_PORT) || 1433,
  database: process.env.DB_NAME,
  authentication: {
    type: 'default',
  },
  options: {
    encrypt: true,
    trustServerCertificate: true,
  },
};

let pool = null;

export const connectDB = async () => {
  try {
    pool = new sql.ConnectionPool(config);
    await pool.connect();
    console.log('Database connected successfully');
    return pool;
  } catch (err) {
    console.error('Database connection failed:', err.message);
    process.exit(1);
  }
};

export const getPool = () => pool;
