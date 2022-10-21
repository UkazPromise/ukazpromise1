import React from 'react'
import styled from 'styled-components'
import { mobile } from "../Responsive";

const Container = styled.div`
    display: flex;
    ${mobile({ flexDirection: "column"})}   
`
const Left = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    padding: 20px;
`;
const Title = styled.h3`
    margin-bottom: 30px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-right: 20px;
`;
const List = styled.ol`
    margin: 0;
    padding: 0;
    list-style: none;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    margin-right: 20px;
`;
const ListItem = styled.li`
  width: 50%;
  margin-bottom: 10px;
`;
const Center = styled.div`
    flex: 1;
    padding: 20px;
`;
const Right = styled.div`
  flex: 1;
  padding: 20px;
`
const Hr = styled.hr`
  height: 2px;
`

const About = () => {
  return (
    <Container id="About">
        <Left>
            <Title>Technology</Title>
            <List>
                <ListItem>JavaScript</ListItem>
                <ListItem>ReactJs</ListItem>
                <ListItem>NextJs</ListItem>
                <ListItem>NodeJs</ListItem>
                <ListItem>RestApi</ListItem>
                <ListItem>SaSS</ListItem>
                <ListItem>Jquery</ListItem>
                <ListItem>Bootstrap</ListItem>
                <ListItem>Vercel</ListItem>
                <ListItem>Mongo DB</ListItem>
                <ListItem>Postman</ListItem>
                <ListItem>AWS</ListItem>
                <ListItem>HTML</ListItem>
                <ListItem>CSS</ListItem>
            </List>
        </Left>
        <Center>
            <Title>Projects</Title>
            <List>
                <ListItem><a style={{textDecoration: 'none'}} href="https://lightfrontend-hw1rl2yad-ukazpromise.vercel.app/">Light24/7</a></ListItem>
                <ListItem><a style={{textDecoration: 'none'}} href="https://ukazpromise.github.io/Calculator.by.protech/">Calculator</a></ListItem>
                <ListItem><a style={{textDecoration: 'none'}} href="https://ukazpromise.github.io/Protech.drum.machine/">Drum Machine</a></ListItem>
                <ListItem><a style={{textDecoration: 'none'}} href=" https://ukazpromise.github.io/Markdown.previewer.by.Protech/">Light24/7</a></ListItem>
                <ListItem><a style={{textDecoration: 'none'}} href=" https://ukazpromise.github.io/Calculator/">Scientific Calculator</a></ListItem>
            </List>
        </Center>
        <Right> 
            <Title>Certifications</Title>
            <List>
                <ListItem><a style={{textDecoration: 'none'}} href="https://freecodecamp.org/certification/fcc4c0791fe-6a91-4c6c-8243-87640c58287b/front-end-development-libraries">Front End Development Libraries</a></ListItem>
                <ListItem><a style={{textDecoration: 'none'}} href="https://freecodecamp.org/certification/fcc4c0791fe-6a91-4c6c-8243-87640c58287b/responsive-web-design">Responsive Web Design</a></ListItem>
                <ListItem>Build a complete web chat application with <br/> Node.js and React certification (Udemy)</ListItem>
                <ListItem>The Complete JavaScript course 2020: From <br/>Zero to Expert certification (Udemy)</ListItem>
            </List>
        </Right>
        <Hr/>
    </Container>
  )
}

export default About