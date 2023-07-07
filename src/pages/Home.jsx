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
            title: "T-shirt",
            code: "1111",
            file: require('../assets/tisort.gltf'),
            sizes: [
                "S",
                "M",
                "L",
                "XL",
            ],
            price: "$12",
            color: "#99e3ff",
            position: [0, -1, 0.5]
        },
        {
            id: 2,
            title: "Shirt",
            code: "2222",
            file: require('../assets/shirt.gltf'),
            sizes: [
                "S",
                "M",
                "L",
                "XL",
            ],
            price: "$18",
            color: "#fdffa5",
            position: [0, -6, 0]
        },
        {
            id: 3,
            title: "Shoes",
            code: "3333",
            file: require('../assets/shoe.gltf'),
            sizes: [
                "41",
                "42",
                "43",
                "44",
                "45"
            ],
            price: "$44",
            color: "#ffbff1",
            position: [0, -1, 0.8]
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
