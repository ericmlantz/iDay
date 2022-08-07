//imported 3rd party libraries
import { StyleSheet, View } from 'react-native'
import { MaterialCommunityIcons } from '@expo/vector-icons'

//imported from this repo
import colors from '../config/colors'
import { TouchableOpacity } from 'react-native-gesture-handler'

//create a component
const NewEstimateButton = ({ onPress }) => {
  //render
  return (
    <TouchableOpacity onPress={onPress}>
      <View style={styles.container}>
        <MaterialCommunityIcons
          name="plus-circle"
          color={colors.white}
          size={40}
        />
      </View>
    </TouchableOpacity>
  )
}

//styles
const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.primary,
    height: 80,
    width: 80,
    borderRadius: 40,
    bottom: 20,
    borderColor: colors.white,
    borderWidth: 10,
    alignItems: 'center',
    justifyContent: 'center'
  }
})

//make this component available to the app
export default NewEstimateButton
