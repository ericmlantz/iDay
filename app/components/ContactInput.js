//imported 3rd party libraries
import { StyleSheet, Alert, View, Text } from 'react-native'
import { useEffect, useState } from 'react'
import * as Contacts from 'expo-contacts'

//imported from this repo
import Icon from './Icon'
import defaultStyles from '../config/styles'
import { TouchableWithoutFeedback } from 'react-native-gesture-handler'
import Screen from './Screen'
//create a component
const ContactInput = ({ contactSearch, onChangeImage }) => {
  const [contactList, setContactsList] = useState([])

  useEffect(() => {
    requestPermission()
    getContactsList()
  }, [])

  const requestPermission = async () => {
    const { granted } = await Contacts.requestPermissionsAsync()
    if (!granted) alert('You need to enable permission to access your contacts')
  }

  const getOneContact = async () => {
    const { data } = await Contacts.getContactsAsync({
      fields: [Contacts.Fields.Emails],
    });
    
    if (data.length > 0) {
      const contact = data[0];
      console.log(contact);
    }
  }
  const getContactsList = async () => {
    const contact = await Contacts.getContactByIdAsync(
      '161A368D-D614-4A15-8DC6-665FDBCFAE55'
    )

    if (contact) {
      setContactsList(contact)
    }
  }

  //render
  return (
    <Screen>
      {contactList.map((contactItem) => (
        <Text>{contactItem.name}</Text>
      ))}
    </Screen>
  )
}

//styles
const styles = StyleSheet.create({
  container: {
    borderRadius: 15,
    backgroundColor: defaultStyles.colors.light,
    width: 75,
    height: 75,
    justifyContent: 'center',
    alignItems: 'center',
    overflow: 'hidden'
  },
  image: {
    width: '100%',
    height: '100%'
  }
})

//make this component available to the app
export default ContactInput
