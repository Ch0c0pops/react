import React from "react";
import {connect} from "react-redux";
import {followAC, setCurrentPageAC, setTotalCountAC, setUsersAC, unfollowAC} from "../Redux/UsersReducer";
import * as axios from "axios";
import Users from "./Users";

class UsersContainer extends React.Component {
    constructor(props) {
        super(props)
    };

    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}
        &count=${this.props.pageSize}`)
            .then(response => {
                this.props.setUsers(response.data.items);
                this.props.setTotalCount(response.data.totalCount);
            })
    };

    usersPageChanged = (p) => {
        this.props.setCurrentPage(p);
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${p}
        &count=${this.props.pageSize}`)
            .then(response => {
                this.props.setUsers(response.data.items);
            })
    };

    render() {
        return <Users
            pageSize={this.props.pageSize}
            totalUsersCount={this.props.totalUsersCount}
            currentPage={this.props.currentPage}
            users={this.props.users}
            follow={this.props.follow}
            unfollow={this.props.unfollow}
            usersPageChanged={this.usersPageChanged}
        />
    };

};

const mapStateToProps = (state) => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage,
    }
};
const mapDispatchToProps = (dispatch) => {
    return {
        follow: (userId) => {
            dispatch(followAC(userId))
        },
        unfollow: (userId) => {
            dispatch(unfollowAC(userId))
        },
        setUsers: (users) => {
            dispatch(setUsersAC(users))
        },
        setCurrentPage: (p) => {
            dispatch(setCurrentPageAC(p))
        },
        setTotalCount: (totalCount) => {
            dispatch(setTotalCountAC(totalCount))
        },
    }
};
export default connect(mapStateToProps, mapDispatchToProps)(UsersContainer);
