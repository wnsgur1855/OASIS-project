import React from 'react';
import styled from 'styled-components';
import { useState, useEffect } from 'react';

const MainStyle = styled.div`
  background-color: aqua;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 500px;
  padding: 100px;
  border: 2px solid black;
  position: relative;
`;

const Box1 = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  position: relative;
  transition: transform 0.3s ease;
`;

function Main() {
  const [position, setPosition] = useState(0);

  function onScroll() {
    setPosition(window.scrollY);
  }
  useEffect(() => {
    window.addEventListener('scroll', onScroll);
    return () => {
      window.removeEventListener('scroll', onScroll);
    };
  }, []);

  const translateY = position / 2;

  return (
    <>
      <MainStyle>
        <Box1 style={{ transform: `translateY(${translateY}px)` }}>
          <div>생명을 위한 휴식처, 'OASIS'</div>
          <div>인류가 나아가야할 다양한 혁신 기술들을 제공합니다</div>
          <div>빈 박스입니다</div>
          <div>
            img박스
            <div>
              <img src='./img/Group-3.svg' />
            </div>
          </div>
        </Box1>
      </MainStyle>
      <MainStyle></MainStyle>
      <MainStyle></MainStyle>
    </>
  );
}

export default Main;
