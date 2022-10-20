import React from 'react';
import styled from 'styled-components';
import { mobile } from "../Responsive";

const Container = styled.div`
  margin-top: 80px;
  ${mobile({ flexDirection: "column"})}
`
const Wrapper = styled.div`
`

const Main = () => {
  return (
    <Container id="Home">
      <Wrapper>
        <h1>
            Hi, I am Promise <span class="emoji" role="img" aria-label="waving hand emoji">👋</span>,
        </h1>
        <h3>
            A Frontend Developer <span class="emoji" role="img" aria-label="laptop">💻</span>
        </h3>
      </Wrapper>
    </Container>
  )
}

export default Main