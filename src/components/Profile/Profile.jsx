import React from 'react';
import classes from './../Profile/Profile.module.css';
import MyPosts from './myPosts/MyPosts';
import Post from './myPosts/Post/Post';
import ProfileInfo from "./ProfileInfo/ProfileInfo";

const Profile = (props) => {

    return (
        <div>
            <ProfileInfo/>
            <MyPosts postsData={props.state.postsData}/>
        </div>

    )
}

export default Profile;