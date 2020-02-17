const ADD_POST = 'ADD_POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE_NEW_POST_TEXT';


let initialReducer = {
    postsData: [
        {id: 1, message: 'howdy', likes: 3},
        {id: 2, message: 'chicken corn', likes: 25}
    ],
    newPostText: ''
};

const profilePageReducer = (state = initialReducer, action) => {
    switch (action.type) {
        case ADD_POST:
            let newPost = {
                id: 5,
                message: state.newPostText,
                likes: 4
            };
            state.postsData.push(newPost);
            state.newPostText = '';
            return state;
        case UPDATE_NEW_POST_TEXT:
            state.newPostText = action.newText;
        default:
            return state;
    }
}

export const addPostActionCreator = () => {
    return {type: ADD_POST}
};
export const updateNewPostTextActionCreator = (txt) => {
    return {type: UPDATE_NEW_POST_TEXT, newText: txt}
};

export default profilePageReducer;