import React from 'react'
import { StyleSheet, Text, View, Dimensions, Image, ImageBackground } from 'react-native'
import { MaterialIcons } from '@expo/vector-icons'

const MainHeader = ({ navigation, title }) => {
    const toggleMenu = () => {
        navigation.openDrawer();
    }
    return (
        <ImageBackground source={require('../assets/game_bg.png')} style={styles.header}>

            <MaterialIcons
                onPress={() => toggleMenu()}
                name="menu" size={28}

                style={styles.icon} />

            <View style={styles.headerTitle}>
                <Image source={require('../assets/heart_logo.png')} style={styles.headerImage} />
                <Text style={styles.headerText}>{title}</Text>
            </View>
        </ImageBackground>
    )
}

export default MainHeader

const styles = StyleSheet.create({
    header: {
        width: Dimensions.get('screen').width,
        height: 50,
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
    },
    headerImage: {
        width: 26,
        height: 26,
        marginHorizontal: 5
    },
    headerTitle: {
        flexDirection: 'row'
    }
})
