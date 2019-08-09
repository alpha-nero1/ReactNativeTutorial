// Starts the main tab application.

import { Navigation } from 'react-native-navigation';
import Icon from 'react-native-vector-icons/Ionicons';

const startTabs = () => {
  // We need the sources before we execute code in then block.
  Promise.all([
    Icon.getImageSource('md-share-alt', 30),
    Icon.getImageSource('md-map', 30),
    Icon.getImageSource('ios-menu', 30)
  ]).then(([shareIcon, findIcon, iosNavMenu]) => {
    // Start the tab based app.
    Navigation.startTabBasedApp({
      tabs: [
        {
          screen: 'reactnativetutorial.share-place',
          label: 'Platz Teilen',
          title: 'Platz Teilen',
          icon: shareIcon,
          navigatorButtons: {
            leftButtons: [
              {
                icon: iosNavMenu,
                title: 'Menü',
                id: 'sidedrawertoggle'
              }
            ]
          }
        },
        {
          screen: 'reactnativetutorial.find-place',
          label: 'Platz Finden',
          title: 'Platz Finden',
          icon: findIcon,
          navigatorButtons: {
            leftButtons: [
              {
                icon: iosNavMenu,
                title: 'Menü',
                id: 'sidedrawertoggle'
              }
            ]
          }
        }
      ],
      drawer: {
        left: {
          screen: 'reactnativetutorial.side-drawer'
        }
      }
    })
  })
}

export default startTabs
