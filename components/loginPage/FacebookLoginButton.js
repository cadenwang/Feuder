import React, {Component} from 'react';
import {Platform, Dimensions, StyleSheet, Text, View, TextInput, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

export default class FacebookLoginButton extends Component<Props> {
  render() {
    return (
      <TouchableOpacity style={styles.container}>
        <Icon name={'facebook-box'} style={styles.icon}/>
        <Text style={styles.buttonText}>Log In with Facebook</Text>
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    marginTop: 20,
    paddingVertical: 10,
    width: (Dimensions.get('window').width)*0.78,
    textAlign:'center',
    borderRadius: 4,
    backgroundColor: '#3B5998',
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