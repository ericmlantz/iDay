//imported 3rd party libraries
import { StyleSheet, Text } from 'react-native'

//imported from this repo
import colors from '../config/colors'
import Screen from '../components/Screen'

//create a component
const AccountScreen = () => {
  //render
  return (
    <Screen style={styles.screen}>
      <Text>Account Screen</Text>
    </Screen>
  )
}

//styles
const styles = StyleSheet.create({
  container: {
    marginVertical: 20
  },
  screen: {
    flex: 1,
    backgroundColor: colors.light
  }
})

//make this component available to the app
export default AccountScreen
