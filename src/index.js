import * as serviceWorker from './serviceWorker';
import store from "./components/Redux/Redux-Store";
import ReactDOM from "react-dom";
import App from "./App";
import React from "react";

let rerenderEntireTree = (state) => {
    ReactDOM.render(
        <App state={state}
             dispatch={store.dispatch.bind(store)}
             store={store}/>,
        document.getElementById('root'));
};

rerenderEntireTree(store.getState());
store.subscribe(() => {
    let state = store.getState();
    rerenderEntireTree(state);
});

serviceWorker.unregister();
