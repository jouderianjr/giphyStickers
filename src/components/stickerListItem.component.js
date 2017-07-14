import React, { Component } from 'react'
import PropTypes from 'prop-types'

import {
    View,
    Text,
    Image,
    StyleSheet,
    Dimensions,
    Share,
    TouchableNativeFeedback
} from 'react-native'

class StickerListItem extends Component {
    constructor() {
        super()
    }

    getUsername() {
        if (this.props.sticker.user) {
            return this.props.sticker.user.display_name;
        }
        return 'Unknow'
    }

    render() {
        const image = this.props.sticker.images.original;

        return(
            <TouchableNativeFeedback
                onPress={ () => Share.share({message: image.url})}>

                <View style={styles.item}>
                    <Image
                        style={styles.gif}
                        source={{uri: image.url}}
                    />
                    <Text
                        numberOfLines={1}
                        style={styles.username}>
                        {this.getUsername(this)}
                    </Text>
                </View>
            </TouchableNativeFeedback>
        )
    }
}

const { width } = Dimensions.get('window')

const styles = StyleSheet.create({
    item : {
        flex            : 1,
        backgroundColor : 'white',
        margin          : 8,
        width           : (width / 2) - 16,
        borderColor     : '#131313',
        borderWidth     : 1,
        elevation       : 10
    },
    username : {
        color     : '#121212',
        textAlign : 'center',
        paddingLeft : 8,
        paddingRight : 8,
    },
    gif : {
        alignItems     : 'center',
        justifyContent : 'center',
        alignSelf      : 'center',
        resizeMode     : 'contain',
        width          : 100,
        height         : 100
    }
})

StickerListItem.propTypes = {
    sticker : PropTypes.object.isRequired
}

export { StickerListItem }
