// Button.jsx
import React from 'react';

const Button = ({ text, handleClick }) => (
  <button
    onClick={handleClick}
    style={{
      cursor: 'pointer', // Ensures the cursor changes to a pointer
      padding: '10px 20px',
      backgroundColor: '#007bff',
      color: '#fff',
      border: 'none',
      borderRadius: '4px',
      fontSize: '14px',
      margin: '0 5px',
      transition: 'background-color 0.3s',
    }}
    onMouseOver={(e) => (e.target.style.backgroundColor = '#0056b3')}
    onMouseOut={(e) => (e.target.style.backgroundColor = '#007bff')}
  >
    {text}
  </button>
);

export default Button;
