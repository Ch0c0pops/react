import React from 'react';
import styles from "./Users.module.css";
import userAvatar from "../../Assets/Images/userAvatar.jpg";
import {NavLink} from "react-router-dom";
import * as axios from "axios";


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
               <NavLink to={'/Profile'}>
               <img src={u.photos.small != null ? u.photos.small : userAvatar}/>
           </NavLink>
           </div>
            <div>
                {u.followed ?
                    <button onClick={() => {
                        axios.delete(`https://social-network.samuraijs.com/api/1.0/follow/${u.id}`,
                            {
                                withCredentials: true,
                                headers: {
                                    'API-KEY': 'ad41b0f3-af09-445d-beb5-2dee553e5702'
                                }
                            }).then(response => {
                            if (response.data.resultCode === 0) {
                                props.unfollow(u.id)
                            }
                        })
                    }}>unfollow</button>

                    : <button onClick={() => {
                        axios.post(`https://social-network.samuraijs.com/api/1.0/follow/${u.id}`, {},
                            {
                                withCredentials: true,
                                headers: {'API-KEY': 'ad41b0f3-af09-445d-beb5-2dee553e5702'}
                            }).then(response => {
                            if (response.data.resultCode === 0) {
                                props.follow(u.id)
                            }
                        })
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