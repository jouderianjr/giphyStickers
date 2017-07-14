import React from 'react'
import PropTypes from 'prop-types'
import { Image, StyleSheet } from 'react-native'

const Gif = ({source}) => {
    return (
        <Image
            style={styles.gif}
            source={{uri: source}}
        />
    )
}

Gif.propTypes = {
    source : PropTypes.string.isRequired,
}

const styles = StyleSheet.create({
    gif : {
        alignItems     : 'center',
        justifyContent : 'center',
        alignSelf      : 'center',
        resizeMode     : 'contain',
        width          : 100,
        height         : 100
    }
})

export default Gif
