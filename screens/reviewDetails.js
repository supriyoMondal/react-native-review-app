import React from 'react'
import { StyleSheet, Text, View, Image } from 'react-native'
import { globalStyles, images } from '../styles/globalStyles'
import Card from '../shared/Card'

const reviewDetails = ({ route }) => {
    const { title, rating, body } = route.params;
    return (
        <View style={globalStyles.container}>
            <Card>
                <Text>{title}</Text>
                <Text>{body}</Text>
                <View style={styles.rating}>
                    <Text>GameZone Rating : </Text>
                    <Image source={images.ratings[rating]} />
                </View>
            </Card>
        </View>
    )
}
const styles = StyleSheet.create({
    rating: {
        flexDirection: 'row',
        justifyContent: 'center',
        paddingVertical: 16,
        marginTop: 16,
        borderWidth: 1,
        borderColor: '#eee',
        borderRadius: 10
    }
})

export default reviewDetails


