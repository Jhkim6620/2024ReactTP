import React from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

const QuizzesContainer = styled.div`
  padding: 20px;
`;

const QuizCard = styled.div`
  background-color: #f9f9f9;
  padding: 20px;
  margin: 10px 0;
  border: 1px solid #ddd;
  border-radius: 5px;
`;

function Quizzes() {
  return (
    <QuizzesContainer>
      <h2>목적에 맞는 퀴즈를 골라보세요!</h2>
      <QuizCard>
        <h3><NavLink to="/quiz/1">겹쳐진 물체 찾기</NavLink></h3>
        <p>시각적 인식과 기억력 향상을 통해 노인의 인지 기능 유지 및 치매 예방에 도움이 됩니다.</p>
      </QuizCard>
      <QuizCard>
        <h3><NavLink to="/quiz/2">Quiz 2</NavLink></h3>
        <p>Description for Quiz 2</p>
      </QuizCard>
    </QuizzesContainer>
  );
}

export default Quizzes;
