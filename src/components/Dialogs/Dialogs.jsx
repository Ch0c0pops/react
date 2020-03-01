import React from 'react' ;
import classes from './Dialogs.module.css';
import DialogsItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";

const Dialogs = (props) => {
    let state = props.dialogsPage;
    let dialogsElements = state.dialogsData.map(
        dialog => <DialogsItem name={dialog.name} key={dialog.id} id={dialog.id}/>
        );
    let messagesElements = state.messagesData.map(message => <Message message={message.message} key={message.id}/>);
    let newMessageBody = state.newMessageBody;

    let onSendMessageClick = () => {
        props.sendMessage();
    }
    let onNewMessageChange = (event) => {
        let body = event.target.value;
        props.updateNewMessageBody(body);
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
