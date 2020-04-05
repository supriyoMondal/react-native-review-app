import { StyleSheet } from 'react-native';
export const globalStyles = StyleSheet.create({
    container: {
        padding: 20,
        flex: 1
    },
    titleText: {
        fontFamily: 'nunito-bold',
        fontSize: 18,
        color: '#333'
    },
    paragraph: {
        marginVertical: 8,
        lineHeight: 18
    }
})

export const defaultHeaderOptions = {

    headerStyle: {
        backgroundColor: '#33a6f2',
    },
    headerTintColor: "#fff",
}


