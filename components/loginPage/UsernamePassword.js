import React, {Component} from 'react';
import {Platform, Dimensions, StyleSheet, Text, View, TextInput, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

export default class UsernamePassword extends Component<Props> {
  render() {
    return (
      <View>
        <View style={styles.line}>
          <Icon name={'account-circle'} style={styles.icon}/>
          <TextInput style={styles.information} placeholder="Email or Phone Number"/>
        </View>

        <View style={styles.line}>
          <Icon name={'lock'} style={styles.icon}/>
          <TextInput style={styles.information} placeholder="Password"/>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  line: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    width: (Dimensions.get('window').width)*0.78,
    marginVertical: 4,
    borderRadius: 4,
    backgroundColor: 'white'
  },
  information: {
    justifyContent: 'center',
    alignItems: 'center',
    height: 40,
    fontSize: 15,
    color: 'white',
  },
  icon: {
    fontSize: 25,
    color: '#41c6c6',
    opacity: 1,
    paddingHorizontal: 10
  }
});