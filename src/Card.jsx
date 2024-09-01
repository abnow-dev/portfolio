import React from 'react';
import './Card.css';

const Card = ({ title, className, children }) => {
  return (
    <div className={`card ${className}`}>
      {title && <h3>{title}</h3>}
      {children}
    </div>
  );
};

export default Card;
