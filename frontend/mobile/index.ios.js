'use strict';

var React = require('react-native');

var C = require('./iOS/App/c');
var LoginOrRegister = require('./iOS/App/Components/LoginOrRegister');

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
          title: `Welcome to ${ C.AppName }`,
          component: LoginOrRegister
        }} />
    );
  }
});

AppRegistry.registerComponent('mobile', () => mobile);
