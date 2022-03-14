import React from 'react';
import { Stack, Heading, Text, Container, Divider, Box } from '@chakra-ui/react';

const WhoAreWe: React.FC = () => {
    return (
        <Container maxW={'7xl'} mt={2} as={Stack} spacing={12}>
            <Box>
                <Heading alignSelf="center" py={2}>Who Are We ?</Heading>
                <Text >
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur dolore, tempore impedit facilis itaque molestias illo maxime iusto! Excepturi nulla earum accusantium ut iure vero quam debitis maiores! Natus, blanditiis.
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum omnis placeat nam, non impedit quia atque dignissimos exercitationem optio mollitia quasi id voluptate, neque quas ab iusto, vero assumenda.
                    Nesciunt? Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat doloribus possimus itaque, enim corrupti sunt exercitationem ut ab quibusdam facilis quod rem sequi placeat? Eos culpa impedit odit officiis accusamus.
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsum dicta ducimus officiis itaque, laudantium, recusandae molestias adipisci mollitia iusto vel tempora sed alias excepturi odio? Dolores labore quo consequatur quae!
                </Text>
            </Box>
            <Divider />
        </Container>
    )
}

export default WhoAreWe