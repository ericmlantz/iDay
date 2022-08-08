//imported 3rd party libraries
import { useState } from 'react'
import { StyleSheet } from 'react-native'
import * as Yup from 'yup'
import * as Contacts from 'expo-contacts'

//imported from this repo
import Screen from '../components/Screen'
import {
  AppForm,
  AppFormField,
  AppFormImagePicker,
  AppFormPicker,
  SubmitButton
} from '../components/Forms'
import MyButton from '../components/MyButton'
import CategoryPickerItem from '../components/CategoryPickerItem'
import useLocation from '../hooks/useLocation'
import UploadScreen from './UploadScreen'
import ImageInputList from '../components/ImageInputList'
import ItemInputList from '../components/ItemInputList'
import useContacts from '../hooks/useContacts'
import ContactPickerItem from '../components/ContactPickerItem'

const validationSchema = Yup.object().shape({
  id: Yup.string().required().min(1).label('Estimate Number'),
  customer: Yup.string().required().min(1).label('Customer'),
  images: Yup.array().min(1, 'Please select at least one image.')
})
//create a component
const EstimateEditScreen = ({ navigation }) => {
  const location = useLocation()
  const [uploadVisible, setUploadVisible] = useState(false)
  const [progress, setProgress] = useState(0)
  const contactList = useContacts()

  const handleSubmit = async (listing, { resetForm }) => {
    setProgress(0)
    setUploadVisible(true)
    const result = await listingsApi.addListing(
      { ...listing, location },
      (progress) => setProgress(progress)
    )

    if (!result.ok) {
      setUploadVisible(false)
      return alert('Could not save the listing')
    }
    resetForm()
  }
  //render
  return (
    <Screen>
      <UploadScreen
        onDone={() => setUploadVisible(false)}
        progress={progress}
        visible={uploadVisible}
      />
      <AppForm
        initialValues={{
          Customer: '',
          EstimateId: '',
          EstimateDate: '',
          ExpiresOn: null,
          images: [],
          TotalPrice: '',
          Notes: ''
        }}
        onSubmit={() => console.log(initialValues)}
        validationSchema={validationSchema}
      >
        <AppFormPicker
          items={contactList}
          name="Customer"
          numberOfColumns={1}
          PickerItemComponent={ContactPickerItem}
          placeholder="Customer's Name"
          width="100%"
        />
        <AppFormField
          keyboardType="numeric"
          maxLength={8}
          name="price"
          placeholder="Price"
          width={120}
        />
        <AppFormField
          maxLength={255}
          multiline
          name="description"
          numberOfLines={3}
          placeholder="Description"
        />
        <AppFormImagePicker name="images" />
        <SubmitButton title="Create" />
      </AppForm>
    </Screen>
  )
}

//styles
const styles = StyleSheet.create({
  container: {}
})

//make this component available to the app
export default EstimateEditScreen
