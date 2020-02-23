import React from 'react';
import {addPostActionCreator, updateNewPostTextActionCreator} from "../../Redux/ProfileReducer";
import MyPosts from "./MyPosts";
import StoreContext from "../../../StoreContext";


const MyPostsContainer = () => {
    return <StoreContext.Consumer>
        {store => {
            let state = store.getState();

            let addNewPost = () => {
                store.dispatch(addPostActionCreator());
            };

            let onTextChange = (txt) => {
                store.dispatch(updateNewPostTextActionCreator(txt));
            };
            return (<MyPosts updateNewPostText={onTextChange}
                             addPost={addNewPost}
                             postsData={state.profilePage.postsData}
                             newPostText={state.profilePage.newPostText}/>)
        }
        }
    </StoreContext.Consumer>
}

export default MyPostsContainer;