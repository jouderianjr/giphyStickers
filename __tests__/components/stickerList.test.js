/* eslint-env jest */
import React from 'react'
import ShallowRenderer from 'react-test-renderer/shallow'
import { FlatList } from 'react-native'

import { StickerList, StickerListItem } from '../../src/components'

const renderer = new ShallowRenderer()

describe('<StickerList />', () =>{
    let stickers = []
    const stickerList = <StickerList stickers={stickers} />

    it('renders <FlatList>', () => {

        renderer.render(stickerList)
        const tree = renderer.getRenderOutput()

        expect(tree.type).toEqual(FlatList)
    })

})
