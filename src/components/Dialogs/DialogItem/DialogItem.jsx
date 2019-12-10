import React from 'react' ;
import classes from './../Dialogs.module.css';
import {NavLink} from "react-router-dom";

const DialogsItem = (props) => {
    let Path = '/dialogs/' + props.id;
    return (
        <div className={classes.dialog + ' ' + classes.active}>
            <NavLink to={Path}>{props.name}</NavLink>
        </div>
    )
}


export default DialogsItem;