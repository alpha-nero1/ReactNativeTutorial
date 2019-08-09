import React, { Component } from 'react';
import { StyleSheet, View, Button, TextInput } from 'react-native';

export default class PlaceInput extends Component {

  state = {
    placeName: '',
  }

  placeNameChangedHandler = (value) => {
    // Use default set state.
    this.setState({ placeName: value })
  }

  onPlaceAdd = () => {
    if (this.state.placeName.trim() === "") {
      // Short circuit.
      return;
    }
    this.setState({ placeName: '' })
    this.props.onPlaceAdd(this.state.placeName, { uri: 'https://picsum.photos/200' })
  }

  render() {
    return (
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          value={this.state.placeName}
          onChangeText={this.placeNameChangedHandler}
          placeholder="Ein großartiger Ort" />
        <Button
          style={styles.button}
          title="Hinzufügen"
          onPress={this.onPlaceAdd} />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  inputContainer: {
    paddingRight: '4%',
    paddingLeft: '4%',
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  input: {
    width: "70%"
  },
  button: {
    width: "30%"
  },
})

