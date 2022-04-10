import React from 'react';
import { Box, Icon, SimpleGrid, chakra, Flex, useColorModeValue } from '@chakra-ui/react';
import services from '../../../StaticData/services';
import { v4 } from 'uuid';
import ServiceCard from './ServiceCard';


const Services: React.FC = () => {
    return (
        <Flex
            p={20}
            w="auto"
            justifyContent="center"
            alignItems="center"
        >
            <Box
                px={8}
                py={20}
                mx="auto"
                bg={useColorModeValue("white", "gray.800")}
                shadow="xl"
            >
                <Box textAlign={{ lg: "center" }}>
                    <chakra.p
                        mt={2}
                        fontSize={{ base: "3xl", sm: "4xl" }}
                        lineHeight="8"
                        fontWeight="extrabold"
                        letterSpacing="tight"
                        color={useColorModeValue("gray.900", 'white')}
                    >
                        Services
                    </chakra.p>
                    <chakra.p
                        mt={4}
                        maxW="2xl"
                        fontSize="xl"
                        mx={{ lg: "auto" }}
                        color={useColorModeValue("gray.500", "gray.400")}
                    >
                        Get insights to on the services we offer. We offer a variety of services
                        in a number of different industries
                    </chakra.p>
                </Box>

                <SimpleGrid
                    columns={{ base: 1, sm: 1, md: 3, lg: 3 }}
                    spacingX={{ base: 16, lg: 24 }}
                    spacingY={20}
                    mt={6}
                >
                    {
                        services.english.map((service) => <ServiceCard
                            key={v4()}
                            icon={<Icon as={service.icon} w={10} h={10} />}
                            title={service.title}
                            text={service.desc}
                            color="gray"
                        />)
                    }
                </SimpleGrid>

            </Box>
        </Flex>
    );
}

export default Services;
