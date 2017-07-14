import React from 'react'
import PropTypes from 'prop-types'
import {
    TouchableNativeFeedback,
    View,
    StyleSheet,
    Dimensions,
} from 'react-native'


const ItemHolder = ({onPress, children}) => {
    return (
        <TouchableNativeFeedback
            onPress={onPress}
        >
            <View style={styles.item}>
                {children}
            </View>
        </TouchableNativeFeedback>

    )
}

ItemHolder.propTypes = {
    onPress : PropTypes.func
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
    }
})

export default ItemHolder
