'use strict';

var React     = require('react-native');
var Login     = require('./Login');
var Register  = require('./Register');

var {
  StyleSheet,
  TabBarIOS,
  Text,
  View,
} = React;

var styles = StyleSheet.create({

});

var LOGIN_TAB = 'loginTab';
var REGISTER_TAB = 'registerTab';

class LoginOrRegister extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      selectedTab: REGISTER_TAB
    };
  }

  _renderContent(whichTab) {
    if (whichTab == LOGIN_TAB) {
      return (<Login />);
    } else {
      return (<Register />);
    }
  }

  render() {
    return (
        <TabBarIOS>

          <TabBarIOS.Item
          title="Login"
          selected={this.state.selectedTab == LOGIN_TAB}
          onPress={() => {
            this.setState({
              selectedTab: LOGIN_TAB
            });
          }}>
            {this._renderContent(LOGIN_TAB)}
          </TabBarIOS.Item>

          <TabBarIOS.Item
          title="Register"
          selected={this.state.selectedTab == REGISTER_TAB}
          onPress={() => {
            this.setState({
              selectedTab: REGISTER_TAB
            });
          }}>
            {this._renderContent(REGISTER_TAB)}
          </TabBarIOS.Item>

        </TabBarIOS>
    );
  }

}

module.exports = LoginOrRegister;