const UPDATE_NEW_MESSAGE_BODY = 'UPDATE_NEW_MESSAGE_BODY';
const SEND_MESSAGE = 'SEND_MESSAGE';


let initialReducer = {
    dialogsData: [
        {id: 1, name: 'Pesya'},
        {id: 2, name: 'Vasya'},
        {id: 3, name: 'Tolik'},
        {id: 4, name: 'Alkogolik'}
    ],
    messagesData: [
        {id: 1, message: 'Hello'},
        {id: 2, message: 'World'},
        {id: 3, message: 'Great'}
    ],
    newMessageBody: ''
};


const dialogsPageReducer = (state = initialReducer, action) => {
    switch (action.type) {
        case UPDATE_NEW_MESSAGE_BODY:
            state.newMessageBody = action.body;
            return state;
        case SEND_MESSAGE:
            let body = state.newMessageBody;
            state.newMessageBody = '';
            state.messagesData.push({id: 4, message: body});
            return state;
        default:
            return state;
    }
}
export const sendMessageActionCreator = () => {
    return {type: SEND_MESSAGE}
};
export const updateNewMessageBodyActionCreator = (body) => {
    return {type: UPDATE_NEW_MESSAGE_BODY, body: body}
};

export default dialogsPageReducer;