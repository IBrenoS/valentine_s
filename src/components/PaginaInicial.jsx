import React from 'react';
import { Link } from 'react-router-dom'; // Importe o componente Link

function PaginaInicial() {
  return (
    <div className="relative w-full h-screen">
      <img src="https://cdn.pixabay.com/photo/2016/03/08/16/42/love-1244310_1280.jpg" alt="Imagem de Capa" className="absolute inset-0 w-full h-full object-cover" />
      <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col items-center justify-center">
        <h1 className="text-white text-4xl font-bold text-center">Bem-vinda ao Nosso Espaço Especial</h1>
        <p className="text-white text-lg mt-4 text-center">Uma viagem pelos nossos momentos e memórias juntos.</p>
        <Link to="/momentos" className="mt-8 px-6 py-2 bg-pink-500 text-white rounded-full hover:bg-pink-600 transition-colors text-center no-underline">Vamos começar?</Link> {/* Usando Link como botão */}
      </div>
    </div>
  );
}

export default PaginaInicial;
