import React from 'react';
import { TypeAnimation } from 'react-type-animation';
import { useNavigate } from 'react-router-dom';

const Carta = () => {
  const navigate = useNavigate();

  return (
    <div className="carta-especial-container">
      <div className="carta-especial">
        <h1>Princesa👑</h1>
        <TypeAnimation
          sequence={[
            'Feliz Dia dos Namorados!',
            1000,
            'Eu quero que saiba o quanto você é especial para mim.',
            1000,
            'Gosto muito de ti❣️',
            1000,
            'Obrigado por fazer parte da minha vida.',
            1000,
            'Com amor, Breninho ✋🏼😛🤚🏼'
          ]}
          speed={40}
          wrapper="p"
          repeat={0}
        />
        <div className="buttons-container">
          <button className="response-button" onClick={() => navigate('/momentos')}>Voltar para Momentos</button>
          <button className="response-button" onClick={() => navigate('/surpresa')}>Ir para Surpresa Final</button>
        </div>
      </div>
    </div>
  );
};

export default Carta;
