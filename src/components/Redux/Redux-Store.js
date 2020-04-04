import {combineReducers, createStore} from "redux";
import profilePageReducer from "./ProfileReducer";
import dialogsPageReducer from "./DialogsReducer";
import usersReducer from "./UsersReducer";
import AuthReducer from "./AuthReducer";


let reducers = combineReducers({
    profilePage: profilePageReducer,
    dialogsPage: dialogsPageReducer,
    usersPage: usersReducer,
    auth: AuthReducer,
})
const store = createStore(reducers);

window.store = store;

export default store;