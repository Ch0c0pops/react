import React from 'react';
import Profile from "./Profile";
import * as axios from "axios";
import {connect} from 'react-redux';
import {setUsersProfile} from "../Redux/ProfileReducer";
import {withRouter} from "react-router-dom";

class ProfileContainer extends React.Component {

    componentDidMount() {
        let userId = this.props.match.params.userId;
        if (!userId){
            userId=2; //хардкод на первое время
        };
        axios.get(`https://social-network.samuraijs.com/api/1.0/Profile/` +userId)
            .then(response => {
                this.props.setUsersProfile(response.data);
            })
    }

    render() {
        return <Profile profile={this.props.profile}/>
    }
};

const mapStateToProps = (state) => {
    return {
        profile: state.profilePage.profile
    }
};

let UrlDataContainer = withRouter(ProfileContainer);

export default connect(mapStateToProps, {setUsersProfile})(UrlDataContainer);
