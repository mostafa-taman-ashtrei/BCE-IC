import React from 'react';
import { useColorModeValue, SimpleGrid, Box, chakra } from '@chakra-ui/react';
import ImageSlider from '../misc/ImageSlider';


const Photos: React.FC = () => {
    return (
        <>
            <SimpleGrid
                alignItems="start"
                columns={{ base: 1, md: 2 }}
                mb={24}
                spacingY={{ base: 10, md: 32 }}
                spacingX={{ base: 10, md: 0 }}
            >
                <Box>
                    <chakra.h2
                        mb={4}
                        fontSize={{ base: "2xl", md: "3xl" }}
                        fontWeight="extrabold"
                        letterSpacing="tight"
                        textAlign={{ base: "center", md: "left" }}
                        color={useColorModeValue("gray.900", "gray.400")}
                        lineHeight={{ md: "shorter" }}
                    >
                        Checkout out latest meetings & interviews
                    </chakra.h2>
                    <chakra.p
                        mb={5}
                        textAlign={{ base: "center", sm: "left" }}
                        color={useColorModeValue("gray.600", "gray.400")}
                        fontSize={{ md: "lg" }}
                    >
                        Here is a collection of phots taken of our team & our partners during various meetings,
                        interviews and events
                    </chakra.p>
                </Box>
                <Box
                    w="full"
                    h="full"
                >
                    <ImageSlider />
                </Box>
            </SimpleGrid>


        </>
    );
}

export default Photos;