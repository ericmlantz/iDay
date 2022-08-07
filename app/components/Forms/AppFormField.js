//imported 3rd party libraries
import { useFormikContext } from 'formik'

//imported from this repo
import AppTextInput from '../AppTextInput'
import ErrorMessage from './ErrorMessage'

//create a component
const AppFormField = ({ name, width, ...otherProps }) => {
  const { setFieldTouched, setFieldValue, errors, touched, values } =
    useFormikContext()

  //render
  return (
    <>
      <AppTextInput
        onBlur={() => setFieldTouched(name)}
        onChangeText={(text) => setFieldValue(name, text)}
        value={values[name]}
        width={width}
        {...otherProps}
      />
      <ErrorMessage visible={touched[name]} error={errors[name]} />
    </>
  )
}

//make this component available to the app
export default AppFormField
