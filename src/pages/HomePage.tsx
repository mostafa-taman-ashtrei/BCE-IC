import React from 'react';
import { Container, useColorModeValue, Flex, Box } from '@chakra-ui/react';
import Hero from '../components/HomePage/Hero';
import InvestingWidgets from '../components/HomePage/InvestingWidget';
import Services from '../components/HomePage/serviceSection/Services';
import Photos from '../components/HomePage/Photos';


const HomePage: React.FC = () => {
    return (
        <Container maxW={'7xl'}>
            <Hero />
            <Services />
            <Flex
                w="full"
                justifyContent="center"
                alignItems="center"
                pos="relative"
            >
                <Box
                    shadow="xl"
                    bg={useColorModeValue("white", "gray.800")}
                    px={8}
                    py={20}
                    mx="auto"
                >
                    <InvestingWidgets />
                    <Photos />
                </Box>
            </Flex>
        </Container>
    )
}

export default HomePage;
