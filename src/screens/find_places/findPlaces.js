import React, { Component } from 'react';
import { View, Text, Button } from 'react-native'
import PlaceList from '../../components/place-list/place-list'
import { connect } from 'react-redux';
import { } from '../../store/actions/index'

class FindPlaceScreen extends Component {

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

  itemSelectedHandler = (key) => {
    const place = this.props.places.find(item => item.key === key)
    this.props.navigator.push({
      screen: 'reactnativetutorial.place-details',
      title: place.placeName,
      passProps: {
        selectedPlace: place
      }
    })
  }

  render() {
    return (
      <View>
        <PlaceList
          places={this.props.places}
          onItemSelected={this.itemSelectedHandler}
        />
      </View>
    );
  }
}

// MAP THE GLOBAL STATE to the local props object.
// What do we want from global state? places!
const mapStateToProps = state => {
  return {
    places: state.root.places
  }
}

export default connect(mapStateToProps, null)(FindPlaceScreen)