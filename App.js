import { StatusBar } from 'expo-status-bar'
import { StyleSheet, Text, View } from 'react-native'
import { NavigationContainer } from '@react-navigation/native'

import EstimateEditScreen from './app/screens/EstimateEditScreen'
import EstimatesScreen from './app/screens/EstimatesScreen'
import AppNavigator from './app/navigation/AppNavigator'
import navigationTheme from './app/navigation/navigationTheme'

export default function App() {
  return (
    <NavigationContainer theme={navigationTheme}>
      <AppNavigator />
    </NavigationContainer>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  }
})
