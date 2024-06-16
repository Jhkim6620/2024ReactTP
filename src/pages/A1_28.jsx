import React, { useState } from 'react';
import styled from 'styled-components';

function generateRandomNumber() {
  return Math.floor((Math.random() * 9) + 1);
}

function generateRandomMatrix() {
  const matrix = [];
  for (let i = 0; i < 7; i++) {
    const row = [];
    for (let j = 0; j < 7; j++) {
      row.push(generateRandomNumber());
    }
    matrix.push(row);
  }
  return matrix;
}

function generateWords(matrix) {
  const words = [];
  for (let i = 0; i < 6; i++) {
    for (let j = 0; j < 6; j++) {
      if (matrix[i][j] !== 0) {
        const right = `${matrix[i][j]}${matrix[i][j + 1]}`;
        const down = `${matrix[i][j]}${matrix[i + 1][j]}`;
        const diagonal = `${matrix[i][j]}${matrix[i + 1][j + 1]}`;
        words.push(right, down, diagonal);
      }
    }
  }
  return Array.from(new Set(words));
}

function getRandomWords(words, count) {
  const shuffledWords = words.sort(() => Math.random() - 0.5);
  return shuffledWords.slice(0, count);
}

function renderMatrix(matrix, handleClick) {
  return (
    <StyledTable className="matrix">
      <tbody>
        {matrix.map((row, rowIndex) => (
          <tr key={rowIndex}>
            {row.map((cell, colIndex) => (
              <td
                key={colIndex}
                onClick={() => handleClick(rowIndex, colIndex)}
                style={{ color: cell.isRed ? 'red' : 'black' }}
              >
                {cell.value}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </StyledTable>
  );
}

function renderWords(words, handleWordClick, selectedWordIndex) {
  return (
    <StyledTable className="words">
      <tbody>
        <tr>
          {words.map((word, index) => (
            <td
              key={index}
              onClick={() => handleWordClick(index)}
              style={{ color: selectedWordIndex === index ? 'blue' : 'black', cursor: 'pointer' }}
            >
              {word}
            </td>
          ))}
        </tr>
      </tbody>
    </StyledTable>
  );
}

const initialMatrix = generateRandomMatrix().map(row => row.map(value => ({ value, isRed: false })));
const words = generateWords(initialMatrix.map(row => row.map(cell => cell.value)));
const randomWords = getRandomWords(words, 5);

function A2_28() {
  const [matrix, setMatrix] = useState(initialMatrix);
  const [selectedWordIndex, setSelectedWordIndex] = useState(null);
  const [isWordClicked, setIsWordClicked] = useState(false);
  const [selectedWord, setSelectedWord] = useState(null);
  const [selectedNumbers, setSelectedNumbers] = useState([]);
  const [success, setSuccess] = useState(0);
  const [fail, setFail] = useState(0);

  const handleClick = (rowIndex, colIndex) => {
    const cellValue = matrix[rowIndex][colIndex].value;
    const cellIdentifier = `${rowIndex},${colIndex}:${cellValue}`;
    let newSelectedNumbers = [...selectedNumbers];

    if (newSelectedNumbers.some(num => num.id === cellIdentifier)) {
      newSelectedNumbers = newSelectedNumbers.filter(num => num.id !== cellIdentifier);
    } else if (newSelectedNumbers.length < 2) {
      newSelectedNumbers.push({ id: cellIdentifier, value: cellValue });
    } else {
      alert("2개의 숫자까지만 선택할 수 있습니다.");
      return;
    }

    const newMatrix = matrix.map((row, rIdx) =>
      row.map((cell, cIdx) =>
        rIdx === rowIndex && cIdx === colIndex
          ? { ...cell, isRed: !cell.isRed }
          : cell
      )
    );

    setSelectedNumbers(newSelectedNumbers);
    setMatrix(newMatrix);
  };

  const handleWordClick = (index) => {
    setSelectedWord(randomWords[index]);
    setSelectedWordIndex(index);
    setIsWordClicked(true);
  };

  const handleCompare = () => {
    const doubleNumber = (selectedNumbers[0]?.value || 0) * 10 + (selectedNumbers[1]?.value || 0);
    const selectedNumber1 = selectedNumbers[0];
    const selectedNumber2 = selectedNumbers[1];
    
    if (selectedNumber1 && selectedNumber2) {
      const [x1, y1] = selectedNumber1.id.split(':')[0].split(',').map(Number);
      const [x2, y2] = selectedNumber2.id.split(':')[0].split(',').map(Number);
      
      const isMatch = parseInt(selectedWord) === doubleNumber;
      const isAdjacent = 
        (x2 === x1 && y2 === y1 + 1) ||  // 오른쪽
        (x2 === x1 + 1 && y2 === y1) ||  // 아래
        (x2 === x1 + 1 && y2 === y1 + 1); // 우하방향 대각선
      
      if (isMatch && isAdjacent) {
        alert('정답입니다!');
        setSuccess(success + 1);
      } else if (isMatch && !isAdjacent) {
        alert('값은 일치하나, 조건에 맞지 않는 숫자 조합을 고르셨습니다.');
        setFail(fail + 1);
      } else {
        alert('틀렸습니다!');
        setFail(fail + 1);
      }
    } else {
      alert('두개의 숫자를 선택해주세요.');
    }

    // Reset everything except success and fail counts
    const newMatrix = generateRandomMatrix().map(row => row.map(value => ({ value, isRed: false })));
    const newWords = generateWords(newMatrix.map(row => row.map(cell => cell.value)));
    const newRandomWords = getRandomWords(newWords, 5);
    
    setMatrix(newMatrix);
    setSelectedWordIndex(null);
    setIsWordClicked(false);
    setSelectedWord(null);
    setSelectedNumbers([]);
    randomWords.splice(0, randomWords.length, ...newRandomWords); // Reset randomWords array
  };

  return (
    <AppContainer>
      <h1>숫자 찾기 퍼즐</h1>
      <Instructions>
        <p>클릭한 보기의 숫자와 일치하는 연속된 숫자를 7x7 테이블에서 찾아보세요!</p>
      </Instructions>
      {renderWords(randomWords, handleWordClick, selectedWordIndex)}
      <br />
      {renderMatrix(matrix, handleClick)}
      <br />
      <TablesContainer>
        <SingleTableContainer>
          <StyledTable>
            <tbody>
              <tr>
                <td>{selectedWord}</td>
              </tr>
            </tbody>
          </StyledTable>
        </SingleTableContainer>
        <DoubleTableContainer>
          <StyledTable>
            <tbody>
              <tr>
                <td>{selectedNumbers[0]?.value || ""}</td>
                <td>{selectedNumbers[1]?.value || ""}</td>
              </tr>
            </tbody>
          </StyledTable>
        </DoubleTableContainer>
        <CompareButton onClick={handleCompare}>비교</CompareButton>
      </TablesContainer>
      <ResultsContainer>
        <p>성공 : {success}</p>
        <p>실패 : {fail}</p>
      </ResultsContainer>
      <RulesContainer>
        <p>규칙</p>
        <p>5개의 보기의 숫자 중 하나를 클릭하세요.</p>
        <p>보기의 숫자와 일치하는 숫자를 7X7 테이블에서 선택하세요!</p>
        <p>선택한 2개의 숫자 규칙 두번째 선택된 숫자는 첫번째 선택된 숫자의 오른쪽, 아래, 우하향 대각선에 위치한 숫자여야 합니다.</p>
        <p>이미 선택된 숫자를 다시 선택하면 그 숫자는 지워집니다.</p>
        <p>정답을 확인하려면 "비교" 버튼을 누르면 됩니다.</p>
        <p>버튼을 누르면 퍼즐의 숫자가 초기화됩니다. 재밌게 하세요!</p>
      </RulesContainer>
    </AppContainer>
  );
}

export default A2_28;

const AppContainer = styled.div`
  text-align: center;
  position: relative;
`;

const StyledTable = styled.table`
  margin: auto;
  border-collapse: collapse;
  td {
    border: 1px solid black;
    padding: 20px;
    font-size: 25px;
  }
`;

const Instructions = styled.div`
  margin-bottom: 20px;
`;

const TablesContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px;
  margin-top: 20
  margin-top: 20px;
`;

const SingleTableContainer = styled.div`
  border: 1px solid black;
  width: 60px;
  height: 60px;
  td {
    border: 1px solid black;
    width: 60px;
    height: 60px;
    font-size: 24px;
    text-align: center;
  }
`;

const DoubleTableContainer = styled.div`
  border: 1px solid black;
  width: 120px;
  height: 60px;
  td {
    border: 1px solid black;
    width: 120px;
    height: 60px;
    font-size: 24px;
    text-align: center;
  }
`;

const CompareButton = styled.button`
  height: 60px;
  font-size: 18px;
  margin-left: 20px;
`;

const ResultsContainer = styled.div`
  position: absolute;
  top: 10px;
  right: 20px;
  font-size: 24px;
  font-weight: bold;
`;

const RulesContainer = styled.div`
  position: absolute;
  top: 10px;
  left: 20px;
  font-size: 20px;
  font-weight: bold;
  text-align: left;
  word-wrap: break-word;
  word-break: break-all;
  max-width: 370px;
`;
