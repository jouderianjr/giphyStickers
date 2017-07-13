import { connect } from 'react-redux'

import MainScreen from './main.component.js'

import { getTrendingStickers } from './../../actions'

const mapStateToProps = state => ({
    stickers  : state.stickers.stickers,
    isLoading : state.stickers.isLoading
})

const mapDispatchToProps = dispatch => ({
    getTrendingStickers: () => dispatch(getTrendingStickers())
})

export default connect(mapStateToProps, mapDispatchToProps)(MainScreen)
