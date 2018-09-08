import React, {Component} from 'react';
import {Platform, Dimensions, StyleSheet, Text, View, TextInput, TouchableOpacity} from 'react-native';

export default class LoginButton extends Component<Props> {
  render() {
    return (
      <TouchableOpacity style={styles.container}>
        <Text style={styles.button}>Log In</Text>
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    marginTop: 40,
    paddingVertical: 10,
    width: (Dimensions.get('window').width)*0.8,
    textAlign:'center',
    borderRadius: 4,
    borderWidth: 1,
    borderColor: '#fff',
  },
  button: {
    color:'#fff',
    textAlign:'center',
    fontSize: 18
  }
});