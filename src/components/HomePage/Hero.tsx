import { Stack, Heading, Button, Text } from '@chakra-ui/react'
import React from 'react'

const Hero: React.FC = () => {
    return (
        <Stack spacing={{ base: 5, md: 10 }} w={'55%'}>
            <Heading
                lineHeight={1.1}
                fontWeight={600}
                fontSize={{ base: '3xl', sm: '4xl', lg: '5xl' }}>
                <Text
                    as={'span'}
                    position={'relative'}
                    _after={{
                        content: "''",
                        width: 'full',
                        height: '30%',
                        position: 'absolute',
                        bottom: 1,
                        left: 0,
                        bg: 'red.400',
                        zIndex: -1,
                    }}>
                    BCEIC
                </Text>
                <br />
                <Text as={'span'} color={'red.400'}>
                    Chamber Of Commerce
                </Text>
            </Heading>
            <Text color={'gray.500'}>
                Brazil - China - Egypt International Chamber of Commerce and Industry is an association
                whose main objective is to foster closer ties between Arab countries, Brazil, China and Egypt
            </Text>
            <Stack
                spacing={{ base: 4, sm: 6 }}
                direction={{ base: 'column', sm: 'row' }}>
                <Button
                    rounded={'full'}
                    size={'lg'}
                    fontWeight={'normal'}
                    px={6}
                    colorScheme={'red'}
                    bg={'red.400'}
                    _hover={{ bg: 'red.500' }}>
                    Get started
                </Button>
                <Button
                    rounded={'full'}
                    size={'lg'}
                    fontWeight={'normal'}
                    px={6}
                >
                    Learn More
                </Button>
            </Stack>
        </Stack>
    )
}

export default Hero