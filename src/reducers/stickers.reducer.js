import {
    GET_TRENDING_STICKERS_STARTED,
    GET_TRENDING_STICKERS_SUCCEEDED,
    GET_TRENDING_STICKERS_FAILED
} from './../types'

const initialState = {
    stickers  : [],
    isLoading : false,
    error     : null
}

export const stickersReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_TRENDING_STICKERS_STARTED:
            return {
                ...state,
                isLoading : true
            }
        case GET_TRENDING_STICKERS_SUCCEEDED:
            return {
                ...state,
                isLoading : false,
                stickers  : action.payload
            }
        case GET_TRENDING_STICKERS_FAILED:
            return {
                ...state,
                isLoading : false,
                error     : action.error
            }
        default:
            return state
    }
}
