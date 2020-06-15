import React from 'react';
import Profile from "./Profile";
import {connect} from 'react-redux';
import {
    getUserProfileThunkCreator,
    getUserStatus,
    updateProfile,
    updateStatus,
    uploadNewAvatar
} from "../Redux/ProfileReducer";
import {withRouter} from "react-router-dom";
import {compose} from "redux";
import {
    profileSelector, statusSelector, userIdSelector, avatarSelector,
    errorSelector
} from "../Redux/ProfileSelectors";

class ProfileContainer extends React.Component {

    profileRefresher() {
        let userId = this.props.match.params.userId;
        if (!userId) {//6505; //хардкод на первое время
            userId = this.props.userId
            if (!userId) {
                this.props.history.push('/login')
            }
            ;
        }
        ;
        this.props.getUserProfileThunkCreator(userId);
        this.props.getUserStatus(userId);
    }

    componentDidMount() {
        this.profileRefresher();
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if (this.props.match.params.userId != prevProps.match.params.userId) {
            this.profileRefresher()
        }
    }

    render() {
        return <Profile {...this.props}
                        isOwner={!this.props.match.params.userId}
                        onSubmit={this.onSubmit}
                        hasError={this.props.error}/>
    }
};

const mapStateToProps = (state) => {
    return {
        profile: profileSelector(state),
        status: statusSelector(state),
        userId: userIdSelector(state),
        avatar: avatarSelector(state),
        error: errorSelector(state)
    }
};
/*let authRedirectComponent = withAuthRedirect(ProfileContainer);
let UrlDataContainer = withRouter(authRedirectComponent);               вид до применения compose

export default connect(mapStateToProps, {getUserProfileThunkCreator})(UrlDataContainer);*/

export default compose(connect(mapStateToProps, {
    getUserProfileThunkCreator,
    getUserStatus,
    updateStatus,
    uploadNewAvatar,
    updateProfile
}), withRouter/*, withAuthRedirect*/)
(ProfileContainer);