import React from 'react'
import PropTypes from 'prop-types'
import {
    View,
    StyleSheet,
} from 'react-native'

import {
    StickerList,
    PageLoadingIndicator
} from './../../components'

class MainScreen extends React.Component {

    componentDidMount() {
        this.props.getTrendingStickers();
    }

    render() {
        return(
            <View style={styles.view}>
                <PageLoadingIndicator isLoading={this.props.isLoading}/>
                <StickerList stickers={this.props.stickers} />
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
})

MainScreen.propTypes = {
    isLoading           : PropTypes.bool.isRequired,
    stickers            : PropTypes.array.isRequired,
    getTrendingStickers : PropTypes.func.isRequired
}

export default MainScreen
