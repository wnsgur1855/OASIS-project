import React from 'react';
import styled from 'styled-components';

const AnchorLargeBox = styled.div`
  position: relative;
  flex-direction: row;
  width: 1250px;
  height: ${(props) => props.height};
  margin: 0 auto;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid black;
`;

const AnchorMainText = styled.div`
  display: flex;
  width: 403px;
  height: 36px;
`;

const AnchorVideo = styled.video`
  width: 559px;
  height: 449px;
  padding: 50px;
`;

const OasisLogo = styled.img`
  color: black;
`;

function Anchor1() {
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
        width: '100vw',
        gap: '50px',
      }}
    >
      <AnchorLargeBox height={'500px'}>
        <div>
          <AnchorMainText>DEFINITION</AnchorMainText>
          <div>
            오가노이드는 장기의 특이적 세포 조합 장기가 지닌 특정 공간적 분포를
            통한 기능 재현 실제 장기와 유사한 형태로 배양된 3차원 구조체
          </div>
        </div>
        <AnchorVideo>
          <source src='./img/video.mp4' />
        </AnchorVideo>
      </AnchorLargeBox>
      <img src='./img/캡쳐1.PNG' alt='' />
      <img src='./img/캡처2.PNG' alt='' />
      <img src='./img/캡처3.PNG' alt='' />
      <img src='./img/캡처4.PNG' alt='' />
      <img src='./img/캡처5.PNG' alt='' />
    </div>
  );
}
export default Anchor1;
