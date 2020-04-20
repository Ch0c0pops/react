import React from 'react';
import styles from "./Users.module.css";
import userAvatar from "../../Assets/Images/userAvatar.jpg";
import {NavLink} from "react-router-dom";



let Users = (props) => {
    let pagesAmount = Math.ceil(props.totalUsersCount / props.pageSize);
    let pages = [];
    for (let i = 1; i <= pagesAmount; i++) {
        pages.push(i)
    }
    ;

    return <div>
        <div>
            {pages.map(p => {
                return <span className={props.currentPage === p && styles.activeButton}
                             onClick={() => props.usersPageChanged(p)}>{p}</span>
            })}
        </div>

        {props.users.map(u => <div key={u.id}>

       <span>
           <div className={styles.pic}>
               <NavLink to={'/Profile/' + u.id}>
               <img src={u.photos.small != null ? u.photos.small : userAvatar}/>
           </NavLink>
           </div>
            <div>
                {u.followed ?
                    <button disabled={props.followRequest.some(id => id === u.id)}

                            onClick={() => {
                                props.unfollowThunk(u.id);
                            }}>unfollow</button>

                    : <button disabled={props.followRequest.some(id => id === u.id)} onClick={() => {
                        props.followThunk(u.id);

                    }}>follow</button>}
            </div>
       </span>

            <span>
                <span>
                    <div>{u.name}</div>
                    <div>{u.status}</div>
                </span>
                <span>
                    <div>{'u.location.city'}</div>
                    <div>{'u.location.country'}</div>
                </span>
            </span>

        </div>)
        }
    </div>
};

export default Users;