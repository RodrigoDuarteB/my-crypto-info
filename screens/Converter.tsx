import React, { useState } from 'react'
import { Text, StyleSheet, TextInput } from 'react-native'
import appConfig from '../app.config'
import SafeAreaContainer from '../components/SafeAreaContainer'
import GlobalStyles from '../styles/GlobalStyles'

const Converter = () => {
  const badgesA = ['btc', 'eth', 'rvn']
  const badgesB = ['usd', 'ars', 'eur', 'bol']

  const [badgeA, setBadgeA] = useState(badgesA[0])
  const [badgeB, setBadgeB] = useState(badgesB[0])

  const switchBadgeA = () => {
    let currIndex = badgesA.indexOf(badgeA)
    if(currIndex + 1 < badgesA.length){
      setBadgeA(badgesA[currIndex + 1])
    }else{
      setBadgeA(badgesA[0])
    }
  }

  const switchBadgeB = () => {
    let currIndex = badgesB.indexOf(badgeB)
    if(currIndex + 1 < badgesB.length){
      setBadgeB(badgesB[currIndex + 1])
    }else{
      setBadgeB(badgesB[0])
    }
  }

    return (
      <SafeAreaContainer style={GlobalStyles.completelyCenter}>
        <Text style={styles.text} onPress={switchBadgeA}>De: {badgeA}</Text>
        <TextInput style={styles.input}/>
        <Text style={styles.text} onPress={switchBadgeB}>A: {badgeB}</Text>
        <TextInput style={styles.input}/>
      </SafeAreaContainer>
    )
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    color: appConfig.colors.secondaryLight,
    fontWeight: 'bold',
    fontSize: 20
  },
  input: {
    borderWidth: 1,
    borderColor: '#777',
    padding: 8,
    margin: 10,
    width: 200 
  }
})

export default Converter
