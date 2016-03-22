'use strict';

import Dimensions from 'Dimensions';
const displayWidth = Dimensions.get('window').width;
const displayHeight = Dimensions.get('window').height;

export default {
  camera: {
    height: displayWidth,
    width: displayWidth
  },
  container: {
    backgroundColor: 'transparent',
    marginTop: 64
  },
  controlPanel: {
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.85)',
    height: displayHeight - 64 - displayWidth,
    justifyContent: 'center',
    width: displayWidth
  },
  innerRecordButton: {
    backgroundColor: 'rgb(69, 146, 216)',
    borderColor: 'rgb(60, 130, 195)',
    borderRadius: 45,
    borderWidth: 18,
    height: 90,
    width: 90
  },
  outerRecordButton: {
    alignItems: 'center',
    backgroundColor: 'white',
    borderRadius: 50,
    height: 100,
    justifyContent: 'center',
    width: 100
  },
  switchCameraContainer: {
    padding: 10,
    position: 'absolute',
    left: 0,
    bottom: 0
  },
  switchCameraIcon: {
    height: 30,
    width: 30
  }
};
