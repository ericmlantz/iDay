//imported 3rd party libraries
import { StyleSheet, View } from 'react-native'
import { useFormikContext } from 'formik'

//imported from this repo
import MyButton from '../MyButton'

//create a component
const SubmitButton = ({ title }) => {
  const { handleSubmit } = useFormikContext()
  //render
  return <MyButton title={title} onPress={handleSubmit} />
}

//styles
const styles = StyleSheet.create({})

//make this component available to the app
export default SubmitButton
