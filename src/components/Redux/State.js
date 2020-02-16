import profilePageReducer from "./ProfileReducer";
import dialogsPageReducer from "./DialogsReducer";

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
        this._state.profilePage.newPostText = newText;  //эта функция не нужна в принципе с приходом ProfilePageReducer
        this.rerenderEntireTree(this._state);
    },
    _callsubscriber() {
        console.log('state has been changed')
    },
    subscribe(observer) {
        this._callsubscriber = observer;
    },

    dispatch(action) {
        this._state.profilePage = profilePageReducer(this._state.profilePage, action);
        this._state.dialogsPage = dialogsPageReducer(this._state.dialogsPage, action);
        this._callsubscriber(this._state);
    }
}

export default store;