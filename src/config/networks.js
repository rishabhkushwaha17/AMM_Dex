/**
 * =============================================================================
 * NETWORK CONFIGURATION FILE
 * =============================================================================
 * 
 * This file contains all network configurations for the AMM application.
 * To change the active network, simply update the ACTIVE_NETWORK variable below.
 * 
 * HOW TO CHANGE NETWORK:
 * 1. Find an existing network in NETWORKS object, or add a new one
 * 2. Change ACTIVE_NETWORK to match the key of your desired network
 * 3. Ensure the CONTRACT_ADDRESS is set in src/config/contracts.js for the network
 * 4. Restart the development server
 * 
 * Example: To switch from Polygon Amoy to Ethereum Mainnet:
 *   - Change: ACTIVE_NETWORK = "POLYGON_AMOY"
 *   - To:     ACTIVE_NETWORK = "ETHEREUM_MAINNET"
 * 
 * Related Files:
 *   - src/config/contracts.js - Contains contract addresses per network
 *   - src/config/reown.js     - Reown AppKit configuration
 * 
 * =============================================================================
 */

import { defineChain } from "@reown/appkit/networks";

// =============================================================================
// ACTIVE NETWORK SELECTION
// Change this value to switch networks easily
// =============================================================================
export const ACTIVE_NETWORK = "POLYGON_AMOY"; // Options: POLYGON_MAINNET, POLYGON_AMOY, AVALANCHE_FUJI, ETHEREUM_MAINNET, ETHEREUM_SEPOLIA

// =============================================================================
// NETWORK DEFINITIONS
// Add new networks here following the same pattern
// =============================================================================
export const NETWORKS = {
    // -------------------------------------------------------------------------
    // POLYGON NETWORKS
    // -------------------------------------------------------------------------
    POLYGON_MAINNET: defineChain({
        id: 137,
        caipNetworkId: "eip155:137",
        chainNamespace: "eip155",
        name: "Polygon Mainnet",
        nativeCurrency: {
            name: "MATIC",
            symbol: "MATIC",
            decimals: 18,
        },
        rpcUrls: {
            default: {
                http: ["https://polygon-rpc.com"],
            },
        },
        blockExplorers: {
            default: {
                name: "PolygonScan",
                url: "https://polygonscan.com",
            },
        },
        testnet: false,
    }),

    POLYGON_AMOY: defineChain({
        id: 80002,
        caipNetworkId: "eip155:80002",
        chainNamespace: "eip155",
        name: "Polygon Amoy Testnet",
        nativeCurrency: {
            name: "MATIC",
            symbol: "MATIC",
            decimals: 18,
        },
        rpcUrls: {
            default: {
                http: ["https://rpc-amoy.polygon.technology"],
            },
        },
        blockExplorers: {
            default: {
                name: "PolygonScan",
                url: "https://amoy.polygonscan.com",
            },
        },
        testnet: true,
    }),

    // -------------------------------------------------------------------------
    // AVALANCHE NETWORKS
    // -------------------------------------------------------------------------
    AVALANCHE_MAINNET: defineChain({
        id: 43114,
        caipNetworkId: "eip155:43114",
        chainNamespace: "eip155",
        name: "Avalanche C-Chain",
        nativeCurrency: {
            name: "AVAX",
            symbol: "AVAX",
            decimals: 18,
        },
        rpcUrls: {
            default: {
                http: ["https://api.avax.network/ext/bc/C/rpc"],
            },
        },
        blockExplorers: {
            default: {
                name: "SnowTrace",
                url: "https://snowtrace.io",
            },
        },
        testnet: false,
    }),

    AVALANCHE_FUJI: defineChain({
        id: 43113,
        caipNetworkId: "eip155:43113",
        chainNamespace: "eip155",
        name: "Avalanche Fuji Testnet",
        nativeCurrency: {
            name: "AVAX",
            symbol: "AVAX",
            decimals: 18,
        },
        rpcUrls: {
            default: {
                http: ["https://api.avax-test.network/ext/bc/C/rpc"],
            },
        },
        blockExplorers: {
            default: {
                name: "SnowTrace",
                url: "https://testnet.snowtrace.io",
            },
        },
        testnet: true,
    }),

    // -------------------------------------------------------------------------
    // ETHEREUM NETWORKS
    // -------------------------------------------------------------------------
    ETHEREUM_MAINNET: defineChain({
        id: 1,
        caipNetworkId: "eip155:1",
        chainNamespace: "eip155",
        name: "Ethereum Mainnet",
        nativeCurrency: {
            name: "Ether",
            symbol: "ETH",
            decimals: 18,
        },
        rpcUrls: {
            default: {
                http: ["https://eth.llamarpc.com"],
            },
        },
        blockExplorers: {
            default: {
                name: "Etherscan",
                url: "https://etherscan.io",
            },
        },
        testnet: false,
    }),

    ETHEREUM_SEPOLIA: defineChain({
        id: 11155111,
        caipNetworkId: "eip155:11155111",
        chainNamespace: "eip155",
        name: "Ethereum Sepolia Testnet",
        nativeCurrency: {
            name: "Sepolia ETH",
            symbol: "ETH",
            decimals: 18,
        },
        rpcUrls: {
            default: {
                http: ["https://rpc.sepolia.org"],
            },
        },
        blockExplorers: {
            default: {
                name: "Etherscan",
                url: "https://sepolia.etherscan.io",
            },
        },
        testnet: true,
    }),

    // -------------------------------------------------------------------------
    // BSC NETWORKS (Binance Smart Chain)
    // -------------------------------------------------------------------------
    BSC_MAINNET: defineChain({
        id: 56,
        caipNetworkId: "eip155:56",
        chainNamespace: "eip155",
        name: "BNB Smart Chain",
        nativeCurrency: {
            name: "BNB",
            symbol: "BNB",
            decimals: 18,
        },
        rpcUrls: {
            default: {
                http: ["https://bsc-dataseed.binance.org"],
            },
        },
        blockExplorers: {
            default: {
                name: "BscScan",
                url: "https://bscscan.com",
            },
        },
        testnet: false,
    }),

    BSC_TESTNET: defineChain({
        id: 97,
        caipNetworkId: "eip155:97",
        chainNamespace: "eip155",
        name: "BNB Smart Chain Testnet",
        nativeCurrency: {
            name: "tBNB",
            symbol: "tBNB",
            decimals: 18,
        },
        rpcUrls: {
            default: {
                http: ["https://data-seed-prebsc-1-s1.binance.org:8545"],
            },
        },
        blockExplorers: {
            default: {
                name: "BscScan",
                url: "https://testnet.bscscan.com",
            },
        },
        testnet: true,
    }),
};

// =============================================================================
// EXPORT ACTIVE NETWORK
// This is what the rest of the application uses
// =============================================================================
export const activeNetwork = NETWORKS[ACTIVE_NETWORK];

// Validation: Ensure the active network exists
if (!activeNetwork) {
    console.error(`❌ Invalid ACTIVE_NETWORK: "${ACTIVE_NETWORK}". Available options:`, Object.keys(NETWORKS).join(", "));
    throw new Error(`Invalid network configuration. Please check ACTIVE_NETWORK in src/config/networks.js`);
}

console.log(`🌐 Active Network: ${activeNetwork.name} (Chain ID: ${activeNetwork.id})`);
