/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */
'use strict';

var React = require('react-native');
var Login = require('./iOS/App/Components/Login');

var {
  AppRegistry,
  NavigatorIOS,
  StyleSheet,
  Text,
  View,
} = React;

var styles = StyleSheet.create({
  a: {
    flex: 1
  }
});

var mobile = React.createClass({
  render: function() {
    return (
        <NavigatorIOS
        style={ styles.a }
        initialRoute={{
          title: 'Login',
          component: Login
        }} />
    );
  }
});

AppRegistry.registerComponent('mobile', () => mobile);
