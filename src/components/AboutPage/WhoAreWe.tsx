import {
    Box,
    Container,
    Heading,
    SimpleGrid,
    Icon,
    Text,
    Stack,
    HStack,
    VStack,
} from '@chakra-ui/react';
import { QuestionIcon } from '@chakra-ui/icons';
import { v4 } from 'uuid';
import aboutUsQuestions from '../../StaticData/aboutUsQuestions';



export default function WhoAreWe() {
    return (
        <Box p={4}>
            <Stack spacing={4} as={Container} maxW={'3xl'} textAlign={'center'}>
                <Heading fontSize={'3xl'}>About Us</Heading>
            </Stack>

            <Container maxW={'6xl'} mt={10}>
                <SimpleGrid columns={{ base: 1, md: 2, lg: 2 }} spacing={10}>
                    {aboutUsQuestions.map((question) => (
                        <HStack key={v4()} align={'top'}>
                            <Box color={'red.400'} px={2}>
                                <Icon as={QuestionIcon} />
                            </Box>
                            <VStack align={'start'}>
                                <Text fontWeight={600}>{question.title}</Text>
                                <Text color={'gray.600'}>{question.text}</Text>
                            </VStack>

                        </HStack>
                    ))}
                </SimpleGrid>
            </Container>
        </Box>

    );
}
