import { combineReducers, applyMiddleware, createStore } from 'redux'
import thunk from 'redux-thunk'
import auth from './auth/reducer'



const reducers = combineReducers({ auth })
const store = createStore(reducers, applyMiddleware(thunk))

export default store