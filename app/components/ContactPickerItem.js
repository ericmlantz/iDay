import { StyleSheet, TouchableOpacity, View } from 'react-native'

import AppText from './AppText'

const ContactPickerItem = ({ item, onPress }) => {
  return (
    <>
      <View style={styles.container}>
        <TouchableOpacity onPress={onPress}>
          <AppText style={styles.label}>{item.name}</AppText>
        </TouchableOpacity>
      </View>
    </>
  )
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 20,
    paddingVertical: 15,
    alignItems: 'center',
    width: '100%',
    textAlign: 'center'
  },
  label: {
    marginTop: 5
  }
})

export default ContactPickerItem
