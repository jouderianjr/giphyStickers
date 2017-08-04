import React from 'react'
import { Provider } from 'react-redux'

import Routes from './src/config/routes'
import store from './src/config/store'

export default class App extends React.Component {
    render() {
        return (
            <Provider store={store}>
                <Routes>
                </Routes>
            </Provider>
        )
    }
}
