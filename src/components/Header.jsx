import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const HeaderContainer = styled.header`
  background-color: #282c34;
  padding: 5px;
  color: white;
  text-align: center;
`;

const NavLink = styled(Link)`
  margin: 0 15px;
  text-decoration: none;
  color: white;

  &:hover {
    text-decoration: underline;
  }
`;

function Header() {
  return (
    <HeaderContainer>
      <NavLink to="/Home"><h1>두뇌 향상 퀴즈 풀이</h1></NavLink>
      <nav>
        <NavLink to="/quizzes">겹쳐진 문제 찾기</NavLink>
        <NavLink to="/results">결과 보기</NavLink>
        <NavLink to="/contact">랭킹</NavLink>
      </nav>
    </HeaderContainer>
  );
}

export default Header;
