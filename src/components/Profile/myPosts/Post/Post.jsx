import React from 'react';
import classes from './Post.module.css';
import { tsPropertySignature } from '@babel/types';

const Post = (props) => {
  return <div className={classes.content}>

    <div className={classes.Post}>
      <img src='https://klike.net/uploads/posts/2019-03/1551511784_4.jpg'></img>
      {props.message}
      
      <div>
        <span>Likes </span>{props.likeCount}
      </div>
    </div>
  </div>
}
  
export default Post; 