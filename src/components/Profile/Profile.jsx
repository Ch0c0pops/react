import React from 'react';
import classes from './../Profile/Profile.module.css';
import MyPosts from './myPosts/MyPosts';
import Post from './myPosts/Post/Post';
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import MyPostsContainer from "./myPosts/MyPostsContainer";


const Profile = () => {
    return (
        <div>
            <ProfileInfo/>
            <MyPostsContainer/>
        </div>
    )
}

export default Profile;