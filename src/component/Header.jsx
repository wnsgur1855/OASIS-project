import React, { useState } from 'react';
import styled from 'styled-components';
import { BiChevronDown } from 'react-icons/bi';
import { useNavigate } from 'react-router-dom/dist';

const HeaderStyle = styled.div`
  display: flex;
  position: fixed;
  justify-content: center;
  width: 100%;
  height: 60px;
  background-color: white;
  opacity: 1;
  align-items: center;
  padding: 0 20px;
  z-index: 999;
`;

const ImageBox = styled.div`
  width: 212px;
  height: 26px;
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
  display: flex;
  margin-left: 20px;
  text-decoration: none;
  color: black;
  background-color: ${(props) => props.Mg};
`;

const Image = styled.img`
  margin-right: 10px;
  width: 117px;
  height: 26px;
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
  width: 110px;
  height: 200px;
  top: 28px;
  left: 10%;
  transform: translateX(-10%);
  background-color: white;
  padding: 20px;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
  z-index: 1;
  display: ${(props) => (props.showModal ? 'block' : 'none')};
`;

const Modal2 = styled.div`
  position: absolute;
  width: 110px;
  height: 150px;
  top: 28px;
  left: 10%;
  transform: translateX(-10%);
  background-color: white;
  padding: 20px;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
  z-index: 1;
  display: ${(props) => (props.showModal ? 'block' : 'none')};
`;

const AtagAnimation = styled.a`
  width: 110px;
  line-height: 20px;
  text-decoration: none;
  color: black;
  font-family: 'Montserrat, Sans-serif';
  font-weight: 400;
  /* word-spacing: 30px; //줄바꿈시키는 css */
  transition: background-color 0.4s ease;
  &:hover {
    color: rgb(0, 192, 154);
  }
`;

function Header() {
  const [isFull, setIsFull] = useState(false);
  const navigate = useNavigate();
  const goToPage = () => {
    navigate()
  }

  // 게이지 채우기 함수
  const fillGaze = () => {
    setIsFull(true);
  };

  // Research Product 모달 state
  const [showResearchProductModal, setShowResearchProductModal] =
    useState(false);

  // Organoid Service 모달 state
  const [showOrganoidServiceModal, setShowOrganoidServiceModal] =
    useState(false);

  // Research Product 모달 표시 이벤트 핸들러
  const handleResearchProductMouseEnter = () => {
    setShowResearchProductModal(true);
  };

  // Organoid Service 모달 표시 이벤트 핸들러
  const handleOrganoidServiceMouseEnter = () => {
    setShowOrganoidServiceModal(true);
  };

  // Research Product 모달 닫기 이벤트 핸들러
  const handleCloseResearchProductModal = () => {
    setShowResearchProductModal(false);
  };

  // Organoid Service 모달 닫기 이벤트 핸들러
  const handleCloseOrganoidServiceModal = () => {
    setShowOrganoidServiceModal(false);
  };

  return (
    <HeaderStyle>
      <ImageBox>
        <ImageLink href='https://oasis.sc/' target='_blank' Mg={'none'}>
          <Image src='./img/OASIS_logo.svg' />
        </ImageLink>
      </ImageBox>
      <Box>
        <div onClick={()=>navigate('/Contact')} >
          <BoxInBox width={'82px'}>Contact Us</BoxInBox>
        </div>
        <div onClick={()=>navigate('/SpacialDay')} >
          <BoxInBox width={'84px'}>Spatial Day</BoxInBox>
        </div>
        <div onClick={()=> navigate('/OrganoEZ')}>
          <BoxInBox onMouseEnter={handleResearchProductMouseEnter}>
            <TextStyle onClick={fillGaze}>Research Product</TextStyle>
            <IconStyle />
            <Modal2
              showModal={showResearchProductModal}
              onMouseLeave={handleCloseResearchProductModal}
            >
              <ModalBox width={'150px'} height={'160px'} gap={'21px'}>
                organoEZ Media <bar />
                organoEZ Protein
                <bar /> organoEZ ECM
              </ModalBox>
            </Modal2>
          </BoxInBox>
        </div>
        <div onClick={()=>navigate('/ODSEL')}>
          <BoxInBox onMouseEnter={handleOrganoidServiceMouseEnter}>
            <TextStyle width={'190px'} onClick={fillGaze}>
              Organoid Service
            </TextStyle>
            <IconStyle />
            <Modal
              showModal={showOrganoidServiceModal}
              onMouseLeave={handleCloseOrganoidServiceModal}
            >
              <ModalBox width={'110px'} height={'180px'} gap={'40px'}>
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
              </ModalBox>
            </Modal>
          </BoxInBox>
        </div>
      </Box>
    </HeaderStyle>
  );
}

const ModalBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  gap: ${(props) => props.gap};
  marg
`;

export default Header;
