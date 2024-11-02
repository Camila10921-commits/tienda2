// components/Organismos/ListaTarjetas.js
import React from 'react';

const ListaTarjetas = ({ products }) => (
  <div className="tarjetas-container">
    {products.map((product, index) => (
      <div key={index} className="tarjeta">
        <h3>{product.name}</h3>
        {/* Puedes agregar más detalles o una imagen aquí si están disponibles */}
      </div>
    ))}
  </div>
);

export default ListaTarjetas;
