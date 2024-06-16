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
        <h3><NavLink to="/A1_28/1">숫자 찾기 퍼즐</NavLink></h3>
        <p>김동혁 - 선택한 보기의 두자리의 숫자와 일치하는 연속된 한자리의 숫자 2개 선택하는 문제, 숫자 찾기로 기억력을 유지하고 문제 해결 능력을 향상시킴으로써 노인의 인지 기능 유지에 도움을 주고, 숫자를 찾기 위해 문제에 집중하는 것으로 집중력 향상이 가능합니다.</p>
      </QuizCard>
      <QuizCard>
        <h3><NavLink to="/A2_36/2">겹쳐진 물체 찾기</NavLink></h3>
        <p>김종혁 - 시각적 인식과 기억력 향상을 통해 노인의 인지 기능 유지 및 치매 예방에 도움이 됩니다.</p>
      </QuizCard>
      <QuizCard>
        <h3><NavLink to="/quiz2">식품 인증 마크 기억하기</NavLink></h3>
        <p>전유성 - 특정 물체와 그에 대한 설명을 인식하고 기억함으로써 노인의 물체에 대한 기억력 향상 및 문자 해독력에 대한 도움을 제공</p>
      </QuizCard><QuizCard>
        <h3><NavLink to="/A3_53/4">표지판 이름 맞추기</NavLink></h3>
        <p>이채희 - 표지판의 이름을 떠올리면서 표지판이 나타내는 의미도 함께 생각할 수 있는 문제</p>
      </QuizCard>
    </QuizzesContainer>
  );
}

export default Quizzes;