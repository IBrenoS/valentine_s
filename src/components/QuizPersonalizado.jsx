import React, { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from 'react-router-dom';

function QuizPersonalizado() {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [currentTextResponse, setCurrentTextResponse] = useState("");
  const [quizCompleted, setQuizCompleted] = useState(false);
  const navigate = useNavigate();

  const questions = [
    {
      type: 'choice',
      question: "Qual é o nome da minha namorada?",
      options: ["Maria", "Beatriz", "Jennifer Kelly", "Fabiana"],
      answer: "Jennifer Kelly"
    },
    {
      type: 'choice',
      question: "Qual desses lugares eu escolheria para passar um dia de lazer?",
      options: ["Praça", "Praia", "Cinema", "Parque de diversões"],
      answer: "Praia"
    },
    {
      type: 'choice',
      question: "Qual é minha cor favorita?",
      options: ["Preto", "Amarelo", "Verde", "Azul"],
      answer: "Azul"
    },
    {
      type: 'choice',
      question: "Qual será minha possível profissão?",
      options: ["Garoto de programas (Computaria)", "Médico", "Advogato", "Gari"],
      answer: "Garoto de programas (Computaria)"
    },
    {
      type: 'choice',
      question: "Qual é minha altura?",
      options: ["1.75 m", "1.78 m", "1.83 m", "1.85 m"],
      answer: "1.83 m"
    },
    {
      type: 'choice',
      question: "Qual a linguagem da Computaria que eu mais domino?",
      options: ["Xanascript", "C#", "Peithon", "Node.js"],
      answer: "Xanascript"
    },
    {
      type: 'choice',
      question: "Você acha que sinto saudades de você quando está longe?",
      options: ["Não", "Saudades? Desconheço", "Frequentemente", "Sim e muita"],
      answer: "Sim e muita"
    },
    {
      type: 'choice',
      question: "Você já deu o primeiro beijo em seu namorado?",
      options: ["Lento demais", "Não, mas quero", "Sim e não gostei", "Tenho medo"],
      answer: "Não, mas quero"
    },
    {
      type: 'text',
      question: "Se você pudesse descrever nosso relacionamento em três palavras, quais seriam? E por quê?"
    },
    {
      type: 'text',
      question: "Em quais aspectos você acha que podemos crescer ainda mais juntos?"
    },
    {
      type: 'text',
      question: "Se você pudesse mudar algo em mim atualmente, o que seria?"
    },
  ];

  const handleChoiceAnswer = (option) => {
    if (option === questions[currentQuestionIndex].answer) {
      setScore(prevScore => prevScore + 100); // Cada resposta correta agora adiciona 100 pontos
      toast.success('Correto! 🌟');
    } else {
      toast.error('Ops, não foi dessa vez! 😅');
    }
    proceedToNextQuestion();
  };

  const handleTextResponseSubmit = () => {
    toast.info('Resposta registrada! 💬');
    proceedToNextQuestion();
  };

  const proceedToNextQuestion = () => {
    const nextQuestion = currentQuestionIndex + 1;
    setCurrentTextResponse(""); // Limpar a resposta de texto ao avançar para a próxima pergunta
    if (nextQuestion < questions.length) {
      setCurrentQuestionIndex(nextQuestion);
    } else {
      setQuizCompleted(true);
    }
  };

  return (
    <div className="bg-quiz-pattern flex flex-col items-center justify-center min-h-screen p-4">
      <ToastContainer position="top-center" autoClose={5000} />
      {quizCompleted ? (
        <div className="bg-white/80 backdrop-blur-sm p-6 rounded-xl shadow-lg max-w-md w-full text-center">
          <h2 className="score-presentation text-2xl font-bold">Quiz concluído! Sua pontuação foi: {score}</h2>
          <button onClick={() => navigate('/momentos')} className="mt-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
            Voltar para Momentos
          </button>
          <button onClick={() => navigate('/mapa')} className="mt-4 bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded">
            Ir para o Mapa Interativo
          </button>
        </div>
      ) : (
        <div className="bg-white/80 backdrop-blur-sm p-6 rounded-xl shadow-lg max-w-md w-full">
          <h1 className="text-2xl font-bold">{questions[currentQuestionIndex].question}</h1>
          {questions[currentQuestionIndex].type === 'choice' ? (
            <div className="space-y-4">
              {questions[currentQuestionIndex].options.map((option, index) => (
                <button key={index} onClick={() => handleChoiceAnswer(option)} className="block w-full text-center py-3 px-4 bg-blue-500 text-white rounded hover:bg-blue-600">
                  {option}
                </button>
              ))}
            </div>
          ) : (
            <>
              <textarea
                value={currentTextResponse}
                onChange={(e) => setCurrentTextResponse(e.target.value)}
                className="w-full p-2 border border-gray-300 rounded mt-4"
                rows="4"
                placeholder="Digite sua resposta aqui..."
              />
              <button
                onClick={handleTextResponseSubmit}
                className="mt-4 py-2 px-4 bg-green-500 text-white rounded hover:bg-green-600"
              >
                Enviar
              </button>
            </>
          )}
        </div>
      )}
    </div>
  );
}

export default QuizPersonalizado;
