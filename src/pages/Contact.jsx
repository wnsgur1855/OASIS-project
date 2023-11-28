import React, { useEffect, useState } from 'react'
import Rechart from '../component/Rechart';
import BarGraph from '../component/BarGraph';
import PieChart from '../component/PieChart';
import styled from 'styled-components';

const ButtonStyle = styled.button`
 width : 10px ;
 height: 10px;
 border: 2px solid black;
 cursor: pointer;
`

function Nobody () {
  return (
    <div style={{width: "1000px", height: "1000px", backgroundColor: "red"}} >
      아무것도 없다
    </div>
  )
}


function Contact() {

  const [button1, setButton1] = useState(false);
  const button1On = () => {
    setButton1(true);
  }
  const [button2, setButton2] = useState(false);
  const button2On = () => {
    setButton2(true);
  }
  const [button3, setButton3] = useState(false);
  const button3On = () => {
    setButton3(true);
  }

  // useEffect(()=> {
  //   if(button2) {
  //     setButton2(false)
  //   }
  // },[button2])

  return (
    <div>
      <div style={{ width: 1000, height: 800}} >
      {button1 && <Rechart />}
      <ButtonStyle onClick={button1On} />
      <ButtonStyle onClick={button2On} />
      <ButtonStyle onClick={button3On} />
      {button2 && <BarGraph />}
      {button3 && <PieChart />}
    </div>
    </div>
    
  )
}

export default Contact

