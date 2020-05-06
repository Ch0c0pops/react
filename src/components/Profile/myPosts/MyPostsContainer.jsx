import React from 'react';
import {addPostActionCreator, updateNewPostTextActionCreator} from "../../Redux/ProfileReducer";
import MyPosts from "./MyPosts";
import {connect} from "react-redux";
import {reset} from 'redux-form';

let mapStateToProps = (state) => {
    return {
        postsData: state.profilePage.postsData,
        newPostText: state.profilePage.newPostText
    }
};

let mapDispatchToProps = (dispatch) => {
    return {
        updateNewPostText: (txt) => {
            dispatch(updateNewPostTextActionCreator(txt));
        },
        addPost: (data) => {
            dispatch(addPostActionCreator(data));
            dispatch(reset('addNewPost'));
        }
    }
};

const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts);

export default MyPostsContainer;