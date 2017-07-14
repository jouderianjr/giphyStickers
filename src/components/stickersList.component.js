import React, { Component } from 'react'
import PropTypes from 'prop-types'
import {
    FlatList,
    StyleSheet,
} from 'react-native'

import { StickerListItem }  from './'

class StickerList extends Component {
    renderRow({item}) {
        return (
            <StickerListItem sticker={item}/>
        )
    }

    render() {
        return (
            <FlatList
                contentContainerStyle={styles.list}
                onRefresh={this.props.onRefresh}
                refreshing={this.props.isRefreshing}
                data={this.props.stickers}
                renderItem={this.renderRow.bind(this)}
                enableEmptySections={true}
                keyExtractor={(item) => item.id}
            />
        )
    }
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
