import * as serviceWorker from './serviceWorker';
import store from "./components/Redux/State";
import ReactDOM from "react-dom";
import App from "./App";
import React from "react";

let rerenderEntireTree = (state) => {
    ReactDOM.render(
        <App state={state}
             addPost={store.addPost.bind(store)}
             updateNewPostText={store.updateNewPostText.bind(store)}/>,
        document.getElementById('root'));
};

rerenderEntireTree(store.getState());
store.subscribe(rerenderEntireTree);

serviceWorker.unregister();
