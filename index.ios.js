/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */
'use strict';

var React = require('react-native');
var Root = require('./src/Root');

var {
  AppRegistry,
  StyleSheet,
  Text,
  View
} = React;

var DosudoDemo = React.createClass({
  render() {
    return (
      <Root />
    );
  }
});

AppRegistry.registerComponent('DosudoDemo', () => DosudoDemo);
