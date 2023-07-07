import React from 'react'
import Section from '../components/Section'
import { styled } from 'styled-components'
import Header from '../components/Header';
import Contact from '../components/Contact';

export default function Home() {

    const Container = styled.div`
    height: 100vh;
    scroll-snap-type: y mandatory;
    scroll-behavior: smooth;
    overflow-y: auto;
    scrollbar-width: none;
    &::-webkit-scrollbar{
      display: none;
    }
  `;

    const products = [
        {
            id: 1,
            title: "Product 1",
            code: "1111",
            sizes: [
                "S",
                "M",
                "L",
            ],
            price: "$12",
            color: "#99e3ff",
        },
        {
            id: 2,
            title: "Product 2",
            code: "2222",
            sizes: [
                "S",
                "M",
                "L",
                "XL",
            ],
            price: "$15",
            color: "#fdffa5"
        },
        {
            id: 3,
            title: "Product 3",
            code: "3333",
            sizes: [
                "S",
                "M",
                "L",
                "XL",
                "XXL"
            ],
            price: "$25",
            color: "#ffbff1"
        },
    ]

    return (
        <Container>
            <Header />
            {
                products.map((e, key) => (
                    <Section key={e.id} index={key} color={e.color} product={e} />
                ))
            }
            <Contact />
        </Container>
    )
}
