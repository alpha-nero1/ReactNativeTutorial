import React, { Component } from 'react';
import { View, TextInput, Button, StyleSheet, ImageBackground } from 'react-native'
import startMain from '../main/startMain';
import DefaultInput from '../../components/UI/DefaultInput';
import HeadingText from '../../components/heading-text/HeadingText';
import MainText from '../../components/main-text/MainText';
import backgroundImage from '../../assets/background.jpg'
import MainButton from '../../components/UI/MainButton'

class AuthScreen extends Component {

  state = {
    username: '',
    password: ''
  }

  // Execute login loggic
  loginPressedHandler = () => {
    // Execute code in startMain
    startMain()
  }

  // <ImageBackground style={styles.background} source={backgroundImage}>
  render() {
    return (
      <View style={styles.inputContainer}>
        <MainText>
          <HeadingText>Bitte Einloggen</HeadingText>
        </MainText>
        <MainButton color="#29aaf4">Schalten an einloggen</MainButton>
        <DefaultInput value={this.username} placeholder="Nutzername" style={styles.input} />
        <DefaultInput value={this.password} placeholder="Kennwort" style={styles.input} />
        <DefaultInput value={this.password} placeholder="Kennwort Bestätigen" style={styles.input} />
        <MainButton color="#29aaf4" onPress={this.loginPressedHandler}>Einloggen</MainButton>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  inputContainer: {
    flexDirection: 'column',
    flex: 1,
    backgroundColor: '#FFFF66',
    justifyContent: 'center',
    alignItems: 'center'
  },
  input: {
    backgroundColor: '#eee',
    borderColor: '#bbb',
    width: "80%",
    margin: 4,
    padding: 4
  },
  background: {
    flex: 1,
    width: "100%"
  }
})

export default AuthScreen