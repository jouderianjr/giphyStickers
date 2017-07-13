import { createStore, combineReducers, applyMiddleware } from 'redux'
import { stickersReducer } from './../reducers'
import thunk from 'redux-thunk';

const reducer = combineReducers({
    stickers : stickersReducer
})

const middlewares = applyMiddleware(thunk)

export default createStore(reducer, middlewares)
