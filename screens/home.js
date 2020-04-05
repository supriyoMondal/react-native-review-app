import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

const home = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.titleText}>This is the home page</Text>
        </View>
    )
}

export default home

const styles = StyleSheet.create({
    container: {
        padding: 24
    },
    titleText: {
        fontFamily: 'nunito-bold',
        fontSize: 18
    }
})
