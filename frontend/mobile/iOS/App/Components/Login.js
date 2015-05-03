var React = require('react-native');

var {
        ActivityIndicatorIOS,
        View,
        StyleSheet,
        Text,
        TextInput,
        TouchableHighlight
} = React;

var BLUE = '#09f';
var WHITE = '#fff';

var styles = StyleSheet.create({
  table: {
    flex: 1,
    margin: 20,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'stretch'
  },
  row: {

  },
  input: {
    height: 40,
    borderColor: BLUE,
    borderWidth: 1
  },
  loginButton: {
    backgroundColor: BLUE,
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 10,
    height: 40,
    borderRadius: 5,
    borderWidth: 1,
    alignItems: 'center',
    borderColor: WHITE
  }
});

class Login extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      error: false,
      inputEmail: '',
      inputPassword: '',
      isLoadingBoolean: false
    };
  }

  handleChange(field, e) {
    var state = {};
    var text = e.nativeEvent.text;
    console.log(text, field);
    state[field] = text;
    this.setState(state);
  }

  handleSubmit(e) {
    this.setState({
      isLoading: true
    });
  }

  render() {
    return (
      <View style={ styles.table }>

        <Text>Please Login</Text>

        <View style={ styles.row }>
          <Text>Email:</Text>
          <TextInput style={ styles.input }
                     value={ this.state.inputEmail }
                     onChange={ this.handleChange.bind(this, 'inputEmail') }
                     keyboardType="email-address"
                     placeholder="Email" />
        </View>

        <View style={ styles.row }>
          <Text>Password:</Text>
          <TextInput style={ styles.input }
                     value={ this.state.inputPassword }
                     onChange={ this.handleChange.bind(this, 'inputPassword') }
                     keyboardType="default"
                     password={ true }
                     placeholder="Password"
                     />
        </View>

        <TouchableHighlight style={ styles.loginButton }
                            onPress={ this.handleSubmit.bind(this) }>
          <Text style={{ color: WHITE }}>Login</Text>
        </TouchableHighlight>
      </View>

    );
  }

}

module.exports = Login;