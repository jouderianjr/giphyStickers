import { StackNavigator } from 'react-navigation'
import {
    StatusBar,
    Platform
} from 'react-native'

import MainScreen from './../screens/main.screen.js'

export default StackNavigator(
    {
        MainScreen : {
            screen            : MainScreen,
            navigationOptions : {
                title      : 'GiphyApp',
            }
        },
    },
    {
        cardStyle : {
          paddingTop : Platform.OS === 'ios' ? 0 : StatusBar.currentHeight
        }
    }
)
