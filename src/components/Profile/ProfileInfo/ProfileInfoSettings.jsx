import React from 'react';
import {Field, reduxForm} from 'redux-form';
import {Input, Textarea} from "../../../Common/FormControls";
import styles from "../../Login/Login.module.css";



const ProfileInfoSettings = ({handleSubmit, onSubmit, profile, ...props}) => {

    return (
        <form onSubmit={handleSubmit}>
            <div><h3>Profile Settings</h3></div>
            <div>{props.error? <div className={styles.authError}>{props.error}</div>: null}</div>
            <div>
                <Field placeholder="fullName" component={Input} name="fullName" />
            </div>
            <div>
                <Field placeholder="aboutMe" component={Textarea} name="aboutMe" />
            </div>
            <div>
                <Field component="input" type="checkbox" name={'lookingForAJob'}/>
            </div>
            <div>
                <Field placeholder="lookingForAJobDescription" component={Textarea}
                       name="lookingForAJobDescription" />
            </div>
            <div>
                <b>Contacts:</b>
                {Object.keys(profile.contacts).map(key => {
                   return  <div> <Field placeholder={key} component={Input}
                    name={'contacts.'+ key} />
                   </div>
                })


           /*         <Contacts key={key} contact={key}
                value={profile.contacts[key]}/>)*/
                }
            </div>
            <div>
                <button type='submit'>save changes</button>
            </div>
        </form>
    )
}
const ProfileInfoSettingsForm = reduxForm({form: 'profileInfoSettings'})(ProfileInfoSettings);


export default ProfileInfoSettingsForm;