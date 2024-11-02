import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import PaginaInicio from './componentes/Páginas/PaginaInicio';
import PaginaProductos from './componentes/Páginas/PaginaProductos';
import PaginaAgregar from './componentes/Páginas/PaginaAgregar';
import './estilos/style.css';


function App() {
  const [miembros] = useState([
    { nombre: 'Juan', foto: 'https://via.placeholder.com/100', github: '#', linkedin: '#' },
    // Agrega los demás miembros del equipo aquí
  ]);
  
  const [products, setProducts] = useState([]);

  const handleAddProduct = (product) => {
    setProducts([product, ...products]);
  };

  return (
    <Router>
      <div className="app">
        <nav>
          <Link to="/">Inicio</Link>
          <Link to="/productos">Lista de Productos</Link>
          <Link to="/modificar">Modificar Productos</Link>
        </nav>
        <Routes>
          <Route path="/" element={<PaginaInicio miembros={miembros} />} />
          <Route path="/productos" element={<PaginaProductos />} />
          <Route path="/modificar" element={<PaginaAgregar onAddProduct={handleAddProduct} />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
