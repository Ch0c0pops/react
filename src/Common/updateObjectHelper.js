import React from 'react';

export const updateObjectHelper =(item, itemId, newAction, newData )=>{
    return item.map(u => {
        if (u[itemId] === newAction) {
            return {...u, ...newData}
        }
        return u;
    })
}