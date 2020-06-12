import React from 'react';
import classes from './../ProfileInfo/ProfileInfo.module.css';
import Loader from "../../../Common/Loader";
import ProfileStatusWithHooks from "./StatusWithHooks";
import userAvatar from './../../../Assets/Images/userAvatar.jpg'



const ProfileInfo = ({profile, status, updateStatus, uploadNewAvatar, ...props}) => {
    const onURLChange = (e) => {
        uploadNewAvatar(e.target.files[0]);
    };

    if (!profile) {
        return <Loader/>
    }
    return <div>
        <div>
            <img src='https://avatars.mds.yandex.net/get-pdb/2388792/2de82027-9ab6-4382-8a6a-6b54cef4f00b/s800'></img>
        </div>
        <div className={classes.DescriptionBlock}>
            <img src={profile.photos.large || userAvatar}></img>

            <ProfileStatusWithHooks status={status} updateStatus={updateStatus}/>
            {props.isOwner && <input type='file' accept='.jpeg, .jpg' onChange={onURLChange}/>}


        </div>
    </div>
}

export default ProfileInfo;