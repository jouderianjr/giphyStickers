import React from 'react'
import {
    View,
    Text,
    StyleSheet,
    ActivityIndicator,
} from 'react-native'

class MainScreen extends React.Component {

    componentDidMount() {
        this.props.getTrendingStickers();
    }

    renderLoading() {
        if (this.props.isLoading) {
            return (
                <ActivityIndicator
                    style={styles.loading}
                    color='black'
                    animating={true}
                    size='large'>
                </ActivityIndicator>
            )
        } else {
            return null
        }
    }

    render() {
        return(
            <View style={styles.view}>
                {this.renderLoading()}
                <Text>{JSON.stringify(this.props.stickers)}</Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    view : {
        flex : 1,
        alignItems      : 'center',
        justifyContent  : 'center',
    },
    loading : {
        position : 'absolute'
    }
})

export default MainScreen
