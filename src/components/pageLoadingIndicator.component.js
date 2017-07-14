import React from 'react'
import { ActivityIndicator } from 'react-native'
import PropTypes from 'prop-types'

const PageLoadingIndicator = ({isLoading}) => {
    if (isLoading) {
        return (
            <ActivityIndicator
                style={{position: 'absolute'}}
                color='black'
                animating={true}
                size='large'>
            </ActivityIndicator>
        )
    } else {
        return null
    }
}

PageLoadingIndicator.propTypes = {
    isLoading : PropTypes.bool.isRequired
}

export {
    PageLoadingIndicator
}
