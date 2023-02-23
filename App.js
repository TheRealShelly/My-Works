import React from 'react';
import { StatusBar, SafeAreaView, View } from 'react-native';
import { useFonts } from 'expo-font';
import AppLoading from 'expo-app-loading';

import Cesta from './src/screens/cesta/Index';
import mock from './src/mocks/Cesta'

export default function App() {
  const [fonteCarregada] = useFonts({
    "MontserratRegular": require('./src/fonts/Montserrat-Regular.ttf'),
    "MontserratBold": require('./src/fonts/Montserrat-Bold.ttf'),
    "MontserratItalic": require('./src/fonts/Montserrat-Italic.ttf')
  });

  if (!fonteCarregada) {
    return <AppLoading />
  }

  return (
    <SafeAreaView style={{ flex: 1}}>
      <StatusBar />
      <Cesta {...mock}/>
    </SafeAreaView>
  );
}