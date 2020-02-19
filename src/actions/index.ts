import { AUTH_USER, AUTH_ERROR } from './types';
import { authFormType } from '../types/types';
import axios from 'axios';

export const signup = (formProps: authFormType, callback: any) => async (dispatch: any) => {
    try {
        const response = await axios.post(
            'http://localhost:3090/signup', formProps);
        dispatch({
            type: AUTH_USER,
            payload: response.data.token
        } as setAuthUserData);
        localStorage.setItem('token',response.data.token);
        callback();

    } catch (e) {

        dispatch({
            type: AUTH_ERROR,
            payload: "Email is in use"
        } as setAuthUserDataError)
    }
}
type setAuthPayloadType = {
    token: string
}
type setAuthUserData = {
    type: typeof AUTH_USER,
    payload: setAuthPayloadType
}
type setAuthUserDataError = {
    type: typeof AUTH_ERROR,
    payload: string
}



export const signout =()=>{
    localStorage.removeItem('token');
    return{
        type:AUTH_USER,
        payload:''
    }
}

export const signin = (formProps: authFormType, callback: any) => async (dispatch: any) => {
    try {
        const response = await axios.post(
            'http://localhost:3090/signin', formProps);
        dispatch({
            type: AUTH_USER,
            payload: response.data.token
        } as setAuthUserData);
        localStorage.setItem('token',response.data.token);
        callback();

    } catch (e) {

        dispatch({
            type: AUTH_ERROR,
            payload: "Invalid email or password"
        } as setAuthUserDataError)
    }
}