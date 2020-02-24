import * as serviceWorker from './serviceWorker';
import store from "./components/Redux/Redux-Store";
import ReactDOM from "react-dom";
import App from "./App";
import React from "react";
import {BrowserRouter} from "react-router-dom";
import {Provider} from "react-redux";

let rerenderEntireTree = (state) => {
    ReactDOM.render(
        <BrowserRouter>
        <Provider store={store}>
            <App/>
        </Provider>
        </BrowserRouter>, document.getElementById('root'));
};

rerenderEntireTree();
store.subscribe(() => {

    rerenderEntireTree();
});

serviceWorker.unregister();
