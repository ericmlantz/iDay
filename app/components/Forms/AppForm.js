//imported 3rd party libraries
import { StyleSheet, View } from 'react-native'
import { Formik } from 'formik'

//imported from this repo

//create a component
const AppForm = ({ initialValues, onSubmit, validationSchema, children }) => {
  //render
  return (
    <Formik
      initialValues={initialValues}
      onSubmit={onSubmit}
      validationSchema={validationSchema}
    >
      {() => <>{children}</>}
    </Formik>
  )
}

//styles
const styles = StyleSheet.create({})

//make this component available to the app
export default AppForm
