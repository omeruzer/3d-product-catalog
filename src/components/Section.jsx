import React from 'react'
import { styled } from 'styled-components';
import Cube from './Cube';

export default function Section({ color, product, index }) {

    const Section = styled.div`
    height: 100vh;
    scroll-snap-align: center;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    background-color:${color}
  `;

    const Box = styled.div`
    display:flex;
    height:100%;
    ${'' /* flex-direction: ${index % 2 == 0 ? "row" : "row-reverse"}; */}
    align-items:center;
    width:100%;
    @media (max-width: 768px) {
    flex-direction: column;
    padding:100px;
  }
  `
    const ItemBox = styled.div`
    height: 100vh;
    width: 70%;
    display: flex;
    justify-content: center;
    align-items: center;
    @media (max-width: 768px) {
    width: 200%;
  }
  `

    const Title = styled.div`
    font-size:36px;
    font-weight:700;
`

    const Code = styled.div`
    font-size:18px;
    font-weight:500;
`
    const Divider = styled.div`
  background-color:gray;
  height:1px;
  margin:10px 0px
`
    const Sizes = styled.div`
    font-size:24px;
    font-weight:400;
`


    const PriceBox = styled.div`
    display:flex;
    justify-content:start;
    align-items:center;
    gap:2px
`
    const Price = styled.div`
    font-size:24px;
    font-weight:700;
`
    const Quantity = styled.div`
    font-size:14px;
`
    const Content = styled.div`
`

    return (
        <Section>
            <Box>
                <ItemBox>
                    <Cube position={product.position} color={color} file={product.file}/>
                </ItemBox>
                <Content>
                    <Title>{product.title}</Title>
                    <Code>{product.code}</Code>
                    <Divider />
                    <Sizes>
                        {
                            product.sizes.map((e) => (
                                <>{e} </>
                            ))
                        }
                    </Sizes>
                    <PriceBox>
                        <Price>{product.price}</Price>
                        <Quantity>/piece</Quantity>
                    </PriceBox>
                </Content>
            </Box>
        </Section >
    )
}
