import React from 'react';
import {addPostActionCreator, updateNewPostTextActionCreator} from "../../Redux/ProfileReducer";
import MyPosts from "./MyPosts";


const MyPostsContainer = (props) => {
    let state = props.store.getState();

    let addNewPost = () => {
        props.store.dispatch(addPostActionCreator());
    };

    let onTextChange = (txt) => {
        props.store.dispatch(updateNewPostTextActionCreator(txt));
    };
    return (<MyPosts updateNewPostText={onTextChange}
                     addPost={addNewPost}
                     postsData={state.profilePage.postsData}
                     newPostText={state.profilePage.newPostText}/>)
}

export default MyPostsContainer;