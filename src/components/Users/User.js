import React from 'react';
import styles from "./Users.module.css";
import userAvatar from "../../Assets/Images/userAvatar.jpg";
import {NavLink} from "react-router-dom";

let User = ({user,followRequest, followThunk, unfollowThunk,...props}) => {
    return <div>
       <span>
           <div className={styles.pic}>
               <NavLink to={'/Profile/' + user.id}>
               <img src={user.photos.small != null ? user.photos.small : userAvatar}/>
               </NavLink>
           </div>
            <div>
                {user.followed ?
                    <button disabled={followRequest.some(id => id === user.id)}

                            onClick={() => {
                                unfollowThunk(user.id);
                            }}>unfollow</button>

                    : <button disabled={followRequest.some(id => id === user.id)} onClick={() => {
                        followThunk(user.id);

                    }}>follow</button>}
            </div>
       </span>

                <span>
                <span>
                    <div>{user.name}</div>
                    <div>{user.status}</div>
                </span>
                <span>
                    <div>{'u.location.city'}</div>
                    <div>{'u.location.country'}</div>
                </span>
            </span>
        }
    </div>
};
export default User;