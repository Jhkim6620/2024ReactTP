import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const Container = styled.div`
  width: 80%;
  height: 80vh;
  margin: 0 auto;
  padding: 20px;
  font-family: Arial, sans-serif;
  border: 1px solid #ddd;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
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

const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  margin-top: 20px;
`;

const TableRow = styled.tr`
  border: 1px solid #ddd;
`;

const IconCell = styled.td`
  width: 120px;
  padding: 8px;
  vertical-align: top;
`;

const DescriptionCell = styled.td`
  padding: 8px;
  vertical-align: top;
`;

const Icon = styled.img`
  width: 100px;
  height: auto;
`;

const DescriptionTitle = styled.h3`
  margin: 0;
  font-size: 1.2em;
  color: #333;
`;

const Description = styled.p`
  margin: 5px 0 0;
  font-size: 1em;
  color: #555;
`;

const BottomButton = styled.button`
  align-self: flex-end;
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

function A2_46() {
  const navigate = useNavigate();

  function handleButtonClick() {
    navigate("/quiz2exam");
  }

  return (
    <Container>
      <Title>식품 인증 마크 기억하기</Title>
      <SubTitle>인증 마크와 설명을 읽고 기억해주세요!</SubTitle>
      <Table>
        <tbody>
          <TableRow>
            <IconCell>
              <Icon src="/images/haccp.jpg" alt="HACCP" />
            </IconCell>
            <DescriptionCell>
              <DescriptionTitle>안전관리인증(HACCP)</DescriptionTitle>
              <Description>
                해썹(HACCP)은 식품의 원재료부터 소비자가 섭취하기까지 식품
                위생에 해로운 영향을 미칠 수 있는 위해요소를 분석하고 이를
                관리하는 과학적 위생관리 체계를 말한다.
              </Description>
            </DescriptionCell>
          </TableRow>
          <TableRow>
            <IconCell>
              <Icon src="/images/gap.jpg" alt="GAP" />
            </IconCell>
            <DescriptionCell>
              <DescriptionTitle>우수관리인증(GAP)</DescriptionTitle>
              <Description>
                갭(GAP)은 농산물 우수관리인증을 뜻하는 마크로, 농약, 중금속,
                유해 생물 등 110가지 항목 검사를 한 후 안전한 식품에게만
                부여된다.
              </Description>
            </DescriptionCell>
          </TableRow>
          <TableRow>
            <IconCell>
              <Icon src="/images/organic.jpg" alt="유기농" />
            </IconCell>
            <DescriptionCell>
              <DescriptionTitle>유기농</DescriptionTitle>
              <Description>
                합성농약과 화학비료를 사용하지 않은 유기농산물, 항생제,
                합성항균제, 호르몬제가 포함되지 않고 100% 유기사료만으로 사용한
                유기축산물, 국산 또는 외국산 유기원료를 사용한 유기가공식품에
                붙여지는 마크이다.
              </Description>
            </DescriptionCell>
          </TableRow>
          <TableRow>
            <IconCell>
              <Icon src="/images/child.jpg" alt="어린이 기호식품" />
            </IconCell>
            <DescriptionCell>
              <DescriptionTitle>어린이 기호식품 품질 인증</DescriptionTitle>
              <Description>
                간식용, 식사대용으로 나오는 식품의 안전, 영양, 식품첨가물에 대한
                기준을 검토하고 안전하고 영양을 고루 갖추었다고 판단될 경우
                부여하는 인증이다.
              </Description>
            </DescriptionCell>
          </TableRow>
        </tbody>
      </Table>
      <BottomButton onClick={handleButtonClick}>문제 풀기</BottomButton>
    </Container>
  );
}

export default A2_46;
