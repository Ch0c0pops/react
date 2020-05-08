import React from 'react' ;
import {sendMessageActionCreator} from "../Redux/DialogsReducer";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";
import {withAuthRedirect} from "../../HOC/withAuthRedirect";
import {compose} from "redux";
import {reset} from 'redux-form';

let mapStateToProps = (state) => {
    return {
        dialogsPage: state.dialogsPage
    }
};

let mapDispatchToProps = (dispatch) => {
    return {
        sendMessage: (data) => {
            dispatch(sendMessageActionCreator(data));
            dispatch(reset('newMessage'));
        }
    }
};

export default compose(connect(mapStateToProps, mapDispatchToProps),withAuthRedirect )(Dialogs);

