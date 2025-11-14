export interface Question {
  id: number;
  question: string;
  options: string[];
  correctAnswer: number;
  difficulty: 'easy' | 'medium' | 'hard';
  category: 'basics' | 'technical' | 'defi' | 'nft' | 'trading' | 'security' | 'mining' | 'altcoins';
}

export const questions: Question[] = [
  // BASICS - Easy
  {
    id: 1,
    question: "What does 'blockchain' refer to?",
    options: [
      "A digital currency",
      "A distributed ledger technology",
      "A mining algorithm",
      "A wallet application"
    ],
    correctAnswer: 1,
    difficulty: 'easy',
    category: 'basics'
  },
  {
    id: 2,
    question: "Who is credited as the creator of Bitcoin?",
    options: [
      "Vitalik Buterin",
      "Charlie Lee",
      "Satoshi Nakamoto",
      "Gavin Andresen"
    ],
    correctAnswer: 2,
    difficulty: 'easy',
    category: 'basics'
  },
  {
    id: 3,
    question: "What is the maximum supply of Bitcoin?",
    options: [
      "18 million",
      "21 million",
      "25 million",
      "Unlimited"
    ],
    correctAnswer: 1,
    difficulty: 'easy',
    category: 'basics'
  },
  {
    id: 4,
    question: "What is Ethereum's native cryptocurrency called?",
    options: [
      "Bitcoin",
      "Litecoin",
      "Ether",
      "Ethereum Classic"
    ],
    correctAnswer: 2,
    difficulty: 'easy',
    category: 'basics'
  },
  {
    id: 5,
    question: "What is a cryptocurrency wallet?",
    options: [
      "A software application to store and manage cryptocurrencies",
      "A physical device to store coins",
      "A bank account for digital currencies",
      "A mining hardware"
    ],
    correctAnswer: 0,
    difficulty: 'easy',
    category: 'basics'
  },
  {
    id: 6,
    question: "What does HODL mean in crypto community?",
    options: [
      "Hold On for Dear Life",
      "A trading strategy",
      "A misspelling of 'hold' that became popular",
      "All of the above"
    ],
    correctAnswer: 3,
    difficulty: 'easy',
    category: 'basics'
  },
  {
    id: 7,
    question: "What is the difference between coins and tokens?",
    options: [
      "No difference, they're the same",
      "Coins have their own blockchain, tokens are built on existing blockchains",
      "Coins are physical, tokens are digital",
      "Tokens are more expensive than coins"
    ],
    correctAnswer: 1,
    difficulty: 'easy',
    category: 'basics'
  },
  {
    id: 8,
    question: "What is market capitalization in cryptocurrency?",
    options: [
      "The total amount of money invested in crypto",
      "The price of a single coin multiplied by total supply",
      "The number of active users",
      "The transaction volume per day"
    ],
    correctAnswer: 1,
    difficulty: 'easy',
    category: 'basics'
  },
  {
    id: 9,
    question: "What year was Bitcoin first released?",
    options: [
      "2008",
      "2009",
      "2010",
      "2011"
    ],
    correctAnswer: 1,
    difficulty: 'easy',
    category: 'basics'
  },
  {
    id: 10,
    question: "What is a cryptocurrency exchange?",
    options: [
      "A physical location to trade crypto",
      "A platform where cryptocurrencies can be bought, sold, and traded",
      "A type of blockchain network",
      "A mining pool"
    ],
    correctAnswer: 1,
    difficulty: 'easy',
    category: 'basics'
  },

  // TECHNICAL - Medium/Hard
  {
    id: 11,
    question: "What consensus mechanism does Bitcoin use?",
    options: [
      "Proof of Stake",
      "Proof of Work",
      "Delegated Proof of Stake",
      "Proof of Authority"
    ],
    correctAnswer: 1,
    difficulty: 'medium',
    category: 'technical'
  },
  {
    id: 12,
    question: "What is a smart contract?",
    options: [
      "A legal document stored on blockchain",
      "A self-executing contract with terms directly written into code",
      "A cryptocurrency trading bot",
      "A type of blockchain network"
    ],
    correctAnswer: 1,
    difficulty: 'medium',
    category: 'technical'
  },
  {
    id: 13,
    question: "What is the process of validating transactions on a blockchain called?",
    options: [
      "Hashing",
      "Mining",
      "Staking",
      "Burning"
    ],
    correctAnswer: 1,
    difficulty: 'medium',
    category: 'technical'
  },
  {
    id: 14,
    question: "What is the Lightning Network?",
    options: [
      "A new cryptocurrency",
      "A Layer 2 scaling solution for Bitcoin",
      "A mining pool",
      "An exchange platform"
    ],
    correctAnswer: 1,
    difficulty: 'medium',
    category: 'technical'
  },
  {
    id: 15,
    question: "What is a hash function in blockchain?",
    options: [
      "A random number generator",
      "A mathematical function that converts input into fixed-size string",
      "A type of cryptocurrency",
      "A blockchain validation method"
    ],
    correctAnswer: 1,
    difficulty: 'medium',
    category: 'technical'
  },
  {
    id: 16,
    question: "What is the main advantage of Proof of Stake over Proof of Work?",
    options: [
      "Higher transaction fees",
      "More secure",
      "Energy efficient",
      "Faster mining"
    ],
    correctAnswer: 2,
    difficulty: 'medium',
    category: 'technical'
  },
  {
    id: 17,
    question: "What is a private key in cryptocurrency?",
    options: [
      "A password to access exchanges",
      "A secret code that allows you to spend your cryptocurrency",
      "A public address for receiving funds",
      "A type of mining algorithm"
    ],
    correctAnswer: 1,
    difficulty: 'medium',
    category: 'technical'
  },
  {
    id: 18,
    question: "What is a fork in blockchain?",
    options: [
      "A eating utensil for crypto miners",
      "A change in the blockchain protocol",
      "A type of cryptocurrency",
      "A mining tool"
    ],
    correctAnswer: 1,
    difficulty: 'medium',
    category: 'technical'
  },
  {
    id: 19,
    question: "What is gas fee in Ethereum?",
    options: [
      "The cost to fuel mining equipment",
      "Transaction fee paid to process operations",
      "A type of cryptocurrency",
      "Environmental impact measurement"
    ],
    correctAnswer: 1,
    difficulty: 'medium',
    category: 'technical'
  },
  {
    id: 20,
    question: "What is staking in cryptocurrency?",
    options: [
      "Buying and holding cryptocurrencies",
      "Locking up cryptocurrency to support network operations",
      "Trading cryptocurrencies rapidly",
      "Mining with specialized hardware"
    ],
    correctAnswer: 1,
    difficulty: 'medium',
    category: 'technical'
  },
  {
    id: 21,
    question: "What is the difference between hot and cold storage?",
    options: [
      "Temperature of the storage device",
      "Hot storage is online, cold storage is offline",
      "Speed of transaction processing",
      "Cost of storage solution"
    ],
    correctAnswer: 1,
    difficulty: 'medium',
    category: 'technical'
  },
  {
    id: 22,
    question: "What is a Merkle tree in blockchain?",
    options: [
      "A type of cryptocurrency",
      "A data structure used to efficiently verify transactions",
      "A mining algorithm",
      "A wallet type"
    ],
    correctAnswer: 1,
    difficulty: 'hard',
    category: 'technical'
  },
  {
    id: 23,
    question: "What is the Byzantine Generals Problem?",
    options: [
      "A historical military strategy",
      "A consensus problem in distributed systems",
      "A type of blockchain attack",
      "A mining difficulty adjustment"
    ],
    correctAnswer: 1,
    difficulty: 'hard',
    category: 'technical'
  },
  {
    id: 24,
    question: "What is sharding in blockchain?",
    options: [
      "Breaking a blockchain into smaller pieces",
      "A method to scale blockchain by splitting the network",
      "A type of mining pool",
      "A wallet security feature"
    ],
    correctAnswer: 1,
    difficulty: 'hard',
    category: 'technical'
  },

  // DEFI
  {
    id: 25,
    question: "What does DeFi stand for?",
    options: [
      "Digital Finance",
      "Decentralized Finance",
      "Distributed Finance",
      "Diversified Finance"
    ],
    correctAnswer: 1,
    difficulty: 'easy',
    category: 'defi'
  },
  {
    id: 26,
    question: "What is a DAO?",
    options: [
      "Digital Asset Organization",
      "Decentralized Autonomous Organization",
      "Distributed Application Operation",
      "Dynamic Algorithm Optimization"
    ],
    correctAnswer: 1,
    difficulty: 'medium',
    category: 'defi'
  },
  {
    id: 27,
    question: "What is yield farming in DeFi?",
    options: [
      "Growing crops using blockchain technology",
      "Earning rewards by providing liquidity to DeFi protocols",
      "Mining cryptocurrencies on farms",
      "A type of NFT collection"
    ],
    correctAnswer: 1,
    difficulty: 'medium',
    category: 'defi'
  },
  {
    id: 28,
    question: "What is a liquidity pool?",
    options: [
      "A swimming pool owned by crypto miners",
      "A collection of funds locked in a smart contract for trading",
      "A type of cryptocurrency exchange",
      "A mining reward system"
    ],
    correctAnswer: 1,
    difficulty: 'medium',
    category: 'defi'
  },
  {
    id: 29,
    question: "What is an Automated Market Maker (AMM)?",
    options: [
      "A trading bot",
      "A protocol that uses algorithms to price assets",
      "A type of cryptocurrency",
      "A mining algorithm"
    ],
    correctAnswer: 1,
    difficulty: 'medium',
    category: 'defi'
  },
  {
    id: 30,
    question: "What is impermanent loss in DeFi?",
    options: [
      "Permanent loss of funds",
      "Temporary loss due to price volatility in liquidity pools",
      "Loss due to smart contract bugs",
      "Loss from failed transactions"
    ],
    correctAnswer: 1,
    difficulty: 'hard',
    category: 'defi'
  },
  {
    id: 31,
    question: "What is flash loan in DeFi?",
    options: [
      "A very fast loan approval",
      "An uncollateralized loan that must be repaid in the same transaction",
      "A loan with flashing interest rates",
      "A loan backed by flash storage"
    ],
    correctAnswer: 1,
    difficulty: 'hard',
    category: 'defi'
  },

  // NFT
  {
    id: 32,
    question: "What does NFT stand for?",
    options: [
      "Non-Fungible Token",
      "New Financial Technology",
      "Network File Transfer",
      "Non-Fixed Token"
    ],
    correctAnswer: 0,
    difficulty: 'easy',
    category: 'nft'
  },
  {
    id: 33,
    question: "What makes an NFT unique?",
    options: [
      "Its price",
      "Its blockchain address and metadata",
      "Its creator",
      "Its file size"
    ],
    correctAnswer: 1,
    difficulty: 'medium',
    category: 'nft'
  },
  {
    id: 34,
    question: "Which blockchain was the first to popularize NFTs?",
    options: [
      "Bitcoin",
      "Ethereum",
      "Litecoin",
      "Ripple"
    ],
    correctAnswer: 1,
    difficulty: 'easy',
    category: 'nft'
  },
  {
    id: 35,
    question: "What is minting an NFT?",
    options: [
      "Buying an NFT",
      "Creating and recording an NFT on the blockchain",
      "Selling an NFT",
      "Copying an NFT"
    ],
    correctAnswer: 1,
    difficulty: 'medium',
    category: 'nft'
  },
  {
    id: 36,
    question: "What is the ERC-721 standard?",
    options: [
      "A cryptocurrency standard",
      "A standard for non-fungible tokens on Ethereum",
      "A mining protocol",
      "A wallet standard"
    ],
    correctAnswer: 1,
    difficulty: 'medium',
    category: 'nft'
  },

  // TRADING
  {
    id: 37,
    question: "What does FOMO stand for in crypto trading?",
    options: [
      "Fear of Missing Out",
      "Financial Operations Management Office",
      "First Order Market Operation",
      "Fixed Order Market Optimization"
    ],
    correctAnswer: 0,
    difficulty: 'easy',
    category: 'trading'
  },
  {
    id: 38,
    question: "What is a bull market?",
    options: [
      "A market with aggressive traders",
      "A market where prices are rising",
      "A market for livestock trading",
      "A market with high volatility"
    ],
    correctAnswer: 1,
    difficulty: 'easy',
    category: 'trading'
  },
  {
    id: 39,
    question: "What is a bear market?",
    options: [
      "A market with fearful traders",
      "A market where prices are falling",
      "A market for animal trading",
      "A market with low volume"
    ],
    correctAnswer: 1,
    difficulty: 'easy',
    category: 'trading'
  },
  {
    id: 40,
    question: "What is DCA in cryptocurrency investing?",
    options: [
      "Digital Currency Analysis",
      "Dollar Cost Averaging",
      "Decentralized Currency Application",
      "Direct Cryptocurrency Access"
    ],
    correctAnswer: 1,
    difficulty: 'medium',
    category: 'trading'
  },
  {
    id: 41,
    question: "What is a whale in cryptocurrency?",
    options: [
      "A large sea mammal",
      "An individual or entity holding large amounts of cryptocurrency",
      "A type of trading bot",
      "A blockchain validator"
    ],
    correctAnswer: 1,
    difficulty: 'easy',
    category: 'trading'
  },
  {
    id: 42,
    question: "What is a stop-loss order?",
    options: [
      "An order to buy at a specific price",
      "An order to sell when price drops to a certain level",
      "An order to hold indefinitely",
      "An order to mine cryptocurrency"
    ],
    correctAnswer: 1,
    difficulty: 'medium',
    category: 'trading'
  },
  {
    id: 43,
    question: "What is arbitrage in crypto trading?",
    options: [
      "A type of cryptocurrency",
      "Profiting from price differences across exchanges",
      "A trading bot",
      "A blockchain consensus mechanism"
    ],
    correctAnswer: 1,
    difficulty: 'medium',
    category: 'trading'
  },

  // SECURITY
  {
    id: 44,
    question: "What is a 51% attack?",
    options: [
      "When 51% of users sell their crypto",
      "When a single entity controls majority of network's mining power",
      "When 51% of transactions fail",
      "When 51% of nodes go offline"
    ],
    correctAnswer: 1,
    difficulty: 'medium',
    category: 'security'
  },
  {
    id: 45,
    question: "What is two-factor authentication (2FA)?",
    options: [
      "Using two different cryptocurrencies",
      "An extra layer of security requiring two forms of verification",
      "Trading on two exchanges",
      "Having two wallets"
    ],
    correctAnswer: 1,
    difficulty: 'easy',
    category: 'security'
  },
  {
    id: 46,
    question: "What is a seed phrase?",
    options: [
      "A phrase used to start mining",
      "A series of words used to recover a cryptocurrency wallet",
      "A password for exchanges",
      "A phrase used in smart contracts"
    ],
    correctAnswer: 1,
    difficulty: 'medium',
    category: 'security'
  },
  {
    id: 47,
    question: "What is phishing in cryptocurrency?",
    options: [
      "Mining cryptocurrency underwater",
      "Fraudulent attempts to steal private keys or passwords",
      "A type of blockchain consensus",
      "A method of earning rewards"
    ],
    correctAnswer: 1,
    difficulty: 'easy',
    category: 'security'
  },
  {
    id: 48,
    question: "What is a multi-signature wallet?",
    options: [
      "A wallet with multiple cryptocurrencies",
      "A wallet requiring multiple signatures to authorize transactions",
      "A wallet with multiple addresses",
      "A wallet for multiple users"
    ],
    correctAnswer: 1,
    difficulty: 'medium',
    category: 'security'
  },

  // MINING
  {
    id: 49,
    question: "What is cryptocurrency mining?",
    options: [
      "Digging for physical coins",
      "The process of validating transactions and adding them to blockchain",
      "Buying cryptocurrency from exchanges",
      "Creating new cryptocurrencies"
    ],
    correctAnswer: 1,
    difficulty: 'easy',
    category: 'mining'
  },
  {
    id: 50,
    question: "What is a mining pool?",
    options: [
      "A swimming pool for miners",
      "A group of miners combining their computational power",
      "A type of cryptocurrency exchange",
      "A storage facility for mining equipment"
    ],
    correctAnswer: 1,
    difficulty: 'medium',
    category: 'mining'
  },
  {
    id: 51,
    question: "What is ASIC in cryptocurrency mining?",
    options: [
      "A type of cryptocurrency",
      "Application-Specific Integrated Circuit for mining",
      "A mining software",
      "A blockchain protocol"
    ],
    correctAnswer: 1,
    difficulty: 'medium',
    category: 'mining'
  },
  {
    id: 52,
    question: "What is mining difficulty?",
    options: [
      "How hard it is to learn mining",
      "A measure of how hard it is to find a new block",
      "The cost of mining equipment",
      "The time it takes to mine"
    ],
    correctAnswer: 1,
    difficulty: 'medium',
    category: 'mining'
  },
  {
    id: 53,
    question: "What is the block reward in Bitcoin?",
    options: [
      "The fee paid to miners for validating a block",
      "The reward given to miners for finding a new block",
      "The cost of creating a block",
      "The time to mine a block"
    ],
    correctAnswer: 1,
    difficulty: 'medium',
    category: 'mining'
  },

  // ALTCOINS
  {
    id: 54,
    question: "What does 'altcoin' mean?",
    options: [
      "Alternative coin (any cryptocurrency other than Bitcoin)",
      "Aluminum coin",
      "Altitude coin",
      "Alternate coin design"
    ],
    correctAnswer: 0,
    difficulty: 'easy',
    category: 'altcoins'
  },
  {
    id: 55,
    question: "What is Litecoin often called?",
    options: [
      "Digital gold",
      "Digital silver",
      "Digital bronze",
      "Digital platinum"
    ],
    correctAnswer: 1,
    difficulty: 'easy',
    category: 'altcoins'
  },
  {
    id: 56,
    question: "Which cryptocurrency is known for its focus on privacy?",
    options: [
      "Bitcoin",
      "Ethereum",
      "Monero",
      "Litecoin"
    ],
    correctAnswer: 2,
    difficulty: 'medium',
    category: 'altcoins'
  },
  {
    id: 57,
    question: "What is Ripple (XRP) primarily designed for?",
    options: [
      "Smart contracts",
      "Cross-border payments",
      "Privacy transactions",
      "Mining rewards"
    ],
    correctAnswer: 1,
    difficulty: 'medium',
    category: 'altcoins'
  },
  {
    id: 58,
    question: "What makes Cardano unique?",
    options: [
      "It uses Proof of Work",
      "It's built on peer-reviewed research",
      "It has unlimited supply",
      "It doesn't use blockchain"
    ],
    correctAnswer: 1,
    difficulty: 'medium',
    category: 'altcoins'
  },
  {
    id: 59,
    question: "What is Polkadot designed to enable?",
    options: [
      "Faster Bitcoin transactions",
      "Interoperability between different blockchains",
      "Better mining algorithms",
      "Cheaper transaction fees"
    ],
    correctAnswer: 1,
    difficulty: 'medium',
    category: 'altcoins'
  },
  {
    id: 60,
    question: "What is Chainlink primarily used for?",
    options: [
      "Creating new cryptocurrencies",
      "Providing real-world data to smart contracts",
      "Mining Bitcoin faster",
      "Storing cryptocurrencies"
    ],
    correctAnswer: 1,
    difficulty: 'medium',
    category: 'altcoins'
  },

  // Additional Advanced Questions
  {
    id: 61,
    question: "What is the Ethereum Virtual Machine (EVM)?",
    options: [
      "A physical computer for mining Ethereum",
      "A runtime environment for smart contracts on Ethereum",
      "A wallet for storing Ethereum",
      "A mining software for Ethereum"
    ],
    correctAnswer: 1,
    difficulty: 'hard',
    category: 'technical'
  },
  {
    id: 62,
    question: "What is a wrapped token?",
    options: [
      "A token stored in physical wrapping",
      "A token that represents another cryptocurrency on a different blockchain",
      "A token with extra security features",
      "A token that can only be unwrapped once"
    ],
    correctAnswer: 1,
    difficulty: 'hard',
    category: 'defi'
  },
  {
    id: 63,
    question: "What is slippage in cryptocurrency trading?",
    options: [
      "When you accidentally sell the wrong coin",
      "The difference between expected and actual trade execution price",
      "When a trade takes too long to execute",
      "When you lose your private keys"
    ],
    correctAnswer: 1,
    difficulty: 'medium',
    category: 'trading'
  },
  {
    id: 64,
    question: "What is a rug pull in crypto?",
    options: [
      "A type of carpet used in crypto offices",
      "A scam where developers abandon a project and steal funds",
      "A method of mining cryptocurrency",
      "A way to secure your wallet"
    ],
    correctAnswer: 1,
    difficulty: 'medium',
    category: 'security'
  },
  {
    id: 65,
    question: "What is the difference between Layer 1 and Layer 2 solutions?",
    options: [
      "Layer 1 is cheaper than Layer 2",
      "Layer 1 is the main blockchain, Layer 2 builds on top for scaling",
      "Layer 2 came before Layer 1",
      "There is no difference"
    ],
    correctAnswer: 1,
    difficulty: 'hard',
    category: 'technical'
  },
  {
    id: 66,
    question: "What is Total Value Locked (TVL) in DeFi?",
    options: [
      "The total amount of cryptocurrency locked in DeFi protocols",
      "The total number of DeFi users",
      "The total number of DeFi protocols",
      "The total fees earned by DeFi protocols"
    ],
    correctAnswer: 0,
    difficulty: 'medium',
    category: 'defi'
  },
  {
    id: 67,
    question: "What is a governance token?",
    options: [
      "A token used by governments",
      "A token that gives holders voting rights in protocol decisions",
      "A token that governs other tokens",
      "A token with government backing"
    ],
    correctAnswer: 1,
    difficulty: 'medium',
    category: 'defi'
  },
  {
    id: 68,
    question: "What is front-running in crypto trading?",
    options: [
      "Running in front of other traders",
      "Placing trades ahead of known pending transactions",
      "Being the first to buy a new cryptocurrency",
      "Running a cryptocurrency exchange"
    ],
    correctAnswer: 1,
    difficulty: 'hard',
    category: 'trading'
  },
  {
    id: 69,
    question: "What is a honeypot in cryptocurrency?",
    options: [
      "A sweet reward for miners",
      "A malicious smart contract that traps funds",
      "A type of bee-themed cryptocurrency",
      "A storage method for crypto"
    ],
    correctAnswer: 1,
    difficulty: 'hard',
    category: 'security'
  },
  {
    id: 70,
    question: "What is the halving event in Bitcoin?",
    options: [
      "When Bitcoin price drops by half",
      "When mining rewards are cut in half",
      "When half of all Bitcoins are mined",
      "When transaction fees are halved"
    ],
    correctAnswer: 1,
    difficulty: 'medium',
    category: 'mining'
  },
  {
    id: 71,
    question: "What is Solana known for?",
    options: [
      "High transaction fees",
      "High-speed, low-cost transactions",
      "Privacy features",
      "Bitcoin compatibility"
    ],
    correctAnswer: 1,
    difficulty: 'medium',
    category: 'altcoins'
  },
  {
    id: 72,
    question: "What is a stablecoin?",
    options: [
      "A cryptocurrency with stable mining rewards",
      "A cryptocurrency designed to maintain stable value",
      "A cryptocurrency that never changes price",
      "A cryptocurrency backed by horses"
    ],
    correctAnswer: 1,
    difficulty: 'easy',
    category: 'basics'
  },
  {
    id: 73,
    question: "What is the purpose of a testnet?",
    options: [
      "To test new cryptocurrencies before buying",
      "A separate blockchain for testing without real value",
      "To test mining equipment",
      "To test wallet security"
    ],
    correctAnswer: 1,
    difficulty: 'medium',
    category: 'technical'
  },
  {
    id: 74,
    question: "What is a mempool?",
    options: [
      "A pool for memes about crypto",
      "A pool of unconfirmed transactions waiting to be processed",
      "A type of mining pool",
      "A memory storage for wallets"
    ],
    correctAnswer: 1,
    difficulty: 'hard',
    category: 'technical'
  },
  {
    id: 75,
    question: "What is burning in cryptocurrency?",
    options: [
      "When cryptocurrency gets too hot",
      "Permanently removing tokens from circulation",
      "A type of mining process",
      "When you lose access to your wallet"
    ],
    correctAnswer: 1,
    difficulty: 'medium',
    category: 'basics'
  },
  {
    id: 76,
    question: "What is a dApp?",
    options: [
      "A mobile app for trading crypto",
      "A decentralized application running on blockchain",
      "A desktop application for mining",
      "A dangerous application"
    ],
    correctAnswer: 1,
    difficulty: 'medium',
    category: 'technical'
  },
  {
    id: 77,
    question: "What is cross-chain technology?",
    options: [
      "Technology that works across different blockchains",
      "Technology for crossing roads safely",
      "A type of mining chain",
      "Technology for chain restaurants"
    ],
    correctAnswer: 0,
    difficulty: 'hard',
    category: 'technical'
  },
  {
    id: 78,
    question: "What is a validator in Proof of Stake?",
    options: [
      "Someone who validates parking tickets",
      "A network participant who validates transactions and creates blocks",
      "A type of mining hardware",
      "A cryptocurrency exchange employee"
    ],
    correctAnswer: 1,
    difficulty: 'medium',
    category: 'technical'
  },
  {
    id: 79,
    question: "What is MEV (Maximal Extractable Value)?",
    options: [
      "The maximum value of a cryptocurrency",
      "Profit extracted by reordering transactions in a block",
      "The maximum extraction rate for mining",
      "A type of cryptocurrency wallet"
    ],
    correctAnswer: 1,
    difficulty: 'hard',
    category: 'technical'
  },
  {
    id: 80,
    question: "What is a sidechain?",
    options: [
      "A chain worn on the side",
      "A separate blockchain connected to the main blockchain",
      "A type of mining equipment",
      "A backup blockchain"
    ],
    correctAnswer: 1,
    difficulty: 'hard',
    category: 'technical'
  },
  {
    id: 81,
    question: "What is the difference between optimistic and zero-knowledge rollups?",
    options: [
      "Optimistic rollups are faster, ZK rollups are more secure",
      "Optimistic rollups assume validity, ZK rollups prove validity cryptographically",
      "Optimistic rollups use more gas, ZK rollups use less",
      "Optimistic rollups work on Ethereum, ZK rollups work on other chains"
    ],
    correctAnswer: 1,
    difficulty: 'hard',
    category: 'technical'
  },
  {
    id: 82,
    question: "What is composability in DeFi?",
    options: [
      "The ability to combine different DeFi protocols seamlessly",
      "The ability to compose music using blockchain",
      "The ability to create composite NFTs",
      "The ability to compose smart contracts"
    ],
    correctAnswer: 0,
    difficulty: 'hard',
    category: 'defi'
  },
  {
    id: 83,
    question: "What is a rebase token mechanism?",
    options: [
      "A token that changes its total supply based on price",
      "A token that rebases to a different blockchain",
      "A token that requires rebasing your computer",
      "A token that rebases its mining algorithm"
    ],
    correctAnswer: 0,
    difficulty: 'hard',
    category: 'defi'
  },
  {
    id: 84,
    question: "What is the role of oracles in blockchain?",
    options: [
      "To predict cryptocurrency prices",
      "To provide external data to smart contracts",
      "To validate oracle database queries",
      "To mine oracle coins"
    ],
    correctAnswer: 1,
    difficulty: 'hard',
    category: 'technical'
  },
  {
    id: 85,
    question: "What is a Dutch auction in NFT minting?",
    options: [
      "An auction starting high and decreasing over time",
      "An auction for Dutch-themed NFTs",
      "An auction held in the Netherlands",
      "An auction for Dutch coins"
    ],
    correctAnswer: 0,
    difficulty: 'hard',
    category: 'nft'
  },
  {
    id: 86,
    question: "What is the significance of the 'triple halving' in Bitcoin?",
    options: [
      "Three halvings that reduce rewards to zero",
      "A theory about Bitcoin's long-term value",
      "Three halvings that increase mining difficulty",
      "A halving that affects three cryptocurrencies"
    ],
    correctAnswer: 0,
    difficulty: 'hard',
    category: 'mining'
  },
  {
    id: 87,
    question: "What is a 'black swan' event in cryptocurrency?",
    options: [
      "A rare cryptocurrency named after a bird",
      "An unpredictable event with massive impact",
      "A market crash caused by black-market trading",
      "A security breach involving swans"
    ],
    correctAnswer: 1,
    difficulty: 'hard',
    category: 'trading'
  },
  {
    id: 88,
    question: "What is the difference between fungible and non-fungible tokens?",
    options: [
      "Fungible tokens are unique, non-fungible are interchangeable",
      "Fungible tokens are interchangeable, non-fungible are unique",
      "Fungible tokens are physical, non-fungible are digital",
      "There is no difference"
    ],
    correctAnswer: 1,
    difficulty: 'hard',
    category: 'nft'
  },
  {
    id: 89,
    question: "What is a 'vampire attack' in DeFi?",
    options: [
      "An attack by vampire-themed NFTs",
      "When a new protocol drains liquidity from an existing one",
      "A type of smart contract exploit",
      "An attack on vampire miners"
    ],
    correctAnswer: 1,
    difficulty: 'hard',
    category: 'defi'
  },
  {
    id: 90,
    question: "What is the 'impossible trinity' in blockchain design?",
    options: [
      "Security, scalability, and decentralization cannot all be maximized simultaneously",
      "Three impossible consensus mechanisms",
      "Three impossible smart contract languages",
      "Three impossible mining algorithms"
    ],
    correctAnswer: 0,
    difficulty: 'hard',
    category: 'technical'
  },
  {
    id: 91,
    question: "What is a 'soft fork' vs a 'hard fork'?",
    options: [
      "Soft fork is backward compatible, hard fork is not",
      "Soft fork changes mining, hard fork changes consensus",
      "Soft fork is temporary, hard fork is permanent",
      "Soft fork affects software, hard fork affects hardware"
    ],
    correctAnswer: 0,
    difficulty: 'hard',
    category: 'technical'
  },
  {
    id: 92,
    question: "What is 'delta hedging' in crypto options trading?",
    options: [
      "Hedging against delta changes in price",
      "A strategy to maintain delta-neutral position",
      "Hedging against triangular arbitrage",
      "A type of delta token"
    ],
    correctAnswer: 1,
    difficulty: 'hard',
    category: 'trading'
  },
  {
    id: 93,
    question: "What is the 'fat finger' error in trading?",
    options: [
      "Typing the wrong amount in a trade order",
      "A finger-shaped NFT collection",
      "A type of biometric authentication failure",
      "An error in finger mining hardware"
    ],
    correctAnswer: 0,
    difficulty: 'hard',
    category: 'trading'
  },
  {
    id: 94,
    question: "What is a 'zombie' smart contract?",
    options: [
      "A contract that comes back to life",
      "An abandoned contract with remaining funds",
      "A contract that creates zombie NFTs",
      "A contract that mines zombie coins"
    ],
    correctAnswer: 1,
    difficulty: 'hard',
    category: 'technical'
  },
  {
    id: 95,
    question: "What is 'quantum resistance' in blockchain?",
    options: [
      "Resistance to quantum physics laws",
      "Cryptographic algorithms secure against quantum computing",
      "Resistance to quantum entanglement attacks",
      "A type of quantum mining"
    ],
    correctAnswer: 1,
    difficulty: 'hard',
    category: 'security'
  },
  {
    id: 96,
    question: "What is a 'flash crash' in cryptocurrency?",
    options: [
      "A crash caused by lightning strikes",
      "A rapid price drop followed by recovery",
      "A crash of flash storage devices",
      "A type of flash loan exploit"
    ],
    correctAnswer: 1,
    difficulty: 'hard',
    category: 'trading'
  },
  {
    id: 97,
    question: "What is 'state bloat' in blockchain?",
    options: [
      "When blockchain state becomes too large to manage",
      "A type of state-sponsored attack",
      "Bloat caused by state variables in smart contracts",
      "A bloating of state mining pools"
    ],
    correctAnswer: 0,
    difficulty: 'hard',
    category: 'technical'
  },
  {
    id: 98,
    question: "What is a 'sybil attack'?",
    options: [
      "An attack using multiple fake identities",
      "An attack on Sybil cryptocurrency",
      "A type of social engineering attack",
      "An attack using sybil mining hardware"
    ],
    correctAnswer: 0,
    difficulty: 'hard',
    category: 'security'
  },
  {
    id: 99,
    question: "What is 'tokenomics'?",
    options: [
      "The economics of token design and distribution",
      "A branch of economics studying tokens",
      "The study of token mining economics",
      "Economics of token-based payments"
    ],
    correctAnswer: 0,
    difficulty: 'hard',
    category: 'basics'
  },
  {
    id: 100,
    question: "What is a 'wrapped BTC' (WBTC)?",
    options: [
      "Bitcoin wrapped in paper",
      "A token representing Bitcoin on Ethereum blockchain",
      "A wrapped Bitcoin mining contract",
      "A type of Bitcoin wallet"
    ],
    correctAnswer: 1,
    difficulty: 'hard',
    category: 'defi'
  }
];