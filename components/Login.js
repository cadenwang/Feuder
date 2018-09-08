import React, {Component} from 'react';
import {Platform, Dimensions, StyleSheet, Text, View, TextInput, TouchableOpacity} from 'react-native';
import LoginButton from './loginPage/LoginButton';
import ForgotPasswordButton from './loginPage/ForgotPasswordButton';
import CreateAccountButton from './loginPage/CreateAccountButton';
import UsernamePassword from './loginPage/UsernamePassword';
import FacebookLoginButton from './loginPage/FacebookLoginButton';
import GoogleLoginButton from './loginPage/GoogleLoginButton';


export default class Login extends Component<Props> {
  render() {
    return (
      <View style={styles.container}>

        <Text style={styles.title}>FEUDER</Text>
        <UsernamePassword/>
        <LoginButton/>
        <ForgotPasswordButton/>

        <FacebookLoginButton/>
        <GoogleLoginButton/>

        <CreateAccountButton/>

      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: Dimensions.get('window').width,
    backgroundColor: '#41c6c6',
    alignItems: 'center'
  },
  title: {
    paddingTop: 80,
    paddingBottom: 55,
    fontSize: 65,
    alignSelf: 'center',
    color: 'white',
    fontStyle: 'italic',
    fontFamily: 'Baskerville'
  },
});
