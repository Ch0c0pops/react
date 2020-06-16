import {profileAPI, usersAPI} from "../../API/API";
import {stopSubmit} from "redux-form";

const ADD_POST = 'ADD_POST';
const SET_USERS_PROFILE = 'SET_USERS_PROFILE';
const SET_STATUS = 'SET_STATUS';
const DELETE_POST = 'DELETE_POST';
const SET_AVATAR= 'SET_AVATAR';
const HAS_ERROR= 'HAS_ERROR';

let initialReducer = {
    postsData: [
        {id: 1, message: 'howdy', likes: 3},
        {id: 2, message: 'chicken corn', likes: 25}
    ],
    profile: null,
    status: null,
    avatar: null,
    error: null
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
        case SET_AVATAR: {
            return {
                ...state,
                profile: {...state.profile, photos: action.image}
            }
        }
        case HAS_ERROR: {
            return {
                ...state,
                error: action.error
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
export const setAvatar= (image) => {
    return {type: SET_AVATAR, image}
};
export const hasError= (error) => {
    return {type: HAS_ERROR, error}
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
        try{
        let response = await profileAPI.updateStatus(status);
                if (response.data.resultCode === 0) {
                    dispatch(setStatus(status));
                }
        } catch(error){
          alert(error.message)      //try catch обработка ошибок,то, что возвращает асинх функция оборачиваем
            // в try (пытаемся выполнить некое действие), здесь это попытка подгрузить новый статус на сервак,
            // но я изменил намеренно API KEY (наверное, уже вернул обратно в норм состояние на момент прочтения)
              //и поэтому подгрузить не получится, выпадет ошибка и catch ее словит, кстати, в теле catch
              // alert обычно не пишут, можно задиспатчить что-то на событие и т.п.
        }
    }
};

export const uploadNewAvatar = (image) => {
    return async (dispatch) => {
        let response = await profileAPI.uploadAvatar(image);
        if (response.data.resultCode === 0) {
            dispatch(setAvatar(response.data.data.photos));
        }
    }
};

export const updateProfile = (profile) => {
    return async (dispatch, getState) => {
        const userId = getState().auth.id
        let response = await profileAPI.updateProfile(profile);
        if (response.data.resultCode === 0) {
            dispatch(hasError(false));
            dispatch(getUserProfileThunkCreator(userId));

        }else {
           dispatch(hasError(true));
            dispatch(stopSubmit('profileInfoSettings', {_error: response.data.messages[0] }));


        }
    }
};
export default profilePageReducer;