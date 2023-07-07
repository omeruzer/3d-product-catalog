import React from 'react'
import { styled } from 'styled-components';

export default function Contact() {

    const Contact = styled.div`
    height: 100vh;
    scroll-snap-align: center;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    background-color:#cbffc4
  `;

    const Box = styled.div`
height:100%;
display:flex;
text-align:center;
justify-content:center;
align-items:center;
width:100%;
`

    const Title = styled.div`
        font-size:36px;
        font-weight:600;
  `
    const SubTitle = styled.div`
        font-size:24px;
        font-weight:400;
  `

    return (
        <Contact>
            <Box>
                <div>
                    <Title>Omer Uzer</Title>
                    <SubTitle>+90 500 111 1111</SubTitle>
                    <SubTitle>Istanbul / Turkey</SubTitle>
                </div>
            </Box>
        </Contact>
    )
}
