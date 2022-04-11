import React from 'react';
import { useColorModeValue, SimpleGrid, useBreakpointValue, Box, chakra } from '@chakra-ui/react';
import { MarketOverview } from 'react-tradingview-embed';


const InvestingWidgets: React.FC = () => {
    const widgetResponsiveWidth = useBreakpointValue({ base: 550, md: 600 })

    return (
        <>
            <SimpleGrid
                alignItems="start"
                columns={{ base: 1, md: 2 }}
                mb={24}
                spacingY={{ base: 10, md: 32 }}
                spacingX={{ base: 10, md: 0 }}
            >
                <Box>
                    <chakra.h2
                        mb={4}
                        fontSize={{ base: "2xl", md: "3xl" }}
                        fontWeight="extrabold"
                        letterSpacing="tight"
                        textAlign={{ base: "center", md: "left" }}
                        color={useColorModeValue("gray.900", "gray.400")}
                    >
                        Checkout the latest stock prices
                    </chakra.h2>
                    <chakra.p
                        mb={5}
                        textAlign={{ base: "center", sm: "left" }}
                        color={useColorModeValue("gray.600", "gray.400")}
                        fontSize={{ md: "lg" }}
                    >
                        Check out the most recent and important prices of differnt
                        currencies and a lot more financial data so you are always up to date
                    </chakra.p>
                </Box>
                <Box
                    w="full"
                    h="full"
                >
                    <MarketOverview widgetProps={{ width: widgetResponsiveWidth, height: 360 }} />
                </Box>
            </SimpleGrid>


            <SimpleGrid
                alignItems="center"
                columns={{ base: 1, md: 2 }}
                flexDirection="column-reverse"
                mb={24}
                spacingY={{ base: 10, md: 32 }}
                spacingX={{ base: 10, md: 24 }}
            >
                <Box order={{ base: "none", md: 2 }}>
                    <chakra.h2
                        mb={4}
                        fontSize={{ base: "2xl", md: "3xl" }}
                        fontWeight="extrabold"
                        letterSpacing="tight"
                        textAlign={{ base: "center", md: "left" }}
                        color={useColorModeValue("gray.900", "gray.400")}
                        lineHeight={{ md: "shorter" }}
                    >
                        Checkout the latest currency prices
                    </chakra.h2>
                    <chakra.p
                        mb={5}
                        textAlign={{ base: "center", sm: "left" }}
                        color={useColorModeValue("gray.600", "gray.400")}
                        fontSize={{ md: "lg" }}
                    >
                        Love to code? Next to our ready-made and free plugins you can use
                        our expansive yet simple API; decide how you integrate Payments
                        and build advanced and reliable products yourself from scratch.
                    </chakra.p>
                </Box>
                <Box
                    w="full"
                    h="full"
                >
                    <iframe
                        src="https://www.widgets.investing.com/live-currency-cross-rates?theme=darkTheme"
                        // width={widgetResponsiveWidth}
                        height={360}
                        width={550}
                        frameBorder="0"
                        allowTransparency={false}
                        marginWidth={0}
                        marginHeight={0}
                        title="Live Currency Cross Rates Widget"
                    >
                    </iframe>
                </Box>
            </SimpleGrid>
        </>
    )
}

export default InvestingWidgets