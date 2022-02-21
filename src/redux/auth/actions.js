import {
    AUTH_FAILURE,
    AUTH_REQUEST,
    AUTH_SUCCESS
} from './actionTypes'
import firebase from 'firebase/app'
import 'firebase/auth'

const authRequest = () => {
    return {
        type: AUTH_REQUEST
    }
}

const authFailure = (err) => {
    return {
        type: AUTH_FAILURE,
        payload: err
    }
}

export const authSuccess = (currentUser) => {
    return {
        type: AUTH_SUCCESS,
        payload: currentUser
    }
}

export const authenticate = () => {
    return async (dispatch) => {
        dispatch(authRequest())
        try {
            let { user: currentUser } = await firebase.auth().signInAnonymously()
            dispatch(authSuccess(currentUser))
        }
        catch (err) {
            console.log(err)
            dispatch(authFailure(err))
        }
    }
}

