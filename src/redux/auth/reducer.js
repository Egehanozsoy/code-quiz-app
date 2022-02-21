import {
    AUTH_FAILURE,
    AUTH_REQUEST,
    AUTH_SUCCESS
} from './actionTypes'


const initialState = {
    currentUser: null,
    loading: false,
    error: ''
}

export default (state = initialState, { payload, type }) => {
    switch (type) {
        case AUTH_FAILURE:
            return {
                error: payload,
                currentUser: null,
                loading: false
            }
        case AUTH_REQUEST:
            return {
                ...state,
                loading: true
            }
        case AUTH_SUCCESS:
            return {
                currentUser: payload,
                loading: false,
                error: ''
            }
        default: return state
    }
}