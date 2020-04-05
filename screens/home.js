import React, { useState } from 'react'
import { Text, View, Button, TouchableOpacity } from 'react-native'
import { globalStyles } from '../styles/globalStyles'
import Card from '../shared/Card'

//get a random id
const getRandomId = () => Math.floor(Math.random() * 10000 + 1234);
const home = ({ navigation }) => {
    const [books, setBooks] = useState([
        { title: "Anna Keanine", id: getRandomId(), body: "hello fellas", rating: 5 },
        { title: "Testing the card", id: getRandomId(), body: "hello fellas", rating: 3 },
    ])
    return (
        <View style={globalStyles.container}>
            {books.map(book => (
                <TouchableOpacity
                    onPress={() => navigation.navigate('Review', book)}
                    key={book.id}>
                    <Card>
                        <Text style={globalStyles.titleText}>{book.title}</Text>
                    </Card>
                </TouchableOpacity>
            ))}
        </View>
    )
}

export default home


