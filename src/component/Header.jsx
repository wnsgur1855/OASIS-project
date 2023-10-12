import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { BiChevronDown } from 'react-icons/bi';

const HeaderStyle = styled.div`
  display: flex;
  position: relative;
  justify-content: center;
  width: 100vw;
  height: 76px;
  background-color: white;
  opacity: 1;
  align-items: center;
  padding: 0 20px;
`;

const ImageBox = styled.div`
  width: 212px;
  height: 24px;
  margin-top: 5px;
`;

const Box = styled.div`
  display: flex;
  align-items: center;
  flex-direction: row-reverse;
  width: 1037px;
  height: 26px;
  gap: 20px;
`;

const ImageLink = styled.a`
  text-decoration: none;
  color: black;
`;

const Image = styled.img`
  margin-right: 10px;
`;

const BoxInBox = styled.div`
  font-family: 'Montserrat, Sans-serif';
  font-weight: 400;
  display: flex;
  position: relative;
  align-items: center;
  margin-left: 10px;
  flex-direction: row;
  width: ${(props) => props.width || '140px'};
  height: 26px;
  cursor: pointer;
  &::before {
    content: '';
    position: absolute;
    width: 100%;
    height: 2px;
    background-color: transparent;
    bottom: 0;
    left: 0;
    transition: background-color 0.4s ease;
  }
  &:hover::before {
    background-color: rgb(0, 192, 154);
  }
`;

const TextStyle = styled.div`
  font-family: 'Montserrat, Sans-serif';
  font-weight: 400;
  position: absolute;
  width: 140px;
  height: 26px;
  white-space: nowrap;
  margin-top: 6px;
  cursor: pointer;
`;

const IconStyle = styled(BiChevronDown)`
  position: absolute;
  width: 19.19px;
  height: 30.5px;
  margin-left: 125px;
  cursor: pointer;
`;

const Modal = styled.div`
  position: absolute;
  width: 300px;
  height: 300px;
  top: 80px;
  left: 50%;
  transform: translateX(-10%);
  background-color: white;
  padding: 20px;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
  display: ${(props) => (props.showModal ? 'block' : 'none')};
`;

const AtagAnimation = styled.a`
  width: 300px;
  color: black;
  word-spacing: 30px;
  transition: background-color 0.4s ease;
  &:hover {
    color: green;
  }
`;

function Header() {
  const [isFull, setIsFull] = useState(false);

  // 게이지 채우기 함수
  const fillGaze = () => {
    setIsFull(true);
  };

  // 메뉴 모달 state
  const [showModal, setShowModal] = useState(false);

  // 모달 표시 이벤트 핸들러
  const handleMouseEnter = () => {
    setShowModal(true);
  };

  // 모달 닫기 이벤트 핸들러
  const handleCloseModal = () => {
    setShowModal(false);
  };

  return (
    <HeaderStyle>
      <ImageBox>
        <ImageLink href='https://oasis.sc/' target='_blank'>
          <Image src='./img/OASIS_logo.svg' />
        </ImageLink>
      </ImageBox>
      <Box>
        <ImageLink href='https://oasis.sc/contact-us/' target='_blank'>
          <BoxInBox width={'82px'}>Contact Us</BoxInBox>
        </ImageLink>
        <ImageLink href='https://oasis.sc/spatial-day/' target='_blank'>
          <BoxInBox width={'84px'}>Spatial Day</BoxInBox>
        </ImageLink>
        <ImageLink href='https://oasis.sc/research-product/' target='_blank'>
          <BoxInBox onMouseEnter={handleMouseEnter}>
            <TextStyle onClick={fillGaze}>Research Product</TextStyle>
            <IconStyle />
            <Modal showModal={showModal} onMouseLeave={handleCloseModal}>
              <AtagAnimation href='' target='_blank'>
                ODISEL ONC
              </AtagAnimation>
              <AtagAnimation href='' target='_blank'>
                ODISEL GUT
              </AtagAnimation>
              <AtagAnimation href='' target='_blank'>
                ODISEL SKIN
              </AtagAnimation>
              <AtagAnimation href='' target='_blank'>
                ODISEL VIR
              </AtagAnimation>
            </Modal>
          </BoxInBox>
        </ImageLink>
        <ImageLink href='https://oasis.sc/organoid-service/' target='_blank'>
          <BoxInBox>
            <TextStyle width={'190px'} onMouseEnter={handleMouseEnter}>
              Organoid Service
            </TextStyle>
            <IconStyle />
            <Modal showModal={showModal} onMouseLeave={handleCloseModal}>
              organoEZ Media organoEZ Protein organoEZ ECM
            </Modal>
          </BoxInBox>
        </ImageLink>
      </Box>
    </HeaderStyle>
  );
}

export default Header;
