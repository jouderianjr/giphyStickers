/* eslint-env jest */
import React from 'react'
import ShallowRenderer from 'react-test-renderer/shallow'
import { ActivityIndicator } from 'react-native'

import { PageLoadingIndicator } from '../../src/components'

const renderer = new ShallowRenderer()

describe('<PageLoadingIndicator />', () =>{
    it('renders nothing when isLoading is false', () => {
        renderer.render(
            <PageLoadingIndicator
                isLoading={false}/>
        )
        const tree = renderer.getRenderOutput()

        expect(tree).toBeNull()
    })

    it('renders <ActivityIndicator> when isLoading is true', () => {
        renderer.render(
            <PageLoadingIndicator
                isLoading={true}/>
        )
        const tree = renderer.getRenderOutput()

        expect(tree.type).toEqual(ActivityIndicator)
    })
})
