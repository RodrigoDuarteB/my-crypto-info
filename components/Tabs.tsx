import React, { useState, useEffect } from 'react'
import { StyleSheet, Text, View, Image, Keyboard } from 'react-native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import Converter from '../screens/Converter'
import MyAddresses from '../screens/MyAddresses'
import Configuration from '../screens/Configuration'
import ConvertImage from '../assets/convert.png'
import AddressesImage from '../assets/addresses.png'
import UserSettingsImage from '../assets/user-settings.png'
import Header from './Header'
import appConfig from '../app.config'

const Tab = createBottomTabNavigator()

const Tabs = () => {

    const [keyboard, setKeyboard] = useState(false)

    useEffect(() => {
        const showSubscription = Keyboard.addListener('keyboardDidShow', () => {
            setKeyboard(true)
        })

        const hideSubscription = Keyboard.addListener('keyboardDidHide', () => {
            setKeyboard(false)
        })
        return () => {
            showSubscription.remove()
            hideSubscription.remove()
        }
    }, [])

    return (
        <Tab.Navigator
            screenOptions={{
                header: () => <Header />,
                tabBarShowLabel: false,
                tabBarStyle: {
                    position: 'absolute',
                    bottom: !keyboard ? 25 : 0,
                    left: 20,
                    right: 20,
                    backgroundColor: appConfig.colors.primaryDark,
                    borderRadius: 15,
                    height: 90,
                    borderTopWidth: 0, 
                    ...styles.shadow
                },
                tabBarHideOnKeyboard: true
            }}
        >
            <Tab.Screen name="Converter" component={Converter}
                options={{
                    tabBarIcon: ({ focused }) => (
                        <View style={styles.iconContainer}>
                            <Image 
                                source={ConvertImage}
                                resizeMode="contain"
                                style={{
                                    tintColor: focused ? '#e32f45' : '#748c94',
                                    ...styles.iconImage
                                }}
                            />
                            <Text 
                                style={{ color: focused ? '#e32f45' : '#748c94', ...styles.iconText }}
                            >
                            Convert</Text>
                        </View>
                    )
                }}
            />
            <Tab.Screen name="Addresses" component={MyAddresses}
                options={{
                    tabBarIcon: ({ focused }) => (
                        <View style={styles.iconContainer}>
                            <Image 
                                source={AddressesImage}
                                resizeMode="contain"
                                style={{
                                    tintColor: focused ? '#e32f45' : '#748c94',
                                    ...styles.iconImage
                                }}
                            />
                            <Text 
                                style={{ color: focused ? '#e32f45' : '#748c94', ...styles.iconText }}
                            >
                            Addresses</Text>
                        </View>
                    )
                }}    
            />
            <Tab.Screen name="Settings" component={Configuration}
                options={{
                    tabBarIcon: ({ focused }) => (
                        <View style={styles.iconContainer}>
                            <Image 
                                source={UserSettingsImage}
                                resizeMode="contain"
                                style={{
                                    tintColor: focused ? '#e32f45' : '#748c94',
                                    ...styles.iconImage
                                }}
                            />
                            <Text 
                                style={{ color: focused ? '#e32f45' : '#748c94', ...styles.iconText }}
                            >
                            Settings</Text>
                        </View>
                    )
                }}
            />
        </Tab.Navigator>
    )
}

const styles = StyleSheet.create({
    shadow: {
        shadowColor: '#7f5df0',
        shadowOffset: {
            width: 0,
            height: 10
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.5,
        elevation: 5 
    }, 
    iconContainer: {
        alignItems: 'center', 
        justifyContent: 'center', 
    },
    iconText: {
        fontSize: 12
    },
    iconImage: {
        width: 35,
        height: 35,
    }
})

export default Tabs

