import React from 'react';
import styled from 'styled-components';

const ResultsContainer = styled.div`
  padding: 20px;
`;

function Results() {
  return (
    <ResultsContainer>
      <h2>Results</h2>
      <p>This is the results page.</p>
      {/* Add your results content here */}
    </ResultsContainer>
  );
}

export default Results;
