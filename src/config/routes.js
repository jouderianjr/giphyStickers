import { StackNavigator } from 'react-navigation'
import {
    StatusBar,
    Platform
} from 'react-native'
import Colors from './../styles/colors'

import MainScreen from './../screens/main.screen.js'


const headerStyle = {
    backgroundColor : Colors.backgroundHeader,
}

const headerTitleStyle = {
    color : Colors.textColor
}

export default StackNavigator(
    {
        MainScreen : {
            screen            : MainScreen,
            navigationOptions : {
                title            : 'GiphyApp',
                headerStyle      : headerStyle,
                headerTitleStyle : headerTitleStyle,
            }
        },
    },
    {
        cardStyle : {
          paddingTop : Platform.OS === 'ios' ? 0 : StatusBar.currentHeight
        }
    }
)
