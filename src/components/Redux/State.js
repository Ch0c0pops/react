const ADD_POST = 'ADD_POST';
const UPDATE_NEW_POST_TEXT ='UPDATE_NEW_POST_TEXT';
const UPDATE_NEW_MESSAGE_BODY ='UPDATE_NEW_MESSAGE_BODY';
const SEND_MESSAGE = 'SEND_MESSAGE';

let store = {

    _state: {
        profilePage: {
            postsData: [
                {id: 1, message: 'howdy', likes: 3},
                {id: 2, message: 'chicken corn', likes: 25}
            ],
            newPostText: ''
        },
        dialogsPage: {
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
        }
    },

    getState() {
        return this._state
    },
    rerenderEntireTree() {
        console.log('hi');
    },

    updateNewPostText(newText) {
        this._state.profilePage.newPostText = newText;
        this.rerenderEntireTree(this._state);
    },
    _callsubscriber(){
        console.log('state has been changed')
    },
    subscribe(observer) {
        this._callsubscriber = observer;
    },

    dispatch(action) {
        if (action.type === ADD_POST) {
            let newPost = {
                id: 5,
                message: this._state.profilePage.newPostText,
                likes: 4
            };
            this._state.profilePage.postsData.push(newPost);
            this.updateNewPostText('');
            this._callsubscriber(this._state);
        } else if (action.type === UPDATE_NEW_POST_TEXT) {
            this._state.profilePage.newPostText = action.newText;
            this._callsubscriber(this._state);
        } else if (action.type === UPDATE_NEW_MESSAGE_BODY){
            this._state.dialogsPage.newMessageBody = action.body;
            this._callsubscriber(this._state);
        } else if (action.type === SEND_MESSAGE){
            let body = this._state.dialogsPage.newMessageBody;
            this._state.dialogsPage.newMessageBody = '';
           this._state.dialogsPage.messagesData.push({id: 4, message: body});
            this._callsubscriber(this._state);
        }
    },
};

export const addPostActionCreator = () =>{
    return {type: ADD_POST}
};
export const updateNewPostTextActionCreator = (txt) => {
    return {type: UPDATE_NEW_POST_TEXT, newText: txt}
};

export const sendMessageActionCreator = () =>{
    return {type: SEND_MESSAGE}
};
export const updateNewMessageBodyActionCreator = (body) => {
    return {type: UPDATE_NEW_MESSAGE_BODY, body: body}
};


export default store;