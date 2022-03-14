import { ReactElement } from 'react';
import { Box, SimpleGrid, Icon, Text, Stack, Flex } from '@chakra-ui/react';
import services from '../../StaticData/services';
import { v4 } from 'uuid';

interface ServiceProps {
    title: string;
    text: string;
    icon: ReactElement;
}

const Service = ({ title, text, icon }: ServiceProps) => {
    return (
        <Stack>
            <Flex
                w={16}
                h={16}
                align={'center'}
                justify={'center'}
                color={'white'}
                rounded={'xl'}
                bg={'gray.100'}
                mb={1}
                ml={1}

            >
                {icon}
            </Flex>
            <Text fontWeight={600}>{title}</Text>

            <Text color={'gray.600'}>{text}</Text>
        </Stack>
    );
};

const Services: React.FC = () => {
    return (
        <Box p={1} m={4}>
            <Text
                textTransform={'uppercase'}
                fontWeight={700}
                fontSize={'lg'}
                bg='red.400'
                p={2}
                alignSelf={'flex-start'}
                rounded={'md'}
                textAlign="center"
                mb={3}
            >
                Our Services
            </Text>

            <SimpleGrid columns={{ base: 1, md: 3, }} spacing={4}>
                {
                    services.english.map((service) => <Service
                        key={v4()}
                        icon={<Icon as={service.icon} w={10} h={10} />}
                        title={service.title}
                        text={service.desc}
                    />)
                }
            </SimpleGrid>
        </Box>
    );
}

export default Services;
