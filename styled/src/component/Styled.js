import React from "react";
import styled from "styled-components";

const Styled = () => {

    const Container = styled.div`
    background: lightblue;
    padding: 20px;
    width: 800px;
    margin: 0 auto;
    text-align: center;
    font-family: sans-serif;
  `;

  const Heading = styled.h1`
    
    color: #111;
    font-size: 40px;
    letter-spacing: 3px;
  `;

  const Paragraph = styled.p`
    
    padding: 20px;
    line-height: 1.8;
    letter-spacing: 1px;
    color: darkgrey;
  `;

  const Button = styled.button`
  
    padding: 15px 35px;
    border-radius: 10px;
    border: ${props => props.outline ? "1px solid darkblue" : "none"};
    cursor: pointer;
    background: ${props => props.outline ? "transparent" : "darkblue"};
    color: ${props => props.outline ? "darkblue" : "#fff"};
    margin-left: 10px;
  `;


  const Subparagraph = styled(Paragraph)`
  
    background-color: palevioletred;
    color: papayawhip;
    border: 1px solid;
    margin-top: 15px; 

    &:hover{

        background-color: papayawhip;
        color:  palevioletred;
    }
  `;

  return( 
  
    <Container>
        <Heading>Címsor</Heading>
        <Paragraph>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed laboriosam omnis aliquid, accusamus vitae cum quia officiis officia delectus vel ad, architecto facere deserunt ratione.</Paragraph>


        <Subparagraph>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt cumque est aperiam qui expedita recusandae?</Subparagraph>


        <Button outline>Gomb 1</Button>
        <Button>Gomb 2</Button>
    </Container>
  
  );
};

export default Styled;
