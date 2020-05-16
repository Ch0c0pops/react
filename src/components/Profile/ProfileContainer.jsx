import React from 'react';
import Profile from "./Profile";
import {connect} from 'react-redux';
import {getUserProfileThunkCreator, getUserStatus, updateStatus} from "../Redux/ProfileReducer";
import {withRouter} from "react-router-dom";
import {compose} from "redux";


class ProfileContainer extends React.Component {

    componentDidMount() {
        let userId = this.props.match.params.userId;
        if (!userId) {                  //6505; //хардкод на первое время
            userId = this.props.userId
            if(!userId){
                this.props.history.push('/login')
            };
        }
        ;
        this.props.getUserProfileThunkCreator(userId);
        this.props.getUserStatus(userId);
    }

    render() {
        return <Profile {...this.props} /*profile={this.props.profile} status={this.props.status}*//>
    }
};

const mapStateToProps = (state) => {
    return {
        profile: state.profilePage.profile,
        status: state.profilePage.status,
        userId: state.auth.id
    }
};
/*let authRedirectComponent = withAuthRedirect(ProfileContainer);
let UrlDataContainer = withRouter(authRedirectComponent);               вид до применения compose

export default connect(mapStateToProps, {getUserProfileThunkCreator})(UrlDataContainer);*/

export default compose(connect(mapStateToProps, {
    getUserProfileThunkCreator,
    getUserStatus,
    updateStatus
}), withRouter/*, withAuthRedirect*/)
(ProfileContainer);