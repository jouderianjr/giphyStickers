import React from 'react'
import PropTypes from 'prop-types'
import { Share } from 'react-native'

import ItemHolder from './itemHolder.component'
import ItemFooter from './itemFooter.component'
import Gif from './gif.component'

const StickerListItem = ({sticker}) => {
    const username  = sticker.user ? sticker.user.display_name : 'Unknow User'
    const avatarUrl = sticker.user ? sticker.user.avatar_url : null
    const image  = sticker.images.original

    return (
        <ItemHolder onPress={ () => Share.share({message: image.url})} >
            <Gif source={image.url}/>
            <ItemFooter avatar={avatarUrl} title={username} />
        </ItemHolder>
    )
}

StickerListItem.propTypes = {
    sticker : PropTypes.object.isRequired
}

export { StickerListItem }
