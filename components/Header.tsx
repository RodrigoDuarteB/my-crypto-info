import { useRoute } from '@react-navigation/core'
import React from 'react'
import { StyleSheet, Text, TouchableOpacity, View, SafeAreaView, Alert, StatusBar } from 'react-native'
import appConfig from '../app.config'

const Header = () => {

    const route = useRoute()

    const handleClick = () => {
        Alert.alert(route.name)
    }

    return (
        <SafeAreaView style={styles.header}>
            <View style={styles.headerBar}>
                <Text style={styles.headerText}>{route.name}</Text>
            </View>
            <View style={styles.buttonSpace}>
                <TouchableOpacity style={styles.button} onPress={handleClick}>
                    <Text style={styles.buttonIcon}>+</Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    )
}

export default Header

const styles = StyleSheet.create({
    header: {
        flexDirection: 'row',
        marginTop: StatusBar.currentHeight,
        backgroundColor: appConfig.colors.primary
    },
    headerText: {
        fontWeight: 'bold',
        fontSize: 20,
        color: '#748c94',
        letterSpacing: 1,
        paddingLeft: 10
    },
    headerBar: {
        width: '70%',
        backgroundColor: '#102027',
        borderBottomEndRadius: 20,
        justifyContent: 'center'
    },
    buttonSpace: {
        width: '30%',
    },  
    button: {
        borderRadius: 90,
        padding: 4,
        backgroundColor: '#102027',
        marginLeft: 4,
        justifyContent: 'center',
        alignItems: 'center',
        margin: 16
    },
    buttonIcon: {
        fontWeight: 'bold',
        fontSize: 30,
        color: '#748c94'
    }
})
