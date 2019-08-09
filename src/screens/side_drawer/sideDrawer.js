import React, { Component } from 'react';
import { View, Text, Button, StyleSheet, Dimensions } from 'react-native'

class SideDrawer extends Component {
  render() {
    return (
      <View style={[{ width: (Dimensions.get('window').width * 0.8) }, styles.drawer]}>
        <Text>Drawer</Text>
      </View >
    )
  }
}

const styles = StyleSheet.create({
  drawer: {
    paddingTop: 22,
    backgroundColor: "white",
    flex: 1
  }
})

export default SideDrawer