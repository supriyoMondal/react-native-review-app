import React from 'react';
import Home from './screens/home';
import ReviewDetails from './screens/reviewDetails';
import { useFonts } from '@use-expo/font';
import { AppLoading } from 'expo';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { defaultHeaderOptions } from './styles/globalStyles'


const Stack = createStackNavigator();



const App = () => {
  const [fontsLoaded] = useFonts({
    'nunito-regular': require('./assets/fonts/Nunito-Regular.ttf'),
    'nunito-bold': require('./assets/fonts/Nunito-Bold.ttf'),
  })
  if (!fontsLoaded) {
    return (<AppLoading />)
  } else {
    return (
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Home" >
          <Stack.Screen name="Home"
            options={{
              ...defaultHeaderOptions,
              headerTitleAlign: 'center',
              headerTitle: 'GameZone'
            }}
            component={Home} />
          <Stack.Screen name="Review"
            options={{ ...defaultHeaderOptions, headerTitle: 'Reviews' }}
            component={ReviewDetails} />
        </Stack.Navigator>
      </NavigationContainer>
    )
  }
}

export default App;
