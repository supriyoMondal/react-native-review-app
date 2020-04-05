import React from 'react'
import { StyleSheet, Text, View, Dimensions } from 'react-native'
import { MaterialIcons } from '@expo/vector-icons'




const MainHeader = ({ navigation, title }) => {
    const toggleMenu = () => {
        navigation.openDrawer();
    }
    return (
        <View style={styles.header}>

            <MaterialIcons
                onPress={() => toggleMenu()}
                name="menu" size={28}

                style={styles.icon} />

            <View>
                <Text style={styles.headerText}>{title}</Text>
            </View>
        </View>
    )
}

export default MainHeader

const styles = StyleSheet.create({
    header: {
        width: Dimensions.get('screen').width,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center'
    },
    headerText: {
        fontWeight: 'bold',
        fontSize: 20,
        color: "#000",
        letterSpacing: 1,
    },
    icon: {
        position: 'absolute',
        left: 13
    }
})
