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
  container: {
    flex: 1,
    flexDirection: 'row'
  }
});

var mobile = React.createClass({
  render: function() {
    return (
        <NavigatorIOS
        style={ styles.container }
        initialRoute={{
          title: 'Login',
          component: Login
        }} />
    );
  }
});

AppRegistry.registerComponent('mobile', () => mobile);
