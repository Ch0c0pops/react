import React from 'react' ;
import {sendMessageActionCreator, updateNewMessageBodyActionCreator} from "../Redux/DialogsReducer";
import Dialogs from "./Dialogs";

const DialogsContainer = (props) => {
    let dialogsPage = props.store.getState().dialogsPage;

    let sendMessage = () => {
        props.store.dispatch(sendMessageActionCreator());
    }
    let updateNewMessageBody = (body) => {
        props.store.dispatch(updateNewMessageBodyActionCreator(body));
    }
    return (<Dialogs updateNewMessageBody={updateNewMessageBody}
                     sendMessage={sendMessage}
                     dialogsPage={dialogsPage}
    />)
}

export default DialogsContainer;
