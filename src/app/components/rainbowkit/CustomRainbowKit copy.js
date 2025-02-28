"use client";

import '@rainbow-me/rainbowkit/styles.css';
import {
    getDefaultConfig,
    RainbowKitProvider,
    darkTheme
} from '@rainbow-me/rainbowkit';
import { WagmiProvider } from 'wagmi';
import {
    mainnet,
    polygon,
    optimism,
    arbitrum,
    base,
} from 'wagmi/chains';
import {
    QueryClientProvider,
    QueryClient,
} from "@tanstack/react-query";


export default function CustomRainbowKit({ children }) {
    // 
    const config = getDefaultConfig({
        appName: 'My RainbowKit App',
        projectId: 'YOUR_PROJECT_ID',
        chains: [mainnet, polygon, optimism, arbitrum, base],
        ssr: true,
    });
    // 
    const queryClient = new QueryClient();

    return (
        <WagmiProvider config={config}>
            <QueryClientProvider client={queryClient}>
                <RainbowKitProvider theme={darkTheme({
                        accentColor: 'white',
                        accentColorForeground: 'black',
                        borderRadius: 'large',
                        fontStack: 'system',
                    })}>
                    {children}
                </RainbowKitProvider>
            </QueryClientProvider>
        </WagmiProvider>
    );
}
