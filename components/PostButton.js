import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, TextInput, TouchableOpacity, ScrollView, Header} from 'react-native';

export default class Post extends Component<Props> {
  render() {
    return (
      <TouchableOpacity style={styles.container}>
        <Text style={styles.button}>Post</Text>
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    paddingVertical: 5.5,
    paddingHorizontal: 19,
    backgroundColor: '#41c6c6',
    borderRadius: 14,
    alignSelf: 'flex-end',
  },
  button: {
    textAlign:'center',
    color:'white',
    fontSize: 16
  },
});