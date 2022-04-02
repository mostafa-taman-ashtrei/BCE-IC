import React from 'react';
import { Stack, Center, useBreakpointValue } from '@chakra-ui/react';
import { MarketOverview } from 'react-tradingview-embed';


const InvestingWidgets: React.FC = () => {
    const widgetResponsiveWidth = useBreakpointValue({ base: 350, md: 600 })

    return (
        <Center>
            <Stack
                m={1}
                direction={{ base: 'column', md: 'row' }}
            >
                <iframe
                    src="https://www.widgets.investing.com/live-currency-cross-rates?theme=darkTheme"
                    width={widgetResponsiveWidth}
                    height={660}
                    frameBorder="0"
                    allowTransparency={false}
                    marginWidth={0}
                    marginHeight={0}
                    title="Live Currency Cross Rates Widget"
                >
                </iframe>

                <MarketOverview widgetProps={{ width: widgetResponsiveWidth }} />
            </Stack>
        </Center>
    )
}

export default InvestingWidgets