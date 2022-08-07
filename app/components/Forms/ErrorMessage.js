//imported 3rd party libraries
import { StyleSheet } from 'react-native'

//imported from this repo
import AppText from '../AppText'
import colors from '../../config/colors'

//create a component
const ErrorMessage = ({ error, visible }) => {
  if (!visible || !error) return null
  //render
  return <AppText style={styles.error}>{error}</AppText>
}

//styles
const styles = StyleSheet.create({
  error: {
    color: colors.danger
  }
})

//make this component available to the app
export default ErrorMessage
