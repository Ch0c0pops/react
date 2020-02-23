import React from 'react' ;
import {sendMessageActionCreator, updateNewMessageBodyActionCreator} from "../Redux/DialogsReducer";
import Dialogs from "./Dialogs";
import StoreContext from "../../StoreContext";


const DialogsContainer = () => {

    return <StoreContext.Consumer>
        {store => {
            let sendMessage = () => {
                store.dispatch(sendMessageActionCreator());
            }
            let updateNewMessageBody = (body) => {
                store.dispatch(updateNewMessageBodyActionCreator(body));
            }
            return <Dialogs updateNewMessageBody={updateNewMessageBody}
                            sendMessage={sendMessage}
                            dialogsPage={store.getState().dialogsPage}/>
        }
        }
    </StoreContext.Consumer>
};

export default DialogsContainer;
