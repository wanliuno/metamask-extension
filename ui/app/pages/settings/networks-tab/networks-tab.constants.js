const defaultNetworksData = [
  {
    labelKey: 'mainnet',
    iconColor: '#29B6AF',
    providerType: 'mainnet',
    rpcUrl: 'https://api.wanli.uno/jsonrpc',
    chainId: '1',
    ticker: 'WLI',
    blockExplorerUrl: 'https://explorer.wanli.uno',
  },
  {
    labelKey: 'ropsten',
    iconColor: '#FF4A8D',
    providerType: 'ropsten',
    rpcUrl: 'https://api.infura.io/v1/jsonrpc/ropsten',
    chainId: '3',
    ticker: 'WLI',
    blockExplorerUrl: 'https://ropsten.etherscan.io',
  },
  {
    labelKey: 'rinkeby',
    iconColor: '#F6C343',
    providerType: 'rinkeby',
    rpcUrl: 'https://api.infura.io/v1/jsonrpc/rinkeby',
    chainId: '4',
    ticker: 'WLI',
    blockExplorerUrl: 'https://rinkeby.etherscan.io',
  },
  {
    labelKey: 'goerli',
    iconColor: '#3099f2',
    providerType: 'goerli',
    rpcUrl: 'https://api.infura.io/v1/jsonrpc/goerli',
    chainId: '5',
    ticker: 'WLI',
    blockExplorerUrl: 'https://goerli.etherscan.io',
  },
  {
    labelKey: 'kovan',
    iconColor: '#9064FF',
    providerType: 'kovan',
    rpcUrl: 'https://api.infura.io/v1/jsonrpc/kovan',
    chainId: '42',
    ticker: 'WLI',
    blockExplorerUrl: 'https://etherscan.io',
  },
  {
    labelKey: 'localhost',
    iconColor: 'white',
    border: '1px solid #6A737D',
    providerType: 'localhost',
    rpcUrl: 'http://localhost:18545/',
    blockExplorerUrl: 'https://explorer.wanli.uno',
  },
]

export {
  defaultNetworksData,
}
