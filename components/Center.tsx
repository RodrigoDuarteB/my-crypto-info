import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import GlobalStyles from '../styles/GlobalStyles'

const Center = ({ children }: any) => {
    return (
        <View style={GlobalStyles.completelyCenter}>
            {children}
        </View>
    )
}

export default Center

