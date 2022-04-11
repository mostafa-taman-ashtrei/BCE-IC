import React from 'react'
import TeamMembers from '../components/AboutPage/TeamMembers';
import {
    Box,
    Heading,
    Text,
    Stack,
    Container,
} from '@chakra-ui/react';


const TeamPage = () => {
    return (
        <Box>
            <Container maxW={'7xl'} py={10} as={Stack} spacing={12}>
                <Stack spacing={0} align={'center'}>
                    <Heading>Our Team</Heading>
                    <Text>Our team includes experts in all fields to ensure that our work is of the highest quality</Text>
                </Stack>

                <TeamMembers />
            </Container>
        </Box>
    )
}

export default TeamPage;