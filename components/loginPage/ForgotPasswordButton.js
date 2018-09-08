import React, {Component} from 'react';
import {Platform, Dimensions, StyleSheet, Text, View, TextInput, TouchableOpacity} from 'react-native';

export default class ForgotPasswordButton extends Component<Props> {
  render() {
    return (
      <TouchableOpacity style={styles.container}>
        <Text style={styles.button}>Forgot Password?</Text>
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    paddingVertical: 5,
    marginTop: 10,
    textAlign:'center',
  },
  button: {
    color:'black',
    textAlign:'center',
    fontSize: 15
  }
});