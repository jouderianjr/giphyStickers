import { StackNavigator } from 'react-navigation'
import {
    StatusBar,
    Platform
} from 'react-native'
import Colors from './../styles/colors'

import MainScreen from './../screens/mainScreen'

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
                title            : 'Giphy Roulette',
                headerStyle      : headerStyle,
                headerTitleStyle : headerTitleStyle,
            }
        },
    },
    {
        cardStyle : {
            borderTopWidth : Platform.OS === 'ios' ? 0 : StatusBar.currentHeight
        }
    }
)
