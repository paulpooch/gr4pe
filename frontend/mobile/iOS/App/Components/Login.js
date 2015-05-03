var React = require('react-native');

var {
  View,
  Text,
        TextInput,
  StyleSheet
} = React;

var styles = StyleSheet.create({
  table: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center'
  },
  row: {

  },
  input: {
    height: 40,
    width: 200,
    borderColor: 'gray',
    borderWidth: 1
  }
});

class Login extends React.Component {

  getInitialState() {
    return {
      input: ''
    };
  }

  render() {
    return (
      <View style={ styles.table }>

        <Text>Please Login</Text>

        <View style={ styles.row }>
          <Text>Username:</Text>
          <TextInput style={ styles.input }
          onChangeText={(text) =>
            this.setState({ inputUsername: text })
          }
          keyboardType="email-address"
          />
        </View>

        <View style={ styles.row }>
          <Text>Password:</Text>
          <TextInput style={ styles.input }
          onChangeText={(text) =>
            this.setState({ inputPassword: text })
          }
          keyboardType="defaut"
          password="true"
          />
        </View>

      </View>

    );
  }

}

module.exports = Login;