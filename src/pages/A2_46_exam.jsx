import React, { useState } from "react";
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
  margin: 3px 0;
`;

const DescriptionTable = styled.table`
  width: 100%;
  border-collapse: collapse;
  margin-top: 10px;
`;

const DescriptionTableRow = styled.tr`
  border: 1px solid #ddd;
`;

const DescriptionCell = styled.td`
  padding: 8px;
  vertical-align: top;
`;

const Description = styled.p`
  margin: 3px 0 0;
  font-size: 1em;
  color: #555;
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

function Quiz2Exam() {
  const navigate = useNavigate();
  const [answers, setAnswers] = useState(["", "", "", ""]);
  function handleInputChange(event, index) {
    const newAnswers = [...answers];
    newAnswers[index] = event.target.value;
    setAnswers(newAnswers);
  }

  function handleButtonClick() {
    localStorage.setItem("quiz2Answers", JSON.stringify(answers));
    navigate("/quiz2result");
  }

  return (
    <Container>
      <Title>식품 인증 마크 맞추기</Title>
      <SubTitle>
        다음 4가지 상황을 읽고, 해당하는 식품인증마크에 번호를 입력하세요.
      </SubTitle>
      <DescriptionTable>
        <tbody>
          <DescriptionTableRow>
            <DescriptionCell>
              <Description>
                1. 대구에서 사과농장을 하는 정수 씨는 토양부터 생산과정까지
                꼼꼼하게 관리하여 농약, 중금속, 유해 생물 등 110가지 항목 검사에
                통과하여 이 마크를 인증 받았습니다.
              </Description>
            </DescriptionCell>
          </DescriptionTableRow>
          <DescriptionTableRow>
            <DescriptionCell>
              <Description>
                2. 암 투병 중인 남편을 위해 미희 씨는 이 마크를 인증 받은 100%
                유기사료만으로 사육한 닭고기와 화학비료를 사용하지 않은 상추,
                콩나물을 구입하여 건강식을 만들어 주었습니다.
              </Description>
            </DescriptionCell>
          </DescriptionTableRow>
          <DescriptionTableRow>
            <DescriptionCell>
              <Description>
                3. 전라도에서 45년 동안 김치공장을 운영하는 순복 씨는 제조,
                보존, 유통, 조리단계를 거쳐 소비자가 섭취하기 전까지의
                위해요소분석과 위생관리 체계를 모두 통과하여 이 마크를 인증
                받았습니다.
              </Description>
            </DescriptionCell>
          </DescriptionTableRow>
          <DescriptionTableRow>
            <DescriptionCell>
              <Description>
                4. 5살 채민이를 위해 혜영 씨는 합성 보존료를 사용하지 않은
                고영양 간식으로 이 마크를 인증 받은 아이스크림, 과자, 음료수를
                구입하였습니다.
              </Description>
            </DescriptionCell>
          </DescriptionTableRow>
        </tbody>
      </DescriptionTable>

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
              <Input
                type="text"
                value={answers[0]}
                onChange={(event) => handleInputChange(event, 0)}
              />
            </IconCell>
            <IconCell>
              <Input
                type="text"
                value={answers[1]}
                onChange={(event) => handleInputChange(event, 1)}
              />
            </IconCell>
            <IconCell>
              <Input
                type="text"
                value={answers[2]}
                onChange={(event) => handleInputChange(event, 2)}
              />
            </IconCell>
            <IconCell>
              <Input
                type="text"
                value={answers[3]}
                onChange={(event) => handleInputChange(event, 3)}
              />
            </IconCell>
          </IconTableRow>
        </tbody>
      </IconTable>
      <BottomButton onClick={handleButtonClick}>
        채점 및 정답 확인하기
      </BottomButton>
    </Container>
  );
}

export default Quiz2Exam;
