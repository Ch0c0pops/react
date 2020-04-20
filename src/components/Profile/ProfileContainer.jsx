import React from 'react';
import Profile from "./Profile";
import {connect} from 'react-redux';
import {getUserProfileThunkCreator} from "../Redux/ProfileReducer";
import {withRouter} from "react-router-dom";


class ProfileContainer extends React.Component {

    componentDidMount() {
        let userId = this.props.match.params.userId;
        if (!userId) {
            userId = 2; //хардкод на первое время
        };
        this.props.getUserProfileThunkCreator(userId);
    }

    render() {
        return <Profile {...this.props} profile={this.props.profile}/>
    }
};

const mapStateToProps = (state) => {
    return {
        profile: state.profilePage.profile
    }
};

let UrlDataContainer = withRouter(ProfileContainer);

export default connect(mapStateToProps, {getUserProfileThunkCreator})(UrlDataContainer);
