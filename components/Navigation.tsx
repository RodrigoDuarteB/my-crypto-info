import React from 'react'
import { Text, Dimensions } from 'react-native'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { Ionicons } from '@expo/vector-icons'

import Converter from '../screens/Converter'
import MyAddresses from '../screens/MyAddresses'
import Configuration from '../screens/Configuration'

const { width, height } = Dimensions.get('window')

const Stack = createNativeStackNavigator()

const ConverterStackScreen = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen name="Converter" component={Converter}/>
        </Stack.Navigator>
    )
}

const MyAddressesStackScreen = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen name="MyAddresses" component={MyAddresses}/>
        </Stack.Navigator>
    )
}

const ConfigurationStackScreen = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen name="Configuration" component={Configuration}/>
        </Stack.Navigator>
    )
}

const Tab = createBottomTabNavigator()

export default function Navigation () {
    return (
        <NavigationContainer>
            <Tab.Navigator
                screenOptions={({route}) => ({
                    headerTitle: () => <Text>Header</Text>,
                    tabBarIcon: ({focused, color, size}) => {
                        let iconName
                        switch (route.name) {
                            case 'Converter':
                                iconName = focused ? 'swap-horizontal' : 'swap-horizontal-outline'
                                break
                            case 'MyAddresses':
                                iconName = focused ? 'wallet' : 'wallet-outline'
                                break
                            case 'Configuration':
                                iconName = focused ? 'settings' : 'settings-outline'
                                break
                            default:
                                iconName = ''
                                break;
                        }
                        return (
                            <Ionicons name={iconName} size={size} color={color}/>
                        )
                    },
                    tabBarActiveTintColor: 'lightseagreen',
                    tabBarInactiveTintColor: 'grey',
                    tabBarLabelStyle: {
                        width
                    }
                })}
            >
                <Tab.Screen name="Converter" component={ConverterStackScreen}/>
                <Tab.Screen name="MyAddresses" component={MyAddressesStackScreen}/>
                <Tab.Screen name="Configuration" component={ConfigurationStackScreen}/>
            </Tab.Navigator>
        </NavigationContainer>
    )
}