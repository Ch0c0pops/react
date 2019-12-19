import React from 'react' ;
import classes from './Dialogs.module.css';
import DialogsItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";



const Dialogs = (props) => {

    let dialogsElements = props.state.dialogsData.map(dialog => <DialogsItem id={dialog.id} name={dialog.name}/>);
    let messagesElements = props.state.messagesData.map(message => <Message message={message.message}/>);

    return (
        <div className={classes.dialogs}>
            <div className={classes.dialogsItems}>
                {dialogsElements}
            </div>
            <div className={classes.messages}>
                {messagesElements}
            </div>
        </div>
    )

}

export default Dialogs;
