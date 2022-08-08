//imported 3rd party libraries
import { Modal, StyleSheet, View } from 'react-native'
import * as Progress from 'react-native-progress'
import Lottie from 'lottie-react-native'

//imported from this repo
import colors from '../config/colors'

//create a component
const UploadScreen = ({ onDone, progress = 0, visible = false }) => {
  //render
  return (
    <Modal visible={visible}>
      <View style={styles.container}>
        {progress < 1 ? (
          <Progress.Bar
            progress={progress}
            color={colors.primary}
            width={200}
          />
        ) : (
          <Lottie
            autoPlay
            loop={false}
            onAnimationFinish={onDone}
            source={require('../assets/animations/alldone.json')}
            style={styles.animation}
          />
        )}
      </View>
    </Modal>
  )
}

//styles
const styles = StyleSheet.create({
  animation: {
    width: 150
  },
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  }
})

//make this component available to the app
export default UploadScreen
