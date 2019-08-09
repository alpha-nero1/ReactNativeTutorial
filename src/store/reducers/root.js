import uuid from 'uuid/v4'
import { ADD_PLACE, DELETE_PLACE } from '../actions/actionTypes'

// Setup before any action has occured.
const initialState = {
  places: []
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_PLACE:
      return {
        ...state,
        places: state.places.concat({
          key: uuid(),
          placeName: action.placeName,
          placeImage: action.placeImage
        })
      }
    case DELETE_PLACE:
      return {
        ...state,
        places: state.places.filter((item) => item.key !== action.placeKey)
      }
    default:
      return state
  }
}

export default reducer