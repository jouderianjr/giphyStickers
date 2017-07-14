import React, { Component } from 'react'
import PropTypes from 'prop-types'

import {
    View,
    Text,
    Image
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
        return(
            <View>
                <Image
                    style={{width: 100, height: 100}}
                    source={{uri: this.props.sticker.images.original.url}}
                />
                <Text>{this.getUsername(this)}</Text>
            </View>
        )
    }
}

StickerListItem.propTypes = {
    sticker : PropTypes.object.isRequired
}

export {
    StickerListItem
}
