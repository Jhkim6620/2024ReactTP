import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';

const QuizContainer = styled.div`
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
`;

const ImageContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 20px 0;
`;

const Image = styled.img`
  max-width: 100%;
  height: auto;
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
  padding: 10px;
  margin-top: 10px;
  border: 1px solid #ccc;
  justify-content: center;
  border-radius: 5px;
  width: 100%;
`;

const Button = styled.button`
  padding: 10px;
  margin-top: 10px;
  background-color: #28a745;
  justify-content: center;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  width: 100%;
  &:hover {
    background-color: #218838;
  }
`;

function Quiz() {
  const { id } = useParams();
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState([]);
  const [userAnswer, setUserAnswer] = useState('');

  const questions = [
    { 
      question: '다음 겹쳐진 그림을 보고 5가지를 찾아 이름을 적어보세요.', 
      image: 'https://via.placeholder.com/300', 
      correct: ['apple', 'banana', 'orange'] 
    },
    { 
      question: '다음 겹쳐진 그림을 보고 5가지를 찾아 이름을 적어보세요.', 
      image: 'https://via.placeholder.com/300', 
      correct: ['car', 'bike', 'bus'] 
    },
  ];

  const handleAnswerSubmit = (e) => {
    e.preventDefault();
    const answerArray = userAnswer.split(',').map(item => item.trim());
    setAnswers([...answers, answerArray]);
    setUserAnswer('');
    setCurrentQuestion(currentQuestion + 1);
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
              placeholder="그림에 나오는 형상을 입력하세요."
            />
            <Button type="submit">정답 확인하기!</Button>
          </Form>
        </div>
      ) : (
        <div className="quiz-results">
          <h2>Quiz Completed</h2>
          <p>Your answers:</p>
          {answers.map((answerSet, i) => (
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

export default Quiz;
