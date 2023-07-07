import React from 'react'
import { styled } from 'styled-components';

export default function Header() {

    const Header = styled.div`
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
        font-size:48px;
        font-weight:600;
  `
    const SubTitle = styled.div`
        font-size:20px;
        font-weight:400;
  `
    return (
        <Header>
            <Box>
                <div>
                    <Title>Omer Clothing</Title>
                    <SubTitle>2023 Summer Collection</SubTitle>
                </div>
            </Box>
        </Header>
    )
}
