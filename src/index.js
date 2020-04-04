import * as serviceWorker from './serviceWorker';
import store from "./components/Redux/Redux-Store";
import ReactDOM from "react-dom";
import App from "./App";
import React from "react";
import {BrowserRouter} from "react-router-dom";
import {Provider} from "react-redux";

const API_KEY = '5b5f72f1-a8a7-4748-9e84-4f7b48d7955a';

    ReactDOM.render(
        <BrowserRouter>
        <Provider store={store}>
            <App/>
        </Provider>
        </BrowserRouter>, document.getElementById('root'));

serviceWorker.unregister();
store=window.store;