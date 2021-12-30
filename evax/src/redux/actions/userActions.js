
import { ADD_USER_ERROR,ADD_USER_SUCCESS,ADD_USER, FETCH_USER_ERROR, FETCH_USER_LOADING, FETCH_USER_SUCCESS } from "../types/userTypes";
import axios from "axios"


export const addUser = (payload) => ({
    type: ADD_USER,
    payload
})
export const addUserSuccess = (payload) => ({
    type: ADD_USER_SUCCESS,
    payload
})
export const addUserError = (payload) => ({
    type: ADD_USER_ERROR,
    payload
})

export const fetchUserSuccess = (payload) => ({
    type: FETCH_USER_SUCCESS,
    payload
})
export const fetchUserError = (payload) => ({
    type: FETCH_USER_ERROR,
    payload
})
export const fetchUserLoading = (payload) => ({
    type: FETCH_USER_LOADING,
    payload
})

export const fetchUser = () => {
    return async (dispatch) => {
        dispatch(fetchUserLoading())
        try {
            const res = await axios.get('https://jsonplaceholder.typicode.com/users')
            dispatch(fetchUserSuccess(res.data))
        } catch (err) {
            dispatch(fetchUserError(err))
        }
    }
}


export const addUserApi = (user) => {
    return async (dispatch) => {
        try {
            const res = await axios.post('https://jsonplaceholder.typicode.com/users',
                {
                    name: user.name,
                    ncin: user.ncin,
                    date: user.date, 
                    phone: user.phone,
                    email: user.email
                })
            dispatch(addUserSuccess(res.data))
        } catch (err) {
            dispatch(addUserError(err))
        }
    }
}



