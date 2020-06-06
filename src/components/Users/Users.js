import React from 'react';
import User from './User';
import UsersPagination from "../../Common/UsersPagination";

let Users = ({totalItemsCount, pageSize, currentPage, usersPageChanged, users, followRequest, followThunk,
                 unfollowThunk, ...props}) => {
    return <div>
        <UsersPagination totalItemsCount={totalItemsCount} pageSize={pageSize}
                         currentPage={currentPage} usersPageChanged={usersPageChanged}/>

        {users.map(u => <User key={u.id} user={u} followRequest={followRequest} followThunk={followThunk}
                              unfollowThunk={unfollowThunk}/>)}
    </div>
};
export default Users;