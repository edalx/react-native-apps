import React from 'react'
import { SafeAreaView, Text, View } from 'react-native';
import { HolaMundoScreen } from './src/screens/HolaMundoScreen';
import { ContadorScreen } from './src/screens/ContadorScreen';
import { BoxObjectModelScreen } from './src/screens/BoxObjectModelScreen';
import { DimensionesScreen } from './src/screens/DimensionesScreen';
import { FlexScreen } from './src/screens/FlexScreen';

export const App = () => {
  return (
    // <ContadorScreen/>
    <SafeAreaView style={{ flex: 1 }}>
      {/* <BoxObjectModelScreen /> */}
      {/* <DimensionesScreen /> */}
      <FlexScreen/>
    </SafeAreaView>
  )
}