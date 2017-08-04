import React from 'react'
import PropTypes from 'prop-types'
import {
    FlatList,
    StyleSheet,
} from 'react-native'

import { StickerListItem }  from './'

const StickerList = ({onRefresh, isRefreshing, stickers}) => {
    const renderRow = ({item}) => <StickerListItem sticker={item}/>

    return (
        <FlatList
            contentContainerStyle={styles.list}
            onRefresh={onRefresh}
            refreshing={isRefreshing}
            data={stickers}
            renderItem={renderRow}
            enableEmptySections={true}
            keyExtractor={(item) => item.id}
        />
    )
}

const styles = StyleSheet.create({
    list : {
        justifyContent: 'center',
        flexDirection: 'row',
        flexWrap: 'wrap'
    }
})

StickerList.propTypes = {
    isRefreshing : PropTypes.bool,
    onRefresh    : PropTypes.func,
    stickers     : PropTypes.array.isRequired
}

export {
    StickerList
}
