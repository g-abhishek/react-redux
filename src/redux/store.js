import { createStore, combineReducers, applyMiddleware } from 'redux'
import logger from 'redux-logger'
import thunk from 'redux-thunk'

import cakeReducers from './cake/cakeReducers'
import iceCreamReducer from './iceCream/iceCreamReducer'
import userReducers from './users/userReducers'

const rootReducer = combineReducers({
    cake: cakeReducers,
    iceCream: iceCreamReducer,
    users: userReducers
})


const store = createStore(rootReducer, applyMiddleware(logger, thunk))

export default store