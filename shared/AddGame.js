import React, { useState } from 'react'
import { StyleSheet, Text, View, ScrollView, TextInput, TouchableWithoutFeedback, Keyboard, Button, Alert } from 'react-native'


const AddGame = ({ toggleModal, addGame }) => {
    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');
    const [rating, setRating] = useState('');

    const onAddGame = () => {
        if (title != "" && body != "" && rating != '') {
            addGame({ title, body, rating: (parseInt(rating) % 6).toString() });
            setTitle('');
            setBody('');
            toggleModal();
        } else {
            Alert.alert('OOPS!', "Please Enter all the fields", [
                { text: "Understood", onPress: () => { } }
            ])
        }
    }

    return (
        <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
            <ScrollView>
                <View style={styles.inputContainer}>
                    <Text style={styles.inputLabel}>Game Title </Text>
                    <TextInput
                        style={styles.input}
                        placeholder="eg. Pubg Mobile"
                        onChangeText={text => setTitle(text)}
                        defaultValue={title}
                    />
                </View>
                <View style={styles.inputContainer}>
                    <Text style={styles.inputLabel}>Game Description </Text>
                    <TextInput
                        style={styles.input}
                        placeholder="enter description..."
                        onChangeText={text => setBody(text)}
                        defaultValue={body}
                        multiline
                    />
                </View>
                <View style={styles.inputContainer}>
                    <Text style={styles.inputLabel}>Give Your rating </Text>
                    <TextInput
                        style={styles.input}
                        placeholder="number between 1-5"
                        onChangeText={text => setRating(text)}
                        defaultValue={rating}
                        multiline
                        keyboardType="numeric"
                    />
                </View>

                <View style={{ width: 120, alignSelf: 'center', paddingVertical: 5 }}>
                    <Button
                        onPress={() => onAddGame()}
                        title="Add Game" color="#b74fe0" />
                </View>

            </ScrollView>
        </TouchableWithoutFeedback >
    )
}

export default AddGame

const styles = StyleSheet.create({
    input: {
        paddingHorizontal: 10,
        paddingVertical: 10,
        borderWidth: 1,
        borderColor: '#ddd',
        borderRadius: 20,
    },
    inputContainer: {
        paddingHorizontal: 30,
        marginBottom: 10,
    },
    inputLabel: {
        marginBottom: 10,
        fontSize: 20,
        color: "#b74fe0"
    }
})
