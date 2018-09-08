import React, {Component} from 'react';
import {Platform, Dimensions, StyleSheet, Text, View, TextInput, TouchableOpacity} from 'react-native';

export default class CreateAccountButton extends Component<Props> {
  render() {
    return (
        <TouchableOpacity style={styles.container}>
          <Text style={styles.button}>Create An Account</Text>
        </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 20,
    textAlign:'center',
  },
  button: {
    color:'black',
    textAlign:'center',
    fontSize: 15
  }
});