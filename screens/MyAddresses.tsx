import React from 'react'
import { StyleSheet, Text, SafeAreaView } from 'react-native'
import SafeAreaContainer from '../components/SafeAreaContainer'

const MyAddresses = () => {
    return (
        <SafeAreaContainer style={styles.container}>
            <Text>My Addresses Screen</Text>
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

export default MyAddresses

