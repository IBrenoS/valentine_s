import React, { useState } from 'react';
import ReactAudioPlayer from 'react-audio-player';
import { Fireworks } from '@fireworks-js/react';
import audioFile from '../assets/music/WhatsApp Audio 2024-06-12 at 06.00.36 (online-audio-converter.com).mp3';

const SurpresaFinal = () => {
  const [response, setResponse] = useState(null);

  const handleResponse = (answer) => {
    setResponse(answer);
  };

  return (
    <div className={`surpresa-final-container ${response === 'yes' ? 'accepted' : response === 'no' ? 'rejected' : ''}`}>
      <div className="content">
        {response === null ? (
          <>
            <h1>Vidoca,</h1>
            <p>
              Esta jornada de criar um website especial para você foi uma verdadeira aventura e desafio. Há mais ou menos 10 dias, venho pensando sobre o Dia dos Namorados. Confesso que, no começo, eu pensava que, já que estávamos distantes e nossa relação não é como gostaríamos que fosse ainda, essa data não teria muito significado, e talvez até não tenha, pelo menos por enquanto. Mas eu não estava conseguindo me sentir totalmente bem, e acho que é porque já nos consideramos como namorados, então tive que colocar minha mente para fluir.
            </p>
            <p>
              Foram momentos de dedicação, aprendizado, quatro dias sem dormir praticamente, madrugando um dia após o outro, e você e sua mãe vendo eu responder muito tarde porque, na verdade, eu mal conseguia descansar. E lembra das "férias" que pedi do projeto do curso para meu trio? Na verdade, era para me dedicar apenas a este projeto aqui.
            </p>
            <p>
              Durante esses quatro dias, tive várias tentativas falhadas porque não estava atingindo a expectativa que eu havia colocado em mim mesmo. Eu sempre pensava que podia fazer mais do que a tentativa anterior, mesmo não tendo tanto conhecimento na linguagem de programação que usei. Espero que você sinta o carinho e o esforço que coloquei em cada pedaço deste projeto e que ele te faça sentir o quanto você é especial para mim.
            </p>
            <p>
              Aproveitando o momento, uma coisa que eu já havia pensado há meses é que nós dois nos consideramos namorados, só que nunca fiz um pedido formal se você aceitaria namorar comigo. Talvez hoje não tenha mais graça, pois sabemos que um gosta do outro e não há mais dúvidas, assim como o desejo de ter o outro perto. Eu queria muito fazer isso pessoalmente, mas não quero esperar também. Gostaria de consertar esse erro meu e fazer da forma correta, perguntando.
            </p>
            <h2>Jennifer Kelly, você aceita namorar comigo?</h2>
            <div className="buttons-container">
              <button className="response-button" onClick={() => handleResponse('yes')}>Sim</button>
              <button className="response-button" onClick={() => handleResponse('no')}>Não</button>
            </div>
            <div className="audio-section">
              <h3>Uma música que me faz lembrar você</h3>
             <ReactAudioPlayer
                src={audioFile} // Importação direta do arquivo de áudio
                controls
                className="audio-player"
              />
            </div>
          </>
        ) : response === 'yes' ? (
          <>
            <h1>Você fez a escolha certa! 🎉</h1>
            <Fireworks
              options={{ opacity: 0.5 }}
              style={{ top: 0, left: 0, width: '100%', height: '100%', position: 'fixed' }}
            />
          </>
        ) : (
          <h1>Tem certeza? A partir de agora sua familia chora no banho.</h1>
        )}
      </div>
    </div>
  );
};

export default SurpresaFinal;
