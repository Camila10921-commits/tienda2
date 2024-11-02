import React from 'react';

const MiembroEquipo = ({ miembro }) => (
  <div className="miembro-equipo">
    <img src={miembro.foto} alt={miembro.nombre} />
    <h3>{miembro.nombre}</h3>
    <a href={miembro.github}>GitHub</a>
    <a href={miembro.linkedin}>LinkedIn</a>
  </div>
);

export default MiembroEquipo;
