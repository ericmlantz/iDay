//imported 3rd party libraries
import { StyleSheet, Text } from 'react-native'

//imported from this repo
import Screen from '../components/Screen'
import colors from '../config/colors'

//create a component
const EstimatesScreen = ({ navigation }) => {
  //render
  return (
    <>
      <Screen style={styles.screen}>
        <Text>Estimates Screen</Text>
      </Screen>
    </>
  )
}

//styles
const styles = StyleSheet.create({
  screen: {
    padding: 20,
    backgroundColor: colors.light
  }
})

//make this component available to the app
export default EstimatesScreen
