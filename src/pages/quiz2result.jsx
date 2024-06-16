import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const Container = styled.div`
  width: 80%;
  margin: 0 auto;
  padding: 20px;
  font-family: Arial, sans-serif;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const Title = styled.h2`
  text-align: center;
  margin: 5px 0;
`;

const SubTitle = styled.h4`
  text-align: center;
  margin: 3px 0;
`;

const IconTable = styled.table`
  width: 100%;
  border-collapse: collapse;
  margin-top: 20px;
  text-align: center;
`;

const IconTableRow = styled.tr`
  border: 1px solid #ddd;
`;

const IconCell = styled.td`
  width: 25%;
  padding: 10px;
  vertical-align: top;
`;

const Icon = styled.img`
  width: 100px;
  height: auto;
`;

const Description = styled.p`
  margin: 5px 0 0;
  font-size: 2em;
  color: #555;
`;

const Input = styled.input`
  margin-top: 10px;
  padding: 5px;
  width: 50px;
  text-align: center;
`;

const BottomButton = styled.button`
  align-self: flex-end;
  margin-top: 20px;
  padding: 10px 20px;
  background-color: #28a745;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  &:hover {
    background-color: #218838;
  }
`;

function Quiz2Result() {
  const navigate = useNavigate();
  const [answers, setAnswers] = useState(["", "", "", ""]);

  useEffect(() => {
    const storedAnswers = localStorage.getItem("quiz2Answers");
    if (storedAnswers) {
      setAnswers(JSON.parse(storedAnswers));
    }
  }, []);

  function handleButtonClick() {
    navigate("/quizzes");
  }

  return (
    <Container>
      <Title>채점 및 결과 확인</Title>
      <SubTitle>정답</SubTitle>

      <IconTable>
        <tbody>
          <IconTableRow>
            <IconCell>
              <Icon src="/images/haccp.jpg" alt="HACCP" />
            </IconCell>
            <IconCell>
              <Icon src="/images/gap.jpg" alt="GAP" />
            </IconCell>
            <IconCell>
              <Icon src="/images/organic.jpg" alt="유기농" />
            </IconCell>
            <IconCell>
              <Icon src="/images/child.jpg" alt="어린이 기호식품" />
            </IconCell>
          </IconTableRow>

          <IconTableRow>
            <IconCell>
              <Description>{answers[0] === "3" ? "🔵" : "❌"}</Description>
            </IconCell>
            <IconCell>
              <Description>{answers[1] === "1" ? "🔵" : "❌"}</Description>
            </IconCell>
            <IconCell>
              <Description>{answers[2] === "2" ? "🔵" : "❌"}</Description>
            </IconCell>
            <IconCell>
              <Description>{answers[3] === "4" ? "🔵" : "❌"}</Description>
            </IconCell>
          </IconTableRow>

          <IconTableRow>
            <IconCell>
              <Description>3</Description>
            </IconCell>
            <IconCell>
              <Description>1</Description>
            </IconCell>
            <IconCell>
              <Description>2</Description>
            </IconCell>
            <IconCell>
              <Description>4</Description>
            </IconCell>
          </IconTableRow>
        </tbody>
      </IconTable>
      <BottomButton onClick={handleButtonClick}>
        문제 목록으로 돌아가기
      </BottomButton>
    </Container>
  );
}

export default Quiz2Result;
