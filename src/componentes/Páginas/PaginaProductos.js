import React, { useState, useEffect } from 'react';
import ListaTarjetas from '../Organismos/ListaTarjetas';
import PaginaAgregar from './PaginaAgregar';
import '../../estilos/style.css'; 

const PaginaProductos = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch('https://pokeapi.co/api/v2/pokemon?limit=10')
      .then(response => response.json())
      .then(data => setProducts(data.results))
      .catch(error => console.error('Error fetching data:', error));
  }, []);

  const handleAddProduct = (newProduct) => {
    setProducts([...products, newProduct]); // Agrega el nuevo producto a la lista
  };

  return (
    <div>
      <h1>Lista de Productos</h1>
      <ListaTarjetas products={products} />
      <PaginaAgregar onAddProduct={handleAddProduct} />
    </div>
  );
};

export default PaginaProductos;
