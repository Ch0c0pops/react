import * as serviceWorker from './serviceWorker';
import store from "./components/Redux/Redux-Store";
import ReactDOM from "react-dom";
import React from "react";
import SamuraiJSApp from "./App";

const API_KEY = '110834f4-4de1-441e-9bfb-f3d1fda8381b';

    ReactDOM.render(
       <SamuraiJSApp/>, document.getElementById('root'));

serviceWorker.unregister();
store=window.store;