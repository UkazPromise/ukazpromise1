import React from 'react';
import styled from "styled-components";
import { mobile } from "../Responsive";

const Container = styled.div`
  height: 80px;
  margin-left: 10px;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 10000000;
  width: 90%;
  ${mobile({ flexDirection: "column"})}   
`;

const Left = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
`;

const Logo = styled.h2`
  font-weight: bold;
`

const Navbar = () => {
  return (
    <Container>
          <Left>
            <Logo>Ukazpromise <span class="emoji" role="img" aria-label="fox emoji">🦊</span></Logo>
          </Left>
    </Container> 
  )
}

export default Navbar