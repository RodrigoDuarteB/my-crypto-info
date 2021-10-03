import React from 'react'
import { StyleSheet, Text, SafeAreaView } from 'react-native'
import SafeAreaContainer from '../components/SafeAreaContainer'

const Configuration = () => {
    return (
        <SafeAreaContainer style={styles.container}>
            <Text>Configuration Screen</Text>
        </SafeAreaContainer>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    }
})

export default Configuration

