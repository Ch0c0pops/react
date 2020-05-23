import React from 'react';
import classes from './../ProfileInfo/ProfileInfo.module.css';
import Loader from "../../../Common/Loader";
import ProfileStatusWithHooks from "./StatusWithHooks";

const ProfileInfo = (props) => {
    if (!props.profile) {
        return <Loader/>
    }
    return <div>
        <div>
            <img src='https://avatars.mds.yandex.net/get-pdb/2388792/2de82027-9ab6-4382-8a6a-6b54cef4f00b/s800'></img>
        </div>
        <div className={classes.DescriptionBlock}>
            <img src={props.profile.photos.large}></img>

            <ProfileStatusWithHooks status={props.status} updateStatus={props.updateStatus}/>

        </div>
    </div>
}

export default ProfileInfo;