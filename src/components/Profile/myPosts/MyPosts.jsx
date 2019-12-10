import React from 'react';
import classes from './MyPosts.module.css';
import Post from './Post/Post';

const MyPosts = (props) => {

debugger;
    let postsElements = props.postsData.map(post => <Post message={post.message} likeCount={post.likes}/>)
    return <div className={classes.postsBlock}>

        <div>
            <h2>My posts</h2>
        </div>
        <div>
            <div><textarea></textarea></div>
            <div>
                <button>Add post</button>
            </div>
        </div>
        <div className={classes.myPosts}>
            {postsElements}
        </div>
    </div>
}

export default MyPosts; 