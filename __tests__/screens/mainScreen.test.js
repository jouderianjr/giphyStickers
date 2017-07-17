/* eslint-env jest */
import ShallowRenderer from 'react-test-renderer/shallow'
import React from 'react'

import MainScreen from '../../src/screens/mainScreen/main.component'
import {
    PageLoadingIndicator,
    StickerList
} from '../../src/components'


const renderer = new ShallowRenderer()

describe('<MainScreen />', () =>{
    it('renders <PageLoadingIndicator>', () => {
        renderer.render(
            <MainScreen
                stickers={[]}
                isLoading={true}
                getTrendingStickers={jest.fn()}
            />
        )
        const tree = renderer.getRenderOutput()

        expect(tree.props.children[0].type).toEqual(PageLoadingIndicator)
    })

    it('renders <StickerList>', () => {
        renderer.render(
            <MainScreen
                stickers={[]}
                isLoading={false}
                getTrendingStickers={jest.fn()}
            />
        )
        const tree = renderer.getRenderOutput()

        expect(tree.props.children[1].type).toEqual(StickerList)
    })

})
