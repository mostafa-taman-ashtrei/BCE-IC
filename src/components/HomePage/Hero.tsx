import { Button, Icon, Box, Text, chakra, useColorModeValue } from '@chakra-ui/react'
import React from 'react';
import { NavLink as RouterLink } from 'react-router-dom';

const Hero: React.FC = () => {
    return (
        <Box px={8} py={24} mx="auto">
            <Box
                w={{ base: "full", md: 11 / 12, xl: 9 / 12 }}
                mx="auto"
                textAlign={{ base: "left", md: "center" }}
            >
                <chakra.h1
                    mb={6}
                    fontSize={{ base: "4xl", md: "6xl" }}
                    fontWeight="bold"
                    lineHeight="none"
                    letterSpacing={{ base: "normal", md: "tight" }}
                    color={useColorModeValue("gray.900", "gray.100")}
                >

                    <Text
                        display={{ base: "block", lg: "inline" }}
                        w="full"
                        bgClip="text"
                        bgGradient="linear(to-r, red.400,purple.500)"
                        fontWeight="extrabold"
                    >
                        BCEIC
                    </Text>{" "}
                    Chamber Of Commerce
                </chakra.h1>

                <chakra.p
                    px={{ base: 0, lg: 24 }}
                    mb={6}
                    fontSize={{ base: "lg", md: "xl" }}
                    color={useColorModeValue("gray.600", "gray.300")}
                >
                    Brazil - China - Egypt International Chamber of Commerce and Industry is an association
                    whose main objective is to foster closer ties between Arab countries, Brazil, China and Egypt

                </chakra.p>

                <RouterLink to="/about">
                    <Button
                        as="a"
                        variant="solid"
                        display="inline-flex"
                        alignItems="center"
                        justifyContent="center"
                        w={{ base: "full", sm: "auto" }}
                        mb={{ base: 2, sm: 0 }}
                        size="lg"
                        cursor="pointer"
                    >
                        Learn More
                        <Icon boxSize={4} ml={1} viewBox="0 0 20 20" fill="currentColor">
                            <path
                                fillRule="evenodd"
                                d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                                clipRule="evenodd"
                            />
                        </Icon>
                    </Button>
                </RouterLink>
            </Box>

        </Box>
    )
}

export default Hero;