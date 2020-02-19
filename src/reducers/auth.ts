import { AUTH_USER,AUTH_ERROR } from "../actions/types";

const INITIAL_STATE = {
    authenticated: null as string | null,
    errorMessage: null as string | null,
}

type INITIAL_STATE_TYPE = typeof INITIAL_STATE;

export default function (state = INITIAL_STATE, action: any): INITIAL_STATE_TYPE {
    switch (action.type) {
        case AUTH_USER:
            return {
                ...state,
                authenticated: action.payload
            };
        case AUTH_ERROR:
            return{
                ...state,
                errorMessage:action.payload
            }
        default:
            return state;
    }
}