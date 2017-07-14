import React from 'react'
import { Image, View } from 'react-native'
import { Entypo } from '@expo/vector-icons'

const ImageWithIconPlaceholder = ({style, icon, source, iconSize}) => {
    return getCorrectElement(style, source, icon, iconSize)
}

const getCorrectElement = ( style, source, icon, iconSize = 30) => {
    if ( source ) {
        return (
            <Image
                source={{uri: source}}
                style={style}
            />
        )
    }
    return (
        <Entypo
            name={icon}
            size={iconSize}
            color='black'
            style={style}
        />
    )
}

export { ImageWithIconPlaceholder }
