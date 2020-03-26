const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET_USERS';
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE';
const SET_TOTAL_COUNT = 'SET_TOTAL_COUNT';

let initialReducer = {
    users: [],
    pageSize: 3,
    totalUsersCount: 14,
    currentPage: 3
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
            return {...state, currentPage: action.page
            }
        case SET_TOTAL_COUNT:
            return {...state, totalUsersCount: action.totalCount
            }
        default:
            return state;
    }
};

export const followAC = (userId) => {
    return {type: FOLLOW, userId}
};

export const unfollowAC = (userId) => {
    return {type: UNFOLLOW, userId}
};
export const setUsersAC = (users) => {
    return {type: SET_USERS, users}
};

export const setCurrentPageAC = (page) => {
    return {type: SET_CURRENT_PAGE, page}
};
export const setTotalCountAC = (totalCount) => {
    return {type: SET_TOTAL_COUNT, totalCount}
};


export default usersReducer;