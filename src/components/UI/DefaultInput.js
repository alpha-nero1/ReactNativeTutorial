import React from 'react';
import { TextInput, StyleSheet } from 'react-native';

const defaultInput = props => (
  <TextInput
    style={[styles.input, props.style]}
    underlineColorAndroid="transparent"
    // VERY COOL!
    {...props}
  />
);

const styles = StyleSheet.create({
  input: {
    width: "80%",
    padding: '2%',
    borderWidth: 1,
    borderRadius: 4,
    borderColor: "#eee",
    padding: 5,
    margin: 8
  }
})

export default defaultInput