import React from 'react';

const Tarjeta = ({ product }) => (
  <div className="card">
    <img src={product.image || "https://via.placeholder.com/150"} alt={product.name} />
    <h3>{product.name}</h3>
  </div>
);

export default Tarjeta;
