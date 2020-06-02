import {profileAPI, usersAPI} from "../../API/API";

const ADD_POST = 'ADD_POST';
const SET_USERS_PROFILE = 'SET_USERS_PROFILE';
const SET_STATUS = 'SET_STATUS';
const DELETE_POST = 'DELETE_POST';

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
        case DELETE_POST: {
            return {
                ...state,
                postsData: state.postsData.filter(post => post.id != action.postId)
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
export const deletePostAC= (postId) => {
    return {type: DELETE_POST, postId}
};

export const getUserProfileThunkCreator = (userId) => {
    return async (dispatch) => {
        let response = await usersAPI.getUserProfile(userId);
                dispatch(setUsersProfile(response.data));
    }
};

export const getUserStatus = (userId) => {
    return async (dispatch) => {
        let response = await profileAPI.getUserStatus(userId);
                dispatch(setStatus(response.data));
    }
};
export const updateStatus = (status) => {
    return async (dispatch) => {
        let response = await profileAPI.updateStatus(status);
                if (response.data.resultCode === 0) {
                    dispatch(setStatus(status));
                }
    }
};

export default profilePageReducer;