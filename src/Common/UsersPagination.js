import React from 'react';
import styles from './UsersPagination.module.css'

let UsersPagination = ({totalItemsCount,pageSize,currentPage,usersPageChanged, portionSize=10,...props}) => {
    let pagesAmount = Math.ceil(totalItemsCount / pageSize);
    let pages = [];
    for (let i = 1; i <= pagesAmount; i++) {
        pages.push(i)
    }


    let pagePortionAmount = pagesAmount / portionSize;
    let [portionNumber, setPortionNumber] = React.useState(1);
    let prevPagePortion = (portionNumber -1) * portionSize;
    let nextPagePortion = portionNumber * portionSize;


    return <div>

        <div>
            {portionNumber > 1 && <button onClick={()=> setPortionNumber(portionNumber -1)}>prev</button>}

            {pages.filter(p=> p >= prevPagePortion && p<=nextPagePortion)
                .map(p => {
                return <span className={currentPage === p && styles.activeButton}
                             onClick={() => usersPageChanged(p)}>{p}</span>
            })}

            {pagePortionAmount > portionNumber && <button onClick={()=> setPortionNumber(portionNumber +1)}>next</button>}
        </div>

    </div>
};

export default UsersPagination;
