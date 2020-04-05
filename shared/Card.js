import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

const Card = ({ children }) => {
    return (
        <View style={styles.card}>
            <View style={styles.cardContent}>
                {children}
            </View>
        </View>
    )
}

export default Card

const styles = StyleSheet.create({
    card: {
        borderRadius: 6,
        elevation: 3,
        backgroundColor: "#fff",
        shadowOffset: { width: 1, height: 1 },
        shadowColor: '#333',
        shadowOpacity: 0.3,
        shadowRadius: 2,
        marginVertical: 6,
        paddingHorizontal: 3
    },
    cardContent: {
        paddingHorizontal: 18,
        paddingVertical: 20
    }
})
