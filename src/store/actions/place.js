import { ADD_PLACE, DELETE_PLACE } from './actionTypes'

export const addPlace = (placeName, placeImage) => ({
  type: ADD_PLACE,
  placeName,
  placeImage
});

export const deletePlace = (key) => ({
  type: DELETE_PLACE,
  placeKey: key
});