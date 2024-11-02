import React, { useEffect, useState } from 'react';
import Titulo from '../Átomos/Titulo';
import ListaMiembros from '../Organismos/ListaMiembros';
import { fetchPokemons } from '../../servicios/api'; // Asegúrate de tener este archivo de servicio
import '../../estilos/style.css'; 

const PaginaInicio = () => {
  const [pokemons, setPokemons] = useState([]); // Cambiado para usar la lista de Pokémon

  // Llama a la API de Pokémon al montar el componente
  useEffect(() => {
    const getPokemons = async () => {
      const data = await fetchPokemons(10); // Llama a la función para obtener 10 Pokémon
      setPokemons(data);
    };
    getPokemons();
  }, []);

  return (
    <div>
      <Titulo text="Lista de Pokémon" />
      <ListaMiembros miembros={pokemons} /> {/* Pasamos pokemons como miembros */}
    </div>
  );
};

export default PaginaInicio;
