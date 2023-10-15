import React from 'react';
import styled from 'styled-components';
import { useState, useEffect } from 'react';

const MainStyle = styled.div`
  background-image: url(https://oasis.sc/wp-content/uploads/2023/08/OASIS_bg.jpg);
  background-position: center center;
  background-repeat: no-repeat;
  background-size: cover;
  display: flex;
  justify-content: center;
  width: 100vw;
  height: 1376px;
`;

const MainStyle2 = styled.div`
  width: 1230px;
  height: 1376px;
`;

const Box1 = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  position: relative;
  transition: transform 0.3s ease;
`;

const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  justify-content: center;
  align-items: center;
  width: 1230px;
  height: 79px;
`;

const BoxText = styled.div`
  display: flex;
  justify-content: center;
  top: 0;
  width: 1230px;
  height: ${(props) => props.height};
  font-size: 24px;
  font-weight: 700;
  font-family: 'Noto Sans KR', Sans-serif;
`;

const OasisImg = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 1230px;
  height: 103px;
`;

const OasisLogo = styled.img`
  color: black;
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
          <MainStyle2>
            <BoxText height={'240px'}></BoxText>
            <TextContainer>
              <BoxText height={'36px'}>생명을 위한 휴식처, 'OASIS'</BoxText>
              <BoxText height={'36px'}>
                인류가 나아가야할 다양한 혁신 기술들을 제공합니다
              </BoxText>
            </TextContainer>
            <BoxText height={'130px'}></BoxText>
            <OasisImg>
              <OasisLogo src='./img/Group-3.svg' />
            </OasisImg>
          </MainStyle2>
        </Box1>
      </MainStyle>
      <MainStyle></MainStyle>
      <MainStyle></MainStyle>
    </>
  );
}

export default Main;
