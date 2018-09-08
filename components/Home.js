import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, TextInput, TouchableOpacity, ScrollView, Header} from 'react-native';

export default class Home extends Component<Props> {
  render() {
    return (
      <View>
        <Header>
          
        </Header>
        <ScrollView style={styles.container}>

        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: 300
  },
  title: {
    paddingTop: 100,
    padding: 20,
    fontSize: 50,
    alignSelf: 'center',
    color: 'white',
    fontStyle: 'italic',
    fontFamily: 'Georgia-Italic'
  },
});