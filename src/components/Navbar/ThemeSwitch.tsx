import React from 'react';
import { useColorMode, IconButton } from '@chakra-ui/react';
import { MoonIcon, SunIcon } from '@chakra-ui/icons';

const ThemeSwitch: React.FC = () => {
    const { colorMode, toggleColorMode } = useColorMode();

    return (
        <IconButton
            aria-label="Toggle Theme Switch"
            // ml={8}
            ml={1}
            mr={2}
            mt={2}
            icon={colorMode === 'dark' ? <SunIcon /> : <MoonIcon />}
            isRound
            onClick={toggleColorMode}
        />
    );
};

export default ThemeSwitch;