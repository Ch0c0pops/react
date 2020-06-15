import React, {useEffect, useState} from 'react';
import classes from './../ProfileInfo/ProfileInfo.module.css';
import Loader from "../../../Common/Loader";
import ProfileStatusWithHooks from "./StatusWithHooks";
import userAvatar from './../../../Assets/Images/userAvatar.jpg'
import ProfileInfoSettingsForm from "./ProfileInfoSettings";


const ProfileInfo = ({profile, status, updateStatus, uploadNewAvatar, isOwner, /*onSubmit,*/
                         updateProfile,hasError,...props}) => {

   const [editMode, setEditMode]= useState(false);
    const onURLChange = (e) => {
        uploadNewAvatar(e.target.files[0]);
    };
    const onFormSubmit=(formData)=>{
        updateProfile(formData).then(()=>{
            if(hasError === false){
                setEditMode(false)

            }else{
                setEditMode(true)
            }
        });


    }
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
            {isOwner && <input type='file' accept='.jpeg, .jpg' onChange={onURLChange}/>}
            {isOwner && <button onClick={() => <ProfileInfoSettingsForm/>}>profile settings</button>}
            {editMode===true? <ProfileInfoSettingsForm profile={profile} initialValues={profile} onSubmit={onFormSubmit}/>
            : <ProfileData profile={profile} isOwner={isOwner}
            activateEditMode={()=> setEditMode(true)}/> }


        </div>
    </div>
}

export const ProfileData = ({profile,isOwner,activateEditMode, ...props}) => {

    return (
        <div>
            {isOwner && <div><button onClick={activateEditMode}>edit profile</button></div>}
            <div>
                <b>id:</b>{profile.userId}
            </div>
            <div>
                <b>Full name:</b>{profile.fullName}
            </div>
            <div>
                <b>About me:</b>{profile.aboutMe}
            </div>
            <div>
                <b>Looking for a job:</b>{profile.lookingForAJob}
                {profile.lookingForAJob && <div>
                    <b>Job description:</b>{profile.lookingForAJobDescription}
                </div>
                }
            </div>
            <div>
                <b>Contacts:</b>{Object.keys(profile.contacts).map(key=> <Contacts key={key} contact={key}
                 value={profile.contacts[key]}/>)}
            </div>

        </div>
    )

}

const Contacts=({contact, value})=>{
    return (<div className={classes.contacts}>
        <b>{contact}:</b>{value}
    </div>)
}
export default ProfileInfo;