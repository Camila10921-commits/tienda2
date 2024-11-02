import React from 'react';

const Boton = ({ onClick, children }) => (
  <button onClick={onClick} className="boton">
    {children}
  </button>
);

export default Boton;
