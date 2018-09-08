import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, TextInput, TouchableOpacity, ScrollView, Header} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

export default class ClearButton extends Component<Props> {
  render() {
    return (
      <TouchableOpacity>
        <Icon name={'clear'} style={styles.buttonContainer}/>
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  buttonContainer: {
    fontSize: 30,
    color: '#41c6c6'
  }
});