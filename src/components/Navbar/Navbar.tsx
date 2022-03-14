import React from 'react';
import { Flex, Heading, IconButton, Spacer, Tooltip } from '@chakra-ui/react';
import { ThemeSwitch } from '.';
import { FaInfo } from 'react-icons/fa'
import { NavLink as RouterLink } from 'react-router-dom';

const Navbar: React.FC = () => (
    <Flex w="100%">
        <RouterLink to="/">
            <Heading
                mt="2"
                ml="2"
                size="lg"
                fontWeight='semibold'
                color="red.400"
            >
                BCE-IC
            </Heading >
        </RouterLink>

        <Spacer />
        <RouterLink to="/about">
            <Tooltip label='About'>
                <IconButton aria-label="github" mt="2" ml="1" icon={<FaInfo />} isRound></IconButton>
            </Tooltip>
        </RouterLink>
        <ThemeSwitch />

    </Flex >
);

export default Navbar;