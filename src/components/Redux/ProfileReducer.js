import {profileAPI, usersAPI} from "../../API/API";

const ADD_POST = 'ADD_POST';
const SET_USERS_PROFILE = 'SET_USERS_PROFILE';
const SET_STATUS = 'SET_STATUS';

let initialReducer = {
    postsData: [
        {id: 1, message: 'howdy', likes: 3},
        {id: 2, message: 'chicken corn', likes: 25}
    ],
    profile: null,
    status: null
};

const profilePageReducer = (state = initialReducer, action) => {
    switch (action.type) {
        case ADD_POST: {
            let newPost = {
                id: 5,
                message: action.data,
                likes: 4
            };
            return {
                ...state,
                postsData: [...state.postsData, newPost],
            }
        }
        case SET_USERS_PROFILE: {
            return {
                ...state,
                profile: action.profile
            }
        }
        case SET_STATUS: {
            return {
                ...state,
                status: action.status
            }
        }
        default:
            return state;
    }
}

export const addPostActionCreator = (data) => {
    return {type: ADD_POST, data}
};
export const setUsersProfile = (profile) => {
    return {type: SET_USERS_PROFILE, profile: profile}
};
export const setStatus = (status) => {
    return {type: SET_STATUS, status: status}
};

export const getUserProfileThunkCreator = (userId) => {
    return (dispatch) => {
        usersAPI.getUserProfile(userId)
            .then(response => {
                dispatch(setUsersProfile(response.data));
            })
    }
};

export const getUserStatus = (userId) => {
    return (dispatch) => {
        profileAPI.getUserStatus(userId)
            .then(response => {
                dispatch(setStatus(response.data));
            })
    }
};
export const updateStatus = (status) => {
    return (dispatch) => {
        profileAPI.updateStatus(status)
            .then(response => {
                if (response.data.resultCode === 0) {
                    dispatch(setStatus(status));
                }
            })
    }
};

export default profilePageReducer;