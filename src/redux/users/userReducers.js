import {
    FETCH_USER_REQUEST, 
    FETCH_USER_SUCCESS, 
    FETCH_USER_FAILURE 
} from './usersActionTypes'

const initialState = {
    loading: false,
    userList: [],
    errorMsg: ''
}

const userReducers = (state = initialState, action) => {
    switch(action.type){
        case FETCH_USER_REQUEST: return {
            ...state,
            loading: true
        }
        case FETCH_USER_SUCCESS: return {
            loading: false,
            userList: action.payload,
            errorMsg: ''
        }
        case FETCH_USER_FAILURE: return {
            loading: false,
            userList: [],
            errorMsg: action.payload
        }
        default: return state
    }
}

export default userReducers