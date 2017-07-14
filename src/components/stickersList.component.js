import React, { Component } from 'react'
import PropTypes from 'prop-types'
import {
    FlatList,
    RefreshControl
} from 'react-native'

import { StickerListItem }  from './'

class StickerList extends Component {
    getRefreshControl() {
        if(this.props.onRefresh) {
            return (
                <RefreshControl
                    refreshing={this.props.isRefreshing}
                    onRefresh={this.props.onRefresh}
                />
            )
        }
    }

    renderRow({item}) {
        return (
            <StickerListItem sticker={item}/>
        )
    }

    render() {
        return (
            <FlatList
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

StickerList.propTypes = {
    isRefreshing : PropTypes.bool,
    onRefresh    : PropTypes.func,
    stickers     : PropTypes.array.isRequired
}

export {
    StickerList
}
