import React from 'react'
import { Text, View, Button } from 'react-native'
import { globalStyles } from '../styles/globalStyles'
const home = ({ navigation }) => {
    return (
        <View style={globalStyles.container}>
            <Text style={globalStyles.titleText}>This is the home page</Text>
            <Button title="Go to review" color='coral'
                onPress={() => {
                    navigation.navigate('Review')
                }} />
        </View>
    )
}

export default home


