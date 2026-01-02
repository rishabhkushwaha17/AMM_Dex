/**
 * =============================================================================
 * CONTRACT CONFIGURATION FILE
 * =============================================================================
 * 
 * This file contains all contract configurations for different networks,
 * including addresses and ABI references.
 * The active contract is automatically selected based on ACTIVE_NETWORK.
 * 
 * HOW TO ADD A NEW CONTRACT:
 * 1. Deploy your contract to a network
 * 2. If it's a new ABI, add it to src/config/abis.js
 * 3. Add the contract configuration to the CONTRACTS object below
 * 4. The key should match the network key from networks.js
 * 
 * HOW TO CHANGE CONTRACT:
 * 1. Update the contract address/abi for the desired network
 * 2. If changing networks, update ACTIVE_NETWORK in networks.js
 * 3. The correct contract will be automatically selected
 * 
 * =============================================================================
 */

import { ACTIVE_NETWORK } from "./networks";
import { AMM_V1_ABI, ORIGINAL, ERC20_ABI, USDC_ABI, WETH_ABI } from "./abis";

// =============================================================================
// CONTRACT CONFIGURATIONS BY NETWORK
// Each network can have its own contract address and ABI
// =============================================================================
export const CONTRACTS = {
    // -------------------------------------------------------------------------
    // POLYGON CONTRACTS
    // -------------------------------------------------------------------------
    POLYGON_MAINNET: {
        address: "0x0000000000000000000000000000000000000000", // TODO: Deploy and add address
        abi: AMM_V1_ABI,
        name: "AMM Contract",
        version: "v1",
        description: "Polygon Mainnet AMM Contract",
        usdc: { address: "0x0000000000000000000000000000000000000000", abi: ERC20_ABI },
        weth: { address: "0x0000000000000000000000000000000000000000", abi: ERC20_ABI },
    },

    POLYGON_AMOY: {
        address: "0xE32383aB1dbea75Fa416CB7cA200b0e1c89735AC", // Currently deployed contract
        abi: AMM_V1_ABI,
        name: "AMM Contract",
        version: "v1",
        description: "Polygon Amoy Testnet AMM Contract",
        usdc: { address: "0x8B0180f2101c8260d49339abfEe87927412494B4", abi: USDC_ABI },
        weth: { address: "0x52eF3d68BaB452a294342DC3e5f464d7f610f72E", abi: WETH_ABI },
    },

    // -------------------------------------------------------------------------
    // AVALANCHE CONTRACTS
    // -------------------------------------------------------------------------
    AVALANCHE_MAINNET: {
        address: "0x0000000000000000000000000000000000000000", // TODO: Deploy and add address
        abi: AMM_V1_ABI,
        name: "AMM Contract",
        version: "v1",
        description: "Avalanche Mainnet AMM Contract",
        usdc: { address: "0x0000000000000000000000000000000000000000", abi: ERC20_ABI },
        weth: { address: "0x0000000000000000000000000000000000000000", abi: ERC20_ABI },
    },

    AVALANCHE_FUJI: {
        address: "0x0000000000000000000000000000000000000000", // TODO: Deploy and add address
        abi: AMM_V1_ABI,
        name: "AMM Contract",
        version: "v1",
        description: "Avalanche Fuji Testnet AMM Contract",
        usdc: { address: "0x0000000000000000000000000000000000000000", abi: ERC20_ABI },
        weth: { address: "0x0000000000000000000000000000000000000000", abi: ERC20_ABI },
    },

    // -------------------------------------------------------------------------
    // ETHEREUM CONTRACTS
    // -------------------------------------------------------------------------
    ETHEREUM_MAINNET: {
        address: "0x0000000000000000000000000000000000000000", // TODO: Deploy and add address
        abi: AMM_V1_ABI,
        name: "AMM Contract",
        version: "v1",
        description: "Ethereum Mainnet AMM Contract",
        usdc: { address: "0x0000000000000000000000000000000000000000", abi: ERC20_ABI },
        weth: { address: "0x0000000000000000000000000000000000000000", abi: ERC20_ABI },
    },

    ETHEREUM_SEPOLIA: {
        address: "0x0000000000000000000000000000000000000000", // TODO: Deploy and add address
        abi: AMM_V1_ABI,
        name: "AMM Contract",
        version: "v1",
        description: "Ethereum Sepolia Testnet AMM Contract",
        usdc: { address: "0x0000000000000000000000000000000000000000", abi: ERC20_ABI },
        weth: { address: "0x0000000000000000000000000000000000000000", abi: ERC20_ABI },
    },

    // -------------------------------------------------------------------------
    // BSC CONTRACTS (Binance Smart Chain)
    // -------------------------------------------------------------------------
    BSC_MAINNET: {
        address: "0x0000000000000000000000000000000000000000", // TODO: Deploy and add address
        abi: AMM_V1_ABI,
        name: "AMM Contract",
        version: "v1",
        description: "BSC Mainnet AMM Contract",
        usdc: { address: "0x0000000000000000000000000000000000000000", abi: ERC20_ABI },
        weth: { address: "0x0000000000000000000000000000000000000000", abi: ERC20_ABI },
    },

    BSC_TESTNET: {
        address: "0x0000000000000000000000000000000000000000", // TODO: Deploy and add address
        abi: AMM_V1_ABI,
        name: "AMM Contract",
        version: "v1",
        description: "BSC Testnet AMM Contract",
        usdc: { address: "0x0000000000000000000000000000000000000000", abi: ERC20_ABI },
        weth: { address: "0x0000000000000000000000000000000000000000", abi: ERC20_ABI },
    },
};

// =============================================================================
// EXPORT ACTIVE CONTRACT
// This is what the rest of the application uses
// =============================================================================
export const activeContract = CONTRACTS[ACTIVE_NETWORK];

// Validation: Ensure the active contract exists
if (!activeContract) {
    console.error(`❌ No contract configured for network: "${ACTIVE_NETWORK}". Available options:`, Object.keys(CONTRACTS).join(", "));
    throw new Error(`No contract configuration found for ${ACTIVE_NETWORK}. Please add it to src/config/contracts.js`);
}

// Validation: Check if contract address is set (not zero address)
const ZERO_ADDRESS = "0x0000000000000000000000000000000000000000";
if (activeContract.address === ZERO_ADDRESS) {
    console.warn(`⚠️ Contract address for ${ACTIVE_NETWORK} is not set! Please deploy a contract and update the address in src/config/contracts.js`);
}

// Validation: Check if ABI exists
if (!activeContract.abi || activeContract.abi.length === 0) {
    console.error(`❌ ABI not configured for ${ACTIVE_NETWORK}!`);
    throw new Error(`No ABI found for ${ACTIVE_NETWORK}. Please add it to src/config/abis.js and reference it in contracts.js`);
}
console.log("activeContract ::", activeContract);
console.log("activeContract.abi ::", activeContract.abi);
// Export contract address and ABI directly for convenience
export const CONTRACT_ADDRESS = activeContract.address;
export const CONTRACT_ABI = activeContract.abi;
export const USDC_CONFIG = activeContract.usdc;
export const WETH_CONFIG = activeContract.weth;

console.log(`📋 Active Contract: ${activeContract.name} (${activeContract.version})`);
console.log(`📍 Contract Address: ${CONTRACT_ADDRESS}`);
console.log(`📝 Description: ${activeContract.description}`);
console.log(`🔧 ABI Functions: ${CONTRACT_ABI.length}`);
