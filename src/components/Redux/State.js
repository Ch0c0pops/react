import {rerenderEntireTree} from "../../render";

let dialogsData = [
    {id: 1, name: 'Pesya'},
    {id: 2, name: 'Vasya'},
    {id: 3, name: 'Tolik'},
    {id: 4, name: 'Alkogolik'}
];
let messagesData = [
    {id: 1, message: 'Hello'},
    {id: 2, message: 'World'},
    {id: 3, message: 'Great'}
];
let postsData = [
    {id: 1, message: 'howdy', likes: 3},
    {id: 2, message: 'chicken corn', likes: 25}
];

let state = {
    profilePage: {
        postsData: [
            {id: 1, message: 'howdy', likes: 3},
            {id: 2, message: 'chicken corn', likes: 25}
        ],
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
export let addPost = (postMessage) => {

    let newPost = {
        id: 5,
        message: postMessage,
        likes: 4
    };
    state.profilePage.postsData.push(newPost);
    rerenderEntireTree(state);
};


export default state;