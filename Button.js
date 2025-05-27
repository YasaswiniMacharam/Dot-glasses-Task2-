// src/components/Button.js
import React from 'react';
import './Button.css';

const Button = ({ label, type = 'ocean', disabled = false }) => {
  return (
    <button className={`btn ${type} ${disabled ? 'disabled' : ''}`} disabled={disabled}>
      {label}
    </button>
  );
};

export default Button;
