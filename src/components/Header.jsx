import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';


const HeaderContainer = styled.header`
  background-color: #282c34;
  padding: 5px;
  color: white;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const NavLink = styled(Link)`
  margin: 0 30px;
  text-decoration: none;
  color: white;
  font-size : 30px;
  &:hover {
    text-decoration: underline;
  }
`;

function Header() {
  return (
    <HeaderContainer>
      <NavLink to="/Quizzes"><h1>두뇌 향상 퀴즈 풀이</h1></NavLink>
      <nav>
        <NavLink to="/quizzes">문제 풀기</NavLink>
        <NavLink to="/results">결과 보기</NavLink>
      </nav>
    </HeaderContainer>
  );
}

export default Header;
