import http from 'axios'

const API = 'https://api.coingecko.com/api/v3'

export const getCoinsPrices = async () => {
    const res = await http.get(`${API}/simple/price?ids=bitcoin%2Cethereum%2Ctether%2Cravencoin&vs_currencies=usd`)
    return res.data
}