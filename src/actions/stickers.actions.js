import axios from 'axios'

import {
    GET_TRENDING_STICKERS_STARTED,
    GET_TRENDING_STICKERS_SUCCEEDED,
    GET_TRENDING_STICKERS_FAILED,
} from './../types'

const API_KEY = '76792192255c42c3a11c58ea1acfbe27'
const BASE_URL = 'https://api.giphy.com/v1/stickers/'

export const getTrendingStickers = () => {

    return (dispatch) => {
        const url = `${BASE_URL}trending?api_key=${API_KEY}&limit=24`

        dispatch({ type : GET_TRENDING_STICKERS_STARTED })

        axios.get(url)
            .then(response => {
                dispatch({
                    type    : GET_TRENDING_STICKERS_SUCCEEDED,
                    payload : response.data.data
                })
            })
            .catch(response => {
                dispatch({
                    type  : GET_TRENDING_STICKERS_FAILED,
                    error : response.error
                })
            })
    }
}
