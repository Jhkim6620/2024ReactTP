import React from 'react';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';

const QuizContainer = styled.div`
  padding: 20px;
`;

function Quiz() {
  const { id } = useParams();

  return (
    <QuizContainer>
      <h2>Quiz {id}</h2>
      <p>This is the quiz page for quiz {id}.</p>
      {/* Add your quiz content here */}
    </QuizContainer>
  );
}

export default Quiz;
