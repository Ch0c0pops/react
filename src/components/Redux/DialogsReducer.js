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
    ]
};


const dialogsPageReducer = (state = initialReducer, action) => {

    switch (action.type) {
        case SEND_MESSAGE:
            let body= action.data;
            return {
                ...state,
                messagesData: [...state.messagesData, {id: 4, message: body}],

        }
        default:

            return state;
    }
}
export const sendMessageActionCreator = (data) => {
    return {type: SEND_MESSAGE, data}
};

export default dialogsPageReducer;