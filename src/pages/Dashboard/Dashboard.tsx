import React from 'react';
import './Dashboard.css';

const products = [
  { id: 1, name: 'Product A', price: '$29', img: '/images/product-1.jpg' },
  { id: 2, name: 'Product B', price: '$49', img: '/images/product-2.jpg' },
  { id: 3, name: 'Product C', price: '$19', img: '/images/product-3.jpg' },
  { id: 4, name: 'Product D', price: '$99', img: '/images/product-4.jpg' },
  { id: 5, name: 'Product E', price: '$59', img: '/images/product-5.jpg' },
  { id: 6, name: 'Product F', price: '$39', img: '/images/product-6.jpg' },
  { id: 7, name: 'Product G', price: '$79', img: '/images/product-7.jpg' },
  { id: 8, name: 'Product H', price: '$289', img: '/images/product-8.jpg' },
  { id: 9, name: 'Product I', price: '$24', img: '/images/product-9.jpg' },
  { id: 10, name: 'Product J', price: '$44', img: '/images/product-10.jpg' },
];

const Dashboard: React.FC = () => {
  return (
    <section>
      <h2 style={{ marginBottom: 12 }}>PRODUCTS</h2>
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))',
        gap: 16,
      }}>
        {products.map(p => (
          <div key={p.id} style={{
            background: '#fff',
            borderRadius: 8,
            padding: 12,
            boxShadow: '0 6px 18px rgba(0,0,0,0.04)',
            display: 'flex',
            flexDirection: 'column',
            gap: 8,
            alignItems: 'center'
          }}>
            <div style={{
              width: 120,
              height: 80,
              background: '#f1f5ff',
              borderRadius: 6,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              overflow: 'hidden'
            }}>
              <img src={p.img} alt={p.name} style={{ maxWidth: '100%', maxHeight: '100%' }} />
            </div>
            <div style={{ fontWeight: 600 }}>{p.name}</div>
            <div style={{ color: '#666' }}>{p.price}</div>
            <button style={{
              marginTop: 8,
              padding: '8px 12px',
              borderRadius: 8,
              border: 'none',
              background: '#3f7bff',
              color: '#fff',
              cursor: 'pointer'
            }}>Buy</button>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Dashboard;