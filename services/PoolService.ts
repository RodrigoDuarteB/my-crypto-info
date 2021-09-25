import http from 'axios'

export const getUnpaidBalance = async (api: string, miner: string) => {
    const res = await http.get(`${api}/miner/${miner}/dashboard`)
    const data = res.data.data.currentStatistics
    return {
        unpaid: data.unpaid, 
        hashrate: data.reportedHashrate
    }    
}