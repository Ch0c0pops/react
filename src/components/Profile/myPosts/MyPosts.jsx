import React from 'react';
import classes from './MyPosts.module.css';
import Post from './Post/Post';
import {addPostActionCreator, updateNewPostTextActionCreator} from "../../Redux/State";

let newPostElement = React.createRef();
const MyPosts = (props) => {

    let postsElements = props.postsData.map(post => <Post message={post.message} likeCount={post.likes}/>);

    let addNewPost = () => {
        props.dispatch(addPostActionCreator());
    };

    let onTextChange = () =>{
        let txt = newPostElement.current.value;
        props.dispatch(updateNewPostTextActionCreator(txt));
    };
    return <div className={classes.postsBlock}>

        <div>
            <h2>My posts</h2>
        </div>
        <div>
            <div>
                <textarea onChange={onTextChange} ref={newPostElement}
                value={props.newPostText}/>
            </div>
            <div>
                <button onClick={addNewPost}>Add post</button>
            </div>
        </div>
        <div className={classes.myPosts}>
            {postsElements}
        </div>
    </div>
}

export default MyPosts; 