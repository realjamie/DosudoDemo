'use strict';

import Dimensions from 'Dimensions';
const displayWidth = Dimensions.get('window').width;

export default {
  blueHeart: {
    height: 16,
    marginLeft: 10,
    marginRight: 5,
    width: 16
  },
  captionText: {
    color: 'rgb(18, 86, 136)',
    fontSize: 16,
    fontWeight: 'bold'
  },
  commentRow: {
    marginHorizontal: 10,
    marginTop: 10
  },
  commentText: {
    color: 'rgb(20, 20, 20)',
    fontWeight: 'normal'
  },
  container: {
    backgroundColor: 'white',
    flex: 1,
    marginTop: 64
  },
  image: {
    height: displayWidth,
    width: displayWidth
  },
  likedIcon: {
    height: 30,
    margin: 10,
    width: 30
  },
  profilePicture: {
    borderRadius: 15,
    height: 30,
    margin: 10,
    width: 30
  },
  row: {
    alignItems: 'center',
    flexDirection: 'row'
  },
  separator: {
    backgroundColor: 'rgba(200, 200, 200, 0.3)',
    height: 1,
    marginBottom: 10,
    marginHorizontal: 10
  },
  time: {
    color: 'rgb(180, 180, 180)',
    fontSize: 14,
    marginBottom: 25,
    marginLeft: 10,
    marginTop: 10
  },
  toolbar: {
    height: 45,
    width: displayWidth
  }
}
