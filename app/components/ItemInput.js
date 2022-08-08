//imported 3rd party libraries
import { StyleSheet, TextInput, View } from 'react-native'
import { MaterialCommunityIcons } from '@expo/vector-icons'

//imported from this repo
import defaultStyles from '../config/styles'

//create a component
const AppTextInput = ({ icon, width = '100%', ...otherProps }) => {
  //render
  return (
    <View style={[styles.container, { width }]}>
      {icon && (
        <MaterialCommunityIcons
          name={icon}
          size={20}
          color={defaultStyles.colors.medium}
          style={styles.icon}
        />
      )}
      <TextInput
        style={[defaultStyles.text, { flex: 1 }]}
        placeholderTextColor={defaultStyles.colors.medium}
        {...otherProps}
        width={width}
      />
      
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: defaultStyles.colors.light,
    borderRadius: 25,
    flexDirection: 'row',
    padding: 15,
    marginVertical: 10
  },
  icon: {
    marginRight: 10
  }
})

export default AppTextInput
