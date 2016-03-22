'use strict';

import React, {
  Component,
  Image,
  Navigator,
  PropTypes,
  StyleSheet,
  Text,
  TouchableHighlight,
  TouchableOpacity,
  View
} from 'react-native';

import assets from './assets';
import Camera from 'react-native-camera';
import styles from './styles/CameraScreen.styles';

class CameraScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cameraType: Camera.constants.Type.back
    };
    this._handlePressSwitchCameraButton = this._handlePressSwitchCameraButton.bind(this);
    this._handlePressRecordButton = this._handlePressRecordButton.bind(this);
  }

  render() {
    return (
      <View style={styles.container}>
        <Camera
          aspect={Camera.constants.Aspect.fill}
          captureQuality={Camera.constants.CaptureQuality.medium}
          captureTarget={Camera.constants.CaptureTarget.temp}
          orientation={Camera.constants.Orientation.auto}
          ref="camera"
          style={styles.camera}
          type={this.state.cameraType}>
          <TouchableOpacity style={styles.switchCameraContainer} onPress={this._handlePressSwitchCameraButton}>
            <Image style={styles.switchCameraIcon} source={assets.switchCamera} />
          </TouchableOpacity>
        </Camera>
        <View style={styles.controlPanel}>
          <TouchableHighlight underlayColor='transparent' onPress={this._handlePressRecordButton}>
            <View style={styles.outerRecordButton}>
              <View style={styles.innerRecordButton} />
            </View>
          </TouchableHighlight>
        </View>
      </View>
    );
  }

  _handlePressSwitchCameraButton() {
    const cameraType = this.state.cameraType === Camera.constants.Type.back ? Camera.constants.Type.front : Camera.constants.Type.back;
    this.setState({cameraType});
  }

  _handlePressRecordButton() {
    this.refs.camera.capture()
    .then((filePath) => {
      this.props.onFileSaved(filePath);
      this.props.navigator.pop();
    })
    .catch((error) => {
      console.error(error);
    });
  }
}
CameraScreen.propTypes = {
  navigator: PropTypes.instanceOf(Navigator).isRequired,
  onFileSaved: PropTypes.func
};

CameraScreen.defaultProps = {
  onFileSaved: () => {}
};

export default CameraScreen;
