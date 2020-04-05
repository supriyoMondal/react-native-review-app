import React from 'react';

import { useFonts } from '@use-expo/font';
import { AppLoading } from 'expo';
import AboutRoutes from './routes/AboutRoutes'
import HomeRoutes from './routes/HomeRoutes';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';

const Drawer = createDrawerNavigator();

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
        <Drawer.Navigator initialRouteName="Home">
          <Drawer.Screen name="Home"
            component={HomeRoutes} />
          <Drawer.Screen name="About" component={AboutRoutes} />
        </Drawer.Navigator>
      </NavigationContainer>
    )
  }
}

export default App;
