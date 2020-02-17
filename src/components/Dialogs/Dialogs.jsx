import React from 'react' ;
import classes from './Dialogs.module.css';
import DialogsItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import {sendMessageActionCreator, updateNewMessageBodyActionCreator} from "../Redux/DialogsReducer";

const Dialogs = (props) => {
    let state = props.store.getState().dialogsPage;
    let dialogsElements = state.dialogsData.map(dialog => <DialogsItem id={dialog.id} name={dialog.name}/>);
    let messagesElements = state.messagesData.map(message => <Message message={message.message}/>);
    let newMessageBody = state.newMessageBody;

    let onSendMessageClick = () => {
        props.store.dispatch(sendMessageActionCreator());
    }
    let onNewMessageChange = (event) => {
        let body = event.target.value;
        props.store.dispatch(updateNewMessageBodyActionCreator(body));
    }
    return (
        <div className={classes.dialogs}>
            <div className={classes.dialogsItems}>
                {dialogsElements}
            </div>
            <div className={classes.messages}>
                <div>{messagesElements}</div>
                <div><textarea
                    value={newMessageBody} onChange={onNewMessageChange}></textarea></div>

                <div>
                    <button onClick={onSendMessageClick}>send message</button>
                </div>
            </div>
        </div>
    )
}

export default Dialogs;
