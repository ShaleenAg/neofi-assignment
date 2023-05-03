// api is not returning names of coins just the abbreviation and no images so building intial data for choices using random coin images and names

const symbols = [
  {
    symbol: "ETHBTC",
    baseAsset: "ETH",
    name: "Ethereum",
    img: "placeholder-symbol.png",
  },
  {
    symbol: "LTCBTC",
    baseAsset: "LTC",
    name: "LiteCoin",
    img: "binance.png",
  },
  {
    symbol: "BNBBTC",
    baseAsset: "BNB",
    name: "BNBitcoin",
    img: "xrp.png",
  },
  {
    symbol: "NEOBTC",
    baseAsset: "NEO",
    name: "NEOBTC",
    img: "matic.png",
  },
  {
    symbol: "ETHEUR",
    baseAsset: "ETH",
    name: "Ethereum",
    img: "placeholder-symbol.png",
  },
  {
    symbol: "EOSETH",
    baseAsset: "EOS",
    name: "EOS-ETH",
    img: "matic.png",
  },
  {
    symbol: "SNTETH",
    baseAsset: "SNT",
    name: "SNT-ETH",
    img: "matic.png",
  },
  {
    symbol: "BNTETH",
    baseAsset: "BNT",
    name: "SNT-ETH",
    img: "matic.png",
  },
  {
    symbol: "GASBTC",
    baseAsset: "GAS",
    name: "GAS-BTC",
    img: "placeholder-symbol.png",
  },
  {
    symbol: "BTCUSDT",
    baseAsset: "BTC",
    name: "BitCoint Tether",
    img: "placeholder-symbol.png",
  },
  {
    symbol: "QTUMETH",
    baseAsset: "QTUM",
    name: "QTUM-ETH",
    img: "placeholder-symbol.png",
  },
  {
    symbol: "LRCBTC",
    baseAsset: "LRC",
    name: "Loopring BTC",
    img: "xrp.png",
  },
  {
    symbol: "LRCETH",
    baseAsset: "LRC",
    name: "Loopring ETH",
    img: "xrp.png",
  },
  {
    symbol: "OMGBTC",
    baseAsset: "OMG",
    name: "Omega Finance BTC",
    img: "binance.png",
  },
  {
    symbol: "ZRXBTC",
    baseAsset: "ZRX",
    name: "ZRX-BTC",
    img: "binance.png",
  },
  {
    symbol: "ZRXETH",
    baseAsset: "ZRX",
    name: "ZRX-ETH",
    img: "binance.png",
  },
  {
    symbol: "KNCBTC",
    baseAsset: "KNC",
    name: "Kyber Netowork Crystal BTC",
    img: "solana.png",
  },
  {
    symbol: "FUNETH",
    baseAsset: "FUN",
    name: "Funfair ETH",
    img: "solana.png",
  },
  {
    symbol: "SNMBTC",
    baseAsset: "SNM",
    name: "SONM BTC",
    img: "solana.png",
  },
  {
    symbol: "IOTABTC",
    name: "IOTA BTC",
    baseAsset: "IOTA",
    img: "solana.png",
  },
];
export default symbols;
