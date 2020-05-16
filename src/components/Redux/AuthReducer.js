import {authAPI} from "../../API/API";
import {stopSubmit} from "redux-form";

const SET_AUTH_USER_DATA = 'SET_AUTH_USER_DATA';
const FETCHING_TOGGLE = 'FETCHING_TOGGLE';

let initialReducer = {
    id: null,
    login: null,
    email: null,
    isAuth: false,
    isFetching: false
};

const authReducer = (state = initialReducer, action) => {
    switch (action.type) {
        case SET_AUTH_USER_DATA:
            return {
                ...state,
                ...action.data
            }
        case FETCHING_TOGGLE:
            return {
                ...state,
                isFetching: action.isFetching
            }
        default:
            return state;
    }
}

export const setAuthUserData = (id, login, email, isAuth) => {

    return {type: SET_AUTH_USER_DATA, data: {id, login, email, isAuth}}

};
export const fetchingToggle = (isFetching) => {
    return {type: FETCHING_TOGGLE, isFetching}
};

export const getAuthThunkCreator = () => (dispatch) => {
        dispatch(fetchingToggle(true));
         return authAPI.getAuth(fetchingToggle, setAuthUserData)
            .then(response => {
                    if (response.resultCode === 0) {
                        dispatch(fetchingToggle(false));
                        let {id, login, email} = response.data;
                        dispatch(setAuthUserData(id, login, email, true));
                    }
                }
            )

};

export const loginThunk = (email, password, rememberMe) => {
    return (dispatch) => {
        authAPI.login(email, password, rememberMe = false)
            .then(response => {
                    if (response.data.resultCode === 0) {
                        dispatch(getAuthThunkCreator());
                    } else {
                        dispatch(stopSubmit('login', {_error: response.data.messages[0]}));
                    }
                }
            )
    }
};

export const logoutThunk = () => {
    return (dispatch) => {
        authAPI.logout()
            .then(response => {
                    if (response.data.resultCode === 0) {
                        dispatch(setAuthUserData(null, null, null, false));
                    }
                }
            )
    }
};
export default authReducer;