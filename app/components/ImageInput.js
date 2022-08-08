//imported 3rd party libraries
import { StyleSheet, Alert, View, Image } from 'react-native'
import { useEffect } from 'react'
import * as ImagePicker from 'expo-image-picker'

//imported from this repo
import Icon from './Icon'
import defaultStyles from '../config/styles'
import { TouchableWithoutFeedback } from 'react-native-gesture-handler'

//create a component
const ImageInput = ({ imageUri, onChangeImage }) => {
  useEffect(() => {
    requestPermission()
  }, [])

  const requestPermission = async () => {
    const { granted } = await ImagePicker.requestMediaLibraryPermissionsAsync()
    if (!granted)
      alert('You need to enable permission to access the media library')
  }

  const handlePress = () => {
    if (!imageUri) selectImage()
    else
      Alert.alert('Delete', 'Are you sure you want to delete this image?', [
        {
          text: 'Yes',
          onPress: () => onChangeImage(null)
        },
        {
          text: 'No'
        }
      ])
  }
  const selectImage = async () => {
    try {
      const result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.Images,
        quality: 0.5
      })
      if (!result.cancelled) {
        onChangeImage(result.uri)
      }
    } catch (error) {
      console.log('Error reading an Image', error)
    }
  }
  //render
  return (
    <TouchableWithoutFeedback onPress={handlePress}>
      <View style={styles.container}>
        {imageUri ? (
          <Image source={{ uri: imageUri }} style={styles.image} />
        ) : (
          <Icon
            name="camera"
            size={75}
            backgroundColor={defaultStyles.colors.light}
            iconColor={defaultStyles.colors.medium}
          />
        )}
      </View>
    </TouchableWithoutFeedback>
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
export default ImageInput
