import React, { Component } from 'react';
import { View, Text, Button, TextInput, StyleSheet, ScrollView, Image } from 'react-native'
import { connect } from 'react-redux';
import { addPlace } from '../../store/actions/index';
import DefaultInput from '../../components/UI/DefaultInput';
import MainText from '../../components/main-text/MainText';
import HeadingText from '../../components/heading-text/HeadingText';
import imagePlaceholder from '../../assets/place.jpg'

class SharePlaceScreen extends Component {

  constructor(props) {
    super(props)
    this.props.navigator.setOnNavigatorEvent(this.navigationEventHandler);
  }

  navigationEventHandler = event => {
    if (event.type === "NavBarButtonPress" && event.id === "sidedrawertoggle") {
      // Open the side drawer
      this.props.navigator.toggleDrawer({
        side: 'left'
      })
    }
  }

  // call add place reducer action.
  placeAddedhandler = placeName => {
    this.props.onAddPlace(placeName)
  }

  render() {
    return (
      <ScrollView>
        <View style={styles.container}>
          <HeadingText>Teilen sie einem Ort mit uns!</HeadingText>
          <View style={styles.placeholder}>
            <Image style={styles.previewImage} source={imagePlaceholder}></Image>
          </View>
          <View style={styles.button}>
            <Button title="Blick Auswählen"></Button>
          </View>
          <View style={styles.placeholder}><Text>Mappe</Text></View>
          <View style={styles.button}>
            <Button title="Lokalisieren Mich"></Button>
          </View>
          <DefaultInput placeholder="Ortsnahme" />
          <View style={styles.button}>
            <Button title="Platz Teilen" />
          </View>
        </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center'
  },
  placeholder: {
    borderWidth: 1,
    borderColor: 'black',
    width: "80%",
    backgroundColor: "#eee",
    height: 150
  },
  button: {
    margin: 8
  },
  previewImage: {
    width: "100%",
    height: "100%"
  }
})

// ??????
// I think this tells redux what functions in this component should effect the global
// state.
const mapDispatchToProps = (dispatch) => {
  return {
    onAddPlace: (placeName) => dispatch(addPlace(placeName))
  }
}

export default connect(null, mapDispatchToProps)(SharePlaceScreen)