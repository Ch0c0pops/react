const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT ='UPDATE-NEW-POST-TEXT';

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

    subscribe(observer) {
        this.rerenderEntireTree = observer;
    },

    dispatch(action) {
        if (action.type === 'ADD-POST') {
            let newPost = {
                id: 5,
                message: this._state.profilePage.newPostText,
                likes: 4
            };
            this._state.profilePage.postsData.push(newPost);
            this.updateNewPostText('');
            this.rerenderEntireTree(this._state);
        } else if (action.type === 'UPDATE-NEW-POST-TEXT') {
            this._state.profilePage.newPostText = action.newText;
            this.rerenderEntireTree(this._state);
        }
    },
};

export const addPostActionCreator = () =>{
    return {type: ADD_POST}
};
export const updateNewPostTextActionCreator = (txt) => {
    return {type: UPDATE_NEW_POST_TEXT, newText: txt}
};


export default store;