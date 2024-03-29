import React from 'react';
import { View, StyleSheet, FlatList } from 'react-native'
import ListItem from '../list-item/list-item';

const placeList = props => {
  return (
    <FlatList style={styles.listContainer} data={props.places} renderItem={(info) => (
      <ListItem
        placeName={info.item.placeName}
        placeImg={info.item.placeImage}
        onItemPressed={() => props.onItemSelected(info.item.key)}
      />
    )} />
  )
}

const styles = StyleSheet.create({
  listContainer: {
    width: '100%'
  }
})

export default placeList