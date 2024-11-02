import React from 'react';
import MiembroEquipo from '../Moléculas/MiembroEquipo';

const ListaMiembros = ({ miembros }) => (
  <div className="lista-miembros">
    {miembros.map((miembro, index) => (
      <MiembroEquipo key={index} miembro={miembro} />
    ))}
  </div>
);

export default ListaMiembros;
