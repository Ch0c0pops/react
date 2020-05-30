import React from 'react';
import styles from './UsersPagination.module.css'

let UsersPagination = ({totalUsersCount,pageSize,currentPage,usersPageChanged,...props}) => {
    let pagesAmount = Math.ceil(totalUsersCount / pageSize);
    let pages = [];
    for (let i = 1; i <= pagesAmount; i++) {
        pages.push(i)
    }

    return <div>
        <div>
            {pages.map(p => {
                return <span className={currentPage === p && styles.activeButton}
                             onClick={() => usersPageChanged(p)}>{p}</span>
            })}
        </div>
    </div>
};

export default UsersPagination;