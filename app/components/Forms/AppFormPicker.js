//imported 3rd party libraries
import React from 'react'
import { useFormikContext } from 'formik'

//imported from this repo
import AppPicker from '../AppPicker'
import ErrorMessage from './ErrorMessage'

//create a component
const AppFormPicker = ({
  name,
  items,
  numberOfColumns,
  PickerItemComponent,
  placeholder,
  width
}) => {
  const { errors, setFieldValue, touched, values } = useFormikContext()
  //render
  return (
    <>
      <AppPicker
        items={ items }
        onSelectItem={ (item) => setFieldValue(name, item) }
        numberOfColumns={ numberOfColumns }
        PickerItemComponent={ PickerItemComponent }
        placeholder={ placeholder }
        selectedItem={ values[name] }
        width={ width }
      />
      <ErrorMessage visible={ touched[name] } error={ errors[name] } />
    </>
  )
}

//make this component available to the app
export default AppFormPicker
