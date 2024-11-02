import React, { useState } from 'react';
import Entrada from '../Átomos//Entrada';
import Boton from '../Átomos/Boton';
import '../../estilos/style.css'; 


const PaginaAgregar = ({ onAddProduct }) => {
  const [newProduct, setNewProduct] = useState({ name: '', image: '' });

  const handleSubmit = (e) => {
    e.preventDefault();
    onAddProduct(newProduct);
    setNewProduct({ name: '', image: '' });
  };

  return (
    <form onSubmit={handleSubmit}>
      <Entrada
        type="text"
        placeholder="Nombre del producto"
        value={newProduct.name}
        onChange={(e) => setNewProduct({ ...newProduct, name: e.target.value })}
      />
      <Entrada
        type="text"
        placeholder="URL de la imagen"
        value={newProduct.image}
        onChange={(e) => setNewProduct({ ...newProduct, image: e.target.value })}
      />
      <Boton>Agregar Producto</Boton>
    </form>
  );
};

export default PaginaAgregar;
