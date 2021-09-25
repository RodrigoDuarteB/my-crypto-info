import { StatusBar } from 'expo-status-bar'
import React, { useEffect, useState } from 'react'
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import AsyncStorage from '@react-native-async-storage/async-storage'
import * as PoolService from './services/PoolService'
import Config from './app.config'
import * as PricesService from './services/PricesService'

export default function App() {

  const [data, setData] = useState<any>({unpaid: 0, hashrate: 0})
  const [value, setValue] = useState<any>({pool: '', address: ''})
  const [prices, setPrices] = useState<any>(null)

  useEffect(() => {
    PoolService.getUnpaidBalance(Config.api, Config.miner)
    .then(res => {
      setData(res)

      PricesService.getCoinsPrices()
      .then(res => {
        setPrices(res)
      })
      .catch(e => {
        console.log(e)
      })
    })
  }, [])

  useEffect(() => {
    AsyncStorage.getItem('@miner')
    .then(res => {
      if(res){
        const data = JSON.parse(res!)
        setValue({pool: data.pool, address: data.address})
      }
    })
  }, [value])

  const save = () => {
    AsyncStorage.setItem('@wallets', JSON.stringify({
      pool: 'ethermine',
      address: '0x985431321651651'
    }))
    .then(r => {
      alert('saved')
    })
    .catch(e => {
      alert('something went wrong')
    })
  }

  const remove = () => {
    AsyncStorage.removeItem('@miner')
    .then(r => {
      alert('removed')
    })
    .catch(e => {
      alert('something went wrong')
    })
  }

  const getAllKeys = () => {
    AsyncStorage.getItem('@miner')
    .then(r => {
      if(r)
      alert(r)
    })
  }

  return (
    <View style={styles.container}>
      <Text>Unpaid: {data.unpaid}</Text>
      <Text>Current Hashrate: {data.hashrate}</Text>

      <TouchableOpacity style={styles.button} onPress={save}>
        <Text>Save</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button} onPress={getAllKeys}>
        <Text>Remove</Text>
      </TouchableOpacity>

      <Text>Pool: {value.pool}</Text>
      <Text>Address: {value.address}</Text>
      {
        prices && Object.keys(prices).map((coin, index) => 
        <Text key={index}>{`${coin}: ${prices[coin].usd}`}</Text>)
      }
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  button: {
    backgroundColor: 'cyan',
    padding: 8,
    borderRadius: 5,
  }
})
