"use client";

import '@rainbow-me/rainbowkit/styles.css';
import {
    getDefaultConfig,
    RainbowKitProvider,
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


const myCustomTheme = {
    blurs: {
        modalOverlay: '4px',
    },
    colors: {
        accentColor: '#000000',
        accentColorForeground: '#FFFFFF',
        actionButtonBorder: '#FFFFFF',
        actionButtonBorderMobile: '#FFFFFF',
        actionButtonSecondaryBackground: '#F5F5F5',
        closeButton: '#FFFFFF',
        closeButtonBackground: '#000000',
        connectButtonBackground: '#FFFFFF',
        connectButtonBackgroundError: '#FF4D4D',
        connectButtonInnerBackground: '#FFFFFF',
        connectButtonText: '#000000',
        connectButtonTextError: '#FF4D4D',
        connectionIndicator: '#00FF00',
        downloadBottomCardBackground: '#282828',
        downloadTopCardBackground: '#3C3C3C',
        error: '#FF4D4D',
        generalBorder: '#444444',
        generalBorderDim: '#3A3A3A',
        menuItemBackground: '#2B2B2B',
        modalBackdrop: 'rgba(0, 0, 0, 0.5)',
        modalBackground: '#231106', // Dark brown modal background
        modalBorder: '#4D2E1A', 
        modalText: '#FFFFFF',
        modalTextDim: '#CCCCCC',
        modalTextSecondary: '#AAAAAA',
        profileAction: '#3A3A3A',
        profileActionHover: '#555555',
        profileForeground: '#FFFFFF',
        selectedOptionBorder: '#F5A623',
        standby: '#F5A623',
    },
    fonts: {
        body: 'Arial, sans-serif',
    },
    radii: {
        actionButton: '8px',
        connectButton: '12px',
        menuButton: '8px',
        modal: '16px',
        modalMobile: '12px',
    },
    shadows: {
        connectButton: '0px 2px 8px rgba(0, 0, 0, 0.15)',
        dialog: '0px 4px 16px rgba(0, 0, 0, 0.25)',
        profileDetailsAction: '0px 2px 6px rgba(0, 0, 0, 0.15)',
        selectedOption: '0px 0px 8px rgba(255, 165, 0, 0.5)',
        selectedWallet: '0px 0px 8px rgba(255, 165, 0, 0.5)',
        walletLogo: '0px 1px 4px rgba(0, 0, 0, 0.15)',
    },
};


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
                <RainbowKitProvider theme={myCustomTheme}>
                    {children}
                </RainbowKitProvider>
            </QueryClientProvider>
        </WagmiProvider>
    );
}
