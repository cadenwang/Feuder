import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, TextInput, TouchableOpacity} from 'react-native';

export default class Login extends Component<Props> {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>FEUDER</Text>
        <TextInput style={[{height: 40}, styles.information]} placeholder="Email or Phone Number"/>
        <TextInput style={[{height: 40}, styles.information]} placeholder="Password"/>
        <TouchableOpacity style={{justifyContent: "center", flex: 1, paddingBottom: 50}}>
          <Text style={styles.button}>Log In</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    backgroundColor: '#4F6D7A',
  },
  welcome: {
    fontSize: 40,
    margin: 10,
    paddingTop: 50,
    color: 'white',
    fontStyle: 'italic',
    fontFamily: 'Georgia-Italic'
  },
  information: {
    fontSize: 20,
    margin: 10,
    color: 'white'
  },
  button: {
    paddingHorizontal: 30,
    paddingVertical: 10,
    color:'#fff',
    textAlign:'center',
    backgroundColor:'#4F6D7A',
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#fff',
  }
});
