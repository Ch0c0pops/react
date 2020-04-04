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
                ...action.data,
                isAuth: true
            }
        case FETCHING_TOGGLE:
            return {...state,
                isFetching: action.isFetching
            }

        default:
            return state;
    }
}

export const setAuthUserData = (id, login, email) => {

    return {type: SET_AUTH_USER_DATA, data: {id, login, email}}

};
export const fetchingToggle = (isFetching) => {
    return {type: FETCHING_TOGGLE, isFetching}
};

export default authReducer;