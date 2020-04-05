import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import globalStyles from '../styles/globalStyles'
const home = () => {
    return (
        <View style={globalStyles.container}>
            <Text style={globalStyles.titleText}>This is the home page</Text>
        </View>
    )
}

export default home


