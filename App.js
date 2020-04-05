import React from 'react';
import Home from './screens/home';
import { useFonts } from '@use-expo/font';
import { AppLoading } from 'expo';
const App = () => {
  const [fontsLoaded] = useFonts({
    'nunito-regular': require('./assets/fonts/Nunito-Regular.ttf'),
    'nunito-bold': require('./assets/fonts/Nunito-Bold.ttf'),
  })
  if (!fontsLoaded) {
    return (<AppLoading />)
  } else {
    return (
      <Home />
    )
  }
}

export default App;
