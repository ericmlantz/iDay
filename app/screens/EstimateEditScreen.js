//imported 3rd party libraries
import { StyleSheet, Text } from 'react-native'
import * as Yup from 'yup'

//imported from this repo
import Screen from '../components/Screen'
import {
  AppForm,
  AppFormField,
  AppFormPicker,
  AppFormImagePicker,
  SubmitButton
} from '../components/Forms'

const validationSchema = Yup.object().shape({
  id: Yup.string.required.min(1).label('Estimate Number')
})
//create a component
const EstimateEditScreen = ({ navigation }) => {
  //render
  return (
    <Screen>
      <Text>Estimate Edit Screen</Text>
    </Screen>
  )
}

//styles
const styles = StyleSheet.create({
  container: {}
})

//make this component available to the app
export default EstimateEditScreen
