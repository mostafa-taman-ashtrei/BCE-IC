import React from 'react';
import { Container, Stack } from '@chakra-ui/react';
import ImageSlider from '../components/misc/ImageSlider';
import Hero from '../components/HomePage/Hero';
import InvestingWidgets from '../components/HomePage/InvestingWidget';
import Services from '../components/HomePage/serviceSection/Services';


const HomePage: React.FC = () => {
    return (
        <Container maxW={'7xl'}>
            <Stack
                align={'center'}
                spacing={{ base: 8, md: 10 }}
                py={{ base: 20, md: 10, lg: 5 }}
                direction={{ base: 'column', md: 'row' }}
            >
                <Hero />
                <ImageSlider />
            </Stack>
            <Services />
            <InvestingWidgets />
        </Container>
    )
}

export default HomePage;
