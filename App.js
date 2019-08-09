import { Navigation } from 'react-native-navigation';
import { Provider } from 'react-redux';
import configureStore from './src/store/configureStore'

import AuthScreen from './src/screens/auth/auth';
import SharePlaceScreen from './src/screens/share_place/sharePlaces';
import FindPlaceScreen from './src/screens/find_places/findPlaces';
import PlaceDetail from './src/screens/place-detail/place-detail';
import SideDrawer from './src/screens/side_drawer/sideDrawer';

// Run store config.
const store = configureStore();
// Register screens.
// Second param is a generator function.
// Register log in.
Navigation.registerComponent('reactnativetutorial.auth', () => AuthScreen, store, Provider)
// Share place screen.
Navigation.registerComponent('reactnativetutorial.share-place', () => SharePlaceScreen, store, Provider)
// Find place screen.
Navigation.registerComponent('reactnativetutorial.find-place', () => FindPlaceScreen, store, Provider)
// Place detail screen.
Navigation.registerComponent('reactnativetutorial.place-details', () => PlaceDetail, store, Provider)
// Side drawer
Navigation.registerComponent('reactnativetutorial.side-drawer', () => SideDrawer, store, Provider)

// Start an app for react native navigation.
Navigation.startSingleScreenApp({
  screen: {
    // the unique identifier.
    screen: 'reactnativetutorial.auth',
    title: 'Einloggen'
  }
})