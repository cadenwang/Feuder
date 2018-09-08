import React, {Component} from 'react';
import {Platform, Dimensions, StyleSheet, Text, View, TextInput, TouchableOpacity} from 'react-native';
import LoginButton from './loginPage/LoginButton';
import ForgotPasswordButton from './loginPage/ForgotPasswordButton';
import CreateAccountButton from './loginPage/CreateAccountButton';
import UsernamePassword from './loginPage/UsernamePassword';
import FacebookLoginButton from './loginPage/FacebookLoginButton';
import GoogleLoginButton from './loginPage/GoogleLoginButton';
import LinearGradient from 'react-native-linear-gradient';


export default class Login extends Component<Props> {
  render() {
    return (
      <LinearGradient colors={['#41eef4', '#41d0f4', '#42a7f4']} style={styles.container}>

        <Text style={styles.title}>FEUDER</Text>
        <UsernamePassword/>
        <LoginButton/>
        <ForgotPasswordButton/>
        <FacebookLoginButton/>
        <GoogleLoginButton/>
        <CreateAccountButton/>

      </LinearGradient>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: Dimensions.get('window').width,
    alignItems: 'center'
  },
  title: {
    paddingTop: 80,
    paddingBottom: 55,
    fontSize: 72,
    alignSelf: 'center',
    color: 'white',
    fontStyle: 'italic',
    fontFamily: 'Baskerville'
  },
});
