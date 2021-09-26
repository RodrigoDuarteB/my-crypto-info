import React from 'react'
import { SafeAreaView, Text, StyleSheet } from 'react-native'

const Converter = () => {
    return (
        <SafeAreaView style={styles.container}>
            <Text>Converter Screen</Text>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    }
  })

export default Converter
