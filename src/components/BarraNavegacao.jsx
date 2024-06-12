// BarraNavegacao.jsx
import React from 'react';
import { Link } from 'react-router-dom';

function BarraNavegacao() {
  return (
    <nav className="bg-pink-500 text-white p-4 text-center">
      <Link to="/" className="px-4 hover:text-gray-200">Página Inicial</Link>
      <Link to="/momentos" className="px-4 hover:text-gray-200">Galeira Momentos</Link>
      <Link to="/quiz" className="px-4 hover:text-gray-200">Quiz Personalizado</Link>
      <Link to="/mapa" className="px-4 hover:text-gray-200">Mapa Interativo</Link>
      <Link to="/carta" className="px-4 hover:text-gray-200">Carta 3D</Link>
      <Link to="/surpresa" className="px-4 hover:text-gray-200">Surpresa Final</Link>
    </nav>
  );
}

export default BarraNavegacao;
