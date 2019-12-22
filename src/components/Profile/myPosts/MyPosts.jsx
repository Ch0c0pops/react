import React from 'react';
import classes from './MyPosts.module.css';
import Post from './Post/Post';

let newPostElement = React.createRef();

const MyPosts = (props) => {

    let postsElements = props.postsData.map(post => <Post message={post.message} likeCount={post.likes}/>);

    let addPost = () => {
        debugger;
        let text = newPostElement.current.value;
        props.addPost(text);
    };
    return <div className={classes.postsBlock}>

        <div>
            <h2>My posts</h2>
        </div>
        <div>
            <div>
                <textarea ref={newPostElement}></textarea>
            </div>
            <div>
                <button onClick={addPost}>Add post</button>
            </div>
        </div>
        <div className={classes.myPosts}>
            {postsElements}
        </div>
    </div>
}

export default MyPosts; 