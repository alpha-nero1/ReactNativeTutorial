// Factory function that returns a store.
import { createStore, combineReducers, compose } from 'redux';
import placeReducer from './reducers/root'

// root reducer defined.
const rootReducer = combineReducers({
  root: placeReducer
})

let composeEnhancers = compose
// Configure debugger connection wth redux.
if (__DEV__) {
  composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
}

// Creates a store from a root reducer
const configureStore = () => (
  createStore(rootReducer, composeEnhancers())
)

export default configureStore