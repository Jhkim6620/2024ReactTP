import React from 'react';
import styled from 'styled-components';

const FooterContainer = styled.footer`
  background-color: #282c34;
  padding: 10px;
  color: white;
  text-align: center;
  margin-top: auto;
`;

function Footer() {
  return (
    <FooterContainer>
      <p>&copy; 2024 React 팀 프로젝트 7조.</p>
    </FooterContainer>
  );
}

export default Footer;
