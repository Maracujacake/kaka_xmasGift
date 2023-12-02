// src/App.tsx
import React from 'react';
import styled, { keyframes } from 'styled-components';

const glitterAnimation = keyframes`
  0% {
    background-position: 0% 0%;
  }
  100% {
    background-position: 400% 400%;
  }
`;

const GlitterText = styled.h1`
  font-size: 2em;
  position: relative;
  display: inline-block;
  font-weight: bold;
  color: gray;
  -webkit-background-clip: text;
  background-clip: text;
  animation: ${glitterAnimation} 2s linear infinite;
`;

const Container = styled.div`
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const App: React.FC = () => {
  return (
    <Container>
      <img src="/hello-kitty-merry-xmas.gif" alt="Hello Kitty GIF" />
      <div className="text-container">
        <GlitterText>Feliz Natal!</GlitterText>
      </div>
    </Container>
  );
};

export default App;
