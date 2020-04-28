import React from "react";
import {connect} from "react-redux";
import {
    follow, fetchingToggle, setCurrentPage,
    setTotalCount, setUsers, unfollow, followingToggle, getUsersThunkCreator, unfollowThunk, followThunk
} from "../Redux/UsersReducer";
import Users from "./Users";
import Loader from "../../Common/Loader";
import {withAuthRedirect} from "../../HOC/withAuthRedirect";
import {compose} from "redux";


class UsersContainer extends React.Component {
    constructor(props) {
        super(props)
    };

    componentDidMount() {
        this.props.getUsersThunkCreator(this.props.currentPage, this.props.pageSize);
    };

    usersPageChanged = (p) => {
        this.props.setCurrentPage(p);
        this.props.getUsersThunkCreator(p, this.props.pageSize);
    };

    render() {
        return <>
            {this.props.isFetching ? <Loader/> : null}

            <Users
                pageSize={this.props.pageSize}
                totalUsersCount={this.props.totalUsersCount}
                currentPage={this.props.currentPage}
                users={this.props.users}
                usersPageChanged={this.usersPageChanged}
                followRequest={this.props.followRequest}
                followThunk={this.props.followThunk}
                unfollowThunk={this.props.unfollowThunk}
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
        followRequest: state.usersPage.followRequest
    }
};

/*const mapDispatchToProps = (dispatch) => {
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
};*/   // старая версия mapDispatсhToProps на случай, хз какой :)


export default compose(connect(mapStateToProps, {
    follow, unfollow, setUsers, setCurrentPage,
    setTotalCount, fetchingToggle, followingToggle,
    getUsersThunkCreator, unfollowThunk, followThunk
}), withAuthRedirect)(UsersContainer);