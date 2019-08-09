import React, { Component } from 'react';
import { Text, Image, View, Button, StyleSheet, TouchableOpacity } from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons'
import { connect } from 'react-redux';
import { deletePlace } from '../../store/actions/index'

class PlaceDetail extends Component {

  placeDeletedHandler = () => {
    this.props.onDeletePlace(this.props.selectedPlace.key)
    // Remove current page from the stack.
    this.props.navigator.pop();
  }

  render() {
    return (
      <View style={styles.container}>
        <View>
          <Image style={styles.placeImage} source={this.props.selectedPlace.placeImage} />
          <Text style={styles.placeName} >{this.props.selectedPlace.placeName}</Text>
        </View>
        <View>
          <TouchableOpacity onPress={this.placeDeletedHandler}>
            <View style={styles.deleteButton}>
              <Icon size={30} name="ios-trash" color="red" />
            </View>
          </TouchableOpacity>
        </View>
      </View>
    )
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onDeletePlace: (key) => dispatch(deletePlace(key))
  }
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 40,
  },
  placeImage: {
    width: "100%",
    height: 200
  },
  placeName: {
    fontWeight: "bold",
    textAlign: "center",
    fontSize: 28
  },
  deleteButton: {
    alignItems: 'center'
  }
})

export default connect(null, mapDispatchToProps)(PlaceDetail)