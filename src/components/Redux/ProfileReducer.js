import {authAPI, followAPI, profileAPI, usersAPI} from "../../API/API";
import {followingToggle, unfollow} from "./UsersReducer";

const ADD_POST = 'ADD_POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE_NEW_POST_TEXT';
const SET_USERS_PROFILE = 'SET_USERS_PROFILE';

let initialReducer = {
    postsData: [
        {id: 1, message: 'howdy', likes: 3},
        {id: 2, message: 'chicken corn', likes: 25}
    ],
    newPostText: '',
    profile: null
};

const profilePageReducer = (state = initialReducer, action) => {
    switch (action.type) {
        case ADD_POST: {
            let newPost = {
                id: 5,
                message: state.newPostText,
                likes: 4
            };
            return {
                ...state,
                postsData: [...state.postsData, newPost],
                newPostText: ''
            }
        }
        case UPDATE_NEW_POST_TEXT: {
            return {
                ...state,
                newPostText: action.newText
            }
        }
        case SET_USERS_PROFILE: {
            return {
                ...state,
                profile: action.profile
            }
        }
        default:
            return state;

    }
}

export const addPostActionCreator = () => {
    return {type: ADD_POST}
};
export const updateNewPostTextActionCreator = (txt) => {
    return {type: UPDATE_NEW_POST_TEXT, newText: txt}
};
export const setUsersProfile = (profile) => {
    return {type: SET_USERS_PROFILE, profile: profile}
};

export const getUserProfileThunkCreator = (userId) => {
    return (dispatch) => {
        usersAPI.getUserProfile(userId)
            .then(data => {
                dispatch(setUsersProfile(data));

            })
    }
};

export default profilePageReducer;