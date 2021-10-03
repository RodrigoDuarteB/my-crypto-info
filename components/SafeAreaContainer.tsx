import React, { useState, useEffect, ReactNode } from 'react'
import { StyleSheet, View, Keyboard } from 'react-native'
import Config from '../app.config'

interface Props {
    children: ReactNode,
    style?: Object 
}

const SafeAreaContainer = ({ style, children }: Props) => {

    const externalStyles = style ? style : {}
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
        <View style={styles.container}>
            <View style={{flex: 1, marginBottom: !keyboard ? 115 : 0, ...externalStyles}}>
                {children}
            </View>
        </View>
    )
}

export default SafeAreaContainer

const styles = StyleSheet.create({
    container: {
        backgroundColor: Config.colors.primary,
        flex: 1,
    }
})
