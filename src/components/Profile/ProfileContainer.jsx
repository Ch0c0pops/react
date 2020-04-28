import React from 'react';
import Profile from "./Profile";
import {connect} from 'react-redux';
import {getUserProfileThunkCreator} from "../Redux/ProfileReducer";
import {Redirect, withRouter} from "react-router-dom";
import {withAuthRedirect} from "../../HOC/withAuthRedirect";
import {compose} from "redux";


class ProfileContainer extends React.Component {

    componentDidMount() {
        let userId = this.props.match.params.userId;
        if (!userId) {
            userId = 2; //хардкод на первое время
        }
        ;
        this.props.getUserProfileThunkCreator(userId);
    }

    render() {
        return <Profile {...this.props} profile={this.props.profile}/>
    }
};

const mapStateToProps = (state) => {
    return {
        profile: state.profilePage.profile,
    }
};
/*let authRedirectComponent = withAuthRedirect(ProfileContainer);
let UrlDataContainer = withRouter(authRedirectComponent);               до применения compose

export default connect(mapStateToProps, {getUserProfileThunkCreator})(UrlDataContainer);*/

export default compose(connect(mapStateToProps, {getUserProfileThunkCreator}), withRouter/*, withAuthRedirect*/)
(ProfileContainer);