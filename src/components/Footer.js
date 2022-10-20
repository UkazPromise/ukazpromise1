import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faGithub, faLinkedin, faTwitter, faWhatsapp, } from "@fortawesome/free-brands-svg-icons"
import React from 'react';
import styled from "styled-components";

const Container = styled.div`
    display: block;
    justify-content: center;
`
const Title = styled.h2`
    margin-bottom: 30px;
    align-items: center;
    justify-content: center;
    margin-right: 20px;
`

const FooterLink = styled.div`
    display: flex;
    margin-bottom: 20px;
    font-size: 20px;
    text-decoration: none;
    justify-content: center;
    gap: 2%;
`

const Footer = () => {
  return (
    <Container>
        <Title>Contact Me</Title>
        <FooterLink>
            <a target="_blank" rel="noreferrer" href="https://www.linkedin.com/in/ukachukwu-promise-676aa7129/">
                <FontAwesomeIcon icon={faLinkedin} color="#0072b1"/>
            </a>
            <a target="_blank" rel="noreferrer" href="https://twitter.com/UkazBlog">
                <FontAwesomeIcon icon={faTwitter} color="#00ACEE"/>
            </a>
            <a target="_blank" rel="noreferrer" href="https://github.com/UkazPromise/">
                <FontAwesomeIcon icon={faGithub} color="#171515"/>
            </a>
            <a target="_blank" rel="noreferrer" href="https://api.whatsapp.com/send/?phone=2347056674363">
                <FontAwesomeIcon icon={faWhatsapp} color="#34B7F1"/>
            </a>
        </FooterLink>
            <p style={{fontWeight:"bold"}}>Ukazpromise ©2022</p>
    </Container> 
           
  )
}

export default Footer