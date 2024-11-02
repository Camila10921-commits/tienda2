import React from 'react';

const Entrada = ({ type, placeholder, value, onChange }) => (
  <input type={type} placeholder={placeholder} value={value} onChange={onChange} />
);

export default Entrada;
