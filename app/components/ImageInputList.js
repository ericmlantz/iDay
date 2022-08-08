//imported 3rd party libraries
import { useRef } from 'react'
import { StyleSheet, View, ScrollView } from 'react-native'

//imported from this repo
import ImageInput from './ImageInput'

//create a component
const ImageInputList = ({ imageUris = [], onRemoveImage, onAddImage }) => {
  const scrollView = useRef()

  //render 
  return (
    <View>
      <ScrollView
        ref={ scrollView }
        horizontal
        onContentSizeChange={ () => scrollView.current.scrollToEnd() }>
        <View style={ styles.container }>
          { imageUris.map((uri) => (
            <View key={ uri } style={ styles.image }>
              <ImageInput
                imageUri={ uri }
                onChangeImage={ () => onRemoveImage(uri) } />
            </View>
          )) }
          <View style={ styles.image }>
            <ImageInput onChangeImage={ (uri) => onAddImage(uri) } />
          </View>
        </View>
      </ScrollView >
    </View>
  )
}

//styles
const styles = StyleSheet.create({
  container: {
    flexDirection: 'row'
  },
  image: {
    margin: 5
  }
})

//make this component available to the app
export default ImageInputList