import { StatusBar } from 'expo-status-bar'
import { StyleSheet, Text, View } from 'react-native'
import { NavigationContainer } from '@react-navigation/native'

import EstimateEditScreen from './app/screens/EstimateEditScreen'
import EstimatesScreen from './app/screens/EstimatesScreen'
import AppNavigator from './app/navigation/AppNavigator'
import navigationTheme from './app/navigation/navigationTheme'
import AppFormSection from './app/components/Forms/AppFormModal'
import useContacts from './app/hooks/useContacts'

export default function App() {
  const contactList = useContacts([])
  return (
    <NavigationContainer theme={navigationTheme}>
      <EstimateEditScreen />
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
