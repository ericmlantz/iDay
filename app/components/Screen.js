//imported 3rd party libraries
import { StyleSheet, SafeAreaView, View } from 'react-native'
import Constants from 'expo-constants'

//create a component
const Screen = ({ children, style }) => {
  //render
  return (
    <SafeAreaView style={[styles.screen, style]}>
      <View style={[styles.view, style]}>{children}</View>
    </SafeAreaView>
  )
}

//styles
const styles = StyleSheet.create({
  screen: {
    paddingTop: Constants.StatusBarHeight,
    flex: 1
  },
  view: {
    flex: 1
  }
})

//make this component available to the app
export default Screen
