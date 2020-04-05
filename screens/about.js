import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

const about = () => {
    return (
        <View style={styles.container}>
            <Text>This is about page</Text>
        </View>
    )
}

export default about

const styles = StyleSheet.create({
    container: {
        padding: 24
    }
})
