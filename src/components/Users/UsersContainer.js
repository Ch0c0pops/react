import React from "react";
import {connect} from "react-redux";
import Users from "./Users";
import {followAC, setCurrentPageAC, setTotalCountAC, setUsersAC, unfollowAC} from "../Redux/UsersReducer";


const mapStateToProps =(state)=>{
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage,
    }
};
const mapDispatchToProps=(dispatch)=>{
    return{
        follow: (userId)=> {dispatch(followAC(userId))},
        unfollow: (userId)=> {dispatch(unfollowAC(userId))},
        setUsers: (users)=> { dispatch(setUsersAC(users))},
        setCurrentPage: (page)=> {dispatch(setCurrentPageAC(page))},
        setTotalCount: (totalCount)=> {dispatch(setTotalCountAC(totalCount))},
    }
};
export default connect(mapStateToProps, mapDispatchToProps)(Users);
