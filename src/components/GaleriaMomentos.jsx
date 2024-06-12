import React from 'react';
import BarraNavegacao from './BarraNavegacao';

// Usando import direto se as imagens estão em 'src/assets/images'
import foto1 from '../assets/images/WhatsApp Image 2024-06-11 at 04.38.36.jpeg';
import foto2 from '../assets/images/WhatsApp Image 2024-06-11 at 04.38.37.jpeg';
import foto3 from '../assets/images/WhatsApp Image 2024-06-11 at 04.38.38.jpeg';
import foto4 from '../assets/images/WhatsApp Image 2024-06-11 at 04.38.39.jpeg';

function GaleriaMomentos() {
  const momentos = [
    { src: foto1, descricao: 'Foto sem eu fazer uma careta? "Impossible🤭"' },
    { src: foto2, descricao: 'A melhor que nos dois temos na minha opnião.' },
    { src: foto3, descricao: 'Fotos horrorosas? Temos também hahaha resolução pixel ai 😂' },
    { src: foto4, descricao: 'Essa é especial.. Lembro-me de que foi um dia com um momento de despedida, você chorou e eu tentei te consolar mais de certa forma triste também por te ver triste, acho que esse abraço tem um significado especial.' },
  ];

  return (
       <div>
      <BarraNavegacao />
      <div className="p-4 text-center bg-black min-h-screen">
        <h2 className="text-2xl font-bold mb-4 text-white font-sunny-spells">Nossos Momentos Registrados</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {momentos.map((momento, index) => (
            <div key={index} className="relative group">
              <img src={momento.src} alt={`Momento ${index + 1}`} className="w-full h-full object-cover rounded-lg shadow-lg transition-transform duration-300 transform group-hover:scale-105" />
              <div className="absolute inset-0 bg-black bg-opacity-75 flex items-center justify-center rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <p className="text-white p-2 font-sunny-spells">{momento.descricao}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default GaleriaMomentos;
