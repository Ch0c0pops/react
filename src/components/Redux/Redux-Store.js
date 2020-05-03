import {applyMiddleware, combineReducers, createStore} from "redux";
import profilePageReducer from "./ProfileReducer";
import dialogsPageReducer from "./DialogsReducer";
import usersReducer from "./UsersReducer";
import AuthReducer from "./AuthReducer";
import thunkMiddleWare from "redux-thunk";
import { reducer as formReducer } from 'redux-form';


let reducers = combineReducers({
    profilePage: profilePageReducer,
    dialogsPage: dialogsPageReducer,
    usersPage: usersReducer,
    auth: AuthReducer,
    form: formReducer,
});
const store = createStore(reducers, applyMiddleware(thunkMiddleWare));

window.store = store;

export default store;