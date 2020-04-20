import {usersAPI} from "../../API/API";

const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET_USERS';
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE';
const SET_TOTAL_COUNT = 'SET_TOTAL_COUNT';
const FETCHING_TOGGLE = 'FETCHING_TOGGLE';
const FOLLOWING_TOGGLE = 'FOLLOWING_TOGGLE';

let initialReducer = {
    users: [],
    pageSize: 50,
    totalUsersCount: 14,
    currentPage: 1,
    isFetching: false,
    followRequest: []
};

const usersReducer = (state = initialReducer, action) => {
    switch (action.type) {
        case FOLLOW:
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.userId) {
                        return {...u, followed: true}
                    }
                    return u;
                })
            }
        case UNFOLLOW:
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.userId) {
                        return {...u, followed: false}
                    }
                    return u;
                })
            }
        case SET_USERS:
            return {
                ...state,
                users: [...action.users]
            }
        case SET_CURRENT_PAGE:
            return {
                ...state, currentPage: action.p
            }
        case SET_TOTAL_COUNT:
            return {
                ...state, totalUsersCount: action.totalCount
            }
        case FETCHING_TOGGLE:
            return {
                ...state, isFetching: action.isFetching
            }
        case FOLLOWING_TOGGLE:
            return {
                ...state,
                followRequest: action.followRequest ? [...state.followRequest, action.userId]
                    : state.followRequest.filter(id => id !== action.userId)
            }
        default:
            return state;
    }
};

export const follow = (userId) => {
    return {type: FOLLOW, userId}
};

export const unfollow = (userId) => {
    return {type: UNFOLLOW, userId}
};
export const setUsers = (users) => {
    return {type: SET_USERS, users}
};
export const setCurrentPage = (p) => {
    return {type: SET_CURRENT_PAGE, p}
};
export const setTotalCount = (totalCount) => {
    return {type: SET_TOTAL_COUNT, totalCount}
};
export const fetchingToggle = (isFetching) => {
    return {type: FETCHING_TOGGLE, isFetching}
};
export const followingToggle = (followRequest, userId) => {
    return {type: FOLLOWING_TOGGLE, followRequest, userId}
};

export const getUsersThunkCreator = (currentPage, pageSize) => {
    return (dispatch) => {
        dispatch(fetchingToggle(true));
        usersAPI.getUsers(currentPage, pageSize)
            .then(data => {
                dispatch(fetchingToggle(false));
                dispatch(setUsers(data.items));
                dispatch(setTotalCount(data.totalCount));
            })

    };
}

export const unfollowThunk = (userId) => {
    return (dispatch) => {
        dispatch(followingToggle(true, userId));
        usersAPI.unfollow(userId)
            .then(response => {
                if (response.resultCode === 0) {
                    dispatch(unfollow(userId))
                }
                dispatch(followingToggle(false, userId));
            })
    }
};

export const followThunk = (userId) => {
    return (dispatch) => {
        dispatch(followingToggle(true, userId));
        usersAPI.follow(userId)
            .then(response => {
                if (response.resultCode === 0) {
                    dispatch(follow(userId))
                }
                dispatch(followingToggle(false, userId));
            })
    }
};

export default usersReducer;