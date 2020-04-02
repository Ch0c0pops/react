import React from 'react';
import Profile from "./Profile";
import * as axios from "axios";
import {connect} from 'react-redux';
import {setUsersProfile} from "../Redux/ProfileReducer";

class ProfileContainer extends React.Component {

    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/Profile/2`)
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

export default connect(mapStateToProps, {setUsersProfile})(ProfileContainer);
