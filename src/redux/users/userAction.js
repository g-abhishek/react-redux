import axios from 'axios'

import {
    FETCH_USER_REQUEST, 
    FETCH_USER_SUCCESS, 
    FETCH_USER_FAILURE 
} from './usersActionTypes'


export const fetchUserRequest = () => {
    console.log("====================== fetchUserRequest ========================")
    return {
        type: FETCH_USER_REQUEST
    }
}

export const fetchUserSuccess = (users) => {
    console.log("====================== fetchUserSuccess ========================")
    return {
        type: FETCH_USER_SUCCESS,
        payload: users
    }
}

export const fetchUserFailure = (errorMsg) => {
    console.log("====================== fetchUserFailure ========================")
    return {
        type: FETCH_USER_FAILURE,
        payload: errorMsg
    }
}



// by using thunk middlware, it hepls to return another function 
export const fetchUsers = () => {
    return (dispatch) => {
        // before axios request, we will dispatch our "fetchUserRequest()"
        dispatch(fetchUserRequest)
        axios.get("https://jsonplaceholder.typicode.com/users")
        .then(response => {
            const users = response.data
            console.log(users)
            // after response we will dispatch our "fetchUserSuccess()" passing in users
            dispatch(fetchUserSuccess(users))
        }).catch(error => {
            const errorMsg = error.message
            dispatch(fetchUserFailure(errorMsg))
        })
    }
}



// we create action here
// i.e. action-creator