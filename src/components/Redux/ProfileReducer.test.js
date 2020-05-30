import profilePageReducer, {addPostActionCreator, deletePostAC} from "./ProfileReducer";
import React from 'react';

let state = {
    postsData: [
        {id: 1, message: 'howdy', likes: 3},
        {id: 2, message: 'chicken corn', likes: 25}
    ]
};


it('should increment postsData length', () => {
    let action = addPostActionCreator('hi');
    let newState = profilePageReducer(state, action);
    expect(newState.postsData.length).toBe(3);
});

it('should delete message from postsData', () => {
    let action = deletePostAC(1);
    let newState = profilePageReducer(state, action);
    expect(newState.postsData.length).toBe(1);
});