import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native'

const listItem = (props) => (
  <TouchableOpacity onPress={props.onItemPressed}>
    <View style={styles.listView}>
      <Image style={styles.image} source={props.placeImg} />
      <Text>{props.placeName}</Text>
    </View>
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  listView: {
    width: '100%',
    padding: 10,
    backgroundColor: "#eee",
    marginBottom: 4,
    flexDirection: 'row',
    alignItems: 'center'
  },
  image: {
    marginRight: 8,
    height: 30,
    width: 30
  }
})

export default listItem