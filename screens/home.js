import React, { useState } from 'react'
import { Text, View, TouchableOpacity, Modal, StyleSheet, ScrollView } from 'react-native'
import { globalStyles } from '../styles/globalStyles'
import Card from '../shared/Card'
import { MaterialIcons } from '@expo/vector-icons'
import AddGame from '../shared/AddGame'

//get a random id
const getRandomId = () => Math.floor(Math.random() * 10000 + 1234);
const home = ({ navigation }) => {
    const [games, setGame] = useState([
        { title: "Anna Keanine", id: getRandomId(), body: "hello fellas", rating: 5 },
        { title: "Testing the card", id: getRandomId(), body: "hello fellas", rating: 3 },
    ]);
    const [modalOpen, setModalOpen] = useState(false);
    const toggleModal = () => {
        setModalOpen(!modalOpen);
    }
    const addGame = (game) => {
        const newGame = { ...game, id: getRandomId(), rating: 5 };
        setGame([newGame, ...games])
    }

    return (
        <View style={globalStyles.container}>
            <Modal visible={modalOpen} animationType="slide">
                <MaterialIcons
                    style={{ ...styles.modalToggle, marginTop: 20 }}
                    name="close" size={28}
                    onPress={() => toggleModal()}
                />
                <View  >
                    <AddGame addGame={addGame} toggleModal={toggleModal} />
                </View>
            </Modal>
            <MaterialIcons style={styles.modalToggle} name="add" size={32}
                onPress={() => toggleModal()}
            />
            <ScrollView style={{ flex: 1, paddingBottom: 20 }}>
                {games.map(book => (
                    <TouchableOpacity
                        onPress={() => navigation.navigate('Review', book)}
                        key={book.id}>
                        <Card>
                            <Text style={globalStyles.titleText}>{book.title}</Text>
                        </Card>
                    </TouchableOpacity>
                ))}
            </ScrollView>

        </View>
    )
}

export default home;

const styles = StyleSheet.create({
    modalContent: {
        flex: 1
    },
    modalToggle: {
        marginBottom: 10,
        borderWidth: 1,
        borderColor: "#eee",
        borderRadius: 10,
        alignSelf: 'center',
        color: '#a224d4'
    },

});



