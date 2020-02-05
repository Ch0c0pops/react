let rerenderEntireTree = () =>{
    console.log('hi');
};

let state = {
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

};
export let addPost = () => {

    let newPost = {
        id: 5,
        message: state.profilePage.newPostText,
        likes: 4
    };
    state.profilePage.postsData.push(newPost);
    updateNewPostText('');
    rerenderEntireTree(state);
};

export let updateNewPostText = (newText) => {
    state.profilePage.newPostText = newText;
    rerenderEntireTree(state);
}

export const subscribe = (observer) =>{
    rerenderEntireTree = observer;
}
export default state;