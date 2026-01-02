/**
 * =============================================================================
 * REOWN APPKIT CONFIGURATION
 * =============================================================================
 * 
 * This file configures Reown AppKit for wallet connectivity.
 * Network configuration is imported from ./networks.js
 * 
 * To change networks, edit the ACTIVE_NETWORK variable in ./networks.js
 * 
 * =============================================================================
 */

import { createAppKit } from "@reown/appkit/react";
import { WagmiAdapter } from "@reown/appkit-adapter-wagmi";
import { http } from "wagmi";
import { activeNetwork, ACTIVE_NETWORK } from "./networks";

// =============================================================================
// PROJECT CONFIGURATION
// =============================================================================

// Get projectId from environment variable
// You need to create a project at https://dashboard.reown.com to get a projectId
export const projectId = process.env.REACT_APP_REOWN_PROJECT_ID || "YOUR_PROJECT_ID";

// App metadata - Update these values for your application
const metadata = {
    name: "AMM",
    description: "Automated Market Maker",
    url: typeof window !== "undefined" ? window.location.origin : "https://localhost:3000",
    icons: ["https://avatars.githubusercontent.com/u/37784886"],
};

// =============================================================================
// WALLET CONFIGURATION
// Configure which wallets to show
// =============================================================================

// MetaMask wallet ID from WalletGuide (https://walletguide.walletconnect.network/)
const METAMASK_WALLET_ID = "c57ca95b47569778a828d19178114f4db188b89b763c899ba0be274e97267d96";

// Add more wallet IDs here if you want to support multiple wallets
// const COINBASE_WALLET_ID = "fd20dc426fb37566d803205b19bbc1d4096b248ac04548e3cfb6b3a38bd033aa";
// const TRUST_WALLET_ID = "4622a2b2d6af1c9844944291e5e7351a6aa24cd7b23099efac1b2fd875da31a0";

// =============================================================================
// NETWORKS TO SUPPORT
// You can add multiple networks here if needed
// =============================================================================
const networks = [activeNetwork];

// =============================================================================
// WAGMI ADAPTER SETUP
// =============================================================================
export const wagmiAdapter = new WagmiAdapter({
    networks,
    projectId,
    transports: {
        // Dynamic transport based on active network
        [activeNetwork.id]: http(activeNetwork.rpcUrls.default.http[0]),
    },
});

// =============================================================================
// CREATE APPKIT INSTANCE
// =============================================================================
createAppKit({
    adapters: [wagmiAdapter],
    metadata: metadata,
    networks: networks,
    defaultNetwork: activeNetwork,
    projectId,

    // -------------------------------------------------------------------------
    // WALLET FILTERING
    // Only show MetaMask - modify these arrays to add more wallets
    // -------------------------------------------------------------------------
    featuredWalletIds: [METAMASK_WALLET_ID],
    includeWalletIds: [METAMASK_WALLET_ID],

    // Hide the "All Wallets" button to show only specified wallets
    allWallets: "HIDE",

    // Disable Coinbase wallet integration
    enableCoinbase: false,

    // -------------------------------------------------------------------------
    // FEATURE FLAGS
    // -------------------------------------------------------------------------
    features: {
        analytics: false,  // Disable analytics
        swaps: false,      // Disable swap feature
        onramp: false,     // Disable fiat onramp
    },

    // Disable "Get a wallet" guide prompt
    enableWalletGuide: false,
});

// Log configuration for debugging
console.log(`🔗 Reown AppKit initialized for ${activeNetwork.name}`);
console.log(`📋 Active Network Key: ${ACTIVE_NETWORK}`);

// Export for use in other files
export { activeNetwork };
