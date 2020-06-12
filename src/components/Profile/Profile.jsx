import React from 'react';
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import MyPostsContainer from "./myPosts/MyPostsContainer";


const Profile = (props) => {
    return (
        <div>
            <ProfileInfo profile={props.profile} status={props.status} updateStatus={props.updateStatus}
            uploadNewAvatar={props.uploadNewAvatar} isOwner={props.isOwner}/>
            <MyPostsContainer/>
        </div>
    )
}

export default Profile;