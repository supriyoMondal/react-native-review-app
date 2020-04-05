import React from 'react'
import Home from '../screens/home';
import ReviewDetails from '../screens/reviewDetails';
import MainHeader from '../shared/MainHeader'
import { createStackNavigator } from '@react-navigation/stack';
import { defaultHeaderOptions } from '../styles/globalStyles'


const Stack = createStackNavigator();

const HomeRoutes = () => {
    return (

        <Stack.Navigator initialRouteName="Home" >
            <Stack.Screen name="Home"
                options={({ navigation }) => {
                    return {
                        headerTitleAlign: 'center',
                        headerTitle: () => <MainHeader navigation={navigation} title={'GameZone'} />
                    }
                }}
                component={Home} />
            <Stack.Screen name="Review"
                options={{ ...defaultHeaderOptions, headerTitle: 'Reviews' }}
                component={ReviewDetails} />
        </Stack.Navigator>


    )
}

export default HomeRoutes
