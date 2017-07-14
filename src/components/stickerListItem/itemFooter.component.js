import React from 'react'
import PropTypes from 'prop-types'
import {
    View,
    Text,
    StyleSheet
} from 'react-native'

import { ImageWithIconPlaceholder } from './..'

const ItemFooter = ({title, avatar}) => {

    return (
        <View style={styles.item}>
            <ImageWithIconPlaceholder
                style={styles.avatar}
                source={avatar}
                icon='user'
                iconSize={footerHeight}
            />
            <Text
                numberOfLines={1}
                style={styles.title}>
                {title}
            </Text>
        </View>
    )
}


ItemFooter.propTypes = {
    title  : PropTypes.string.isRequired,
    avatar : PropTypes.string

}

const footerHeight = 30

const styles = StyleSheet.create({
    item : {
        flexDirection : 'row',
        borderColor    : '#121212',
        borderTopWidth : 1,
        height : footerHeight
    },
    avatar : {
        height : footerHeight,
        width  : footerHeight,
        borderColor    : '#121212',
        borderRightWidth : 1,
    },
    title                 : {
        flex              : 1,
        color             : '#121212',
        textAlign         : 'center',
        paddingLeft       : 8,
        paddingRight      : 8,
        textAlignVertical : 'center'
    }
})

export default ItemFooter
