import * as serviceWorker from './serviceWorker';
import store from "./components/Redux/Redux-Store";
import ReactDOM from "react-dom";
import App from "./App";
import React from "react";
import StoreContext from "./StoreContext";

let rerenderEntireTree = (state) => {
    ReactDOM.render(
        <StoreContext.Provider value={store}>
            <App/>
        </StoreContext.Provider>,
        document.getElementById('root'));
};

rerenderEntireTree(store.getState());
store.subscribe(() => {
    let state = store.getState();
    rerenderEntireTree(state);
});

serviceWorker.unregister();
