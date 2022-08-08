//imported 3rd party libraries
import { StyleSheet, TouchableOpacity } from 'react-native'
import AppText from './AppText'

//imported from this repo

//create a component
const PickerItem = ({ item, onPress }) => {
  //render
  return (
    <TouchableOpacity onPress={onPress}>
      <AppText style={styles.text}>{item.label}</AppText>
    </TouchableOpacity>
  )
}

//styles
const styles = StyleSheet.create({
  text: {
    padding: 20
  }
})

//make this component available to the app
export default PickerItem
