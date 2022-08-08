//import libraries
import React from 'react'
import { Text, StyleSheet, TouchableHighlight } from 'react-native'
import colors from '../config/colors'

// create a component
const MyButton = ({ title, onPress, color = 'primary' }) => {
  return (
    <TouchableHighlight
      style={[styles.container, { backgroundColor: colors[color] }]}
      onPress={onPress}
    >
      <Text style={styles.button}>{title}</Text>
    </TouchableHighlight>
  )
}

// define your styles
const styles = StyleSheet.create({
  button: {
    color: 'white',
    fontSize: 18,
    textAlign: 'center',
    fontWeight: 'bold',
    textTransform: 'uppercase'
  },
  container: {
    backgroundColor: colors.primary,
    borderRadius: 25,
    width: '100%',
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 10
  }
})

//make this component available to the app
export default MyButton
