const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET_USERS';
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE';
const SET_TOTAL_COUNT = 'SET_TOTAL_COUNT';
const FETCHING_TOGGLE = 'FETCHING_TOGGLE';

let initialReducer = {
    users: [],
    pageSize: 3,
    totalUsersCount: 14,
    currentPage: 1,
    isFetching: false,
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
            return {...state, currentPage: action.p
            }
        case SET_TOTAL_COUNT:
            return {...state, totalUsersCount: action.totalCount
            }
        case FETCHING_TOGGLE:
            return {...state, isFetching: action.isFetching
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


export default usersReducer;