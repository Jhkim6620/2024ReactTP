import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';

const QuizContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  text-align: center;
  padding: 20px;
  box-sizing: border-box;
`;

const ImageContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 20px 0;
`;

const Image = styled.img`
  width: 400px;
  height: 400px;
  object-fit: cover;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  max-width: 400px;
`;

const Input = styled.input`
  padding: 15px;
  border: 1px solid #ccc;
  border-radius: 5px;
  width: 100%;
  margin-bottom: 10px;
  margin-left : 200px;
`;

const Button = styled.button`
  padding: 10px;
  background-color: #28a745;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  width: 100%;
  text-align: center;
  margin-left : 200px;
  &:hover {
    background-color: #218838;
  }
`;

const Result = styled.div`
  margin-top: 20px;
  font-size: 18px;
  color: ${props => (props.correct ? 'green' : 'red')};
`;

function A2_36() {
  const { id } = useParams();
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState([]);
  const [userAnswer, setUserAnswer] = useState('');
  const [result, setResult] = useState(null);
  const [inputCount, setInputCount] = useState(0);

  const questions = [
    { 
      question: '다음 겹쳐진 그림을 보고 5가지를 찾아 이름을 적어보세요.', 
      image: '/A2_36.png', 
      correct: ['사과', '바나나', '캔디', '인형', '계란'] 
    }
  ];

  const handleAnswerSubmit = (e) => {
    e.preventDefault();
    const currentAnswers = answers[currentQuestion] || [];
    currentAnswers.push(userAnswer);
    setAnswers({ ...answers, [currentQuestion]: currentAnswers });

    const correctAnswers = questions[currentQuestion].correct;
    const isCorrect = correctAnswers.includes(userAnswer);
    setResult(isCorrect ? '정답입니다!' : '틀렸습니다. 다시 시도해보세요.');

    setUserAnswer('');
    setInputCount(inputCount + 1);

    if (inputCount + 1 === 5) {
      setCurrentQuestion(currentQuestion + 1);
      setInputCount(0);
      setResult(null);
    }
  };

  return (
    <QuizContainer>
      {currentQuestion < questions.length ? (
        <div className="quiz-question">
          <h2>{questions[currentQuestion].question}</h2>
          <ImageContainer>
            <Image src={questions[currentQuestion].image} alt="Quiz" />
          </ImageContainer>
          <Form onSubmit={handleAnswerSubmit}>
            <Input 
              type="text" 
              value={userAnswer} 
              onChange={(e) => setUserAnswer(e.target.value)} 
              placeholder="그림에 나오는 물체를 입력하세요."
            />
            <Button type="submit">정답 확인하기!</Button>
          </Form>
          {result && <Result correct={result === '정답입니다!'}>{result}</Result>}
        </div>
      ) : (
        <div className="quiz-results">
          <h2>Quiz Completed</h2>
          <p>Your answers:</p>
          {Object.values(answers).map((answerSet, i) => (
            <div key={i}>
              <h3>Question {i + 1}</h3>
              <p>{answerSet.join(', ')}</p>
            </div>
          ))}
        </div>
      )}
    </QuizContainer>
  );
}

export default A2_36;
