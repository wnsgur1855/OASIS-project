import React from 'react';
import styled from 'styled-components';
import { useState, useEffect, useRef } from 'react';

const MovingImageStyle = styled.div`
  width: 100%;
  height: calc(100vw * 100/111); 
  display: flex;
  justify-content: center;
  position: relative;
  overflow: hidden; /* 이미지가 요소를 넘어가지 않도록 오버플로우를 숨김 */

  /* 이미지를 배경으로 설정 */
  background-image: url('./img/OASIS_bg.jpg');
  background-size: cover;
  background-position: center; /* 이미지가 중앙에 정렬됩니다. */
  background-repeat: no-repeat; /* 이미지 반복을 비활성화 */

  /* 이미지를 요소에 맞게 조절 */
  img {
    width: 100%;
    height: 100%;
    object-fit: cover; /* 이미지의 가로세로 비율을 유지하면서 요소에 맞게 조절 */
  }
`;

const Box1 = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  position: absolute;
  transition: transform 0.1s ease;
`;

const ImageStyle = styled.div`
  width: 100px;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    filter: brightness( 0% ) contrast( 100% ) saturate( 100% ) blur( 0px );
  } 
`;

const SampleStyle = styled.div`
  width: 100%;
  height: 1000px;
  display: flex;
  background-color: aqua;
`;

function Main() {
  const [position, setPosition] = useState(0);
  const MovingBackGroundRef = useRef(null);

  function onScroll() {
    setPosition(window.scrollY);
  }
  useEffect(() => {
    window.addEventListener('scroll', onScroll);
    return () => {
      window.removeEventListener('scroll', onScroll);
    };
  }, []);

  // 부모 요소의 높이를 계산
  const parentHeight = MovingBackGroundRef.current.clientHeight;

  // Box1의 초기 위치를 페이지 중앙으로 설정
  const initialTranslateY = parentHeight;

  console.log('parentHeight : ' + parentHeight + 'windowHeight : ' + window.innerHeight + ', position : ' + position);

  // Box1의 위치 계산
  const translateY = window.innerHeight / 2 + position - 76;
  const imageOpacity = Math.min(1, initialTranslateY / translateY);

  const testStyle = {
    transform: `translateY(${translateY}px)`,
    opacity: imageOpacity,
  };

  return (
    <>
      <MovingImageStyle ref={MovingBackGroundRef}>
        <Box1 style={testStyle}>
          <div>생명을 위한 휴식처, 'OASIS'</div>
          <div>인류가 나아가야할 다양한 혁신 기술들을 제공합니다</div>
          <div>
            <ImageStyle>
              <img src='./img/Group-3.svg'/>
            </ImageStyle>
          </div>
        </Box1>
      </MovingImageStyle>
      <SampleStyle/>
      <SampleStyle/>
    </>
  );
}

export default Main;
