import React, {Component} from 'react';
import {StyleSheet, Text, View, TextInput, Keyboard} from 'react-native';
import ClearButton from './ClearButton';
import PostButton from './PostButton';

export default class Post extends Component<Props> {


  render() {
    return (
        <View style={styles.container}>
          <View style={styles.buttonsContainer}>
            <ClearButton/>
            <PostButton/>
          </View>
            <TextInput style={styles.input} placeholder="What's the problem?" multiline={true}></TextInput>
        </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  buttonsContainer: {
    marginTop: 50,
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  input: {
    paddingTop: 20,
    width: 325,
    fontSize: 18,
    flexWrap: 'wrap',
    alignSelf: 'flex-start',
  },
});