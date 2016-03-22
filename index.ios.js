/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */
'use strict';

const React = require('react-native');
const LoginScreen = require('./src/LoginScreen');

const {
  AppRegistry,
  StyleSheet,
  Text,
  View
} = React;

const DosudoDemo = React.createClass({
  render() {
    return <LoginScreen />;
  }
});

AppRegistry.registerComponent('DosudoDemo', () => DosudoDemo);
