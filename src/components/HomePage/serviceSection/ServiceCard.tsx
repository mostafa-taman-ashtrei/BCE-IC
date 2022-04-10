import {
    Box,
    chakra,
    useColorModeValue,
    Flex,
    Icon
} from '@chakra-ui/react';

interface ServiceCardProps {
    title: string;
    text: string;
    icon: React.ReactElement;
    color: string;
}




const ServiceCard: React.FC<ServiceCardProps> = (props) => {
    return (
        <Box>
            <Flex
                alignItems="center"
                justifyContent="center"
                rounded="md"
                bg={useColorModeValue(`${props.color}.100`, `${props.color}.600`)}
            >
                <Icon
                    boxSize="12"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    aria-hidden="true"
                >
                    {props.icon}
                </Icon>
                <chakra.h3
                    fontWeight="semibold"
                    lineHeight="shorter"
                    color={useColorModeValue("gray.900", 'white')}
                >
                    {props.title}
                </chakra.h3>
            </Flex>

            <chakra.p
                fontSize="sm"
                color={useColorModeValue("gray.500", "gray.400")}
            >
                {props.text}
            </chakra.p>
        </Box>
    );
};



export default ServiceCard;

