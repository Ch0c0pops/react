import React from "react";
import styles from './Users.module.css';
import * as axios from 'axios';

let Users = (props) => {
    if (props.users.length === 0) {
        axios.get("https://social-network.samuraijs.com/api/1.0/users")
            .then(response => {
                props.setUsers(response.data.items)
            });
    }
        return <div>{
            props.users.map(u => <div key={u.id}>

       <span>
           <div className={styles.pic}>
               <img src={u.avatarURL}/>
           </div>
            <div>
                {u.followed
                    ? <button onClick={() => {
                        props.unfollow(u.id)
                    }}>unfollow</button>
                    : <button onClick={() => {
                        props.follow(u.id)
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
/* props.setUsers( [
     {id: 1, avatarURL: 'http://pikchyriki.net/avatar/krutye/100/21.jpg', followed: false, name: 'Pesya', status: 'Im a moron', location: {city: 'Uriypinsk', country: 'Russia'}},
     {id: 2, avatarURL: 'http://pikchyriki.net/avatar/krutye/100/21.jpg', followed: true, name: 'Alkogolik', status: 'Boris durak', location: {city: 'Gent', country: 'Belgium'}},
     {id: 3, avatarURL: 'http://pikchyriki.net/avatar/krutye/100/21.jpg', followed: true, name: 'Tetris', status: 'lulz', location: {city: 'Moscow', country: 'Russia'}},
     {id: 4, avatarURL: 'http://pikchyriki.net/avatar/krutye/100/21.jpg', followed: false, name: 'Joe', status: 'hi Im Joe', location: {city: 'Sydney', country: 'Australia'}},
 ])
     }*/