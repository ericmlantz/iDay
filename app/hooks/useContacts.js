import * as Contacts from 'expo-contacts'
import { useState, useEffect } from 'react'

export default useLocation = () => {
  const [contactsList, setContactsList] = useState([])

  const getContacts = async () => {
    try {
      const { granted } = await Contacts.requestPermissionsAsync()
      if (!granted) return

      const { data } = await Contacts.getContactsAsync({})
      if (data.length > 0) {
        setContactsList(data)
      }
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    getContacts()
  }, [])

  return contactsList
}

// Getting a list of all contacts
{
  /* <Screen>
{contactList.length > 0 &&
  contactList.map((contact, index) => (
    <AppText key={index}>{contact.name}</AppText>
  ))}
</Screen>  */
}
