import React from "react";
import styles from './Users.module.css';
import * as axios from 'axios';
import userAvatar from './../../Assets/Images/userAvatar.jpg'

class Users extends React.Component {
    constructor(props) {
        super(props)
    };

    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}
        &count=${this.props.pageSize}`)
            .then(response => {
                this.props.setUsers(response.data.items);
                this.props.setTotalCount(response.data.totalCount);
            })
    };

    usersPageChanged(newPage){
        this.props.setCurrentPage(newPage);
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${newPage}
        &count=${this.props.pageSize}`)
            .then(response => {
                this.props.setUsers(response.data.items);
            })
    };

    render() {
        let pagesAmount = Math.ceil(this.props.totalUsersCount / this.props.pageSize);
        let pages = [];
        for (let i = 1; i <= pagesAmount; i++) {
            pages.push(i)
        }
        ;

        return <div>
            <div>

                {pages.map(p => {
                    //  return <button className={this.props.currentPage === p && styles.activeButton}>{p}</button>})}
                    return <span className={this.props.currentPage === p && styles.activeButton}
                                 onClick={() => this.usersPageChanged(p)}>{p}</span>
                })}
            </div>

            {this.props.users.map(u => <div key={u.id}>

       <span>
           <div className={styles.pic}>
               <img src={u.photos.small != null ? u.photos.small : userAvatar}/>
           </div>
            <div>
                {u.followed
                    ? <button onClick={() => {
                        this.props.unfollow(u.id)
                    }}>unfollow</button>
                    : <button onClick={() => {
                        this.props.follow(u.id)
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
    }
}

export default Users;
