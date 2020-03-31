import React from "react";
import {connect} from "react-redux";
import {
    followAC,
    fetchingToggleAC,
    setCurrentPageAC,
    setTotalCountAC,
    setUsersAC,
    unfollowAC
} from "../Redux/UsersReducer";
import * as axios from "axios";
import Users from "./Users";
import preLoader from '../../Assets/Images/preLoader.gif';
import Loader from "../../Common/Loader";

class UsersContainer extends React.Component {
    constructor(props) {
        super(props)
    };

    componentDidMount() {
        this.props.fetchingToggle(true);
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}
        &count=${this.props.pageSize}`)
            .then(response => {
                this.props.fetchingToggle(false);
                this.props.setUsers(response.data.items);
                this.props.setTotalCount(response.data.totalCount);
            })
    };

    usersPageChanged = (p) => {
        this.props.setCurrentPage(p);
        this.props.fetchingToggle(true);
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${p}
        &count=${this.props.pageSize}`)
            .then(response => {
                this.props.fetchingToggle(false);
                this.props.setUsers(response.data.items);
            })
    };

    render() {
        return <>
            {this.props.isFetching ? <Loader/> : null}

            <Users
                pageSize={this.props.pageSize}
                totalUsersCount={this.props.totalUsersCount}
                currentPage={this.props.currentPage}
                users={this.props.users}
                follow={this.props.follow}
                unfollow={this.props.unfollow}
                usersPageChanged={this.usersPageChanged}
            />
        </>
    };

};

const mapStateToProps = (state) => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching,
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
        fetchingToggle: (isFetching) => {
            dispatch(fetchingToggleAC(isFetching))
        },
    }
};
export default connect(mapStateToProps, mapDispatchToProps)(UsersContainer);
