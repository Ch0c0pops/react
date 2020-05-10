import React from 'react';
import classes from './MyPosts.module.css';
import Post from './Post/Post';
import {Field, reduxForm} from "redux-form";
import {maxLengthCreator, required} from "../../../Utilits/Validators";
import {Textarea} from "../../../Common/FormControls";

const maxLength10 = maxLengthCreator(10);

const newPostForm = (props) => {
    return (<form onSubmit={props.handleSubmit}>
            <div>
                <Field component={Textarea} name='newPost' validate={[maxLength10, required]}/>
            </div>
            <div>
                <button>Addpost</button>
            </div>
        </form>
    )
};
const ReduxNewPostForm = reduxForm({form: 'addNewPost'})(newPostForm);

const MyPosts = (props) => {

    let postsElements = props.postsData.map(post => <Post message={post.message} likeCount={post.likes}/>);

    let addNewPost = (data) => {
        props.addPost(data.newPost);
    };
    return <div className={classes.postsBlock}>

        <div>
            <h2>My posts</h2>
        </div>
        <div>
            <ReduxNewPostForm onSubmit={addNewPost}/>
        </div>
        <div className={classes.myPosts}>
            {postsElements}
        </div>
    </div>
}

export default MyPosts; 