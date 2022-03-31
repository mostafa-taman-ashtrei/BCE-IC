import React from 'react';
import { Button, useColorModeValue, VisuallyHidden } from '@chakra-ui/react';

interface props {
    children: React.ReactNode;
    label: string;
    href: string;
}


const SocialButton: React.FC<props> = ({ children, label, href }) => {
    return (
        <Button
            bg={useColorModeValue('blackAlpha.100', 'whiteAlpha.100')}
            rounded={'full'}
            // w={18}
            // h={25}
            cursor={'pointer'}
            as={'a'}
            href={href}
            display={'inline-flex'}
            alignItems={'center'}
            justifyContent={'center'}
            transition={'background 0.3s ease'}
            _hover={{
                bg: useColorModeValue('blackAlpha.200', 'whiteAlpha.200'),
            }}>
            <VisuallyHidden>{label}</VisuallyHidden>
            {children}
        </Button>
    );
};

export default SocialButton;