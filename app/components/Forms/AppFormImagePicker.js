//imported 3rd party libraries
import { StyleSheet, View } from 'react-native'
import { useFormikContext } from 'formik'
//imported from this repo
import ImageInputList from '../ImageInputList'
import ErrorMessage from './ErrorMessage'

//create a component
const AppFormImagePicker = ({ name }) => {
  const { errors, setFieldValue, touched, values } = useFormikContext()
  const imageUris = values[name]

  const handleAdd = (uri) => {
    setFieldValue(name, [...imageUris, uri])
  }
  const handleRemove = (uri) => {
    setFieldValue(name, imageUris.filter((imageUri) => imageUri !== uri))
  }

  //render 
  return (
    <>
      <ImageInputList
        imageUris={ imageUris }
        onAddImage={ handleAdd }
        onRemoveImage={ handleRemove } />
      <ErrorMessage visible={ touched[name] } error={ errors[name] } />
    </>
  )
}

//styles
const styles = StyleSheet.create({

})

//make this component available to the app
export default AppFormImagePicker