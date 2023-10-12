import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

const MainStyle = styled.div`
  background-color: aqua;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 500px;
  padding: 100px;
  border: 2px solid black;
  position: relative; /* Add position relative to create stacking context */
`;

const ImageBox = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  opacity: ${(props) =>
    props.opacity || 1}; /* Set initial opacity (default is 1) */
  transition: opacity 0.3s ease; /* Add transition for smooth opacity change */
`;

const Box1 = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  position: relative;
  transition: transform 0.3s ease;
  z-index: 2; /* Ensure that Box1 is on top of the images */
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

  // Calculate the opacity for the image box based on scroll position
  const imageOpacity = 1 - position / 500;

  return (
    <>
      <MainStyle>
        <Box1 style={{ transform: `translateY(${translateY}px)` }}>
          <div>생명을 위한 휴식처, 'OASIS'</div>
          <div>인류가 나아가야할 다양한 혁신 기술들을 제공합니다</div>
          <div>빈 박스입니다</div>
        </Box1>
        <ImageBox opacity={imageOpacity}>
          <div>
            img박스
            <div>
              <img src='./img/Group-3.svg' alt='Image' />
            </div>
          </div>
        </ImageBox>
      </MainStyle>
      <MainStyle></MainStyle>
    </>
  );
}

export default Main;
