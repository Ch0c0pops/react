import {authAPI, securityAPI} from "../../API/API";
import {stopSubmit} from "redux-form";

const SET_AUTH_USER_DATA = 'SET_AUTH_USER_DATA';
const FETCHING_TOGGLE = 'FETCHING_TOGGLE';
const SET_CAPTCHA_URL = 'SET_CAPTCHA_URL';

let initialReducer = {
    id: null,
    login: null,
    email: null,
    isAuth: false,
    isFetching: false,
    captcha: null
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
        case SET_CAPTCHA_URL:
            return {
                ...state,
                captcha: action.captcha
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
export const setCaptchaUrl = (captcha) => {
    return {type: SET_CAPTCHA_URL, captcha}
};

export const getAuthThunkCreator = () => async (dispatch) => {
        dispatch(fetchingToggle(true));
         let response = await authAPI.getAuth(fetchingToggle, setAuthUserData);
                    if (response.resultCode === 0) {
                        dispatch(fetchingToggle(false));
                        let {id, login, email} = response.data;
                        dispatch(setAuthUserData(id, login, email, true));
                    }
};

export const loginThunk = (email, password, rememberMe, captcha) => {
    return async (dispatch) => {
       let response =  await authAPI.login(email, password, rememberMe = false, captcha);
                    if (response.data.resultCode === 0) {
                        dispatch(getAuthThunkCreator());
                    } else {
                        if(response.data.resultCode === 10){
                            dispatch(stopSubmit('login', {_error: response.data.messages[0]}));
                            dispatch(securityThunk());
                        }
                        dispatch(stopSubmit('login', {_error: response.data.messages[0]}));
                    }
    }
};

export const logoutThunk = () => {
    return async (dispatch) => {
        let response = await authAPI.logout();
                    if (response.data.resultCode === 0) {
                        dispatch(setAuthUserData(null, null, null, false));
                    }
    }
};

export const securityThunk = () => {
    return async (dispatch) => {
        let response = await securityAPI.getCaptchaUrl();
            dispatch(setCaptchaUrl(response.data.url));
        }

};

export default authReducer;