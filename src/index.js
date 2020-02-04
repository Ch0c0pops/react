import * as serviceWorker from './serviceWorker';
import state, {addPost, subscribe, updateNewPostText} from "./components/Redux/State";
import ReactDOM from "react-dom";
import App from "./App";
import React from "react";

let rerenderEntireTree = (state) => {
    ReactDOM.render(
        <App state={state} addPost={addPost} updateNewPostText={updateNewPostText}/>,
        document.getElementById('root'));
};

rerenderEntireTree(state);
subscribe(rerenderEntireTree);

serviceWorker.unregister();
