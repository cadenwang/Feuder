import React, {Component} from 'react';
import {Platform, Dimensions, StyleSheet, Text, View, TextInput, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

export default class GoogleLoginButton extends Component<Props> {
  render() {
    return (
      <TouchableOpacity style={styles.container}>
          <Icon name={'google-plus-box'} style={styles.icon}/>
          <Text style={styles.buttonText}>Log In with Google+</Text>
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    marginVertical: 10,
    paddingVertical: 10,
    width: (Dimensions.get('window').width)*0.8,
    textAlign:'center',
    borderRadius: 4,
    backgroundColor: '#dd4b39',
    alignItems: 'center',
    flexDirection: 'row'
  },
  buttonText: {
    color:'#fff',
    textAlign:'center',
    fontSize: 18,
  },
  icon: {
    fontSize: 25,
    color: 'white',
    paddingHorizontal: 20,
    
  },
});