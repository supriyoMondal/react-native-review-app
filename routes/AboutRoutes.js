import React from 'react'
import About from '../screens/about'
import MainHeader from '../shared/MainHeader'
import { createStackNavigator } from '@react-navigation/stack';
import { defaultHeaderOptions } from '../styles/globalStyles'

const Stack = createStackNavigator();

const AboutRoutes = () => {
    return (

        <Stack.Navigator initialRouteName="About" >
            <Stack.Screen name="About"

                options={({ navigation }) => {
                    return {
                        headerTitleAlign: 'center',
                        headerTitle: () => <MainHeader navigation={navigation} title={'About'} />
                    }
                }}

                component={About} />

        </Stack.Navigator>

    )
}

export default AboutRoutes

