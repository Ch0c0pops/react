import React from 'react' ;
import classes from './Dialogs.module.css';
import DialogsItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import {Redirect} from "react-router-dom";
import {Field, reduxForm} from "redux-form";



const newMessageForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field component='textarea' name='myNewMessage'></Field>
            </div>
            <div>
                <button>send message</button>
            </div>
        </form>
    )
};
const ReduxNewMessageForm = reduxForm({form: 'newMessage'})(newMessageForm);

const Dialogs = (props) => {
    let state = props.dialogsPage;
    let dialogsElements = state.dialogsData.map(
        dialog => <DialogsItem name={dialog.name} key={dialog.id} id={dialog.id}/>
    );
    let messagesElements = state.messagesData.map(message => <Message message={message.message} key={message.id}/>);
    let onSendMessageClick = (data) => {
        props.sendMessage(data.myNewMessage);
    };

    if (!props.isAuth) {
        return <Redirect to={'/Login'}/>
    }
    return (
        <div className={classes.dialogs}>
            <div className={classes.dialogsItems}>
                {dialogsElements}
            </div>
            <div className={classes.messages}>
                <div>{messagesElements}</div>
                <ReduxNewMessageForm onSubmit={onSendMessageClick}/>
            </div>
        </div>
    )
}

export default Dialogs;
