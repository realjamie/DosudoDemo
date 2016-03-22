'use strict';

var React = require('react-native');

var {
  StyleSheet
} = React;

module.exports = StyleSheet.create({

  container: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },

  rightContainer: {
    flex: 1,
  },

  listView: {
    paddingTop: 20,
    backgroundColor: '#F5FCFF',
  },

  thumbnail: {
    width: 53,
    height: 81,
  },

  title: {
    fontSize: 20,
    marginBottom: 8,
    textAlign: 'center',
  },

  year: {
    textAlign: 'center',
  },
})
