import { ReactNode } from 'react';
import {
    Box,
    Flex,
    Heading,
    Text,
    Stack,
    Avatar,
    useColorModeValue,
    SimpleGrid,
} from '@chakra-ui/react';
import team from '../../StaticData/team';
import { v4 } from 'uuid';


const Testimonial = ({ children }: { children: ReactNode }) => {
    return <Box>{children}</Box>;
};

const TestimonialContent = ({ children }: { children: ReactNode }) => {
    return (
        <Stack
            bg={useColorModeValue('white', 'gray.700')}
            boxShadow={'lg'}
            p={8}
            rounded={'xl'}
            align={'center'}
            pos={'relative'}
            _after={{
                content: `""`,
                w: 0,
                h: 0,
                borderLeft: 'solid transparent',
                borderLeftWidth: 16,
                borderRight: 'solid transparent',
                borderRightWidth: 16,
                borderTop: 'solid',
                borderTopWidth: 16,
                borderTopColor: useColorModeValue('white', 'gray.700'),
                pos: 'absolute',
                bottom: '-16px',
                left: '50%',
                transform: 'translateX(-50%)',
            }}>
            {children}
        </Stack>
    );
};

const TestimonialHeading = ({ children }: { children: ReactNode }) => {
    return (
        <Heading as={'h3'} fontSize={'xl'}>
            {children}
        </Heading>
    );
};

const TestimonialText = ({ children }: { children: ReactNode }) => {
    return (
        <Text
            textAlign={'center'}
            color={useColorModeValue('gray.600', 'gray.400')}
            fontSize={'sm'}>
            {children}
        </Text>
    );
};

const TestimonialAvatar = ({
    src,
    name,
    title,
}: {
    src: string;
    name: string;
    title: string;
}) => {
    return (
        <Flex align={'center'} mt={8} direction={'column'}>
            <Avatar src={src} mb={2} size="2xl" />
            <Stack spacing={-1} align={'center'}>
                <Text fontWeight={600}>{name}</Text>
                <Text fontSize={'sm'} color={useColorModeValue('gray.600', 'gray.400')}>
                    {title}
                </Text>
            </Stack>
        </Flex>
    );
};

const TeamMembers: React.FC = () => {
    return (
        <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={10}>
            {
                team.english.map((member) => <Testimonial key={v4()}>
                    <TestimonialContent>
                        <TestimonialHeading>{member.name}</TestimonialHeading>
                        <TestimonialText>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Auctor
                            neque sed imperdiet nibh lectus feugiat nunc sem.
                        </TestimonialText>
                    </TestimonialContent>
                    <TestimonialAvatar
                        src={member.avatar}
                        name={member.name}
                        title={member.postion}
                    />
                </Testimonial>
                )
            }
        </SimpleGrid>
    );
}

export default TeamMembers;